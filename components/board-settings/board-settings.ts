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
import { DataService } from '../../data/data.service';
import { FeedbackService } from '../../feedback.service';

export type BoardSettingsProperties = 
{
    canAddList: () => boolean;
}

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
    IconType.Trash,
    IconType.Copy,
)}`;

const COMPONENT_TAG_NAME = 'board-settings';
export class BoardSettingsElement extends HTMLElement
{
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
        this.addEventListener('click', this.#onClick.bind(this));

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

    //#region API
    #canAddList!: () => boolean;
    init(options: BoardSettingsProperties)
    {
        this.#canAddList = options.canAddList;
    }
    setValues(board: TaskBoardRecord, taskSettings: TaskSettingsRecord, backgroundImage: CustomImageRecord|null = null)
    {
        this.setAttribute('record-id', board.id);
        this.findElement<HTMLInputElement>('board-color').value = board.color;
        this.findElement<HTMLInputElement>('board-name').value = board.name;
        this.findElement<HTMLInputElement>('board-order').value = board.order.toString();
        this.findElement('board-background-color-field').setAttribute('optional-value', (board.useCustomBackgroundColor == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('board-background-color').value = board.backgroundColor;
        this.findElement('board-font-color-field').setAttribute('optional-value', (board.useCustomFontColor == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('board-font-color').value = board.fontColor;
        this.findElement<HTMLInputElement>('board-background-image-display').value = board.backgroundDisplay;
        this.findElement<HTMLInputElement>('board-background-image-offset-x').value = board.backgroundOffsetX.toString();
        this.findElement<HTMLInputElement>('board-background-image-offset-y').value = board.backgroundOffsetY.toString();

        if(backgroundImage != null)
        {
            this.findElement<FileImageInputElement>('board-background-image').value = backgroundImage.image as File;
        }
        else
        {
            this.findElement<FileImageInputElement>('board-background-image').value = null;
        }

        this.findElement<TaskFieldsComponent>('board-task-settings').setValues(taskSettings);
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
            const taskListElement = this.#createList(taskList, taskSettings);
            listElements.push(taskListElement);
        }
        this.append(...listElements);
    }

    getRecords()
    {
        const board = new TaskBoardRecord();
        board.id = this.getAttribute('record-id')!;
        board.color = this.findElement<HTMLInputElement>('board-color').value;
        board.name = this.findElement<HTMLInputElement>('board-name').value;
        board.useCustomBackgroundColor = this.findElement<HTMLInputElement>('board-background-color-field').getAttribute('optional-value') == "true";
        board.backgroundColor = this.findElement<HTMLInputElement>('board-background-color').value;
        board.useCustomFontColor = this.findElement<HTMLInputElement>('board-font-color-field').getAttribute('optional-value') == "true";
        board.fontColor = this.findElement<HTMLInputElement>('board-font-color').value;

        board.backgroundDisplay = this.findElement<HTMLInputElement>('board-background-image-display').value as TaskBoardBackgroundDisplay;
        board.backgroundOffsetX = parseInt(this.findElement<HTMLInputElement>('board-background-image-offset-x').value);
        board.backgroundOffsetY = parseInt(this.findElement<HTMLInputElement>('board-background-image-offset-y').value);

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

    async addList()
    {
        const canAddList = this.#canAddList();
        if(canAddList == false)
        {
            FeedbackService.showMessageDialog("Unable to add list when a board is not open for editing and no board has been opened for task management.");
        }
        const [ list, settings ] = await DataService.createList();
        this.#addList(list, settings);
    }
    insertList(afterTarget: HTMLElement, taskList: TaskListRecord, taskSettings: TaskSettingsRecord)
    {
        const list = this.#createList(taskList, taskSettings);
        if(afterTarget.nextElementSibling == null)
        {
            this.append(list);
        }
        else
        {
            this.insertBefore(list, afterTarget.nextElementSibling);
        }
    }    
    async duplicateList(target: HTMLElement, list: TaskListRecord, settings: TaskSettingsRecord)
    {
        const [ duplicateList, duplicateSettings ] = await DataService.createList(list, settings);
        this.insertList(target, duplicateList, duplicateSettings);
    }

    // async duplicateBoard(id: string)
    // {
    //     const boardExportData = await this.#prepareExportData(id);
    //     const duplicateData = this.findElement<ImportManagerComponent>('import-manager').prepareData(boardExportData);

    //     const newNameInput = this.findElement<BoardSettingsElement>('board-settings').findElement<HTMLInputElement>('duplicate-board-name');
    //     if(newNameInput?.value != null && newNameInput.value.trim() != "")
    //     {
    //         duplicateData.name = newNameInput.value;
    //     }

    //     await this.importBoard(duplicateData, "An error occurred duplicating a board.");
    // }
    // async removeBoard(boardId: string, confirm: boolean = true)
    // {
    //     const confirmed = await this.#getConfirmation('Are you sure you want to delete this board and all of its tasks, lists, and images?', 'warn');
    //     if(confirm == true && confirmed == false)
    //     {
    //         return;
    //     }

    //     await this.closeBoardSettings();

    //     const channel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
    //     if(this.findElement('app-router').getAttribute('path')?.indexOf(boardId) != null)
    //     {
    //         this.closeBoard();
    //     }
    //     await channel.delete(boardId);
    //     const entry = await this.#addActionHistoryEntry(HistoryEntryType.Delete, HistoryEntryTargetType.Board, { id: boardId });
    //     this.#refreshBoards();
    //     this.#refreshDeletedItems();
    //     await this.#removeBoardFromRecentBoards(boardId);
    //     this.#refreshRecentBoards();

    //     if(entry != null)
    //     {
    //         this.#addUndoNotification("A board was just deleted", entry.getAttribute('data-entry-id')!);
    //     }
    // }
    //#endregion API

    //#region Handlers
    #onClick(event: Event)
    {
        const composedPath = event.composedPath().filter(item => item instanceof HTMLElement);

        const addListsButton = composedPath.find(item => item.id == "add-list-button");
        if(addListsButton != null)
        {
            this.addList();
            return;
        }
        const clearListsButton = composedPath.find(item => item.id == "clear-lists-button");
        if(clearListsButton != null)
        {
            this.querySelectorAll('tasklist-fields').forEach(item => item.toggleAttribute('removed', true));
            return;
        }
        const removeListButton = composedPath.find(item => item.id == "tasklist-settings-remove-button");
        if(removeListButton != null)
        {
            (removeListButton.getRootNode() as ShadowRoot).host.toggleAttribute('removed');
            return;
        }
        const duplicateButton = composedPath.find(item => item.id == "tasklist-settings-duplicate-button");
        if(duplicateButton != null)
        {
            const listElement = (duplicateButton.getRootNode() as ShadowRoot).host as TaskListFieldsComponent;
            const [listRecord, settingsRecord] = listElement.getRecords();
            this.duplicateList(listElement, listRecord, settingsRecord);
            return;
        }


        const removeBoardButton = composedPath.find(item => item.id == "remove-board-button");
        if(removeBoardButton != null)
        {
            
    //     const id  =this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id') ?? this[SHAREDACCESSKEY].getIdFromRoute();
    //     if(id == null)
    //     {
    //         MessageCardElement.notify(`An error occurred deleting a board.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error('Unable to determine the target board\'s id');
    //     }

    //     this.removeBoard(id);
            return;
        }
        const duplicateBoardButton = composedPath.find(item => item.id == "duplicate-board-button");
        if(duplicateBoardButton != null)
        {
            
    //     const id = this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id');
    //     if(id == null)
    //     {
    //         MessageCardElement.notify(`An error occurred duplicating theboard.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error('Unable to determine the target board\'s id');
    //     }
    //     await this.duplicateBoard(id);
    //     this[SHAREDACCESSKEY].refreshBoards();
            return;
        }
        const exportBoardButton = composedPath.find(item => item.id == "export-button");
        if(exportBoardButton != null)
        {
            
    //     const boardId = this.findElement('board-fields').getAttribute('record-id');
    //     if(boardId == null || boardId == '')
    //     {
    //         MessageCardElement.notify(`An error occurred attempting to export the board.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error('Unable to determine the target board\'s id');
    //     }
    //     this.exportBoard(boardId);
            return;
        }

        const closeBoardButton = composedPath.find(item => item.id == "close-board-button");
        if(closeBoardButton != null)
        {
            //     await this.closeBoardSettings();
            //     this.closeBoard();
            return;
        }

        const saveBoardButton = composedPath.find(item => item.id == "board-settings-save");
        if(saveBoardButton != null)
        {
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
            return;
        }

        // finish click handlers
        // saving content
        // export parts
        // smaller screen width

    }
    //#endregion Handlers

    //#region Management
    #addList(taskList: TaskListRecord, taskSettings: TaskSettingsRecord)
    {
        const list = this.#createList(taskList, taskSettings);
        this.append(list);
    }
    #createList(taskList: TaskListRecord, taskSettings: TaskSettingsRecord)
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
        
        const handle = taskListElement.findElement('tasklist-settings-handle');
        handle.addEventListener('mousedown', (_event) =>
        {
            taskListElement.draggable = true;
        });
        handle.addEventListener('mouseup', (_event) =>
        {
            taskListElement.removeAttribute('draggable');
        });
        taskListElement.addEventListener('dragstart', (event: DragEvent) => 
        {
            this.#draggingList = taskListElement;
            taskListElement.classList.add('dragging');
            this.classList.add('drop-target');
            event.dataTransfer?.setDragImage(taskListElement.shadowRoot!.querySelector('summary')!, 0, 0); 
        });
        taskListElement.addEventListener('dragend', (_event: DragEvent) => 
        {
            taskListElement.classList.remove('dragging');
            this.#draggingList = null;
            this.classList.remove('drop-target');
        });
        
        return taskListElement;
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
    //#endregion Management

    //#region Internal
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
    //#endregion Internal
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, BoardSettingsElement);
}