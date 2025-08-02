import { DataRecord } from 'record-setter';
import { RoutePageElement } from '@magnit-ce/path-router';
import { TaskListElement } from '@magnit-ce/task-list';

declare class CustomImageRecord extends DataRecord {
    boardId: string;
    isSingleBoard: boolean;
    name: string;
    description: string;
    image?: Blob;
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

type ExportedImage = Partial<CustomImageRecord> & {
    image_base64?: string;
};

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

type ColorScheme = 'inherit' | 'browser' | 'light' | 'dark';

declare class TaskboardManagerElement extends HTMLElement {
    #private;
    componentParts: Map<string, HTMLElement>;
    getElement<T extends HTMLElement | RoutePageElement = HTMLElement>(id: string): T;
    findElement<T extends HTMLElement | RoutePageElement = HTMLElement>(id: string): T;
    constructor();
    /**
    * Initializes the app.
    * Not necessary if the `autolaunch` attribute was not set to `false`.
    */
    init(): Promise<void>;
    setColorScheme(scheme: ColorScheme): void;
    undo(): Promise<void>;
    redo(): Promise<void>;
    refreshBoards(): Promise<void>;
    refreshCurrentBoard(): void;
    refreshBoardCollections(): Promise<void>;
    openBoard(id: string): Promise<void>;
    refreshBoard(): Promise<void>;
    closeBoard(): Promise<void>;
    addBoard(): Promise<TaskBoardRecord>;
    editBoard(boardId: string): void;
    openBoardSettings(id: string): Promise<void>;
    exportBoard(id: string): Promise<void>;
    importBoard(boardData: BoardExport, errorMessage?: string): Promise<void>;
    removeBoard(boardId: string, confirm?: boolean): Promise<void>;
    duplicateBoard(id: string): Promise<void>;
    closeBoardSettings(): Promise<unknown>;
    clearData(): Promise<void>;
    addTask(list: TaskListElement, order: number): void;
    static observedAttributes: string[];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string): void;
}

export { TaskboardManagerElement };
