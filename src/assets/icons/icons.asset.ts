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
import { Data } from './data';

export const IconKey =
{
    LogoMark: "LogoMark",
    LogoType: "LogoType",
    Logo: "Logo",
    Gear: "Gear",
    MagnifyingGlass: "MagnifyingGlass",
    Profile: "Profile",
    Category: "Category",
    Stylus: "Stylus",
    Export: "Export",
    Import: "Import",
    PlusIcon: "PlusIcon",
    CancelCross: "CancelCross",
    CloseCross: "CloseCross",
    Image: "Image",
    Color: "Color",
    Task: "Task",
    TaskList: "TaskList",
    TaskBoard: "TaskBoard",
    Trash: "Trash",
    File: "File",
    ConfirmCheck: "ConfirmCheck",
    Clock: "Clock",
    Info: "Info",
    UndoRedo: "UndoRedo",
    Restore: "Restore",
    Copy: "Copy",
    Data: "Data",
} as const;
export type IconKeyType = typeof IconKey[keyof typeof IconKey];

export const Icons: { [key in IconKeyType]: string } = {
    [IconKey.LogoMark]: LogoMark,
    [IconKey.LogoType]: LogoType,
    [IconKey.Logo]: Logo,
    [IconKey.Gear]: Gear,
    [IconKey.MagnifyingGlass]: MagnifyingGlass,
    [IconKey.Profile]: Profile,
    [IconKey.Category]: Category,
    [IconKey.Stylus]: Stylus,
    [IconKey.Export]: Export,
    [IconKey.Import]: Import,
    [IconKey.PlusIcon]: PlusIcon,
    [IconKey.CancelCross]: CancelCross,
    [IconKey.CloseCross]: CloseCross,
    [IconKey.Image]: Image,
    [IconKey.Color]: Color,
    [IconKey.Task]: Task,
    [IconKey.TaskList]: TaskList,
    [IconKey.TaskBoard]: TaskBoard,
    [IconKey.Trash]: Trash,
    [IconKey.File]: File,
    [IconKey.ConfirmCheck]: ConfirmCheck,
    [IconKey.Clock]: Clock,
    [IconKey.Info]: Info,
    [IconKey.UndoRedo]: UndoRedo,
    [IconKey.Restore]: Restore,
    [IconKey.Copy]: Copy,
    [IconKey.Data]: Data,
};

export function defineIcons(...icons: IconKeyType[])
{
    return `<div id="icon-definitions" style="display: none;">
        ${(
            (icons.length == 0) 
            ? Object.values(Icons)
            : Object.entries(Icons)
            .filter(([key, _value]) => icons.indexOf(key as IconKeyType) > -1))
            .map(([_key, value]) => value)
            .reduce((accumulatedValues, value) => `${accumulatedValues}\n${value}`
        )}
    </div>`;
}