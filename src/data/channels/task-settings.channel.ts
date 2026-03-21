import { RecordSetter } from "record-setter";
import { TaskSettingsRecord, type TaskSettingsParentRecordCategory } from "../records/task-settings.record";
import { DataChannel } from "./data.channel";

export class TaskSettingsChannel extends DataChannel<TaskSettingsRecord>
{
    create(parentType: TaskSettingsParentRecordCategory, sourceSettings?: TaskSettingsRecord)
    {
        const taskSettings = sourceSettings || new TaskSettingsRecord();
        taskSettings.id = RecordSetter.generateId();
        taskSettings.parentRecordType = parentType;
        return taskSettings;
    }
}