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
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../libs/ce-part-utils/ce-part-utils';

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
    IconType.CloseCross,
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

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);

        assignPartsAsExportPartsAttribute(this.shadowRoot!, false, 
        {
            'edit-button':'recent-edit-button',
            'handle':'recent-edit-handle',
            'new-board-button':'recent-new-board-button',
        });
        
        this.findElement('recent-boards').addEventListener("remove", this.#recentBoard_onRemove.bind(this));
        this.findElement('recent-boards').addEventListener("click", (event: Event) =>
        {
            event.stopPropagation();
            event.preventDefault();
            return false;
        });
    }

    async refresh()
    {
        const recentBoards = await this.#getRecentBoards();
        this.updateBoards(recentBoards);
    }
    
    updateBoards(boards: RecentBoardData[])
    {
        const menuItems: HTMLAnchorElement[] = boards
        .map(item => this.#createBoardMenuItem(item));
        const recentBoards = this.findElement('recent-boards');
        const items = [...recentBoards.querySelectorAll<HTMLElement>('a')];
        for(let i = 0; i < items.length; i++)
        {
            items[i].remove();
        }
        recentBoards.append(...menuItems);
    }

    async addBoardToRecentBoards(id: string, description: string)
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
    async updateRecentBoardEntry(id: string, description?: string)
    {
        const boards = await this.#getRecentBoards();
        const existingEntryIndex = boards.findIndex(item => item.id == id);
        const existingEntry = boards[existingEntryIndex];
        if(existingEntry == null) { return; }

        existingEntry.description = description ?? existingEntry.description;
        existingEntry.timestamp = Date.now();

        boards.splice(existingEntryIndex, 1, existingEntry);

        const boardsString = JSON.stringify(boards);
        DataService.saveAppSetting(AppSettingKey.RecentBoards, boardsString);
        this.refresh();
    }
    async removeBoardFromRecentBoards(id: string)
    {
        const boards = await this.#getRecentBoards();
        const existingEntry = boards.find(item => item.id == id);
        if(existingEntry == null) { return; }
        boards.splice(boards.indexOf(existingEntry), 1);
        const boardsString = JSON.stringify(boards);
        DataService.saveAppSetting(AppSettingKey.RecentBoards, boardsString);
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
    
    #createBoardMenuItem(board: RecentBoardData)
    {
        const element = document.createElement('a');
        element.innerHTML = `<span part="board-item-name recent" class="board-item-name recent">${board.description}<span>`;
        element.setAttribute('part', 'board recent');
        element.classList.add('board', 'recent');
        element.dataset.route = `board/${board.id}`;

        return element;
    }
    #recentBoard_onRemove(event: Event|CustomEvent)
    {
        const boardItem = (event as CustomEvent).detail as HTMLElement;
        const route = boardItem.dataset.route!;
        const id = route.substring(route.lastIndexOf('/') + 1);
        this.removeBoardFromRecentBoards(id);
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, WelcomePanelElement);
}