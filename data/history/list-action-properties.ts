import { BasicActionProperties } from "./history-entry-data";
import { TaskSettingsActionProperties } from "./task-settings-action-properties";

export type ListActionProperties = BasicActionProperties & 
{ taskSettings?: TaskSettingsActionProperties };