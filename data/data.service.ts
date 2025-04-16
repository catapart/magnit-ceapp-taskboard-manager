import { DataRecord } from "record-setter";
import { BoardSettingsElement } from "../components/board-settings/board-settings";
import { FeedbackService, ErrorMessageType } from "../feedback.service";
import { TaskboardManagerElement } from "../taskboard-manager";
import { BoardChannel } from "./channels/board.channel";
import { CustomImageChannel } from "./channels/custom-image.channel";
import { DataChannel } from "./channels/data.channel";
import { TaskSettingsChannel } from "./channels/task-settings.channel";
import { TaskboardManagerElementData } from "./data";
import { BoardExport } from "./foreign/exported-board";
import { ImageExport } from "./foreign/exported-image";
import { ListExport } from "./foreign/exported-list";
import { TaskBoardRecord } from "./records/task-board.record";
import { TaskListRecord } from "./records/task-list.record";
import { TaskSettingsRecord } from "./records/task-settings.record";
import { TaskRecord } from "./records/task.record";
import { CustomImageRecord } from "./records/custom-image.record";
import { DEFAULT_PERSIST_DAYS } from "../components/config-panel/data-panel/data-panel";
import { TaskListChannel } from "./channels/task-list.channel";
import { TaskChannel } from "./channels/task.channel";
import { HistoryEntryRecord } from "./records/history-entry.record";
import { HistoryEntryData, HistoryEntryTargetType } from "./history/history-entry-data";
import { HistoryEntryType } from "@magnit-ce/action-history";


export const MILLISECONDSINDAY = 1000 * 60 * 60 * 24;
export enum AppSettingKey
{
    ActiveEntryIndex = 'activeEntryIndex',
    HistoryLength = 'historyLength',
    DaysToPersistData = 'daysToPersistData',
    RecentBoards = 'recentBoards',
    ColorScheme = 'color-scheme',
    Language = 'language',
}

export abstract class DataService
{
    static #data: TaskboardManagerElementData;
    static #initPromise: Promise<void>;
    static #hasStartedInitialization: boolean = false;
    static #hasFinishedInitialization: boolean = false;

    static async init(datastoreName: string|null)
    {
        DataService.#hasStartedInitialization = true;
        DataService.#data = new TaskboardManagerElementData((datastoreName == null) ? undefined : {name: datastoreName});
        DataService.#initPromise = this.#data.init();
        await this.#initPromise;
        DataService.#hasFinishedInitialization = true;
    }

