import { TaskBoardRecord } from "./records/task-board.record";
import { CustomImageRecord } from "./records/custom-image.record";
import { RecordSetter } from "record-setter";
import { TaskListRecord } from "./records/task-list.record";
import { TaskSettingsRecord } from "./records/task-settings.record";
import { TaskRecord } from "./records/task.record";
import { BoardChannel } from "./channels/board.channel";
import { TaskListChannel } from "./channels/task-list.channel";
import { TaskChannel } from "./channels/task.channel";
import { TaskSettingsChannel } from "./channels/task-settings.channel";
import { CustomImageChannel } from "./channels/custom-image.channel";
import { BoardExport } from "./foreign/exported-board";
import { HistoryEntryRecord } from "./records/history-entry.record";
import { HistoryEntryChannel } from "./channels/history-entry.channel";
import { type PropertyUpdate } from "./history/history-entry-data";
import { type BoardActionProperties } from "./history/board-action-properties";
import { type ListActionProperties } from "./history/list-action-properties";
import { type TaskSettingsActionProperties } from "./history/task-settings-action-properties";
import { type CustomImageActionProperties } from "./history/custom-image-action-properties";

const DEFAULT_SCHEMA = 
{
    "boards": "id, order",
    "tasklists": "id, boardId, order",
    "tasks": "id, boardId, listId, order",
    "taskSettings": "id, [parentRecordType+parentId]",
    "customImages": "id, boardId, parentId",
    "actionHistoryEntries": "id, boardId",
}
export class TaskboardManagerElementDataConfig
{
    name: string;
    version: number;
    schema: { [tableName: string]: string };
    constructor(name: string = "TaskManager", version: number = 1, schema: { [tableName: string]: string } = DEFAULT_SCHEMA)
    {
        this.name = name;
        this.version = version;
        this.schema = schema;
    }
}

export class TaskboardManagerElementData
{
    isInitialized: boolean = false; 

    boards?: BoardChannel;
    lists?: TaskListChannel;
    tasks?: TaskChannel;
    taskSettings?: TaskSettingsChannel;
    customImages?: CustomImageChannel;
    historyEntries?: HistoryEntryChannel;

    #data: RecordSetter;
    #config: TaskboardManagerElementDataConfig;

    constructor(config?: Partial<TaskboardManagerElementDataConfig>)
    {
        this.#config = Object.assign(new TaskboardManagerElementDataConfig(), config);        
        this.#data = new RecordSetter();
    }

