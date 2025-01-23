// styles
import style from './app-menu.css?raw';
import sharedStyles from '../../styles/shared.css?raw';
// html
import html from './app-menu.html?raw';
// icons
import { defineIcons, IconType } from '../../assets/icons/icons.asset';
import { TaskBoardRecord } from '../../data/records/task-board.record';

export enum AppMenuAttributes
{
    pathId = 'path-id',
}

export type AppMenuProperties = { [key in AppMenuAttributes]: string } &
{
    onNavigate: (path: string) => void;
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.LogoMark,
    IconType.MagnifyingGlass,
    IconType.Gear,
    IconType.PlusIcon,
    IconType.Stylus
)}`;

const COMPONENT_TAG_NAME = 'app-menu';
export class AppMenuElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(AppMenuAttributes),
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

    onNavigate?: (path: string) => void;
    onBoardMove?: (boards: HTMLElement[]) => void;

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

    updateBoards(boards: TaskBoardRecord[])
    {
        console.log(boards);

        const menuItems: HTMLAnchorElement[] = [];
        // const collectionItems: CaptionedThumbnailElement[] = [];
        for(let i = 0; i < boards.length; i++)
        {
            const boardRecord = boards[i];
            const menuItem = this.#createBoardMenuItem(boardRecord);
            menuItems.push(menuItem);
        }

        // menu items
        const boardsList = this.findElement('boards');
        [...boardsList.querySelectorAll('a')].map(item => item.remove());
        boardsList.append(...menuItems);
    }
    
    #createBoardMenuItem(board: TaskBoardRecord)
    {
        const element = document.createElement('a');
        element.innerHTML = `<span part="menu-item-handle" class="menu-item-handle"></span>
        <span part="board-item-name" class="board-item-name">${board.name}<span>`;
        element.setAttribute('part', 'board-menu-item');
        element.classList.add('board-menu-item');
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
        const boards = this.findElement('boards');
        boards.addEventListener('dragover', this.boardsList_onDragover.bind(this));
        boards.addEventListener('drop', this.boardsList_onDrop.bind(this));
    }

    boardsList_onDragover(event: DragEvent)
    {
        event.preventDefault();
        event.stopPropagation();
        this.#updateBoardItemOrder(event.clientY);
    }
    async boardsList_onDrop(_event: Event)
    {
        if(this.onBoardMove != null)
        {
            this.onBoardMove([...this.findElement('boards').querySelectorAll('a')]);
        }
    }
    async #updateBoardItemOrder(draggingCursorY: number)
    {
        if(this.#draggingBoard == null)
        {
            return;
        }

        const boards = this.findElement('boards');
        const nextElement = this.#getNextBoardItem(draggingCursorY).boardElement;
        
        // prevent unecessary re-renders; this can kill perf, if you don't guard here;
        // re-rendering by appending or inserting on every mouse-move is heavy;
        if(this.#draggingBoard.parentElement == boards && nextElement == this.#draggingBoard.nextElementSibling){ return; }


        if(nextElement == null)
        {
            boards.append(this.#draggingBoard);
        }
        else
        {
            boards.insertBefore(this.#draggingBoard, nextElement);
        }
    }
    #getNextBoardItem(mouseY: number)
    {
        const lists = [...this.findElement('boards').querySelectorAll('a:not(.dragging)')] as HTMLElement[];
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


    static create(properties: AppMenuProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as AppMenuElement;
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
        if(attributeName == AppMenuAttributes.pathId)
        {
            // this.findPart('description').textContent = newValue;
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, AppMenuElement);
}