    static get data()
    {
        if(DataService.#hasStartedInitialization == false)
        {
            throw new Error("Cannot get data before service has been initialized.");
        }

        if(DataService.#hasFinishedInitialization == false)
        {
            throw new Error("Cannot get data before service has finished initializing.");

        }
        return this.#data;
    }


    //#region Settings
    static async getAppSetting<T extends string|number|boolean|Blob|null|undefined = undefined>(key: string)
    {
        await this.#initPromise;
        return DataService.#data.getValue<T>(key);
    }
    static async saveAppSetting(key: string, value: string|number|boolean|Blob|null)
    {
        await this.#initPromise;
        await DataService.#data.setValue(key, value);
    }
    //#endregion Settings

    //#region Boards
    static async getAllBoardRecords()
    {
        const boardChannel = DataService.#getChannel<BoardChannel>(DataService.data.boards, ErrorMessageType.BOARD);
        return (await boardChannel.getAll()).filter(item => item.deletedTimestamp == null);
    }
    static async getBoardRecords(...ids: string[])
    {
        if(ids.length == 0) { return []; }

        const channel = DataService.#getChannel<BoardChannel>(DataService.data.boards, ErrorMessageType.BOARD);
        return (await channel.getItems(ids)).filter(item => item.deletedTimestamp == null);
    }
    static async getBoardRecord(id: string)
    {
        const channel = DataService.#getChannel<BoardChannel>(DataService.data.boards, ErrorMessageType.BOARD);
        return channel.get(id);
    }
    static async getBoardLists(id: string)
    {
        const channel = DataService.#getChannel<BoardChannel>(DataService.data.boards, ErrorMessageType.BOARD);
        return channel.getTaskLists(id);
    }
    static async getBoardTasks(id: string)
    {
        const channel = DataService.#getChannel<BoardChannel>(DataService.data.boards, ErrorMessageType.BOARD);
        return channel.getTasks(id);
    }
    static async createBoard(order: number)
    {
        const boardChannel = DataService.#getChannel<BoardChannel>(DataService.data.boards, ErrorMessageType.BOARD);
        const listChannel = this.#getChannel(this.#data.lists, ErrorMessageType.LIST);
        const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, ErrorMessageType.BOARD);

        const [ board, taskSettings, listData ] = await boardChannel.create();
        board.order = order;
        boardChannel.save(board);

        const lists: TaskListRecord[] = [];
        const listSettings: TaskSettingsRecord[] = [];
        for(let i = 0; i < listData.length; i++)
        {
            const [ list, settings ] = listData[i];
            lists.push(list);
            listSettings.push(settings);
        }
        listChannel.saveItems(lists);
        taskSettingsChannel.saveItems([taskSettings, ...listSettings]);
        
        return board;
    }
    static async saveBoardRecords(...items: TaskBoardRecord[])
    {
        if(items.length == 0) { return; }

        const boardChannel = DataService.#getChannel<BoardChannel>(DataService.data.boards, ErrorMessageType.BOARD);
        return boardChannel.saveItems(items);
    }

    //#endregion Boards

    //#region Lists
    
    //#endregion Lists

    //#region Tasks
    static async getTaskSettingsRecords(...ids: string[])
    {
        if(ids.length == 0) { return []; }

        const channel = DataService.#getChannel<TaskSettingsChannel>(DataService.data.taskSettings, ErrorMessageType.BOARD);
        return (await channel.getItems(ids)).filter(item => item.deletedTimestamp == null);
    }
    static async getTaskSettingsRecord(id: string)
    {
        const channel = DataService.#getChannel<TaskSettingsChannel>(DataService.data.taskSettings, ErrorMessageType.BOARD);
        return channel.get(id);
    }
    //#endregion Tasks

    //#region Images
    static async getImageRecord(id: string)
    {
        const channel = DataService.#getChannel<CustomImageChannel>(DataService.data.customImages, ErrorMessageType.IMAGE);
        return channel.get(id);
    }
    //#endregion

    //#region History

    static getHistoryEntries()
    {
        const channel = this.#getChannel(this.#data.historyEntries, ErrorMessageType.HISTORY);
        return channel.getAll('timestamp');
    }
    static getHistoryEntry(id: string)
    {
        const channel = this.#getChannel(this.#data.historyEntries, ErrorMessageType.HISTORY);
        return channel.get(id);
    }
    static createHistoryEntry<T extends HistoryEntryTargetType>(data: HistoryEntryData<T>, action: HistoryEntryType)
    {
        const channel = this.#getChannel(this.#data.historyEntries, ErrorMessageType.HISTORY);
        return channel.create(data, action);
    }
    static saveHistoryEntry<T extends HistoryEntryTargetType>(entry: HistoryEntryRecord<T>)
    {
        const channel = this.#getChannel(this.#data.historyEntries, ErrorMessageType.HISTORY);
        return channel.save(entry);
    }
    static saveHistoryEntries<T extends HistoryEntryTargetType>(...entries: HistoryEntryRecord<T>[])
    {
        const channel = this.#getChannel(this.#data.historyEntries, ErrorMessageType.HISTORY);
        return channel.saveItems(entries);
    }
    static deleteHistoryEntriesIfExists(ids: string[])
    {
        const channel = this.#getChannel(this.#data.historyEntries, ErrorMessageType.HISTORY);
        return channel.deleteIfExists(ids);
    }
    static deleteHistoryEntries(...ids: string[])
    {
        const channel = this.#getChannel(this.#data.historyEntries, ErrorMessageType.HISTORY);
        return channel.deleteItems(ids);
    }
    
    static async reverseUpdate(channel: BoardChannel | TaskListChannel | TaskChannel | CustomImageChannel, currentEntry: HistoryEntryRecord<HistoryEntryTargetType>, target: CustomImageRecord | TaskRecord | TaskListRecord | TaskBoardRecord)
    {
        if(currentEntry.data.properties.updates != null)
        {
            let isRestorationUpdate = false;
            for(const [key, value] of currentEntry.data.properties.updates)
            {
                if(key == 'deletedTimestamp')
                {
                    isRestorationUpdate = true;
                    continue;
                }
                (target as unknown as any)[key] = value.from;
            }
            await channel.save(target as unknown as any);
            if(isRestorationUpdate == true)
            {
                await channel.delete(currentEntry.data.properties.id);
            }
        }

        if(currentEntry.data.properties.taskSettings != null && currentEntry.data.properties.taskSettings.updates != null)
        {
            const taskSettingsChannel = DataService.#getChannel<TaskSettingsChannel>(DataService.data.taskSettings, ErrorMessageType.SETTINGS);
            const settingsTarget = await taskSettingsChannel.get(currentEntry.data.properties.taskSettings.id);
            if(settingsTarget == null) { throw new Error('Unable to find target record.'); }
            for(const [key, value] of currentEntry.data.properties.taskSettings.updates)
            {
                (settingsTarget as unknown as any)[key] = value.from;
            }
            await taskSettingsChannel.save(settingsTarget as unknown as any);
        }

        if(currentEntry.data.properties.backgroundImages != null)
        {
            const imagesChannel = DataService.#getChannel<CustomImageChannel>(DataService.data.customImages, ErrorMessageType.IMAGE);
            const updatedImages: CustomImageRecord[] = [];
            const deletedImageIds: string[] = [];
            for(let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++)
            {
                const data = currentEntry.data.properties.backgroundImages[i];
                const imageTarget = await imagesChannel.get(data.id);
                if(imageTarget == null) { throw new Error('Unable to find target record.'); }
                for(const [key, value] of currentEntry.data.properties.backgroundImages[i].updates!)
                {
                    // if boardId going from "" to id, this is an insert; treat it like undoing an image insert
                    if(key == 'boardId' && value.from == "")
                    {
                        deletedImageIds.push(currentEntry.data.properties.backgroundImages[i].id);
                        continue;
                    }
                    (imageTarget as unknown as any)[key] = value.from;
                }
                updatedImages.push(imageTarget);
            }
            await imagesChannel.saveItems(updatedImages);
            await imagesChannel.deleteItems(deletedImageIds);
        }
    }
    static async activateUpdate(channel: BoardChannel | TaskListChannel | TaskChannel | CustomImageChannel, currentEntry: HistoryEntryRecord<HistoryEntryTargetType>, target: CustomImageRecord | TaskRecord | TaskListRecord | TaskBoardRecord)
    {
        if(currentEntry.data.properties.updates != null)
        {
            let isRestorationUpdate = false;
            for(const [key, value] of currentEntry.data.properties.updates)
            {
                if(key == 'deletedTimestamp')
                {
                    isRestorationUpdate = true;
                    continue;
                }
                (target as unknown as any)[key] = value.to;
            }
            await channel.save(target as unknown as any);
            if(isRestorationUpdate == true)
            {
                await channel.restore(currentEntry.data.properties.id);
            }
        }

        if(currentEntry.data.properties.taskSettings != null && currentEntry.data.properties.taskSettings.updates != null)
        {
            const taskSettingsChannel = DataService.#getChannel<TaskSettingsChannel>(DataService.data.taskSettings, ErrorMessageType.SETTINGS);
            const settingsTarget = await taskSettingsChannel.get(currentEntry.data.properties.taskSettings.id);
            if(settingsTarget == null) { throw new Error('Unable to find target record.'); }
            for(const [key, value] of currentEntry.data.properties.taskSettings.updates)
            {
                (settingsTarget as unknown as any)[key] = value.to;
            }
            await taskSettingsChannel.save(settingsTarget as unknown as any);
        }

        if(currentEntry.data.properties.backgroundImages != null)
        {
            const imagesChannel = DataService.#getChannel<CustomImageChannel>(DataService.data.customImages, ErrorMessageType.IMAGE);
            // doesn't clear from image cache when undo after remove
            const updatedImages: CustomImageRecord[] = [];
            const restoredImageIds: string[] = [];
            for(let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++)
            {
                const data = currentEntry.data.properties.backgroundImages[i];
                const imageTarget = await imagesChannel.get(data.id);
                if(imageTarget == null) { throw new Error('Unable to find target record.'); }
                for(const [key, value] of currentEntry.data.properties.backgroundImages[i].updates!)
                {
                    // if boardId going from "" to id, this is an insert; treat it like redoing an image insert
                    if(key == 'boardId' && value.from == "")
                    {
                        restoredImageIds.push(currentEntry.data.properties.backgroundImages[i].id);
                        continue;
                    }
                    (imageTarget as unknown as any)[key] = value.to;
                }
                updatedImages.push(imageTarget);
            }
            await imagesChannel.saveItems(updatedImages);
            await imagesChannel.restoreItems(restoredImageIds);
        }
    }
    //#endregion History

    //#region Cache
    static async getDeletedItems()
    {
        const boardChannel = this.#getChannel(this.#data.boards, ErrorMessageType.BOARD);
        const listChannel = this.#getChannel(this.#data.lists, ErrorMessageType.LIST);
        const taskChannel = this.#getChannel(this.#data.tasks, ErrorMessageType.TASK);
        const imageChannel = this.#getChannel(this.#data.customImages, ErrorMessageType.IMAGE);

        const boards = await boardChannel.getAll();
        const lists = await listChannel.getAll();
        const tasks = await taskChannel.getAll();
        const images = await imageChannel.getAll();

        const deletedBoards = boards.filter(item => item.deletedTimestamp != null);
        const deletedLists = lists.filter(item => item.deletedTimestamp != null);
        const deletedTasks = tasks.filter(item => item.deletedTimestamp != null);
        const deletedImages = images.filter(item => item.deletedTimestamp != null);

        return [ deletedBoards, deletedLists, deletedTasks, deletedImages ] as [TaskBoardRecord[], TaskListRecord[], TaskRecord[], CustomImageRecord[]];
    }
    static deleteImage(id: string, overrideSoftDelete: boolean = false)
    {
        const channel = this.#getChannel(this.#data.customImages, ErrorMessageType.IMAGE);
        return channel.delete(id, overrideSoftDelete);
    }
    static deleteImages(...ids: string[])
    {
        const channel = this.#getChannel(this.#data.customImages, ErrorMessageType.IMAGE);
        return channel.deleteItems(ids);
    }
    //#endregion Cache

    //#region Import/Export
    static async exportBoard(target: TaskboardManagerElement, id: string)
    {
        const boardExportData = await this.#prepareExportData(target, id);
        this.#downloadExportData(target, boardExportData);
    }
    static async importBoard(boardData: BoardExport, order: number, errorMessage?: string)
    {
        try
        {
            const boardChannel = this.#getChannel(this.#data.boards, ErrorMessageType.BOARD);
            const listChannel = this.#getChannel(this.#data.lists, ErrorMessageType.LIST);
            const taskChannel = this.#getChannel(this.#data.tasks, ErrorMessageType.TASK);
            const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, ErrorMessageType.BOARD);
            const imageChannel = this.#getChannel(this.#data.customImages, ErrorMessageType.IMAGE);

            const [ board, lists, tasks, settings, images ] = await this.#data.naturalizeForeignData(boardData, order);

            await Promise.allSettled([
                boardChannel.save(board),
                listChannel.saveItems(lists),
                taskChannel.saveItems(tasks),
                taskSettingsChannel.saveItems(settings),
                imageChannel.saveItems(images)
            ]);
        }
        catch(exception)
        {
            console.error(exception);
            FeedbackService.showMessageDialog(errorMessage || 'An error occurred importing the board data. Please confirm the import file contains valid board data.');
        }
    }

