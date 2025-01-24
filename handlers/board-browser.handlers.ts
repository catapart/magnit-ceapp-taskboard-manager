// import { CollectionBrowserElement } from "@magnit-ce/collection-browser";
// import { TaskboardManagerElement } from "../taskboard-manager";
// import { CollectionFilterElement } from "@magnit-ce/collection-filter";
// import { CaptionedThumbnailElement } from "@magnit-ce/captioned-thumbnail";
// import { PathRouterElement } from "@magnit-ce/path-router";
// import { MessageCardElement, MessageCardType } from "@magnit-ce/message-card";

// export function addBoardBrowserHandlers(this: TaskboardManagerElement)
// {
//     this.findElement<HTMLButtonElement>('board-browser-ok').addEventListener('click', boardBrowserOkButton_onClick.bind(this));
//     this.findElement<CollectionBrowserElement>('board-browser').addEventListener('change', boardBrowserSelection_onChange.bind(this));
//     this.findElement<CollectionFilterElement>('board-browser-filter').addEventListener('change', boardBrowserFilter_onChange.bind(this));
// }

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