import { SHAREDACCESSKEY, TaskboardManagerElement } from "../taskboard-manager";
import { PathRouterElement } from "@magnit-ce/path-router";
import { MessageCardElement, MessageCardType } from "@magnit-ce/message-card";


// export function addNavigationhandlers(this: TaskboardManagerElement)
// {
//     // this.findElement<HTMLButtonElement>('new-board-button_list').addEventListener('click', newBoard_onClick.bind(this));
//     // this.findElement<HTMLButtonElement>('new-board-button_welcome').addEventListener('click', newBoard_onClick.bind(this));
//     // this.findElement<HTMLButtonElement>('boards').addEventListener('edit', board_edit_onClick.bind(this));
// }

// async function newBoard_onClick(this: TaskboardManagerElement, _event: Event)
// {
//     await this.addBoard();
//     this[SHAREDACCESSKEY].refreshBoards();
// }
// function board_edit_onClick(this: TaskboardManagerElement, event: Event|CustomEvent)
// {
//     const data = (event as CustomEvent).detail;
//     const target = data as HTMLAnchorElement;
//     const pathName = target.dataset.route;
//     if(pathName == null)
//     {
//         MessageCardElement.notify(`An error occurred attempting to open the board for editing.`, 
//         this.getElement('notifications'), { type: MessageCardType.Error });
//         throw new Error("Unable to collected path from board item's path attribute.");
//     }
    
//     this.findElement<PathRouterElement>('app-router').navigate(`${pathName}#board-settings`);
// }