    //#endregion Import/Export

    //#region Management
    static clearAllData()
    {
        return this.#data.clearAllData();
    }
    //#endregion Management

    //#region Utilities
    static async removeExpiredData()
    {
        const boardChannel = DataService.#getChannel(DataService.#data.boards, ErrorMessageType.BOARD);
        const listChannel = DataService.#getChannel(DataService.#data.lists, ErrorMessageType.LIST);
        const taskChannel = DataService.#getChannel(DataService.#data.tasks, ErrorMessageType.TASK);
        const taskSettingsChannel = DataService.#getChannel(DataService.#data.taskSettings, ErrorMessageType.BOARD);
        const imageChannel = DataService.#getChannel(DataService.#data.customImages, ErrorMessageType.IMAGE);

        const daysToPersistData = (await DataService.getAppSetting(AppSettingKey.DaysToPersistData)) ?? DEFAULT_PERSIST_DAYS;
        const comparisonTime = Date.now() - (parseInt(daysToPersistData) * MILLISECONDSINDAY);
        
        const boards = await boardChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
        const lists = await listChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
        const tasks = await taskChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
        const taskSettings = await taskSettingsChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
        const customImages = await imageChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
        const boardIds = this.#getExpiredRecordIds(boards, comparisonTime);
        await boardChannel.deleteItems(boardIds);
        const listIds = this.#getExpiredRecordIds(lists, comparisonTime);
        await listChannel.deleteItems(listIds);
        const taskIds = this.#getExpiredRecordIds(tasks, comparisonTime);
        await taskChannel.deleteItems(taskIds);
        const settingsIds = this.#getExpiredRecordIds(taskSettings, comparisonTime);
        await taskSettingsChannel.deleteItems(settingsIds);
        const imageIds = this.#getExpiredRecordIds(customImages, comparisonTime);
        await imageChannel.deleteItems(imageIds);
        
    }
    //#endregion Utilities

