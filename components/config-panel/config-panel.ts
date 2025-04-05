// styles
import style from './config-panel.css?raw';
import sharedStyles from '../../styles/shared.css?raw';
// html
import html from './config-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../assets/icons/icons.asset';


import './settings-panel/settings-panel';
import './data-panel/data-panel';
import './history-panel/history-panel';
import './about-panel/about-panel';
import { HistoryLengthValues, HistoryPanelElement } from './history-panel/history-panel';
import { DataPanelElement, DaysToPersistValues } from './data-panel/data-panel';
import { AboutPanelElement } from './about-panel/about-panel';
import { ActionHistoryElement } from '@magnit-ce/action-history';

export enum ConfigPanelAttributes
{
}

export type ConfigPanelProperties = { [key in ConfigPanelAttributes]: string } &
{
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.Gear,
    IconType.Data,
    IconType.Clock,
    IconType.Info,
)}`;

const COMPONENT_TAG_NAME = 'config-panel';
export class ConfigPanelElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(ConfigPanelAttributes),
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

    init(appVersion: string, historyLength: string, daysToPersist: string)
    {
        this.findElement<AboutPanelElement>('about-panel').setVersion(appVersion);
        this.findElement<DataPanelElement>('data-panel').prepareDaysToPersistOptions(daysToPersist);
        this.findElement<HistoryPanelElement>('history-panel').prepareHistoryLength(historyLength);
    }

    preventDefaultHistoryAction()
    {
        this.findElement<HistoryPanelElement>('history-panel')
        .findElement<ActionHistoryElement>('action-history').toggleAttribute('prevent-removal', true);
    }
    allowDefaultHistoryAction()
    {
        requestAnimationFrame(() =>
        {
            this.findElement<HistoryPanelElement>('history-panel')
            .findElement<ActionHistoryElement>('action-history').toggleAttribute('prevent-removal', false);
        });
    }
    history_undo()
    {
        this.findElement<HistoryPanelElement>('history-panel').undo();
    }
    history_redo()
    {
        this.findElement<HistoryPanelElement>('history-panel').redo();
    }



    static create(properties: ConfigPanelProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as ConfigPanelElement;
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
    customElements.define(COMPONENT_TAG_NAME, ConfigPanelElement);
}