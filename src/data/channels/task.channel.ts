import { RecordSetter } from "record-setter";
import { TaskRecord } from "../records/task.record";
import { DataChannel } from "./data.channel";

export class TaskChannel extends DataChannel<TaskRecord>
{
    create(boardId: string, listId:string)
    {
        const task = new TaskRecord();
        task.id = RecordSetter.generateId();
        task.boardId = boardId;
        task.listId = listId;

        return task;
    }
}