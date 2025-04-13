import { DialogService, ErrorMessageType } from "../dialog.service";
import { BoardChannel } from "./channels/board.channel";
import { DataChannel } from "./channels/data.channel";
import { TaskboardManagerElementData } from "./data";
import { TaskBoardRecord } from "./records/task-board.record";


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
    static #hasStartedInitialization: boolean = false;
    static #hasFinishedInitialization: boolean = false;

    static async init(datastoreName: string|null)
    {
        DataService.#hasStartedInitialization = true;
        DataService.#data = new TaskboardManagerElementData((datastoreName == null) ? undefined : {name: datastoreName});
        await this.#data.init();
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
    static getAppSetting<T extends string|number|boolean|Blob|null|undefined = undefined>(key: string)
    {
        if(DataService.#data.isInitialized == false)
        {
            DialogService.showErrorMessageDialog(ErrorMessageType.SETTINGS);
            throw new Error(`Data Access Error`);
        }
        return DataService.#data.getValue<T>(key);
    }
    static async saveAppSetting(key: string, value: string|number|boolean|Blob|null)
    {
        if(DataService.#data.isInitialized == false)
        {
            DialogService.showErrorMessageDialog(ErrorMessageType.SETTINGS);
            throw new Error(`Data Access Error`);
        }
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

        const boardChannel = DataService.#getChannel<BoardChannel>(DataService.data.boards, ErrorMessageType.BOARD);
        return (await boardChannel.getItems(ids)).filter(item => item.deletedTimestamp == null);
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
    
    //#endregion Tasks

    //#region History
    
    //#endregion History

    //#region Internal
    static #getChannel<T extends DataChannel>(channel: T|undefined, errorType: ErrorMessageType = ErrorMessageType.UNKNOWN)
    {
        if(DataService.data.isInitialized == false || channel == null)
        {
            DialogService.showErrorMessageDialog(errorType);
            throw new Error(`Data Access Error`);
        }
        return channel;
    }
    //#endregion Internal
}