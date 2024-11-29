import { SHAREDACCESSKEY, TaskboardManagerElement } from "../taskboard-manager";
import { TaskBoardElement } from "@magnit-ce/task-board";
import { TaskCardElement } from "@magnit-ce/task-card";
import { TaskListElement } from "@magnit-ce/task-list";
import { MessageCardElement, MessageCardType } from "@magnit-ce/message-card";

export function addBoardHandlers(this: TaskboardManagerElement)
{
    const board = this.findPart<TaskBoardElement>('task-board');

    // board.addEventListener('change', taskBoard_onChange.bind(this));

    // board.addEventListener('listchange', taskBoard_onListChange.bind(this));
    // board.addEventListener('listcollapse', taskBoard_onListCollapse.bind(this));
    // board.addEventListener('taskchange', taskBoard_onTaskChange.bind(this));
    // board.addEventListener('taskadd', taskBoard_onTaskAdd.bind(this));
    // board.addEventListener('taskremove', taskBoard_onTaskRemove.bind(this));
    // board.addEventListener('taskmove', taskBoard_onTaskMove.bind(this));

    
    board.addEventListener('change', taskBoard_onChange.bind(this));
    board.addEventListener('collapse', taskBoard_onListCollapse.bind(this));
    // board.addEventListener('change', taskBoard_onTaskChange.bind(this));
    board.addEventListener('add', taskBoard_onTaskAdd.bind(this));
    board.addEventListener('remove', taskBoard_onTaskRemove.bind(this));
    // board.addEventListener('taskmove', taskBoard_onTaskMove.bind(this));
}

function taskBoard_onChange(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    console.log(data);

    // taskBoard_onListChange
    // taskBoard_onTaskChange
    // taskBoard_onTaskMove
}
function taskBoard_onListChange(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const target = data.list;
    this[SHAREDACCESSKEY].updateListRecord(target);
}
function taskBoard_onListCollapse(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    // const data = (event as CustomEvent).detail;
    // console.log(data);
}
async function taskBoard_onTaskChange(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const target = data.card as TaskCardElement;
    const parent = data.list as TaskListElement;
    
    if(data.target.getAttribute('type') == 'color')
    {
        data.card.style.setProperty('--task-color', data.target.value)
    }
    this[SHAREDACCESSKEY].updateTaskRecord(target, parent);
}
async function taskBoard_onTaskAdd(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    const list = event.target as TaskListElement;
    const listId = list.dataset.tasklistId!;
    const card = new TaskCardElement();
    list.append(card);
    const data = (event as CustomEvent).detail;
    this[SHAREDACCESSKEY].registerTaskCard(card, listId, data.order);
}

function taskBoard_onTaskRemove(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    // const data = (event as CustomEvent).detail;
    const card = (event.target as HTMLElement).closest('task-card') as TaskCardElement;
    card.remove();
    this[SHAREDACCESSKEY].deleteTaskRecord(card);
}
async function taskBoard_onTaskMove(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const target = data.card as TaskCardElement;
    const parent = data.newList as TaskListElement;
    this[SHAREDACCESSKEY].updateTaskRecordsAfterMove(target, parent);
}
export async function taskDescription_onKeyUp(this: TaskboardManagerElement, event: KeyboardEvent)
{
    if(event.code != 'Enter' || (event.shiftKey == false && event.ctrlKey == false))
    {
        return;
    }
    const list = ((event.target as HTMLElement).getRootNode() as any).host.parentElement;
    const listId = list?.dataset.tasklistId;
    if(list == null || listId == null)
    {
        MessageCardElement.notify(`An error occurred creating a new task.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        console.error(new Error("List data not found."));
        return;
    }

    this.addTask(listId);
}