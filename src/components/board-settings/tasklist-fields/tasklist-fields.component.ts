import { defineIcons, IconKey } from '../../../assets/icons/icons.asset';
import { TaskListColorDisplay, TaskListRecord, type TaskListColorDisplayType } from '../../../data/records/task-list.record';
import { TaskSettingsRecord } from '../../../data/records/task-settings.record';
import { assignClassAndIdToPart, assignFormFieldPartAttributes, assignInputTypeToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../../libs/ce-part-utils/ce-part-utils';
import { TaskFieldsComponent } from '../task-fields/task-fields.component';
import sharedStyles from '../../../styles/shared.css?raw';
import formFieldStyle from '../form-field.css?raw';
import style from './tasklist-fields.component.css?raw';
import html from './tasklist-fields.component.html?raw';

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
${formFieldStyle}
${style}
`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconKey.CancelCross,
    IconKey.Copy,
    IconKey.UndoRedo
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
        this.findElement('tasklist-name').addEventListener('keyup', (event) =>
        {
            if(event.code == "Space") { event.preventDefault(); }
        });

        // wait for one task fields element
        // before assigning export parts
        this.shadowRoot!.addEventListener('ready', () =>
        {
            this.setAttribute('exportparts', 'option-true,removed');
            assignPartsAsExportPartsAttribute(this.shadowRoot!);
        }, { once: true });
    }
    connectedCallback()
    {
        // wait until form fields have established
        // both field inputs and option checkboxes
        requestAnimationFrame(() =>
        {
            assignTagToPart(this.shadowRoot!);
            assignClassAndIdToPart(this.shadowRoot!);
            assignInputTypeToPart(this.shadowRoot!);
            assignFormFieldPartAttributes(this.shadowRoot!);
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

        this.findElement<TaskFieldsComponent>('task-settings').setValues(taskSettings);
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
        taskList.colorDisplay = this.findElement<HTMLInputElement>('tasklist-color-display').value as TaskListColorDisplayType;

        const taskSettings = this.findElement<TaskFieldsComponent>('task-settings').getRecord();
        taskSettings.parentRecordType = 'list';

        taskList.taskSettingsId = taskSettings.id;

        const result: [TaskListRecord, TaskSettingsRecord] = [ taskList, taskSettings ]
        return result;
    }

    //#endregion API

    //#region Management
    
    //#endregion Management

    //#region Internal
    // #applyPartAttributes()
    // {
    //     const identifiedElements = [...this.shadowRoot!.querySelectorAll('[id]')];
    //     for(let i = 0; i < identifiedElements.length; i++)
    //     {
    //         identifiedElements[i].part.add(identifiedElements[i].id);
    //     }
    //     const classedElements = [...this.shadowRoot!.querySelectorAll('[class]')];
    //     for(let i = 0; i < classedElements.length; i++)
    //     {
    //         classedElements[i].part.add(...classedElements[i].classList);
    //     }
    //     const formFieldElements = [...this.shadowRoot!.querySelectorAll('form-field')];
    //     for(let i = 0; i < formFieldElements.length; i++)
    //     {
    //         const formFieldElement = formFieldElements[i];
    //         const fieldId = formFieldElement.id;
            
    //         const container = formFieldElement.querySelector('.container');
    //         container?.part.add('container', 'field-container', `${fieldId}-container`);
    //         const label = formFieldElement.querySelector('.field-label');
    //         label?.part.add('label', 'field-label', `${fieldId}-label`);
    //         const prefix = formFieldElement.querySelector('.prefix');
    //         prefix?.part.add('prefix', 'field-prefix', `${fieldId}-prefix`);
    //         const postfix = formFieldElement.querySelector('.postfix');
    //         postfix?.part.add('postfix', 'field-postfix', `${fieldId}-postfix`);
    //         const enabledCheckbox = formFieldElement.querySelector('.enabled-checkbox');
    //         enabledCheckbox?.part.add('enabled-checkbox', 'field-enabled-checkbox', `${fieldId}-enabled-checkbox`);
    //     }
    // }
    //#endregion Internal
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskListFieldsComponent);
}