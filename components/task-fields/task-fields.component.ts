import { TaskBorderRadiusUnit, TaskColorDisplay, TaskSettingsRecord } from '../../data/records/task-settings.record';
import formFieldStyle from '../../styles/form-field.css?raw';
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
        this.findPart<HTMLInputElement>('color-display').append(...options);
    }

    setValues(settings: TaskSettingsRecord)
    {
        this.setAttribute('record-id', settings.id);
        this.findPart('background-color-field').setAttribute('optional-value', (settings.useCustomBackgroundColor == true) ? "true" : "false");
        // this.findPart('background-color-field').setAttribute('optional-value', "true");
        this.findPart<HTMLInputElement>('background-color').value = settings.customBackgroundColor;
        this.findPart('font-color-field').setAttribute('optional-value', (settings.useCustomFontColor == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('font-color').value = settings.customFontColor;
        this.findPart('font-size-field').setAttribute('optional-value', (settings.useCustomFontSize == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('font-size').value = settings.customFontSize.toString();

        this.findPart('border-color-field').setAttribute('optional-value', (settings.useCustomBorderColor == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('border-color').value = settings.customBorderColor;
        this.findPart('border-radius-field').setAttribute('optional-value', (settings.useCustomBorderRadius == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('border-radius').value = settings.borderRadiusValue.toString();
        this.findPart<HTMLSelectElement>('border-radius-unit').value = settings.borderRadiusUnit;
        
        this.findPart<HTMLInputElement>('color-display').value = settings.colorDisplay;

        this.findPart<HTMLInputElement>('center-checkbox').checked = settings.centerCheckbox;
        this.findPart<HTMLInputElement>('center-remove-button').checked = settings.centerRemoveButton;
        this.findPart('card-width-field').setAttribute('optional-value', (settings.useCustomWidth == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('card-width').value = settings.customWidth.toString();

        this.findPart('border-top-field').setAttribute('optional-value', (settings.useCustomBorderWidth_top == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('border-top').value = settings.borderWidth_top.toString();
        this.findPart('border-right-field').setAttribute('optional-value', (settings.useCustomBorderWidth_right == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('border-right').value = settings.borderWidth_right.toString();
        this.findPart('border-bottom-field').setAttribute('optional-value', (settings.useCustomBorderWidth_bottom == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('border-bottom').value = settings.borderWidth_bottom.toString();
        this.findPart('border-left-field').setAttribute('optional-value', (settings.useCustomBorderWidth_left == true) ? "true" : "false");
        this.findPart<HTMLInputElement>('border-left').value = settings.borderWidth_left.toString();
    }

    getRecord()
    {
        const settings = new TaskSettingsRecord();
        settings.id = this.getAttribute('record-id')!;
        settings.useCustomBackgroundColor = this.findPart<HTMLInputElement>('background-color-field').getAttribute('optional-value') == "true";
        settings.customBackgroundColor = this.findPart<HTMLInputElement>('background-color').value;
        settings.useCustomFontColor = this.findPart<HTMLInputElement>('font-color-field').getAttribute('optional-value') == "true";
        settings.customFontColor = this.findPart<HTMLInputElement>('font-color').value;
        settings.useCustomFontSize = this.findPart<HTMLInputElement>('font-size-field').getAttribute('optional-value') == "true";
        settings.customFontSize = parseFloat(this.findPart<HTMLInputElement>('font-size').value);
        
        settings.useCustomBorderColor = this.findPart<HTMLInputElement>('border-color-field').getAttribute('optional-value') == "true";
        settings.customBorderColor = this.findPart<HTMLInputElement>('border-color').value;
        settings.useCustomBorderRadius = this.findPart<HTMLInputElement>('border-radius-field').getAttribute('optional-value') == "true";
        settings.borderRadiusValue = parseFloat(this.findPart<HTMLInputElement>('border-radius').value);
        settings.borderRadiusUnit = this.findPart<HTMLInputElement>('border-radius-unit').value as TaskBorderRadiusUnit

        settings.colorDisplay = this.findPart<HTMLInputElement>('color-display').value as TaskColorDisplay;

        settings.centerCheckbox = this.findPart<HTMLInputElement>('center-checkbox').checked;
        settings.centerRemoveButton = this.findPart<HTMLInputElement>('center-remove-button').checked;

        settings.useCustomWidth = this.findPart<HTMLInputElement>('card-width-field').getAttribute('optional-value') == "true";
        settings.customWidth = parseFloat(this.findPart<HTMLInputElement>('card-width').value);
        
        settings.useCustomBorderWidth_top = this.findPart<HTMLInputElement>('border-top-field').getAttribute('optional-value') == "true";
        settings.borderWidth_top = parseFloat(this.findPart<HTMLInputElement>('border-top').value);
        settings.useCustomBorderWidth_right = this.findPart<HTMLInputElement>('border-right-field').getAttribute('optional-value') == "true";
        settings.borderWidth_right = parseFloat(this.findPart<HTMLInputElement>('border-right').value);
        settings.useCustomBorderWidth_bottom = this.findPart<HTMLInputElement>('border-bottom-field').getAttribute('optional-value') == "true";
        settings.borderWidth_bottom = parseFloat(this.findPart<HTMLInputElement>('border-bottom').value);
        settings.useCustomBorderWidth_left = this.findPart<HTMLInputElement>('border-left-field').getAttribute('optional-value') == "true";
        settings.borderWidth_left = parseFloat(this.findPart<HTMLInputElement>('border-left').value);

        return settings;
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskFieldsComponent);
}