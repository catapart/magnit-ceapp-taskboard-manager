// styles
import style from './history-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './history-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../../assets/icons/icons.asset';
import { ActionHistoryElement, ATTRIBUTENAME_ACTIVE, ATTRIBUTENAME_REVERSED } from '@magnit-ce/action-history';
import { createOptionElement, snapToStep } from '../../../resources/utils';
import { AppSettingKey, DataService } from '../../../data/data.service';
import { HistoryEntryRecord } from '../../../data/records/history-entry.record';

export const HistoryLengthValues = [0, 30, 50, 100, 150];

export enum HistoryPanelAttributes
{
}

export type HistoryPanelProperties = { [key in HistoryPanelAttributes]: string } &
{
};

export const DEFAULT_HISTORY_LENGTH = "30";
export const DEFAULT_PERSIST_DAYS = "7";

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
    static observedAttributes = [
        ...Object.values(HistoryPanelAttributes),
    ];

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

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        this.#applyPartAttributes();

        this.findElement<HTMLButtonElement>('undo').addEventListener('click', this.#undo_onClick.bind(this));
        this.findElement<HTMLButtonElement>('redo').addEventListener('click', this.#redo_onClick.bind(this));

        const actionHistory = this.getElement<ActionHistoryElement>('action-history');
        actionHistory.onBack = this.#actionHistory_onBack.bind(this);
        actionHistory.onForward = this.#actionHistory_onForward.bind(this);

        this.findElement('action-history-length').addEventListener("change", this.#historyLength_onChange.bind(this));
        this.findElement('apply-history-length-button').addEventListener("click", this.#applyHistoryLength_onClick.bind(this));

        this.findElement('clear-history-button').addEventListener("click", this.#clearHistory_onClick.bind(this));
    }
    #applyPartAttributes()
    {
        const identifiedElements = [...this.shadowRoot!.querySelectorAll('[id]')];
        for(let i = 0; i < identifiedElements.length; i++)
        {
            identifiedElements[i].part.add(identifiedElements[i].id);
        }
        const classedElements = [...this.shadowRoot!.querySelectorAll(':not(form-field,.postfix,.prefix,.container, .field-label)[class]')];
        for(let i = 0; i < classedElements.length; i++)
        {
            const classedElement = classedElements[i];
            classedElement.part.add(...classedElements[i].classList);
        }
        const formFieldElements = [...this.shadowRoot!.querySelectorAll('form-field')];
        for(let i = 0; i < formFieldElements.length; i++)
        {
            const formFieldElement = formFieldElements[i];
            const inputId = formFieldElement.id;
            
            const container = formFieldElement.querySelector('.container')!;
            container.part.add('container', 'field-container', `${inputId}-container`);
            const label = formFieldElement.querySelector('.field-label')!;
            label.part.add('container', 'field-label', `${inputId}-label`);
            const prefix = formFieldElement.querySelector('.prefix')!;
            prefix.part.add('container', 'field-prefix', `${inputId}-prefix`);
            const postfix = formFieldElement.querySelector('.postfix')!;
            postfix.part.add('container', 'field-postfix', `${inputId}-postfix`);
        }
    }

    prepareHistoryLength(historyLength: string)
    {
        const historyLengthOptions = Array.from(HistoryLengthValues).map(value => createOptionElement(value));
        this.findElement('action-history-length-values').append(...historyLengthOptions);

        this.findElement<HTMLInputElement>('action-history-length').value = historyLength;
        this.findElement('action-history-length-value').textContent = historyLength;
    }

    undo()
    {
        this.findElement<ActionHistoryElement>('action-history').back();
    }
    redo()
    {

        this.findElement<ActionHistoryElement>('action-history').forward();
    }
    
    #undo_onClick(_event: Event)
    {
        this.undo();
        this.dispatchEvent(new CustomEvent('undo', { bubbles: true, composed: true }));
    }
    #redo_onClick(_event: Event)
    {
        this.redo();
        this.dispatchEvent(new CustomEvent('redo', { bubbles: true, composed: true }));
    }
    async #actionHistory_onBack(target: HTMLElement, previous: HTMLElement|undefined, all: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
    {
        let refreshBoards = false;
        let refreshDeletedItems = false;

        const isLastUpdate = all.indexOf(target) == all.length - 1;
        if(isLastUpdate == true)
        {
            const recordType = target.querySelector('.target-type')?.textContent?.toLowerCase();
            if(recordType == 'board')
            {
                refreshBoards = true;
            }
            refreshDeletedItems = true;
        }
        this.dispatchEvent(new CustomEvent('historyback', { detail: { 
            target,
            previous,
            targetIndex,
            previousActiveEntryIndex,
            refreshBoards,
            refreshDeletedItems
        }, bubbles: true, composed: true }));
    }
    async #actionHistory_onForward(target: HTMLElement, previous: HTMLElement|undefined, all: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
    {
        let refreshBoards = false;
        let refreshDeletedItems = false;

        const isLastUpdate = all.indexOf(target) == all.length - 1;
        if(isLastUpdate == true)
        {
            const recordType = target.querySelector('.target-type')?.textContent?.toLowerCase();
            if(recordType == 'board')
            {
                refreshBoards = true;
            }
            refreshDeletedItems = true;
        }
        this.dispatchEvent(new CustomEvent('historyforward', { detail: { 
            target,
            previous,
            targetIndex,
            previousActiveEntryIndex,
            refreshBoards,
            refreshDeletedItems
        }, bubbles: true, composed: true }));
    }
    async #historyLength_onChange(event: Event)
    {
        const input = event.target as HTMLInputElement;
        snapToStep(input, HistoryLengthValues);

        this.findElement('action-history-length-value').textContent = input.value;
        
        let startIndex = parseInt(this.findElement<HTMLInputElement>('action-history-length').value);
        if(startIndex > 0) { startIndex--; } // fix zero index offset if non-zero number

        const actionHistory = this.findElement('action-history');
        this.dispatchEvent(new CustomEvent('preparehistoryitems', { detail: { actionHistory, startIndex }, bubbles: true, composed: true }));
    }
    async #applyHistoryLength_onClick(_event: Event)
    {
        const historyLength = this.findElement<HTMLInputElement>('action-history-length').value
        this.dispatchEvent(new CustomEvent('historylength', { detail: { historyLength }, bubbles: true, composed: true }));
    }
    #clearHistory_onClick(_event: Event)
    {
        this.dispatchEvent(new CustomEvent('clearhistory', { bubbles: true, composed: true }));
    }


     
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
    // async #handleActionEntryReverse(targetEntry: HTMLElement, previousEntry: HTMLElement|undefined, targetIndex: number, previousEntryIndex: number)
    // {
    //     const actionType = targetEntry.querySelector('.action-type')?.textContent?.toLowerCase();
    //     const recordType = targetEntry.querySelector('.target-type')?.textContent?.toLowerCase()
    //     const recordId = targetEntry.querySelector('.target-id')?.textContent;
    //     const entryId = targetEntry.getAttribute('data-entry-id');
    //     if(actionType == null || recordType == null || recordId == null || entryId == null)
    //     { 
    //         console.error(new Error('Required property was not found.')); return;
    //     }

    //     const channel = (recordType == 'board')
    //     ? this.#data.boards 
    //     : (recordType == 'list')
    //     ? this.#data.lists
    //     : (recordType == 'task')
    //     ? this.#data.tasks
    //     : (recordType == 'image')
    //     ? this.#data.customImages
    //     : null;
        
    //     if(channel == null) 
    //     {
    //         throw new Error(`Unknown record type: ${recordType}`);
    //     }

    //     if(actionType == 'create')
    //     {
    //         await channel.delete(recordId);
    //     }
    //     else if (actionType == 'update')
    //     {
    //         const currentEntry = await this.#data.historyEntries?.get(entryId);
    //         if(currentEntry == null) { throw new Error('Unable to find target entry.'); }
    //         const target = await channel.get(recordId);
    //         if(target == null) { throw new Error('Unable to find target record.'); }
    //         await this.#reverseUpdate(channel, currentEntry, target)
    //     }
    //     else if (actionType == 'delete')
    //     {
    //         await channel.restore(recordId);
    //     }
    //     else
    //     {
    //         console.error(`Unknown action type: ${actionType}`);
    //     }
        
    //     await this.#saveAppSetting(AppSettingKey.ActiveEntryIndex, (targetIndex > -1) ? targetIndex : null);
    // }
    // async #reverseUpdate(channel: BoardChannel | TaskListChannel | TaskChannel | CustomImageChannel, currentEntry: HistoryEntryRecord<HistoryEntryTargetType>, target: CustomImageRecord | TaskRecord | TaskListRecord | TaskBoardRecord)
    // {
    //     if(currentEntry.data.properties.updates != null)
    //     {
    //         let isRestorationUpdate = false;
    //         for(const [key, value] of currentEntry.data.properties.updates)
    //         {
    //             if(key == 'deletedTimestamp')
    //             {
    //                 isRestorationUpdate = true;
    //                 continue;
    //             }
    //             (target as unknown as any)[key] = value.from;
    //         }
    //         await channel.save(target as unknown as any);
    //         if(isRestorationUpdate == true)
    //         {
    //             await channel.delete(currentEntry.data.properties.id);
    //         }
    //     }

    //     if(currentEntry.data.properties.taskSettings != null && currentEntry.data.properties.taskSettings.updates != null)
    //     {
    //         const settingsTarget = await this.#data.taskSettings?.get(currentEntry.data.properties.taskSettings.id);
    //         if(settingsTarget == null) { throw new Error('Unable to find target record.'); }
    //         for(const [key, value] of currentEntry.data.properties.taskSettings.updates)
    //         {
    //             (settingsTarget as unknown as any)[key] = value.from;
    //         }
    //         await this.#data.taskSettings?.save(settingsTarget as unknown as any);
    //     }

    //     if(currentEntry.data.properties.backgroundImages != null)
    //     {
    //         const updatedImages: CustomImageRecord[] = [];
    //         const deletedImageIds: string[] = [];
    //         for(let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++)
    //         {
    //             const data = currentEntry.data.properties.backgroundImages[i];
    //             const imageTarget = await this.#data.customImages?.get(data.id);
    //             if(imageTarget == null) { throw new Error('Unable to find target record.'); }
    //             for(const [key, value] of currentEntry.data.properties.backgroundImages[i].updates!)
    //             {
    //                 // if boardId going from "" to id, this is an insert; treat it like undoing an image insert
    //                 if(key == 'boardId' && value.from == "")
    //                 {
    //                     deletedImageIds.push(currentEntry.data.properties.backgroundImages[i].id);
    //                     continue;
    //                 }
    //                 (imageTarget as unknown as any)[key] = value.from;
    //             }
    //             updatedImages.push(imageTarget);
    //         }
    //         await this.#data.customImages?.saveItems(updatedImages);
    //         await this.#data.customImages?.deleteItems(deletedImageIds);
    //     }
    // }
    // async #handelActionEntryActivate(targetEntry: HTMLElement, previousEntry: HTMLElement|undefined, targetIndex: number, previousEntryIndex: number)
    // {
    //     const previouslyActive = [...targetEntry.parentElement!.querySelectorAll('[part="active"]')] as HTMLElement[];
    //     for(let i = 0; i < previouslyActive.length; i++)
    //     {
    //         previouslyActive[i].part.remove('active');
    //         const descendants = [...previouslyActive[i].querySelectorAll('span')] as HTMLElement[];
    //         for(let i = 0; i < descendants.length; i++)
    //         {
    //             descendants[i].part.add('active');
    //         }
    //     }
    //     targetEntry.part.add('active');
    //     const descendants = [...targetEntry.querySelectorAll('span')] as HTMLElement[];
    //     for(let i = 0; i < descendants.length; i++)
    //     {
    //         descendants[i].part.add('active');
    //     }

    //     const actionType = targetEntry.querySelector('.action-type')?.textContent?.toLowerCase();
    //     const recordType = targetEntry.querySelector('.target-type')?.textContent?.toLowerCase()
    //     const recordId = targetEntry.querySelector('.target-id')?.textContent;
    //     const entryId = targetEntry.getAttribute('data-entry-id');
    //     if(actionType == null || recordType == null || recordId == null || entryId == null) { console.error(new Error('Required property was not found.')); return; }

    //     const channel = (recordType == 'board')
    //     ? this.#data.boards 
    //     : (recordType == 'list')
    //     ? this.#data.lists
    //     : (recordType == 'task')
    //     ? this.#data.tasks
    //     : (recordType == 'image')
    //     ? this.#data.customImages
    //     : null;
        
    //     if(channel == null) 
    //     {
    //         throw new Error(`Unknown record type: ${recordType}`);
    //     }

    //     if(actionType == 'create')
    //     {
    //         await channel.restore(recordId);
    //     }
    //     else if (actionType == 'update')
    //     {
    //         const currentEntry = await this.#data.historyEntries?.get(entryId);
    //         if(currentEntry == null) { throw new Error('Unable to find target entry.'); }
    //         const target = await channel.get(recordId);
    //         if(target == null) { throw new Error('Unable to find target record.'); }
    //         await this.#activateUpdate(channel, currentEntry, target);
    //     }
    //     else if (actionType == 'delete')
    //     {
    //         await channel.delete(recordId);
    //     }
    //     else
    //     {
    //         console.error(`Unknown action type: ${actionType}`);
    //     }

    //     await this.#saveAppSetting(AppSettingKey.ActiveEntryIndex, (targetIndex > -1) ? targetIndex : null);
    // }
    // async #activateUpdate(channel: BoardChannel | TaskListChannel | TaskChannel | CustomImageChannel, currentEntry: HistoryEntryRecord<HistoryEntryTargetType>, target: CustomImageRecord | TaskRecord | TaskListRecord | TaskBoardRecord)
    // {
    //     if(currentEntry.data.properties.updates != null)
    //     {
    //         let isRestorationUpdate = false;
    //         for(const [key, value] of currentEntry.data.properties.updates)
    //         {
    //             if(key == 'deletedTimestamp')
    //             {
    //                 isRestorationUpdate = true;
    //                 continue;
    //             }
    //             (target as unknown as any)[key] = value.to;
    //         }
    //         await channel.save(target as unknown as any);
    //         if(isRestorationUpdate == true)
    //         {
    //             await channel.restore(currentEntry.data.properties.id);
    //         }
    //     }

    //     if(currentEntry.data.properties.taskSettings != null && currentEntry.data.properties.taskSettings.updates != null)
    //     {
    //         const settingsTarget = await this.#data.taskSettings?.get(currentEntry.data.properties.taskSettings.id);
    //         if(settingsTarget == null) { throw new Error('Unable to find target record.'); }
    //         for(const [key, value] of currentEntry.data.properties.taskSettings.updates)
    //         {
    //             (settingsTarget as unknown as any)[key] = value.to;
    //         }
    //         await this.#data.taskSettings?.save(settingsTarget as unknown as any);
    //     }

    //     if(currentEntry.data.properties.backgroundImages != null)
    //     {
    //         // doesn't clear from image cache when undo after remove
    //         const updatedImages: CustomImageRecord[] = [];
    //         const restoredImageIds: string[] = [];
    //         for(let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++)
    //         {
    //             const data = currentEntry.data.properties.backgroundImages[i];
    //             const imageTarget = await this.#data.customImages?.get(data.id);
    //             if(imageTarget == null) { throw new Error('Unable to find target record.'); }
    //             for(const [key, value] of currentEntry.data.properties.backgroundImages[i].updates!)
    //             {
    //                 // if boardId going from "" to id, this is an insert; treat it like redoing an image insert
    //                 if(key == 'boardId' && value.from == "")
    //                 {
    //                     restoredImageIds.push(currentEntry.data.properties.backgroundImages[i].id);
    //                     continue;
    //                 }
    //                 (imageTarget as unknown as any)[key] = value.to;
    //             }
    //             updatedImages.push(imageTarget);
    //         }
    //         await this.#data.customImages?.saveItems(updatedImages);
    //         await this.#data.customImages?.restoreItems(restoredImageIds);
    //     }
    // }

    // async #addActionHistoryEntry<T extends HistoryEntryTargetType>(action: HistoryEntryType, type: T, properties: PropertiesType<T>)
    // {
    //     const historyLength = parseFloat(await this.#getAppSetting(AppSettingKey.HistoryLength) ?? DEFAULT_HISTORY_LENGTH);
    //     if(historyLength == 0) { return; }

    //     const channel = await this.#getChannel(this.#data.historyEntries, HISTORY_ERROR_MESSAGE, 'danger');
    //     const history = this.findElement('action-history');
    //     const historyEntries = [...history.children] as HTMLElement[];
    //     const elementsToRemove = historyEntries.filter(item => item.hasAttribute(ATTRIBUTENAME_REVERSED));
    //     const removeIds: string[] = [];
    //     if(elementsToRemove.length > 0)
    //     {
    //         for(let i = 0; i < elementsToRemove.length; i++)
    //         {
    //             const entryId = elementsToRemove[i].getAttribute('data-entry-id');
    //             if(entryId != null)
    //             {
    //                 removeIds.push(entryId)
    //             }
    //             elementsToRemove[i].remove();
    //         }
    //     }

    //     const data = new HistoryEntryData(type, properties);
    //     const entry = channel.create(data, action);
    //     await channel.save(entry);

    //     const entries = await channel.getAll('timestamp');
    //     const removeCount = entries.length - historyLength;
    //     if(removeCount > 0)
    //     {
    //         for(let i = 0; i < removeCount; i++)
    //         {
    //             removeIds.push(entries[i].id);
    //             history.querySelector(`[data-entry-id="${entries[i].id}"]`)?.remove();
    //         }
    //     }
    //     if(removeIds.length > 0)
    //     {
    //         await channel.deleteIfExists(removeIds);
    //     }

    //     const entryElement = this.#createActionHistoryEntryElement(entry);   
    //     history.append(entryElement);
    //     const activeIndex = [...history.children].indexOf(entryElement);
    //     await this.#saveAppSetting(AppSettingKey.ActiveEntryIndex, (activeIndex > -1) ? activeIndex : null);

    //     return entryElement;
    // }

    // async #prepareHistoryEntries(historyElement: ActionHistoryElement, startIndex: number)
    // {
    //     if(this.#data.historyEntries == null)
    //     {
    //         MessageCardElement.notify(`An error occurred accessing Action History data. Unable to refresh action history.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         console.error(new Error(`An error occurred accessing Action History data. Unable to refresh action history.`));
    //         return;
    //     }
    //     const entries = await this.#data.historyEntries.getAll('timestamp');

    //     for(let i = 0; i < entries.length; i++)
    //     {
    //         const element = historyElement.querySelector(`[data-entry-id="${entries[i].id}"]`) as HTMLElement;
    //         if(i < startIndex)
    //         {
    //             element.removeAttribute(ATTRIBUTE_PREPARED_FOR_DELETE);
    //         }
    //         else
    //         {
    //             element.toggleAttribute(ATTRIBUTE_PREPARED_FOR_DELETE, true);
    //         }
    //     }        
    // }
    // async #applyHistoryLength(actionHistoryLength: number)
    // {
    //     await this.#saveAppSetting(AppSettingKey.HistoryLength, actionHistoryLength);

    //     if(this.#data.historyEntries == null)
    //     {
    //         // todo: add toast to inform user
    //         console.warn(`An error occurred accessing Action History data. Unable to refresh action history.`);
    //         return;
    //     }
    //     const entries = await this.#data.historyEntries.getAll('timestamp');

    //     let startIndex = actionHistoryLength;
    //     if(startIndex > 0) { startIndex--; } // fix zero index offset if non-zero number

    //     const ids: string[] = [];
    //     for(let i = startIndex; i < entries.length; i++)
    //     {
    //         ids.push(entries[i].id);
    //     }
    //     await this.#data.historyEntries.deleteItems(ids);
    //     this.#refreshActionHistory();
    // }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, HistoryPanelElement);
}