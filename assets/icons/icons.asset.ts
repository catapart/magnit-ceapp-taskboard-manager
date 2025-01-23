import { CancelCross } from "./cancel-cross";
import { Category } from "./category";
import { Clock } from "./clock";
import { CloseCross } from "./close-cross";
import { Color } from "./color";
import { ConfirmCheck } from "./confirm-check";
import { Export } from "./export";
import { File } from "./file";
import { Gear } from "./gear";
import { Image } from "./image";
import { Import } from "./import";
import { Info } from "./info";
import { Logo } from "./logo";
import { LogoMark } from "./logo-mark";
import { LogoType } from "./logo-type";
import { MagnifyingGlass } from "./magnifying-glass";
import { PlusIcon } from "./plus";
import { Profile } from "./profile";
import { Stylus } from "./stylus";
import { Task } from "./task";
import { TaskBoard } from "./taskboard";
import { TaskList } from "./tasklist";
import { Trash } from "./trash";
import { UndoRedo } from "./undo-redo";
import { Restore } from "./restore";
import { Copy } from './copy';

export enum IconType
{
    LogoMark = "LogoMark",
    LogoType = "LogoType",
    Logo = "Logo",
    Gear = "Gear",
    MagnifyingGlass = "MagnifyingGlass",
    Profile = "Profile",
    Category = "Category",
    Stylus = "Stylus",
    Export = "Export",
    Import = "Import",
    PlusIcon = "PlusIcon",
    CancelCross = "CancelCross",
    CloseCross = "CloseCross",
    Image = "Image",
    Color = "Color",
    Task = "Task",
    TaskList = "TaskList",
    TaskBoard = "TaskBoard",
    Trash = "Trash",
    File = "File",
    ConfirmCheck = "ConfirmCheck",
    Clock = "Clock",
    Info = "Info",
    UndoRedo = "UndoRedo",
    Restore = "Restore",
    Copy = "Copy",
}

export const Icons: { [key in IconType]: string } = {
    [IconType.LogoMark]: LogoMark,
    [IconType.LogoType]: LogoType,
    [IconType.Logo]: Logo,
    [IconType.Gear]: Gear,
    [IconType.MagnifyingGlass]: MagnifyingGlass,
    [IconType.Profile]: Profile,
    [IconType.Category]: Category,
    [IconType.Stylus]: Stylus,
    [IconType.Export]: Export,
    [IconType.Import]: Import,
    [IconType.PlusIcon]: PlusIcon,
    [IconType.CancelCross]: CancelCross,
    [IconType.CloseCross]: CloseCross,
    [IconType.Image]: Image,
    [IconType.Color]: Color,
    [IconType.Task]: Task,
    [IconType.TaskList]: TaskList,
    [IconType.TaskBoard]: TaskBoard,
    [IconType.Trash]: Trash,
    [IconType.File]: File,
    [IconType.ConfirmCheck]: ConfirmCheck,
    [IconType.Clock]: Clock,
    [IconType.Info]: Info,
    [IconType.UndoRedo]: UndoRedo,
    [IconType.Restore]: Restore,
    [IconType.Copy]: Copy,
};

export function defineIcons(...icons: IconType[])
{
    return `<div id="icon-definitions" style="display: none;">
        ${(
            (icons.length == 0) 
            ? Object.values(Icons)
            : Object.entries(Icons)
            .filter(([key, value]) => icons.indexOf(key as IconType) > -1))
            .map(([key, value]) => value)
            .reduce((accumulatedValues, value) => `${accumulatedValues}\n${value}`
        )}
    </div>`;
}