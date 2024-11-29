import { DataRecord } from "record-setter";

export enum TaskColorDisplay 
{
    Hidden = 'hidden',
    Element = 'element',
    Borders = 'border',
    TopBorder = 'top-border',
    RightBorder = 'right-border',
    BottomBorder = 'bottom-border',
    LeftBorder = 'left-border',
    Background = "background",
}

export type TaskBorderRadiusUnit = 'px'|'%';
export type TaskSettingsParentRecordCategory = 'list'|'board';

export class TaskSettingsRecord extends DataRecord
{
    parentRecordType: TaskSettingsParentRecordCategory = 'board';

    centerCheckbox: boolean = true;

    colorDisplay: TaskColorDisplay = TaskColorDisplay.Element;

    useCustomBackgroundColor: boolean = false;
    customBackgroundColor: string = "#f9faf5";
    useCustomFontSize: boolean = false;
    customFontSize: number = 12;
    useCustomFontColor: boolean = false;
    customFontColor: string = "#060703";
    useCustomWidth: boolean = false;
    customWidth: number = 300;

    useCustomBorderWidth_top: boolean = false;
    borderWidth_top: number = 1;
    useCustomBorderWidth_right: boolean = false;
    borderWidth_right: number = 1;
    useCustomBorderWidth_bottom: boolean = false;
    borderWidth_bottom: number = 1;
    useCustomBorderWidth_left: boolean = false;
    borderWidth_left: number = 1;

    useCustomBorderRadius: boolean = false;
    borderRadiusValue: number = 3;
    borderRadiusUnit: TaskBorderRadiusUnit = 'px';
    
    useCustomBorderColor: boolean = false;
    customBorderColor: string = "#0657A3";

    centerRemoveButton: boolean = false;
}