// styles
import style from './data-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './data-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../../assets/icons/icons.asset';
import { TaskBoardRecord } from '../../../data/records/task-board.record';

export enum DataPanelAttributes
{
    pathId = 'path-id',
}

export type DataPanelProperties = { [key in DataPanelAttributes]: string } &
{
    onEdit: (boardRoute: string) => void;
    onBoardMove: (boards: HTMLElement[]) => void;
    onNew: () => void;
};

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

const COMPONENT_TAG_NAME = 'data-panel';
export class DataPanelElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(DataPanelAttributes),
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

    onEdit?: (boardRoute: string) => void;
    onBoardMove?: (boards: HTMLElement[]) => void;
    onNew?: () => void;

    #draggingBoard: HTMLElement|null = null;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        // this.#applyPartAttributes();
        // this.#addDragHandlers();
        // this.findElement('boards').addEventListener('edit', (event: Event|CustomEvent) => {
        //     if(this.onEdit == null) { return; }
        //     const customEvent = (event as CustomEvent);
        //     const board: HTMLElement = customEvent.detail;
        //     this.onEdit(board.dataset.route!);
        // });
        // this.findElement('new-board-button').addEventListener('click', () =>
        // {
        //     if(this.onNew == null) { return; }
        //     this.onNew();
        // });
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
        console.log(_event);
        if(this.onBoardMove != null)
        {
            this.onBoardMove([...this.querySelectorAll('a')]);
        }
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


    static create(properties: DataPanelProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as DataPanelElement;
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
        if(attributeName == DataPanelAttributes.pathId)
        {
            // this.findPart('description').textContent = newValue;
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, DataPanelElement);
}