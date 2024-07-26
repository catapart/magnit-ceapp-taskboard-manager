import { DataRecord } from "record-setter";

export enum TaskBoardBackgroundDisplay
{
    Stretch = 'stretch',
    Center = 'center',
    Tile = 'tile',
}

export class TaskBoardRecord extends DataRecord
{
    name: string = "New Board";
    color: string = "#531CE8";
    order: number = -1;
    backgroundImageId: string = "";
    backgroundDisplay: TaskBoardBackgroundDisplay = TaskBoardBackgroundDisplay.Stretch;
    backgroundOffsetX: number = 0;
    backgroundOffsetY: number = 0;
    useCustomBackgroundColor: boolean = false;
    backgroundColor: string = "#f9faf5";
    useCustomFontColor: boolean = false;
    fontColor: string = "#060703";
    taskSettingsId: string = "";

    deletedTimestamp?: number;
}