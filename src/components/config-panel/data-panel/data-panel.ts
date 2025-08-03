// styles
import style from './data-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './data-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../../assets/icons/icons.asset';
import { EditableListElement } from '@magnit-ce/editable-list';
import { BasicActionProperties, HistoryEntryTargetType, PropertiesType, PropertyUpdate } from '../../../data/history/history-entry-data';
import { createOptionElement, snapToStep } from '../../../resources/utils';
import { AppSettingKey, DataService } from '../../../data/data.service';
import { TaskBoardRecord } from '../../../data/records/task-board.record';
import { TaskListRecord } from '../../../data/records/task-list.record';
import { TaskRecord } from '../../../data/records/task.record';
import { CustomImageRecord } from '../../../data/records/custom-image.record';
import { FeedbackService } from '../../../services/feedback.service';
import { HistoryEntryType } from '@magnit-ce/action-history';
import { HistoryEntryRecord } from '../../../data/records/history-entry.record';
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../../libs/ce-part-utils/ce-part-utils';

export const DaysToPersistValues = [0, 7, 30];
export const DEFAULT_PERSIST_DAYS = "7";

export type DataPanelProperties = 
{
    openImportManager: (data: any) => void;
    openBoard: (id: string) => void;
    refreshActionHistory: () => void;
    refreshBoardCollections: () => void;
    refreshRecentBoards: () => void;
    closeBoard: () => void;
    addActionHistoryEntry: <T extends HistoryEntryTargetType>(action: HistoryEntryType, type: T, properties: PropertiesType<T>) => void;
}


