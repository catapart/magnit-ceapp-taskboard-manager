// styles
import style from './settings-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './settings-panel.html?raw';
// icons
import { defineIcons, IconKey } from '../../../assets/icons/icons.asset';
import { AppSettingKey, DataService } from '../../../data/data.service';
import { FeedbackService } from '../../../services/feedback.service';
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../../libs/ce-part-utils/ce-part-utils';

export type ColorScheme = 'inherit'|'browser'|'light'|'dark';

export type SettingsPanelProperties = 
{
    scheme_onChange: (scheme: ColorScheme) => void;
}

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconKey.LogoMark,
    IconKey.MagnifyingGlass,
    IconKey.Gear,
    IconKey.PlusIcon
)}`;

const COMPONENT_TAG_NAME = 'settings-panel';
export class SettingsPanelElement extends HTMLElement
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
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        this.addEventListener('click', this.#onClick.bind(this));

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);

    }

    #scheme_onChange!: (scheme: ColorScheme) => void;
    async init(options: SettingsPanelProperties)
    {
        const scheme = await DataService.getAppSetting(AppSettingKey.ColorScheme);
        const button = this.shadowRoot!.querySelector(`.scheme[data-value="${scheme}"]`);
        if(button != null)
        {
            button.classList.add('selected');
            button.part.add('selected');
        }
        this.#scheme_onChange = options.scheme_onChange;
    }

    
    #onClick(event: Event)
    {
        const composedPath = event.composedPath();
        const button = composedPath.find(item => item instanceof HTMLButtonElement) as HTMLButtonElement;
        if(button == null) { return; }

        const buttons = [...this.shadowRoot!.querySelectorAll('button.scheme')];
        for(let i = 0; i < buttons.length; i++)
        {
            const button = buttons[i];
            button.classList.remove('selected');
            button.part.remove('selected');
        }
        
        button.classList.add('selected');
        button.part.add('selected');
        
        const scheme = button.dataset.value;
        if(scheme == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred attempting to set the app's color scheme. Scheme was not changed.`);
            console.error(new Error('Scheme value was undefined.'));
            return;
        }
        if(scheme != 'inherit' && scheme != 'browser' && scheme != 'light' && scheme != 'dark')
        {
            FeedbackService.showErrorMessageCard(`An error occurred attempting to set the app's color scheme. Scheme was not changed.`);
            console.error(new Error('Scheme value was not recognized as a valid scheme.'));
            return;
        }
        this.#scheme_onChange(scheme);
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, SettingsPanelElement);
}