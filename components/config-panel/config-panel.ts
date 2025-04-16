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
import { DEFAULT_HISTORY_LENGTH, HistoryLengthValues, HistoryPanelElement } from './history-panel/history-panel';
import { DataPanelElement, DaysToPersistValues } from './data-panel/data-panel';
import { AboutPanelElement } from './about-panel/about-panel';
import { HistoryEntryType } from '@magnit-ce/action-history';
import { AppSettingKey, DataService } from '../../data/data.service';
import { ColorScheme, SettingsPanelElement } from './settings-panel/settings-panel';
import { HistoryEntryTargetType, PropertiesType } from '../../data/history/history-entry-data';


export type ConfigPanelProperties = 
{
    appVersion: string;
    scheme_onChange: (scheme: ColorScheme) => void;
    openImportManager: (data: any) => void;
    openBoard: (id: string) => void;
    refreshBoards: () => void;
}

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

    async init(options: ConfigPanelProperties)
    {
        this.findElement<SettingsPanelElement>('settings-panel').init({ scheme_onChange: options.scheme_onChange });
        this.findElement<DataPanelElement>('data-panel').init({ 
            openImportManager: options.openImportManager,
            openBoard: options.openBoard,
            refreshActionHistory: this.refreshHistory.bind(this),
            refreshBoards: options.refreshBoards,
            addActionHistoryEntry: this.addActionHistoryEntry.bind(this),
        });
        this.findElement<HistoryPanelElement>('history-panel').init({ refreshBoards: options.refreshBoards, refreshCache: this.refreshCache.bind(this) });
        this.findElement<AboutPanelElement>('about-panel').init({ appVersion: options.appVersion });
    }

    refreshCache()
    {
        this.findElement<DataPanelElement>('data-panel').refreshCache();
    }
    refreshHistory()
    {
        this.findElement<HistoryPanelElement>('history-panel').refresh();
    }
    history_undo()
    {
        this.findElement<HistoryPanelElement>('history-panel').undo();
    }
    history_redo()
    {
        this.findElement<HistoryPanelElement>('history-panel').redo();
    }
    addActionHistoryEntry<T extends HistoryEntryTargetType>(action: HistoryEntryType, type: T, properties: PropertiesType<T>)
    {
        this.findElement<HistoryPanelElement>('history-panel').addActionHistoryEntry(action, type, properties);
    }
    async clearData()
    {
        this.findElement<DataPanelElement>('data-panel').clearData();
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
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, ConfigPanelElement);
}