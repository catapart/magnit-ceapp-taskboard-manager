import { RecordSetter } from "record-setter";
import { CustomImageRecord } from "../records/custom-image.record";
import { DataChannel } from "./data.channel";

export class CustomImageChannel extends DataChannel<CustomImageRecord>
{
    create()
    {
        const record = new CustomImageRecord();
        record.id = RecordSetter.generateId();
        return record;
    }
    createFromImage(image: File)
    {
        const record = new CustomImageRecord();
        record.id = RecordSetter.generateId();
        record.name = image.name;
        record.image = image;

        return record;
    }
}