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
    IconType.File,
    IconType.Import,
    IconType.Trash,
    IconType.Restore,
    IconType.ConfirmCheck,
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
        this.#applyPartAttributes();

        
        // this.findElement<HTMLButtonElement>('import-button').addEventListener('click', importButton_onClick.bind(this));
        // this.findElement<HTMLButtonElement>('import-ok').addEventListener('click', importDialog_import_onClick.bind(this));

        // this.findElement('data-persist-days').addEventListener("change", daysToPersist_onChange.bind(this));
        // this.findElement('apply-data-persist-days-button').addEventListener("click", applyDaysToPersist_onClick.bind(this));

        // this.findElement<HTMLButtonElement>('clear-data-button').addEventListener('click', clearData_onClick.bind(this));

        // this.findElement<EditableListElement>('deleted-items').addEventListener('remove', deletedItems_onRemove.bind(this));
        // this.findElement<HTMLButtonElement>('clear-deleted-button').addEventListener('click', clearDeleted_onClick.bind(this));

        // this.findElement<EditableListElement>('deleted-images').addEventListener('remove', deletedImages_onRemove.bind(this));
        // this.findElement<HTMLButtonElement>('clear-image-cache-button').addEventListener('click', clearImageCache_onClick.bind(this));




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

    // async function importButton_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     const importFileInput = this.findElement<HTMLInputElement>('import-board-file');
    //     const boardDataFile = (importFileInput.files != null) ?importFileInput.files[0] : null;
    //     if(boardDataFile == null)
    //     { 
    //         MessageCardElement.notify(`An error occurred attempting to import board data. Confirm that the selected import file is a valid board export.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error("Unable to import selected file.");
    //     }

    //     const boardDataText = await boardDataFile.text();
    //     const boardData = JSON.parse(boardDataText);
    //     this[SHAREDACCESSKEY].openImportManager(boardData);
    // }
    // async function importDialog_import_onClick(this: TaskboardManagerElement, event: Event)
    // {
    //     const boardData = this.findElement<ImportManagerComponent>('import-manager').getRecord();
    //     await this.importBoard(boardData);

    //     this[SHAREDACCESSKEY].refreshBoards();
    // }
    // function daysToPersist_onChange(this: TaskboardManagerElement, event: Event)
    // {
    //     const dataPersistsDaysValues = this[SHAREDACCESSKEY].DaysToPersistValues;
    //     const input = event.target as HTMLInputElement;
    //     this[SHAREDACCESSKEY].snapToStep(input, dataPersistsDaysValues);
    //     this.findElement('data-persist-days-value').textContent = input.value;
    // }
    // function applyDaysToPersist_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     return this[SHAREDACCESSKEY].saveAppSetting(AppSettingKey.DaysToPersistData, this.findElement<HTMLInputElement>('data-persist-days').value);
    // }
    // function clearData_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     this.clearData();
    // }
    // function deletedItems_onRemove(this: TaskboardManagerElement, event: Event|CustomEvent)
    // {        
    //     const item = (event as CustomEvent).detail;
    //     const recordType = item.dataset.recordType;
    //     const recordId = item.dataset.recordId;
    //     const timestamp = item.getAttribute('data-timestamp');

    //     const targetType = (recordType == 'board')
    //     ? HistoryEntryTargetType.Board
    //     : (recordType == 'list')
    //     ? HistoryEntryTargetType.List
    //     : (recordType == 'task')
    //     ? HistoryEntryTargetType.Task
    //     : null;

    //     this[SHAREDACCESSKEY].restoreDeletedItem(targetType, recordId, timestamp);

    // }
    // async function clearDeleted_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     const items = [...this.findElement('deleted-items').querySelectorAll('[data-record-id]:not([data-restore="false"])')] as HTMLElement[];
    //     console.log(items);
    //     for(let i = 0; i < items.length; i++)
    //     {
    //         const item = items[i];
    //         await this.deleteItem(item, false);
    //     }
    //     this[SHAREDACCESSKEY].refreshActionHistory();
    //     this[SHAREDACCESSKEY].refreshDeletedItems();
    // }
    // function deletedImages_onRemove(this: TaskboardManagerElement, event: Event|CustomEvent)
    // {
    //     const item = (event as CustomEvent).detail;
    //     return this.deleteImage(item);
    // }
    // async function clearImageCache_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     const items = [...this.findElement('deleted-images').querySelectorAll('[data-record-id]')] as HTMLElement[];
    //     for(let i = 0; i < items.length; i++)
    //     {
    //         const item = items[i];
    //         await this.deleteImage(item, false);
    //     }
    //     this[SHAREDACCESSKEY].refreshActionHistory();
    //     this[SHAREDACCESSKEY].refreshDeletedItems();
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