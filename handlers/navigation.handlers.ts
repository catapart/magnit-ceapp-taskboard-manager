import { MessageCardComponent, MessageCardType } from "../../../simple/message-card/message-card.component";
import { PathRouterComponent } from "../../../simple/path-router/path-router.component";
import { RouteLinkComponent } from "../../../simple/path-router/route-link.component";
import { SHAREDACCESSKEY, TaskboardManagerComponent } from "../taskboard-manager.component";

export function addNavigationhandlers(this: TaskboardManagerComponent)
{
    this.findPart<HTMLButtonElement>('new-board-button_list').addEventListener('click', newBoard_onClick.bind(this));
    this.findPart<HTMLButtonElement>('new-board-button_welcome').addEventListener('click', newBoard_onClick.bind(this));
    this.findPart<HTMLButtonElement>('boards').addEventListener('edit', board_edit_onClick.bind(this));
}

async function newBoard_onClick(this: TaskboardManagerComponent, _event: Event)
{
    await this.addBoard();
    this[SHAREDACCESSKEY].refreshBoards();
}
function board_edit_onClick(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const target = data as RouteLinkComponent;
    const pathName = target.getAttribute('path');
    if(pathName == null)
    {
        MessageCardComponent.notify(`An error occurred attempting to open the board for editing.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        throw new Error("Unable to collected path from board item's path attribute.");
    }
    
    this.findPart<PathRouterComponent>('app-router').navigate(`${pathName}#board-settings`);
}