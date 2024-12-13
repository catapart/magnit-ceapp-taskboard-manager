import { Icons } from '../../assets/icons/icons.asset';
import { TaskListColorDisplay, TaskListRecord } from '../../data/records/task-list.record';
import { TaskSettingsRecord } from '../../data/records/task-settings.record';
import formFieldStyle from '../../styles/form-field.css?raw';
import { TaskFieldsComponent } from '../task-fields/task-fields.component';
import style from './tasklist-fields.component.css?raw';
import html from './tasklist-fields.component.html?raw';

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${formFieldStyle}
${style}
`);

const COMPONENT_TEMPLATE = `${html}
<div part="icon-definitions">
    ${Icons.CancelCross}
    ${Icons.Copy}
</div>`;

const COMPONENT_TAG_NAME = 'tasklist-fields';
export class TaskListFieldsComponent extends HTMLElement
{
    componentParts: Map<string, HTMLElement> = new Map();
    getPart<T extends HTMLElement = HTMLElement>(key: string)
    {
        if(this.componentParts.get(key) == null)
        {
            const part = this.shadowRoot!.querySelector(`[part="${key}"]`) as HTMLElement;
            if(part != null) { this.componentParts.set(key, part); }
        }

        return this.componentParts.get(key) as T;
    }
    findPart<T extends HTMLElement = HTMLElement>(key: string) { return this.shadowRoot!.querySelector(`[part="${key}"]`) as T; }


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
        this.findPart<HTMLInputElement>('color-display').append(...options);

        this.findPart('remove-button').addEventListener('click', () =>
        {
            this.toggleAttribute('removed');
            // if(this.hasAttribute)
        });
        this.findPart('duplicate-button').addEventListener('click', () =>
        {
            this.dispatchEvent(new Event('duplicate'));
        });
        this.findPart('name').addEventListener('keyup', (event) =>
        {
            if(event.code == "Space") { event.preventDefault(); }
        });
    }

    setValues(taskList: TaskListRecord, taskSettings: TaskSettingsRecord)
    {
        this.setAttribute('record-id', taskList.id);
        this.findPart<HTMLInputElement>('color').value = taskList.color;
        this.findPart<HTMLInputElement>('name').value = taskList.name;
        this.findPart<HTMLInputElement>('order').value = taskList.order.toString();
        this.findPart('background-color-field').setAttribute('optional-value', (taskList.useCustomBackgroundColor == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('background-color').value = taskList.backgroundColor;
        this.findPart('font-color-field').setAttribute('optional-value', (taskList.useCustomFontColor == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('font-color').value = taskList.fontColor;
        this.findPart('list-width-field').setAttribute('optional-value', (taskList.useCustomWidth == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('list-width').value = taskList.width.toString();
        this.findPart<HTMLInputElement>('color-display').value = taskList.colorDisplay;

        this.findPart<TaskFieldsComponent>('task-fields').setValues(taskSettings);
    }

    getRecords()
    {
        const taskList = new TaskListRecord();
        taskList.id = this.getAttribute('record-id')!;
        taskList.color = this.findPart<HTMLInputElement>('color').value;
        taskList.name = this.findPart<HTMLInputElement>('name').value;
        // taskList.order = parseInt(this.findPart<HTMLInputElement>('order').value);
        taskList.useCustomBackgroundColor = this.findPart<HTMLInputElement>('background-color-field').getAttribute('optional-value') == "true";
        taskList.backgroundColor = this.findPart<HTMLInputElement>('background-color').value;
        taskList.useCustomFontColor = this.findPart<HTMLInputElement>('font-color-field').getAttribute('optional-value') == "true";
        taskList.fontColor = this.findPart<HTMLInputElement>('font-color').value;
        taskList.useCustomWidth = this.findPart<HTMLInputElement>('list-width-field').getAttribute('optional-value') == "true";
        taskList.width = parseFloat(this.findPart<HTMLInputElement>('list-width').value);
        taskList.colorDisplay = this.findPart<HTMLInputElement>('color-display').value as TaskListColorDisplay;

        const taskSettings = this.findPart<TaskFieldsComponent>('task-fields').getRecord();
        taskSettings.parentRecordType = 'list';

        taskList.taskSettingsId = this.findPart<TaskFieldsComponent>('task-fields').getAttribute('record-id')!;

        const result: [TaskListRecord, TaskSettingsRecord] = [ taskList, taskSettings ]
        return result;
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskListFieldsComponent);
}