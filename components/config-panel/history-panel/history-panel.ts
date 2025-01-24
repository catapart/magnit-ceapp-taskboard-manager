// styles
import style from './history-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './history-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../../assets/icons/icons.asset';
import { TaskBoardRecord } from '../../../data/records/task-board.record';

export enum HistoryPanelAttributes
{
    pathId = 'path-id',
}

export type HistoryPanelProperties = { [key in HistoryPanelAttributes]: string } &
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
    IconType.ConfirmCheck,
    IconType.UndoRedo,
    IconType.Trash,
)}`;

const COMPONENT_TAG_NAME = 'history-panel';
export class HistoryPanelElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(HistoryPanelAttributes),
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
        this.#applyPartAttributes();

        // this.findElement<HTMLButtonElement>('history-control-undo').addEventListener('click', history_undo_onClick.bind(this));
        // this.findElement<HTMLButtonElement>('history-control-redo').addEventListener('click', history_redo_onClick.bind(this));

        // const actionHistory = this.getElement<ActionHistoryElement>('action-history');
        // actionHistory.onBack = actionHistory_onBack.bind(this);
        // actionHistory.onForward = actionHistory_onForward.bind(this);

        // this.findElement('action-history-length').addEventListener("change", historyLength_onChange.bind(this));
        // this.findElement('apply-history-length-button').addEventListener("click", applyHistoryLength_onClick.bind(this));

        // this.findElement('clear-history-button').addEventListener("click", clearHistory_onClick.bind(this));

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
    
    // function history_undo_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     this.undo();
    // }
    // function history_redo_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     this.redo();
    // }
    // async function actionHistory_onBack(this: TaskboardManagerElement, target: HTMLElement, previous: HTMLElement|undefined, all: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
    // {
    //     await this[SHAREDACCESSKEY].handleActionEntryReverse(target, previous, targetIndex, previousActiveEntryIndex);
        
    //     const isLastUpdate = all.indexOf(target) == all.length - 1;
    //     if(isLastUpdate == true)
    //     {
    //         const recordType = target.querySelector('.target-type')?.textContent?.toLowerCase();
    //         if(recordType == 'board')
    //         {
    //             this[SHAREDACCESSKEY].refreshBoards();
    //         }
    //         const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
    //         if(currentBoardId != "")
    //         {
    //             this[SHAREDACCESSKEY].renderBoard(currentBoardId);
    //         }

    //         this[SHAREDACCESSKEY].refreshDeletedItems();
    //     }
    // }
    // async function actionHistory_onForward(this: TaskboardManagerElement, target: HTMLElement, previous: HTMLElement|undefined, all: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
    // {
    //     await this[SHAREDACCESSKEY].handelActionEntryActivate(target, previous, targetIndex, previousActiveEntryIndex);

    //     const isLastUpdate = all.indexOf(target) == all.length - 1;
    //     if(isLastUpdate == true)
    //     {
    //         const recordType = target.querySelector('.target-type')?.textContent?.toLowerCase();
    //         if(recordType == 'board')
    //         {
    //             this[SHAREDACCESSKEY].refreshBoards();
    //         }
    //         const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
    //         if(currentBoardId != "")
    //         {
    //             this[SHAREDACCESSKEY].renderBoard(currentBoardId);
    //         }

    //         this[SHAREDACCESSKEY].refreshDeletedItems();
    //     }
    // }
    // async function historyLength_onChange(this: TaskboardManagerElement, event: Event)
    // {
    //     const input = event.target as HTMLInputElement;
    //     this[SHAREDACCESSKEY].snapToStep(input, this[SHAREDACCESSKEY].HistoryLengthSteps);
    //     this.findElement('action-history-length-value').textContent = input.value;
    //     this[SHAREDACCESSKEY].prepareHistoryEntries();
    // }
    // async function applyHistoryLength_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     this[SHAREDACCESSKEY].applyHistoryLength();
    // }
    // function clearHistory_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     this.clearHistory();
    // }

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


    static create(properties: HistoryPanelProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as HistoryPanelElement;
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
        if(attributeName == HistoryPanelAttributes.pathId)
        {
            // this.findPart('description').textContent = newValue;
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, HistoryPanelElement);
}