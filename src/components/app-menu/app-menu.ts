// styles
import style from './app-menu.css?raw';
import sharedStyles from '../../styles/shared.css?raw';
// html
import html from './app-menu.html?raw';
// icons
import { defineIcons, IconKey } from '../../assets/icons/icons.asset';
import { TaskBoardRecord } from '../../data/records/task-board.record';
import { DataService } from '../../data/data.service';
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../libs/ce-part-utils/ce-part-utils';

export type AppMenuProperties =
{
    addBoard: () => Promise<TaskBoardRecord>;
    editBoard: (boardId: string) => void;
    openBoard: (id: string) => void;
    getCurrentBoardId: () => string|undefined;
}

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconKey.LogoMark,
    IconKey.MagnifyingGlass,
    IconKey.Gear,
    IconKey.PlusIcon,
    IconKey.Stylus
)}`;

const COMPONENT_TAG_NAME = 'app-menu';
export class AppMenuElement extends HTMLElement
{
    findElement<T extends HTMLElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }

    #draggingBoard: HTMLElement|null = null;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        this.#addDragHandlers();

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);
    }

    //#region API
    #addBoard!: () => Promise<TaskBoardRecord>;
    #editBoard!: (boardId: string) => void;
    #openBoard!: (id: string) => void;
    #getCurrentBoardId!: () => string|undefined;
    init(options: AppMenuProperties)
    {
        this.#addBoard = options.addBoard;
        this.#editBoard = options.editBoard;
        this.#openBoard = options.openBoard;
        this.#getCurrentBoardId = options.getCurrentBoardId;

        this.addEventListener('click', this.#onClick.bind(this));
        this.addEventListener('keydown', this.#onKeyDown.bind(this));
    }

    async refresh()
    {
        const boardRecords = await DataService.getAllBoardRecords();
        this.updateBoards(boardRecords);
    }

    updateBoards(boards: TaskBoardRecord[])
    {
        const currentBoardId = this.#getCurrentBoardId();
        const menuItems: HTMLAnchorElement[] = [];
        for(let i = 0; i < boards.length; i++)
        {
            const boardRecord = boards[i];
            const menuItem = this.#createBoardMenuItem(boardRecord);
            if(boardRecord.id == currentBoardId)
            {
                menuItem.classList.add('selected');
                menuItem.part.add('selected');
            }
            menuItems.push(menuItem);
        }

        // menu items
        const boardsList = this.findElement('boards');
        const items = [...boardsList.querySelectorAll<HTMLElement>('a')];
        for(let i = 0; i < items.length; i++)
        {
            items[i].remove();
        }
        boardsList.append(...menuItems);
    }
    //#endregion
    
    //#region Handlers
    async #onClick(event: Event)
    {
        const composedPath = event.composedPath().filter(item => item instanceof HTMLElement);

        const pathAttribute = (this.getRootNode() as any).host!.getAttribute('path');
        if(pathAttribute != null && pathAttribute.includes('board-settings'))
        {
            event.preventDefault();
            return;
        }

        const editButton = composedPath.find(item => item.classList.contains('board-edit-button'));
        if(editButton != null)
        {
            const boardId = editButton.parentElement!.dataset.route!.split('/')[1]
            this.#editBoard(boardId);
            event.stopPropagation();
            event.preventDefault();
            return;
        }

        const newBoardButton = composedPath.find(item => item.classList.contains('new-board-button'));
        if(newBoardButton != null)
        {
            const board = await this.#addBoard();
            this.#openBoard(board.id);
            return;
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
    //#endregion Handlers

    //#region Management
    #createBoardMenuItem(board: TaskBoardRecord)
    {
        const element = document.createElement('a');
        element.tabIndex = 0;
        element.innerHTML = `<span part="handle menu-item-handle" class="handle menu-item-handle"></span>
        <span part="board-item-name" class="board-item-name">${board.name}<span>`;
        element.setAttribute('part', 'board');
        element.classList.add('board');
        element.dataset.route = `board/${board.id}`;
        element.style.setProperty('--board-color', board.color);

        let timeout: ReturnType<typeof setTimeout>|null;
        const cancel = () =>
        {
            if(timeout != null)
            {
                clearTimeout(timeout);
                timeout = null;
            }
            element.removeEventListener('pointerleave', cancel);
            element.removeEventListener('pointermove', cancel);
            requestAnimationFrame(() =>
            {
                element.classList.remove('awaiting-longpress', 'pre-longpress');
                element.part.remove('awaiting-longpress', 'pre-longpress');
            });
        }
        const cancelPointerUp = () =>
        {
            cancel();
            element.removeEventListener('pointerup', cancelPointerUp);
            requestAnimationFrame(() =>
            {
                element.classList.remove('longpress');
                element.part.remove('longpress');
            });
        }
        
        element.addEventListener('pointerdown', (event) =>
        {
            if(event.composedPath().find(item => item instanceof HTMLElement && item.classList.contains('menu-item-handle')))
            {
                return;
            }

            timeout = setTimeout(() =>
            {
                if(timeout == null)
                {
                    return;
                    // element.classList.add('pre-longpress');
                    // element.part.add('pre-longpress');
                }
                clearTimeout(timeout);

                timeout = setTimeout(() =>
                {
                    element.classList.add('longpress');
                    element.part.add('longpress');
                    this.#editBoard(board.id);
                    cancel();

                    
                    const boards = [...this.shadowRoot!.querySelectorAll('a')] as HTMLElement[];
                    for(let i = 0; i < boards.length; i++)
                    {
                        boards[i].classList.remove('selected');
                        boards[i].part.remove('selected');
                        boards[i].toggleAttribute('aria-current', false);
                    }
                    element.classList.add('selected');
                    element.part.add('selected');
                    element.setAttribute('aria-current', 'page');
                }, 1000);
                
                element.classList.replace('pre-longpress', 'awaiting-longpress');
                element.part.replace('pre-longpress', 'awaiting-longpress');

            }, 250);


            element.addEventListener('pointerup', cancelPointerUp);
            element.addEventListener('pointerleave', cancel);
            element.addEventListener('pointermove', cancel);

            element.classList.add('pre-longpress');
            element.part.add('pre-longpress');
        });
    
        const handle = element.querySelector('.menu-item-handle')!;
        handle.addEventListener('pointerdown', (_event) =>
        {
            element.draggable = true;
        });
        handle.addEventListener('pointerup', () =>
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
            this.findElement('boards').append(this.#draggingBoard);
        }
        else
        {
            this.findElement('boards').insertBefore(this.#draggingBoard, nextElement);
        }
    }
    #getNextBoardItem(mouseY: number)
    {
        const lists = [...this.shadowRoot!.querySelectorAll('a:not(.dragging)')] as HTMLElement[];
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
        const boardItems = [...this.shadowRoot!.querySelectorAll('a.board')] as HTMLElement[];
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
    //#endregion
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, AppMenuElement);
}