import { DataRecord, RecordSetter } from 'record-setter';
import { TaskListElement } from '@magnit-ce/task-list';
import { TaskCardElement } from '@magnit-ce/task-card';
import { HistoryEntryType } from '@magnit-ce/action-history';

declare enum TaskListColorDisplay {
    Element = "element",
    BorderColor = "border-color",
    FontColor = "font-color"
}
declare class TaskListRecord extends DataRecord {
    boardId: string;
    taskSettingsId: string;
    category: string;
    order: number;
    color: string;
    name: string;
    description: string;
    colorDisplay: TaskListColorDisplay;
    useCustomBackgroundColor: boolean;
    backgroundColor: string;
    useCustomFontColor: boolean;
    fontColor: string;
    useCustomWidth: boolean;
    width: number;
    isCollapsed: boolean;
}

declare enum TaskColorDisplay {
    Hidden = "hidden",
    Element = "element",
    Borders = "border",
    TopBorder = "top-border",
    RightBorder = "right-border",
    BottomBorder = "bottom-border",
    LeftBorder = "left-border",
    Background = "background"
}
type TaskBorderRadiusUnit = 'px' | '%';
type TaskSettingsParentRecordCategory = 'list' | 'board';
declare class TaskSettingsRecord extends DataRecord {
    parentRecordType: TaskSettingsParentRecordCategory;
    centerCheckbox: boolean;
    colorDisplay: TaskColorDisplay;
    useCustomBackgroundColor: boolean;
    customBackgroundColor: string;
    useCustomFontSize: boolean;
    customFontSize: number;
    useCustomFontColor: boolean;
    customFontColor: string;
    useCustomWidth: boolean;
    customWidth: number;
    useCustomBorderWidth_top: boolean;
    borderWidth_top: number;
    useCustomBorderWidth_right: boolean;
    borderWidth_right: number;
    useCustomBorderWidth_bottom: boolean;
    borderWidth_bottom: number;
    useCustomBorderWidth_left: boolean;
    borderWidth_left: number;
    useCustomBorderRadius: boolean;
    borderRadiusValue: number;
    borderRadiusUnit: TaskBorderRadiusUnit;
    useCustomBorderColor: boolean;
    customBorderColor: string;
    centerRemoveButton: boolean;
}

declare enum TaskBoardBackgroundDisplay {
    Stretch = "stretch",
    Center = "center",
    Tile = "tile"
}
declare class TaskBoardRecord extends DataRecord {
    name: string;
    color: string;
    order: number;
    backgroundImageId: string;
    backgroundDisplay: TaskBoardBackgroundDisplay;
    backgroundOffsetX: number;
    backgroundOffsetY: number;
    useCustomBackgroundColor: boolean;
    backgroundColor: string;
    useCustomFontColor: boolean;
    fontColor: string;
    taskSettingsId: string;
}

declare class CustomImageRecord extends DataRecord {
    boardId: string;
    isSingleBoard: boolean;
    name: string;
    description: string;
    image?: Blob;
}

type ExportedImage = Partial<CustomImageRecord> & {
    image_base64?: string;
};

declare class TaskRecord extends DataRecord {
    boardId: string;
    listId: string;
    order: number;
    color: string;
    description: string;
    isFinished: boolean;
}

type ExportedList = Partial<TaskListRecord> & {
    taskSettings?: Partial<TaskSettingsRecord>;
    tasks?: Partial<TaskRecord>[];
};
declare const ListExport_base: new () => ExportedList;
declare class ListExport extends ListExport_base {
    constructor(list?: ExportedList, taskSettings?: TaskSettingsRecord, tasks?: Partial<TaskRecord>[]);
}

type ExportedBoard = Partial<TaskBoardRecord> & {
    lists?: ExportedList[];
    backgroundImage?: ExportedImage;
    taskSettings?: Partial<TaskSettingsRecord>;
};
declare const BoardExport_base: new () => ExportedBoard;
declare class BoardExport extends BoardExport_base {
    constructor(board?: TaskBoardRecord, taskSettings?: TaskSettingsRecord, backgroundImage?: CustomImageRecord, lists?: ListExport[]);
}

declare abstract class DataChannel<T extends DataRecord = DataRecord> {
    data: RecordSetter;
    storeName: string;
    channels: {
        [key: string]: DataChannel;
    };
    constructor(data: RecordSetter, storeName: string, channels?: {
        [key: string]: DataChannel;
    });
    getAll(sortKey?: string): Promise<T[]>;
    get(id: string): Promise<T | null>;
    getItems(ids: string[]): Promise<T[]>;
    query(equalityPredicate: {
        [key: string]: unknown;
    }, sortKey?: string | undefined): Promise<T[]>;
    save(record: T): Promise<T>;
    saveItems(records: T[]): Promise<T[]>;
    delete(id: string, overrideSoftDelete?: boolean): Promise<boolean | undefined>;
    deleteItems(ids: string[], overrideSoftDelete?: boolean): Promise<boolean[] | undefined>;
    restore(id: string): Promise<boolean>;
    restoreItems(ids: string[]): Promise<any[] | undefined>;
}

