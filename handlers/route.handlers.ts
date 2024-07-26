import { MessageCardComponent, MessageCardType } from "../../../simple/message-card/message-card.component";
import { PathRouteComponent } from "../../../simple/path-router/path-route.component";
import { PathRouterComponent } from "../../../simple/path-router/path-router.component";
import { SHAREDACCESSKEY, TaskboardManagerComponent } from "../taskboard-manager.component";

export function addRouteHandlers(this: TaskboardManagerComponent)
{
    this.findPart<PathRouterComponent>('app-router').addEventListener('pathchange', router_onPathChange.bind(this));
    this.findPart<PathRouterComponent>('config-router').addEventListener('pathchange', configRouter_onPathChange.bind(this));
    this.findPart<PathRouteComponent>('board-route').applyEventListener('beforeopen', boardRoute_beforeOpen.bind(this));
    this.findPart<PathRouteComponent>('board-settings').applyEventListener('beforeopen', boardSettingsRoute_beforeOpen.bind(this));
    this.findPart<PathRouteComponent>('config-dialog').applyEventListener('beforeopen', settingsRoute_beforeOpen.bind(this));
}


function router_onPathChange(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    if(!this.hasAttribute('update-url')) { return; }
    const data = (event as CustomEvent).detail;
    // console.log(data);

    const { windowPath, windowHash } = parseWindowPath();

    let { pathName: routePath, hash: routeHash } = this.findPart<PathRouterComponent>('app-router').destructurePath(data.path);
    if(routePath.startsWith('/')) { routePath = routePath.substring(1); }
    routePath = routePath.trim();
    if(routeHash.startsWith('#')) { routeHash = routeHash.substring(1); }
    routeHash = routeHash.trim();

    if(windowPath == routePath && windowHash == routeHash)
    {
        // don't update the url if we've
        // gone back to the same page
        return;
    }
    
    const newLocation = `${window.location.origin}/${routePath}${(routeHash != '') ? `#${routeHash}` : ''}${window.location.search}`;
    if(windowHash != '' && routeHash != '')
    {
        // replace the url if only the hash changes
        // otherwise back will cycle through every
        // popup instead of just closing the dialog
        window.history.replaceState(null, '', newLocation);
        return;
    }

    // console.log(newLocation);
    window.history.pushState(null, '', newLocation);
}
function configRouter_onPathChange(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    if(!this.hasAttribute('update-url')) { return; }
    const data = (event as CustomEvent).detail;

    const { windowPath, windowHash } = parseWindowPath();

    const windowConfigSubpathIndex = windowHash.indexOf('/');
    const windowConfigPath = (windowHash.includes('config') == true && windowConfigSubpathIndex != -1) ? windowHash.substring(windowConfigSubpathIndex + 1) : "";

    let { pathName: routePath, hash: routeHash } = this.findPart<PathRouterComponent>('app-router').destructurePath(data.path);
    if(routePath.startsWith('/')) { routePath = routePath.substring(1); }
    routePath = routePath.trim();

    if(windowConfigPath == routePath)
    {
        // don't update the url if we've
        // gone back to the same page
        return;
    }
    
    const newLocation = `${window.location.origin}/${windowPath}#config/${routePath}${window.location.search}`;
    window.history.pushState(null, '', newLocation);
}
function parseWindowPath()
{    
    let windowPath = window.location.pathname;
    if(windowPath.startsWith('/')) { windowPath = windowPath.substring(1); }
    windowPath = windowPath.trim();

    let windowHash = window.location.hash;
    if(windowHash.startsWith('#')) { windowHash = windowHash.substring(1); }
    windowHash = windowHash.trim();

    return { windowPath, windowHash }
}

function boardRoute_beforeOpen(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const boardId = data.properties.id;
    if(boardId == null)
    {
        MessageCardComponent.notify(`An error occurred attempting to open the board.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        throw new Error('Unable to open board route with unknown id');
    }
    this[SHAREDACCESSKEY].renderBoard(boardId);
}
function boardSettingsRoute_beforeOpen(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;

    const path = this.findPart('app-router').getAttribute('path') ?? "";
    if(path == null)
    {
        MessageCardComponent.notify(`An error occurred attempting to open the board for editing.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        throw new Error('Unable to edit board data when path data is unavailable');
    }
    const pathArray = path.split('/');
    const id = pathArray[pathArray.length-1];
    if(id == null)
    {
        MessageCardComponent.notify(`An error occurred attempting to open the board for editing.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        throw new Error('Unable to determine the selected board\'s id');
    }

    this.openBoardSettings(id);
}
function settingsRoute_beforeOpen(this: TaskboardManagerComponent, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const subpage = data.properties.subpage;
    this.findPart<PathRouterComponent>('config-router').navigate(subpage);
}