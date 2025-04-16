
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