    async init()
    {
        // add or update the db schema
        await this.#data.open(this.#config);

        // create stores
        // stores match a table name to a TS type;
        // any table listed in the tables parameter will
        // be accessible when working with the store;
        this.#data.addStore<TaskBoardRecord>('boards', 
        [
            'boards',
            'taskSettings',
            'tasklists',
            'tasks',
            'customImages',
        ], { useSoftDelete: true });
        this.#data.addStore<TaskListRecord>('tasklists', 
        [
            'taskSettings',
            'tasklists',
            'tasks',
        ], { useSoftDelete: true });
        this.#data.addStore<TaskRecord>('tasks', 
        [
            'tasks',
        ], { useSoftDelete: true });
        this.#data.addStore<TaskSettingsRecord>('taskSettings', 
        [
            'taskSettings'
        ], { useSoftDelete: true });
        this.#data.addStore<CustomImageRecord>('customImages', 
        [
            'customImages',
        ], { useSoftDelete: true });
        this.#data.addStore<HistoryEntryRecord>('actionHistoryEntries', 
        [
            'actionHistoryEntries',
        ]);

        this.#createChannels();
        this.isInitialized = true;
    }
    #createChannels()
    {
        // channels keep the crud functionality modular and grouped;

        const historyEntriesChannel = new HistoryEntryChannel(this.#data, 'actionHistoryEntries');
        const customImageChannel = new CustomImageChannel(this.#data, 'customImages');
        const taskSettingsChannel = new TaskSettingsChannel(this.#data, 'taskSettings');
        const taskChannel = new TaskChannel(this.#data, 'tasks');
        const taskListChannel = new TaskListChannel(this.#data, 'tasklists', { tasks: taskChannel, taskSettings: taskSettingsChannel });
        const boardChannel = new BoardChannel(this.#data, 'boards', { taskSettings: taskSettingsChannel, taskLists: taskListChannel, tasks: taskChannel, customImages: customImageChannel });

        this.boards = boardChannel;
        this.lists = taskListChannel;
        this.tasks = taskChannel;
        this.taskSettings = taskSettingsChannel;
        this.customImages = customImageChannel;
        this.historyEntries = historyEntriesChannel;
    }

    getValue = <T extends string|number|boolean|Blob|null|undefined = undefined>(key: string) => this.#data.getValue<T>(key);
    setValue = (key: string, value: string|number|boolean|Blob|null|undefined) => this.#data.setValue(key, value);

    async clearAllData()
    {
        return Promise.allSettled([
            (await this.#data.getKeyValueStore()).clear(),
            this.#data.getStore('boards').clear(),
            this.#data.getStore('tasklists').clear(),
            this.#data.getStore('tasks').clear(),
            this.#data.getStore('taskSettings').clear(),
            this.#data.getStore('customImages').clear(),
            this.#data.getStore('actionHistoryEntries').clear(),
        ]);
    }


    // actions    
    boardUpdate_getActionProperties(board: { existing: TaskBoardRecord, updated: TaskBoardRecord }
    , taskLists?: { existing: TaskListRecord[], updated: TaskListRecord[] }
    , taskSettings?: { existing: TaskSettingsRecord[], updated: TaskSettingsRecord[] }
    , image?: { existing: CustomImageRecord|null, updated: CustomImageRecord|null })
    {
        const boardDiff = Object.fromEntries(Object.entries(board.existing)
        .filter(([key, value]) => 
        {
            if(key.toLowerCase().indexOf('color') != -1 && typeof value == 'string' && value.startsWith('#'))
            {
                return value.toLowerCase() !== (board.updated as unknown as any)[key].toLowerCase();
            }
            return value !== (board.updated as unknown as any)[key];
        }));
        const board_changedValues: Map<string, PropertyUpdate> = new Map();
        for(const [key, value] of Object.entries(boardDiff))
        {
            board_changedValues.set(key, { from: value, to: (board.updated as unknown as any)[key] });
        }

        let boardPropertyUpdate: BoardActionProperties|undefined = (board_changedValues.size == 0) ? undefined : {
            id: board.updated.id,
            updates: board_changedValues,
        };

        let imagePropertyUpdate: CustomImageActionProperties|undefined;
        if(image != null && image.existing != null && image.updated != null)
        {
            // if existing is null, that's an add not an update
            // updated should only be null if existing is null
            const imageDiff = Object.fromEntries(Object.entries(image.existing)
            .filter(([key, value]) =>
            {
                if(key == 'image')
                {
                    const targetImage = (image.updated as unknown as any)[key];
                    // stayed null = no match
                    if(value == null && targetImage == null) { return false; }
                    // from null to file or file to null = match
                    if(value == null && targetImage != null 
                    || value != null && targetImage == null) 
                    { return true; }
                    // both non-null, compare file data for match
                    return !(value.name == targetImage.name
                    && value.lastModified == targetImage.lastModified
                    && value.size == targetImage.size
                    && value.type == targetImage.type)
                }
                return value !== (image.updated as unknown as any)[key];
            }));
            const image_changedValues: Map<string, PropertyUpdate> = new Map();
            for(const [key, value] of Object.entries(imageDiff))
            {
                image_changedValues.set(key, { from: value, to: (image.updated as unknown as any)[key] });
            }
            imagePropertyUpdate = (image_changedValues.size == 0) ? undefined : {
                id: image.updated.id,
                updates: image_changedValues
            };

            if(imagePropertyUpdate != null)
            {
                boardPropertyUpdate = boardPropertyUpdate ?? 
                {
                    id: board.updated.id,
                }
                boardPropertyUpdate.backgroundImages = boardPropertyUpdate.backgroundImages ?? [];
                boardPropertyUpdate.backgroundImages.push(imagePropertyUpdate);
            }
        }

        const listPropertyUpdates: ListActionProperties[] = [];
        const settingsIdListMap: Map<string, string> = new Map();
        if(taskLists != null)
        {
            for(let i = 0; i < taskLists.existing.length; i++)
            {
                const existingList = taskLists.existing[i];
                const updatedList = taskLists.updated[i];

                const listId = existingList?.id ?? updatedList.id;
                if(updatedList != null)
                {
                    settingsIdListMap.set(updatedList.taskSettingsId, listId);
                }
                else if(existingList != null)
                {
                    settingsIdListMap.set(existingList.taskSettingsId, listId);
                }

                if(existingList == null || updatedList == null) { continue; }

                
                const listDiff: { [key: string]: string|number|boolean } = Object.fromEntries(Object.entries(existingList)
                .filter(([key, value]) => 
                {
                    if(key.toLowerCase().indexOf('color') != -1 && typeof value == 'string' && value.startsWith('#'))
                    {
                        return value.toLowerCase() !== (updatedList as unknown as any)[key].toLowerCase();
                    }
                    return value !== (updatedList as unknown as any)[key];
                }));

                const list_changedValues: Map<string, PropertyUpdate> = new Map();
                for(const [key, value] of Object.entries(listDiff))
                {
                    list_changedValues.set(key, { from: value, to: (updatedList as unknown as any)[key] });
                }

                if(list_changedValues.size == 0)
                {
                    continue;
                }


                const listPropertyUpdate: ListActionProperties = {
                    id: updatedList.id,
                    updates: list_changedValues
                };
                listPropertyUpdates.push(listPropertyUpdate);
            }
        }
        
        // const settingsPropertyUpdates: TaskSettingsActionProperties[] = [];
        if(taskSettings != null)
        {

            for(let i = 0; i < taskSettings.existing.length; i++)
            {
                const existingSettings = taskSettings.existing[i];
                const updatedSettings = taskSettings.updated[i];
                if(existingSettings == null || updatedSettings == null) { continue; }
                
                const settingsDiff: { [key: string]: string|number|boolean } = Object.fromEntries(Object.entries(existingSettings)
                .filter(([key, value]) => 
                {
                    if(key.toLowerCase().indexOf('color') != -1 && typeof value == 'string' && value.startsWith('#'))
                    {
                        return value.toLowerCase() !== (updatedSettings as unknown as any)[key].toLowerCase();
                    }
                    return value !== (updatedSettings as unknown as any)[key];
                }));

                const settings_changedValues: Map<string, PropertyUpdate> = new Map();
                for(const [key, value] of Object.entries(settingsDiff))
                {
                    settings_changedValues.set(key, { from: value, to: (updatedSettings as unknown as any)[key] });
                }

                if(settings_changedValues.size == 0)
                {
                    continue;
                }

                const settingsPropertyUpdate: TaskSettingsActionProperties = {
                    id: updatedSettings.id,
                    updates: settings_changedValues
                }

                if(updatedSettings.parentRecordType == 'board')
                {
                    boardPropertyUpdate = boardPropertyUpdate ?? 
                    {
                        id: board.updated.id,
                    }
                    boardPropertyUpdate.taskSettings = settingsPropertyUpdate;
                }
                else if(updatedSettings.parentRecordType == 'list')
                {
                    let listId = settingsIdListMap.get(updatedSettings.id);
                    if(listId == null) { continue; }

                    let parentProperties = listPropertyUpdates.find(item => item.id == listId)
                    if(parentProperties != null)
                    {
                        parentProperties.taskSettings = settingsPropertyUpdate;
                    }
                    else
                    {
                        listPropertyUpdates.push({
                            id: listId,
                            taskSettings: settingsPropertyUpdate
                        });
                    }
                }
            }
        }

        const updates: [
            BoardActionProperties|undefined,
            ListActionProperties[],
        ] = [boardPropertyUpdate, listPropertyUpdates];
        return updates;
    }

    
    // foreign data
    async naturalizeForeignData(boardData: BoardExport, order: number)
    {

        // create board
        // create taskSettings
        // create background image  
        // loop through lists
            // create list
            // create listTaskSettings
            // loop through tasks
                // create task

        const board = new TaskBoardRecord();
        const lists: TaskListRecord[] = [];
        const tasks: TaskRecord[] = [];
        const settings: TaskSettingsRecord[] = [];
        const images: CustomImageRecord[] = [];

        board.id = boardData.id ?? RecordSetter.generateId();
        board.name = boardData.name ?? board.name;
        board.color = boardData.color ?? board.color;
        board.order = order;
        board.backgroundImageId = boardData.backgroundImageId ?? board.backgroundImageId;
        board.backgroundDisplay = boardData.backgroundDisplay ?? board.backgroundDisplay;
        board.backgroundOffsetX = boardData.backgroundOffsetX ?? board.backgroundOffsetX;
        board.backgroundOffsetY = boardData.backgroundOffsetY ?? board.backgroundOffsetY;
        board.useCustomBackgroundColor = boardData.useCustomBackgroundColor ?? board.useCustomBackgroundColor;
        board.backgroundColor = boardData.backgroundColor ?? board.backgroundColor;
        board.useCustomFontColor = boardData.useCustomFontColor ?? board.useCustomFontColor;
        board.fontColor = boardData.fontColor ?? board.fontColor;

        const boardTaskSettings = new TaskSettingsRecord();
        boardTaskSettings.id = boardData.taskSettings?.id ?? RecordSetter.generateId();
        boardTaskSettings.parentRecordType = 'board';

        board.taskSettingsId = boardTaskSettings.id;

        if(boardData.taskSettings != null)
        {
            boardTaskSettings.centerCheckbox = boardData.taskSettings.centerCheckbox ?? boardTaskSettings.centerCheckbox;

            boardTaskSettings.colorDisplay = boardData.taskSettings.colorDisplay ?? boardTaskSettings.colorDisplay;

            boardTaskSettings.useCustomBackgroundColor = boardData.taskSettings.useCustomBackgroundColor ?? boardTaskSettings.useCustomBackgroundColor;
            boardTaskSettings.customBackgroundColor = boardData.taskSettings.customBackgroundColor ?? boardTaskSettings.customBackgroundColor;
            boardTaskSettings.useCustomFontSize = boardData.taskSettings.useCustomFontSize ?? boardTaskSettings.useCustomFontSize;
            boardTaskSettings.customFontSize = boardData.taskSettings.customFontSize ?? boardTaskSettings.customFontSize;
            boardTaskSettings.useCustomFontColor = boardData.taskSettings.useCustomFontColor ?? boardTaskSettings.useCustomFontColor;
            boardTaskSettings.customFontColor = boardData.taskSettings.customFontColor ?? boardTaskSettings.customFontColor;
            boardTaskSettings.useCustomWidth = boardData.taskSettings.useCustomWidth ?? boardTaskSettings.useCustomWidth;
            boardTaskSettings.customWidth = boardData.taskSettings.customWidth ?? boardTaskSettings.customWidth;

            boardTaskSettings.useCustomBorderWidth_top = boardData.taskSettings.useCustomBorderWidth_top ?? boardTaskSettings.useCustomBorderWidth_top;
            boardTaskSettings.borderWidth_top = boardData.taskSettings.borderWidth_top ?? boardTaskSettings.borderWidth_top;
            boardTaskSettings.useCustomBorderWidth_right = boardData.taskSettings.useCustomBorderWidth_right ?? boardTaskSettings.useCustomBorderWidth_right;
            boardTaskSettings.borderWidth_right = boardData.taskSettings.borderWidth_right ?? boardTaskSettings.borderWidth_right;
            boardTaskSettings.useCustomBorderWidth_bottom = boardData.taskSettings.useCustomBorderWidth_bottom ?? boardTaskSettings.useCustomBorderWidth_bottom;
            boardTaskSettings.borderWidth_bottom = boardData.taskSettings.borderWidth_bottom ?? boardTaskSettings.borderWidth_bottom;
            boardTaskSettings.useCustomBorderWidth_left = boardData.taskSettings.useCustomBorderWidth_left ?? boardTaskSettings.useCustomBorderWidth_left;
            boardTaskSettings.borderWidth_left = boardData.taskSettings.borderWidth_left ?? boardTaskSettings.borderWidth_left;

            boardTaskSettings.useCustomBorderRadius = boardData.taskSettings.useCustomBorderRadius ?? boardTaskSettings.useCustomBorderRadius;
            boardTaskSettings.borderRadiusValue = boardData.taskSettings.borderRadiusValue ?? boardTaskSettings.borderRadiusValue;
            boardTaskSettings.borderRadiusUnit = boardData.taskSettings.borderRadiusUnit ?? boardTaskSettings.borderRadiusUnit;
            
            boardTaskSettings.useCustomBorderColor = boardData.taskSettings.useCustomBorderColor ?? boardTaskSettings.useCustomBorderColor;
            boardTaskSettings.customBorderColor = boardData.taskSettings.customBorderColor ?? boardTaskSettings.customBorderColor;

            boardTaskSettings.centerRemoveButton = boardData.taskSettings.centerRemoveButton ?? boardTaskSettings.centerRemoveButton;
        }
        settings.push(boardTaskSettings);
        
        if(boardData.backgroundImage != null)
        {
            const backgroundImage = new CustomImageRecord();
            backgroundImage.id = boardData.backgroundImage.id ?? RecordSetter.generateId();
            backgroundImage.name = boardData.backgroundImage.name ?? backgroundImage.name;
            backgroundImage.description = boardData.backgroundImage.description ?? backgroundImage.description;
            backgroundImage.boardId = boardData.backgroundImage.boardId ?? board.id;
            backgroundImage.isSingleBoard = boardData.backgroundImage.isSingleBoard ?? backgroundImage.isSingleBoard;

            if(boardData.backgroundImage.image_base64 != null)
            {
                const imageResponse = await fetch(boardData.backgroundImage.image_base64);
                backgroundImage.image = new File([await imageResponse.blob()], boardData.backgroundImage.name ?? "Background Image");
            }
            images.push(backgroundImage)
        }

        if(boardData.lists != null)
        {
            for(let i = 0; i < boardData.lists.length; i++)
            {
                const listData = boardData.lists[i];
                const list = new TaskListRecord();
                list.id = listData.id ?? RecordSetter.generateId();
                list.boardId = listData.boardId ?? board.id;
                
                const listTaskSettings = new TaskSettingsRecord();
                listTaskSettings.id = listData.taskSettings?.id ?? RecordSetter.generateId();
                listTaskSettings.parentRecordType = 'list';
                
                list.taskSettingsId = listTaskSettings.id;
                list.category = listData.category ?? list.category;
                list.order = listData.order ?? i;
                list.color = listData.color ?? list.color;
                list.name = listData.name ?? list.name;
                // list.description = listData.description ?? list.description;
                list.colorDisplay = listData.colorDisplay ?? list.colorDisplay;
                list.useCustomBackgroundColor = listData.useCustomBackgroundColor ?? list.useCustomBackgroundColor;
                list.backgroundColor = listData.backgroundColor ?? list.backgroundColor;
                list.useCustomFontColor = listData.useCustomFontColor ?? list.useCustomFontColor;
                list.fontColor = listData.fontColor ?? list.fontColor;
                list.useCustomWidth = listData.useCustomWidth ?? list.useCustomWidth;
                list.width = listData.width ?? list.width;
                list.isCollapsed = listData.isCollapsed ?? list.isCollapsed;

                if(listData.taskSettings != null)
                {
                    listTaskSettings.centerCheckbox = listData.taskSettings.centerCheckbox ?? listTaskSettings.centerCheckbox;

                    listTaskSettings.colorDisplay = listData.taskSettings.colorDisplay ?? listTaskSettings.colorDisplay;

                    listTaskSettings.useCustomBackgroundColor = listData.taskSettings.useCustomBackgroundColor ?? listTaskSettings.useCustomBackgroundColor;
                    listTaskSettings.customBackgroundColor = listData.taskSettings.customBackgroundColor ?? listTaskSettings.customBackgroundColor;
                    listTaskSettings.useCustomFontSize = listData.taskSettings.useCustomFontSize ?? listTaskSettings.useCustomFontSize;
                    listTaskSettings.customFontSize = listData.taskSettings.customFontSize ?? listTaskSettings.customFontSize;
                    listTaskSettings.useCustomFontColor = listData.taskSettings.useCustomFontColor ?? listTaskSettings.useCustomFontColor;
                    listTaskSettings.customFontColor = listData.taskSettings.customFontColor ?? listTaskSettings.customFontColor;
                    listTaskSettings.useCustomWidth = listData.taskSettings.useCustomWidth ?? listTaskSettings.useCustomWidth;
                    listTaskSettings.customWidth = listData.taskSettings.customWidth ?? listTaskSettings.customWidth;

                    listTaskSettings.useCustomBorderWidth_top = listData.taskSettings.useCustomBorderWidth_top ?? listTaskSettings.useCustomBorderWidth_top;
                    listTaskSettings.borderWidth_top = listData.taskSettings.borderWidth_top ?? listTaskSettings.borderWidth_top;
                    listTaskSettings.useCustomBorderWidth_right = listData.taskSettings.useCustomBorderWidth_right ?? listTaskSettings.useCustomBorderWidth_right;
                    listTaskSettings.borderWidth_right = listData.taskSettings.borderWidth_right ?? listTaskSettings.borderWidth_right;
                    listTaskSettings.useCustomBorderWidth_bottom = listData.taskSettings.useCustomBorderWidth_bottom ?? listTaskSettings.useCustomBorderWidth_bottom;
                    listTaskSettings.borderWidth_bottom = listData.taskSettings.borderWidth_bottom ?? listTaskSettings.borderWidth_bottom;
                    listTaskSettings.useCustomBorderWidth_left = listData.taskSettings.useCustomBorderWidth_left ?? listTaskSettings.useCustomBorderWidth_left;
                    listTaskSettings.borderWidth_left = listData.taskSettings.borderWidth_left ?? listTaskSettings.borderWidth_left;

                    listTaskSettings.useCustomBorderRadius = listData.taskSettings.useCustomBorderRadius ?? listTaskSettings.useCustomBorderRadius;
                    listTaskSettings.borderRadiusValue = listData.taskSettings.borderRadiusValue ?? listTaskSettings.borderRadiusValue;
                    listTaskSettings.borderRadiusUnit = listData.taskSettings.borderRadiusUnit ?? listTaskSettings.borderRadiusUnit;
                    
                    listTaskSettings.useCustomBorderColor = listData.taskSettings.useCustomBorderColor ?? listTaskSettings.useCustomBorderColor;
                    listTaskSettings.customBorderColor = listData.taskSettings.customBorderColor ?? listTaskSettings.customBorderColor;

                    listTaskSettings.centerRemoveButton = listData.taskSettings.centerRemoveButton ?? listTaskSettings.centerRemoveButton;
                }
                settings.push(listTaskSettings);

                if(listData.tasks != null)
                {
                    for(let j = 0; j < listData.tasks.length; j++)
                    {
                        const taskData = listData.tasks[j];
                        const task = new TaskRecord();
                        task.id = taskData.id ?? RecordSetter.generateId();
                        task.boardId = taskData.boardId ?? board.id;
                        task.listId = taskData.listId ?? list.id;
                        task.order = taskData.order ?? j;
                        task.color = taskData.color ?? task.color;
                        task.description = taskData.description ?? task.description;
                        task.isFinished = taskData.isFinished ?? task.isFinished;

                        tasks.push(task);
                    }
                }

                lists.push(list);
            }
        }

        const data = [board, lists, tasks, settings, images] as [TaskBoardRecord, TaskListRecord[], TaskRecord[], TaskSettingsRecord[], CustomImageRecord[]];
        return data;
    }
}


export function toBase64(file: Blob)
{
    return new Promise<string>((resolve, reject) => 
    {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
}

export function extendableType<T>(): new () => T { return class {} as any };