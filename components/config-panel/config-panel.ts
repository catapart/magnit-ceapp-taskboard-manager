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
import { DEFAULT_HISTORY_LENGTH, DEFAULT_PERSIST_DAYS, HistoryLengthValues, HistoryPanelElement } from './history-panel/history-panel';
import { DataPanelElement, DaysToPersistValues } from './data-panel/data-panel';
import { AboutPanelElement } from './about-panel/about-panel';
import { ActionHistoryElement } from '@magnit-ce/action-history';
import { AppSettingKey, DataService } from '../../data/data.service';

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



    //     const configPanel = this.getElement<ConfigPanelElement>('config-panel');
    //     configPanel.addEventListener('error', (event: Event|CustomEvent) =>
    //     {
    //         const { message, type, consoleMessage } = (event as CustomEvent).detail;
    //         MessageCardElement.notify(message, 
    //         this.getElement('notifications'), { type: type ?? MessageCardType.Error });
    //         console.error(new Error(consoleMessage));
    //     });
    //     configPanel.addEventListener('scheme', (event: Event|CustomEvent) =>
    //     {
    //         const { scheme } = (event as CustomEvent).detail;
    //         this.setColorScheme(scheme);
    //         this.#saveAppSetting(AppSettingKey.ColorScheme, scheme);
    //     });
    //     configPanel.addEventListener('import', (event: Event|CustomEvent) =>
    //     {
    //         const { boardData } = (event as CustomEvent).detail;
    //         console.log(boardData);
    //         this.#openImportManager(boardData);
    //     });
    //     configPanel.addEventListener('daystopersist', (event: Event|CustomEvent) =>
    //     {
    //         const { daysToPersist } = (event as CustomEvent).detail;
    //         this.#saveAppSetting(AppSettingKey.DaysToPersistData, daysToPersist);
    //     });
    //     configPanel.addEventListener('cleardata', (event: Event|CustomEvent) =>
    //     {
    //         this.clearData();
    //     });
    //     configPanel.addEventListener('restoreitem', (event: Event|CustomEvent) =>
    //     {
    //         const { targetType, recordId, timestamp } = (event as CustomEvent).detail;
    //         this.#restoreDeletedItem(targetType, recordId, timestamp);
    //     });
    //     configPanel.addEventListener('cleardeleted', async (event: Event|CustomEvent) =>
    //     {
    //         const { items } = (event as CustomEvent).detail;
    //         for(let i = 0; i < items.length; i++)
    //         {
    //             const item = items[i];
    //             await this.deleteItem(item, false);
    //         }
    //         this.#refreshDeletedItems();
    //         this.#refreshActionHistory();
    //     });
    //     configPanel.addEventListener('restoreitem', (event: Event|CustomEvent) =>
    //     {
    //         const { item } = (event as CustomEvent).detail;
    //         return this.deleteImage(item);
    //     });
    //     configPanel.addEventListener('clearimages', async (event: Event|CustomEvent) =>
    //     {
    //         const { items } = (event as CustomEvent).detail;
    //         for(let i = 0; i < items.length; i++)
    //         {
    //             const item = items[i];
    //             await this.deleteImage(item, false);
    //         }
    //         this.#refreshActionHistory();
    //         this.#refreshDeletedItems();
    //     });
    //     // configPanel.addEventListener('undo', (event: Event|CustomEvent) =>
    //     // {
    //     //     this.undo();
    //     // });
    //     // configPanel.addEventListener('redo', (event: Event|CustomEvent) =>
    //     // {
    //     //     this.redo();
    //     // });
    //     configPanel.addEventListener('historyback', async (event: Event|CustomEvent) =>
    //     {
    //         const {
    //             target,
    //             previous,
    //             targetIndex,
    //             previousActiveEntryIndex,
    //             refreshBoards,
    //             refreshDeletedItems
    //         } = (event as CustomEvent).detail;

    //         await this.#handleActionEntryReverse(target, previous, targetIndex, previousActiveEntryIndex);

            
    //         if(refreshBoards == true)
    //         {
    //             this.#refreshBoards();
    //         }
    //         if(refreshDeletedItems == true)
    //         {
    //             this.#refreshDeletedItems();
    //         }
            
    //         const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
    //         if(currentBoardId != "")
    //         {
    //             this.#renderBoard(currentBoardId);
    //         }
    //     });
    //     configPanel.addEventListener('historyforward', async (event: Event|CustomEvent) =>
    //     {
    //         const {
    //             target,
    //             previous,
    //             targetIndex,
    //             previousActiveEntryIndex,
    //             refreshBoards,
    //             refreshDeletedItems
    //         } = (event as CustomEvent).detail;

    //         await this.#handelActionEntryActivate(target, previous, targetIndex, previousActiveEntryIndex);

    //         if(refreshBoards == true)
    //         {
    //             this.#refreshBoards();
    //         }
    //         if(refreshDeletedItems == true)
    //         {
    //             this.#refreshDeletedItems();
    //         }
            
    //         const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
    //         if(currentBoardId != "")
    //         {
    //             this.#renderBoard(currentBoardId);
    //         }
    //     });
    //     configPanel.addEventListener('preparehistoryitems', async (event: Event|CustomEvent) =>
    //     {
    //         const { actionHistory, startIndex } = (event as CustomEvent).detail;
    //         this.#prepareHistoryEntries(actionHistory, startIndex);
    //     });
    //     configPanel.addEventListener('historylength', async (event: Event|CustomEvent) =>
    //     {
    //         const { historyLength } = (event as CustomEvent).detail;
    //         this.#applyHistoryLength(historyLength);
    //     });
    //     configPanel.addEventListener('clearhistory', async (_event: Event|CustomEvent) =>
    //     {
    //         this.clearHistory();
    //     });
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

    async init(appVersion: string)
    {
        const historyLength = (await DataService.getAppSetting(AppSettingKey.HistoryLength)) ?? DEFAULT_HISTORY_LENGTH;
        const daysToPersistData = (await DataService.getAppSetting(AppSettingKey.DaysToPersistData)) ?? DEFAULT_PERSIST_DAYS;

        this.findElement<AboutPanelElement>('about-panel').setVersion(appVersion);
        this.findElement<DataPanelElement>('data-panel').prepareDaysToPersistOptions(daysToPersistData);
        this.findElement<HistoryPanelElement>('history-panel').prepareHistoryLength(historyLength);

        this.refreshHistory();
        this.refreshCache();
    }

    refreshHistory()
    {
        this.findElement<HistoryPanelElement>('history-panel').refresh();
    }
    refreshCache()
    {
        this.findElement<HistoryPanelElement>('data-panel').refresh();
    }
    history_undo()
    {
        this.findElement<HistoryPanelElement>('history-panel').undo();
    }
    history_redo()
    {
        this.findElement<HistoryPanelElement>('history-panel').redo();
    }



}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, ConfigPanelElement);
}