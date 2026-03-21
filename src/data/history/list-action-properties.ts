import { type BasicActionProperties } from "./history-entry-data";
import { type TaskSettingsActionProperties } from "./task-settings-action-properties";

export type ListActionProperties = BasicActionProperties & 
{ taskSettings?: TaskSettingsActionProperties };