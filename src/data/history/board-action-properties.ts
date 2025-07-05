import { BasicActionProperties } from "./history-entry-data";
import { CustomImageActionProperties } from "./custom-image-action-properties";
import { TaskSettingsActionProperties } from "./task-settings-action-properties";

export type BoardActionProperties = BasicActionProperties & 
{
    taskSettings?: TaskSettingsActionProperties,
    backgroundImages?: CustomImageActionProperties[]
};