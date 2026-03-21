// styles
import style from './welcome-panel.css?raw';
import sharedStyles from '../../styles/shared.css?raw';
// html
import html from './welcome-panel.html?raw';
// icons
import { defineIcons, IconKey } from '../../assets/icons/icons.asset';
import { TaskBoardRecord } from '../../data/records/task-board.record';
import { type RecentBoardData } from '../../data/types/recent-board-data.type';
import { AppSettingKey, DataService } from '../../data/data.service';
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../libs/ce-part-utils/ce-part-utils';

export const WelcomePanelAttributes =
{
    pathId: 'path-id',
} as const;
export type WelcomePanelAttributesType = typeof WelcomePanelAttributes[keyof typeof WelcomePanelAttributes];

export type WelcomePanelProperties = Partial<{ [key in WelcomePanelAttributesType]: string }> &
{
    addBoard: () => Promise<TaskBoardRecord>,
    openBoard: (id: string) => void,
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconKey.LogoMark,
    IconKey.LogoType,
    IconKey.Logo,
    IconKey.PlusIcon,
    IconKey.CloseCross,
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
    }

    #addBoard!: () => Promise<TaskBoardRecord>;
    #openBoard!: (id: string) => void;
    init(options: WelcomePanelProperties)
    {

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);

        assignPartsAsExportPartsAttribute(this.shadowRoot!, false, 
        {
            'edit-button':'recent-edit-button',
            'handle':'recent-edit-handle',
            'new-board-button':'recent-new-board-button',
        });
        
        this.findElement('recent-boards').addEventListener("remove", this.#recentBoard_onRemove.bind(this));
        this.findElement('recent-boards').addEventListener("click", this.#onClick.bind(this));
        this.findElement('recent-boards').addEventListener("keydown", this.#onKeyDown.bind(this));

        this.#addBoard = options.addBoard;
        this.#openBoard = options.openBoard;
        this.refresh();
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

    async addBoardToRecentBoards(id: string, description: string, color: string)
    {
        const boards = await this.#getRecentBoards();
        const existingEntry = boards.find(item => item.id == id);
        if(existingEntry != null) { return; }

        boards.unshift({id, description, timestamp: Date.now(), color });
        if(boards.length > 10)
        {
            boards.pop();
        }
        const boardsString = JSON.stringify(boards);
        DataService.saveAppSetting(AppSettingKey.RecentBoards, boardsString);
    }
    async updateRecentBoardEntry(id: string, description?: string, color?: string)
    {
        const maxRecentBoards = await DataService.getAppSetting<number>(AppSettingKey.RecentBoardsMax) ?? 10;
        const boards = await this.#getRecentBoards();
        const existingEntryIndex = boards.findIndex(item => item.id == id);
        const existingEntry = boards[existingEntryIndex];
        
        if(existingEntry == null)
        {
            const newEntry = { id, description: description ?? "", timestamp: Date.now(), color: color ?? '' };
            if(boards.length == maxRecentBoards)
            {
                boards.pop();
            }
            boards.push(newEntry);
        }
        else
        {
            existingEntry.description = description ?? existingEntry.description;
            existingEntry.timestamp = Date.now();
            existingEntry.color = color ?? existingEntry.color;
            boards.splice(existingEntryIndex, 1, existingEntry);
        }



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
        await DataService.saveAppSetting(AppSettingKey.RecentBoards, boardsString);
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
        element.tabIndex = 0;
        element.innerHTML = `<span part="board-item-name recent" class="board-item-name recent">${board.description}<span>`;
        element.setAttribute('part', 'board recent');
        element.classList.add('board', 'recent');
        element.dataset.route = `board/${board.id}`;
        element.style.setProperty('--board-color', board.color);

        return element;
    }
    #recentBoard_onRemove(event: Event|CustomEvent)
    {
        const boardItem = (event as CustomEvent).detail as HTMLElement;
        const route = boardItem.dataset.route!;
        const id = route.substring(route.lastIndexOf('/') + 1);
        this.removeBoardFromRecentBoards(id);
    }

    async #onClick(event: Event)
    {
        const composedPath = event.composedPath();
        if(composedPath.find(item => item instanceof HTMLButtonElement && item.classList.contains('remove')))
        {
            event.stopPropagation();
            event.preventDefault();
            return false;
        }
    
        const newBoardButton = composedPath.find(item => item instanceof HTMLButtonElement && item.id == "new-board-button");
        if(newBoardButton != null)
        {
            const board = await this.#addBoard();
            this.#openBoard(board.id);
        }
    }
    async #onKeyDown(event: KeyboardEvent)
    {
        if(event.code == "Space" || event.code == "Enter")
        {
            const board = this.shadowRoot!.activeElement as HTMLElement;
            if(board == null || board.classList.contains('board') == false) { return; }
            this.#openBoard((board as HTMLElement).dataset.route!.substring(6));
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, WelcomePanelElement);
}