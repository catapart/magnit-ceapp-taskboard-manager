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

export const DaysToPersistValues = [0, 7, 30];

export enum DataPanelAttributes
{
}

export type DataPanelProperties = { [key in DataPanelAttributes]: string } &
{
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.File,
    IconType.Import,
    IconType.Trash,
    IconType.Restore,
    IconType.ConfirmCheck,
)}`;

const COMPONENT_TAG_NAME = 'data-panel';
export class DataPanelElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(DataPanelAttributes),
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

        
        this.findElement<HTMLButtonElement>('import-button').addEventListener('click', this.#importButton_onClick.bind(this));

        this.findElement('data-persist-days').addEventListener("change", this.#daysToPersist_onChange.bind(this));
        this.findElement('apply-data-persist-days-button').addEventListener("click", this.#applyDaysToPersist_onClick.bind(this));

        this.findElement<HTMLButtonElement>('clear-data-button').addEventListener('click', this.#clearData_onClick.bind(this));

        this.findElement<EditableListElement>('deleted-items').addEventListener('remove', this.#deletedItems_onRemove.bind(this));
        this.findElement<HTMLButtonElement>('clear-deleted-button').addEventListener('click', this.#clearDeleted_onClick.bind(this));

        this.findElement<EditableListElement>('deleted-images').addEventListener('remove', this.#deletedImages_onRemove.bind(this));
        this.findElement<HTMLButtonElement>('clear-image-cache-button').addEventListener('click', this.#clearImageCache_onClick.bind(this));
    }
    #applyPartAttributes()
    {
        const identifiedElements = [...this.shadowRoot!.querySelectorAll('[id]')];
        for(let i = 0; i < identifiedElements.length; i++)
        {
            identifiedElements[i].part.add(identifiedElements[i].id);
        }
        const classedElements = [...this.shadowRoot!.querySelectorAll('[class]')];
        for(let i = 0; i < classedElements.length; i++)
        {
            classedElements[i].part.add(...classedElements[i].classList);
        }
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
    #daysToPersist_onChange(event: Event)
    {
        const dataPersistsDaysValues = DaysToPersistValues;
        const input = event.target as HTMLInputElement;
        snapToStep(input, dataPersistsDaysValues);
        this.findElement('data-persist-days-value').textContent = input.value;
    }
    #applyDaysToPersist_onClick(_event: Event)
    {
        this.dispatchEvent(new CustomEvent('daystopersist', { detail: { daysToPersist: this.findElement<HTMLInputElement>('data-persist-days').value }, bubbles: true, composed: true }));
    }
    #clearData_onClick(_event: Event)
    {
        this.dispatchEvent(new CustomEvent('cleardata', { bubbles: true, composed: true }));
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
    async #clearDeleted_onClick(_event: Event)
    {
        const items = [...this.findElement('deleted-items').querySelectorAll('[data-record-id]:not([data-restore="false"])')] as HTMLElement[];
        this.dispatchEvent(new CustomEvent('cleardeleted', { detail: { items }, bubbles: true, composed: true }));
    }
    #deletedImages_onRemove(event: Event|CustomEvent)
    {
        const item = (event as CustomEvent).detail;
        this.dispatchEvent(new CustomEvent('deleteimage', { detail: { item }, bubbles: true, composed: true }));
    }
    async #clearImageCache_onClick(_event: Event)
    {
        const items = [...this.findElement('deleted-images').querySelectorAll('[data-record-id]')] as HTMLElement[];
        this.dispatchEvent(new CustomEvent('clearimages', { detail: { items }, bubbles: true, composed: true }));
    }

    static create(properties: DataPanelProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as DataPanelElement;
        for(const [propertyName, value] of Object.entries(properties))
        {
            if(!propertyName.startsWith('on'))
            {
                element.setAttribute(propertyName, value as string);
            }
        }
    }

    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string) 
    {
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, DataPanelElement);
}