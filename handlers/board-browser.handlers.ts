import { CaptionedThumbnailComponent } from "../../../simple/captioned-thumbnail/captioned-thumbnail.component";
import { CollectionBrowserComponent } from "../../../simple/collection-browser/collection-browser.component";
import { MessageCardComponent, MessageCardType } from "../../../simple/message-card/message-card.component";
import { PathRouterComponent } from "../../../simple/path-router/path-router.component";
import { CollectionFilterComponent } from "../../collection-filter/collection-filter.component";
import { TaskboardManagerComponent } from "../taskboard-manager.component";

export function addBoardBrowserHandlers(this: TaskboardManagerComponent)
{
    this.findPart<HTMLButtonElement>('board-browser-ok').addEventListener('click', boardBrowserOkButton_onClick.bind(this));
    this.findPart<CollectionBrowserComponent>('board-browser').addEventListener('change', boardBrowserSelection_onChange.bind(this));
    this.findPart<CollectionFilterComponent>('board-browser-filter').addEventListener('change', boardBrowserFilter_onChange.bind(this));
}

function boardBrowserOkButton_onClick(this: TaskboardManagerComponent, event: Event)
{
    const selected = this.findPart<CollectionBrowserComponent>('board-browser').selected;
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
    if(boardId == null)
    {
        MessageCardComponent.notify(`An error occurred attempting to open the board.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        console.error('Unable to open board: data-board-id attribute is unset on target element.');
        return;
    }
    // console.log(selected, selected[0].getAttribute('data-board-id') ?? 'no id');
    this.findPart<PathRouterComponent>('app-router').navigate(`board/${boardId}`)
}
function boardBrowserSelection_onChange(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const { detail } = event as CustomEvent;
    (detail.previousSelection as CaptionedThumbnailComponent[]).forEach(item => item.isSelected = false);
}
function boardBrowserFilter_onChange(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const customEvent = event as CustomEvent;

    const allItems = [...this.findPart<CollectionBrowserComponent>('board-browser').querySelectorAll('captioned-thumbnail')] as HTMLElement[];

    const filters = customEvent.detail.filters;
    if(filters.length == 0)
    {
        for(let i = 0; i < allItems.length; i++)
        {
            allItems[i].classList.remove('match');
        }
        return;
    }

    const items = this.findPart<CollectionFilterComponent>('board-browser-filter').filterItems(allItems).map((match: any) => match.item as HTMLElement);
    for(let i = 0; i < allItems.length; i++)
    {
        allItems[i].classList.remove('match');
        if(items.indexOf(allItems[i]) > -1)
        {
            allItems[i].classList.add('match');
        }
    }
    // console.log(filters, items);
}