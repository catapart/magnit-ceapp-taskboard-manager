import { HistoryEntryType } from "@magnit-ce/action-history";
import { HistoryEntryData, type HistoryEntryTargetCategoryType } from "../history/history-entry-data";
import { DataRecord } from "record-setter";

export class HistoryEntryRecord<T extends HistoryEntryTargetCategoryType = HistoryEntryTargetCategoryType> extends DataRecord
{
    action: HistoryEntryType = HistoryEntryType.Read;
    timestamp: number = -1;
    data!: HistoryEntryData<T>;
    isActive: number = 0;
}