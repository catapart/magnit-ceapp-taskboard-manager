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
import { HistoryPanelElement } from './history-panel/history-panel';
import { DataPanelElement } from './data-panel/data-panel';
import { AboutPanelElement } from './about-panel/about-panel';
import { HistoryEntryType } from '@magnit-ce/action-history';
import { ColorScheme, SettingsPanelElement } from './settings-panel/settings-panel';
import { HistoryEntryTargetType, PropertiesType } from '../../data/history/history-entry-data';
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../libs/ce-part-utils/ce-part-utils';
import { PathRouterElement } from '@magnit-ce/path-router';


export type ConfigPanelProperties = 
{
    appVersion: string;
    scheme_onChange: (scheme: ColorScheme) => void;
    openImportManager: (data: any) => void;
    openBoard: (id: string) => void;
    closeBoard: () => void;
    refreshBoardCollections: () => void;
    refreshRecentBoards: () => void;
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
        
        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);

        // duplicated functionality for firefox; dialog submit does not close the dialogs for some reason
        this.findElement<HTMLFormElement>('config-actions').addEventListener('submit', () =>
        {
            this.dispatchEvent(new CustomEvent('close'));
        });
    }

    async init(options: ConfigPanelProperties)
    {
        this.addEventListener('keydown', this.#onKeyDown.bind(this));
        this.findElement<SettingsPanelElement>('settings-panel').init({ scheme_onChange: options.scheme_onChange });
        this.findElement<DataPanelElement>('data-panel').init({ 
            openImportManager: options.openImportManager,
            openBoard: options.openBoard,
            refreshActionHistory: this.refreshHistory.bind(this),
            refreshBoardCollections: options.refreshBoardCollections,
            refreshRecentBoards: options.refreshRecentBoards,
            closeBoard: options.closeBoard.bind(this),
            addActionHistoryEntry: this.addActionHistoryEntry.bind(this),
        });
        this.findElement<HistoryPanelElement>('history-panel').init({ refreshBoardCollections: options.refreshBoardCollections, refreshCache: this.refreshCache.bind(this) });
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
        return this.findElement<HistoryPanelElement>('history-panel').addActionHistoryEntry(action, type, properties);
    }
    async clearData(confirm: boolean = true)
    {
        return this.findElement<DataPanelElement>('data-panel').clearData(confirm);
    }
    async #onKeyDown(event: KeyboardEvent)
    {
        if(event.code == "Space" || event.code == "Enter")
        {
            const link = this.shadowRoot!.activeElement as HTMLElement;
            if(link == null || link.hasAttribute('data-route') == false) { return; }
            link.click();
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, ConfigPanelElement);
}