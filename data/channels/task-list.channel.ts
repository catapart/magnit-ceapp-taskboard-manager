import { RecordSetter, RecordStore } from "record-setter";
import { TaskListRecord } from "../records/task-list.record";
import { TaskSettingsRecord } from "../records/task-settings.record";
import { TaskRecord } from "../records/task.record";
import { DataChannel } from "./data.channel";
import { TaskSettingsChannel } from "./task-settings.channel";

export class TaskListChannel extends DataChannel<TaskListRecord>
{
    create(sourceList?: TaskListRecord, sourceSettings?:TaskSettingsRecord)
    {
        const list = sourceList || new TaskListRecord();
        list.id = RecordSetter.generateId();
        
        const taskSettings = (this.channels.taskSettings as TaskSettingsChannel).create('list', sourceSettings);
        list.taskSettingsId = taskSettings.id;
        
        return [list, taskSettings] as [TaskListRecord, TaskSettingsRecord];
    }
    async delete(id: string, overrideSoftDelete: boolean = false)
    {
        const store = this.data.stores.get('tasklists') as RecordStore<TaskListRecord>;
        if(store == null) { throw new Error("Store is null."); }

        const list = await this.get(id);
        if(list == null) { throw new Error("Record is null."); }
        if(list.deletedTimestamp != null && overrideSoftDelete == false) { return; }
        
        await store.removeRecord(id, overrideSoftDelete)

        await this.channels.taskSettings.delete(list.taskSettingsId, overrideSoftDelete);

        const tasks = await this.channels.tasks.query({listId: id}) as TaskRecord[];
        for(let i = 0; i < tasks.length; i++)
        {
            if(tasks[i].deletedTimestamp == null)
            {
                await this.channels.tasks.delete(tasks[i].id, overrideSoftDelete);
            }
        }

        return true;
    }
    async deleteItems(ids: string[], overrideSoftDelete: boolean = false)
    {
        const store = this.data.stores.get('tasklists') as RecordStore<TaskListRecord>;
        if(store == null) { throw new Error("Store is null."); }

        const taskLists = await this.getItems(ids);
        const filteredLists = taskLists.filter(item => item.deletedTimestamp == null);
        let toRemove = filteredLists.map(item => item.id);
        await store.removeRecords(toRemove, overrideSoftDelete);

        const tasks = await this.channels.tasks.query({listId: ids}) as TaskRecord[];
        const taskIds = tasks.filter(item => item.deletedTimestamp == null).map(item => item.id);
        await this.channels.tasks.deleteItems(taskIds);

        const taskSettingsIds = filteredLists.map(item => item.taskSettingsId);
        await this.channels.taskSettings.deleteItems(taskSettingsIds);

        return new Array().fill(true, 0, ids.length);
    }
    async restore(id: string)
    {
        const store = this.data.getStore<TaskListRecord>('tasklists');
        if(store == null) { throw new Error("Store is null."); }

        const list = await this.get(id);
        if(list == null) { throw new Error("Record is null."); }

        const listDeleted = list.deletedTimestamp;
        if(listDeleted == null)
        {
            throw new Error("Deleted timestamp is null");
        }

        await this.channels.taskSettings.restore(list.taskSettingsId);

        const tasks = await this.channels.tasks.query({listId: id}) as TaskRecord[];
        for(let i = 0; i < tasks.length; i++)
        {
            const taskDeleted = tasks[i].deletedTimestamp ?? Number.MIN_SAFE_INTEGER;
            if(taskDeleted >= listDeleted)
            {
                await this.channels.tasks.restore(tasks[i].id);
            }
        }

        return store.restoreRecord(id);
    }
}