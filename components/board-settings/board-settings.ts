// styles
import style from './board-settings.css?raw';
import sharedStyles from '../../styles/shared.css?raw';
// html
import html from './board-settings.html?raw';
// icons
import { defineIcons, IconType } from '../../assets/icons/icons.asset';
import { TaskListFieldsComponent } from './tasklist-fields/tasklist-fields.component';
import { TaskBoardBackgroundDisplay, TaskBoardRecord } from '../../data/records/task-board.record';
import { TaskListRecord } from '../../data/records/task-list.record';
import { TaskSettingsRecord } from '../../data/records/task-settings.record';
import { TaskFieldsComponent } from './task-fields/task-fields.component';
import { FileImageInputElement } from '@magnit-ce/fileimage-input';
import { CustomImageRecord } from '../../data/records/custom-image.record';

export enum BoardSettingsAttributes
{
    pathId = 'path-id',
}

export type BoardSettingsProperties = { [key in BoardSettingsAttributes]: string } &
{
    onNavigate: (path: string) => void;
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.Gear,
    IconType.Export,
    IconType.PlusIcon,
    IconType.Image,
    IconType.Color,
    IconType.Task,
    IconType.TaskList,
    IconType.TaskBoard,
    IconType.CloseCross,
)}`;

const COMPONENT_TAG_NAME = 'board-settings';
export class BoardSettingsElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(BoardSettingsAttributes),
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
    
    #draggingList: TaskListFieldsComponent|null = null;

    onNavigate?: (path: string) => void;
    onBoardMove?: (boards: HTMLElement[]) => void;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        this.#applyPartAttributes();
        this.findElement('clear-lists-button').addEventListener('click', () =>
        {
            this.querySelectorAll('tasklist-fields').forEach(item => item.toggleAttribute('removed', true));
        });
        this.addEventListener('dragover', (event) =>
        {
            event.preventDefault();
            event.stopPropagation();

            if(this.#draggingList == null || this.#draggingList.tagName.toLowerCase() != "tasklist-fields")
            {
                return;
            }

            // event.dataTransfer!.effectAllowed = "move";

            const nextElement = this.getNextListItem(event.clientY).listElement;

            // console.log(nextElement);
            
            // prevent unecessary re-renders; this can kill perf, if you don't guard here;
            // re-rendering by appending or inserting on every mouse-move is heavy;
            if(this.#draggingList.parentElement == this && nextElement == this.#draggingList.nextElementSibling){ return; }


            if(nextElement == null)
            {
                this.append(this.#draggingList);
            }
            else
            {
                this.insertBefore(this.#draggingList, nextElement);
            }
        });

        
        // this.findElement<HTMLButtonElement>('board-settings-save').addEventListener('click', boardSettings_ok_onClick.bind(this));
        // this.findElement<HTMLButtonElement>('close-board-button').addEventListener('click', closeBoard_onClick.bind(this));
        // const boardFields = this.findElement<TaskBoardFieldsComponent>('board-fields');
        // boardFields.findPart('remove-board-button').addEventListener('click', boardSettings_remove_onClick.bind(this));
        // boardFields.findPart('duplicate-board-button').addEventListener('click', duplicateBoard_onClick.bind(this));
        // boardFields.findPart('export-button').addEventListener('click', exportBoardButton_onClick.bind(this));
        // boardFields.findPart('add-list-button').addEventListener('click', addList_onClick.bind(this));
        // boardFields.addEventListener('duplicate', list_onDuplicate.bind(this));
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
    
    // async function boardSettings_ok_onClick(this: TaskboardManagerElement, event: Event)
    // {
    //     await this[SHAREDACCESSKEY].updateBoardSettings();
    //     this[SHAREDACCESSKEY].refreshBoards();
    //     this[SHAREDACCESSKEY].refreshDeletedItems();
    //     const id  =this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id') ?? this[SHAREDACCESSKEY].getIdFromRoute();
    //     if(id == null)
    //     {
    //         MessageCardElement.notify(`An error occurred saving the board settings.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error('Unable to determine the target board\'s id');
    //     }
    //     // console.log(id);

    //     this.openBoard(id);

    // }
    // async function boardSettings_remove_onClick(this: TaskboardManagerElement, event: Event)
    // {
    //     const id  =this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id') ?? this[SHAREDACCESSKEY].getIdFromRoute();
    //     if(id == null)
    //     {
    //         MessageCardElement.notify(`An error occurred deleting a board.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error('Unable to determine the target board\'s id');
    //     }

    //     this.removeBoard(id);
    // }
    // async function exportBoardButton_onClick(this: TaskboardManagerElement, event: Event)
    // {        
    //     const boardId = this.findElement('board-fields').getAttribute('record-id');
    //     if(boardId == null || boardId == '')
    //     {
    //         MessageCardElement.notify(`An error occurred attempting to export the board.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error('Unable to determine the target board\'s id');
    //     }
    //     this.exportBoard(boardId);
    // }
    // function addList_onClick(this: TaskboardManagerElement, event: Event)
    // {
    //     this.addList();
    // }
    // function list_onDuplicate(this: TaskboardManagerElement, event: Event)
    // {
    //     const data = (event as CustomEvent).detail;
    //     this[SHAREDACCESSKEY].duplicateList(data.target, data.list, data.settings);
    // }
    // async function duplicateBoard_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     const id = this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id');
    //     if(id == null)
    //     {
    //         MessageCardElement.notify(`An error occurred duplicating theboard.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error('Unable to determine the target board\'s id');
    //     }
    //     await this.duplicateBoard(id);
    //     this[SHAREDACCESSKEY].refreshBoards();
    // }
    // async function closeBoard_onClick(this: TaskboardManagerElement, _event: Event)
    // {
    //     await this.closeBoardSettings();
    //     this.closeBoard();
    // }

    setValues(board: TaskBoardRecord, taskSettings: TaskSettingsRecord, backgroundImage: CustomImageRecord|null = null)
    {
        this.setAttribute('record-id', board.id);
        this.findElement<HTMLInputElement>('color').value = board.color;
        this.findElement<HTMLInputElement>('name').value = board.name;
        this.findElement<HTMLInputElement>('order').value = board.order.toString();
        this.findElement('background-color-field').setAttribute('optional-value', (board.useCustomBackgroundColor == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('background-color').value = board.backgroundColor;
        this.findElement('font-color-field').setAttribute('optional-value', (board.useCustomFontColor == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('font-color').value = board.fontColor;
        this.findElement<HTMLInputElement>('background-image-display').value = board.backgroundDisplay;
        this.findElement<HTMLInputElement>('background-image-offset-x').value = board.backgroundOffsetX.toString();
        this.findElement<HTMLInputElement>('background-image-offset-y').value = board.backgroundOffsetY.toString();
        this.findElement<HTMLInputElement>('background-image-offset-y').value = board.backgroundOffsetY.toString();

        if(backgroundImage != null)
        {
            this.findElement<FileImageInputElement>('background-image').value = backgroundImage.image as File;
        }
        else
        {
            this.findElement<FileImageInputElement>('background-image').value = null;
        }

        this.findElement<TaskFieldsComponent>('task-fields').setValues(taskSettings);
    }
    setLists(taskLists: TaskListRecord[], taskLists_TaskSettings: TaskSettingsRecord[])
    {
        this.innerHTML = '';
        if(taskLists.length == 0)
        {
            return;
        }

        const listElements: TaskListFieldsComponent[] = [];
        for(let i = 0; i < taskLists.length; i++)
        {
            const taskList = taskLists[i];
            if(taskList.deletedTimestamp != undefined) { continue; }
            const taskSettings = taskLists_TaskSettings.find(item => item.id == taskList.taskSettingsId);
            if(taskSettings == null) { throw new Error('Unable to load list settings'); }
            const taskListElement = this.createList(taskList, taskSettings);
            listElements.push(taskListElement);
        }
        this.append(...listElements);
    }
    addList(taskList: TaskListRecord, taskSettings: TaskSettingsRecord)
    {
        const list = this.createList(taskList, taskSettings);
        this.append(list);
    }
    insertList(afterTarget: HTMLElement, taskList: TaskListRecord, taskSettings: TaskSettingsRecord)
    {
        const list = this.createList(taskList, taskSettings);
        if(afterTarget.nextElementSibling == null)
        {
            this.append(list);
        }
        else
        {
            this.insertBefore(list, afterTarget.nextElementSibling);
        }
    }
    private createList(taskList: TaskListRecord, taskSettings: TaskSettingsRecord)
    {
        const taskListElement = new TaskListFieldsComponent();
        
        if(taskSettings == null)
        { 
            throw new Error('Unable to load list settings'); 
        }
        
        taskListElement.setValues(taskList, taskSettings);
        taskListElement.addEventListener('duplicate', (event) =>
        {
            const [ list, settings ] = taskListElement.getRecords();
            this.dispatchEvent(new CustomEvent('duplicate', { detail: { target: taskListElement, list, settings }}));
        });
        
        const handle = taskListElement.findPart('handle');
        handle.addEventListener('mousedown', (_event) =>
        {
            taskListElement.draggable = true;
        });
        handle.addEventListener('mouseup', (_event) =>
        {
            taskListElement.removeAttribute('draggable');
        });
        taskListElement.addEventListener('dragstart', (_event: DragEvent) => 
        {
            this.#draggingList = taskListElement;
            taskListElement.classList.add('dragging');
            this.classList.add('drop-target');
        });
        taskListElement.addEventListener('dragend', (_event: DragEvent) => 
        {
            taskListElement.classList.remove('dragging');
            this.#draggingList = null;
            this.classList.remove('drop-target');
        });
        
        return taskListElement;
    }

    getRecords()
    {
        const board = new TaskBoardRecord();
        board.id = this.getAttribute('record-id')!;
        board.color = this.findElement<HTMLInputElement>('color').value;
        board.name = this.findElement<HTMLInputElement>('name').value;
        // board.order = parseInt(this.findElement<HTMLInputElement>('order').value);
        board.useCustomBackgroundColor = this.findElement<HTMLInputElement>('background-color-field').getAttribute('optional-value') == "true";
        board.backgroundColor = this.findElement<HTMLInputElement>('background-color').value;
        board.useCustomFontColor = this.findElement<HTMLInputElement>('font-color-field').getAttribute('optional-value') == "true";
        board.fontColor = this.findElement<HTMLInputElement>('font-color').value;

        board.backgroundDisplay = this.findElement<HTMLInputElement>('background-image-display').value as TaskBoardBackgroundDisplay;
        board.backgroundOffsetX = parseInt(this.findElement<HTMLInputElement>('background-image-offset-x').value);
        board.backgroundOffsetY = parseInt(this.findElement<HTMLInputElement>('background-image-offset-y').value);

        const boardTaskSettings = this.findElement<TaskFieldsComponent>('task-fields').getRecord();
        boardTaskSettings.parentRecordType = 'board';

        board.taskSettingsId = this.findElement<TaskFieldsComponent>('task-fields').getAttribute('record-id')!;

        const listFields = [...this.querySelectorAll('tasklist-fields')] as TaskListFieldsComponent[];
        const lists: TaskListRecord[] = [];
        const toRemove: string[] = [];
        const taskSettings: TaskSettingsRecord[] = [boardTaskSettings];
        for(let i = 0; i < listFields.length; i++)
        {
            const element = listFields[i];
            if(element.hasAttribute('removed'))
            {
                const recordId = element.getAttribute('record-id');
                if(recordId == null) { console.error("Unable to remove TaskList: record id attribute is unset."); continue; }
                toRemove.push(recordId);
                continue;
            }
            const [ list, taskSettingsRecord ] = element.getRecords();
            list.boardId = board.id;
            list.order = i;
            lists.push(list);
            taskSettings.push(taskSettingsRecord);
        }

        const records = [ board, lists, taskSettings, toRemove ] as [ TaskBoardRecord, TaskListRecord[], TaskSettingsRecord[], string[] ];
        return records;
    }
    getNextListItem(mouseY: number)
    {
        const lists = [...this.querySelectorAll('tasklist-fields:not(.dragging)')] as TaskListFieldsComponent[];
        return lists.reduce((closest: { offset: number, listElement?:TaskListFieldsComponent }, item: TaskListFieldsComponent) =>
        {
            const boundingRect = item.getBoundingClientRect();
            const offset = mouseY - boundingRect.top - (boundingRect.height / 2);
            if(offset < 0 && offset > closest.offset)
            {
                return { offset, listElement: item };
            }
            return closest;
        }, { offset: Number.NEGATIVE_INFINITY });
    }


    static create(properties: BoardSettingsProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as BoardSettingsElement;
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
        if(attributeName == BoardSettingsAttributes.pathId)
        {
            // this.findElement('description').textContent = newValue;
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, BoardSettingsElement);
}