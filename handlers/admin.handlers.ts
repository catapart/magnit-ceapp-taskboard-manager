import { EditableListElement } from "@magnit-ce/editable-list";
import { ImportManagerComponent } from "../components/import-manager/import-manager.component";
import { HistoryEntryTargetType } from "../data/history/history-entry-data";
import { AppSettingKey, SHAREDACCESSKEY, TaskboardManagerElement } from "../taskboard-manager";
import { ActionHistoryElement } from "@magnit-ce/action-history";
import { MessageCardElement, MessageCardType } from "@magnit-ce/message-card";

export function addAdminHandlers(this: TaskboardManagerElement)
{
    // const schemeOptions = [...this.findElement('scheme-options').querySelectorAll('button')] as HTMLElement[];
    // for(let i = 0; i < schemeOptions.length; i++)
    // {
    //     schemeOptions[i].addEventListener('click', colorSchemeButton_onClick.bind(this));
    // }

    // this.findElement<HTMLButtonElement>('import-button').addEventListener('click', importButton_onClick.bind(this));
    // this.findElement<HTMLButtonElement>('import-ok').addEventListener('click', importDialog_import_onClick.bind(this));

    // this.findElement('data-persist-days').addEventListener("change", daysToPersist_onChange.bind(this));
    // this.findElement('apply-data-persist-days-button').addEventListener("click", applyDaysToPersist_onClick.bind(this));

    // this.findElement<HTMLButtonElement>('clear-data-button').addEventListener('click', clearData_onClick.bind(this));

    // this.findElement<EditableListElement>('deleted-items').addEventListener('remove', deletedItems_onRemove.bind(this));
    // this.findElement<HTMLButtonElement>('clear-deleted-button').addEventListener('click', clearDeleted_onClick.bind(this));

    // this.findElement<EditableListElement>('deleted-images').addEventListener('remove', deletedImages_onRemove.bind(this));
    // this.findElement<HTMLButtonElement>('clear-image-cache-button').addEventListener('click', clearImageCache_onClick.bind(this));
    
    
    // this.findElement<HTMLButtonElement>('history-control-undo').addEventListener('click', history_undo_onClick.bind(this));
    // this.findElement<HTMLButtonElement>('history-control-redo').addEventListener('click', history_redo_onClick.bind(this));

    // const actionHistory = this.getElement<ActionHistoryElement>('action-history');
    // actionHistory.onBack = actionHistory_onBack.bind(this);
    // actionHistory.onForward = actionHistory_onForward.bind(this);

    // this.findElement('action-history-length').addEventListener("change", historyLength_onChange.bind(this));
    // this.findElement('apply-history-length-button').addEventListener("click", applyHistoryLength_onClick.bind(this));

    // this.findElement('clear-history-button').addEventListener("click", clearHistory_onClick.bind(this));

    // this.getElement('recent-boards').addEventListener("remove", recentBoard_onRemove.bind(this));
}
// function colorSchemeButton_onClick(this: TaskboardManagerElement, event: Event)
// {
//     const scheme = (event.target as HTMLElement).dataset.value;
//     if(scheme == null)
//     {
//         MessageCardElement.notify(`An error occurred attempting to set the app's color scheme. Scheme was not changed.`, 
//         this.getElement('notifications'), { type: MessageCardType.Error });
//         console.error(new Error('Scheme value was undefined.'));
//         return;
//     }
//     if(scheme != 'inherit' && scheme != 'browser' && scheme != 'light' && scheme != 'dark')
//     {
//         MessageCardElement.notify(`An error occurred attempting to set the app's color scheme. Scheme was not changed.`, 
//         this.getElement('notifications'), { type: MessageCardType.Error });
//         console.error(new Error('Scheme value was not recognized as a valid scheme.'));
//         return;
//     }
//     this.setColorScheme(scheme);
//     this[SHAREDACCESSKEY].saveAppSetting(AppSettingKey.ColorScheme, scheme);
// }
// async function importButton_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     const importFileInput = this.findElement<HTMLInputElement>('import-board-file');
//     const boardDataFile = (importFileInput.files != null) ?importFileInput.files[0] : null;
//     if(boardDataFile == null)
//     { 
//         MessageCardElement.notify(`An error occurred attempting to import board data. Confirm that the selected import file is a valid board export.`, 
//         this.getElement('notifications'), { type: MessageCardType.Error });
//         throw new Error("Unable to import selected file.");
//     }

//     const boardDataText = await boardDataFile.text();
//     const boardData = JSON.parse(boardDataText);
//     this[SHAREDACCESSKEY].openImportManager(boardData);
// }
// async function importDialog_import_onClick(this: TaskboardManagerElement, event: Event)
// {
//     const boardData = this.findElement<ImportManagerComponent>('import-manager').getRecord();
//     await this.importBoard(boardData);

