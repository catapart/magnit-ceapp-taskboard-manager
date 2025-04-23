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
import { MessageCardType } from '@magnit-ce/message-card';
import { CustomImageActionProperties } from '../../data/history/custom-image-action-properties';

export type BoardSettingsProperties = 
{
    canAddList: () => boolean;
    removeBoard: (boardId: string, confirm?: boolean) => void;
    duplicateBoard: (id: string) => void;
    exportBoard: (id: string) => void;
    closeBoard: () => void;
    closeBoardSettings: () => void;
    saveSettingsTarget: () => void;
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
    #removeBoard!: (boardId: string, confirm?: boolean) => void;
    #duplicateBoard!: (id: string) => void;
    #exportBoard!: (id: string) => void;
    #closeBoard!: () => void;
    #closeBoardSettings!: () => void;
    #saveSettingsTarget!: () => void;
    init(options: BoardSettingsProperties)
    {
        this.#canAddList = options.canAddList;
        this.#removeBoard = options.removeBoard;
        this.#duplicateBoard = options.duplicateBoard;
        this.#exportBoard = options.exportBoard;
        this.#closeBoard = options.closeBoard;
        this.#closeBoardSettings = options.closeBoardSettings;
        this.#saveSettingsTarget = options.saveSettingsTarget;
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

        const boardTaskSettings = this.findElement<TaskFieldsComponent>('board-task-settings').getRecord();
        boardTaskSettings.parentRecordType = 'board';

        board.taskSettingsId = boardTaskSettings.id;

        const listFields = [...this.querySelectorAll('tasklist-fields')] as TaskListFieldsComponent[];
        const lists: TaskListRecord[] = [];
        const toRemove: string[] = [];
        const taskSettings: TaskSettingsRecord[] = [boardTaskSettings];
        for(let i = 0; i < listFields.length; i++)
        {
            const element = listFields[i];
            if(element.hasAttribute('removed'))
            {
                const recordId = element.getAttribute('tasklist-record-id');
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

    async saveBoard(order: number)
    {
        const [ board, taskLists, taskSettings, removedListIds ] = this.getRecords();

        const [existingBoard, existingTaskLists, existingTaskSettings ] = await Promise.all([
            DataService.getBoardRecord(board.id),
            (await DataService.getBoardLists(board.id)).filter(item => item.deletedTimestamp == undefined),
            DataService.getTaskSettingsRecords(...taskSettings.map(item => item.id))
        ]);
        if(existingBoard == null)
        { 
            FeedbackService.showErrorMessageCard(`An error occurred saving a task board.`);
            console.error(`An error occurred finding the existing board record.`);
            return [];
        }
        board.order = order;
        board.backgroundImageId = existingBoard.backgroundImageId;

        // convert backgroundImage into backgroundImageUpdates
        let existingImageActionProperties: CustomImageActionProperties = { id: board.backgroundImageId, updates: new Map() };
        const imageUpdates: CustomImageActionProperties[] = [];

        const imageValue = this.findElement<FileImageInputElement>('board-background-image').value;
        let backgroundImageRecord: CustomImageRecord|null = null;
        if(imageValue != null)
        {
            if(board.backgroundImageId != "")
            {
                const existingImage = await DataService.getImageRecord(board.backgroundImageId);
                if(existingImage != null)
                {
                    await DataService.deleteImage(existingImage.id);
                    const deletedImage = await DataService.getImageRecord(board.backgroundImageId);
                    existingImageActionProperties.updates!.set('deletedTimestamp', { from: undefined, to: deletedImage?.deletedTimestamp });
                    imageUpdates.push(existingImageActionProperties);
                }
            }

            backgroundImageRecord = DataService.createImageFromImage(imageValue);
            backgroundImageRecord.boardId = board.id;
            backgroundImageRecord = await DataService.saveImage(backgroundImageRecord);
            const newImageActionUpdates = { id: backgroundImageRecord.id, updates: new Map([['boardId', { from: "", to: backgroundImageRecord.boardId }]]) };
            imageUpdates.push(newImageActionUpdates);

            board.backgroundImageId = backgroundImageRecord.id;
        }
        else
        {
            if(board.backgroundImageId != "")
            {
                await DataService.deleteImage(board.backgroundImageId);
                const deletedImage = await DataService.getImageRecord(board.backgroundImageId);
                existingImageActionProperties.updates!.set('deletedTimestamp', { from: undefined, to: deletedImage?.deletedTimestamp });
                imageUpdates.push(existingImageActionProperties);
                board.backgroundImageId = "";
            }
        }

        // save data
        await Promise.allSettled([
            DataService.saveBoardRecords(board),
            DataService.saveListRecords(...taskLists),
            DataService.saveTaskSettingsRecords(...taskSettings),
            DataService.deleteListRecords(...removedListIds),
        ]);

        
        FeedbackService.showMessageCard_customTitle(`The board settings have been saved successfully!`, MessageCardType.Success, "Success!");

        return [ existingBoard,
            existingTaskLists,
            existingTaskSettings,
            board,
            taskLists,
            taskSettings,
            imageUpdates,
        ] as [ TaskBoardRecord,
        TaskListRecord[],
        TaskSettingsRecord[],
        TaskBoardRecord,
        TaskListRecord[],
        TaskSettingsRecord[],
        CustomImageActionProperties[]
        ];
    }
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
            const id = this.getAttribute('record-id');
            if(id == null || id.trim() == "")
            {
                FeedbackService.showErrorMessageCard(`An error occurred deleting a board.`);
                throw new Error(`Unable to determine the target board's id`);
            }
            event.preventDefault();
            event.stopPropagation();
            this.#removeBoard(id);
            return;
        }

        const duplicateBoardButton = composedPath.find(item => item.id == "duplicate-board-button");
        if(duplicateBoardButton != null)
        {
            const id = this.getAttribute('record-id');
            if(id == null)
            {
                FeedbackService.showErrorMessageCard(`An error occurred duplicating theboard.`);
                throw new Error('Unable to determine the target board\'s id');
            }
            
            this.#duplicateBoard(id);

            return;
        }
        const exportBoardButton = composedPath.find(item => item.id == "export-button");
        if(exportBoardButton != null)
        {
            const boardId = this.getAttribute('record-id');
            if(boardId == null || boardId == '')
            {
                FeedbackService.showErrorMessageCard(`An error occurred attempting to export the board.`);
                throw new Error('Unable to determine the target board\'s id');
            }
            this.#exportBoard(boardId);
            return;
        }

        const closeBoardButton = composedPath.find(item => item.id == "close-board-button");
        if(closeBoardButton != null)
        {
            this.#closeBoardSettings();
            this.#closeBoard();
            return;
        }

        const saveBoardButton = composedPath.find(item => item.id == "board-settings-save");
        if(saveBoardButton != null)
        {
            new Promise<void>(async (resolve) =>
            {
                this.#saveSettingsTarget();
            });
            return;
        }
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
        taskListElement.classList.add('tasklist-settings');
        taskListElement.part.add('tasklist-settings');
        taskListElement.style.setProperty('color-scheme', this.style.getPropertyValue('color-scheme'));

        // todo: stop composing this unchanging value
        const tasklistExportParts = new Set(([...taskListElement.shadowRoot!.querySelectorAll('[id],[class]')] as HTMLElement[]).map(item =>
        {
            if(item instanceof TaskFieldsComponent)
            {
                const taskFieldsParts = item.getAttribute('exportparts')!.replaceAll(/[\s\n]/g, '').split(',');
                return taskFieldsParts;
            }
            const parts = [item.id,
            ...item.classList.values()];
            return parts;
        }).flat().filter(item => item.length > 0));

        taskListElement.setAttribute('exportparts', `${Array.from(tasklistExportParts).join(",\n")}`);
        
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
        const formFieldElements = [...this.shadowRoot!.querySelectorAll('form-field')];
        for(let i = 0; i < formFieldElements.length; i++)
        {
            const formFieldElement = formFieldElements[i];
            const fieldId = formFieldElement.id;
            
            const container = formFieldElement.querySelector('.container');
            container?.part.add('container', 'field-container', `${fieldId}-container`);
            const label = formFieldElement.querySelector('.field-label');
            label?.part.add('label', 'field-label', `${fieldId}-label`);
            const prefix = formFieldElement.querySelector('.prefix');
            prefix?.part.add('prefix', 'field-prefix', `${fieldId}-prefix`);
            const postfix = formFieldElement.querySelector('.postfix');
            postfix?.part.add('postfix', 'field-postfix', `${fieldId}-postfix`);
            const enabledCheckbox = formFieldElement.querySelector('.enabled-checkbox');
            enabledCheckbox?.part.add('enabled-checkbox', 'field-enabled-checkbox', `${fieldId}-enabled-checkbox`);
        }
    }
    //#endregion Internal
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, BoardSettingsElement);
}