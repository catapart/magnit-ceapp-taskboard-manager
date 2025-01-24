// styles
import style from './board-browser.css?raw';
import sharedStyles from '../../styles/shared.css?raw';
// html
import html from './board-browser.html?raw';
// icons
import { defineIcons, IconType } from '../../assets/icons/icons.asset';
import { TaskBoardRecord } from '../../data/records/task-board.record';
import { CaptionedThumbnailElement } from '@magnit-ce/captioned-thumbnail';

export enum BoardBrowserAttributes
{
    pathId = 'path-id',
}

export type BoardBrowserProperties = { [key in BoardBrowserAttributes]: string } &
{
    onNavigate: (path: string) => void;
};

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
    ${style}`);

const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.TaskBoard,
    IconType.ConfirmCheck,
    IconType.CancelCross,
)}`;

const COMPONENT_TAG_NAME = 'board-browser';
export class BoardBrowserElement extends HTMLElement
{
    static observedAttributes = [
        ...Object.values(BoardBrowserAttributes),
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

    onChange?: (target: HTMLElement) => void;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        this.#applyPartAttributes();

        
        // this.findElement<HTMLButtonElement>('board-browser-ok').addEventListener('click', boardBrowserOkButton_onClick.bind(this));
        // this.findElement<CollectionBrowserElement>('board-browser').addEventListener('change', boardBrowserSelection_onChange.bind(this));
        // this.findElement<CollectionFilterElement>('board-browser-filter').addEventListener('change', boardBrowserFilter_onChange.bind(this));
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

    
    // function boardBrowserOkButton_onClick(this: TaskboardManagerElement, event: Event)
    // {
    //     const selected = this.findElement<CollectionBrowserElement>('board-browser').selected;
    //     if(selected == null)
    //     {
    //         // no warning; assume the user cancelled the dialog.
    //         return;
    //     }
    //     const item = selected[0];
    //     if(item == null)
    //     {
    //         // no warning; assume the user cancelled the dialog.
    //         return;
    //     }
    //     const boardId = item.getAttribute('data-board-id');
    //     if(boardId == null)
    //     {
    //         MessageCardElement.notify(`An error occurred attempting to open the board.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         console.error('Unable to open board: data-board-id attribute is unset on target element.');
    //         return;
    //     }
    //     // console.log(selected, selected[0].getAttribute('data-board-id') ?? 'no id');
    //     this.findElement<PathRouterElement>('app-router').navigate(`board/${boardId}`)
    // }

    // function boardBrowserSelection_onChange(this: TaskboardManagerElement, event: Event|CustomEvent)
    // {
    //     if(event.target == this.findElement<CollectionBrowserElement>('board-browser'))
    //     {
    //         event.preventDefault();
    //         return;
    //     }

    //     // if we're still going, this is a change event that
    //     // was fired by the captioned-thumbnail, and has bubbled
    //     // up to the collection-browser


    //     // de-select other captioned thumbnail elements    
    //     ([...this.findElement<CollectionBrowserElement>('board-browser')
    //     .querySelectorAll('.selected')] as CaptionedThumbnailElement[])
    //     .forEach(item => {
    //         if(item == event.target) { return; }
    //         item.isSelected = false;
    //     })
    // }
    // function boardBrowserFilter_onChange(this: TaskboardManagerElement, event: Event|CustomEvent)
    // {
    //     const customEvent = event as CustomEvent;

    //     const allItems = [...this.findElement<CollectionBrowserElement>('board-browser').querySelectorAll('captioned-thumbnail')] as HTMLElement[];

    //     const filters = customEvent.detail.filters;
    //     if(filters.length == 0)
    //     {
    //         for(let i = 0; i < allItems.length; i++)
    //         {
    //             allItems[i].classList.remove('match');
    //         }
    //         return;
    //     }

    //     const items = this.findElement<CollectionFilterElement>('board-browser-filter').filterElements(allItems).map((match: any) => match.item as HTMLElement);
    //     for(let i = 0; i < allItems.length; i++)
    //     {
    //         allItems[i].classList.remove('match');
    //         if(items.indexOf(allItems[i]) > -1)
    //         {
    //             allItems[i].classList.add('match');
    //         }
    //     }
    //     // console.log(filters, items);
    // }
    
    updateBoards(boards: TaskBoardRecord[])
    {
        const menuItems: CaptionedThumbnailElement[] = [];
        for(let i = 0; i < boards.length; i++)
        {
            const boardRecord = boards[i];
            const menuItem = this.#createBoardMenuItem(boardRecord);
            menuItems.push(menuItem);
        }

        // menu items
        this.innerHTML = "";
        this.append(...menuItems);
    }
    #createBoardMenuItem(boardRecord: TaskBoardRecord)
    {
        const element = new CaptionedThumbnailElement();
        element.innerHTML = `<svg part="item-icon" slot="icon">
            <use href="#icon-definition_task-board"></use>
        </svg>
        ${boardRecord.name}`;
        element.setAttribute('data-board-id', boardRecord.id);
        element.toggleAttribute('select', true);
        return element;
    }


    static create(properties: BoardBrowserProperties)
    {
        const element = document.createElement(COMPONENT_TAG_NAME) as BoardBrowserElement;
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
        if(attributeName == BoardBrowserAttributes.pathId)
        {
            // this.findPart('description').textContent = newValue;
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, BoardBrowserElement);
}