const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.File,
    IconType.Import,
    IconType.Trash,
    IconType.ConfirmCheck,
    IconType.Restore,
)}`;

const COMPONENT_TAG_NAME = 'data-panel';
export class DataPanelElement extends HTMLElement
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
        this.findElement('data-persist-days').addEventListener("change", this.#daysToPersist_onChange.bind(this));
        this.findElement<EditableListElement>('deleted-items').addEventListener('remove', this.#deletedItems_onRemove.bind(this));
        this.findElement<EditableListElement>('deleted-images').addEventListener('remove', this.#deletedImages_onRemove.bind(this));

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);
    }
    //#endregion Housekeeping

    //#region API

    #openImportManager!: (data: any) => void;
    #openBoard!: (data: any) => void;
    #closeBoard!: () => void;
    #refreshActionHistory!: () => void;
    #refreshBoardCollections!: () => void;
    #refreshRecentBoards!: () => void;
    #addActionHistoryEntry!: <T extends HistoryEntryTargetType>(action: HistoryEntryType, type: T, properties: PropertiesType<T>) => void;
    async init(options: DataPanelProperties)
    {
        this.#openImportManager = options.openImportManager;
        this.#openBoard = options.openBoard;
        this.#refreshActionHistory = options.refreshActionHistory;
        this.#refreshBoardCollections = options.refreshBoardCollections;
        this.#refreshRecentBoards = options.refreshRecentBoards;
        this.#closeBoard = options.closeBoard;
        this.#addActionHistoryEntry = options.addActionHistoryEntry;

        const importFileInput = this.getElement('import-board-file');
        importFileInput.addEventListener('change', () =>
        {
            //@ts-ignore
            const value = importFileInput.value;
            
            if(value != null)
            {
                this.getElement('import-button').toggleAttribute('disabled', false);
            }
            else
            {
                this.getElement('import-button').toggleAttribute('disabled', true);
            }
            // console.log(importFileInput.value);
        })

        const daysToPersistData = (await DataService.getAppSetting(AppSettingKey.DaysToPersistData)) ?? DEFAULT_PERSIST_DAYS;
        this.#prepareDaysToPersistOptions(daysToPersistData);
        this.refreshCache();
    }
    async refreshCache()
    {
        const deletedItems = [];
        const [ deletedBoards, deletedLists, deletedTasks, deletedImages ] = await DataService.getDeletedItems();

        for(let i = 0; i < deletedBoards.length; i++)
        {
            const record = deletedBoards[i];
            const element = this.#createDeletedItem(record, 'board', true, record.deletedTimestamp!);
            deletedItems.push(element);
        }
        for(let i = 0; i < deletedLists.length; i++)
        {
            const record = deletedLists[i];
            const canRestore = deletedBoards.find(item => item.id == record.boardId && item.deletedTimestamp != null) == null;
            const element = this.#createDeletedItem(record, 'list', canRestore, record.deletedTimestamp!);
            deletedItems.push(element);
        }
        for(let i = 0; i < deletedTasks.length; i++)
        {
            const record = deletedTasks[i];
            const canRestore = deletedBoards.find(item => item.id == record.boardId && item.deletedTimestamp != null) == null;
            const element = this.#createDeletedItem(record, 'task', canRestore, record.deletedTimestamp!);
            deletedItems.push(element);
        }

        const deletedImageElements: HTMLElement[] = [];
        for(let i = 0; i < deletedImages.length; i++)
        {
            const record = deletedImages[i];
            const element = this.#createDeletedItem(record, 'image', true, record.deletedTimestamp!);
            deletedImageElements.push(element);
        }

        // deleted images
        const deletedImagesElement = this.findElement<EditableListElement>('deleted-images');
        [...deletedImagesElement.children].forEach(item => { if(!(item instanceof HTMLTemplateElement)) { item.remove(); } });
        deletedImagesElement.append(...deletedImageElements);

        // deleted items
        const deletedItemsElement = this.findElement<EditableListElement>('deleted-items');
        [...deletedItemsElement.children].forEach(item => { if(!(item instanceof HTMLTemplateElement)) { item.remove(); } });
        deletedItemsElement.append(...deletedItems);
    }
    async clearData()
    {
        const confirmed = await FeedbackService.getConfirmation('Are you sure you want to delete all data associated with the app? This CAN NOT be undone.', 'danger');
        if(confirmed == false) { return; }
        this.#closeBoard();
        await DataService.clearAllData();
        this.#refreshBoardCollections();
        this.#refreshRecentBoards();
        this.#refreshActionHistory();
        this.refreshCache();
    }
    //#endregion API

    

    //#region Management
    #prepareDaysToPersistOptions(daysToPersist: string)
    {
        const daysToPersistOptions = Array.from(DaysToPersistValues).map(value => createOptionElement(value));
        this.findElement('data-persist-days-values').append(...daysToPersistOptions);

        this.findElement<HTMLInputElement>('data-persist-days').value = daysToPersist;        
        this.findElement('data-persist-days-value').textContent = daysToPersist;
    }

    #createDeletedItem(data: unknown, recordType: 'board'|'list'|'task'|'image', canRestore: boolean, timestamp: number)
    {
        const item = document.createElement('div');
        item.setAttribute('data-record-type', recordType);
        item.setAttribute('part', 'deleted-item');
        item.classList.add('deleted-item');
        // item.setAttribute('slot', (recordType == 'image' ? 'deleted-images' : 'deleted-items'));
        item.setAttribute('data-timestamp', timestamp.toString());

        const label = document.createElement('span');
        label.setAttribute('part', 'deleted-item-label');
        label.classList.add('deleted-item-label');

        let record: TaskBoardRecord|TaskListRecord|TaskRecord|CustomImageRecord;
        if(recordType == 'board')
        {
            record = data as TaskBoardRecord;
            label.textContent = record.name;
        }
        else if (recordType == 'list')
        {
            record = data as TaskListRecord;
            label.textContent = record.name;
        }
        else if (recordType == 'task')
        {
            record = data as TaskRecord;
            label.textContent = (record.description.trim() == "") ? "[Blank Task]" : record.description;
        }
        else if (recordType == 'image')
        {
            record = data as CustomImageRecord;
            label.textContent = record.name;
        }
        else
        {
            throw new Error('Unknown deleted record type');
        }

        item.setAttribute('data-record-id', record.id);

        item.append(label);

        if(canRestore == false)
        {
            item.dataset.restore = 'false';
        }

        return item;
    }


    async #deleteItem(item: HTMLElement, refresh: boolean = true)
    {        
        const recordId = item.dataset.recordId;
        if(recordId == null) { throw new Error('Unable to manage entry with unset "data-record-id" attribute'); }
        const recordType = item.dataset.recordType;
        if(recordType == null) { throw new Error('Unable to manage entry with unset "data-record-type" attribute'); }
        
        const channel = (recordType == 'board')
        ? DataService.data.boards 
        : (recordType == 'list')
        ? DataService.data.lists
        : (recordType == 'task')
        ? DataService.data.tasks
        : null;
        if(channel == null)
        {
            FeedbackService.showErrorMessageCard("An error occurred deleting a cache item.");
            console.error(`Unable to delete entry with unknown record type.`);
            return;
        }

        await channel.delete(recordId, true);

        const historyEntries = await DataService.getHistoryEntries();
        const toDelete: string[] = [];
        for(let i = 0; i < historyEntries.length; i++)
        {
            const entry = historyEntries[i];
            const entryId = entry.data.properties.id;
            if(entryId == recordId)
            {
                toDelete.push(entry.id);
            }
        }

        await DataService.deleteHistoryEntries(...toDelete);

        if(refresh == true)
        {
            this.#refreshActionHistory();
        }
    }
    async #deleteImage(item: HTMLElement, refresh: boolean = true)
    {

        const recordId = item.dataset.recordId;
        if(recordId == null) { throw new Error('Unable to manage image entry with unset "data-record-id" attribute'); }
        await DataService.deleteImage(recordId, true);

        const historyEntries = await DataService.getHistoryEntries();
        const updatedEntries: HistoryEntryRecord[] = [];
        for(let i = 0; i < historyEntries.length; i++)
        {
            const entry = historyEntries[i];
            const imageUpdates = entry.data.properties.backgroundImages;
            if(imageUpdates == null)
            {
                continue;
            }
            const toKeep: BasicActionProperties[] = [];
            for(let j = 0; j < imageUpdates.length; j++)
            {
                if(imageUpdates[j].id != recordId)
                {
                    toKeep.push(imageUpdates[i]);
                }
            }
            entry.data.properties.backgroundImages = toKeep;
            updatedEntries.push(entry);
        }

        await DataService.saveHistoryEntries(...updatedEntries);

        if(refresh == true)
        {
            this.#refreshActionHistory();
        }
    }

    async #restoreDeletedItem(targetType: HistoryEntryTargetType|null, recordId: string, timestamp: number)
    {
        if(targetType == null)
        {
            console.error("Unable to restore record with unknown type or id");
            return;
        }
        const channel = (targetType == 'board')
        ? DataService.data.boards 
        : (targetType == 'list')
        ? DataService.data.lists
        : (targetType == 'task')
        ? DataService.data.tasks
        : null;

        if(channel == null)
        {
            console.error("Unable to restore record. Error accessing data.");
            return;
        }

        await channel.restore(recordId);
        const updates: Map<string, PropertyUpdate> = new Map([ ['deletedTimestamp', { from: timestamp, to: undefined }] ]);
        const properties = {
            id: recordId,
            updates
        };
        await this.#addActionHistoryEntry(HistoryEntryType.Update, targetType, properties);
        
        if(targetType == HistoryEntryTargetType.Board)
        {
            this.#openBoard(recordId);
            this.#refreshBoardCollections();
        }
        this.refreshCache();
    }
    //#endregion Management

    //#region Handlers
    #onClick(event: Event)
    {
        const composedPath = event.composedPath().filter(item => item instanceof HTMLElement);

        const importButton = composedPath.find(item => item.id == "import-button");
        if(importButton != null)
        {
            this.#importButton_onClick();
            return;
        }
        const applyDaysToPersistButton = composedPath.find(item => item.id == "apply-data-persist-days-button");
        if(applyDaysToPersistButton != null)
        {
            this.#applyDaysToPersist_onClick();
            return;
        }
        const clearDataButton = composedPath.find(item => item.id == "clear-data-button");
        if(clearDataButton != null)
        {
            this.#clearData_onClick();
            return;
        }
        const clearDeletedButton = composedPath.find(item => item.id == "clear-deleted-button");
        if(clearDeletedButton != null)
        {
            this.#clearDeleted_onClick();
            return;
        }
        const clearImagesButton = composedPath.find(item => item.id == "clear-image-cache-button");
        if(clearImagesButton != null)
        {
            this.#clearImageCache_onClick();
            return;
        }            
    }

    async #importButton_onClick()
    {
        const importFileInput = this.findElement<HTMLInputElement>('import-board-file');
        const boardDataFile = (importFileInput.files != null) ?importFileInput.files[0] : null;
        if(boardDataFile == null)
        { 
            FeedbackService.showErrorMessageCard(`An error occurred attempting to import board data. Confirm that the selected import file is a valid board export.`)
            console.error('Unable to import selected file.');
            return;
        }

        const boardDataText = await boardDataFile.text();
        const boardData = JSON.parse(boardDataText);
        this.#openImportManager(boardData);
    }

    #applyDaysToPersist_onClick()
    {
        const daysToPersist = this.findElement<HTMLInputElement>('data-persist-days').value
        DataService.saveAppSetting(AppSettingKey.DaysToPersistData, daysToPersist);
    }
    #clearData_onClick()
    {
        this.clearData();
    }
    async #clearDeleted_onClick()
    {
        const items = [...this.findElement('deleted-items').querySelectorAll('[data-record-id]:not([data-restore="false"])')] as HTMLElement[];
        for(let i = 0; i < items.length; i++)
        {
            const item = items[i];
            await this.#deleteItem(item, false);
        }
        this.refreshCache();
        this.#refreshActionHistory();
    }
    async #clearImageCache_onClick()
    {
        const items = [...this.findElement('deleted-images').querySelectorAll('[data-record-id]')] as HTMLElement[];
        for(let i = 0; i < items.length; i++)
        {
            const item = items[i];
            await this.#deleteImage(item, false);
        }
        this.refreshCache();
        this.#refreshActionHistory();
    }

    #daysToPersist_onChange(event: Event)
    {
        const dataPersistsDaysValues = DaysToPersistValues;
        const input = event.target as HTMLInputElement;
        snapToStep(input, dataPersistsDaysValues);
        this.findElement('data-persist-days-value').textContent = input.value;
    }
    #deletedItems_onRemove(event: Event|CustomEvent)
    {        
        const item = (event as CustomEvent).detail;
        const recordType = item.dataset.recordType;
        const recordId = item.dataset.recordId;
        const timestamp = item.getAttribute('data-timestamp');

        const targetType = (recordType == 'board')
        ? HistoryEntryTargetType.Board
        : (recordType == 'list')
        ? HistoryEntryTargetType.List
        : (recordType == 'task')
        ? HistoryEntryTargetType.Task
        : null;

        this.#restoreDeletedItem(targetType, recordId, timestamp);
    }
    #deletedImages_onRemove(event: Event|CustomEvent)
    {
        const item = (event as CustomEvent).detail;
        return this.#deleteImage(item);
    }
    //#endregion Handlers
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, DataPanelElement);
}