    //#region Internal
    static #getChannel<T extends DataChannel>(channel: T|undefined, errorType: ErrorMessageType = ErrorMessageType.UNKNOWN)
    {
        if(DataService.data.isInitialized == false || channel == null)
        {
            FeedbackService.showErrorMessageDialog(errorType);
            throw new Error(`Data Access Error`);
        }
        return channel;
    }
    static async #prepareExportData(target: TaskboardManagerElement, id: string)
    {
        const exportBackgroundImage = target.findElement<BoardSettingsElement>('board-settings').findElement<HTMLInputElement>('export-background-image').checked;
        
        const boardChannel = this.#getChannel(this.#data.boards, ErrorMessageType.BOARD);
        const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, ErrorMessageType.BOARD);
        const imageChannel = this.#getChannel(this.#data.customImages, ErrorMessageType.IMAGE);

        const board = await boardChannel.get(id);
        if(board == null) { throw new Error(`Error loading board from id: ${id}`); }


        const tasks = await boardChannel.getTasks(id);

        const lists = await boardChannel.getTaskLists(id);
        const listExports: ListExport[] = [];
        const taskSettingsIds: string[] = [board.taskSettingsId];
        for(let i = 0; i < lists.length; i++)
        {
            const list = lists[i];
            if(list.deletedTimestamp != undefined) { continue; }
            const listTasks = tasks.filter(item => item.listId == list.id && item.deletedTimestamp == undefined);
            const listExport = new ListExport(list, undefined, listTasks);
            taskSettingsIds.push(list.taskSettingsId);
            listExports.push(listExport);
        }

