import { type BasicActionProperties } from "./history-entry-data";
import { type CustomImageActionProperties } from "./custom-image-action-properties";
import { type TaskSettingsActionProperties } from "./task-settings-action-properties";

export type BoardActionProperties = BasicActionProperties & 
{
    taskSettings?: TaskSettingsActionProperties,
    backgroundImages?: CustomImageActionProperties[]
};