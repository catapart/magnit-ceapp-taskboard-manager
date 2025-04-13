// styles
import style from './welcome-panel.css?raw';
import sharedStyles from '../../styles/shared.css?raw';
// html
import html from './welcome-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../assets/icons/icons.asset';
import { TaskBoardRecord } from '../../data/records/task-board.record';
import { RecentBoardData } from '../../data/types/recent-board-data.type';
import { AppSettingKey, DataService } from '../../data/data.service';

export enum WelcomePanelAttributes
{
    pathId = 'path-id',
}

export type WelcomePanelProperties = { [key in WelcomePanelAttributes]: string } &
{
    onRemoveBoard: (boards: HTMLElement[]) => void;
    onNew: () => void;
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.LogoMark,
    IconType.LogoType,
    IconType.Logo,
    IconType.PlusIcon,
    IconType.CancelCross,
)}`;

const COMPONENT_TAG_NAME = 'welcome-panel';
export class WelcomePanelElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(WelcomePanelAttributes),
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

    onRemoveBoard?: (boards: HTMLElement[]) => void;
    onNew?: () => void;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        this.#applyPartAttributes();
        this.findElement('new-board-button').addEventListener('click', () =>
        {
            if(this.onNew == null) { return; }
            this.onNew();
        });
        
        // this.findElement('recent-boards').addEventListener("remove", this.#recentBoard_onRemove.bind(this));
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
    // #recentBoard_onRemove(this: TaskboardManagerElement, event: Event|CustomEvent)
    // {
    //     const data = (event as CustomEvent).detail;
    //     const path = (data as HTMLElement).getAttribute('path')!;
    //     const id = path.substring(path.lastIndexOf('/') + 1);
    //     this[SHAREDACCESSKEY].removeBoardFromRecentBoards(id)
    // }

    async refresh()
    {
        const recentBoards = await this.#getRecentBoards();
        this.updateBoards(recentBoards);
    }
    
    updateBoards(boards: RecentBoardData[])
    {
        const menuItems: HTMLAnchorElement[] = [];
        for(let i = 0; i < boards.length; i++)
        {
            const boardRecord = boards[i];
            const menuItem = this.#createBoardMenuItem(boardRecord);
            menuItems.push(menuItem);
        }

        // menu items
        this.innerHTML = "";
        // [...this.querySelectorAll('a')].map(item => item.remove());
        this.append(...menuItems);
    }
    
    #createBoardMenuItem(board: RecentBoardData)
    {
        const element = document.createElement('a');
        element.innerHTML = `<span part="board-item-name" class="board-item-name">${board.description}<span>`;
        element.setAttribute('part', 'board');
        element.classList.add('board');
        element.dataset.route = `board/${board.id}`;

        return element;
    }

    async #getRecentBoards()
    {
        let boardsString = await DataService.getAppSetting<string>(AppSettingKey.RecentBoards);
        if(boardsString == null)
        {
            boardsString = "[]";
        }
        const boards = JSON.parse(boardsString) as Array<RecentBoardData>;
        boards.sort((a, b) => b.timestamp - a.timestamp);
        return boards;
    }
    async #addBoardToRecentBoards(id: string, description: string)
    {
        const boards = await this.#getRecentBoards();
        const existingEntry = boards.find(item => item.id == id);
        if(existingEntry != null) { return; }

        boards.unshift({id, description, timestamp: Date.now() });
        if(boards.length > 10)
        {
            boards.pop();
        }
        const boardsString = JSON.stringify(boards);
        DataService.saveAppSetting(AppSettingKey.RecentBoards, boardsString);
    }
    async #updateRecentBoardEntry(id: string, description?: string)
    {
        const boards = await this.#getRecentBoards();
        const existingEntry = boards.find(item => item.id == id);
        if(existingEntry == null) { return; }

        existingEntry.description = description ?? existingEntry.description;
        existingEntry.timestamp = Date.now();

        const boardsString = JSON.stringify(boards);
        DataService.saveAppSetting(AppSettingKey.RecentBoards, boardsString);
        this.refresh();
    }
    async #removeBoardFromRecentBoards(id: string)
    {
        const boards = await this.#getRecentBoards();
        const existingEntry = boards.find(item => item.id == id);
        if(existingEntry == null) { return; }
        boards.splice(boards.indexOf(existingEntry), 1);
        const boardsString = JSON.stringify(boards);
        DataService.saveAppSetting(AppSettingKey.RecentBoards, boardsString);
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, WelcomePanelElement);
}