import { SHAREDACCESSKEY, TaskboardManagerElement } from "../taskboard-manager";
import { TaskBoardElement } from "@magnit-ce/task-board";
import { TaskCardElement } from "@magnit-ce/task-card";
import { TaskListElement } from "@magnit-ce/task-list";
import { MessageCardElement, MessageCardType } from "@magnit-ce/message-card";

export function addBoardHandlers(this: TaskboardManagerElement)
{
    const board = this.findPart<TaskBoardElement>('task-board');    
    board.addEventListener('change', taskBoard_onChange.bind(this));
    board.addEventListener('collapse', taskBoard_onListCollapse.bind(this));
    board.addEventListener('add', taskBoard_onTaskAdd.bind(this));
    board.addEventListener('remove', taskBoard_onTaskRemove.bind(this));
    board.addEventListener('added', taskBoard_onTaskMove.bind(this));
}

function taskBoard_onChange(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    if(event.target instanceof TaskCardElement)
    {
        taskBoard_onTaskChange.call(this, event);
    }
    else if(event.target instanceof TaskListElement)
    {
        const { detail } = event as CustomEvent;
        if(detail.order != null)
        {
            taskBoard_onTaskMove.call(this, event);
        }
        taskBoard_onListChange.call(this, event);
    }
}
function taskBoard_onListChange(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    this[SHAREDACCESSKEY].updateListRecord(event.target as TaskListElement);
}
function taskBoard_onListCollapse(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    console.log(event.target);
}
async function taskBoard_onTaskChange(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    const cardElement = (event.target as TaskCardElement);
    const listElement = cardElement.closest('task-list') as TaskListElement;
    if(listElement == null)
    {
        MessageCardElement.notify(`An error occurred updating a task.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        console.error(new Error("Unable to identify a parent task-list element for an updated task-card element.."));
        return;
    }
    this[SHAREDACCESSKEY].updateTaskRecord(cardElement, listElement);
    cardElement.style.setProperty('--task-color', cardElement.findPart<HTMLInputElement>('color').value);
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
    const card = (event.target as HTMLElement).closest('task-card') as TaskCardElement;
    card.remove();
    this[SHAREDACCESSKEY].deleteTaskRecord(card);
}
async function taskBoard_onTaskMove(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    const { detail } = event as CustomEvent;
    const cardElement = (detail.target as TaskCardElement);
    const listElement = event.target as TaskListElement;
    this[SHAREDACCESSKEY].updateTaskRecordsAfterMove(cardElement, listElement);
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