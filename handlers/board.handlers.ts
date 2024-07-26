import { MessageCardComponent, MessageCardType } from "../../../simple/message-card/message-card.component";
import { TaskBoardComponent } from "../../../simple/task-board/task-board.component";
import { TaskCardComponent } from "../../../simple/task-card/task-card.component";
import { TaskListComponent } from "../../../simple/task-list/task-list.component";
import { SHAREDACCESSKEY, TaskboardManagerComponent } from "../taskboard-manager.component";

export function addBoardHandlers(this: TaskboardManagerComponent)
{
    const board = this.findPart<TaskBoardComponent>('task-board');
    // board.addEventListener('change', taskBoard_onChange.bind(this));
    board.addEventListener('listchange', taskBoard_onListChange.bind(this));
    board.addEventListener('listcollapse', taskBoard_onListCollapse.bind(this));
    board.addEventListener('taskchange', taskBoard_onTaskChange.bind(this));
    board.addEventListener('taskadd', taskBoard_onTaskAdd.bind(this));
    board.addEventListener('taskremove', taskBoard_onTaskRemove.bind(this));
    board.addEventListener('taskmove', taskBoard_onTaskMove.bind(this));
}

// function taskBoard_onChange(this: TaskboardManagerComponent, event: Event|CustomEvent)
// {
//     const data = (event as CustomEvent).detail;
//     console.log(data);
// }
function taskBoard_onListChange(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const target = data.list;
    this[SHAREDACCESSKEY].updateListRecord(target);
}
function taskBoard_onListCollapse(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    // const data = (event as CustomEvent).detail;
    // console.log(data);
}
async function taskBoard_onTaskChange(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const target = data.card as TaskCardComponent;
    const parent = data.list as TaskListComponent;
    
    if(data.target.getAttribute('type') == 'color')
    {
        data.card.style.setProperty('--task-color', data.target.value)
    }
    this[SHAREDACCESSKEY].updateTaskRecord(target, parent);
}
async function taskBoard_onTaskAdd(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const list = data.list;
    const listId = list.dataset.tasklistId;
    this[SHAREDACCESSKEY].registerTaskCard(data.card, listId, data.order);
}

function taskBoard_onTaskRemove(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    this[SHAREDACCESSKEY].deleteTaskRecord(data.card);
}
async function taskBoard_onTaskMove(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const target = data.card as TaskCardComponent;
    const parent = data.newList as TaskListComponent;
    this[SHAREDACCESSKEY].updateTaskRecordsAfterMove(target, parent);
}
export async function taskDescription_onKeyUp(this: TaskboardManagerComponent, event: KeyboardEvent)
{
    if(event.code != 'Enter' || (event.shiftKey == false && event.ctrlKey == false))
    {
        return;
    }
    const list = ((event.target as HTMLElement).getRootNode() as any).host.parentElement;
    const listId = list?.dataset.tasklistId;
    if(list == null || listId == null)
    {
        MessageCardComponent.notify(`An error occurred creating a new task.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        console.error(new Error("List data not found."));
        return;
    }

    this.addTask(listId);
}