//     this[SHAREDACCESSKEY].refreshBoards();
// }
// function daysToPersist_onChange(this: TaskboardManagerElement, event: Event)
// {
//     const dataPersistsDaysValues = this[SHAREDACCESSKEY].DaysToPersistValues;
//     const input = event.target as HTMLInputElement;
//     this[SHAREDACCESSKEY].snapToStep(input, dataPersistsDaysValues);
//     this.findElement('data-persist-days-value').textContent = input.value;
// }
// function applyDaysToPersist_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     return this[SHAREDACCESSKEY].saveAppSetting(AppSettingKey.DaysToPersistData, this.findElement<HTMLInputElement>('data-persist-days').value);
// }
// function clearData_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     this.clearData();
// }
// function deletedItems_onRemove(this: TaskboardManagerElement, event: Event|CustomEvent)
// {        
//     const item = (event as CustomEvent).detail;
//     const recordType = item.dataset.recordType;
//     const recordId = item.dataset.recordId;
//     const timestamp = item.getAttribute('data-timestamp');

//     const targetType = (recordType == 'board')
//     ? HistoryEntryTargetType.Board
//     : (recordType == 'list')
//     ? HistoryEntryTargetType.List
//     : (recordType == 'task')
//     ? HistoryEntryTargetType.Task
//     : null;

//     this[SHAREDACCESSKEY].restoreDeletedItem(targetType, recordId, timestamp);

// }
// async function clearDeleted_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     const items = [...this.findElement('deleted-items').querySelectorAll('[data-record-id]:not([data-restore="false"])')] as HTMLElement[];
//     console.log(items);
//     for(let i = 0; i < items.length; i++)
//     {
//         const item = items[i];
//         await this.deleteItem(item, false);
//     }
//     this[SHAREDACCESSKEY].refreshActionHistory();
//     this[SHAREDACCESSKEY].refreshDeletedItems();
// }
// function deletedImages_onRemove(this: TaskboardManagerElement, event: Event|CustomEvent)
// {
//     const item = (event as CustomEvent).detail;
//     return this.deleteImage(item);
// }
// async function clearImageCache_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     const items = [...this.findElement('deleted-images').querySelectorAll('[data-record-id]')] as HTMLElement[];
//     for(let i = 0; i < items.length; i++)
//     {
//         const item = items[i];
//         await this.deleteImage(item, false);
//     }
//     this[SHAREDACCESSKEY].refreshActionHistory();
//     this[SHAREDACCESSKEY].refreshDeletedItems();
// }
// function history_undo_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     this.undo();
// }
// function history_redo_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     this.redo();
// }
// async function actionHistory_onBack(this: TaskboardManagerElement, target: HTMLElement, previous: HTMLElement|undefined, all: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
// {
//     await this[SHAREDACCESSKEY].handleActionEntryReverse(target, previous, targetIndex, previousActiveEntryIndex);
    
//     const isLastUpdate = all.indexOf(target) == all.length - 1;
//     if(isLastUpdate == true)
//     {
//         const recordType = target.querySelector('.target-type')?.textContent?.toLowerCase();
//         if(recordType == 'board')
//         {
//             this[SHAREDACCESSKEY].refreshBoards();
//         }
//         const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
//         if(currentBoardId != "")
//         {
//             this[SHAREDACCESSKEY].renderBoard(currentBoardId);
//         }

//         this[SHAREDACCESSKEY].refreshDeletedItems();
//     }
// }
// async function actionHistory_onForward(this: TaskboardManagerElement, target: HTMLElement, previous: HTMLElement|undefined, all: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
// {
//     await this[SHAREDACCESSKEY].handelActionEntryActivate(target, previous, targetIndex, previousActiveEntryIndex);

//     const isLastUpdate = all.indexOf(target) == all.length - 1;
//     if(isLastUpdate == true)
//     {
//         const recordType = target.querySelector('.target-type')?.textContent?.toLowerCase();
//         if(recordType == 'board')
//         {
//             this[SHAREDACCESSKEY].refreshBoards();
//         }
//         const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
//         if(currentBoardId != "")
//         {
//             this[SHAREDACCESSKEY].renderBoard(currentBoardId);
//         }

//         this[SHAREDACCESSKEY].refreshDeletedItems();
//     }
// }
// async function historyLength_onChange(this: TaskboardManagerElement, event: Event)
// {
//     const input = event.target as HTMLInputElement;
//     this[SHAREDACCESSKEY].snapToStep(input, this[SHAREDACCESSKEY].HistoryLengthSteps);
//     this.findElement('action-history-length-value').textContent = input.value;
//     this[SHAREDACCESSKEY].prepareHistoryEntries();
// }
// async function applyHistoryLength_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     this[SHAREDACCESSKEY].applyHistoryLength();
// }
// function clearHistory_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     this.clearHistory();
// }
// function recentBoard_onRemove(this: TaskboardManagerElement, event: Event|CustomEvent)
// {
//     const data = (event as CustomEvent).detail;
//     const path = (data as HTMLElement).getAttribute('path')!;
//     const id = path.substring(path.lastIndexOf('/') + 1);
//     this[SHAREDACCESSKEY].removeBoardFromRecentBoards(id)
// }