        const backgroundImage = (exportBackgroundImage == true && board.backgroundImageId != null && board.backgroundImageId != '') ? (await imageChannel.get(board.backgroundImageId)) ?? undefined : undefined;

        const boardExportData = new BoardExport(board, undefined, backgroundImage);
        if(boardExportData.backgroundImage != null)
        {
            await (boardExportData.backgroundImage as ImageExport).loadImage();
        }
        else if(exportBackgroundImage == false)
        {
            delete boardExportData.backgroundImageId;
        }

        const taskSettings = await taskSettingsChannel.getItems(taskSettingsIds);
        for(let i = 0; i < taskSettings.length; i++)
        {
            const item = taskSettings[i];
            if(board.taskSettingsId == item.id)
            {
                boardExportData.taskSettings = item;
                continue;
            }

            const target = listExports.find(listItem => listItem.taskSettingsId == item.id);
            if(target == null)
            {
                throw new Error(`Error assigning task settings to target list`);
            }
            target.taskSettings = item;
        }
        boardExportData.lists = listExports;

        return boardExportData;
    }
    static #downloadExportData(target: TaskboardManagerElement, boardExportData: BoardExport)
    {
        const currentDate = new Date();
        const currentDateString = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;
        
        const filename = `taskboard_export_${currentDateString}.json`;
        
        const element = document.createElement('a');
        element.setAttribute('href', 
        'data:application/json;charset=utf-8, '
        + encodeURIComponent(JSON.stringify(boardExportData, null, 2)));
        element.setAttribute('download', filename);
        
        target.appendChild(element);
        element.click();
        target.removeChild(element);
    }

    static #getExpiredRecordIds(allRecords: (DataRecord & { deletedTimestamp: number })[], comparisonTime: number)
    {
        const toDelete: string[] = [];
        for(let i = 0; i < allRecords.length; i++)
        {
            const record = allRecords[i];
            if(record.deletedTimestamp != null && record.deletedTimestamp < comparisonTime)
            {
                toDelete.push(record.id);
            }
        }
        return toDelete;
    }
    //#endregion Internal
}