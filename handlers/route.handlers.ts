import { PathRouterElement, RoutePageElement } from "@magnit-ce/path-router";
import { SHAREDACCESSKEY, TaskboardManagerElement } from "../taskboard-manager";
import { MessageCardElement, MessageCardType } from "@magnit-ce/message-card";
import { EditableListElement } from "@magnit-ce/editable-list";
import { ConfigPanelElement } from "../components/config-panel/config-panel";



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

// function settingsRoute_beforeOpen(this: TaskboardManagerElement, event: Event|CustomEvent)
// {
//     const data = (event as CustomEvent).detail;
//     const subpage = data.properties.subpage;
//     this.findPart<PathRouterElement>('config-router').navigate(subpage);
// }