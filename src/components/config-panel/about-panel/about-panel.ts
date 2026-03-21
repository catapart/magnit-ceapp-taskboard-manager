// styles
import style from './about-panel.css?raw';
import sharedStyles from '../../../styles/shared.css?raw';
// html
import html from './about-panel.html?raw';
// icons
import { defineIcons, IconKey } from '../../../assets/icons/icons.asset';
import { assignClassAndIdToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../../libs/ce-part-utils/ce-part-utils';


export type AboutPanelProperties = 
{
    appVersion: string;
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

const COMPONENT_TAG_NAME = 'about-panel';
export class AboutPanelElement extends HTMLElement
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
        
        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);
    }

    init(options: AboutPanelProperties)
    {
        this.setVersion(options.appVersion);
    }

    setVersion(version: string)
    {
        this.findElement('version-value').textContent = version;
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, AboutPanelElement);
}