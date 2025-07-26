import { RecordSetter } from "record-setter";
import { TaskBoardRecord } from "../records/task-board.record";
import { CustomImageRecord } from "../records/custom-image.record";
import { TaskListRecord } from "../records/task-list.record";
import { TaskSettingsRecord } from "../records/task-settings.record";
import { TaskRecord } from "../records/task.record";
import { DataChannel } from "./data.channel";
import { TaskListChannel } from "./task-list.channel";
import { TaskSettingsChannel } from "./task-settings.channel";

const DEFAULT_LISTS = [
    { name: 'To Do', description: 'Things to get done.', color: '#837fd0' },
    { name: 'In Progress', description: 'Things being done now.', color: '#55c1c4' },
    { name: 'Blocked', description: 'Things that cannot be done now.', color: '#e45f60' },
    { name: 'In Review', description: 'Things that need confirmation on being done.', color: '#d68e3c' },
    { name: 'Complete', description: 'Things that are done.', color: '#5de467' }
];

export class BoardChannel extends DataChannel<TaskBoardRecord>
{
    create()
    {
        const board = new TaskBoardRecord();
        board.id = RecordSetter.generateId();
        const lists: [TaskListRecord, TaskSettingsRecord][] = [];
        for(let i = 0; i < DEFAULT_LISTS.length; i++)
        {
            const listData = (this.channels.taskLists as TaskListChannel).create();
            listData[0].boardId = board.id;
            listData[0].order = i;
            listData[0].name = DEFAULT_LISTS[i].name;
            listData[0].description = DEFAULT_LISTS[i].description;
            listData[0].color = DEFAULT_LISTS[i].color;
            lists.push(listData);
        }
        
        const taskSettings = (this.channels.taskSettings as TaskSettingsChannel).create('board');
        board.taskSettingsId = taskSettings.id;

        const value: [TaskBoardRecord, TaskSettingsRecord, [TaskListRecord, TaskSettingsRecord][]] = [ board, taskSettings, lists ];
        return value;
    }
    async getTaskLists(boardId: string)
    {
        const store = this.data.getStore<TaskListRecord>('tasklists');
        if(store == null) { throw new Error("Store is null."); }

        const records = await store.query({boardId}, 'order');
        if(records == null) { return []; }

        return records;
    }
    async getTasks(boardId: string)
    {
        const tasks = await this.channels.tasks.query({boardId}, 'order') as TaskRecord[];
        return tasks;
    }
    async delete(id: string, overrideSoftDelete: boolean = false)
    {
        const boardsStore = this.data.getStore<TaskBoardRecord>('boards');
        if(boardsStore == null) { throw new Error("Store is null."); }

        const board = await this.get(id);
        if(board == null
        || (board.deletedTimestamp != null && overrideSoftDelete == false))
        { return; }
        
        await boardsStore.removeRecord(id, overrideSoftDelete);

        await this.channels.taskSettings.delete(board.taskSettingsId, overrideSoftDelete);

        if(board.backgroundImageId != null)
        {
            const backgroundImage = await this.channels.customImages.get(board.backgroundImageId) as CustomImageRecord;
            if(backgroundImage != null && backgroundImage.deletedTimestamp != null)
            {
                await this.channels.customImages.delete(board.backgroundImageId, overrideSoftDelete);
            }
        }

        const lists = await this.getTaskLists(id);
        for(let i = 0; i < lists.length; i++)
        {
            await this.channels.taskLists.delete(lists[i].id, overrideSoftDelete);
        }

        return true;
    }
    async restore(id: string)
    {
        const boardsStore = this.data.getStore<TaskBoardRecord>('boards');
        if(boardsStore == null) { throw new Error("Store is null."); }

        const board = await this.get(id);
        if(board == null) { throw new Error("Record is null."); }

        const boardDeleted = board.deletedTimestamp;
        if(boardDeleted == null)
        {
            throw new Error("Deleted timestamp is null");
        }

        await this.channels.taskSettings.restore(board.taskSettingsId);

        if(board.backgroundImageId != null && board.backgroundImageId.trim() != "")
        {
            const backgroundImage = await this.channels.customImages.get(board.backgroundImageId) as CustomImageRecord;
            const imageDeleted = backgroundImage.deletedTimestamp ?? Number.MIN_SAFE_INTEGER;
            if(backgroundImage != null && imageDeleted >= boardDeleted)
            {
                await this.channels.customImages.restore(board.backgroundImageId);
            }
        }

        const lists = await this.getTaskLists(id);
        for(let i = 0; i < lists.length; i++)
        {
            const listDeleted = lists[i].deletedTimestamp ?? Number.MIN_SAFE_INTEGER;
            if(listDeleted >= boardDeleted)
            {
                await this.channels.taskLists.restore(lists[i].id);
            }
        }

        return boardsStore.restoreRecord(id);
    }
}