import { BoardActionProperties } from "./board-action-properties";

export enum HistoryEntryTargetType
{
    Board = 'board',
    List = 'list',
    Task = 'task',
    Image = 'image'
}

export type PropertiesType<T extends HistoryEntryTargetType> = 
T extends HistoryEntryTargetType.Board 
? BoardActionProperties 
: T extends HistoryEntryTargetType.List 
? BoardActionProperties
:T extends HistoryEntryTargetType.Task 
? BoardActionProperties 
: T extends HistoryEntryTargetType.Image 
? BoardActionProperties
: Record<string, never>;

export type PropertyUpdate = { from: string|number|boolean|null|undefined, to: string|number|boolean|null|undefined };

export type BasicActionProperties = { id: string, updates?: Map<string, PropertyUpdate> };

export class HistoryEntryData<T extends HistoryEntryTargetType = HistoryEntryTargetType.Board>
{
    targetType: T;
    properties: PropertiesType<T>;

    constructor(targetType: T, properties: PropertiesType<T>)
    {
        this.targetType = targetType;
        this.properties = properties;
    }
}