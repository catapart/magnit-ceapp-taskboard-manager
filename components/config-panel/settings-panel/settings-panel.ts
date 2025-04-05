// styles
import style from './settings-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './settings-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../../assets/icons/icons.asset';

export enum SettingsPanelAttributes
{
}

export type SettingsPanelProperties = { [key in SettingsPanelAttributes]: string } &
{
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.LogoMark,
    IconType.MagnifyingGlass,
    IconType.Gear,
    IconType.PlusIcon
)}`;

const COMPONENT_TAG_NAME = 'settings-panel';
export class SettingsPanelElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(SettingsPanelAttributes),
    ];

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
        this.#applyPartAttributes();

        // todo: assign save scheme option
        
        const schemeOptions = [...this.findElement('scheme-options').querySelectorAll('button')] as HTMLElement[];
        for(let i = 0; i < schemeOptions.length; i++)
        {
            schemeOptions[i].addEventListener('click', this.#colorSchemeButton_onClick.bind(this));
            // console.log(schemeOptions[i]);
        }
    }
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

    
    #colorSchemeButton_onClick(event: Event)
    {
        const scheme = (event.target as HTMLElement).dataset.value;
        if(scheme == null)
        {
            const message = `An error occurred attempting to set the app's color scheme. Scheme was not changed.`;
            const consoleMessage = 'Scheme value was undefined.';
            this.dispatchEvent(new CustomEvent('error', { detail: { message, consoleMessage }, bubbles: true, composed: true }));
            return;
        }
        if(scheme != 'inherit' && scheme != 'browser' && scheme != 'light' && scheme != 'dark')
        {
            const message = `An error occurred attempting to set the app's color scheme. Scheme was not changed.`;
            const consoleMessage = 'Scheme value was not recognized as a valid scheme.';
            this.dispatchEvent(new CustomEvent('error', { detail: { message, consoleMessage }, bubbles: true, composed: true }));
            return;
        }
        const isAllowed = this.dispatchEvent(new CustomEvent('scheme', { detail: { scheme }, bubbles: true, composed: true }));
        if(isAllowed == false) { return; }

        const buttons = [...this.shadowRoot!.querySelectorAll('button.scheme')];
        for(let i = 0; i < buttons.length; i++)
        {
            const button = buttons[i];
            button.classList.remove('selected');
            button.part.remove('selected');
        }
        
        const button = event.composedPath().find(item => item instanceof HTMLButtonElement) as HTMLButtonElement;
        if(button == null) { return; }
        button.classList.add('selected');
        button.part.add('selected');
    }


    static create(properties: SettingsPanelProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as SettingsPanelElement;
        for(const [propertyName, value] of Object.entries(properties))
        {
            if(!propertyName.startsWith('on'))
            {
                element.setAttribute(propertyName, value as string);
            }
        }
    }

    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string) 
    {
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, SettingsPanelElement);
}