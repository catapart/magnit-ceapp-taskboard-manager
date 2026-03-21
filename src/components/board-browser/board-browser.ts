// styles
import style from './board-browser.css?raw';
import sharedStyles from '../../styles/shared.css?raw';
// html
import html from './board-browser.html?raw';
// icons
import { defineIcons, IconKey } from '../../assets/icons/icons.asset';
import { TaskBoardRecord } from '../../data/records/task-board.record';
import { CaptionedThumbnailElement } from '@magnit-ce/captioned-thumbnail';
import { CollectionBrowserElement } from '@magnit-ce/collection-browser';
import { CollectionFilterElement } from '@magnit-ce/collection-filter';
import { assignClassAndIdToPart, assignInputTypeToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../../libs/ce-part-utils/ce-part-utils';


export type BoardBrowserProperties = 
{
    onNavigate: (path: string) => void;
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconKey.TaskBoard,
    IconKey.ConfirmCheck,
    IconKey.CancelCross,
)}`;

const COMPONENT_TAG_NAME = 'board-browser';
export class BoardBrowserElement extends HTMLElement
{
    static observedAttributes = [];

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

    onChange?: (target: HTMLElement) => void;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        // duplicated functionality for firefox; dialog submit does not close the dialogs for some reason
        this.findElement<HTMLFormElement>('board-browser-actions').addEventListener('submit', () =>
        {
            this.dispatchEvent(new CustomEvent('close'));
        });
        this.findElement<HTMLButtonElement>('board-browser-ok').addEventListener('click', this.boardBrowserOkButton_onClick.bind(this));
        this.findElement<CollectionBrowserElement>('collection-browser').addEventListener('change', this.boardBrowserSelection_onChange.bind(this));
        this.findElement<CollectionFilterElement>('filter').addEventListener('change', this.boardBrowserFilter_onChange.bind(this));

        assignTagToPart(this.shadowRoot!);
        assignClassAndIdToPart(this.shadowRoot!);
        assignInputTypeToPart(this.shadowRoot!);
        assignPartsAsExportPartsAttribute(this.shadowRoot!);
    }

    
    boardBrowserOkButton_onClick(_event: Event)
    {
        const selected = this.findElement<CollectionBrowserElement>('collection-browser').getSelected();
        if(selected == null)
        {
            // no warning; assume the user cancelled the dialog.
            return;
        }
        const item = selected[0];
        if(item == null)
        {
            // no warning; assume the user cancelled the dialog.
            return;
        }
        const boardId = item.getAttribute('data-board-id');
        this.dispatchEvent(new CustomEvent('select', { detail: { boardId } }));
    }

    boardBrowserSelection_onChange(event: Event|CustomEvent)
    {
        const { detail } = event as CustomEvent;

        if(event.target instanceof CaptionedThumbnailElement
        && (detail.method == "click" || detail.method == "input"))
        {
            event.preventDefault();
        }
        

        if(event.target == this.findElement<CollectionBrowserElement>('collection-browser'))
        {
            event.preventDefault();
            detail.previousSelection.forEach((item: CaptionedThumbnailElement) => 
            {
                item.isSelected = false;
                item.part.remove('selected-board-gallery-item');
            });
            detail.newSelection.isSelected = !detail.newSelection.isSelected;
            detail.newSelection.part.add('selected-board-gallery-item')
        }

    }
    boardBrowserFilter_onChange(event: Event|CustomEvent)
    {
        const customEvent = event as CustomEvent;

        const allItems = [...this.querySelectorAll('captioned-thumbnail')] as HTMLElement[];

        const filters = customEvent.detail.filters;
        if(filters.length == 0)
        {
            for(let i = 0; i < allItems.length; i++)
            {
                allItems[i].classList.remove('match');
            }
            return;
        }

        const items = this.findElement<CollectionFilterElement>('filter').filterElements(allItems).map((match: any) => match.item as HTMLElement);
        for(let i = 0; i < allItems.length; i++)
        {
            allItems[i].classList.remove('match');
            if(items.indexOf(allItems[i]) > -1)
            {
                allItems[i].classList.add('match');
            }
        }
    }
    
    updateBoards(boards: TaskBoardRecord[])
    {
        const menuItems: CaptionedThumbnailElement[] = [];
        for(let i = 0; i < boards.length; i++)
        {
            const boardRecord = boards[i];
            const menuItem = this.#createBoardMenuItem(boardRecord);
            menuItems.push(menuItem);
        }

        // browser items
        this.innerHTML = "";
        this.append(...menuItems);
    }
    #createBoardMenuItem(boardRecord: TaskBoardRecord)
    {
        const element = new CaptionedThumbnailElement();
        element.innerHTML = `<svg part="icon item-icon" slot="icon">
            <use href="#icon-definition_task-board"></use>
        </svg>
        ${boardRecord.name}`;
        element.setAttribute('data-board-id', boardRecord.id);
        element.toggleAttribute('select', true);
        element.part.add('board-gallery-item');
        element.style.setProperty('--board-color', boardRecord.color);
        return element;
    }
    
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, BoardBrowserElement);
}