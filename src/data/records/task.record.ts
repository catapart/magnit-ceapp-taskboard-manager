import { DataRecord } from "record-setter";

export class TaskRecord extends DataRecord
{
    boardId: string = "";
    listId: string = "";
    order: number = -1;
    color: string = "#858585";
    description: string = "";
    isFinished: boolean = false;
}