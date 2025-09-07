// styles
import style from './history-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './history-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../../assets/icons/icons.asset';
import { ActionHistoryElement, ATTRIBUTENAME_ACTIVE, ATTRIBUTENAME_REVERSED, HistoryEntryType } from '@magnit-ce/action-history';
import { createOptionElement, snapToStep } from '../../../resources/utils';
import { AppSettingKey, DataService } from '../../../data/data.service';
import { HistoryEntryRecord } from '../../../data/records/history-entry.record';
import { FeedbackService } from '../../../services/feedback.service';
import { HistoryEntryData, HistoryEntryTargetType, PropertiesType } from '../../../data/history/history-entry-data';
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../../libs/ce-part-utils/ce-part-utils';

export const HistoryLengthValues = [0, 30, 50, 100, 150];

export const DEFAULT_HISTORY_LENGTH = "30";

const ATTRIBUTE_PREPARED_FOR_DELETE = "to-delete";

export type HistoryPanelProperties = 
{
    refreshBoardCollections: () => void;
    refreshCache: () => void;
}

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.ConfirmCheck,
    IconType.UndoRedo,
    IconType.Trash,
)}`;

const COMPONENT_TAG_NAME = 'history-panel';
export class HistoryPanelElement extends HTMLElement
{
    componentParts: Map<string, HTMLElement> = new Map();
    getElement<T extends HTMLElement = HTMLElement>(id: string)
    {
        if(this.componentParts.get(id) == null)
        {
            const part = this.findElement(id);
            if(part != null) { this.componentParts.set(id, part); }
        }

        return this.componentParts.get(id) as T;
    }
    findElement<T extends HTMLElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }

    //#region Housekeeping
    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        this.addEventListener('click', this.#onClick.bind(this));

        this.findElement('action-history-length').addEventListener("change", this.#historyLength_onChange.bind(this));

        const actionHistory = this.getElement<ActionHistoryElement>('action-history');
        actionHistory.onBack = this.#actionHistory_onBack.bind(this);
        actionHistory.onForward = this.#actionHistory_onForward.bind(this);

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);
    }
    
    #refreshBoardCollections!: () => void;
    #refreshCache!: () => void;
    async init(options: HistoryPanelProperties)
    {
        this.#refreshBoardCollections = options.refreshBoardCollections;
        this.#refreshCache = options.refreshCache;
        const historyLength = (await DataService.getAppSetting(AppSettingKey.HistoryLength)) ?? DEFAULT_HISTORY_LENGTH;
        this.#prepareHistoryLength(historyLength);
        this.refresh();
    }
    //#endregion Housekeeping

    //#region API
    async refresh()
    {
        const actionHistory = this.getElement<ActionHistoryElement>('action-history')
        actionHistory.innerHTML = "";
        actionHistory.toggleAttribute('prevent-removal', true);

        const records = await DataService.getHistoryEntries();
        if(records.length == 0)
        {
            return;
        }

        let activeEntryIndex = await DataService.getAppSetting<number>(AppSettingKey.ActiveEntryIndex);
        if(activeEntryIndex != null && activeEntryIndex > records.length)
        {
            activeEntryIndex = records.length - 1;
        }

        let entries: HTMLElement[] = [];
        let activeEntry: HTMLElement | null = null;
        for(let i = 0; i < records.length; i++)
        {
            const record = records[i];
            const entry = this.#createActionHistoryEntryElement(record);
            entries.push(entry);
            if(i == activeEntryIndex)
            {
                entry.toggleAttribute(ATTRIBUTENAME_ACTIVE, true); 
                activeEntry = entry;
                activeEntry.part.add('active');
                const descendants = [...activeEntry.querySelectorAll('span')] as HTMLElement[];
                for(let i = 0; i < descendants.length; i++)
                {
                    descendants[i].part.add('active');
                }
                continue;
            }
            if(activeEntry != null)
            {
                entry.toggleAttribute(ATTRIBUTENAME_REVERSED, true);
            }
        }
        if(activeEntry == null)
        {
            entries = entries.map(item => { item.toggleAttribute(ATTRIBUTENAME_REVERSED, true); return item; });
        }
        actionHistory.append(...entries);
        
        requestAnimationFrame(() =>
        {
            actionHistory.toggleAttribute('prevent-removal', false);
        });
    }

    undo()
    {
        this.findElement<ActionHistoryElement>('action-history').back();
    }
    redo()
    {

        this.findElement<ActionHistoryElement>('action-history').forward();
    }

    async addActionHistoryEntry<T extends HistoryEntryTargetType>(action: HistoryEntryType, type: T, properties: PropertiesType<T>)
    {
        const historyLength = parseFloat(await DataService.getAppSetting(AppSettingKey.HistoryLength) ?? DEFAULT_HISTORY_LENGTH);
        if(historyLength == 0) { return; }

        const history = this.findElement('action-history');
        const historyEntries = [...history.children] as HTMLElement[];
        const elementsToRemove = historyEntries.filter(item => item.hasAttribute(ATTRIBUTENAME_REVERSED));
        const removeIds: string[] = [];
        if(elementsToRemove.length > 0)
        {
            for(let i = 0; i < elementsToRemove.length; i++)
            {
                const entryId = elementsToRemove[i].getAttribute('data-entry-id');
                if(entryId != null)
                {
                    removeIds.push(entryId)
                }
                elementsToRemove[i].remove();
            }
        }

        const data = new HistoryEntryData(type, properties);
        const entry = DataService.createHistoryEntry(data, action);
        await DataService.saveHistoryEntry(entry);

        const entries = await DataService.getHistoryEntries();
        const removeCount = entries.length - historyLength;
        if(removeCount > 0)
        {
            for(let i = 0; i < removeCount; i++)
            {
                removeIds.push(entries[i].id);
                history.querySelector(`[data-entry-id="${entries[i].id}"]`)?.remove();
            }
        }
        if(removeIds.length > 0)
        {
            await DataService.deleteHistoryEntriesIfExists(removeIds);
        }

        const entryElement = this.#createActionHistoryEntryElement(entry);   
        history.append(entryElement);
        const activeIndex = [...history.children].indexOf(entryElement);
        await DataService.saveAppSetting(AppSettingKey.ActiveEntryIndex, (activeIndex > -1) ? activeIndex : null);

        return entryElement;
    }

    async clearHistory()
    {
        const confirmed = await FeedbackService.getConfirmation('Are you sure you want to delete all app history? This CAN NOT be undone.', 'danger');
        if(confirmed == false) { return; }
        const ids = (await DataService.getHistoryEntries()).map(item => item.id);
        await DataService.deleteHistoryEntries(...ids);
        this.refresh();
    }
    //#endregion API

    //#region Internal
    #prepareHistoryLength(historyLength: string)
    {
        const historyLengthOptions = Array.from(HistoryLengthValues).map(value => createOptionElement(value));
        this.findElement('action-history-length-values').append(...historyLengthOptions);

        this.findElement<HTMLInputElement>('action-history-length').value = historyLength;
        this.findElement('action-history-length-value').textContent = historyLength;
    }
    async #prepareHistoryEntries(historyElement: ActionHistoryElement, startIndex: number)
    {
        const entries = await DataService.getHistoryEntries();

        for(let i = 0; i < entries.length; i++)
        {
            const element = historyElement.querySelector(`[data-entry-id="${entries[i].id}"]`) as HTMLElement;
            if(i < startIndex)
            {
                element.removeAttribute(ATTRIBUTE_PREPARED_FOR_DELETE);
            }
            else
            {
                element.toggleAttribute(ATTRIBUTE_PREPARED_FOR_DELETE, true);
            }
        }        
    }
    async #applyHistoryLength(actionHistoryLength: number)
    {
        await DataService.saveAppSetting(AppSettingKey.HistoryLength, actionHistoryLength);

        const entries = await DataService.getHistoryEntries();

        let startIndex = actionHistoryLength;
        if(startIndex > 0) { startIndex--; } // fix zero index offset if non-zero number

        const ids: string[] = [];
        for(let i = startIndex; i < entries.length; i++)
        {
            ids.push(entries[i].id);
        }
        await DataService.deleteHistoryEntries(...ids);
        this.refresh();
    }
    #createActionHistoryEntryElement(entry: HistoryEntryRecord)
    {
        const element = document.createElement('div');
        element.toggleAttribute('data-entry', true);
        element.setAttribute('timestamp', entry.timestamp.toString());
        element.setAttribute('data-entry-id', entry.id);
        element.setAttribute('part', "action-history-entry");
        element.classList.add('action-history-entry');
        // element.setAttribute('slot', "action-history");
        element.innerHTML = `<span class="action-type" part="action-history-entry-type">${entry.action.toUpperCase()}</span>
        <span class="data" part="action-history-entry-data">
            <span class="target-type" part="action-history-target-type">${entry.data.targetType[0].toUpperCase()}${entry.data.targetType.substring(1)}</span>
            <span class="target-id" part="action-history-target-id">${entry.data.properties.id}</span>
        </span>`;
        return element;
    }
    async #handleActionEntryReverse(targetEntry: HTMLElement, targetIndex: number)
    {
        const actionType = targetEntry.querySelector('.action-type')?.textContent?.toLowerCase();
        const recordType = targetEntry.querySelector('.target-type')?.textContent?.toLowerCase()
        const recordId = targetEntry.querySelector('.target-id')?.textContent;
        const entryId = targetEntry.getAttribute('data-entry-id');
        if(actionType == null || recordType == null || recordId == null || entryId == null)
        { 
            console.error(new Error('Required property was not found.')); return;
        }

        const channel = (recordType == 'board')
        ? DataService.data.boards 
        : (recordType == 'list')
        ? DataService.data.lists
        : (recordType == 'task')
        ? DataService.data.tasks
        : (recordType == 'image')
        ? DataService.data.customImages
        : null;
        
        if(channel == null) 
        {
            throw new Error(`Unknown record type: ${recordType}`);
        }

        if(actionType == 'create')
        {
            await channel.delete(recordId);
        }
        else if (actionType == 'update')
        {
            const currentEntry = await DataService.getHistoryEntry(entryId);
            if(currentEntry == null) { throw new Error('Unable to find target entry.'); }
            const target = await channel.get(recordId);
            if(target == null) { throw new Error('Unable to find target record.'); }
            await DataService.reverseUpdate(channel, currentEntry, target)
        }
        else if (actionType == 'delete')
        {
            await channel.restore(recordId);
        }
        else
        {
            console.error(`Unknown action type: ${actionType}`);
        }
        
        await DataService.saveAppSetting(AppSettingKey.ActiveEntryIndex, (targetIndex > -1) ? targetIndex : null);
    }
    async #handleActionEntryActivate(targetEntry: HTMLElement, targetIndex: number)
    {
        const previouslyActive = [...targetEntry.parentElement!.querySelectorAll('[part="active"]')] as HTMLElement[];
        for(let i = 0; i < previouslyActive.length; i++)
        {
            previouslyActive[i].part.remove('active');
            const descendants = [...previouslyActive[i].querySelectorAll('span')] as HTMLElement[];
            for(let i = 0; i < descendants.length; i++)
            {
                descendants[i].part.add('active');
            }
        }
        targetEntry.part.add('active');
        const descendants = [...targetEntry.querySelectorAll('span')] as HTMLElement[];
        for(let i = 0; i < descendants.length; i++)
        {
            descendants[i].part.add('active');
        }

        const actionType = targetEntry.querySelector('.action-type')?.textContent?.toLowerCase();
        const recordType = targetEntry.querySelector('.target-type')?.textContent?.toLowerCase()
        const recordId = targetEntry.querySelector('.target-id')?.textContent;
        const entryId = targetEntry.getAttribute('data-entry-id');
        if(actionType == null || recordType == null || recordId == null || entryId == null) { console.error(new Error('Required property was not found.')); return; }

        const channel = (recordType == 'board')
        ? DataService.data.boards 
        : (recordType == 'list')
        ? DataService.data.lists
        : (recordType == 'task')
        ? DataService.data.tasks
        : (recordType == 'image')
        ? DataService.data.customImages
        : null;
        
        if(channel == null) 
        {
            throw new Error(`Unknown record type: ${recordType}`);
        }

        if(actionType == 'create')
        {
            await channel.restore(recordId);
        }
        else if (actionType == 'update')
        {
            const currentEntry = await DataService.getHistoryEntry(entryId);
            if(currentEntry == null) { throw new Error('Unable to find target entry.'); }
            const target = await channel.get(recordId);
            if(target == null) { throw new Error('Unable to find target record.'); }
            await DataService.activateUpdate(channel, currentEntry, target);
        }
        else if (actionType == 'delete')
        {
            await channel.delete(recordId);
        }
        else
        {
            console.error(`Unknown action type: ${actionType}`);
        }

        await DataService.saveAppSetting(AppSettingKey.ActiveEntryIndex, (targetIndex > -1) ? targetIndex : null);
    }

    //#region Handlers
    #onClick(event: Event)
    {
        const composedPath = event.composedPath().filter(item => item instanceof HTMLElement);

        const undoButton = composedPath.find(item => item.id == "undo-button");
        if(undoButton != null)
        {
            this.undo();
            return;
        }
        
        const redoButton = composedPath.find(item => item.id == "redo-button");
        if(redoButton != null)
        {
            this.redo();
            return;
        }
        
        const applyHistoryLengthButton = composedPath.find(item => item.id == 'apply-history-length-button');
        if(applyHistoryLengthButton != null)
        {
            const historyLength = this.findElement<HTMLInputElement>('action-history-length').value;
            this.#applyHistoryLength(parseInt(historyLength));
            return;
        }

        const clearHistoryButton = composedPath.find(item => item.id == 'clear-history-button');
        if(clearHistoryButton != null)
        {
            this.clearHistory();
            return;
        }
    }
    async #historyLength_onChange(event: Event)
    {
        const input = event.target as HTMLInputElement;
        snapToStep(input, HistoryLengthValues);

        this.findElement('action-history-length-value').textContent = input.value;
        
        let startIndex = parseInt(this.findElement<HTMLInputElement>('action-history-length').value);
        if(startIndex > 0) { startIndex--; } // fix zero index offset if non-zero number

        const actionHistory = this.findElement<ActionHistoryElement>('action-history');
        this.#prepareHistoryEntries(actionHistory, startIndex);
    }
    async #actionHistory_onBack(target: HTMLElement, previous: HTMLElement|undefined, toReverse: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
    {
        let refreshBoards = false;
        // let refreshDeletedItems = false;

        // const actionHistory = this.findElement<ActionHistoryElement>('action-history');
        // const items = [...actionHistory.children];

        // console.log(target, toReverse);

        for(let i = 0; i < toReverse.length; i++)
        {
            const entry = toReverse[i];
            const recordType = entry.querySelector('.target-type')?.textContent?.toLowerCase();
            if(recordType == 'board')
            {
                refreshBoards = true;
            }
            await this.#handleActionEntryReverse(entry, targetIndex);
        }

        if(refreshBoards == true)
        {
            this.#refreshBoardCollections();
        }
        // if(refreshDeletedItems == true)
        // {
            this.#refreshCache();
        // }
    }
    async #actionHistory_onForward(target: HTMLElement, previous: HTMLElement|undefined, toActivate: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
    {
        let refreshBoards = false;
        // let refreshDeletedItems = false;

        // const isLastUpdate = all.indexOf(target) == all.length - 1;
        // if(isLastUpdate == true)
        // {
        //     const recordType = target.querySelector('.target-type')?.textContent?.toLowerCase();
        //     if(recordType == 'board')
        //     {
        //         refreshBoards = true;
        //     }
        //     refreshDeletedItems = true;
        // }

        for(let i = 0; i < toActivate.length; i++)
        {
            const entry = toActivate[i];
            const recordType = entry.querySelector('.target-type')?.textContent?.toLowerCase();
            if(recordType == 'board')
            {
                refreshBoards = true;
            }
            await this.#handleActionEntryActivate(entry, targetIndex);
        }
        // await this.#handleActionEntryActivate(target, previous, targetIndex, previousActiveEntryIndex);
        if(refreshBoards == true)
        {
            this.#refreshBoardCollections();
        }
        // if(refreshDeletedItems == true)
        // {
            this.#refreshCache();
        // }
    }
    //#endregion Handlers

    // #applyPartAttributes()
    // {
    //     const identifiedElements = [...this.shadowRoot!.querySelectorAll('[id]')];
    //     for(let i = 0; i < identifiedElements.length; i++)
    //     {
    //         identifiedElements[i].part.add(identifiedElements[i].id);
    //     }
    //     const classedElements = [...this.shadowRoot!.querySelectorAll(':not(form-field,.postfix,.prefix,.container, .field-label)[class]')];
    //     for(let i = 0; i < classedElements.length; i++)
    //     {
    //         const classedElement = classedElements[i];
    //         classedElement.part.add(...classedElements[i].classList);
    //     }
    //     const formFieldElements = [...this.shadowRoot!.querySelectorAll('form-field')];
    //     for(let i = 0; i < formFieldElements.length; i++)
    //     {
    //         const formFieldElement = formFieldElements[i];
    //         const inputId = formFieldElement.id;
            
    //         const container = formFieldElement.querySelector('.container')!;
    //         container.part.add('container', 'field-container', `${inputId}-container`);
    //         const label = formFieldElement.querySelector('.field-label')!;
    //         label.part.add('container', 'field-label', `${inputId}-label`);
    //         const prefix = formFieldElement.querySelector('.prefix')!;
    //         prefix.part.add('container', 'field-prefix', `${inputId}-prefix`);
    //         const postfix = formFieldElement.querySelector('.postfix')!;
    //         postfix.part.add('container', 'field-postfix', `${inputId}-postfix`);
    //     }
    // }
    //#endregion Internal
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, HistoryPanelElement);
}