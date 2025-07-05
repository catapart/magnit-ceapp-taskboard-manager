import { RecordSetter } from "record-setter";
import { DataChannel } from "./data.channel";
import { HistoryEntryRecord } from "../records/history-entry.record";
import { HistoryEntryData, HistoryEntryTargetType } from "../history/history-entry-data";
import { HistoryEntryType } from "@magnit-ce/action-history";

export class HistoryEntryChannel extends DataChannel<HistoryEntryRecord<HistoryEntryTargetType>>
{
    create(data: HistoryEntryData<HistoryEntryTargetType>, action?: HistoryEntryType)
    {
        const record = new HistoryEntryRecord();
        record.id = RecordSetter.generateId();
        if(action != null) { record.action = action; }
        record.data = data;
        record.timestamp = Date.now();
        return record;
    }
    async getActiveEntry()
    {
        const activeEntries = await this.query({ isActive: 1 });
        return activeEntries[0];
    }


    /**
     * Re-evaluates whether or not the ids exist and only deletes
     * items that are still in the database.
     * @param ids the ids of the records to delete
     * @returns `boolean[]` array of values indicating whether the delete was successful. Only contains existing ids.
     */
    async deleteIfExists(ids: string[])
    {
        if(ids.length == 0) { return; }

        const store = this.data.getStore<HistoryEntryRecord>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        const records = await this.getItems(ids);
        const existingRecords = records.filter(item => item != null);
        const existingIds = existingRecords.map(item => item.id);
        if(existingIds.length == 0) { return; }

        return store.removeRecords(existingIds, true);
    }
}