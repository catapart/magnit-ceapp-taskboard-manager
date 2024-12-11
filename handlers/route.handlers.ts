import { PathRouterElement, RoutePageElement } from "@magnit-ce/path-router";
import { SHAREDACCESSKEY, TaskboardManagerElement } from "../taskboard-manager";
import { MessageCardElement, MessageCardType } from "@magnit-ce/message-card";

let historyIsUpdating = false;

export function addRouteHandlers(this: TaskboardManagerElement)
{
    this.findPart<PathRouterElement>('app-router').addRouteLinkClickHandlers(this.shadowRoot!);
    // this.findPart<PathRouterElement>('app-router').addRouteLinkClickHandlers(this.findPart('boards'));
    this.findPart<PathRouterElement>('app-router').addEventListener('pathchange', router_onPathChange.bind(this));
    window.addEventListener('popstate', async (event) =>
    {
        historyIsUpdating = true;
        const { windowPath, windowHash } = parseWindowPath();
        let route = windowPath + windowHash;
        console.log(route);
        await this.findPart<PathRouterElement>('app-router').navigate(route);
        historyIsUpdating = false;
    });
    // this.findPart<PathRouterElement>('config-router').addEventListener('pathchange', configRouter_onPathChange.bind(this));

    (this.findPart('board-route') as unknown as RoutePageElement).applyEventListener('beforeopen', boardRoute_beforeOpen.bind(this));
    (this.findPart('board-settings') as unknown as RoutePageElement).applyEventListener('beforeopen', boardSettingsRoute_beforeOpen.bind(this));
    // this.findPart<RoutePageElement>('config-dialog').applyEventListener('beforeopen', settingsRoute_beforeOpen.bind(this));
}


function router_onPathChange(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    
    // if we're moving back or forward,
    // we don't want to record that in history
    // and the browser will update the url
    if(historyIsUpdating == true) { return; }

    const router = event.target as PathRouterElement;
    
    // const currentLocation = window.location;

    // custom currentLocation; won't need this for root-page app
    // (index.html is auto-routed to on most servers, so the default path functionality will work)
    const currentLocationSearchPathArray = window.location.search.substring(1).split('=');
    const searchPathValue = currentLocationSearchPathArray[1] ?? "";
    const currentLocation = new URL(`${window.location.origin}/${searchPathValue}`)
    

    let updatedPath = router.getAttribute('path');
    const origin = window.location.origin;
    const updatedLocation = new URL(`${origin}/${updatedPath}`);
    // console.log(window.location);

    const { hasChanged, isReplacementChange } = router.compareLocations(currentLocation as unknown as URL, updatedLocation);
    if(hasChanged)
    {
        const newHistoryState =  `${updatedLocation.origin}/demo/app.html?path=${updatedLocation.pathname}${updatedLocation.hash}`;
        if(isReplacementChange)
        {
            window.history.replaceState(null, '', newHistoryState);
        }
        else
        {
            window.history.pushState(null, '', newHistoryState);
        }
    }

    // current route selected status
    const currentPathArray = updatedPath!.split('#');
    const pageRoute = currentPathArray[0];
    const hashRoute = currentPathArray[1];

    if(pageRoute != null)
    {
        const currentMenuItem = this.findPart('boards').querySelector(`[data-route="${pageRoute}"]`);
        if(currentMenuItem != null)
        {
            currentMenuItem.setAttribute('aria-current', 'page');
        }
    }
    if(hashRoute != null)
    {
        const configMenuItem = this.findPart('config-navigation').querySelector(`[data-route="#${hashRoute}"`);
        if(configMenuItem != null)
        {
            configMenuItem.setAttribute('aria-current', 'page');
        }
    }


    // if(!this.hasAttribute('update-url')) { return; }
    // const data = (event as CustomEvent).detail;
    // // console.log(data);

    // const { windowPath, windowHash } = parseWindowPath();

    // let [routePath, routeHash] = this.findPart<PathRouterElement>('app-router').destructurePath(data.path);
    // if(routePath.startsWith('/')) { routePath = routePath.substring(1); }
    // routePath = routePath.trim();
    // if(routeHash.startsWith('#')) { routeHash = routeHash.substring(1); }
    // routeHash = routeHash.trim();

    // if(windowPath == routePath && windowHash == routeHash)
    // {
    //     // don't update the url if we've
    //     // gone back to the same page
    //     return;
    // }
    
    // const newLocation = `${window.location.origin}/${routePath}${(routeHash != '') ? `#${routeHash}` : ''}${window.location.search}`;
    // if(windowHash != '' && routeHash != '')
    // {
    //     // replace the url if only the hash changes
    //     // otherwise back will cycle through every
    //     // popup instead of just closing the dialog
    //     window.history.replaceState(null, '', newLocation);
    //     return;
    // }

    // // console.log(newLocation);
    // window.history.pushState(null, '', newLocation);
}
// function configRouter_onPathChange(this: TaskboardManagerElement, event: Event|CustomEvent)
// {
//     if(!this.hasAttribute('update-url')) { return; }
//     const data = (event as CustomEvent).detail;

