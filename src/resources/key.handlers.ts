import { TaskboardManagerElement } from "../taskboard-manager";
import { TaskCardElement } from "@magnit-ce/task-card";
import { TaskListElement } from "@magnit-ce/task-list";

export function addKeyHandlers(this: TaskboardManagerElement)
{
    document.addEventListener('keydown', key_onDown.bind(this));
}

function key_onDown(this: TaskboardManagerElement, event: KeyboardEvent)
{
    const taskboard = (event.target == this) ? this : null;
    if(taskboard == null) { return; }

    const activeList = taskboard.shadowRoot?.activeElement;
    if(activeList instanceof TaskListElement)
    {
        if(event.altKey == true)
        {
            const addButton = activeList.findElement('add-button') as HTMLButtonElement;
            const activeButton = activeList.shadowRoot!.activeElement == addButton
            ? addButton
            : null;
            if(activeButton != null)
            {
                if(event.code == "ArrowUp")
                {
                    const lastTask = findLastTask(activeButton) as TaskCardElement;
                    if(lastTask != null)
                    {
                        lastTask.findElement("description").focus();

                        event.preventDefault();
                        event.stopPropagation();
                        return;
                    }
                }
            }
            if(event.code == 'ArrowDown')
            {
                (activeList.querySelector('task-card') as TaskCardElement)?.findElement('description').focus();

                event.preventDefault();
                event.stopPropagation();
                return;
            }

        }
    }

    const activeCard = taskboard.shadowRoot?.activeElement;
    if(activeCard == null || !(activeCard instanceof TaskCardElement)) { return; }
    
    if(event.altKey == true && activeCard != null)
    {
        if(event.code == 'ArrowUp')
        {
            if(event.shiftKey == true)
            {
                const firstTask = findFirstTask(activeCard) as TaskCardElement;
                if(firstTask != null)
                {
                    firstTask.findElement("description").focus();
                }
            }
            else
            {
                const previousTask = findPreviousTask(activeCard);
                if(previousTask != null)
                {
                    previousTask.findElement("description").focus();
                }
                else
                {
                    (activeCard.parentElement as TaskListElement).findElement('name').focus();
                }
            }

            event.preventDefault();
            event.stopPropagation();
        }
        else if(event.code == 'ArrowDown')
        {
            if(event.shiftKey == true)
            {
                const lastTask = findLastTask(activeCard) as TaskCardElement;
                if(lastTask != null)
                {
                    lastTask.findElement("description").focus();
                }
            }
            else
            {
                const nextTask = findNextTask(activeCard);
                if(nextTask != null)
                {
                    nextTask.findElement("description").focus();
                }
                else
                {
                    (activeCard.parentElement as TaskListElement).findElement('add-button').focus();
                }
            }

            event.preventDefault();
            event.stopPropagation();
        }
        else if(event.code == 'ArrowLeft')
        {
            if(event.shiftKey == false)
            {
                const previousListTask = findPreviousListTask(activeCard);
                if(previousListTask != null)
                {
                    previousListTask.findElement("description").focus();
                }
            }

            event.preventDefault();
            event.stopPropagation();
        }
        else if(event.code == 'ArrowRight')
        {
            if(event.shiftKey == false)
            {
                const nextListTask = findNextListTask(activeCard);
                if(nextListTask != null)
                {
                    nextListTask.findElement("description").focus();
                }
            }

            event.preventDefault();
            event.stopPropagation();
        }
    }
    
}

function findPreviousListWithTasks(list: TaskListElement)
{
    let previousList = list.previousElementSibling;
    if(previousList == null) { return null; }
    let firstTask = previousList.querySelector('task-card');
    if(firstTask != null) { return previousList; }
    while(previousList.previousElementSibling != null)
    {
        firstTask = previousList.querySelector('task-card');
        if(firstTask != null) { return previousList; }
        previousList = previousList.previousElementSibling;
    }
    return null;
}
function findNextListWithTasks(list: TaskListElement)
{
    let nextList = list.nextElementSibling;
    if(nextList == null) { return null; }
    let firstTask = nextList.querySelector('task-card');
    if(firstTask != null) { return nextList; }
    while(nextList.nextElementSibling != null)
    {
        firstTask = nextList.querySelector('task-card');
        if(firstTask != null) { return nextList; }
        nextList = nextList.nextElementSibling;
    }
    return null;
}

function findPreviousListTask(task: TaskCardElement)
{
    const parentList = task.closest('task-list') as TaskListElement;
    if(parentList == null) { return null; }

    let previousList = findPreviousListWithTasks(parentList);
    if(previousList == null) { return; null; }

    let targetTask = previousList.querySelector("task-card");
    if(targetTask == null)
    {
        previousList = previousList.previousElementSibling as TaskListElement;
        if(previousList != null)
        {

        }
    }

    const taskRect = task.getBoundingClientRect();
    for(let i = 1; i < previousList.children.length; i++)
    {
        const currentTask = previousList.children[i];
        const currentTaskRect = currentTask.getBoundingClientRect();
        if(currentTaskRect.top <= taskRect.top)
        {
            targetTask = currentTask;
        }
        else
        {
            break;
        }
    }
    
    return targetTask as TaskCardElement;
}
function findNextListTask(task: TaskCardElement)
{
    const parentList = task.closest('task-list') as TaskListElement;
    if(parentList == null) { return null; }

    const nextList = findNextListWithTasks(parentList);
    if(nextList == null) { return; null; }

    let targetTask = nextList.querySelector("task-card");
    if(targetTask == null) { return null; }

    const taskRect = task.getBoundingClientRect();
    for(let i = 1; i < nextList.children.length; i++)
    {
        const currentTask = nextList.children[i];
        const currentTaskRect = currentTask.getBoundingClientRect();
        if(currentTaskRect.top <= taskRect.top)
        {
            targetTask = currentTask;
        }
        else
        {
            break;
        }
    }
    
    return targetTask as TaskCardElement;
}
function findFirstTask(task: TaskCardElement)
{
    const parentList = task.closest('task-list') as TaskListElement;
    if(parentList == null) { return null; }
    return parentList.querySelector('task-card');
}
function findPreviousTask(task: TaskCardElement)
{
    return (task.previousElementSibling instanceof TaskCardElement) ? task.previousElementSibling : null;
}
function findNextTask(task: TaskCardElement)
{
    return (task.nextElementSibling instanceof TaskCardElement) ? task.nextElementSibling : null;
}
function findLastTask(target: TaskCardElement|HTMLButtonElement)
{
    const parentList = (target instanceof TaskCardElement)
    ? target.closest('task-list') as TaskListElement
    // @ts-expect-error ts doesn't think host exists?
    : target.getRootNode().host;
    if(parentList == null) { return null; }
    return parentList.querySelector('task-card:last-of-type');
}