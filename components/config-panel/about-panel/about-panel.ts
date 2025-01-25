// styles
import style from './about-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './about-panel.html?raw';
// icons
import { defineIcons, IconType } from '../../../assets/icons/icons.asset';

export enum AboutPanelAttributes
{
}

export type AboutPanelProperties = { [key in AboutPanelAttributes]: string } &
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

const COMPONENT_TAG_NAME = 'about-panel';
export class AboutPanelElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(AboutPanelAttributes),
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

    setVersion(version: string)
    {
        this.findElement('version-value').textContent = version;
    }

    static create(properties: AboutPanelProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as AboutPanelElement;
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
    customElements.define(COMPONENT_TAG_NAME, AboutPanelElement);
}