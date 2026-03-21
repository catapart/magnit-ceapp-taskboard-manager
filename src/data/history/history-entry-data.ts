import { type BoardActionProperties } from "./board-action-properties";

export const HistoryEntryTargetCategory =
{
    Board: 'board',
    List: 'list',
    Task: 'task',
    Image: 'image'
} as const;
export type HistoryEntryTargetCategoryType = typeof HistoryEntryTargetCategory[keyof typeof HistoryEntryTargetCategory];

export type PropertiesType<T extends HistoryEntryTargetCategoryType> = 
T extends typeof HistoryEntryTargetCategory.Board 
? BoardActionProperties 
: T extends typeof HistoryEntryTargetCategory.List 
? BoardActionProperties
:T extends typeof HistoryEntryTargetCategory.Task 
? BoardActionProperties 
: T extends typeof HistoryEntryTargetCategory.Image 
? BoardActionProperties
: Record<string, never>;

export type PropertyUpdate = { from: string|number|boolean|null|undefined, to: string|number|boolean|null|undefined };

export type BasicActionProperties = { id: string, updates?: Map<string, PropertyUpdate> };

export class HistoryEntryData<T extends HistoryEntryTargetCategoryType = typeof HistoryEntryTargetCategory.Board>
{
    targetType: T;
    properties: PropertiesType<T>;

    constructor(targetType: T, properties: PropertiesType<T>)
    {
        this.targetType = targetType;
        this.properties = properties;
    }
}