declare class BoardChannel extends DataChannel<TaskBoardRecord> {
    create(): [TaskBoardRecord, TaskSettingsRecord, [TaskListRecord, TaskSettingsRecord][]];
    getTaskLists(boardId: string): Promise<TaskListRecord[]>;
    getTasks(boardId: string): Promise<TaskRecord[]>;
    delete(id: string, overrideSoftDelete?: boolean): Promise<true | undefined>;
    restore(id: string): Promise<boolean>;
}

declare class TaskListChannel extends DataChannel<TaskListRecord> {
    create(sourceList?: TaskListRecord, sourceSettings?: TaskSettingsRecord): [TaskListRecord, TaskSettingsRecord];
    delete(id: string, overrideSoftDelete?: boolean): Promise<true | undefined>;
    deleteItems(ids: string[], overrideSoftDelete?: boolean): Promise<any[]>;
    restore(id: string): Promise<boolean>;
}

declare class TaskChannel extends DataChannel<TaskRecord> {
    create(boardId: string, listId: string): TaskRecord;
}

declare class TaskSettingsChannel extends DataChannel<TaskSettingsRecord> {
    create(parentType: TaskSettingsParentRecordCategory, sourceSettings?: TaskSettingsRecord): TaskSettingsRecord;
}

declare class CustomImageChannel extends DataChannel<CustomImageRecord> {
    create(): CustomImageRecord;
    createFromImage(image: File): CustomImageRecord;
}

type CustomImageActionProperties = BasicActionProperties;

type TaskSettingsActionProperties = BasicActionProperties;

type BoardActionProperties = BasicActionProperties & {
    taskSettings?: TaskSettingsActionProperties;
    backgroundImages?: CustomImageActionProperties[];
};

declare enum HistoryEntryTargetType {
    Board = "board",
    List = "list",
    Task = "task",
    Image = "image"
}
type PropertiesType<T extends HistoryEntryTargetType> = T extends HistoryEntryTargetType.Board ? BoardActionProperties : T extends HistoryEntryTargetType.List ? BoardActionProperties : T extends HistoryEntryTargetType.Task ? BoardActionProperties : T extends HistoryEntryTargetType.Image ? BoardActionProperties : Record<string, never>;
type PropertyUpdate = {
    from: string | number | boolean | null | undefined;
    to: string | number | boolean | null | undefined;
};
type BasicActionProperties = {
    id: string;
    updates?: Map<string, PropertyUpdate>;
};
declare class HistoryEntryData<T extends HistoryEntryTargetType = HistoryEntryTargetType.Board> {
    targetType: T;
    properties: PropertiesType<T>;
    constructor(targetType: T, properties: PropertiesType<T>);
}

declare class HistoryEntryRecord<T extends HistoryEntryTargetType = HistoryEntryTargetType> extends DataRecord {
    action: HistoryEntryType;
    timestamp: number;
    data: HistoryEntryData<T>;
    isActive: number;
}

declare class HistoryEntryChannel extends DataChannel<HistoryEntryRecord<HistoryEntryTargetType>> {
    create(data: HistoryEntryData<HistoryEntryTargetType>, action?: HistoryEntryType): HistoryEntryRecord<HistoryEntryTargetType>;
    getActiveEntry(): Promise<HistoryEntryRecord<HistoryEntryTargetType>>;
    /**
     * Re-evaluates whether or not the ids exist and only deletes
     * items that are still in the database.
     * @param ids the ids of the records to delete
     * @returns `boolean[]` array of values indicating whether the delete was successful. Only contains existing ids.
     */
    deleteIfExists(ids: string[]): Promise<boolean[] | undefined>;
}

type ListActionProperties = BasicActionProperties & {
    taskSettings?: TaskSettingsActionProperties;
};

declare class TaskManagerComponentDataConfig {
    name: string;
    version: number;
    schema: {
        [tableName: string]: string;
    };
    constructor(name?: string, version?: number, schema?: {
        [tableName: string]: string;
    });
}
declare class TaskManagerComponentData {
    #private;
    isInitialized: boolean;
    boards?: BoardChannel;
    lists?: TaskListChannel;
    tasks?: TaskChannel;
    taskSettings?: TaskSettingsChannel;
    customImages?: CustomImageChannel;
    historyEntries?: HistoryEntryChannel;
    constructor(config?: Partial<TaskManagerComponentDataConfig>);
    init(): Promise<void>;
    getValue: <T extends string | number | boolean | Blob | null | undefined = undefined>(key: string) => Promise<T | null>;
    setValue: (key: string, value: string | number | boolean | Blob | null | undefined) => Promise<void>;
    clearAllData(): Promise<[PromiseSettledResult<unknown>, PromiseSettledResult<unknown>, PromiseSettledResult<unknown>, PromiseSettledResult<unknown>, PromiseSettledResult<unknown>, PromiseSettledResult<unknown>, PromiseSettledResult<unknown>]>;
    boardUpdate_getActionProperties(board: {
        existing: TaskBoardRecord;
        updated: TaskBoardRecord;
    }, taskLists?: {
        existing: TaskListRecord[];
        updated: TaskListRecord[];
    }, taskSettings?: {
        existing: TaskSettingsRecord[];
        updated: TaskSettingsRecord[];
    }, image?: {
        existing: CustomImageRecord | null;
        updated: CustomImageRecord | null;
    }): [BoardActionProperties | undefined, ListActionProperties[]];
    naturalizeForeignData(boardData: BoardExport, order: number): Promise<[TaskBoardRecord, TaskListRecord[], TaskRecord[], TaskSettingsRecord[], CustomImageRecord[]]>;
}

