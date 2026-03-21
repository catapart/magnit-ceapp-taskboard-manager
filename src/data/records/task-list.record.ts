import { DataRecord } from "record-setter";


export const TaskListColorDisplay =
{
    Element: 'element',
    BorderColor: 'border-color',
    FontColor: 'font-color',
} as const;
export type TaskListColorDisplayType = typeof TaskListColorDisplay[keyof typeof TaskListColorDisplay];

export class TaskListRecord extends DataRecord
{
    boardId: string = "";
    taskSettingsId: string = "";
    category: string = "";
    order: number = -1;
    color: string = "#1C67E8";
    name: string = "New List";
    // description: string = "";
    colorDisplay: TaskListColorDisplayType = TaskListColorDisplay.Element;
    useCustomBackgroundColor: boolean = false;
    backgroundColor: string = "#f9faf5";
    useCustomFontColor: boolean = false;
    fontColor: string = "#060703";
    useCustomWidth: boolean = false;
    width: number = 500;
    isCollapsed: boolean = false;
}