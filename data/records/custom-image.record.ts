import { DataRecord } from "record-setter";

export class CustomImageRecord extends DataRecord
{
    boardId:string = "";
    isSingleBoard: boolean = false;
    name: string = "";
    description: string = "";
    image?: Blob;

    deletedTimestamp?: number;
}