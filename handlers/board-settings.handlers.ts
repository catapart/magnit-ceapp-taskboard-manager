import { MessageCardElement, MessageCardType } from "@magnit-ce/message-card";
import { TaskBoardFieldsComponent } from "../components/taskboard-fields/taskboard-fields.component";
import { SHAREDACCESSKEY, TaskboardManagerElement } from "../taskboard-manager";

export function addBoardSettingsHandlers(this: TaskboardManagerElement)
{
    this.findElement<HTMLButtonElement>('board-settings-save').addEventListener('click', boardSettings_ok_onClick.bind(this));
    this.findElement<HTMLButtonElement>('close-board-button').addEventListener('click', closeBoard_onClick.bind(this));
    const boardFields = this.findElement<TaskBoardFieldsComponent>('board-fields');
    boardFields.findPart('remove-board-button').addEventListener('click', boardSettings_remove_onClick.bind(this));
    boardFields.findPart('duplicate-board-button').addEventListener('click', duplicateBoard_onClick.bind(this));
    boardFields.findPart('export-button').addEventListener('click', exportBoardButton_onClick.bind(this));
    boardFields.findPart('add-list-button').addEventListener('click', addList_onClick.bind(this));
    boardFields.addEventListener('duplicate', list_onDuplicate.bind(this));
}

async function boardSettings_ok_onClick(this: TaskboardManagerElement, event: Event)
{
    await this[SHAREDACCESSKEY].updateBoardSettings();
    this[SHAREDACCESSKEY].refreshBoards();
    this[SHAREDACCESSKEY].refreshDeletedItems();
    const id  =this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id') ?? this[SHAREDACCESSKEY].getIdFromRoute();
    if(id == null)
    {
        MessageCardElement.notify(`An error occurred saving the board settings.`, 
        this.getElement('notifications'), { type: MessageCardType.Error });
        throw new Error('Unable to determine the target board\'s id');
    }
    // console.log(id);

    this.openBoard(id);

}
async function boardSettings_remove_onClick(this: TaskboardManagerElement, event: Event)
{
    const id  =this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id') ?? this[SHAREDACCESSKEY].getIdFromRoute();
    if(id == null)
    {
        MessageCardElement.notify(`An error occurred deleting a board.`, 
        this.getElement('notifications'), { type: MessageCardType.Error });
        throw new Error('Unable to determine the target board\'s id');
    }

    this.removeBoard(id);
}
async function exportBoardButton_onClick(this: TaskboardManagerElement, event: Event)
{        
    const boardId = this.findElement('board-fields').getAttribute('record-id');
    if(boardId == null || boardId == '')
    {
        MessageCardElement.notify(`An error occurred attempting to export the board.`, 
        this.getElement('notifications'), { type: MessageCardType.Error });
        throw new Error('Unable to determine the target board\'s id');
    }
    this.exportBoard(boardId);
}
function addList_onClick(this: TaskboardManagerElement, event: Event)
{
    this.addList();
}
function list_onDuplicate(this: TaskboardManagerElement, event: Event)
{
    const data = (event as CustomEvent).detail;
    this[SHAREDACCESSKEY].duplicateList(data.target, data.list, data.settings);
}
async function duplicateBoard_onClick(this: TaskboardManagerElement, _event: Event)
{
    const id = this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id');
    if(id == null)
    {
        MessageCardElement.notify(`An error occurred duplicating theboard.`, 
        this.getElement('notifications'), { type: MessageCardType.Error });
        throw new Error('Unable to determine the target board\'s id');
    }
    await this.duplicateBoard(id);
    this[SHAREDACCESSKEY].refreshBoards();
}
async function closeBoard_onClick(this: TaskboardManagerElement, _event: Event)
{
    await this.closeBoardSettings();
    this.closeBoard();
}