declare enum AppSettingKey {
    ActiveEntryIndex = "activeEntryIndex",
    HistoryLength = "historyLength",
    DaysToPersistData = "daysToPersistData",
    RecentBoards = "recentBoards",
    ColorScheme = "color-scheme",
    Language = "language"
}
/** Helper const for accessing component-specific methods and properties
* used to make development possible across multiple modular files.
* Not suited for interacting with the component  */
declare const SHAREDACCESSKEY: unique symbol;
/** Helper type for accessing component-specific methods and properties
* used to make development possible across multiple modular files.
* Not suited for interacting with the component  */
type SharedContent = {
    data: TaskManagerComponentData;
    refreshBoards: () => Promise<void>;
    refreshActionHistory: () => Promise<void>;
    refreshDeletedItems: () => Promise<void>;
    saveAppSetting: (key: string, value: string | number | boolean | Blob | null) => Promise<void>;
    restoreDeletedItem: (targetType: HistoryEntryTargetType | null, recordId: string, timestamp: number) => void;
    handleActionEntryReverse: (targetEntry: HTMLElement, previousEntry: HTMLElement | undefined, targetIndex: number, previousEntryIndex: number) => void;
    handelActionEntryActivate: (targetEntry: HTMLElement, previousEntry: HTMLElement | undefined, targetIndex: number, previousEntryIndex: number) => void;
    prepareHistoryEntries: () => void;
    applyHistoryLength: () => Promise<void>;
    renderBoard: (id: string) => void;
    updateBoardSettings: () => void;
    updateBoardRecordsAfterMove: () => void;
    updateBoardItemOrder: (draggingCursorY: number) => void;
    removeBoardFromRecentBoards: (id: string) => Promise<void>;
    updateListRecord: (taskListComponent: TaskListElement) => void;
    duplicateList: (target: HTMLElement, list: TaskListRecord, settings: TaskSettingsRecord) => void;
    registerTaskCard: (card: TaskCardElement, listId: string, order: number) => void;
    updateTaskRecord: (taskComponent: TaskCardElement, parentList: TaskListElement) => void;
    deleteTaskRecord: (taskComponent: TaskCardElement) => void;
    updateTaskRecordsAfterMove: (target: TaskCardElement, parent: TaskListElement) => void;
    openImportManager: (data: any) => void;
    snapToStep: (target: HTMLInputElement, steps: number[]) => void;
    getConfirmation: (message: string, type: 'info' | 'warn' | 'danger') => Promise<boolean>;
    getIdFromRoute: () => string;
    DaysToPersistValues: Array<number>;
    HistoryLengthSteps: Array<number>;
};
declare class TaskboardManagerElement extends HTMLElement {
    #private;
    static observedAttributes: never[];
    componentParts: Map<string, HTMLElement>;
    getPart<T extends HTMLElement = HTMLElement>(key: string): T;
    findPart<T extends HTMLElement = HTMLElement>(key: string): T;
    initPromise?: Promise<void>;
    /** Exposes "shared" private functions/properties to external modules. */
    [SHAREDACCESSKEY]: SharedContent;
    constructor();
    /**
    * Initializes the app.
    * Not necessary if the `autolaunch` attribute was not set to `false`.
    */
    init(): Promise<void>;
    addBoard(): Promise<void>;
    openBoard(id: string): Promise<void>;
    closeBoard(): Promise<void>;
    openBoardSettings(id: string): Promise<void>;
    duplicateBoard(id: string): Promise<void>;
    removeBoard(boardId: string, confirm?: boolean): Promise<void>;
    exportBoard(id: string): Promise<void>;
    importBoard(boardData: BoardExport, errorMessage?: string): Promise<void>;
    closeBoardSettings(): Promise<unknown>;
    addList(): void;
    undo(): Promise<void>;
    redo(): Promise<void>;
    clearData(): Promise<void>;
    clearHistory(): Promise<void>;
    setColorScheme(scheme: 'inherit' | 'browser' | 'light' | 'dark'): void;
    deleteItem(item: HTMLElement, refresh?: boolean): Promise<void>;
    deleteImage(item: HTMLElement, refresh?: boolean): Promise<void>;
}

export { AppSettingKey, SHAREDACCESSKEY, TaskboardManagerElement };
