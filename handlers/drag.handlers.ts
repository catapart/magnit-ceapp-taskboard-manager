import { SHAREDACCESSKEY, TaskboardManagerComponent } from "../taskboard-manager.component";

export function addDragHandlers(this: TaskboardManagerComponent)
{
    const boards = this.findPart('boards');
    boards.addEventListener('dragover', boardsList_onDragover.bind(this));
    boards.addEventListener('drop', boardsList_onDrop.bind(this));
}

function boardsList_onDragover(this: TaskboardManagerComponent, event: DragEvent)
{
    event.preventDefault();
    event.stopPropagation();
    this[SHAREDACCESSKEY].updateBoardItemOrder(event.clientY);
}
async function boardsList_onDrop(this: TaskboardManagerComponent, _event: Event)
{
    this[SHAREDACCESSKEY].updateBoardRecordsAfterMove();
}