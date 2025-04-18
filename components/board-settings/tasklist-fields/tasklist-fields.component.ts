import { defineIcons, Icons, IconType } from '../../../assets/icons/icons.asset';
import { TaskListColorDisplay, TaskListRecord } from '../../../data/records/task-list.record';
import { TaskSettingsRecord } from '../../../data/records/task-settings.record';
import formFieldStyle from '../form-field.css?raw';
import { TaskFieldsComponent } from '../task-fields/task-fields.component';
import style from './tasklist-fields.component.css?raw';
import html from './tasklist-fields.component.html?raw';

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${formFieldStyle}
${style}
`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.CancelCross,
    IconType.Copy,
    IconType.UndoRedo
)}`;

const COMPONENT_TAG_NAME = 'tasklist-fields';
export class TaskListFieldsComponent extends HTMLElement
{
    componentParts: Map<string, HTMLElement> = new Map();
    getElement<T extends HTMLElement = HTMLElement>(id: string)
    {
        if(this.componentParts.get(id) == null)
        {
            const part = this.findElement(id);
            if(part != null) { this.componentParts.set(id, part); }
        }

        return this.componentParts.get(id) as T;
    }
    findElement<T extends HTMLElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }


    constructor()
    {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        const options: HTMLOptionElement[] = [];
        for(const [key, value] of Object.entries(TaskListColorDisplay))
        {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = key.replace(/([A-Z])/g, ' $1').trim();
            options.push(option);
        }
        this.findElement<HTMLInputElement>('tasklist-color-display').append(...options);

        this.#applyPartAttributes();
        this.findElement('tasklist-name').addEventListener('keyup', (event) =>
        {
            if(event.code == "Space") { event.preventDefault(); }
        });

    }

    //#region API
    setValues(taskList: TaskListRecord, taskSettings: TaskSettingsRecord)
    {
        this.setAttribute('tasklist-record-id', taskList.id);
        this.findElement<HTMLInputElement>('tasklist-color').value = taskList.color;
        this.findElement<HTMLInputElement>('tasklist-name').value = taskList.name;
        this.findElement<HTMLInputElement>('tasklist-order').value = taskList.order.toString();
        this.findElement('tasklist-background-color-field').setAttribute('optional-value', (taskList.useCustomBackgroundColor == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('tasklist-background-color').value = taskList.backgroundColor;
        this.findElement('tasklist-font-color-field').setAttribute('optional-value', (taskList.useCustomFontColor == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('tasklist-font-color').value = taskList.fontColor;
        this.findElement('tasklist-width-field').setAttribute('optional-value', (taskList.useCustomWidth == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('tasklist-width').value = taskList.width.toString();
        this.findElement<HTMLInputElement>('tasklist-color-display').value = taskList.colorDisplay;

        this.findElement<TaskFieldsComponent>('task-fields').setValues(taskSettings);
    }

    getRecords()
    {
        const taskList = new TaskListRecord();
        taskList.id = this.getAttribute('tasklist-record-id')!;
        taskList.color = this.findElement<HTMLInputElement>('tasklist-color').value;
        taskList.name = this.findElement<HTMLInputElement>('tasklist-name').value;
        // taskList.order = parseInt(this.findPart<HTMLInputElement>('order').value);
        taskList.useCustomBackgroundColor = this.findElement<HTMLInputElement>('tasklist-background-color-field').getAttribute('optional-value') == "true";
        taskList.backgroundColor = this.findElement<HTMLInputElement>('tasklist-background-color').value;
        taskList.useCustomFontColor = this.findElement<HTMLInputElement>('tasklist-font-color-field').getAttribute('optional-value') == "true";
        taskList.fontColor = this.findElement<HTMLInputElement>('tasklist-font-color').value;
        taskList.useCustomWidth = this.findElement<HTMLInputElement>('tasklist-width-field').getAttribute('optional-value') == "true";
        taskList.width = parseFloat(this.findElement<HTMLInputElement>('tasklist-width').value);
        taskList.colorDisplay = this.findElement<HTMLInputElement>('tasklist-color-display').value as TaskListColorDisplay;

        const taskSettings = this.findElement<TaskFieldsComponent>('task-fields').getRecord();
        taskSettings.parentRecordType = 'list';

        taskList.taskSettingsId = this.findElement<TaskFieldsComponent>('task-fields').getAttribute('record-id')!;

        const result: [TaskListRecord, TaskSettingsRecord] = [ taskList, taskSettings ]
        return result;
    }

    //#endregion API

    //#region Management
    
    //#endregion Management

    //#region Internal
    #applyPartAttributes()
    {
        const identifiedElements = [...this.shadowRoot!.querySelectorAll('[id]')];
        for(let i = 0; i < identifiedElements.length; i++)
        {
            identifiedElements[i].part.add(identifiedElements[i].id);
        }
        const classedElements = [...this.shadowRoot!.querySelectorAll('[class]')];
        for(let i = 0; i < classedElements.length; i++)
        {
            classedElements[i].part.add(...classedElements[i].classList);
        }
    }
    //#endregion Internal
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskListFieldsComponent);
}