
import { extendableType } from "../data";
import { TaskListRecord } from "../records/task-list.record";
import { TaskSettingsRecord } from "../records/task-settings.record";
import { TaskRecord } from "../records/task.record";

export type ExportedList = Partial<TaskListRecord> &
{
    taskSettings?: Partial<TaskSettingsRecord>;
    tasks?: Partial<TaskRecord>[];
}

export class ListExport extends extendableType<ExportedList>()
{
    constructor(list?: ExportedList, taskSettings?: TaskSettingsRecord, tasks?: Partial<TaskRecord>[])
    {
        super();

        Object.assign(this, list);
        this.taskSettings = taskSettings;
        this.tasks = tasks;
    }
}