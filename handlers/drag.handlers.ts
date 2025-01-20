import { SHAREDACCESSKEY, TaskboardManagerElement } from "../taskboard-manager";

export function addDragHandlers(this: TaskboardManagerElement)
{
    const boards = this.findElement('boards');
    boards.addEventListener('dragover', boardsList_onDragover.bind(this));
    boards.addEventListener('drop', boardsList_onDrop.bind(this));
}

function boardsList_onDragover(this: TaskboardManagerElement, event: DragEvent)
{
    event.preventDefault();
    event.stopPropagation();
    this[SHAREDACCESSKEY].updateBoardItemOrder(event.clientY);
}
async function boardsList_onDrop(this: TaskboardManagerElement, _event: Event)
{
    this[SHAREDACCESSKEY].updateBoardRecordsAfterMove();
}