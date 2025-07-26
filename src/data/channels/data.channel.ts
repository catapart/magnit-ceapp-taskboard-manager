import { DataRecord, RecordSetter } from "record-setter";

export abstract class DataChannel<T extends DataRecord = DataRecord>
{
    data: RecordSetter
    storeName: string;
    channels: { [key: string]: DataChannel };

    constructor(data: RecordSetter, storeName: string, channels: { [key: string]: DataChannel } = {})
    {
        this.data = data;
        this.storeName = storeName;
        this.channels = channels;
    }
    
    async getAll(sortKey: string = 'order')
    {
        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        const records = await store.getAllRecords(sortKey);
        if(records == null) { return []; }

        return records;
    }
    async get(id: string)
    {
        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        return store.getRecord(id);
    }
    async getItems(ids: string[])
    {
        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        const records = await store.getRecords(ids, 'order');
        if(records == null) { return []; }
        return records;
    }
    async query(equalityPredicate: { [key: string]: unknown; }, sortKey?: string | undefined)
    {
        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }
        return store.query(equalityPredicate, sortKey);
    }
    async save(record: T)
    {
        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        return store.updateRecord(record);
    }
    async saveItems(records: T[])
    {
        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        return store.updateRecords(records);
    }
    async delete(id: string, overrideSoftDelete: boolean = false)
    {
        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        const record = await this.get(id);
        if(record == null) { return; }

        return store.removeRecord(id, overrideSoftDelete);
    }
    async deleteItems(ids: string[], overrideSoftDelete: boolean = false)
    {
        if(ids.length == 0) { return; }

        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        const records = await this.getItems(ids);
        if(!records.every(item => item != null))
        {
            throw new Error('Some record ids were unable to be found. Delete process prevented.');
        }

        return store.removeRecords(ids, overrideSoftDelete);
    }
    async restore(id: string)
    {
        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        return store.restoreRecord(id);
    }
    async restoreItems(ids: string[])
    {
        if(ids.length == 0) { return; }

        const store = this.data.getStore<T>(this.storeName);
        if(store == null) { throw new Error("Store is null."); }

        return store.restoreRecords(ids);
    }
}