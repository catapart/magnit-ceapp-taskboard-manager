import '../tasklist-fields/tasklist-fields.component';
import '../task-fields/task-fields.component';

import style from './taskboard-fields.component.css?raw';
import html from './taskboard-fields.component.html?raw';
import { TaskBoardBackgroundDisplay, TaskBoardRecord } from '../../data/records/task-board.record';
import { TaskListRecord } from '../../data/records/task-list.record';
import { TaskListFieldsComponent } from '../tasklist-fields/tasklist-fields.component';
// icons
import { Icons } from '../../assets/icons/icons.asset';
import { TaskSettingsRecord } from '../../data/records/task-settings.record';
import { TaskFieldsComponent } from '../task-fields/task-fields.component';
import { CustomImageRecord } from '../../data/records/custom-image.record';
import { FileImageInputElement } from '@magnit-ce/fileimage-input';

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(style);

const COMPONENT_TEMPLATE = `${html}
<div part="icon-definitions">
    ${Icons.Gear}
    ${Icons.Export}
    ${Icons.PlusIcon}
    ${Icons.Image}
    ${Icons.Color}
    ${Icons.Task}
    ${Icons.TaskList}
    ${Icons.TaskBoard}
    ${Icons.Trash}
</div>`;
const COMPONENT_TAG_NAME = 'taskboard-fields';
export class TaskBoardFieldsComponent extends HTMLElement
{
    componentParts: Map<string, HTMLElement> = new Map();
    getPart<T extends HTMLElement = HTMLElement>(key: string)
    {
        if(this.componentParts.get(key) == null)
        {
            const part = this.shadowRoot!.querySelector(`[part="${key}"]`) as HTMLElement;
            if(part != null) { this.componentParts.set(key, part); }
        }

        return this.componentParts.get(key) as T;
    }
    findPart<T extends HTMLElement = HTMLElement>(key: string) { return this.shadowRoot!.querySelector(`[part="${key}"]`) as T; }

    #draggingList: TaskListFieldsComponent|null = null;


    constructor()
    {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);


        this.findPart('clear-lists-button').addEventListener('click', () =>
        {
            this.querySelectorAll('tasklist-fields').forEach(item => item.toggleAttribute('removed', true));
        });

        const listItems = this.findPart('list-items');
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
    }

    setValues(board: TaskBoardRecord, taskSettings: TaskSettingsRecord, backgroundImage: CustomImageRecord|null = null)
    {
        this.setAttribute('record-id', board.id);
        this.findPart<HTMLInputElement>('color').value = board.color;
        this.findPart<HTMLInputElement>('name').value = board.name;
        this.findPart<HTMLInputElement>('order').value = board.order.toString();
        this.findPart('background-color-field').setAttribute('optional-value', (board.useCustomBackgroundColor == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('background-color').value = board.backgroundColor;
        this.findPart('font-color-field').setAttribute('optional-value', (board.useCustomFontColor == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('font-color').value = board.fontColor;
        this.findPart<HTMLInputElement>('background-image-display').value = board.backgroundDisplay;
        this.findPart<HTMLInputElement>('background-image-offset-x').value = board.backgroundOffsetX.toString();
        this.findPart<HTMLInputElement>('background-image-offset-y').value = board.backgroundOffsetY.toString();
        this.findPart<HTMLInputElement>('background-image-offset-y').value = board.backgroundOffsetY.toString();

        if(backgroundImage != null)
        {
            this.findPart<FileImageInputElement>('background-image').value = backgroundImage.image as File;
        }
        else
        {
            this.findPart<FileImageInputElement>('background-image').value = null;
        }

        this.findPart<TaskFieldsComponent>('task-fields').setValues(taskSettings);
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
        board.color = this.findPart<HTMLInputElement>('color').value;
        board.name = this.findPart<HTMLInputElement>('name').value;
        // board.order = parseInt(this.findPart<HTMLInputElement>('order').value);
        board.useCustomBackgroundColor = this.findPart<HTMLInputElement>('background-color-field').getAttribute('optional-value') == "true";
        board.backgroundColor = this.findPart<HTMLInputElement>('background-color').value;
        board.useCustomFontColor = this.findPart<HTMLInputElement>('font-color-field').getAttribute('optional-value') == "true";
        board.fontColor = this.findPart<HTMLInputElement>('font-color').value;

        board.backgroundDisplay = this.findPart<HTMLInputElement>('background-image-display').value as TaskBoardBackgroundDisplay;
        board.backgroundOffsetX = parseInt(this.findPart<HTMLInputElement>('background-image-offset-x').value);
        board.backgroundOffsetY = parseInt(this.findPart<HTMLInputElement>('background-image-offset-y').value);

        const boardTaskSettings = this.findPart<TaskFieldsComponent>('task-fields').getRecord();
        boardTaskSettings.parentRecordType = 'board';

        board.taskSettingsId = this.findPart<TaskFieldsComponent>('task-fields').getAttribute('record-id')!;

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
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskBoardFieldsComponent);
}