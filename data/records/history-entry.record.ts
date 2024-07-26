import { HistoryEntryType } from "../../../action-history/history-entry-type.enum";
import { HistoryEntryTargetType, HistoryEntryData } from "../history/history-entry-data";
import { DataRecord } from "record-setter";

export class HistoryEntryRecord<T extends HistoryEntryTargetType = HistoryEntryTargetType> extends DataRecord
{
    action: HistoryEntryType = HistoryEntryType.Read;
    timestamp: number = -1;
    data!: HistoryEntryData<T>;
    isActive: number = 0;
}