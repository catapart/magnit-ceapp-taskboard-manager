import { TaskBorderRadiusUnit, TaskColorDisplay, TaskSettingsRecord } from '../../../data/records/task-settings.record';
import formFieldStyle from '../form-field.css?raw';
import style from './task-fields.component.css?raw';
import html from './task-fields.component.html?raw';

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${formFieldStyle}
${style}
`);

const COMPONENT_TAG_NAME = 'task-fields';
export class TaskFieldsComponent extends HTMLElement
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
        this.shadowRoot!.innerHTML = html;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        const options: HTMLOptionElement[] = [];
        for(const [key, value] of Object.entries(TaskColorDisplay))
        {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = key.replace(/([A-Z])/g, ' $1').trim();
            options.push(option);
        }
        this.findElement<HTMLInputElement>('task-color-display').append(...options);

        this.#applyPartAttributes();
    }

    //#region API

    setValues(settings: TaskSettingsRecord)
    {
        this.setAttribute('task-record-id', settings.id);
        this.findElement('task-background-color-field').setAttribute('optional-value', (settings.useCustomBackgroundColor == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-background-color').value = settings.customBackgroundColor;
        this.findElement('task-font-color-field').setAttribute('optional-value', (settings.useCustomFontColor == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-font-color').value = settings.customFontColor;
        this.findElement('task-font-size-field').setAttribute('optional-value', (settings.useCustomFontSize == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-font-size').value = settings.customFontSize.toString();

        this.findElement('task-border-color-field').setAttribute('optional-value', (settings.useCustomBorderColor == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-border-color').value = settings.customBorderColor;
        this.findElement('task-border-radius-field').setAttribute('optional-value', (settings.useCustomBorderRadius == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-border-radius').value = settings.borderRadiusValue.toString();
        this.findElement<HTMLSelectElement>('task-border-radius-unit').value = settings.borderRadiusUnit;
        
        this.findElement<HTMLInputElement>('task-color-display').value = settings.colorDisplay;

        this.findElement<HTMLInputElement>('task-center-checkbox').checked = settings.centerCheckbox;
        this.findElement<HTMLInputElement>('task-center-remove-button').checked = settings.centerRemoveButton;
        this.findElement('task-card-width-field').setAttribute('optional-value', (settings.useCustomWidth == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-card-width').value = settings.customWidth.toString();

        this.findElement('task-border-top-field').setAttribute('optional-value', (settings.useCustomBorderWidth_top == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-border-top').value = settings.borderWidth_top.toString();
        this.findElement('task-border-right-field').setAttribute('optional-value', (settings.useCustomBorderWidth_right == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-border-right').value = settings.borderWidth_right.toString();
        this.findElement('task-border-bottom-field').setAttribute('optional-value', (settings.useCustomBorderWidth_bottom == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-border-bottom').value = settings.borderWidth_bottom.toString();
        this.findElement('task-border-left-field').setAttribute('optional-value', (settings.useCustomBorderWidth_left == true) ? "true" : "false");
        this.findElement<HTMLInputElement>('task-border-left').value = settings.borderWidth_left.toString();
    }

    getRecord()
    {
        const settings = new TaskSettingsRecord();
        settings.id = this.getAttribute('record-id')!;
        settings.useCustomBackgroundColor = this.findElement<HTMLInputElement>('task-background-color-field').getAttribute('optional-value') == "true";
        settings.customBackgroundColor = this.findElement<HTMLInputElement>('task-background-color').value;
        settings.useCustomFontColor = this.findElement<HTMLInputElement>('task-font-color-field').getAttribute('optional-value') == "true";
        settings.customFontColor = this.findElement<HTMLInputElement>('task-font-color').value;
        settings.useCustomFontSize = this.findElement<HTMLInputElement>('task-font-size-field').getAttribute('optional-value') == "true";
        settings.customFontSize = parseFloat(this.findElement<HTMLInputElement>('task-font-size').value);
        
        settings.useCustomBorderColor = this.findElement<HTMLInputElement>('task-border-color-field').getAttribute('optional-value') == "true";
        settings.customBorderColor = this.findElement<HTMLInputElement>('task-border-color').value;
        settings.useCustomBorderRadius = this.findElement<HTMLInputElement>('task-border-radius-field').getAttribute('optional-value') == "true";
        settings.borderRadiusValue = parseFloat(this.findElement<HTMLInputElement>('task-border-radius').value);
        settings.borderRadiusUnit = this.findElement<HTMLInputElement>('task-border-radius-unit').value as TaskBorderRadiusUnit

        settings.colorDisplay = this.findElement<HTMLInputElement>('task-color-display').value as TaskColorDisplay;

        settings.centerCheckbox = this.findElement<HTMLInputElement>('task-center-checkbox').checked;
        settings.centerRemoveButton = this.findElement<HTMLInputElement>('task-center-remove-button').checked;

        settings.useCustomWidth = this.findElement<HTMLInputElement>('task-card-width-field').getAttribute('optional-value') == "true";
        settings.customWidth = parseFloat(this.findElement<HTMLInputElement>('task-card-width').value);
        
        settings.useCustomBorderWidth_top = this.findElement<HTMLInputElement>('task-border-top-field').getAttribute('optional-value') == "true";
        settings.borderWidth_top = parseFloat(this.findElement<HTMLInputElement>('task-border-top').value);
        settings.useCustomBorderWidth_right = this.findElement<HTMLInputElement>('task-border-right-field').getAttribute('optional-value') == "true";
        settings.borderWidth_right = parseFloat(this.findElement<HTMLInputElement>('task-border-right').value);
        settings.useCustomBorderWidth_bottom = this.findElement<HTMLInputElement>('task-border-bottom-field').getAttribute('optional-value') == "true";
        settings.borderWidth_bottom = parseFloat(this.findElement<HTMLInputElement>('task-border-bottom').value);
        settings.useCustomBorderWidth_left = this.findElement<HTMLInputElement>('task-border-left-field').getAttribute('optional-value') == "true";
        settings.borderWidth_left = parseFloat(this.findElement<HTMLInputElement>('task-border-left').value);

        return settings;
    }

    //#endregion API

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
    customElements.define(COMPONENT_TAG_NAME, TaskFieldsComponent);
}