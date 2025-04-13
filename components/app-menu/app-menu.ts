// styles
import style from './app-menu.css?raw';
import sharedStyles from '../../styles/shared.css?raw';
// html
import html from './app-menu.html?raw';
// icons
import { defineIcons, IconType } from '../../assets/icons/icons.asset';
import { TaskBoardRecord } from '../../data/records/task-board.record';
import { DataService } from '../../data/data.service';

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.LogoMark,
    IconType.MagnifyingGlass,
    IconType.Gear,
    IconType.PlusIcon
)}`;

const COMPONENT_TAG_NAME = 'app-menu';
export class AppMenuElement extends HTMLElement
{
    // componentParts: Map<string, HTMLElement> = new Map();
    // getElement<T extends HTMLElement = HTMLElement>(id: string)
    // {
    //     if(this.componentParts.get(id) == null)
    //     {
    //         const part = this.findElement(id);
    //         if(part != null) { this.componentParts.set(id, part); }
    //     }

    //     return this.componentParts.get(id) as T;
    // }
    findElement<T extends HTMLElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }

    #draggingBoard: HTMLElement|null = null;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        this.#applyPartAttributes();
        this.#addDragHandlers();
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

    async refresh()
    {
        const boardRecords = await DataService.getAllBoardRecords();
        this.updateBoards(boardRecords);
    }

    updateBoards(boards: TaskBoardRecord[])
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
    
    #createBoardMenuItem(board: TaskBoardRecord)
    {
        const element = document.createElement('a');
        element.tabIndex = 0;
        element.innerHTML = `<span part="menu-item-handle" class="menu-item-handle"></span>
        <span part="board-item-name" class="board-item-name">${board.name}<span>`;
        element.setAttribute('part', 'board');
        element.classList.add('board');
        element.dataset.route = `board/${board.id}`;
    
        const handle = element.querySelector('[part="menu-item-handle"]')!;
        handle.addEventListener('mousedown', (_event) =>
        {
            element.draggable = true;
        });
        handle.addEventListener('mouseup', (_event) =>
        {
            element.removeAttribute('draggable');
        });
        element.addEventListener('dragstart', (_event: DragEvent) => 
        {
            this.#draggingBoard = element;
            element.classList.add('dragging');
            this.classList.add('drop-target');
        });
        element.addEventListener('dragend', (_event: DragEvent) => 
        {
            element.classList.remove('dragging');
            this.#draggingBoard = null;
            this.classList.remove('drop-target');
        });

        return element;
    }

    #addDragHandlers()
    {
        this.addEventListener('dragover', this.boardsList_onDragover.bind(this));
        this.addEventListener('drop', this.boardsList_onDrop.bind(this));
    }

    boardsList_onDragover(event: DragEvent)
    {
        event.preventDefault();
        event.stopPropagation();
        this.#updateBoardItemOrder(event.clientY);
    }
    async boardsList_onDrop(_event: Event)
    {
        this.#updateBoardRecordsAfterMove();
    }
    async #updateBoardItemOrder(draggingCursorY: number)
    {
        if(this.#draggingBoard == null)
        {
            return;
        }

        const nextElement = this.#getNextBoardItem(draggingCursorY).boardElement;
        
        // prevent unecessary re-renders; this can kill perf, if you don't guard here;
        // re-rendering by appending or inserting on every mouse-move is heavy;
        if(this.#draggingBoard.parentElement == this && nextElement == this.#draggingBoard.nextElementSibling){ return; }


        if(nextElement == null)
        {
            this.append(this.#draggingBoard);
        }
        else
        {
            this.insertBefore(this.#draggingBoard, nextElement);
        }
    }
    #getNextBoardItem(mouseY: number)
    {
        const lists = [...this.querySelectorAll('a:not(.dragging)')] as HTMLElement[];
        return lists.reduce((closest: { offset: number, boardElement?:HTMLElement }, item: HTMLElement) =>
        {
            const boundingRect = item.getBoundingClientRect();
            const offset = mouseY - boundingRect.top - (boundingRect.height / 2);
            if(offset < 0 && offset > closest.offset)
            {
                return { offset, boardElement: item };
            }
            return closest;
        }, { offset: Number.NEGATIVE_INFINITY });
    }
    

    async #updateBoardRecordsAfterMove()
    {
        const toSave = await this.#getOrderedBoards();
        await DataService.saveBoardRecords(...toSave);
    }

    async #getOrderedBoards()
    {
        const orderedIds: string[] = [];
        const boardItems = [...this.querySelectorAll('a.board')] as HTMLElement[];
        for(let i = 0; i < boardItems.length; i++)
        {
            const boardItem = boardItems[i];
            const boardId = boardItem.dataset.route!.split('/')[1];
            if(boardId == null) { throw new Error('Unset board id'); }
            orderedIds.push(boardId);
        }

        const boards = await DataService.getBoardRecords(...orderedIds);

        const orderedBoards = [];
        for(let i = 0; i < orderedIds.length; i++)
        {
            const board = boards[boards.findIndex(value => value.id == orderedIds[i])];
            if(board == null) { throw new Error("Unknown board"); }
            board.order = i;
            orderedBoards.push(board);
        }

        return orderedBoards;
    }

}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, AppMenuElement);
}