// styles
import style from './data-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './data-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../../assets/icons/icons.asset';
import { EditableListElement } from '@magnit-ce/editable-list';
import { HistoryEntryTargetType } from '../../../data/history/history-entry-data';
import { createOptionElement, snapToStep } from '../../../resources/utils';
import { AppSettingKey, DataService } from '../../../data/data.service';
import { TaskBoardRecord } from '../../../data/records/task-board.record';
import { TaskListRecord } from '../../../data/records/task-list.record';
import { TaskRecord } from '../../../data/records/task.record';
import { CustomImageRecord } from '../../../data/records/custom-image.record';

export const DaysToPersistValues = [0, 7, 30];
export const DEFAULT_PERSIST_DAYS = "7";

export type DataPanelProperties = 
{
    
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

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        this.#applyPartAttributes();

        
        this.findElement<HTMLButtonElement>('import-button').addEventListener('click', this.#importButton_onClick.bind(this));

        this.findElement('data-persist-days').addEventListener("change", this.#daysToPersist_onChange.bind(this));
        this.findElement('apply-data-persist-days-button').addEventListener("click", this.#applyDaysToPersist_onClick.bind(this));

        this.findElement<HTMLButtonElement>('clear-data-button').addEventListener('click', this.#clearData_onClick.bind(this));

        this.findElement<EditableListElement>('deleted-items').addEventListener('remove', this.#deletedItems_onRemove.bind(this));
        this.findElement<HTMLButtonElement>('clear-deleted-button').addEventListener('click', this.#clearDeleted_onClick.bind(this));

        this.findElement<EditableListElement>('deleted-images').addEventListener('remove', this.#deletedImages_onRemove.bind(this));
        this.findElement<HTMLButtonElement>('clear-image-cache-button').addEventListener('click', this.#clearImageCache_onClick.bind(this));
    }

    async init(_options?: DataPanelProperties)
    {
        const daysToPersistData = (await DataService.getAppSetting(AppSettingKey.DaysToPersistData)) ?? DEFAULT_PERSIST_DAYS;
        this.prepareDaysToPersistOptions(daysToPersistData);
        this.refreshCache();
    }

    async refreshCache()
    {
        console.log('refresh');

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
        deletedImagesElement.innerHTML = "";
        deletedImagesElement.append(...deletedImageElements);

        // deleted items
        const deletedItemsElement = this.findElement<EditableListElement>('deleted-items');
        deletedItemsElement.innerHTML = "";
        deletedItemsElement.append(...deletedItems);
    }
    
    prepareDaysToPersistOptions(daysToPersist: string)
    {
        const daysToPersistOptions = Array.from(DaysToPersistValues).map(value => createOptionElement(value));
        this.findElement('data-persist-days-values').append(...daysToPersistOptions);

        this.findElement<HTMLInputElement>('data-persist-days').value = daysToPersist;        
        this.findElement('data-persist-days-value').textContent = daysToPersist;
    }

    async #importButton_onClick(_event: Event)
    {
        const importFileInput = this.findElement<HTMLInputElement>('import-board-file');
        const boardDataFile = (importFileInput.files != null) ?importFileInput.files[0] : null;
        if(boardDataFile == null)
        { 
            const message = `An error occurred attempting to import board data. Confirm that the selected import file is a valid board export.`;
            const consoleMessage = 'Unable to import selected file.';
            this.dispatchEvent(new CustomEvent('error', { detail: { message, consoleMessage }, bubbles: true, composed: true }));
            return;
        }

        const boardDataText = await boardDataFile.text();
        const boardData = JSON.parse(boardDataText);
        this.dispatchEvent(new CustomEvent('import', { detail: { boardData }, bubbles: true, composed: true }));
    }
    #applyDaysToPersist_onClick(_event: Event)
    {
        this.dispatchEvent(new CustomEvent('daystopersist', { detail: { daysToPersist: this.findElement<HTMLInputElement>('data-persist-days').value }, bubbles: true, composed: true }));
    }
    #clearData_onClick(_event: Event)
    {
        this.dispatchEvent(new CustomEvent('cleardata', { bubbles: true, composed: true }));
    }
    async #clearDeleted_onClick(_event: Event)
    {
        const items = [...this.findElement('deleted-items').querySelectorAll('[data-record-id]:not([data-restore="false"])')] as HTMLElement[];
        this.dispatchEvent(new CustomEvent('cleardeleted', { detail: { items }, bubbles: true, composed: true }));
    }
    async #clearImageCache_onClick(_event: Event)
    {
        const items = [...this.findElement('deleted-images').querySelectorAll('[data-record-id]')] as HTMLElement[];
        this.dispatchEvent(new CustomEvent('clearimages', { detail: { items }, bubbles: true, composed: true }));
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

        this.dispatchEvent(new CustomEvent('restoreitem', { detail: { targetType, recordId, timestamp }, bubbles: true, composed: true }));
    }
    #deletedImages_onRemove(event: Event|CustomEvent)
    {
        const item = (event as CustomEvent).detail;
        this.dispatchEvent(new CustomEvent('deleteimage', { detail: { item }, bubbles: true, composed: true }));
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

    // async #restoreDeletedItem(targetType: HistoryEntryTargetType|null, recordId: string, timestamp: number)
    // {
    //     if(targetType == null)
    //     {
    //         console.error("Unable to restore record with unknown type or id");
    //         return;
    //     }
    //     const channel = (targetType == 'board')
    //     ? this.#data.boards 
    //     : (targetType == 'list')
    //     ? this.#data.lists
    //     : (targetType == 'task')
    //     ? this.#data.tasks
    //     : null;

    //     if(channel == null)
    //     {
    //         console.error("Unable to restore record. Error accessing data.");
    //         return;
    //     }

    //     await channel.restore(recordId);
    //     const updates: Map<string, PropertyUpdate> = new Map([ ['deletedTimestamp', { from: timestamp, to: undefined }] ]);
    //     const properties = {
    //         id: recordId,
    //         updates
    //     };
    //     await this.#addActionHistoryEntry(HistoryEntryType.Update, targetType, properties);
        
    //     if(targetType == HistoryEntryTargetType.Board)
    //     {
    //         this.openBoard(recordId);
    //         this.#refreshBoards();
    //     }
    //     this.#refreshDeletedItems();
    // }

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
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, DataPanelElement);
}