//     const { windowPath, windowHash } = parseWindowPath();

//     const windowConfigSubpathIndex = windowHash.indexOf('/');
//     const windowConfigPath = (windowHash.includes('config') == true && windowConfigSubpathIndex != -1) ? windowHash.substring(windowConfigSubpathIndex + 1) : "";

//     let [ routePath, routeHash ] = this.findPart<PathRouterElement>('app-router').destructurePath(data.path);
//     if(routePath.startsWith('/')) { routePath = routePath.substring(1); }
//     routePath = routePath.trim();

//     if(windowConfigPath == routePath)
//     {
//         // don't update the url if we've
//         // gone back to the same page
//         return;
//     }
    
//     const newLocation = `${window.location.origin}/${windowPath}#config/${routePath}${window.location.search}`;
//     window.history.pushState(null, '', newLocation);
// }
export function parseWindowPath_pwa()
{    
    let windowPath = window.location.pathname;
    if(windowPath.startsWith('/')) { windowPath = windowPath.substring(1); }
    if(windowPath.startsWith('demo/app/')) { windowPath = windowPath.substring(10); }
    else if(windowPath.startsWith('demo/app.html')) { windowPath = windowPath.substring(14); }
    windowPath = windowPath.trim();

    let windowHash = window.location.hash;
    if(windowHash.startsWith('#')) { windowHash = windowHash.substring(1); }
    windowHash = windowHash.trim();

    

    return { windowPath, windowHash }
}
export function parseWindowPath()
{
    const pathArray = window.location.search.substring(1).split('=');
    let windowPath = pathArray[1] ?? "";
    if(windowPath.startsWith('/')) { windowPath = windowPath.substring(1); }
    if(windowPath.startsWith('demo/app/')) { windowPath = windowPath.substring(10); }
    else if(windowPath.startsWith('demo/app.html')) { windowPath = windowPath.substring(14); }
    windowPath = windowPath.trim();

    let windowHash = window.location.hash;
    if(windowHash.startsWith('#')) { windowHash = windowHash.substring(1); }
    windowHash = windowHash.trim();

    

    return { windowPath, windowHash }
}

function boardRoute_beforeOpen(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;
    const boardId = data.properties.id;
    if(boardId == null)
    {
        MessageCardElement.notify(`An error occurred attempting to open the board.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        throw new Error('Unable to open board route with unknown id');
    }
    this[SHAREDACCESSKEY].renderBoard(boardId);
}
async function boardSettingsRoute_beforeOpen(this: TaskboardManagerElement, event: Event|CustomEvent)
{
    const data = (event as CustomEvent).detail;

    const router = this.findPart<PathRouterElement>('app-router');
    const properties = await router.getRouteProperties();
    // const fullPath = router.getAttribute('path') ?? "";
    // // if(fullPath == null)
    // // {
    // //     MessageCardElement.notify(`An error occurred attempting to open the board for editing.`, 
    // //     this.getPart('notifications'), { type: MessageCardType.Error });
    // //     throw new Error('Unable to edit board data when path data is unavailable');
    // // }
    // const [path, hash] = router.destructurePath(fullPath);
    // const pathArray = path.split('/');
    // const id = pathArray[pathArray.length-1];
    if(properties.id == null)
    {
        MessageCardElement.notify(`An error occurred attempting to open the board for editing.`, 
        this.getPart('notifications'), { type: MessageCardType.Error });
        throw new Error('Unable to determine the selected board\'s id');
    }

    this.openBoardSettings(properties.id as string);
}
// function settingsRoute_beforeOpen(this: TaskboardManagerElement, event: Event|CustomEvent)
// {
//     const data = (event as CustomEvent).detail;
//     const subpage = data.properties.subpage;
//     this.findPart<PathRouterElement>('config-router').navigate(subpage);
// }