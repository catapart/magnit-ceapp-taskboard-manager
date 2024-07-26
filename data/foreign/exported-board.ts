import { extendableType } from "../data";
import { CustomImageRecord } from "../records/custom-image.record";
import { TaskBoardRecord } from "../records/task-board.record";
import { TaskListRecord } from "../records/task-list.record";
import { TaskSettingsRecord } from "../records/task-settings.record";
import { ExportedImage, ImageExport } from "./exported-image";
import { ExportedList, ListExport } from "./exported-list";

export type ExportedBoard =  Partial<TaskBoardRecord> &
{
    lists?: ExportedList[];
    backgroundImage?: ExportedImage;
    taskSettings?: Partial<TaskSettingsRecord>;
}

export class BoardExport extends extendableType<ExportedBoard>()
{
    constructor(board?: TaskBoardRecord, taskSettings?: TaskSettingsRecord, backgroundImage?: CustomImageRecord, lists?: ListExport[])
    {
        super();

        Object.assign(this, board);
        this.taskSettings = taskSettings;
        this.lists = lists;
        this.backgroundImage = (backgroundImage != null) ? new ImageExport(backgroundImage) : undefined;
    }
}