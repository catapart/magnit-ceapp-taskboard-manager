// styles
import style from './history-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './history-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../../assets/icons/icons.asset';
import { ActionHistoryElement } from '@magnit-ce/action-history';
import { createOptionElement, snapToStep } from '../../../resources/utils';

export const HistoryLengthValues = [0, 30, 50, 100, 150];

export enum HistoryPanelAttributes
{
}

export type HistoryPanelProperties = { [key in HistoryPanelAttributes]: string } &
{
};

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
        const classedElements = [...this.shadowRoot!.querySelectorAll('[class]')];
        for(let i = 0; i < classedElements.length; i++)
        {
            classedElements[i].part.add(...classedElements[i].classList);
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


    static create(properties: HistoryPanelProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as HistoryPanelElement;
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
    customElements.define(COMPONENT_TAG_NAME, HistoryPanelElement);
}