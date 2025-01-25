// styles/shared.css?raw
var shared_default = '\ninput, button, textarea, select \n{\n    font: inherit; \n}\n\nbutton\n{\n    display: inline-flex;\n    align-items: center;\n    gap: .5em;\n}\n\nbutton svg\n{\n    width: var(--button-icon-size);\n    height: var(--button-icon-size);\n}\n\nimage-input [slot="placeholder"]\n{\n    display: grid;\n    justify-items: center;\n    gap: .25em;\n    padding: .5em;\n    max-width: 300px;\n    max-height: 300px;\n}\n\ndialog\n{\n    max-height: 80%;\n    max-width: calc(100% - (var(--dialog-margin)*2));\n    overflow: hidden;\n    flex-direction: column;\n    transition: transform 200ms ease, opacity 200ms ease;\n}\ndialog[open]\n{\n    display: flex;\n    opacity: 1;\n}\n@starting-style \n{\n    dialog[open]\n    {\n        opacity: 0;\n        transform: translateY(20px);\n    }\n}\n/* \ndialog > header\n,dialog > form > header\n{\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 7px;\n    align-items: center;\n    font-weight: bold;\n    padding-block: 5px;\n}\ndialog > header svg\n,dialog > form > header svg\n{\n    width: var(--dialog-header-icon-size);\n    height: var(--dialog-header-icon-size);\n} */\n\n/* dialog .route-view\n{\n    flex:1;\n    overflow: hidden;\n}\n\ndialog .route-view route-page\n{\n    overflow: auto;\n} */\n\n@media (max-width: 665px) \n{\n    dialog\n    {\n        bottom: 25px;\n    }\n}\n@media (max-width: 800px) \n{\n    \n}\n\n/* only desktop */\n@media (min-width: 665px) \n{\n    dialog\n    {\n        min-width: 500px;\n        max-width: 850px;\n        top: 50px;\n    }\n}\n@media (min-width: 800px) \n{\n}';

// styles/board-item.global.css?raw
var board_item_global_default = '\na.board\n{\n    margin: 0;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: .25em;\n    padding: .25em 1em;\n}\na.board .name\n{\n    flex: 1;\n}\na.board:hover\n{\n    background: highlight;\n    color: highlighttext;\n}\na.board[aria-current="page"]\n{\n    background: highlight;\n    color: highlighttext;\n}\n\n@media (max-width: 665px) \n{\n\n    a.board [part="edit"]\n    {\n        display: none;\n    }\n}\n@media (max-width: 800px) \n{\n    \n}\n\n/* only desktop */\n@media (min-width: 665px) \n{\n\n    a.board\n    {\n        overflow: hidden;\n    }\n\n    .menu-item-handle\n    ,a.board [part="edit"]\n    {\n        opacity: 0;\n        transition: opacity 200ms ease;\n    }\n    .menu-item-handle\n    ,a.board:hover [part="edit"]\n    {\n        opacity: 1;\n    }\n\n    a.board [part="edit"]:hover\n    {\n        opacity: 1;\n    }\n\n    a.board .board-item-name\n    {\n        flex: 1;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    \n    .menu-item-handle\n    {\n        display: flex;\n        width: 10px;\n        align-self: stretch;\n        cursor: grab;\n        border-radius: 3px;\n        transform: translateY(-2px);\n        \n        background-image: radial-gradient(var(--grip-color, canvastext) 24%, transparent 24%),\n        radial-gradient(var(--grip-color, canvastext) 10%, transparent 10%);\n        background-size: 5px 5px;\n        background-position: 0 0, 2px 4px;\n    }\n    .menu-item-handle:active\n    {\n        cursor: grabbing;\n    }\n}\n@media (min-width: 800px) \n{\n\n}';

// styles/browser-item.global.css?raw
var browser_item_global_default = "captioned-thumbnail\n{\n    height: auto;\n}\n\ncaptioned-thumbnail::part(figure)\n{\n    padding: 3px;\n}\n\ncaptioned-thumbnail svg\n{\n    width: 36px;\n    height: 36px;\n}\n\ncaptioned-thumbnail.match\n{\n    border: solid 1px highlight;\n    order: 0;\n}\nboard-browser:has(captioned-thumbnail.match) captioned-thumbnail:not(.match)\n{\n    order: 1;\n}";

// styles/settings.css?raw
var settings_default = 'task-board\n{\n    background-color: var(--board-background-color, transparent);\n    color: var(--board-font-color);\n}\ntask-board[style*="--board-background-source"]\n{\n    background:  var(--board-background-source), var(--board-background-color, transparent);\n    background-size: var(--background-image-display);\n    background-position: var(--background-image-position, var(--background-image-offset));\n    background-repeat: var(--background-image-repeat);\n}\n\ntask-list\n{\n    background: var(--list-background-color);\n    color: var(--list-font-color);\n    border-color: var(--list-border-color, transparent);\n}\ntask-list::part(header)\n{\n    top: 0;\n}\ntask-list::part(name)\n{\n    color: inherit;\n}\ntask-list.hide-color::part(color)\n{\n    display: none;\n}\ntask-list.hide-color::part(header)\n{\n    grid-template-columns: 1fr auto;\n}\n\ntask-card\n{\n    background-color: var(--task-background-color, none);\n    width: var(--task-width, 300px);\n    overflow: hidden;\n    font-family: sans-serif;\n    color: var(--task-font-color, currentcolor);\n    font-size: var(--task-font-size, 12px);\n    border-color: var(--task-border-color, var(--input-border-color));\n    border-radius: var(--task-border-radius, 2px);\n    border-top-width: var(--task-border-top, 1px);\n    border-right-width: var(--task-border-right, 1px);\n    border-bottom-width: var(--task-border-bottom, 1px);\n    border-left-width: var(--task-border-left, 1px);\n}\ntask-card::part(description)\n{\n    font: inherit;\n}\n.center-remove task-card::part(remove-button)\n{\n    align-self: center;\n}\ntask-card::part(is-finished)\n{\n    align-self: flex-start;\n}\n.center-checkbox task-card::part(is-finished)\n{\n    align-self: center;\n}\n\n.hide-task-color task-card::part(color)\n{\n    display: none;\n}\n\n.task-color-border:not(.color-border-top,.color-border-right,.color-border-bottom,.color-border-left) task-card\n{\n    border-color: var(--task-color);\n}\n.task-color-border.color-border-top task-card\n{\n    border-top-color: var(--task-color);\n}\n.task-color-border.color-border-right task-card\n{\n    border-right-color: var(--task-color);\n}\n.task-color-border.color-border-bottom task-card\n{\n    border-bottom-color: var(--task-color);\n}\n.task-color-border.color-border-left task-card\n{\n    border-left-color: var(--task-color);\n}\n.task-color-background task-card\n{\n    background-color: var(--task-color);\n}\n.task-color-border task-card::part(color-container)\n{\n    display: block;\n    margin-block: 1em;\n    margin-inline-start: 1em;\n    width: 16px;\n    height: 16px;\n    background-color: var(--task-color);\n    border-radius: 50%;\n    align-self: center;\n}\n.task-color-border task-card::part(color)\n{\n    display: none;\n}\n\n/* .task-color-border task-card\n{\n    display: grid;\n    grid-template-columns: auto auto 1fr auto;\n    grid-template-rows: auto 1fr;\n}\n\n.task-color-border task-card::part(color-container)\n,.task-color-border task-card::part(color)\n{\n    grid-row: 2;\n    grid-column: 2;\n    width: 14px;\n    height: 14px;\n    margin-block-end: 7px;\n    margin-block-start: 0;\n    border-radius: 3px;\n    align-self: center;\n    justify-self: center;\n}\n\n.task-color-border task-card::part(handle)\n{\n    grid-row: span 2;\n    grid-column: 1;\n}\n\n.task-color-border task-card::part(is-finished)\n,.task-color-border task-card::part(finished-indicator)\n{\n    grid-row: 1;\n    grid-column: 2;\n    margin-block-start: 7px;\n    margin-block-end: 0;\n}\n\n.task-color-border task-card::part(description)\n,.task-color-border task-card::part(remove-button)\n{\n    grid-row: span 2;\n} */\n\n@media (min-width: 665px) \n{\n    task-list\n    {\n        width: var(--list-width);\n    } \n}';

// taskboard-manager.css?raw
var taskboard_manager_default = `*
{
    box-sizing: border-box;
}

/* helper parts */
/* 
    text
    button
    fieldset
    legend
    input
    textinput
    toggle
    select
    field
    icon
    detail
    summary
    listitem
    header
 */

:host
{    
    font: inherit;
    display: grid;
    border: solid 1px;
    position: relative;
    background: canvas;
    color: canvastext;

    --icon-size: 12px;
    --tab-icon-size: var(--icon-size);
    --brand-icon-size: 24px;
    --button-icon-size: var(--icon-size);
    --dialog-margin: 10px;
    --dialog-header-icon-size: 16px;

    --task-width: auto;
}

#welcome-page
{
    display: grid;
}

#loading
{
    align-self: center;
    justify-self: center;

    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid highlighttext;
    border-radius: 50%;
    border-top-color: highlight;
    animation: loading-spin 1s ease-in-out infinite;
    -webkit-animation: loading-spin 1s ease-in-out infinite;
    opacity: 0;
    transition: opacity 200ms linear;
    pointer-events: none;
    position: absolute;
}
:host([loading]) #loading
{
    opacity: 1;
    pointer-events: initial;
    position: static;
}

app-menu
{
    display: contents;
}

#app-router
{
    overflow: hidden;
}

#board-route
{
    display: flex;
    overflow: hidden;
}

task-board
{
    flex: 1;
}

task-card[data-drag-id]
{
    /* background-color: red; */
    padding: 10px;
    scale: .9;
    border: dashed 1px graytext;
}


#notifications
{
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    width: 375px;
    display: grid;
    row-gap: 7px;
}
#notifications:empty
{
    pointer-events: none;
}

#message-content
{
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
}
    
/* message-card
{
    background-color: field;
    box-shadow: 1px 1px 7px 3px rgb(0 0 0 / .4);
}

message-card::part(message)
{
    display: grid;
    grid-template-columns: 1fr auto;
} */


#confirmation-router
{
    margin-block: 1em;
}
#confirmation-dialog-form
{
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
  
@keyframes loading-spin { to { -webkit-transform: rotate(360deg); } }
@-webkit-keyframes loading-spin { to { -webkit-transform: rotate(360deg); } }


@media (max-width: 665px) 
{
    :host
    {
        grid-template-rows: 1fr auto auto;
        grid-template-columns: 1fr;
        /* grid-template-areas: 'menu'
        'taskboard'; */
    }

    task-board::part(lists)
    {
        scroll-snap-type: x mandatory;
    }
    task-list
    {
        scroll-snap-align: start;
        width: 100vw;
    }
    task-list::part(collapse-button)
    {
        display: none;
    }
    
    #notifications
    {
        width: 100vw;
    }

    dialog
    {
        bottom: 25px;
    }
}
@media (max-width: 800px) 
{
    
}

/* only desktop */
@media (min-width: 665px) 
{
    :host
    {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'menu taskboard';
    }

    #app-router
    {
        grid-column: 2;
        grid-row: 1;
        flex: 1;
    }

    #loading
    {
        grid-column: 2;
        grid-row: 1;
    }
    dialog
    {
        min-width: 500px;
        max-width: 850px;
        top: 50px;
    }

    task-card::part(description)
    {
        width: min-content;
    }

    task-list
    {
        transition: width 200ms linear;
    }
    task-list::part(collapse-icon)
    {
        rotate: -90deg;
        transition: color 200ms linear;
    }
    task-list[collapsed]
    {
        overflow: hidden;
        --list-min-width: var(--collapsed-list-width, calc(1ch + 45px));
        width: 0;
    }
    task-list[collapsed]::part(collapse-icon)
    {
        font-size: 24px;
        color: var(--list-color);
    }
    task-list[collapsed]::part(color-container)
    ,task-list[collapsed]::part(name)
    ,task-list[collapsed]::part(add-button)
    {
        display: none;
    }
}
@media (min-width: 800px) 
{
}
@media (prefers-color-scheme: dark) 
{
    :host(:not([style*="color-scheme: light;"])) config-panel::part(key)
    {
        background-color: #444;
        color: #aaa;
        border-color: #666;
        box-shadow: 1px 1px rgba(255, 255, 255, 0.6),
        0 2px 0 0 rgba(255, 255, 255, 0.1) inset;
    }
}
:host([style*="color-scheme: dark;"]) config-panel::part(key)
{
    background-color: #444;
    color: #aaa;
    border-color: #666;
    box-shadow: 1px 1px rgba(255, 255, 255, 0.6),
    0 2px 0 0 rgba(255, 255, 255, 0.1) inset;
}`;

// taskboard-manager.html?raw
var taskboard_manager_default2 = '<app-menu id="app-menu"></app-menu>\n<path-router id="app-router" path="">\n    <route-page id="welcome-page">\n        <welcome-panel id="welcome-panel"></welcome-panel>\n    </route-page>\n    <route-page path="board/:id" id="board-route">\n        <task-board part="task-board" id="task-board" exportparts="lists:task-board-lists"></task-board>\n    </route-page>\n    <dialog part="board-browser-dialog" class="dialog" is="route-dialog" path="boards">\n        <board-browser id="board-browser"></board-browser>\n    </dialog>\n    <dialog part="dialog config-dialog" class="dialog" is="route-dialog" path="config">\n        <config-panel id="config-panel">\n            <slot name="custom-settings" slot="custom-settings"></slot>\n        </config-panel>\n    </dialog>\n    <dialog id="board-settings-dialog" class="dialog" is="route-dialog" path="board-settings">\n        <board-settings id="board-settings"></board-settings>\n    </dialog>\n    <dialog id="import-dialog" class="dialog" is="route-dialog" path="import">\n        <import-manager id="import-manager"></import-manager>\n    </dialog>\n</path-router>\n<dialog id="confirmation-dialog" class="dialog">\n    <header id="confirmation-dialog-header">\n        <svg id="confirmation-dialog-icon" class="icon">\n            <use href="#icon-definition_import"></use>\n        </svg>\n        <span id="confirmation-dialog-title">Confirmation</span>\n    </header>\n    <path-router id="confirmation-router">\n        <route-page id="confirmation-info" class="confirmation-page" path="info"></route-page>\n        <route-page id="confirmation-warn" class="confirmation-page" path="warn"></route-page>\n        <route-page id="confirmation-danger" class="confirmation-page" path="danger"></route-page>\n    </path-router>\n    <footer id="confirmation-dialog-footer">\n        <form id="confirmation-dialog-form" method="dialog">\n            <button type="submit" id="confirmation-cancel-button">Cancel</button>\n            <button type="submit" id="confirmation-confirm-button">Confirm</button>\n        </form>\n    </footer>\n</dialog>\n<div id="notifications" id="notifications"></div>\n<div id="loading"></div>';

// assets/icons/cancel-cross.ts
var CancelCross = `<svg id="icon-definition_cancel-cross" class="icon cancel-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <path
        style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-linecap:square;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
        d="m 1237.4389,207.63366 -1.8991,1.8987 a 0.65841136,0.65841136 90.003442 0 0 0,0.93116 l 0.4831,0.48317 a 14628.329,14628.329 44.999244 0 0 0.9312,0.93118 l 3.7936,3.79311 a 0.65840885,0.65840885 89.998393 0 1 0,0.93116 l -3.7936,3.7936 a 8783.6896,8783.6896 135.00442 0 1 -0.9313,0.93111 l -0.4829,0.48283 a 0.65811,0.65811 89.993977 0 0 10e-5,0.93094 l 1.8987,1.89741 a 0.65867085,0.65867085 179.98891 0 0 0.9314,-1.8e-4 l 0.4826,-0.48267 a 45427.77,45427.77 134.99941 0 1 0.9312,-0.93119 l 3.7931,-3.79308 a 0.65848899,0.65848899 179.99848 0 1 0.9312,-2e-5 l 3.7936,3.79312 a 10110.91,10110.91 44.992994 0 0 0.9313,0.93108 l 0.483,0.48285 a 0.65856615,0.65856615 179.99438 0 0 0.9313,-9e-5 l 1.897,-1.89705 a 0.65833101,0.65833101 89.994378 0 0 -10e-5,-0.93111 l -0.483,-0.48285 a 5293.5057,5293.5057 44.99639 0 1 -0.9313,-0.93113 l -3.793,-3.79354 a 0.65849247,0.65849247 90.001607 0 1 0,-0.93122 l 3.793,-3.79305 a 149190.44,149190.44 134.99995 0 1 0.9312,-0.93119 l 0.4832,-0.48321 a 0.65863247,0.65863247 90.008202 0 0 10e-5,-0.93132 l -1.8972,-1.89834 a 0.65838576,0.65838576 0.01346964 0 0 -0.9312,-2.2e-4 l -0.483,0.48285 a 7148.543,7148.543 135.00546 0 0 -0.9313,0.9311 l -3.7936,3.79359 a 0.65841791,0.65841791 0.00151591 0 1 -0.9312,-3e-5 l -3.7931,-3.79353 a 52707.551,52707.551 45.002134 0 0 -0.9312,-0.93122 l -0.4826,-0.48267 a 0.65849044,0.65849044 0.00323988 0 0 -0.9312,-5e-5 z"
        transform="translate(-1232.6358,-204.72848)" />
    </svg>`;

// assets/icons/category.ts
var Category = `<svg id="icon-definition_category" class="icon category" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
    style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1.05234;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dashoffset:7.75;stroke-opacity:1;-inkscape-stroke:none"
    d="m 987.94777,204.09868 c -4.44519,0.87265 -7.98186,4.41036 -8.85465,8.85572 -0.0684,0.34864 0.18257,0.63461 0.53791,0.63461 h 5.87812 c 0.35534,0 0.73933,-0.27384 0.91251,-0.58373 0.37028,-0.66258 0.91474,-1.20741 1.57707,-1.57789 0.30982,-0.17329 0.58366,-0.55731 0.58366,-0.91265 v -5.87812 c 0,-0.35534 -0.28597,-0.60638 -0.63462,-0.53794 z"
    transform="matrix(0.9558402,0,0,0.94471945,-934.79517,-191.8839)" />
<path
    style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke:var(--icon-primary-color,InfoText);stroke-width:0.999997;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dashoffset:7.75;stroke-opacity:1;-inkscape-stroke:none"
    d="m 13.169023,0.92164365 c -0.27557,0.007 -0.48525,0.22472995 -0.48525,0.51846995 v 5.55324 c 0,0.33571 0.26185,0.69844 0.55799,0.86216 0.6331,0.34999 1.15358,0.865 1.50751,1.49096 0.16552,0.29274 0.53272,0.55116 0.87238,0.55116 h 5.61853 c 0.33963,0 0.57943,-0.27012 0.51393,-0.5995 -0.83416,-4.19961 -4.21463,-7.54184 -8.46353,-8.36622995 -0.0417,-0.009 -0.0822,-0.0112 -0.12156,-0.0103 z M 1.5756828,12.919584 c -0.3397,0 -0.58000002,0.27014 -0.51453,0.59951 0.83422,4.19961 4.21518,7.54182 8.46408,8.36624 0.33325,0.0646 0.6063302,-0.17251 0.6063302,-0.50822 v -5.55325 c 0,-0.33569 -0.2618502,-0.69844 -0.5580002,-0.86215 -0.63309,-0.34999 -1.15357,-0.86501 -1.5075,-1.49096 -0.16553,-0.29275 -0.53224,-0.55117 -0.8719,-0.55117 z m 14.0459702,0 c -0.33966,0 -0.70686,0.25842 -0.87238,0.55117 -0.35393,0.62595 -0.87441,1.14097 -1.50751,1.49096 -0.29614,0.16371 -0.55799,0.52646 -0.55799,0.86215 v 5.55276 c 0,0.3357 0.27356,0.57288 0.60681,0.50821 4.2489,-0.8244 7.62937,-4.16613 8.46353,-8.36574 0.066,-0.32937 -0.1743,-0.59951 -0.51393,-0.59951 z" />
</svg>`;

// assets/icons/clock.ts
var Clock = `<svg id="icon-definition_clock" class="icon clock" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
        style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
        d="m 11.407262,0.96516647 c -5.7590002,0 -10.44306019,4.68227003 -10.44306019,10.44125953 0,5.759 4.68405999,10.44305 10.44306019,10.44305 5.75899,0 10.44125,-4.68405 10.44125,-10.44305 0,-5.7589895 -4.68226,-10.44125953 -10.44125,-10.44125953 z m -5e-5,1.84099003 c 4.75819,0 8.60031,3.84213 8.60031,8.6003195 0,4.75818 -3.84212,8.60201 -8.60031,8.60201 -4.7581902,0 -8.6020202,-3.84383 -8.6020202,-8.60201 0,-4.7581895 3.84383,-8.6003195 8.6020202,-8.6003195 z" />
    <path
        style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
        d="m 11.407332,0.06846647 c -6.2485302,0 -11.33984019,5.08925003 -11.33984019,11.33788953 0,6.24863 5.09119999,11.33984 11.33984019,11.33984 6.24864,0 11.33789,-5.09131 11.33789,-11.33984 0,-6.2485395 -5.08935,-11.33788953 -11.33789,-11.33788953 z m -2e-5,1.26458003 c 5.56048,0 10.07333,4.51285 10.07333,10.0733295 0,5.56048 -4.51296,10.07524 -10.07333,10.07524 -5.5603802,0 -10.0752402,-4.51486 -10.0752402,-10.07524 0,-5.5603695 4.51476,-10.0733295 10.0752402,-10.0733295 z" />
    <path
        style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
        d="m 11.063662,3.0359765 a 0.71714461,0.71714461 0 0 0 -0.72088,0.7134 l -0.0541,8.3760295 a 0.71721632,0.71721632 0 0 0 0.89456,0.69847 l 5.57655,-1.43056 a 0.71714461,0.71714461 0 0 0 0.51731,-0.87215 0.71714461,0.71714461 0 0 0 -0.87402,-0.51731 l -4.67638,1.19898 0.0504,-7.4441195 a 0.71714461,0.71714461 0 0 0 -0.71341,-0.72274 z" />
    <path
        style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
        d="m 11.069742,3.4220865 a 0.68958996,0.68958996 0 0 0 -0.69318,0.68599 l -0.052,8.0541995 a 0.68965892,0.68965892 0 0 0 0.86019,0.67163 l 5.36228,-1.37559 a 0.68958996,0.68958996 0 0 0 0.49743,-0.83864 0.68958996,0.68958996 0 0 0 -0.84043,-0.49744 l -4.4967,1.15292 0.0485,-7.1580895 a 0.68958996,0.68958996 0 0 0 -0.686,-0.69498 z" />
</svg>`;

// assets/icons/close-cross.ts
var CloseCross = `<svg id="icon-definition_close-cross" class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <path
        style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
        d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />
    </svg>`;

// assets/icons/color.ts
var Color = `<svg id="icon-definition_color" class="icon color" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:0.999999;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dasharray:none;stroke-dashoffset:29.2913;stroke-opacity:1"
        d="M 9.6625302,0.28350092 C 4.876543,0.30766312 0.86199994,6.2841871 0.86199994,11.54637 c 0,6.013935 4.94572596,11.805887 10.88934906,10.889269 9.547678,-1.472442 12.893064,-7.159584 7.892436,-11.10838 C 16.445118,8.8013071 16.247659,2.3066926 11.751349,0.65711502 11.045546,0.39820412 10.346185,0.28003772 9.6625302,0.28350092 Z M 18.494069,12.83467 a 1.87029,1.9922655 0 0 1 1.870151,1.99264 1.87029,1.9922655 0 0 1 -1.870151,1.99213 1.87029,1.9922655 0 0 1 -1.870152,-1.99213 1.87029,1.9922655 0 0 1 1.870152,-1.99264 z" />
    <path style="fill:var(--icon-secondary-color,InfoBackground);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dashoffset:29.2913"
        d="m 9.4950819,2.2130913 a 2.2939048,2.4435074 0 0 0 -2.2939,2.44378 2.2939048,2.4435074 0 0 0 2.2939,2.44326 2.2939048,2.4435074 0 0 0 2.2940001,-2.44326 2.2939048,2.4435074 0 0 0 -2.2940001,-2.44378 z m -5.2642,5.69733 a 2.2939048,2.4435074 0 0 0 -2.294,2.4432597 2.2939048,2.4435074 0 0 0 2.294,2.44378 2.2939048,2.4435074 0 0 0 2.2939,-2.44378 2.2939048,2.4435074 0 0 0 -2.2939,-2.4432597 z m 2.7941,7.2465897 a 2.2939048,2.4435074 0 0 0 -2.2939,2.44377 2.2939048,2.4435074 0 0 0 2.2939,2.44327 2.2939048,2.4435074 0 0 0 2.2939,-2.44327 2.2939048,2.4435074 0 0 0 -2.2939,-2.44377 z m 7.2864001,0.77514 a 2.2939048,2.4435074 0 0 0 -2.2939,2.44378 2.2939048,2.4435074 0 0 0 2.2939,2.44326 2.2939048,2.4435074 0 0 0 2.2939,-2.44326 2.2939048,2.4435074 0 0 0 -2.2939,-2.44378 z" />
</svg>`;

// assets/icons/confirm-check.ts
var ConfirmCheck = `<svg id="icon-definition_confirm-check" class="icon confirm-check" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <path
         style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-linecap:square;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
         d="m 1217.8244,205.78897 -0.2601,0.45136 a 1678.5796,1678.5796 119.92232 0 0 -0.7375,1.28138 l -5.9817,10.40385 a 0.56505518,0.56505518 172.50336 0 1 -0.8902,0.11714 l -2.5269,-2.53657 a 11807.915,11807.915 45.113224 0 1 -1.0433,-1.04749 l -0.369,-0.37041 a 0.73898684,0.73898684 0.10741692 0 0 -1.0452,-0.002 l -1.7867,1.78058 a 0.73898921,0.73898921 90.088719 0 0 -0,1.04526 l 0.3681,0.36914 a 1932.0309,1932.0309 45.101339 0 1 1.0436,1.04728 l 6.2204,6.24724 a 0.56490867,0.56490867 172.50982 0 0 0.8901,-0.11702 l 8.5912,-14.94289 a 3197.1389,3197.1389 119.88313 0 0 0.7367,-1.28189 l 0.2597,-0.45232 a 0.7394065,0.7394065 74.876753 0 0 -0.2727,-1.00934 l -2.185,-1.25556 a 0.74005456,0.74005456 164.91559 0 0 -1.0099,0.27222 z"
         transform="translate(-1200.7725,-203.67043)" />
    </svg>`;

// assets/icons/export.ts
var Export = `<svg id="icon-definition_export" class="icon export" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
d="M 1.4836068,2.5301415 H 21.329107 c 0.2559,0 0.4618,0.20586 0.4618,0.46157 V 19.822941 c 0,0.25571 -0.2059,0.46158 -0.4618,0.46158 H 1.4836068 c -0.2559,0 -0.4618,-0.20587 -0.4618,-0.46158 V 2.9917115 c 0,-0.25571 0.2059,-0.46157 0.4618,-0.46157 z" />
<path
style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
d="m 11.406307,3.5941715 c -0.5307,9e-5 -1.0159,0.16025 -1.253,0.41372 l -4.5001002,4.80389 c -0.5756,0.61476 0.2618,1.3380295 1.5493,1.3380395 h 0.868 v 4.77458 c -0.958,0.18943 -1.8327,0.45786 -2.5896,0.79458 -1.5866,0.70582 -2.7631,0.25992 -2.7631,1.60646 v 1.20148 H 20.241207 v -1.20148 c 0,-1.34654 -1.1764,-0.90064 -2.763,-1.60646 -0.7953,-0.35379 -1.7195,-0.633 -2.7349,-0.8235 v -4.74566 h 0.8669 c 1.2875,-10e-6 2.125,-0.7232795 1.5493,-1.3380395 l -4.5,-4.80389 c -0.2371,-0.25349 -0.7223,-0.41365 -1.2532,-0.41372 z" />
</svg>`;

// assets/icons/file.ts
var File2 = `<svg id="icon-definition_file" class="icon file" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
    style="fill:var(--icon-secondary-color,InfoBackground);stroke:var(--icon-primary-color,InfoText);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
    d="M 3.2868718,1.1832965 H 19.525832 c 0.29256,0 0.52808,0.23535 0.52808,0.52768 V 21.103686 c 0,0.29234 -0.23552,0.52768 -0.52808,0.52768 H 3.2868718 c -0.29255,0 -0.52807,-0.23534 -0.52807,-0.52768 V 1.7109765 c 0,-0.29233 0.23552,-0.52768 0.52807,-0.52768 z" />
    <path
    style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none"
    d="m 5.3448518,3.0908565 c -0.29255,0 -0.52788,0.23517 -0.52788,0.52749 v 4.50924 c 0,0.29234 0.23533,0.52749 0.52788,0.52749 h 6.0050702 c 0.29255,0 0.52789,-0.23515 0.52789,-0.52749 v -4.50924 c 0,-0.29232 -0.23534,-0.52749 -0.52789,-0.52749 z m 8.8552002,0.39689 c -0.56451,1.3e-4 -1.02173,0.45768 -1.0214,1.02176 1.1e-4,0.56379 0.45722,1.02049 1.0214,1.02062 h 3.0755 c 0.56451,2.6e-4 1.02241,-0.45656 1.02252,-1.02062 2.2e-4,-0.56436 -0.4578,-1.02203 -1.02252,-1.02176 z m 0.0986,3.24542 c -0.56451,1.3e-4 -1.02173,0.45768 -1.02141,1.02176 1.1e-4,0.56379 0.45723,1.02049 1.02141,1.02062 h 3.07549 c 0.56451,2.6e-4 1.02243,-0.45656 1.02254,-1.02062 2.2e-4,-0.56436 -0.45781,-1.02203 -1.02254,-1.02176 z M 5.2524718,10.113686 c -0.56451,1.3e-4 -1.02167,0.45768 -1.02141,1.02176 1.5e-4,0.5638 0.45718,1.0205 1.02141,1.02063 H 17.558362 c 0.5645,2.6e-4 1.0224,-0.45656 1.02254,-1.02063 2.6e-4,-0.56436 -0.45774,-1.02202 -1.02254,-1.02176 z m 0,3.53027 c -0.5645,1.3e-4 -1.02167,0.45769 -1.02141,1.02175 1.3e-4,0.5638 0.45718,1.02107 1.02141,1.0212 H 17.558362 c 0.56451,2.7e-4 1.02241,-0.45712 1.02254,-1.0212 2.6e-4,-0.56434 -0.45775,-1.02201 -1.02254,-1.02175 z m 0,3.53308 c -0.56423,1.3e-4 -1.02128,0.4574 -1.02141,1.0212 1.3e-4,0.56379 0.45718,1.02049 1.02141,1.02062 H 17.558362 c 0.56451,2.6e-4 1.02241,-0.45654 1.02254,-1.02062 -1.3e-4,-0.56408 -0.45803,-1.02146 -1.02254,-1.0212 z" />
</svg>`;

// assets/icons/gear.ts
var Gear = `<svg id="icon-definition_gear" class="icon gear" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;stop-color:#000000"
d="m 16.427119,1.7236663 c -0.04201,-0.030363 -0.09197,-0.0081 -0.13494,0.027216 l -2.542428,2.092726 A 8.0066645,8.0066666 0.07978599 0 0 12.700072,3.587311 l -1.32925,-3.00282785 c -0.01379,-0.031878 -0.03339,-0.059706 -0.05792,-0.074523 -0.01453,-0.00916 -0.03218,-0.012136 -0.0512,-0.00947 L 8.1090776,1.0093593 c -0.050929,0.00839 -0.070562,0.058983 -0.075473,0.1143574 L 7.7206901,4.3497491 A 8.0066645,8.0066666 0.07978599 0 0 6.7396517,4.9429409 L 3.7285594,3.7801761 c -0.05187,-0.020049 -0.106186,-0.024719 -0.136533,0.017397 l -1.868883,2.5890597 c -0.03036,0.04201 -0.0089,0.092198 0.02647,0.1350479 l 2.00726,2.4379768 a 8.0066645,8.0066666 0.07978599 0 0 -0.297337,1.2099175 l -2.87584998,1.273802 c -0.05063,0.0223 -0.09223,0.05787 -0.08414,0.108856 l 0.50969398,3.152475 c 0.0084,0.05102 0.05865,0.07099 0.113649,0.07645 l 3.087471,0.299096 a 8.0066645,8.0066666 0.07978599 0 0 0.68339,1.120066 l -1.114043,2.885401 c -0.02005,0.05187 -0.02553,0.10619 0.01665,0.136641 l 2.5895106,1.869223 c 0.04201,0.03036 0.091971,0.0081 0.134949,-0.02722 l 2.3878482,-1.965906 a 8.0066645,8.0066666 0.07978599 0 0 1.2773308,0.295263 l 1.256164,2.837039 c 0.0223,0.05063 0.05862,0.09153 0.108856,0.08414 l 3.151794,-0.508734 8.25e-4,-1.3e-4 c 0.05107,-0.0084 0.07076,-0.05944 0.07585,-0.114806 l 0.3036,-3.12985 a 8.0066645,8.0066666 0.07978599 0 0 1.055091,-0.66366 l 2.945999,1.137519 c 0.05187,0.02005 0.106185,0.02472 0.136533,-0.0174 l 1.868882,-2.589057 c 0.03036,-0.04201 0.0089,-0.09211 -0.02647,-0.135048 l -2.047647,-2.487429 a 8.0066645,8.0066666 0.07978599 0 0 0.254477,-1.123453 l 2.9591,-1.310827 c 0.05063,-0.0223 0.09221,-0.05786 0.08412,-0.108842 l -0.509199,-3.1521593 -4.82e-4,-3.34e-4 c -0.0083,-0.051202 -0.05851,-0.070949 -0.113645,-0.076438 l -3.267,-0.3163889 a 8.0066645,8.0066666 0.07978599 0 0 -0.575389,-0.917404 l 1.185522,-3.0707544 c 0.02005,-0.051874 0.02553,-0.1061893 -0.01665,-0.1366322 z" />
<path
style="fill:var(--icon-secondary-color,InfoBackground);stroke-width:0.25;stroke-linecap:round;stroke-linejoin:round;stop-color:#000000"
d="M 13.837065,10.003961 A 2.8067404,2.8067404 0 0 1 12.809727,13.838039 2.8067404,2.8067404 0 0 1 8.9756487,12.810701 2.8067404,2.8067404 0 0 1 10.002987,8.9766233 2.8067404,2.8067404 0 0 1 13.837065,10.003961 Z" />
</svg>`;

// assets/icons/image.ts
var Image = `<svg id="icon-definition_image" class="icon picture" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
        style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
        d="M 1.4148868,2.4681265 H 21.397817 c 0.25758,0 0.46494,0.20731 0.46494,0.4648 V 19.881746 c 0,0.25749 -0.20736,0.46479 -0.46494,0.46479 H 1.4148868 c -0.25757,0 -0.46492999,-0.2073 -0.46492999,-0.46479 V 2.9329265 c 0,-0.25749 0.20735999,-0.4648 0.46492999,-0.4648 z" />
    <path
        style="fill:var(--icon-secondary-color,InfoBackground);stroke-width:0.999994;stroke-linecap:round;stroke-linejoin:round"
        d="m 16.864987,4.9730465 c -1.11495,0 -2.01231,0.93615 -2.01231,2.09899 v 0.92032 c 0,1.16285 0.89736,2.0989895 2.01231,2.0989895 h 0.88241 c 1.11495,0 2.01281,-0.9361395 2.01281,-2.0989895 v -0.92032 c 0,-1.16284 -0.89786,-2.09899 -2.01281,-2.09899 z m -7.7437002,3.26724 c -0.2302,-0.007 -0.4579,0.0739 -0.62895,0.24496 l -7.05127,7.0491895 v 4.33335 c 1e-5,0.31395 0.2529,0.56628 0.56693,0.56628 H 20.804797 c 0.062,-9e-5 0.12029,-0.0121 0.17608,-0.0302 0.0891,-0.3069 0.009,-0.65983 -0.24552,-0.91388 L 9.7660968,8.5239765 c -0.18175,-0.18168 -0.41463,-0.27663 -0.64481,-0.28364 z" />
</svg>`;

// assets/icons/import.ts
var Import = `<svg id="icon-definition_import" class="icon import" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
    style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:0.999992;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
    d="M 1.5076568,2.5517565 H 21.305057 c 0.2552,0 0.4606,0.20535 0.4606,0.46044 V 19.802466 c 0,0.25509 -0.2054,0.46044 -0.4606,0.46044 H 1.5076568 c -0.2552,0 -0.4606,-0.20535 -0.4606,-0.46044 V 3.0121965 c 0,-0.25509 0.2054,-0.46044 0.4606,-0.46044 z" />
    <path
    style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
    d="m 8.4079568,3.2417565 v 7.4180595 h -1.4098 a 1.8163661,1.0387492 0 0 0 -1.6246,1.50355 l 4.7184002,5.39695 a 1.4694711,0.84036577 0 0 0 2.6287,0 l 4.7187,-5.39695 a 1.8163661,1.0387492 0 0 0 -1.6246,-1.50355 h -1.4089 V 3.2417565 Z" />
</svg>`;

// assets/icons/info.ts
var Info = `<svg id="icon-definition_info" class="icon info" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
    style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:0.999999;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dasharray:none;stroke-dashoffset:29.2913;stroke-opacity:1"
    d="M 22.295505,11.407332 A 10.889144,10.889144 0 0 1 11.406424,22.296479 10.889144,10.889144 0 0 1 0.51720881,11.407332 10.889144,10.889144 0 0 1 11.406424,0.51818382 10.889144,10.889144 0 0 1 22.295505,11.407332 Z" />
<path
    d="m 13.945668,4.3053761 c 0.150778,-0.96462 -0.30687,-1.43709 -1.36997,-1.43709 -1.063,0 -1.668452,0.47247 -1.81923,1.43709 -0.150779,0.96462 0.306971,1.43708 1.369971,1.43708 1.004,0 1.66845,-0.47246 1.819229,-1.43708 z M 11.693889,17.829726 13.373994,7.0811161 h -2.9333 L 8.7605887,17.829726 Z"
    style="font-size:19.6861px;font-family:Passageway;-inkscape-font-specification:Passageway;fill:var(--icon-secondary-color,InfoBackground);stroke-width:2.5;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dashoffset:29.2913"
    aria-label="i" />
</svg>`;

// assets/icons/logo.ts
var Logo = `<svg id="icon-definition_logo" viewBox="0 0 150 31">            
    <use href="#icon-definition_logo-mark" x="-59" height="26" y="2"></use>
    <use href="#icon-definition_logo-type" x="16" y="3" height="28"></use>
</svg>`;

// assets/icons/logo-mark.ts
var LogoMark = `<svg id="icon-definition_logo-mark" viewBox="0 0 39.072864 33.103016" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <g
     transform="translate(-32.699748,-93.890704)"
     id="g2214">
    <rect
       style="fill:#0077b6;fill-opacity:1;stroke:#90e0ef;stroke-width:3.29545;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="35.777416"
       height="29.807568"
       x="34.347473"
       y="95.538429"
       ry="0.37767497"
       id="rect2206" />
    <rect
       style="fill:#03045e;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="9.2341394"
       height="23.481096"
       x="47.61911"
       y="98.701668"
       ry="0.37767494"
       id="rect2208" />
    <rect
       style="fill:#03045e;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="9.2341394"
       height="23.481096"
       x="58.202446"
       y="98.701668"
       ry="0.37767494"
       id="rect2210" />
    <rect
       style="fill:#03045e;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="9.2341394"
       height="23.481096"
       x="37.035774"
       y="98.701668"
       ry="0.37767494"
       id="rect2212" />
  </g>
</svg>
`;

// assets/icons/logo-type.ts
var LogoType = `<svg
   viewBox="0 0 115.45518 28.3332"
   version="1.1"
   id="icon-definition_logo-type"
   inkscape:version="1.2.2 (732a01da63, 2022-12-09)"
   sodipodi:docname="logo-type.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#505050"
     bordercolor="#ffffff"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#505050"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="1.4881377"
     inkscape:cx="154.2196"
     inkscape:cy="85.677554"
     inkscape:window-width="1920"
     inkscape:window-height="976"
     inkscape:window-x="-8"
     inkscape:window-y="-1"
     inkscape:window-maximized="1" />
  <defs
     id="defs2" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     transform="translate(-75.903209,-98.753381)"
     id="g2527">
    <path
       id="path2430"
       style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:#caf0f8;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
       d="M 179.85914 98.753898 C 178.20133 98.753898 176.50241 99.004913 174.77366 99.48822 A 2.0002 2.0002 0 0 0 173.33034 101.68343 C 173.36904 101.96754 173.38873 102.24983 173.38873 102.53144 C 173.38873 103.13721 173.05681 104.84444 172.79859 106.31468 C 172.5475 106.28758 172.31334 106.14466 172.06065 106.14466 C 170.62353 106.14466 169.24254 106.61472 168.08621 107.44226 C 167.45249 106.6799 166.37654 106.14466 165.40679 106.14466 L 165.40627 106.14466 C 164.51461 106.14466 163.75117 106.41911 163.05655 106.85935 A 2.0002 2.0002 0 0 0 162.25608 106.37307 C 159.81122 106.37307 158.03727 106.49333 156.59751 106.94926 A 2.0002 2.0002 0 0 0 156.10141 107.18697 C 154.51175 106.56557 152.9763 106.22063 151.48619 106.22063 A 2.0002 2.0002 0 0 0 150.59374 106.71465 C 149.88608 106.48955 149.19739 106.14414 148.46467 106.14414 L 148.46467 106.14466 C 146.5938 106.14466 144.82671 106.99614 143.56058 108.39362 C 143.49123 108.24014 143.41292 108.08985 143.32028 107.94507 C 142.58843 106.77554 141.12227 106.14414 139.82799 106.14414 L 139.82799 106.14466 C 139.44494 106.14466 139.07351 106.24065 138.69938 106.31623 L 137.71856 106.22838 A 2.0002 2.0002 0 0 0 137.54286 106.22063 C 135.36494 106.22063 133.30922 107.09254 131.86879 108.66492 C 132.48172 107.68514 132.81033 106.52522 132.81033 105.35143 C 132.81033 103.50412 131.88697 101.67023 130.34381 100.67729 C 128.80066 99.684364 126.89376 99.363163 124.61341 99.363163 C 123.44636 99.363163 122.08519 99.453521 120.5041 99.626713 C 118.96186 99.780937 118.03815 99.881777 117.38853 100.0117 A 2.0002 2.0002 0 0 0 115.80672 101.65605 L 115.70491 102.29115 A 2.0002 2.0002 0 0 0 116.2656 104.02128 L 116.53277 104.28896 C 116.52018 104.27983 116.61591 104.39773 116.72449 104.63468 A 2.0002 2.0002 0 0 0 116.75395 104.69514 C 116.80315 104.79344 116.84748 104.93211 116.84748 105.19898 C 116.84748 104.87005 116.76567 105.78433 116.53897 106.88467 C 116.53456 106.90608 116.52849 106.93371 116.52399 106.95546 A 2.0002 2.0002 0 0 0 115.06258 106.32191 L 114.85949 106.32243 C 114.03577 106.32243 113.15021 106.41327 112.17593 106.57823 C 111.36345 106.70382 110.71987 106.89286 110.08407 107.13685 A 2.0002 2.0002 0 0 0 108.61129 106.34775 C 107.27462 106.34775 105.66695 106.5824 103.64002 107.00869 C 103.83037 106.0307 103.93147 105.21357 103.93147 104.48636 C 103.93147 103.07598 103.41627 101.61536 102.33209 100.67368 C 101.33197 99.790771 99.988431 99.363163 98.654275 99.363163 C 97.197989 99.363163 95.768081 99.947296 94.32224 100.75171 C 94.167775 100.59406 94.059104 100.39622 93.878856 100.26543 C 92.969234 99.605348 91.873421 99.363163 90.781371 99.363163 C 89.494074 99.363163 88.229468 99.828159 86.95318 100.48247 A 2.0002 2.0002 0 0 0 85.269562 99.388484 C 82.526109 99.388484 80.650629 99.490059 79.140737 100.00188 A 2.0002 2.0002 0 0 0 77.804902 101.59972 L 77.728421 102.10718 A 2.0002 2.0002 0 0 0 78.121161 103.62285 L 78.374893 103.95306 A 2.0002 2.0002 0 0 0 78.410033 103.99802 C 78.666146 104.31196 78.731696 104.49264 78.744896 104.67705 C 78.739895 104.68154 78.72623 104.88737 78.687535 105.1132 C 78.634225 105.42451 78.549878 105.87334 78.433804 106.44335 C 78.201656 107.58336 77.847451 109.21138 77.374954 111.3123 C 76.419395 115.56113 75.902175 117.9232 75.902175 119.54901 A 2.0002 2.0002 0 0 0 77.90257 121.54889 L 78.209011 121.54889 C 80.68744 121.54889 82.334075 121.52098 83.873265 120.61148 A 2.0002 2.0002 0 0 0 84.398298 119.6875 A 2.0002 2.0002 0 0 0 86.285004 121.57421 L 86.97075 121.57421 C 89.14719 121.57421 90.774063 121.43887 92.200922 120.68176 A 2.0002 2.0002 0 0 0 93.154352 119.09581 C 93.353895 119.58837 93.600874 120.06529 93.990477 120.4549 C 94.820557 121.28498 96.024943 121.70133 97.156175 121.70133 C 98.86548 121.70133 100.54405 121.16548 102.12435 120.21925 C 102.14393 120.23936 102.16361 120.25946 102.18378 120.2792 C 102.34184 120.43396 102.54982 120.485 102.72638 120.60528 C 102.2306 121.35797 101.98844 122.24685 101.98844 123.10538 C 101.98844 124.2867 102.70047 125.53378 103.65035 126.17961 C 104.59948 126.82944 105.73655 127.08602 106.88478 127.08602 C 108.81822 127.08602 110.67431 126.28108 112.04105 124.88667 C 113.09535 123.81103 113.90151 122.43783 114.54219 120.797 A 2.0002 2.0002 0 0 0 115.77158 121.47861 C 116.12084 121.52851 116.4755 121.54889 116.8418 121.54889 C 118.05188 121.54889 119.14323 121.29802 120.2049 120.98613 C 121.55942 121.39746 122.92924 121.70133 124.30852 121.70133 C 126.50045 121.70133 128.55316 121.02464 130.11902 119.66012 A 2.0002 2.0002 0 0 0 130.13091 119.6503 C 130.32372 119.47952 130.50623 119.29915 130.67816 119.11079 C 130.83584 119.35038 131.01115 119.5788 131.20526 119.79447 A 2.0002 2.0002 0 0 0 131.2187 119.81049 C 132.37009 121.06423 134.07468 121.70082 135.81428 121.70082 C 137.95853 121.70082 139.99451 120.78261 141.42376 119.17746 C 141.53708 119.05018 141.64556 118.91944 141.75087 118.78627 C 141.91245 119.13716 142.10811 119.47119 142.3436 119.78517 C 143.25149 120.99569 144.79971 121.70133 146.3046 121.70133 C 147.36099 121.70133 148.36716 121.33905 149.36126 120.84351 C 149.41316 120.88351 149.41654 120.96095 149.47081 120.99802 C 150.22443 121.51268 151.10602 121.70133 151.94353 121.70133 C 152.93787 121.70133 153.91306 121.45207 154.91027 121.04504 A 2.0002 2.0002 0 0 0 154.92784 121.03678 C 155.08039 120.97271 155.22879 120.90692 155.37536 120.83989 A 2.0002 2.0002 0 0 0 156.89671 121.54889 L 157.0998 121.54889 C 159.40458 121.54889 160.89842 121.51082 162.2659 120.98252 A 2.0002 2.0002 0 0 0 163.54489 119.05085 L 163.52163 118.34185 C 163.52263 117.69551 163.62626 116.7648 163.86166 115.60352 A 2.0002 2.0002 0 0 0 163.86942 115.55649 C 163.91902 115.27873 163.99685 114.8615 164.06475 114.49196 C 164.12285 114.49996 164.21299 114.51366 164.21306 114.51366 A 2.0002 2.0002 0 0 0 164.42235 114.50177 C 164.47401 114.49634 164.52542 114.49004 164.57687 114.48317 C 164.5584 114.76335 164.54844 115.04636 164.54844 115.33221 C 164.54844 117.13688 164.86711 118.76029 165.96076 120.00583 A 2.0002 2.0002 0 0 0 165.9959 120.04304 C 166.98227 121.10939 168.45108 121.70133 169.90212 121.70133 C 170.94646 121.70133 171.95796 121.36453 172.96447 120.90242 C 173.70023 121.39312 174.5576 121.70133 175.38861 121.70133 C 176.83902 121.70133 178.25185 121.24462 179.60954 120.45645 C 179.80301 120.58134 180.00443 120.69623 180.21674 120.80888 A 2.0002 2.0002 0 0 0 180.23224 120.81663 C 181.45175 121.45077 182.85186 121.70133 184.38083 121.70133 C 186.04832 121.70133 187.65929 121.21089 188.97073 120.24458 A 2.0002 2.0002 0 0 0 188.97434 120.24251 C 190.3259 119.24049 191.25586 117.64239 191.25586 115.96887 C 191.25586 114.9873 190.88388 114.11036 190.38666 113.27342 C 190.93791 112.4391 191.35714 111.56438 191.35714 110.53354 C 191.35714 109.23285 190.65463 107.80739 189.53297 107.08207 C 188.4935 106.39558 187.26838 106.14473 185.98073 106.14466 L 185.98021 106.14466 C 184.17915 106.14475 182.47945 106.61053 181.20996 107.67842 C 181.76143 105.10763 182.06262 103.53454 182.06262 102.32784 C 182.06262 101.85855 182.04489 101.45171 181.99389 101.0566 C 181.94289 100.66149 181.92403 100.29243 181.56239 99.704744 A 2.0002 2.0002 0 0 0 179.85914 98.753898 z M 81.509585 101.47053 L 81.544725 101.51549 L 81.810342 101.85913 L 81.794839 101.95887 C 81.690013 101.80136 81.6287 101.61655 81.509585 101.47053 z M 119.37291 101.47259 L 119.81629 101.91598 L 119.78735 102.09943 C 119.64686 101.89376 119.56505 101.66473 119.37291 101.47259 z M 120.33202 102.9061 L 120.36148 102.96863 C 120.35548 102.95583 120.34361 102.94629 120.33771 102.93349 C 120.33371 102.92449 120.33602 102.9146 120.33202 102.9061 z M 177.93367 103.03529 C 177.86177 103.63645 177.62335 105.35581 176.93942 108.50782 A 2.0002 2.0002 0 0 0 176.93735 108.51764 C 176.1658 112.15249 175.74983 114.51078 175.74983 116.14663 C 175.74983 116.5824 175.75414 116.97038 175.94155 117.51761 C 175.94755 117.53501 175.9739 117.56069 175.9803 117.57859 C 175.78612 117.61309 175.56168 117.70158 175.38861 117.70158 C 175.28319 117.70158 175.21595 117.70884 175.17364 117.71967 A 2.0002 2.0002 0 0 0 174.77366 117.34191 A 2.0002 2.0002 0 0 0 175.07597 116.83238 L 175.07442 116.90473 C 175.13142 115.74968 175.44359 113.6252 176.02733 110.72319 A 2.0002 2.0002 0 0 0 175.93948 109.72274 A 2.0002 2.0002 0 0 0 176.4025 109.13104 C 176.98415 106.47432 177.24189 104.65779 177.29857 103.12934 C 177.51377 103.08984 177.72268 103.06469 177.93367 103.03529 z M 90.781371 103.36344 C 91.297984 103.36344 91.484087 103.46775 91.531196 103.50193 C 91.578306 103.53613 91.623671 103.54058 91.697077 103.87503 A 2.0002 2.0002 0 0 0 92.222626 104.4843 A 2.0002 2.0002 0 0 0 91.673823 105.35556 C 91.573033 106.0179 91.317465 107.26445 90.916246 108.98635 C 90.053548 112.58902 89.615286 115.15711 89.433649 117.26181 C 89.261076 117.30491 88.919061 117.31895 88.652302 117.36155 C 88.813778 116.04922 88.896342 114.92643 89.423831 112.72669 C 89.82527 111.0526 90.128609 109.70665 90.33592 108.67009 C 90.543232 107.63353 90.671817 107.0228 90.671817 106.29091 C 90.671817 105.49688 90.787442 104.85206 90.074437 103.86108 C 89.989307 103.73796 89.871498 103.72349 89.777297 103.62492 C 90.142929 103.51152 90.548594 103.36344 90.781371 103.36344 z M 98.654275 103.36344 C 99.245206 103.36344 99.4715 103.47623 99.689354 103.66988 A 2.0002 2.0002 0 0 0 99.713125 103.69158 C 99.839257 103.80019 99.931716 103.87037 99.931716 104.48636 C 99.931716 104.98825 99.610899 106.94686 98.880618 109.7186 A 2.0002 2.0002 0 0 0 98.877 109.72687 C 98.131755 112.60387 97.722549 114.62826 97.722549 116.22312 C 97.722549 116.58428 97.716446 116.94571 97.949408 117.49642 C 97.956308 117.51272 97.987827 117.53243 97.995917 117.54913 C 97.716386 117.59963 97.423954 117.70158 97.156175 117.70158 C 96.831144 117.70158 96.868663 117.67756 96.818211 117.62716 C 96.831221 117.64016 96.744314 117.61145 96.744314 117.11143 C 96.744314 116.78428 97.045517 114.81217 97.726683 112.00218 L 97.72875 111.99392 C 98.08722 110.54263 98.358099 109.36714 98.544721 108.44736 C 98.731756 107.52554 98.85168 106.95722 98.851679 106.26558 C 98.851679 105.48991 98.946818 104.8287 98.242414 103.86315 C 98.135405 103.71297 97.979039 103.6744 97.853807 103.55877 C 98.12375 103.49317 98.455842 103.36344 98.654275 103.36344 z M 83.687747 103.5195 C 83.688847 103.5494 83.700563 103.55691 83.701183 103.58771 A 2.0002 2.0002 0 0 0 84.148184 104.29103 A 2.0002 2.0002 0 0 0 83.478457 105.32611 C 83.342347 106.08228 83.032972 107.47961 82.562751 109.42766 A 2.0002 2.0002 0 0 0 82.562751 109.4318 C 81.696561 113.04315 81.250223 115.38529 81.048631 117.24993 C 80.933769 117.27463 80.534753 117.29007 80.316376 117.32847 C 80.503508 116.11265 80.620507 115.11131 81.277558 112.18977 C 81.753324 110.07431 82.10941 108.43059 82.351394 107.24227 C 82.472387 106.64811 82.565743 106.16998 82.630964 105.78913 C 82.696184 105.40829 82.748269 105.23497 82.748269 104.76593 C 82.748269 104.37151 82.623615 103.99689 82.527094 103.61717 C 82.890369 103.57667 83.207912 103.5487 83.687747 103.5195 z M 121.88645 103.54275 L 121.88697 103.54275 C 121.84527 103.83878 121.57685 105.60899 120.93354 108.52746 A 2.0002 2.0002 0 0 0 121.22241 109.76149 A 2.0002 2.0002 0 0 0 120.47827 110.44311 C 119.81246 113.3624 119.38339 115.47795 119.17964 116.90421 A 2.0002 2.0002 0 0 0 119.30056 117.15794 C 119.07284 117.23464 118.73717 117.23554 118.47477 117.2892 C 118.66145 116.09406 118.76395 115.1553 119.39823 112.43368 C 119.86609 110.42613 120.21808 108.8516 120.45708 107.69134 C 120.69609 106.53108 120.84775 106.05284 120.84775 105.19898 C 120.84775 104.6714 120.65625 104.16423 120.49997 103.65437 C 120.6992 103.63307 120.67941 103.62945 120.90046 103.60735 A 2.0002 2.0002 0 0 0 120.9201 103.60528 C 121.3104 103.56238 121.53095 103.57405 121.88645 103.54275 z M 127.73415 103.88072 C 127.86472 103.93752 128.0891 103.98267 128.1796 104.04091 C 128.7023 104.37723 128.81057 104.54021 128.81057 105.35143 C 128.81057 106.13094 128.64608 106.48022 128.18736 106.90224 A 2.0002 2.0002 0 0 0 128.17185 106.91619 C 128.02876 107.05052 127.77455 107.08261 127.61323 107.19524 C 127.86636 106.46391 128.01166 105.69879 128.01166 104.91993 C 128.01166 104.57368 127.79639 104.22872 127.73415 103.88072 z M 158.79479 108.051 L 159.2635 108.52126 L 159.24024 108.69748 C 159.10105 108.48255 159.00277 108.25898 158.79479 108.051 z M 184.70329 108.4024 C 184.70129 108.4034 184.70287 108.40609 184.70122 108.40809 C 184.69922 108.41009 184.69495 108.40809 184.69295 108.41016 L 184.70329 108.4024 z M 159.60508 109.21476 L 159.60559 109.21476 L 159.62471 109.25765 C 159.62171 109.25065 159.61478 109.24543 159.61128 109.23853 C 159.60728 109.23153 159.60908 109.22166 159.60508 109.21476 z M 126.46291 109.32586 L 126.46291 109.32638 L 126.43759 109.35945 C 126.44359 109.35245 126.44533 109.3434 126.45103 109.3362 C 126.45403 109.3322 126.46021 109.32986 126.46291 109.32586 z M 131.09261 109.65091 C 131.02495 109.75115 130.95949 109.85245 130.89623 109.95528 C 130.87361 109.93286 130.85109 109.91065 130.82802 109.88862 C 130.84912 109.86932 130.8774 109.85903 130.8983 109.83953 C 130.96476 109.77822 131.02937 109.7152 131.09261 109.65091 z M 130.704 109.71189 L 130.72053 109.72635 C 130.71653 109.72335 130.71287 109.7216 130.70917 109.7186 C 130.70753 109.71696 130.70595 109.71401 130.704 109.71189 z M 126.51562 110.039 L 126.57608 110.10359 C 126.56518 110.09119 126.54791 110.0884 126.53681 110.0762 C 126.52601 110.0646 126.52672 110.0505 126.51562 110.039 z M 139.92979 110.05863 A 2.0002 2.0002 0 0 0 139.95305 110.09584 C 140.03695 110.22552 140.1985 110.71865 140.25174 111.48232 C 140.10174 111.45717 139.91579 111.42149 139.8838 111.43064 C 139.86941 111.38284 139.84763 111.2675 139.84763 111.01568 C 139.84763 110.84546 139.8622 110.65908 139.8962 110.45499 A 2.0002 2.0002 0 0 0 139.85538 110.12323 C 139.93498 110.10543 139.94259 110.07943 139.92979 110.05863 z M 185.85929 110.41779 L 187.32638 110.58005 C 187.31938 110.59595 187.07026 111.07227 186.6427 111.6327 C 186.5925 111.6217 186.56135 111.62597 186.48044 111.57637 C 186.2254 111.41942 185.85929 110.78084 185.85929 110.45706 C 185.85929 110.40386 185.85529 110.45489 185.85929 110.41779 z M 152.6055 110.47256 C 152.77177 110.49836 152.95798 110.55501 153.13467 110.594 C 152.9701 111.30109 152.77248 111.91557 152.63858 112.71894 C 152.37777 114.26682 152.23033 115.33619 152.23033 116.2226 C 152.23033 116.62369 152.23149 116.97616 152.3926 117.48815 C 152.4006 117.51255 152.43464 117.55257 152.44324 117.57807 C 152.29572 117.60287 152.04405 117.70106 151.94353 117.70106 C 151.82804 117.70106 151.78685 117.69767 151.773 117.69589 A 2.0002 2.0002 0 0 0 151.37095 117.27938 A 2.0002 2.0002 0 0 0 151.65621 116.69699 C 151.71811 114.90265 152.0134 112.99478 152.55486 110.97227 A 2.0002 2.0002 0 0 0 152.6055 110.47256 z M 161.01378 110.48238 A 2.0002 2.0002 0 0 0 161.10938 110.6033 A 2.0002 2.0002 0 0 0 160.56264 111.52366 C 160.52274 111.76329 160.42331 112.27533 160.27325 112.99231 A 2.0002 2.0002 0 0 0 160.2655 113.03726 C 160.12946 113.76848 160.01764 114.37225 159.93167 114.85369 L 159.94149 114.80873 C 159.74733 115.76659 159.69794 116.54649 159.63867 117.34553 C 159.48104 117.36813 159.21599 117.37454 158.99426 117.39824 C 159.06996 116.84487 159.1139 116.38827 159.39062 114.96686 L 159.39269 114.95291 C 159.60429 113.90303 159.76547 113.07429 159.87534 112.459 C 159.98581 111.84038 160.06655 111.67197 160.06655 111.01568 C 160.06655 110.85858 159.97387 110.7286 159.95338 110.57436 C 160.30668 110.53836 160.56948 110.50518 161.01378 110.48238 z M 112.70096 110.55111 C 112.67914 110.70556 112.67388 110.72173 112.65032 110.89062 A 2.0002 2.0002 0 0 0 112.65032 110.89476 C 112.20097 114.15673 111.71195 116.59659 111.24782 118.0938 A 2.0002 2.0002 0 0 0 111.24627 118.10207 C 111.19917 118.25623 111.13866 118.34445 111.08969 118.49068 A 2.0002 2.0002 0 0 0 110.90986 117.58221 A 2.0002 2.0002 0 0 0 111.40027 116.96312 C 111.53976 116.07386 111.72633 114.75776 111.96302 113.00006 L 111.96457 112.98455 C 112.1272 111.84628 112.20756 111.31956 112.30667 110.64671 C 112.46845 110.61021 112.49752 110.58541 112.70096 110.55111 z M 106.62847 110.62501 L 106.62898 110.62501 C 106.55278 111.15728 106.52599 111.51252 106.27913 112.60732 A 2.0002 2.0002 0 0 0 106.27552 112.62489 C 106.0867 113.50033 105.94303 114.20125 105.8435 114.74414 C 105.744 115.28703 105.67193 115.53568 105.67193 116.09547 C 105.67193 116.44981 105.77682 116.86901 105.95512 117.28713 C 105.79271 117.30553 105.56373 117.44733 105.412 117.44733 C 105.17904 117.44733 105.05679 117.42606 104.99807 117.41116 C 104.98685 117.35787 104.97224 117.25478 104.97224 117.06079 C 104.97224 116.94643 105.11883 115.80743 105.48021 114.23047 A 2.0002 2.0002 0 0 0 105.48228 114.22634 C 105.83433 112.67411 106.00454 111.66258 106.03884 110.70717 C 106.25331 110.67397 106.43475 110.65021 106.62847 110.62501 z M 183.85528 110.73043 C 183.92678 111.54931 184.20055 111.83512 184.43147 112.16807 C 184.69385 112.54639 185.00823 112.92303 185.40454 113.36541 A 2.0002 2.0002 0 0 0 186.46494 113.4822 A 2.0002 2.0002 0 0 0 186.44943 114.5333 C 187.1339 115.32514 187.2561 115.83301 187.2561 115.96887 C 187.2561 116.23247 187.0058 116.42682 186.84579 116.62516 C 186.75289 116.32558 186.74396 115.99697 186.57811 115.74821 C 186.45687 115.56634 186.37259 115.43016 186.34556 115.38286 C 186.16588 115.06842 185.99683 114.86071 185.78901 114.61133 C 185.64036 114.41878 185.51436 114.25612 185.40815 114.12867 C 184.99182 113.62906 184.61941 113.17453 184.29091 112.7639 C 183.63047 111.93836 183.50956 111.39678 183.50956 111.34589 C 183.50956 110.98725 183.54275 110.97061 183.65994 110.85342 A 2.0002 2.0002 0 0 0 183.67389 110.83998 C 183.71759 110.79538 183.80545 110.7721 183.85528 110.73043 z M 170.05819 111.06271 L 170.0587 111.06271 C 169.9978 111.23509 169.87477 111.37645 169.82616 111.55467 A 2.0002 2.0002 0 0 0 169.81634 111.59756 C 169.49154 112.89672 169.32386 114.19689 169.32386 115.48621 C 169.32386 116.18526 169.35654 116.81109 169.68146 117.53931 C 169.69916 117.57891 169.76089 117.61581 169.78275 117.6561 C 169.39394 117.6368 169.18125 117.57375 168.96058 117.33984 C 168.83255 117.18697 168.54872 116.59338 168.54872 115.33221 C 168.54872 113.65712 168.94309 112.43126 169.68353 111.41617 C 169.81188 111.24413 169.93505 111.19433 170.05819 111.06271 z M 134.81848 111.3924 C 134.80728 111.4308 134.79474 111.45875 134.78334 111.49782 A 2.0002 2.0002 0 0 0 134.77713 111.52159 C 134.47713 112.60164 134.32187 113.69932 134.32187 114.79891 C 134.32187 115.70662 134.42591 116.5113 134.81021 117.33778 C 134.6344 117.24468 134.31731 117.26287 134.17355 117.1073 C 133.81368 116.70394 133.54879 116.0845 133.54879 114.9002 C 133.54879 113.43147 133.92786 112.40135 134.71874 111.47664 A 2.0002 2.0002 0 0 0 134.72649 111.4663 C 134.75549 111.4319 134.78948 111.4252 134.81848 111.3924 z M 139.89155 111.45286 C 139.89742 111.46166 139.89666 111.46445 139.89155 111.45286 z M 127.5197 112.48433 C 127.67535 112.57953 127.91675 112.58412 128.05661 112.70912 A 2.0002 2.0002 0 0 0 128.07418 112.72462 C 128.40873 113.01647 128.58216 113.315 128.58216 114.18965 C 128.58216 115.28216 128.28762 115.93331 127.48249 116.64841 C 127.25019 116.85009 126.96526 116.96125 126.70114 117.10523 C 127.30056 116.02651 127.62873 114.80908 127.62873 113.55454 C 127.62873 113.18609 127.55908 112.83988 127.5197 112.48433 z M 180.0829 113.50132 C 180.15228 113.63937 180.22547 113.77618 180.30252 113.91215 C 180.19649 113.98629 180.09359 114.06444 179.99298 114.14572 C 180.0188 113.94641 180.04894 113.73098 180.0829 113.50132 z M 145.92064 114.12609 C 145.89458 114.4484 145.88085 114.76589 145.88085 115.07848 C 145.88085 115.54847 145.89478 115.95209 145.93718 116.33422 C 145.97968 116.71636 145.98388 117.0459 146.29685 117.62716 C 146.30914 117.64996 146.34007 117.65757 146.35317 117.67987 C 146.34417 117.68007 146.3131 117.70158 146.3046 117.70158 C 145.77749 117.70158 145.7526 117.6644 145.54289 117.3848 C 145.34191 117.11682 145.10519 116.5031 145.10519 115.38286 C 145.10519 115.05926 145.12237 114.75033 145.15428 114.45268 C 145.39588 114.36966 145.62858 114.27786 145.84364 114.16794 A 2.0002 2.0002 0 0 0 145.92064 114.12609 z M 140.77367 117.35328 L 140.7561 117.37498 C 140.7581 117.37198 140.75772 117.36816 140.75972 117.36516 C 140.76372 117.36016 140.76997 117.35798 140.77367 117.35328 z M 177.84944 119.01778 C 177.93364 119.02948 177.99878 119.11131 178.07992 119.11131 A 2.0002 2.0002 0 0 0 178.2582 119.09736 C 178.26771 119.1143 178.27739 119.13088 178.28714 119.14749 L 177.93574 119.26169 L 177.84944 119.01778 z M 154.83172 119.08237 C 154.83197 119.08757 154.83199 119.09269 154.83224 119.09788 L 154.52735 119.18366 L 154.49996 119.10718 C 154.50396 119.10721 154.5063 119.11131 154.5103 119.11131 A 2.0002 2.0002 0 0 0 154.83172 119.08237 z M 108.8614 124.17922 L 108.8614 124.17974 L 108.79474 124.23451 C 108.79774 124.23251 108.79794 124.22718 108.80094 124.22418 C 108.81934 124.20808 108.8431 124.19532 108.8614 124.17922 z "
       inkscape:label="stroke"
       transform="translate(6.2500021e-8)" />
    <g
       id="g2468"
       inkscape:label="boards"
       transform="translate(6.2500021e-8)">
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:#03045e;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 189.25678,115.96798 q 0,1.5748 -1.4732,2.667 -1.4478,1.0668 -3.4036,1.0668 -1.9558,0 -3.2258,-0.6604 -1.2446,-0.6604 -1.2446,-1.2446 0,-0.6096 0.762,-1.524 0.7874,-0.9398 1.6002,-1.0922 1.1684,0.635 2.1082,2.8194 0.7366,0 0.7366,-0.4826 0,-0.3556 -0.2032,-0.6604 -0.2032,-0.3048 -0.3048,-0.4826 -0.1016,-0.1778 -0.3556,-0.4826 -0.254,-0.3302 -0.381,-0.4826 -0.635,-0.762 -1.143,-1.397 -1.2192,-1.524 -1.2192,-2.667 0,-1.1684 0.7366,-1.905 1.27,-1.2954 3.7338,-1.2954 1.5494,0 2.4638,0.6096 0.9144,0.5842 0.9144,1.778 0,1.1684 -1.397,2.6924 1.2954,1.4986 1.2954,2.7432 z m -1.7018,-4.6482 q 0.3048,-0.4826 0.3048,-0.8636 0,-0.381 -0.3302,-0.5842 -0.3302,-0.2032 -0.7874,-0.2032 -0.4572,0 -0.7112,0.2286 -0.2286,0.2032 -0.2286,0.5588 0,0.3556 1.0922,1.5748 0.3556,-0.254 0.6604,-0.7112 z"
         id="path2432"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:#03045e;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 175.38838,119.70178 q -1.5748,0 -2.032,-1.2192 -1.9304,1.2192 -3.4544,1.2192 -1.4986,0 -2.4384,-1.016 -0.9144,-1.0414 -0.9144,-3.3528 0,-3.0226 1.524,-5.1054 1.5494,-2.0828 3.9878,-2.0828 1.1938,0 2.3876,0.5588 0.9398,-4.2926 0.9398,-6.1722 0,-0.5588 -0.0762,-1.1176 2.3622,-0.6604 4.5466,-0.6604 0.2032,0.3302 0.2032,1.5748 0,1.2192 -1.1684,6.604 -1.143,5.3848 -1.143,7.2136 0,0.9652 0.3302,0.9652 l 1.0922,-0.3556 0.4572,1.2954 q -2.2352,1.651 -4.2418,1.651 z m -3.3274,-2.5654 q 0.4572,0 1.016,-0.3048 v -0.0254 q 0.1016,-2.0574 0.9906,-6.477 -0.508,-0.1524 -0.7366,-0.1524 -0.5334,0 -0.9398,0.5334 -0.4064,0.5334 -0.635,1.3716 -0.4318,1.7272 -0.4318,3.4036 0,1.651 0.7366,1.651 z"
         id="path2426"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:#03045e;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 157.10037,119.54938 h -0.2032 q -0.0762,-0.3556 -0.0762,-1.0922 0,-0.762 0.6096,-3.8862 0.635,-3.1496 0.635,-3.556 0,-0.4318 -0.2286,-0.8636 -0.2286,-0.4572 -0.4572,-0.6858 l -0.2286,-0.2286 0.0508,-0.381 q 1.524,-0.4826 5.0546,-0.4826 0.3302,0.635 0.4064,1.4986 1.5494,-1.7272 2.7432,-1.7272 1.5494,0 1.7018,2.6162 -0.0508,0.0508 -0.127,0.1778 -0.0762,0.1016 -0.3556,0.381 -0.2794,0.2794 -0.5842,0.508 -0.8636,0.5842 -1.8288,0.6858 -0.0254,0 -0.3556,-0.5588 -0.3048,-0.5588 -0.5334,-0.5588 -0.2032,0 -0.7874,0.4572 -0.0762,0.4572 -0.3048,1.5494 -0.2032,1.0922 -0.3302,1.8034 -0.381,1.8796 -0.381,3.1496 l 0.0254,0.762 q -1.1176,0.4318 -4.445,0.4318 z"
         id="path2420"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:#03045e;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 155.52557,109.10998 q -0.5334,1.651 -0.9144,3.937 -0.381,2.2606 -0.381,3.175 0,0.889 0.2794,0.889 l 1.27,-0.3556 0.4572,1.27 q -0.8128,0.635 -2.0828,1.1684 -1.2446,0.508 -2.2098,0.508 -1.651,0 -2.0828,-1.4224 -2.0066,1.4224 -3.556,1.4224 -1.524,0 -2.3622,-1.1176 -0.8382,-1.1176 -0.8382,-3.2004 0,-2.8702 1.4732,-5.0546 1.4732,-2.1844 3.8862,-2.1844 1.3208,0 2.6924,0.7366 0.2032,-0.4572 0.3302,-0.6604 1.8288,0 4.0386,0.889 z m -7.6454,5.969 q 0,1.27 0.1778,1.6002 0.1778,0.3302 0.6604,0.3302 0.4826,0 0.9398,-0.381 0.1016,-2.9464 0.9652,-6.1722 -0.381,-0.2286 -0.889,-0.2286 -0.4826,0 -0.889,0.5588 -0.381,0.5588 -0.5842,1.397 -0.381,1.6002 -0.381,2.8956 z"
         id="path2414"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:#03045e;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 135.81519,119.70178 q -1.9812,0 -3.1242,-1.2446 -1.143,-1.27 -1.143,-3.556 0,-2.794 1.651,-4.7244 1.651,-1.9558 4.3434,-1.9558 l 1.143,0.1016 q 0.6096,-0.1778 1.143,-0.1778 1.27,0 1.8034,0.8636 0.5588,0.8636 0.635,2.4638 1.0668,-0.0508 2.032,-0.3302 l 0.3556,-0.1016 q 0.1778,0.1778 0.254,1.0668 l 0.0254,0.2794 q -1.143,0.5842 -2.794,0.9144 -0.5588,2.6924 -2.2098,4.5466 -1.651,1.8542 -4.1148,1.8542 z m 0.508,-4.9022 q 0,2.3622 1.1938,2.3622 0.8382,0 1.7018,-1.0668 0.889,-1.0668 1.2192,-2.5908 -2.5908,0 -2.5908,-2.4892 0,-0.4318 0.0762,-0.889 -0.254,0 -0.381,0.0762 -0.4318,0.4572 -0.8382,1.8542 -0.381,1.3716 -0.381,2.7432 z"
         id="path2402"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:#03045e;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 124.30898,119.70178 q -2.032,0 -4.064,-0.7112 -1.4732,0.5588 -3.4036,0.5588 -0.4318,0 -0.7874,-0.0508 0,-1.524 1.397,-7.5184 1.397,-5.9944 1.397,-6.7818 0,-0.7874 -0.3048,-1.397 -0.2794,-0.6096 -0.5842,-0.9144 l -0.2794,-0.2794 0.1016,-0.635 q 0.635,-0.127 2.921,-0.3556 2.3114,-0.254 3.9116,-0.254 6.1976,0 6.1976,3.9878 0,1.8542 -1.27,3.0226 -1.2446,1.1684 -3.0988,1.5748 1.7526,0.2032 2.9464,1.27 1.1938,1.0414 1.1938,2.9718 0,2.3876 -1.778,3.9624 -1.778,1.5494 -4.4958,1.5494 z m -0.8636,-8.89 q -0.4572,0 -1.016,0.0762 -0.9906,4.3434 -1.27,6.2992 0.5588,0.3302 1.524,0.3302 1.4732,0 2.2098,-1.2192 0.7366,-1.2192 0.7366,-2.7432 0,-1.5494 -0.5588,-2.1336 -0.5334,-0.6096 -1.6256,-0.6096 z m -0.3302,-1.8542 q 1.1176,0 1.7526,-0.8382 1.143,-1.4478 1.143,-3.2004 0,-1.778 -1.2192,-1.778 l -0.8382,0.1016 q -0.0254,0.9906 -1.0668,5.715 z"
         id="path2408"
         transform="translate(0)" />
    </g>
    <g
       id="g2450"
       inkscape:label="my"
       transform="translate(6.2500021e-8)">
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:#00b4d8;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 114.8602,108.32258 h 0.2032 q -0.127,0.6604 -0.4318,2.8448 -0.6858,4.9784 -1.4732,7.5184 -1.9558,6.4008 -6.2738,6.4008 -1.2954,0 -2.1082,-0.5588 -0.7874,-0.5334 -0.7874,-1.4224 0,-0.8636 0.4064,-1.4478 0.4318,-0.5588 1.2192,-0.9398 1.3462,-0.6604 3.302,-1.0922 0.2032,-0.9652 0.254,-1.2446 -1.9812,1.0668 -3.7592,1.0668 -2.4384,0 -2.4384,-2.3876 0,-0.8382 0.5588,-3.2766 0.5588,-2.4638 0.5588,-3.4036 0,-0.9398 -0.127,-1.397 2.9972,-0.635 4.6482,-0.635 0.2032,0.3048 0.2032,1.2192 0,0.889 -0.5842,3.4798 -0.5588,2.5908 -0.5588,3.048 0,0.7874 0.762,0.7874 0.4318,0 0.9906,-0.2286 0.2032,-1.2954 0.5588,-3.937 0.381,-2.667 0.5334,-3.6576 0.6604,-0.3048 1.9812,-0.508 1.3462,-0.2286 2.3622,-0.2286 z m -9.0678,14.3002 q 0,0.5842 0.762,0.5842 0.381,0 0.9906,-0.5334 0.635,-0.508 1.016,-1.524 -2.7686,0.4826 -2.7686,1.4732 z"
         id="path2396"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:#00b4d8;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 78.208009,119.54938 h -0.3048 q 0,-1.4732 1.4224,-7.7978 1.4224,-6.3246 1.4224,-6.985 0,-1.0668 -0.7874,-2.032 l -0.254,-0.3302 0.0762,-0.508 q 1.4986,-0.508 5.4864,-0.508 0.4064,0.9144 0.4318,2.159 2.9718,-2.1844 5.08,-2.1844 2.413,0 2.8702,2.0828 2.870199,-2.0828 5.003799,-2.0828 1.447802,0 2.362202,0.8128 0.9144,0.7874 0.9144,2.3114 0,1.4986 -1.1176,5.7404 -1.092202,4.2164 -1.092202,5.9944 0,0.6604 0.279402,0.6604 0.5334,0 1.2954,-0.3048 l 0.5334,1.4478 q -2.362202,1.6764 -4.673602,1.6764 -1.0922,0 -1.7526,-0.6604 -0.660399,-0.6604 -0.660399,-1.9304 0,-1.2954 1.041399,-5.588 1.0668,-4.318 1.0668,-5.2578 0,-0.9398 -0.2286,-1.2446 -0.2286,-0.3302 -0.889,-0.3302 -0.660399,0 -2.082799,0.9652 -0.1778,1.1684 -0.7874,3.7846 -1.6002,6.6802 -1.6002,9.4742 -1.2446,0.6604 -4.2926,0.6604 h -0.6858 q 0,-2.3368 1.1938,-7.3152 1.1938,-4.9784 1.1938,-5.969 0,-0.9906 -0.2286,-1.2954 -0.2032,-0.3048 -0.889,-0.3048 -0.6604,0 -2.1082,0.9906 -0.2286,1.27 -0.9398,4.2164 -1.651,6.8834 -1.651,8.9916 -1.1176,0.6604 -4.6482,0.6604 z"
         id="path2390"
         transform="translate(6.2500021e-8)" />
    </g>
  </g>
</svg>`;

// assets/icons/magnifying-glass.ts
var MagnifyingGlass = `<svg id="icon-definition_magnifying-glass" class="icon magnifying-glass" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke-width:1.00001;stroke-linecap:round;-inkscape-stroke:none"
d="m 13.933452,0.33101262 c 4.665112,0 8.484511,3.81819728 8.484511,8.48276858 0,4.6645798 -3.819397,8.4827768 -8.484511,8.4827768 -1.192569,0 -2.291872,-0.315962 -3.312255,-0.763428 -0.01293,0.01395 -0.01062,0.02239 -0.02429,0.03642 l -0.0035,0.0036 -0.0052,0.0053 -5.0265086,5.023041 c -1.1757993,1.176212 -3.1098412,1.176212 -4.2856361,0 -1.17525285,-1.176408 -1.17551045,-3.11046 0.00178,-4.285633 L 6.2973927,12.297813 C 5.7998422,11.231935 5.4489409,10.075498 5.4489418,8.8137812 5.4489453,4.1492099 9.2683445,0.33101262 13.933452,0.33101262 Z m 0,1.77671558 c -3.698211,0 -6.7077912,3.00885 -6.7077947,6.706053 -9e-7,1.2159838 0.3489754,2.3493058 0.9334695,3.3504318 L 8.6154513,12.945 7.8259926,13.387438 c -0.1727127,0.09663 -0.260868,0.155498 -0.2758768,0.17004 l -0.039905,0.0382 -4.9761929,4.976189 c -0.4938381,0.492967 -0.495224,1.279271 -0.00178,1.773242 0.4934623,0.493643 1.2797717,0.493652 1.7732439,0 l 5.021306,-5.017827 c 0.016968,-0.01741 0.077527,-0.11092 0.1787127,-0.300167 l 0.4250934,-0.794671 0.7877241,0.435508 c 0.968614,0.534854 2.054792,0.851917 3.215091,0.851917 3.698219,0 6.707794,-3.00885 6.707794,-6.7060612 0,-3.6972029 -3.00958,-6.706053 -6.707794,-6.706053 z" />
<path
style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:none;stroke-width:0.500001;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
d="m 13.933412,1.441451 c 4.060915,0 7.374068,3.3121531 7.374068,7.3722324 0,4.0600786 -3.31315,7.3722326 -7.374068,7.3722326 -1.357274,0 -2.63002,-0.371201 -3.724448,-1.015473 a 1.9197456,1.9197456 0 0 1 -0.4067369,0.623423 l -5.0263745,5.023156 a 1.9197456,1.9197456 0 0 1 -2.7154086,0 1.9197456,1.9197456 0 0 1 0.00187,-2.715407 L 7.0868452,13.078458 A 1.9197456,1.9197456 0 0 1 7.6684894,12.691916 C 6.966462,11.563897 6.5593712,10.235038 6.5593721,8.8136834 6.5593756,4.7536041 9.8725264,1.441451 13.933439,1.441451 Z m 0,1.9207539 c -3.023755,0 -5.4533082,2.4292498 -5.4533109,5.4514785 -1.8e-6,3.0222286 2.4295529,5.4514696 5.4533109,5.4514696 3.02376,0 5.45515,-2.429241 5.455149,-5.4514696 -2e-6,-3.0222287 -2.431391,-5.4514785 -5.455149,-5.4514785 z" />
<path
style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);fill-opacity:1;stroke-width:0.866683;-inkscape-stroke:none"
d="M 8.3751718,8.8139322 A 5.5588643,5.557011 0 0 0 13.934035,14.370947 5.5588643,5.557011 0 0 0 19.4929,8.8139322 5.5588643,5.557011 0 0 0 13.934035,3.2569256 5.5588643,5.557011 0 0 0 8.3751718,8.8139322 Z" />
</svg>`;

// assets/icons/plus.ts
var PlusIcon = `<svg id="icon-definition_plus" class="icon plus" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
    style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-opacity:1;-inkscape-stroke:none"
    d="M 11.406117,0.76837147 A 1.6733008,1.6733014 0 0 0 9.7322668,2.4422315 v 7.29197 h -7.29198 a 1.6733008,1.6733014 0 0 0 -1.67190999,1.6738595 1.6733008,1.6733014 0 0 0 1.67190999,1.67239 h 7.29198 v 7.29343 a 1.6733008,1.6733014 0 0 0 1.6738502,1.67241 1.6733008,1.6733014 0 0 0 1.67433,-1.67241 v -7.29343 h 7.29149 a 1.6733008,1.6733014 0 0 0 1.6724,-1.67239 1.6733008,1.6733014 0 0 0 -1.6724,-1.6738595 h -7.29149 v -7.29197 a 1.6733008,1.6733014 0 0 0 -1.67433,-1.67386003 z" />
</svg>`;

// assets/icons/profile.ts
var Profile = `<svg id="icon-definition_profile" class="icon profile" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
   style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
   d="m 11.405696,0.60086147 c -2.6349905,0 -4.7961505,2.16117003 -4.7961505,4.79616003 -1e-5,1.66616 0.86481,3.14225 2.16641,4.00292 h -0.0536 c -1.59386,0 -3.77968,1.8748995 -3.77968,5.4964695 v 1.82092 c 0,3.62158 -0.69262,5.49647 1.97372,5.49647 h 8.9799305 c 2.66634,0 1.97371,-1.87489 1.97371,-5.49647 v -1.82092 c 0,-3.62157 -2.18581,-5.4964695 -3.77968,-5.4964695 h -0.0549 c 1.30196,-0.86063 2.16702,-2.33662 2.16702,-4.00292 0,-2.635 -2.16178,-4.79618003 -4.79677,-4.79616003 z" />
</svg>`;

// assets/icons/stylus.ts
var Stylus = `<svg id="icon-definition_stylus" class="icon stylus" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
style="fill:none;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
d="m 16.233065,1.4492345 c -0.90829,-0.009 -1.65788,1.2634 -1.65788,1.2634 l 2.11112,1.28801 c 0,0 1.18609,-1.7212 0.064,-2.39811 -0.17546,-0.10554 -0.34909,-0.15148 -0.5173,-0.15311 z m -1.7013,1.66919 c -0.50228,-0.0334 -1.27888,0.67871 -1.86284,1.75374 L 6.5841146,16.074175 c -0.6674,1.22861 -0.8229,2.45172 -0.34923,2.74238 l 1.42958,0.87733 c 0.47368,0.29067 1.39247,-0.46453 2.05986,-1.69314 L 15.809145,6.7992045 c 0.66739,-1.22861 0.82337,-2.45172 0.34969,-2.74238 l -1.43004,-0.87734 c -0.0592,-0.0363 -0.1253,-0.0563 -0.19704,-0.061 z M 5.7750146,18.929275 c 0,0 -0.39677,2.1443 -0.064,2.39859 0.3328,0.25431 2.17517,-1.1103 2.17517,-1.1103 z" />
<path
style="fill:var(--icon-primary-color,InfoText);stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
d="m 14.728835,3.1792945 1.42989,0.87744 c 0.47368,0.29067 0.31773,1.51377 -0.34966,2.74238 L 9.7242546,18.000725 c -0.66739,1.22861 -1.58602,1.9837 -2.0597,1.69303 l -1.42989,-0.87743 c -0.47367,-0.29067 -0.31773,-1.51377 0.34966,-2.74238 L 12.669135,4.8723345 c 0.66739,-1.22861 1.58602,-1.9837 2.0597,-1.69304 z" />
<path
style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
d="m 5.7750446,18.929435 2.11111,1.28791 c 0,0 -1.84229,1.36472 -2.17511,1.11043 -0.33281,-0.25429 0.064,-2.39834 0.064,-2.39834 z" />
<path
style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
d="m 16.686185,4.0005645 -2.11109,-1.28793 c 0,0 1.05296,-1.78735 2.17509,-1.11043 1.12213,0.67691 -0.064,2.39836 -0.064,2.39836 z" />
</svg>`;

// assets/icons/task.ts
var Task = `<svg id="icon-definition_task" viewBox="0 0 39.072864 33.103016" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
  <g
     transform="translate(-32.699748,-93.890704)"
     id="g2214">
    <rect
       style="fill:var(--icon-secondary-color,InfoBackground);fill-opacity:1;stroke:var(--icon-primary-color,InfoText);stroke-width:3.29545;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="35.777416"
       height="29.807568"
       x="34.347473"
       y="95.538429"
       ry="0.37767497"
       id="rect2206" />
    <rect
       style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="26"
       height="15"
       x="41"
       y="103"
       ry="0.37767494"
       id="rect2208" />
    <rect
       style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="3"
       height="15"
       x="37.035774"
       y="103"
       ry="0.37767494"
       id="rect2212" />
  </g>
</svg>`;

// assets/icons/taskboard.ts
var TaskBoard = `<svg id="icon-definition_task-board" viewBox="0 0 39.072864 33.103016" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
  <g
     transform="translate(-32.699748,-93.890704)"
     id="g2214">
    <rect
       style="fill:var(--icon-secondary-color,InfoBackground);fill-opacity:1;stroke:var(--icon-primary-color,InfoText);stroke-width:3.29545;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="35.777416"
       height="29.807568"
       x="34.347473"
       y="95.538429"
       ry="0.37767497"
       id="rect2206" />
    <rect
       style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="9.2341394"
       height="23.481096"
       x="47.61911"
       y="98.701668"
       ry="0.37767494"
       id="rect2208" />
    <rect
       style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="9.2341394"
       height="23.481096"
       x="58.202446"
       y="98.701668"
       ry="0.37767494"
       id="rect2210" />
    <rect
       style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="9.2341394"
       height="23.481096"
       x="37.035774"
       y="98.701668"
       ry="0.37767494"
       id="rect2212" />
  </g>
</svg>`;

// assets/icons/tasklist.ts
var TaskList = `<svg id="icon-definition_task-list" viewBox="0 0 39.072864 33.103016" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
  <g
     transform="translate(-32.699748,-93.890704)"
     id="g2214">
    <rect
       style="fill:var(--icon-secondary-color,InfoBackground);fill-opacity:1;stroke:var(--icon-primary-color,InfoText);stroke-width:3.29545;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="35.777416"
       height="29.807568"
       x="34.347473"
       y="95.538429"
       ry="0.37767497"
       id="rect2206" />
    <rect
       style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="22"
       height="19.481096"
       x="41.3"
       y="102.701668"
       ry="0.37767494"
       id="rect2208" />
    <rect
       style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="22"
       height="3"
       x="41.3"
       y="98.701668"
       ry="0.37767494"
       id="rect2210" />
  </g>
</svg>`;

// assets/icons/trash.ts
var Trash = `<svg id="icon-definition_trash" class="icon trash" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <path
        style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke-linecap:round;-inkscape-stroke:none"
        d="m 3.8706918,3.974857 c -0.46005,0 -0.85377,0.23344 -0.85377,0.50621 v 2.18219 c 0,0.27276 0.39372,0.50622 0.85377,0.50622 h 0.41234 l 1.36274,13.51718 c 0.0262,0.2601 0.0958,0.51228 0.26082,0.7504 0.16501,0.23813 0.48899,0.47242 0.86315,0.47242 h 9.2745802 c 0.37414,0 0.69671,-0.23428 0.86175,-0.47242 0.16503,-0.23813 0.23601,-0.49028 0.26222,-0.7504 l 1.36321,-13.51718 h 0.41234 c 0.46005,0 0.85189,-0.23346 0.85189,-0.50622 v -2.18219 c 0,-0.27277 -0.39184,-0.50621 -0.85189,-0.50621 z" />
        <path
        style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke-linecap:round;-inkscape-stroke:none"
        d="m 7.9527918,0.40438697 c -0.89662,5.9e-4 -1.63218,0.73828003 -1.63246,1.63504003 v 1.43557 h -2.44946 c -0.3146,0 -0.60654,0.0732 -0.85525,0.22066 -0.24871,0.14746 -0.49816,0.40802 -0.49816,0.78496 v 2.18178 c 0,0.37695 0.24945,0.63958 0.49816,0.78704 0.24871,0.14747 0.54065,0.22065 0.85525,0.22065 h -0.0408 l 1.31827,13.06639 c 0.0318,0.31589 0.12611,0.66458 0.34778,0.98444 0.25207,0.36377 0.69043,0.68936 1.27331,0.68936 h 9.2754002 c 0.58286,0 1.02043,-0.32671 1.27176,-0.68936 0.22092,-0.31878 0.31732,-0.66679 0.34933,-0.98444 l 1.31827,-13.06639 h -0.0408 c 0.31461,0 0.60733,-0.075 0.85577,-0.22272 0.24844,-0.14775 0.49609,-0.40917 0.49609,-0.78497 v -2.18178 c 0,-0.37579 -0.24765,-0.63721 -0.49609,-0.78496 -0.24844,-0.14775 -0.54117,-0.22066 -0.85577,-0.22066 h -2.44894 v -1.43557 c -2.8e-4,-0.89694 -0.73777,-1.63535003 -1.63504,-1.63504003 H 7.9549218 a 0.50004949,0.50004949 0 0 0 -0.002,0 z m 0.003,0.99994003 h 6.9039802 c 0.34488,-1.2e-4 0.63411,0.28875 0.6351,0.6351 v 1.43557 h -1.26969 v -0.29921 a 0.50004949,0.50004949 0 0 0 -0.50023,-0.49971 H 9.0900918 a 0.50004949,0.50004949 0 0 0 -0.49971,0.49971 v 0.29921 h -1.26969 v -1.4335 -0.002 c 0.001,-0.34578 0.29035,-0.63498 0.6351,-0.6351 z m -4.0845,3.07061 H 18.943752 c 0.14546,0 0.28116,0.0429 0.34365,0.0801 0.009,0.006 0.004,0.001 0.008,0.005 v 2.02365 c -0.005,0.003 0.001,-9.6e-4 -0.008,0.005 -0.0625,0.0372 -0.1982,0.0822 -0.34365,0.0822 h -0.86299 l -1.41025,13.96658 c -0.0204,0.2026 -0.0666,0.35826 -0.1757,0.51574 -0.0787,0.11363 -0.28418,0.25786 -0.44959,0.25786 H 6.7698218 c -0.16543,0 -0.37319,-0.14537 -0.45114,-0.25786 -0.10837,-0.15638 -0.15512,-0.31143 -0.1757,-0.51574 l -1.40818,-13.96658 h -0.86351 c -0.14545,0 -0.28255,-0.0448 -0.34572,-0.0822 -0.009,-0.005 -0.003,-0.001 -0.008,-0.005 v -2.02365 c 0.005,-0.003 -10e-4,6.9e-4 0.008,-0.005 0.0632,-0.0375 0.20026,-0.0801 0.34572,-0.0801 z" />
        <path
        style="fill:none;fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
        d="m 11.383062,9.716277 v 8.72176 z m -3.6384102,0.48004 0.54179,7.84994 z m 7.2773902,0 -0.54179,7.84994 z" />
        <path
        style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none"
        d="m 8.0273518,1.322497 a 0.750075,0.750075 0 0 0 -0.75,0.75 v 2.33594 a 0.75,0.75 0 0 0 0.75,0.75 0.75,0.75 0 0 0 0.75,-0.75 v -1.58594 h 5.2597602 v 1.5293 a 0.75,0.75 0 0 0 0.75,0.75 0.75,0.75 0 0 0 0.75,-0.75 v -2.2793 a 0.750075,0.750075 0 0 0 -0.75,-0.75 z" />
    </svg>`;

// assets/icons/undo-redo.ts
var UndoRedo = `<svg id="icon-definition_undo-redo" class="icon undo-redo" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
   style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,CanvasText);fill-opacity:1;stroke-width:0.999999;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
   d="M 8.7359009 1.1063924 C 8.3768905 1.0950243 8.0017196 1.1736712 7.641394 1.3523722 L 1.6107544 6.1205566 L 1.5916341 6.1386434 L 1.53479 6.1939372 C 1.0620233 6.6537208 0.70744486 7.6004515 1.0769368 8.152474 L 5.3030355 14.40894 C 6.1798306 15.219356 7.5994445 15.083541 8.4749349 14.106116 C 9.2135837 13.277519 9.3398045 12.086041 8.7787923 11.23549 L 11.334192 11.410673 C 14.129266 11.815808 17.330477 13.067707 18.931144 18.826241 C 19.313756 19.953163 19.735424 21.309718 20.245793 22.173324 C 20.976132 22.497497 21.420713 20.679238 21.478792 18.791101 C 21.506716 14.251463 18.262689 8.6142076 13.845667 6.7716797 C 13.291103 6.5403477 11.805521 5.8978235 10.30118 5.3355916 L 9.7994019 5.1107992 C 10.609379 4.4184442 10.916638 3.2966427 10.55026 2.3703979 C 10.238366 1.5905459 9.5257236 1.1314023 8.7359009 1.1063924 z " />
</svg>`;

// assets/icons/restore.ts
var Restore = `<svg id="icon-definition_restore" class="icon restore" viewBox="0 0 22.812714 22.814663" version="1.1">
<path
   style="color:#000000;display:inline;fill:var(--icon-primary-color,CanvasText);stroke:none;stroke-width:0.999996;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
   d="M 11.407056,2.2096842 C 10.601147,2.2062787 9.5769182,2.3504531 8.9410559,2.5507485 7.3655671,3.0382019 5.7755868,3.6890402 4.6054036,4.8958252 4.0832449,5.1345101 3.3963233,6.1784636 3.0597616,6.0084188 2.8410621,5.2501271 1.6783304,5.0535512 1.3182675,5.80275 1.0360676,6.3840324 1.3729726,7.0107804 1.4206093,7.6133474 1.5714857,8.3606317 1.6560017,9.1255313 1.8479506,9.8619335 2.0554434,10.462171 2.6923385,10.326838 3.1690454,10.240923 4.0790727,10.098459 5.0096001,10.027659 5.9066157,9.8397099 6.8039333,9.3949249 6.4554656,7.863657 5.466336,7.8238087 5.2821792,7.5654268 6.1923105,6.7375076 6.5066646,6.2891705 7.3075254,5.2889634 8.4575281,4.6415111 9.7026133,4.3765775 10.473926,4.3250017 10.312172,3.6722223 11.142298,3.8359187 14.530568,3.653488 17.823867,6.0523018 18.695479,9.3300885 19.63212,12.454048 18.269935,16.074973 15.493333,17.791314 12.686533,19.654342 8.6650864,19.287905 6.2404746,16.951947 5.6240732,16.377522 5.1041212,15.699794 4.70979,14.955161 c -0.5961738,0 -1.1923475,0 -1.7885213,0 1.4208006,3.50921 5.1747179,5.889303 8.9584753,5.637794 3.68308,-0.139071 7.097784,-2.740152 8.240293,-6.239104 1.17328,-3.340505 0.172166,-7.2988852 -2.450599,-9.6779299 -1.678213,-1.5746928 -3.960006,-2.477287 -6.262382,-2.4662369 z" />
<path
   style="color:#000000;display:inline;fill:var(--icon-primary-color,CanvasText);stroke-width:0.999996;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
   d="m 11.407056,1.4195516 c -2.6651249,0 -5.0868942,1.0553074 -6.8802005,2.7646891 -0.01738,0.0138 -0.035453,0.026272 -0.05271,0.040308 C 3.9319613,4.652239 3.4560709,5.159977 3.0396077,5.709729 2.8080619,5.3516396 2.5207525,4.865411 2.0164144,4.959904 1.230173,5.0131862 0.64759721,5.8806433 0.87539876,6.6290527 1.0727845,7.7032888 1.2483821,8.7829196 1.4593424,9.8536621 1.6004331,10.373499 2.1370893,10.823132 2.6907918,10.672734 3.7749207,10.518408 4.863747,10.388216 5.9448568,10.218498 6.7084856,9.9449407 7.039327,8.8960717 6.5980469,8.2274048 6.3834766,7.8990229 5.5668194,8.0088099 5.8931803,7.477063 6.3304505,6.5903713 7.1341687,5.9571801 7.9070109,5.3712484 8.5534559,4.9322054 9.2282737,4.44339 10.019543,4.3325521 10.37185,4.1576995 11.101685,4.2101887 10.876855,3.6106323 10.513569,3.51126 9.9171078,3.7649557 9.4903768,3.8860677 7.6007986,4.5759203 6.117465,6.0525145 4.9754069,7.6651652 4.7511996,8.4029365 5.7911347,8.0027498 5.9670776,8.5410807 6.2148051,8.9185823 5.9931139,9.5695858 5.4988892,9.5591064 L 2.4334432,9.9751017 C 2.0688988,9.7961797 2.1306676,9.3464926 2.0396688,9.0123698 L 1.55236,6.3019409 c -0.03249,-0.4532967 0.5188865,-0.819145 0.8976197,-0.513147 0.1424252,0.111963 0.248223,0.3509353 0.3694864,0.530717 L 3.0117349,6.669273 c 1.749318,-2.3314321 4.8748444,-4.1355775 8.3953211,-4.1355775 4.897821,0 8.872843,3.9750221 8.872843,8.8728435 0,4.897821 -3.975119,8.874394 -8.872843,8.874394 -3.6360426,0 -6.76281,-2.19253 -8.133354,-5.325773 H 2.0732585 c 1.4356802,3.758946 5.0790963,6.439916 9.3337975,6.439916 5.50397,0 9.986987,-4.484663 9.986987,-9.988537 0,-5.5038829 -4.483105,-9.9869874 -9.986987,-9.9869874 z" />
<path
   style="color:#000000;fill:var(--icon-primary-color,CanvasText);stroke:var(--icon-secondary-color,canvas);fill-opacity:1;stroke-width:0.999996;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
   d="m 11.104501,4.0336004 a 0.63168166,0.63168166 0 0 0 -0.634972,0.6283833 l -0.04765,7.3778483 a 0.63174483,0.63174483 0 0 0 0.787954,0.615233 l 4.911986,-1.260079 A 0.63168166,0.63168166 0 0 0 16.57748,10.626771 0.63168166,0.63168166 0 0 0 15.807618,10.17111 l -4.11909,1.056096 0.04439,-6.5569954 a 0.63168166,0.63168166 0 0 0 -0.62839,-0.6366102 z" />
<path
   style="color:#000000;fill:var(--icon-primary-color,CanvasText);fill-opacity:1;stroke:none;stroke-width:0.999996;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
   d="M 11.109857,4.3736972 A 0.60741073,0.60741073 0 0 0 10.499284,4.977937 l -0.0458,7.094371 a 0.60747147,0.60747147 0 0 0 0.75768,0.591591 l 4.723251,-1.211659 a 0.60741073,0.60741073 0 0 0 0.43815,-0.738698 0.60741073,0.60741073 0 0 0 -0.740275,-0.43816 l -3.960823,1.015525 0.04272,-6.3050513 A 0.60741073,0.60741073 0 0 0 11.109936,4.3736972 Z" />
</svg>`;

// assets/icons/copy.ts
var Copy = `<svg id="icon-definition_copy" class="icon copy" viewBox="0 0 22.812714 26.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<rect
   style="fill:var(--icon-primary-color,CanvasText);stroke:var(--icon-secondary-color,canvas);fill-opacity:1;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
   width="13.417392"
   height="18.483608"
   x="3.3747442"
   y="5.2238607"
   rx="0.35822684"
   ry="0.41754472" />
<rect
   style="fill:var(--icon-primary-color,CanvasText);stroke:var(--icon-secondary-color,canvas);fill-opacity:1;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
   width="13.417392"
   height="18.483608"
   x="8.0205779"
   y="1.1071939"
   rx="0.35822684"
   ry="0.41754472" />
</svg>`;

// assets/icons/icons.asset.ts
var Icons = {
  ["LogoMark" /* LogoMark */]: LogoMark,
  ["LogoType" /* LogoType */]: LogoType,
  ["Logo" /* Logo */]: Logo,
  ["Gear" /* Gear */]: Gear,
  ["MagnifyingGlass" /* MagnifyingGlass */]: MagnifyingGlass,
  ["Profile" /* Profile */]: Profile,
  ["Category" /* Category */]: Category,
  ["Stylus" /* Stylus */]: Stylus,
  ["Export" /* Export */]: Export,
  ["Import" /* Import */]: Import,
  ["PlusIcon" /* PlusIcon */]: PlusIcon,
  ["CancelCross" /* CancelCross */]: CancelCross,
  ["CloseCross" /* CloseCross */]: CloseCross,
  ["Image" /* Image */]: Image,
  ["Color" /* Color */]: Color,
  ["Task" /* Task */]: Task,
  ["TaskList" /* TaskList */]: TaskList,
  ["TaskBoard" /* TaskBoard */]: TaskBoard,
  ["Trash" /* Trash */]: Trash,
  ["File" /* File */]: File2,
  ["ConfirmCheck" /* ConfirmCheck */]: ConfirmCheck,
  ["Clock" /* Clock */]: Clock,
  ["Info" /* Info */]: Info,
  ["UndoRedo" /* UndoRedo */]: UndoRedo,
  ["Restore" /* Restore */]: Restore,
  ["Copy" /* Copy */]: Copy
};
function defineIcons(...icons) {
  return `<div id="icon-definitions" style="display: none;">
        ${(icons.length == 0 ? Object.values(Icons) : Object.entries(Icons).filter(([key, value]) => icons.indexOf(key) > -1)).map(([key, value]) => value).reduce(
    (accumulatedValues, value) => `${accumulatedValues}
${value}`
  )}
    </div>`;
}

// components/import-manager/import-manager.component.css?raw
var import_manager_component_default = ":host { display: contents; }\n\n#header\n{\n    display: flex;\n    gap: .5em;\n    padding: .5em;\n}\n\nimport-manager .value\n{\n    display: flex;\n    align-items: center;\n}\n\nimport-manager .old\n{\n    text-decoration: line-through;\n    opacity: .8;\n    padding-inline: .5em;\n    display: inline-block;\n    width: 100px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\nimport-manager .value\n{\n    max-width: 500px;\n    overflow: hidden;\n    word-break: break-word;\n}\nimport-manager .value:has(.display)\n{\n    display: flex;\n    flex-direction: column;\n}\nimport-manager .value .view-link\n{\n    align-self: flex-end;\n}\n\nimport-manager .removed\n{\n    text-decoration: line-through;\n}\n\nimport-manager .value img.preview\n{\n    max-height: 200px;\n}\n\n#fieldset\n{\n    overflow: hidden;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n#preview\n{\n    overflow: auto;\n}\n@media (max-width: 665px) \n{\n    #preview\n    {\n        --indent: 5px;\n        --property-name-width: 75px;\n    }\n    #preview .property .name\n    {\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    #preview .property .value\n    {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        word-break: break-all;\n    }\n}";

// components/import-manager/import-manager.component.html?raw
var import_manager_component_default2 = '\n<header id="header">\n    <svg id="icon" >\n        <use href="#icon-definition_import"></use>\n    </svg>\n    <span id="title">Import</span>\n</header>\n<div id="content">\n    <fieldset id="fieldset">\n        <legend id="legend">Board Data</legend>\n        <p id="description">The following Taskboard, Tasklists, and Tasks will be imported with their settings. Make final adjustments and select "Import" to complete the import.</p>\n        <record-tree id="preview" removed-class parent-name="Board"></record-tree>\n    </fieldset>\n</div>\n<footer id="footer">\n    <form id="actions" method="dialog">\n        <button type="submit" id="cancel" id="import-cancel" title="Cancel import">Cancel</button>\n        <button type="submit" id="ok" id="import-ok" title="Confirm import">Import</button>\n    </form>\n</footer>\n</dialog>\n\n';

// node_modules/.pnpm/record-setter@1.0.6/node_modules/record-setter/dist/record-setter.mjs
var RecordBase = class {
  /** a key to identify this record */
  id = "";
};
var DataRecord = class extends RecordBase {
  deletedTimestamp;
};
var RecordStore = class {
  #database;
  #storeName;
  #tables;
  #useSoftDelete = false;
  #softDeleteTimestampPropertyName = "deletedTimestamp";
  /**
   * Manages `Record`-type objects of a single type, `T`, in the target `IDBDatabase` connection.
   * @example new RecordStore<ParentRecord>(database, 'parents', ['parents', 'children', 'grandchildren'], { useSoftDelete: true }); 
   * @template T an object that extends `RecordBase`, to be managed by the store.
   * @param database and open `IDBDatabase` connection
   * @param storeName the name to reference this store by
   * @param tables the names of all tables that this store will share transactions with.  
   * Transactions are shared in `Promise` scopes, so most `async`/`await` calls that will
   * unite record data from different tables require shared scopes.
   * @param options target `RecordStoreOptions` values
   */
  constructor(database, storeName, tables, options) {
    this.#database = database;
    this.#storeName = storeName;
    this.#tables = tables;
    if (options != null) {
      this.#useSoftDelete = options.useSoftDelete || this.#useSoftDelete;
      this.#softDeleteTimestampPropertyName = options.softDeleteTimestampPropertyName || this.#softDeleteTimestampPropertyName;
    }
  }
  /**
   * Open a transaction in the database for handling this store's `Record`s
   * @param transactionMode "readonly" | "readwrite" | "versionchange"
   * @returns IDBTransaction
   */
  openTransaction(transactionMode = "readwrite") {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    return this.#database.transaction(this.#tables, transactionMode);
  }
  /**
   * Add a record to the database
   * @template T the store's `Record` type
   * @param record the record to add
   * @returns `boolean` to indicate a successful add
   */
  async addRecord(record) {
    await this.updateRecord(record);
    return true;
  }
  /**
   * Add multiple records to the database
   * @template T the store's `Record` type
   * @param records the records to add
   * @returns `boolean[]` to indicate a successful adds, by index
   */
  async addRecords(records) {
    return (await this.updateRecords(records)).map((item) => item != null);
  }
  /**
   * Get a record from the database, by its id
   * @template T the store's `Record` type
   * @param id the id of the record to retrieve
   * @returns the `Record` or `null`
   */
  getRecord(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.openTransaction("readonly");
      const objectStore = transaction.objectStore(this.#storeName);
      const request = objectStore.get(id);
      request.onsuccess = (event) => {
        const value = event.target.result;
        resolve(value);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
   * Get records from the database, by their ids
   * @template T the store's `Record` type
   * @param ids the ids of the records to retrieve
   * @param sortKey a property of the records to use as key for sorting them by
   * @returns an array of the requested `Record`s
   */
  async getRecords(ids, sortKey) {
    const transaction = this.openTransaction("readonly");
    const promises = [];
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      promises.push(new Promise((resolve, reject) => {
        const objectStore = transaction.objectStore(this.#storeName);
        const request = objectStore.get(id);
        request.onsuccess = (event) => {
          const value = event.target.result;
          resolve(value);
        };
        request.onerror = (event) => {
          reject(event);
        };
      }));
    }
    let records = await Promise.all(promises);
    if (sortKey != null) {
      records = records.sort((a, b) => {
        return a[sortKey] - b[sortKey];
      });
    }
    return records;
  }
  /**
   * Get all records of this store's type
   * @template T the store's `Record` type
   * @param sortKey a property of the records to use as key for sorting them by
   * @returns an array of all `Record`s that this store manages.
   */
  async getAllRecords(sortKey) {
    return new Promise((resolve, reject) => {
      const transaction = this.openTransaction("readonly");
      const objectStore = transaction.objectStore(this.#storeName);
      const request = objectStore.getAll();
      request.onsuccess = (event) => {
        let value = event.target.result;
        if (sortKey != null) {
          value = value.sort((a, b) => {
            return a[sortKey] - b[sortKey];
          });
        }
        resolve(value);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
   * Find all `Record`s of this store's type that match the equality predicate
   * @example store.query({ name: 'User Name' }, 'name');
   * @template T the store's `Record` type
   * @param equalityPredicate an object with properties that match the names of properties  
   to match on the `Record`s managed by this store, and values  
   that match the values of `Record`s being requested.  
   ***Query properties must be indexed to be able to be queried.**
   * @param sortKey a property of the records to use as key for sorting them by
   * @returns an array of the `Record`s that match the equality predicate
   */
  async query(equalityPredicate, sortKey) {
    return new Promise((resolve, reject) => {
      const transaction = this.openTransaction("readonly");
      const objectStore = transaction.objectStore(this.#storeName);
      const predicateKeys = Object.keys(equalityPredicate);
      const predicateValues = Object.values(equalityPredicate);
      const hasMultiplePredicates = predicateKeys.length > 1;
      let cursorParent = null;
      if (hasMultiplePredicates) {
        try {
          const indexKey = predicateKeys.join("+");
          cursorParent = objectStore.index(indexKey);
        } catch (_) {
        }
      }
      const hasCombinedPredicate = cursorParent != null;
      if (cursorParent == null) {
        const predicateKey = predicateKeys[0];
        cursorParent = predicateKey == "id" ? objectStore : objectStore.index(predicateKey);
      }
      const predicateValue = predicateValues == null ? null : hasCombinedPredicate ? predicateValues : predicateValues[0];
      let request;
      let skipFirstPredicate = false;
      if (!hasCombinedPredicate && Array.isArray(predicateValue)) {
        request = cursorParent.openCursor();
      } else {
        skipFirstPredicate = true;
        request = cursorParent.openCursor(IDBKeyRange.only(predicateValue));
      }
      const results = [];
      request.onsuccess = (event) => {
        const currentCursor = event.target.result;
        if (currentCursor == null) {
          let values = results;
          if (sortKey != null) {
            values = results.toSorted((a, b) => a[sortKey] - b[sortKey]);
          }
          resolve(values);
          return;
        }
        let foundDifference = false;
        for (let i = skipFirstPredicate == true ? 1 : 0; i < predicateKeys.length; i++) {
          const cursorValue = currentCursor.value[predicateKeys[i]];
          const currentPredicateValues = predicateValues[i];
          if (Array.isArray(currentPredicateValues)) {
            let foundMatch = false;
            for (let j = 0; j < currentPredicateValues.length; j++) {
              const matchValue = currentPredicateValues[j];
              if (cursorValue == matchValue) {
                foundMatch = true;
              }
            }
            if (foundMatch == false) {
              foundDifference = true;
              break;
            }
          } else if (currentCursor.value[predicateKeys[i]] != currentPredicateValues) {
            foundDifference = true;
            break;
          }
        }
        if (!foundDifference) {
          results.push(currentCursor.value);
        }
        currentCursor.continue();
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
  * Update the values of a `Record` managed by this store
  * @template T the store's `Record` type
  * @param record the updated `Record` to store in the database
  * @returns the updated `Record` from the database
  */
  updateRecord(record) {
    return new Promise((resolve, reject) => {
      const transaction = this.openTransaction();
      const objectStore = transaction.objectStore(this.#storeName);
      const request = objectStore.put(record);
      request.onsuccess = async (event) => {
        const updatedRecordId = event.target.result;
        const getRequest = objectStore.get(updatedRecordId);
        getRequest.onerror = (event2) => {
          reject(event2);
        };
        getRequest.onsuccess = (event2) => {
          const updatedRecord = event2.target.result;
          resolve(updatedRecord);
        };
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
  * Update the values of a `Record` managed by this store
  * @template T the store's `Record` type
  * @param records the updated `Record`s to store in the database
  * @returns the updated `Record`s from the database
  */
  async updateRecords(records) {
    const transaction = this.openTransaction();
    const promises = [];
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      promises.push(new Promise((resolve, reject) => {
        const objectStore = transaction.objectStore(this.#storeName);
        const request = objectStore.put(record);
        request.onsuccess = (event) => {
          const value = event.target.result;
          resolve(value);
        };
        request.onerror = (event) => {
          reject(event);
        };
      }));
    }
    const results = await Promise.all(promises);
    const updatedRecords = await this.getRecords(results);
    return updatedRecords;
  }
  /**
  * Remove a `Record` managed by this store.  
  * If this store has been configured to "soft delete" records, this function will set the 
  * configured `deletedTimestamp` property to the runtime value of `Date.now()`
  * @param id the id of the `Record` to remove
  * @param overrideSoftDelete force this function to remove the record from the store, rather than allowing it to set the `deletedTimestamp` property 
  * @returns a `boolean` to indicate success
  */
  removeRecord(id, overrideSoftDelete = false) {
    if (!overrideSoftDelete && this.#useSoftDelete) {
      return this.setIsDeletedSingle(id, true);
    }
    return new Promise((resolve, reject) => {
      const transaction = this.openTransaction();
      const objectStore = transaction.objectStore(this.#storeName);
      const request = objectStore.delete(id);
      request.onsuccess = (event) => {
        const value = event.target.result;
        resolve(value);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
  * Remove `Record`s managed by this store.  
  * If this store has been configured to "soft delete" records, this function will set the 
  * configured `deletedTimestamp` properties to the runtime value of `Date.now()`
   * @param ids the id of the `Record`s to remove
   * @param overrideSoftDelete force this function to remove the records from the store, rather than allowing it to set their `deletedTimestamp` properties 
   * @returns an array of `boolean` values to indicate success
   */
  removeRecords(ids, overrideSoftDelete = false) {
    if (!overrideSoftDelete && this.#useSoftDelete) {
      return this.setIsDeletedMultiple(ids, true);
    }
    return new Promise((resolve, reject) => {
      const transaction = this.openTransaction();
      const objectStore = transaction.objectStore(this.#storeName);
      const results = [];
      const removeRecord = (index) => {
        if (index > ids.length - 1) {
          resolve(results);
          return;
        }
        const request = objectStore.delete(ids[index]);
        request.onsuccess = () => {
          results.push(true);
          removeRecord(index + 1);
        };
      };
      removeRecord(0);
      transaction.onabort = function(event) {
        console.log("Transaction Aborted");
        reject(event);
      };
      transaction.oncomplete = function(event) {
        const value = event.target.result;
        resolve(value);
      };
    });
  }
  /**
   * Restore a 'Record` that has been removed using the "soft delete" method.
   * @param id the id of the `Record` to restore
   * @returns a `boolean` to indicate success
   */
  restoreRecord = (id) => this.setIsDeletedSingle(id, false);
  /**
   * Restore 'Record`s that have been removed using the "soft delete" method.
   * @param ids the ids of the `Record`s to restore
   * @returns an array of `boolean` values to indicate success
   */
  restoreRecords = (ids) => this.setIsDeletedMultiple(ids, false);
  /**
   * Set the `deletedTimestamp` property of an `IRestorable` record.
   * @param id the id of the `Record` to update
   * @param value determines whether to set or delete the property. To set the property, this value should be `true`. To delete the property, this value should be `false`.
   * @returns a `boolean` to indicate success
   */
  async setIsDeletedSingle(id, value) {
    const target = await this.getRecord(id);
    target[this.#softDeleteTimestampPropertyName] = value == true ? Date.now() : void 0;
    await this.updateRecord(target);
    return true;
  }
  /**
   * Set the `deletedTimestamp` properties of multpile `IRestorable` records to the same value.
   * @param ids the ids of the `Record`s to update
   * @param value determines whether to set or delete the property. To set the property, this value should be `true`. To delete the property, this value should be `false`.
   * @returns an array of `boolean` values to indicate success
   */
  async setIsDeletedMultiple(ids, value) {
    const targets = await this.getRecords(ids);
    for (let i = 0; i < targets.length; i++) {
      targets[i][this.#softDeleteTimestampPropertyName] = value == true ? Date.now() : void 0;
    }
    await this.updateRecords(targets);
    return new Array().fill(true, 0, targets.length - 1);
  }
  /**
   * Remove all records managed by this store
   * @returns a `boolean` to indicate success
   */
  clear() {
    return new Promise((resolve, reject) => {
      const transaction = this.openTransaction();
      const objectStore = transaction.objectStore(this.#storeName);
      const request = objectStore.clear();
      request.onsuccess = (event) => {
        const value = event.target.result;
        resolve(value);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
};
var RecordSetter = class _RecordSetter {
  #isOpen = false;
  #isInitialized = false;
  #database;
  #keyValueTableName = "keyValue";
  /** A map of the `RecordStore`s managed by this `RecordSetter` instance */
  stores = /* @__PURE__ */ new Map();
  //#region Database - Create, open, update, delete database
  /**
   * Create and then await and validate opening a `RecordSetter` instance
   * @param options target `RecordSetterOptions` values
   * @returns a validated `RecordSetter` instance
   */
  static async activate(options) {
    const instance = new _RecordSetter();
    const opened = await instance.open(options);
    if (opened == false) {
      throw new Error("An error occurred opening the database.");
    }
    return instance;
  }
  /**
   * Open the `RecordSetter` instance's database and initialize its functionality
   * @param options target `RecordSetterOptions` values
   * @returns a `boolean` to indicate success
   */
  async open(options) {
    await this.#openDatabase(options);
    return this.#isOpen && this.#isInitialized;
  }
  /**
   * Opens an instance of an `IDBDatabase` database, and registers for upgrade events.  
   * Listens for `onupgradeneeded` to create an `IDBDatabase` instance if it does not exist, and upgrade the instance if it does.
   * @param options target `RecordSetterOptions` values
   * @returns an awaitable `Promise`
   */
  async #openDatabase(options) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(options.name, options.version);
      request.onsuccess = (event) => {
        const dbEvent = event.target;
        this.#database = dbEvent.result;
        this.#isOpen = true;
        this.#isInitialized = true;
        resolve();
      };
      request.onupgradeneeded = async (event) => {
        const dbEvent = event.target;
        this.#database = dbEvent.result;
        await this.#createDatabase(options);
        this.#isInitialized = true;
        this.#isOpen = true;
        resolve();
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
   * Create the database instance's object stores
   * @param options target `RecordSetterOptions` values
   * @returns an awaitable `Promise`
   */
  async #createDatabase(options) {
    if (this.#isInitialized == true) {
      return;
    }
    const storePromises = [];
    for (const [tableName, columnsKey] of Object.entries(options.schema)) {
      const indexesArray = columnsKey.split(",").map((item) => item.trim());
      storePromises.push(this.#createStorePromise(tableName, indexesArray));
    }
    if (Object.keys(options.schema).indexOf(options.keyValueTableName) == -1) {
      storePromises.push(new Promise((resolve, reject) => {
        this.#keyValueTableName = options.keyValueTableName ?? this.#keyValueTableName;
        const objectStore = this.#database.createObjectStore(this.#keyValueTableName, { keyPath: "key" });
        objectStore.transaction.oncomplete = (_event) => {
          resolve();
        };
        objectStore.transaction.onerror = (event) => {
          reject(event);
        };
      }));
    }
    return Promise.all(storePromises);
  }
  /**
   * Establishes a store and its indexes
   * @param name the name of the `IDBObjectStore` to create
   * @param indexesArray the indexes to add to this `IDBObjectStore`
   */
  async #createStorePromise(name, indexesArray) {
    const indexDefinitionsArray = new Array();
    for (let j = 0; j < indexesArray.length; j++) {
      const key = indexesArray[j];
      let name2 = key;
      let keyPath = key;
      let unique = false;
      if (key.startsWith("!")) {
        name2 = key.substring(1);
        unique = true;
      } else if (key.startsWith("[") && key.endsWith("]")) {
        name2 = key.substring(1, key.length - 1);
        const compositeArray = name2.split("+");
        keyPath = compositeArray;
      }
      indexDefinitionsArray.push({ name: name2, keyPath, unique });
    }
    const indexPromises = [];
    const objectStore = this.#database.createObjectStore(name, { keyPath: indexDefinitionsArray[0].keyPath });
    for (let i = 1; i < indexDefinitionsArray.length; i++) {
      indexPromises.push(new Promise((resolve, reject) => {
        const columnDefinition = indexDefinitionsArray[i];
        objectStore.createIndex(columnDefinition.name, columnDefinition.keyPath, { unique: columnDefinition.unique, multiEntry: !Array.isArray(columnDefinition.keyPath) });
        if (Array.isArray(columnDefinition.keyPath)) {
          for (let j = 0; j < columnDefinition.keyPath.length; j++) {
            const isUnique = columnDefinition.keyPath[j].startsWith("!") ? true : false;
            const pathName = isUnique ? columnDefinition.keyPath[j].substring(1) : columnDefinition.keyPath[j];
            objectStore.createIndex(pathName, pathName, { unique: isUnique, multiEntry: true });
          }
        }
        objectStore.transaction.oncomplete = (_event) => {
          resolve();
        };
        objectStore.transaction.onerror = (event) => {
          reject(event);
        };
      }));
    }
    await Promise.all(indexPromises);
  }
  /**
   * Close the database connection and desconstruct the instance
   * @returns a `boolean` to indicate success
   */
  async close() {
    if (this.#database == null) {
      this.#isOpen = false;
      return !this.#isOpen;
    }
    this.#database.close();
    this.#isOpen = false;
    return !this.#isOpen;
  }
  /**
   * Closes the current database instance, if it is open, and then deletes the database.
   * @returns a `boolean` to indicate success
   */
  async delete() {
    if (this.#isOpen) {
      await this.close();
    }
    return this.#deleteDatabase();
  }
  /**
   * Deletes the database.
   * @returns a `boolean` to indicate success
   */
  #deleteDatabase() {
    return new Promise((resolve) => {
      if (this.#database == null || this.#isInitialized != true) {
        throw new Error("Unable to delete an uninitialized database.");
      }
      const deleteRequest = indexedDB.deleteDatabase(this.#database.name);
      deleteRequest.onsuccess = () => {
        this.#database = void 0;
        this.#isInitialized = false;
        resolve(true);
      };
      deleteRequest.onerror = (error) => {
        console.error(error);
        resolve(false);
      };
    });
  }
  /**
   * Open new transaction in the managed database
   * @param tables the tables to include in this transaction scope
   * @param transactionMode the `IDBTransactionMode` the transaction will operate in
   * @returns a new transaction on the managed database in the target mode
   */
  openTransaction(tables, transactionMode = "readwrite") {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    return this.#database.transaction(tables, transactionMode);
  }
  //#endregion
  //#region Stores - Manage Records
  /**
   * Add a store to be managed by this `RecordSetter` instance
   * @param storeName the name of the store to add
   * @param tables the names of all tables that this store will share transactions with.  
   * Transactions are shared in `Promise` scopes, so most `async`/`await` calls that will
   * unite record data from different tables require shared scopes.
   * @param options `RecordStoreOptions` values for the new `RecordStore` instance
   * @returns a new `RecordStore` instance
   */
  addStore(storeName, tables, options) {
    if (this.stores.get(storeName) != null) {
      throw new Error("Cannot add store with same name as existing store.");
    }
    this.stores.set(storeName, new RecordStore(this.#database, storeName, tables ?? [storeName], options));
    return this.stores.get(storeName);
  }
  /**
   * Get a `RecordStore` that is managed by this instance.
   * @template T extends `RecordBase`
   * @param name the name of the store to get
   * @returns a `RecordStore` instance that manages `Record`s of type `T`.
   */
  getStore(name) {
    const store = this.stores.get(name);
    if (store == null) {
      throw new Error(`Store could not be found by name: ${name}`);
    }
    return store;
  }
  /**
   * Get a default `RecordStore` instance that manages key/value pairs in the database
   * @returns the KeyValue `RecordStore` instance
   */
  async getKeyValueStore() {
    let store = this.stores.get(this.#keyValueTableName);
    if (store == null) {
      store = await this.addStore(this.#keyValueTableName);
    }
    if (store == null) {
      throw new Error("Unable to create a key-value store.");
    }
    return store;
  }
  //#endregion
  //#region Data - Key/Value management
  /**
   * Get a value from the Key/Value `RecordStore`
   * @param key the key to match
   * @returns the value associated with the target key
   */
  async getValue(key) {
    return this.getData(this.#keyValueTableName, key);
  }
  /**
   * Get values from the Key/Value `RecordStore`
   * @param keys the keys to match
   * @returns the values associated with the target keys
   */
  async getValues(keys) {
    return this.getDataValues(this.#keyValueTableName, keys);
  }
  /**
   * Get all values from the Key/Value `RecordStore`
   * @returns an array of the values
   */
  async getAllValues() {
    return this.getAllData(this.#keyValueTableName);
  }
  /**
   * Set a value in the Key/Value `RecordStore`
   * @param key the key to assign a value to
   * @param value the value to assign to the target key
   */
  async setValue(key, value) {
    await this.setData(this.#keyValueTableName, key, value);
  }
  /**
   * Set values in the Key/Value `RecordStore`
   * @param items an array of key/value pairs defining the data to set
   */
  async setValues(items) {
    await this.setDataValues(this.#keyValueTableName, items);
  }
  // data sets direct values, based on keys
  // instead of storing a managed object 
  // type (records). This allows for simple
  // key-value storage alongside record storage;
  // getting and setting data is limited to
  // directly handling data in a single table;
  /**
   * Get all data stored in the target `IDBObjectStore`
   * @param storeName the name of the `IDBObjectStore` to collect data from
   * @returns an array of all values stored in the target `IDBObjectStore`
   */
  async getAllData(storeName) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName], "readonly");
    transaction.onerror = (event) => {
      throw event;
    };
    const value = await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.getAll();
      request.onsuccess = (event) => {
        const record = event.target.result;
        const result = record == null ? [] : record.value;
        resolve(result);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
    return value;
  }
  /**
   * Get the value of an entry in the target `IDBObjectStore`, by key
   * @param storeName the name of the `IDBObjectStore` to get the value from
   * @param key the key to match 
   * @returns the value assigned to the matching key, or null
   */
  async getData(storeName, key) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName], "readonly");
    transaction.onerror = (event) => {
      throw event;
    };
    const value = await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.get(key);
      request.onsuccess = (event) => {
        const record = event.target.result;
        const result = record == null ? null : record.value;
        resolve(result);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
    return value;
  }
  /**
   * Get the values of the entries in the target `IDBObjectStore`, by keys
   * @param storeName the name of the `IDBObjectStore` to get the values from
   * @param keys the keys to match 
   * @returns an array of the values assigned to the matching keys, or null
   */
  async getDataValues(storeName, keys) {
    const transaction = this.openTransaction([storeName], "readonly");
    const promises = [];
    for (let i = 0; i < keys.length; i++) {
      const id = keys[i];
      promises.push(new Promise((resolve, reject) => {
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.get(id);
        request.onsuccess = (event) => {
          const record = event.target.result;
          resolve(record == null ? null : record.value);
        };
        request.onerror = (event) => {
          reject(event);
        };
      }));
    }
    const records = await Promise.all(promises);
    return records;
  }
  /**
   * Set the value of an entry in the target `IDBObjectStore`, by key
   * @param storeName the name of the `IDBObjectStore` to set the values in
   * @param key the key to match 
   * @param value the value to assign to the matching key
   */
  async setData(storeName, key, value) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = value == void 0 ? objectStore.delete(key) : objectStore.put({ key, value });
      request.onsuccess = (event) => {
        const value2 = event.target.result;
        resolve(value2);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
   * Set the values of an entries in the target `IDBObjectStore`, by keys
   * @param storeName the name of the `IDBObjectStore` to set the values in
   * @param values an array of key/value pairs defining the data to set
   */
  async setDataValues(storeName, values) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    const objectStore = transaction.objectStore(storeName);
    const promises = [];
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      promises.push(new Promise((innerResolve, innerReject) => {
        const request = value.value == void 0 ? objectStore.delete(value.key) : objectStore.put(value);
        request.onsuccess = (event) => {
          const value2 = event.target.result;
          innerResolve(value2);
        };
        request.onerror = (event) => {
          innerReject(event);
        };
      }));
    }
    await Promise.all(promises);
  }
  /**
   * Remove an entries from the target `IDBObjectStore`, by key
   * @param storeName the name of the `IDBObjectStore` to remove the values from
   * @param keys the keys to match 
   */
  async removeData(storeName, ...keys) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    await new Promise((resolve, _reject) => {
      const objectStore = transaction.objectStore(storeName);
      const promises = [];
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        promises.push(new Promise((innerResolve, innerReject) => {
          const request = objectStore.delete(key);
          request.onsuccess = (event) => {
            const value = event.target.result;
            innerResolve(value);
          };
          request.onerror = (event) => {
            innerReject(event);
          };
        }));
      }
      resolve(Promise.all(promises));
    });
  }
  //#endregion
  //#region Key-Only Management - data like tags, which are just strings, can be stored without even a value. Only a key is necessary
  /**
   * Query the target `IDBObjectStore` for the target keys, and return all that exist.
   * @param storeName the name of the `IDBObjectStore` to query
   * @param keys the keys to match 
   * @returns the matching keys that exist in the `IDBObjectStore`
   */
  async getKeys(storeName, ...keys) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName], "readonly");
    transaction.onerror = (event) => {
      throw event;
    };
    const value = await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = keys.length == 0 ? objectStore.getAll() : objectStore.get(keys);
      request.onsuccess = (event) => {
        const record = event.target.result;
        resolve(record == null ? [] : record.map((item) => {
          return item.key;
        }));
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
    return value;
  }
  /**
   * Store a key, without an associated value, in the target `IDBObjectStore`
   * @param storeName the name of the `IDBObjectStore` to store the key in
   * @param key the value to store
   * @returns the value that was stored
   */
  async setKey(storeName, key) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    const result = await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.put({ key });
      request.onsuccess = (event) => {
        const value = event.target.result;
        resolve(value);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
    return result;
  }
  /**
   * Store keys, without associated values, in the target `IDBObjectStore`
   * @param storeName the name of the `IDBObjectStore` to store the keys in
   * @param keys the values to store
   * @returns an array of the stored keys
   */
  async setKeys(storeName, keys) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName]);
    const promises = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      promises.push(new Promise((resolve, reject) => {
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.put({ key });
        request.onsuccess = (event) => {
          const value = event.target.result;
          resolve(value);
        };
        request.onerror = (event) => {
          reject(event);
        };
      }));
    }
    const results = await Promise.all(promises);
    const updatedRecords = await this.getKeys(storeName, ...results);
    return updatedRecords;
  }
  /**
   * Removes a key from the target `IDBObjectStore`
   * @param storeName the name of the `IDBObjectStore` to remove the key from
   * @param key the key to remove
   */
  async removeKey(storeName, key) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.delete(key);
      request.onsuccess = (event) => {
        const value = event.target.result;
        resolve(value);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
   * Remove all keys from the target `IDBObjectStore`
   * @param storeName the name of the `IDBObjectStore` to remove the keys from
   */
  async clearStoreKeys(storeName) {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.clear();
      request.onsuccess = (event) => {
        const value = event.target.result;
        resolve(value);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  //#endregion
  /**
   * Create a random, locally-unique string value to use as an id
   * @returns a `string` id value
   */
  static generateId() {
    const rnd = new Uint8Array(20);
    crypto.getRandomValues(rnd);
    const b64 = [].slice.apply(rnd).map(function(ch) {
      return String.fromCharCode(ch);
    }).join("");
    const secret = btoa(b64).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
    return secret;
  }
};

// components/import-manager/import-manager.component.ts
var ID_PROPERTIES = /* @__PURE__ */ new Set(["id", "listId", "taskSettingsId", "backgroundImageId", "boardId"]);
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(import_manager_component_default);
var COMPONENT_TAG_NAME = "import-manager";
var ImportManagerComponent = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.querySelector(`#${id}`);
  }
  #generatedIdMap = /* @__PURE__ */ new Map();
  constructor() {
    super();
    this.innerHTML = import_manager_component_default2;
    let parent = this.getRootNode();
    parent.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    this.findElement("preview").addCustomPropertyValueGenerator((title) => {
      return ID_PROPERTIES.has(title);
    }, (_title, value) => {
      const valueSpan = document.createElement("span");
      valueSpan.classList.add("value");
      if (this.#generatedIdMap.has(value)) {
        const oldValue = document.createElement("span");
        oldValue.classList.add("old");
        oldValue.title = `ID values replaced to prevent overwriting. [Old Value: ${this.#generatedIdMap.get(value)}]`;
        oldValue.textContent = this.#generatedIdMap.get(value) ?? "[Error]";
        const newValue = document.createElement("span");
        newValue.classList.add("new");
        newValue.textContent = value;
        valueSpan.append(oldValue, newValue);
      } else {
        valueSpan.textContent = value.length > 1024 ? value.substring(0, 1024) : value;
      }
      return valueSpan;
    });
    this.findElement("preview").addCustomPropertyValueGenerator((title) => {
      return title.endsWith("_base64");
    }, (_title, value) => {
      const valueSpan = document.createElement("span");
      valueSpan.classList.add("value");
      if (value.startsWith("data:image")) {
        const imagePreview = document.createElement("img");
        imagePreview.classList.add("preview");
        imagePreview.src = value;
        valueSpan.append(imagePreview);
      } else if (value.length <= 1024) {
        valueSpan.textContent = value;
      } else {
        const display = document.createElement("span");
        display.classList.add("display");
        display.textContent = value.substring(0, 1024);
        const viewLink = document.createElement("a");
        viewLink.textContent = "[...]";
        viewLink.classList.add("view-link");
        viewLink.title = "View full content [value has been truncated]";
        const linkContent = value.startsWith("data:") ? value : "data:application/json;charset=utf-8, " + encodeURIComponent(JSON.stringify(value, null, 2));
        viewLink.setAttribute("href", linkContent);
        valueSpan.append(display, viewLink);
      }
      return valueSpan;
    });
  }
  setData(boardData) {
    this.#generatedIdMap.clear();
    const modifiedData = this.prepareData(boardData);
    this.findElement("preview").setData(modifiedData);
  }
  prepareData(boardData) {
    const modifiedData = structuredClone(boardData);
    modifiedData.id = RecordSetter.generateId();
    if (boardData.id != null) {
      this.#generatedIdMap.set(modifiedData.id, boardData.id);
    }
    if (modifiedData.taskSettings != null) {
      modifiedData.taskSettings.id = RecordSetter.generateId();
      modifiedData.taskSettingsId = modifiedData.taskSettings.id;
      if (boardData.taskSettingsId != null) {
        this.#generatedIdMap.set(modifiedData.taskSettingsId, boardData.taskSettingsId);
      }
    }
    if (modifiedData.lists != null) {
      for (let i = 0; i < modifiedData.lists.length; i++) {
        const list = modifiedData.lists[i];
        if (list.deletedTimestamp != void 0) {
          continue;
        }
        list.id = RecordSetter.generateId();
        list.boardId = modifiedData.id;
        if (boardData.lists[i].id != null) {
          this.#generatedIdMap.set(list.id, boardData.lists[i].id);
        }
        if (list.taskSettings != null) {
          list.taskSettings.id = RecordSetter.generateId();
          list.taskSettingsId = list.taskSettings.id;
          if (boardData.lists[i].taskSettingsId != null) {
            this.#generatedIdMap.set(list.taskSettingsId, boardData.lists[i].taskSettingsId);
          }
        }
        if (list.tasks != null) {
          for (let j = 0; j < list.tasks.length; j++) {
            const task = list.tasks[j];
            if (task.deletedTimestamp != void 0) {
              continue;
            }
            task.id = RecordSetter.generateId();
            task.boardId = modifiedData.id;
            task.listId = list.id;
            if (boardData.lists[i].tasks[j].id != null) {
              this.#generatedIdMap.set(task.id, boardData.lists[i].tasks[j].id);
            }
          }
        }
      }
    }
    if (modifiedData.backgroundImage != null && modifiedData.backgroundImage.deletedTimestamp == void 0) {
      modifiedData.backgroundImage.id = RecordSetter.generateId();
      modifiedData.backgroundImage.boardId = modifiedData.id;
      modifiedData.backgroundImageId = modifiedData.backgroundImage.id;
      if (boardData.backgroundImageId != null) {
        this.#generatedIdMap.set(modifiedData.backgroundImageId, boardData.backgroundImageId);
      }
      delete modifiedData.backgroundImage.image;
    }
    delete modifiedData.order;
    return modifiedData;
  }
  getRecord() {
    const data = this.findElement("preview").getUpdatedData();
    return data;
  }
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, ImportManagerComponent);
}

// data/records/task-settings.record.ts
var TaskColorDisplay = /* @__PURE__ */ ((TaskColorDisplay2) => {
  TaskColorDisplay2["Hidden"] = "hidden";
  TaskColorDisplay2["Element"] = "element";
  TaskColorDisplay2["Borders"] = "border";
  TaskColorDisplay2["TopBorder"] = "top-border";
  TaskColorDisplay2["RightBorder"] = "right-border";
  TaskColorDisplay2["BottomBorder"] = "bottom-border";
  TaskColorDisplay2["LeftBorder"] = "left-border";
  TaskColorDisplay2["Background"] = "background";
  return TaskColorDisplay2;
})(TaskColorDisplay || {});
var TaskSettingsRecord = class extends DataRecord {
  parentRecordType = "board";
  centerCheckbox = true;
  colorDisplay = "element" /* Element */;
  useCustomBackgroundColor = false;
  customBackgroundColor = "#f9faf5";
  useCustomFontSize = false;
  customFontSize = 12;
  useCustomFontColor = false;
  customFontColor = "#060703";
  useCustomWidth = false;
  customWidth = 300;
  useCustomBorderWidth_top = false;
  borderWidth_top = 1;
  useCustomBorderWidth_right = false;
  borderWidth_right = 1;
  useCustomBorderWidth_bottom = false;
  borderWidth_bottom = 1;
  useCustomBorderWidth_left = false;
  borderWidth_left = 1;
  useCustomBorderRadius = false;
  borderRadiusValue = 3;
  borderRadiusUnit = "px";
  useCustomBorderColor = false;
  customBorderColor = "#0657A3";
  centerRemoveButton = false;
};

// styles/form-field.css?raw
var form_field_default = '[part="field-label"]\n{\n    white-space: nowrap;\n}\nform-field [part="label"]\n,form-field [part="field-label"]\n{\n    display: flex;\n    gap: .25em;\n    align-items: center;\n}\nform-field [part="label"] input\n,form-field [part="field-label"] input\n{\n    margin: 0;\n}\nform-field [part="label"] [part="text"]\n,form-field [part="field-label"] [part="text"]\n{\n    flex: 1;\n}\n\nform-field [part="container"]\n{\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: .25em;\n}\nform-field [part="container"]:has([slot="postfix"])\n{\n    display: grid;\n    grid-template-columns: 1fr auto;\n    column-gap: 0;\n    row-gap: .25em;\n}\nform-field [part="container"]:has([slot="postfix"]) [part="field-label"]\n{\n    grid-column: span 2;\n}\n\n';

// components/board-settings/task-fields/task-fields.component.css?raw
var task_fields_component_default = ':host\n{\n    display: grid;\n    grid-template-columns: auto minmax(160px, 1fr) auto;\n}\n\nfieldset\n{\n    display: grid;\n    gap: 1em;\n    min-width: 0;\n    width: auto;\n}\ninput,select,textarea\n{\n    font: inherit;\n    min-width: 0;\n    width: auto;\n}\n\ninput[type="color"]\n{\n    width: 100%;\n}\ninput[type="text"][inputmode="numeric"]\n{\n    width: 5ch;\n}\n\nform-field .container\n{\n}\nform-field .field-label\n{\n    display: flex;\n    gap: 5px;\n    margin-bottom: 7px;\n}\n\n[part="appearance-fields"]\n{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n[part="appearance-fields"] .container > input\n{\n    flex: 1;\n    min-height: 2ch;\n}\n\n[part="border-radius-field"] .option\n{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 5px;\n}\n\n[part="border-weights-fields"]\n{\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-template-rows: min-content min-content;\n}\n\n[part="font-size-field"] .container\n,[part="card-width-field"] .container\n,[part="border-weights-fields"] .container\n{\n    align-items: flex-start;\n    column-gap: .25em !important;\n}\n\n[part="font-size-field"] [slot="postfix"]\n,[part="card-width-field"] .container\n,[part="card-width-field"] [slot="postfix"]\n,[part="card-width-field"] input[type="text"]\n,[part="border-weights-fields"] [slot="postfix"]\n{\n    align-self: flex-end;\n}\n\n[part="center-checkbox-field"] input\n,[part="center-remove-button-field"] input\n{\n    justify-self: flex-start;\n    margin: 0;\n}';

// components/board-settings/task-fields/task-fields.component.html?raw
var task_fields_component_default2 = '<input type="hidden" name="record-id" part="record-id" />\n<fieldset part="appearance-fields">\n    <legend part="appearance-legend">Appearance</legend>\n\n    <form-field part="font-size-field" label="Font Size" optional optional-title="Override Font Size?">\n        <input type="text" inputmode="numeric" name="font-size" part="font-size" />\n        <span part="font-size-unit" slot="postfix">px</span>\n    </form-field>\n    <form-field part="background-color-field" label="Background Color" optional optional-title="Override Background Color?">\n        <input type="color" name="background-color" part="background-color" value="#f9faf5" />\n    </form-field>\n    <form-field part="border-radius-field" label="Border Radius" optional optional-title="Override Border Radius?">\n        <input type="text" inputmode="numeric" name="border-radius" part="border-radius" />\n        <select part="border-radius-unit" slot="postfix">\n            <option value="px">px</option>\n            <option value="%">%</option>\n        </select>\n    </form-field>\n    <form-field part="font-color-field" label="Font Color" optional optional-title="Override Font Color?">\n        <input type="color" name="font-color" part="font-color" value="#060703" />\n    </form-field>\n    <form-field part="color-display-field" label="Color Display">\n        <select name="color-display" part="color-display"></select>\n    </form-field>\n    <form-field part="border-color-field" label="Border Color" optional optional-title="Override Border Color?">\n        <input type="color" name="border-color" part="border-color" value="#060703" />\n    </form-field>\n</fieldset>  \n\n<fieldset part="layout-fields">\n    <legend part="layout-legend">Layout</legend>\n    <form-field part="center-checkbox-field" label="Center Checkbox">\n        <input type="checkbox" name="center-checkbox" part="center-checkbox" title="Center the checkbox?" />\n    </form-field>\n    <form-field part="center-remove-button-field" label="Center Remove Button">\n        <input type="checkbox" name="center-remove-button" part="center-remove-button" title="Center the remove button?" />\n    </form-field>\n    <form-field part="card-width-field" label="Card Width" optional option-title="Override Task Card Width?">\n        <input type="text" inputmode="numeric" name="card-width" part="card-width" value="" />\n        <span part="card-width-unit" slot="postfix">px</span>\n    </form-field>\n</fieldset>      \n\n<fieldset part="border-weights-fields">\n    <legend part="border-weights-legend">Border Weights</legend>\n    <form-field part="border-top-field" label="Top" optional optional-title="Use a custom top border size?">\n        <input type="text" inputmode="numeric" name="border-top" part="border-top" />\n        <span part="border-top-unit" slot="postfix">px</span>\n    </form-field>\n    <form-field part="border-right-field" label="Right" optional optional-title="Use a custom right border size?">\n        <input type="text" inputmode="numeric" name="border-right" part="border-right" />\n        <span part="border-right-unit" slot="postfix">px</span>\n    </form-field>\n    <form-field part="border-bottom-field" label="Bottom" optional optional-title="Use a custom bottom border size?">\n        <input type="text" inputmode="numeric" name="border-bottom" part="border-bottom" />\n        <span part="border-bottom-unit" slot="postfix">px</span>\n    </form-field>\n    <form-field part="border-left-field" label="Left" optional optional-title="Use a custom left border size?">\n        <input type="text" inputmode="numeric" name="border-left" part="border-left" />\n        <span part="border-left-unit" slot="postfix">px</span>\n    </form-field>\n</fieldset>';

// components/board-settings/task-fields/task-fields.component.ts
var COMPONENT_STYLESHEET2 = new CSSStyleSheet();
COMPONENT_STYLESHEET2.replaceSync(`${form_field_default}
${task_fields_component_default}
`);
var COMPONENT_TAG_NAME2 = "task-fields";
var TaskFieldsComponent = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = task_fields_component_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET2);
    const options = [];
    for (const [key, value] of Object.entries(TaskColorDisplay)) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = key.replace(/([A-Z])/g, " $1").trim();
      options.push(option);
    }
    this.findPart("color-display").append(...options);
  }
  setValues(settings) {
    this.setAttribute("record-id", settings.id);
    this.findPart("background-color-field").setAttribute("optional-value", settings.useCustomBackgroundColor == true ? "true" : "false");
    this.findPart("background-color").value = settings.customBackgroundColor;
    this.findPart("font-color-field").setAttribute("optional-value", settings.useCustomFontColor == true ? "true" : "false");
    this.findPart("font-color").value = settings.customFontColor;
    this.findPart("font-size-field").setAttribute("optional-value", settings.useCustomFontSize == true ? "true" : "false");
    this.findPart("font-size").value = settings.customFontSize.toString();
    this.findPart("border-color-field").setAttribute("optional-value", settings.useCustomBorderColor == true ? "true" : "false");
    this.findPart("border-color").value = settings.customBorderColor;
    this.findPart("border-radius-field").setAttribute("optional-value", settings.useCustomBorderRadius == true ? "true" : "false");
    this.findPart("border-radius").value = settings.borderRadiusValue.toString();
    this.findPart("border-radius-unit").value = settings.borderRadiusUnit;
    this.findPart("color-display").value = settings.colorDisplay;
    this.findPart("center-checkbox").checked = settings.centerCheckbox;
    this.findPart("center-remove-button").checked = settings.centerRemoveButton;
    this.findPart("card-width-field").setAttribute("optional-value", settings.useCustomWidth == true ? "true" : "false");
    this.findPart("card-width").value = settings.customWidth.toString();
    this.findPart("border-top-field").setAttribute("optional-value", settings.useCustomBorderWidth_top == true ? "true" : "false");
    this.findPart("border-top").value = settings.borderWidth_top.toString();
    this.findPart("border-right-field").setAttribute("optional-value", settings.useCustomBorderWidth_right == true ? "true" : "false");
    this.findPart("border-right").value = settings.borderWidth_right.toString();
    this.findPart("border-bottom-field").setAttribute("optional-value", settings.useCustomBorderWidth_bottom == true ? "true" : "false");
    this.findPart("border-bottom").value = settings.borderWidth_bottom.toString();
    this.findPart("border-left-field").setAttribute("optional-value", settings.useCustomBorderWidth_left == true ? "true" : "false");
    this.findPart("border-left").value = settings.borderWidth_left.toString();
  }
  getRecord() {
    const settings = new TaskSettingsRecord();
    settings.id = this.getAttribute("record-id");
    settings.useCustomBackgroundColor = this.findPart("background-color-field").getAttribute("optional-value") == "true";
    settings.customBackgroundColor = this.findPart("background-color").value;
    settings.useCustomFontColor = this.findPart("font-color-field").getAttribute("optional-value") == "true";
    settings.customFontColor = this.findPart("font-color").value;
    settings.useCustomFontSize = this.findPart("font-size-field").getAttribute("optional-value") == "true";
    settings.customFontSize = parseFloat(this.findPart("font-size").value);
    settings.useCustomBorderColor = this.findPart("border-color-field").getAttribute("optional-value") == "true";
    settings.customBorderColor = this.findPart("border-color").value;
    settings.useCustomBorderRadius = this.findPart("border-radius-field").getAttribute("optional-value") == "true";
    settings.borderRadiusValue = parseFloat(this.findPart("border-radius").value);
    settings.borderRadiusUnit = this.findPart("border-radius-unit").value;
    settings.colorDisplay = this.findPart("color-display").value;
    settings.centerCheckbox = this.findPart("center-checkbox").checked;
    settings.centerRemoveButton = this.findPart("center-remove-button").checked;
    settings.useCustomWidth = this.findPart("card-width-field").getAttribute("optional-value") == "true";
    settings.customWidth = parseFloat(this.findPart("card-width").value);
    settings.useCustomBorderWidth_top = this.findPart("border-top-field").getAttribute("optional-value") == "true";
    settings.borderWidth_top = parseFloat(this.findPart("border-top").value);
    settings.useCustomBorderWidth_right = this.findPart("border-right-field").getAttribute("optional-value") == "true";
    settings.borderWidth_right = parseFloat(this.findPart("border-right").value);
    settings.useCustomBorderWidth_bottom = this.findPart("border-bottom-field").getAttribute("optional-value") == "true";
    settings.borderWidth_bottom = parseFloat(this.findPart("border-bottom").value);
    settings.useCustomBorderWidth_left = this.findPart("border-left-field").getAttribute("optional-value") == "true";
    settings.borderWidth_left = parseFloat(this.findPart("border-left").value);
    return settings;
  }
};
if (customElements.get(COMPONENT_TAG_NAME2) == null) {
  customElements.define(COMPONENT_TAG_NAME2, TaskFieldsComponent);
}

// data/records/task-list.record.ts
var TaskListColorDisplay = /* @__PURE__ */ ((TaskListColorDisplay2) => {
  TaskListColorDisplay2["Element"] = "element";
  TaskListColorDisplay2["BorderColor"] = "border-color";
  TaskListColorDisplay2["FontColor"] = "font-color";
  return TaskListColorDisplay2;
})(TaskListColorDisplay || {});
var TaskListRecord = class extends DataRecord {
  boardId = "";
  taskSettingsId = "";
  category = "";
  order = -1;
  color = "#1C67E8";
  name = "New List";
  description = "";
  colorDisplay = "element" /* Element */;
  useCustomBackgroundColor = false;
  backgroundColor = "#f9faf5";
  useCustomFontColor = false;
  fontColor = "#060703";
  useCustomWidth = false;
  width = 500;
  isCollapsed = false;
};

// components/board-settings/tasklist-fields/tasklist-fields.component.css?raw
var tasklist_fields_component_default = `:host([removed])
{
    opacity: .6;
    scale: .98 .9;
    user-select: none;
}

input,select,textarea
{
    font: inherit;
    min-width: 0;
    width: auto;
}

[part="icon-definitions"]
{
    display: none;
}

[part="handle"]
{
    display: flex;
    width: 15px;
    align-self: stretch;
    cursor: grab;
    border-radius: 3px;
    
    background-image: radial-gradient(var(--grip-color, canvastext) 15%, transparent 16%),
    radial-gradient(var(--grip-color, canvastext) 15%, transparent 16%);
    background-size: 5px 5px;
    background-position: 0 0, 2px 2px;
}
[part="handle"]:active
{
    cursor: grabbing;
}

[part="remove-icon"]
,[part="duplicate-icon"]
{
    width: var(--icon-size, 12px);
    height: var(--icon-size, 12px);
}

details summary
{
    user-select: none;
    display: flex;
    gap: .25em;
}
summary:before
{
    content: '\u25B6';
    transform-origin: 45% 50%;
    transition: transform 100ms ease-out;
    font-size: .78em;
    align-self: center;
    margin-right: .25em;
}
details[open] summary:before
{
    transform: rotate(90deg);
}

details [part="detail-content"]
{
    display: grid;
    gap: 1em;
    padding: 1em;
}

fieldset
{
    display: grid;
    gap: 1em;
    min-width: 0;
    width: auto;
}

form-field .container
{
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 7px;
}

form-field input[type="color"]
{
    width: 100%;
}

[part="color"]
{
    width: 3ch;
}

[part="name"]
{
    flex: 1;
}

[part="list-settings"]
{
    grid-template-columns: 1fr minmax(min-content, 18ch);
}

[part="list-settings"] .column
{
    display: grid;
    gap: .5em;
}

[part="list-settings"] .column input[type="color"]
{
    height: auto;
}

input[type="text"]
{
    min-width: 5ch;
}

[part="list-width-field"] .container
{
    column-gap: .25em !important;
}

[part="list-width-field"] [slot="postfix"]
{
    align-self: flex-end;
}`;

// components/board-settings/tasklist-fields/tasklist-fields.component.html?raw
var tasklist_fields_component_default2 = '<details part="details">\n    <summary part="summary">\n        <div part="handle"></div>\n        <input part="color" type="color" />\n        <input part="name" type="text" />\n        <button part="duplicate-button" type="button">\n            <svg part="duplicate-icon">\n                <use href="#icon-definition_copy"></use>\n            </svg>\n        </button>\n        <button part="remove-button" type="button">\n            <svg part="remove-icon">\n                <use href="#icon-definition_cancel-cross"></use>\n            </svg>\n        </button>\n    </summary>\n    <div part="detail-content">\n        <fieldset part="list-settings">\n            <legend part="list-settings-legend">\n                <span part="list-setting-title">List</span>\n            </legend>\n            <div class="column">\n                <form-field part="background-color-field" label="Background Color" optional optional-title="Override Background Color?">\n                    <input type="color" name="background-color" part="background-color" value="#f9faf5" />\n                </form-field>\n                <form-field part="font-color-field" label="Font Color" optional optional-title="Override Font Color?">\n                    <input type="color" name="font-color" part="font-color" value="#060703" />\n                </form-field>\n            </div>\n            <div class="column">\n                <form-field label="Order" part="order-field">\n                    <input type="text" part="order" name="order" inputmode="numeric" disabled />\n                </form-field>\n                <form-field part="list-width-field" label="List Width" optional optional-title="Use a custom list width?">\n                    <input type="text" inputmode="numeric" name="list-width" part="list-width" value="" />\n                    <span part="list-width-unit" slot="postfix">px</span>\n                </form-field>\n                <form-field part="color-display-field" label="Color Display">\n                    <select name="color-display" part="color-display"></select>\n                </form-field>\n            </div>\n        </fieldset>\n        <fieldset part="task-settings">\n            <legend part="task-settings-legend">\n                <span part="task-setting-title">List Tasks</span>\n            </legend>\n            <task-fields part="task-fields"></task-fields>\n        </fieldset>\n    </div>\n</details>';

// components/board-settings/tasklist-fields/tasklist-fields.component.ts
var COMPONENT_STYLESHEET3 = new CSSStyleSheet();
COMPONENT_STYLESHEET3.replaceSync(`${form_field_default}
${tasklist_fields_component_default}
`);
var COMPONENT_TEMPLATE = `${tasklist_fields_component_default2}
<div part="icon-definitions">
    ${Icons.CancelCross}
    ${Icons.Copy}
</div>`;
var COMPONENT_TAG_NAME3 = "tasklist-fields";
var TaskListFieldsComponent = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET3);
    const options = [];
    for (const [key, value] of Object.entries(TaskListColorDisplay)) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = key.replace(/([A-Z])/g, " $1").trim();
      options.push(option);
    }
    this.findPart("color-display").append(...options);
    this.findPart("remove-button").addEventListener("click", () => {
      this.toggleAttribute("removed");
    });
    this.findPart("duplicate-button").addEventListener("click", () => {
      this.dispatchEvent(new Event("duplicate"));
    });
    this.findPart("name").addEventListener("keyup", (event) => {
      if (event.code == "Space") {
        event.preventDefault();
      }
    });
  }
  setValues(taskList, taskSettings) {
    this.setAttribute("record-id", taskList.id);
    this.findPart("color").value = taskList.color;
    this.findPart("name").value = taskList.name;
    this.findPart("order").value = taskList.order.toString();
    this.findPart("background-color-field").setAttribute("optional-value", taskList.useCustomBackgroundColor == true ? "true" : "false");
    this.findPart("background-color").value = taskList.backgroundColor;
    this.findPart("font-color-field").setAttribute("optional-value", taskList.useCustomFontColor == true ? "true" : "false");
    this.findPart("font-color").value = taskList.fontColor;
    this.findPart("list-width-field").setAttribute("optional-value", taskList.useCustomWidth == true ? "true" : "false");
    this.findPart("list-width").value = taskList.width.toString();
    this.findPart("color-display").value = taskList.colorDisplay;
    this.findPart("task-fields").setValues(taskSettings);
  }
  getRecords() {
    const taskList = new TaskListRecord();
    taskList.id = this.getAttribute("record-id");
    taskList.color = this.findPart("color").value;
    taskList.name = this.findPart("name").value;
    taskList.useCustomBackgroundColor = this.findPart("background-color-field").getAttribute("optional-value") == "true";
    taskList.backgroundColor = this.findPart("background-color").value;
    taskList.useCustomFontColor = this.findPart("font-color-field").getAttribute("optional-value") == "true";
    taskList.fontColor = this.findPart("font-color").value;
    taskList.useCustomWidth = this.findPart("list-width-field").getAttribute("optional-value") == "true";
    taskList.width = parseFloat(this.findPart("list-width").value);
    taskList.colorDisplay = this.findPart("color-display").value;
    const taskSettings = this.findPart("task-fields").getRecord();
    taskSettings.parentRecordType = "list";
    taskList.taskSettingsId = this.findPart("task-fields").getAttribute("record-id");
    const result = [taskList, taskSettings];
    return result;
  }
};
if (customElements.get(COMPONENT_TAG_NAME3) == null) {
  customElements.define(COMPONENT_TAG_NAME3, TaskListFieldsComponent);
}

// components/app-menu/app-menu.css?raw
var app_menu_default = `#menu
{
    padding: 0;
    margin: 0;
    background-color: field;
    color: fieldtext;
    border-right: solid 1px graytext;
}

#header
{
    display: flex;
    gap: .5em;
    padding: .5em;
}

#branding
{
    grid-area: brand;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo.mark
{
    width: var(--brand-icon-size);
    height: var(--brand-icon-size);
}

#open-board-browser
{
    flex: 1;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    gap: 5px;
    text-align: center;
}

#boards
{
    margin: 0;
    padding: 0;
}

@media (max-width: 665px) 
{
    #menu
    {
        max-width: 100vw;
        display: grid;
        border-right: none;
        order: 2;
    }

    #header
    {
        grid-row: 2;
        display: flex;
        justify-content: space-between;
        order: 3;
        background-color: field;
    }
    
    /* [part="menu"] .board-search
    {
        align-items: center;
        justify-content: center;
    } */
    #boards
    {
        display: flex;
        align-items: center;
        order: 2;
        background-color: field;
        border-top: solid 1px graytext;
    }
    #boards::part(items)
    {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        width: 0; /* doesn't actually set width, just corrects weird overflow issue */
        flex: 1;
        gap: var(--menu-gap);
        padding: var(--menu-padding);
        box-shadow: inset -10px 0 10px -10px rgb(0 0 0 / .8);
    }

    #new-board-button
    {
        display: flex;
        align-self: stretch;
        margin: 7px;
    }

    #new-board-button .label
    {
        display: none;
    }
}
@media (max-width: 800px) 
{
    
}

/* only desktop */
@media (min-width: 665px) 
{
    #menu
    {
        display: grid;
        grid-template-rows: auto 1fr;
        overflow: hidden;
        max-width: 330px;
    }


    #boards
    {
        display: grid;
        grid-template-rows: 1fr auto;
        overflow: hidden;
    }
    #boards::part(items)
    {
        margin: 0;
        padding: 0;
        display: grid;
        gap: .5em;
        overflow-y: auto;
        overflow-x: hidden;
        grid-auto-rows: max-content;
    }

    #new-board-button
    {
        margin: 10px;
    }

    #new-board-button_list
    {
        margin-top: 1em;
        justify-self: center;
    }
}
@media (min-width: 800px) 
{

}`;

// components/app-menu/app-menu.html?raw
var app_menu_default2 = '<menu id="menu">\n    <header id="header">\n        <div id="branding" title="Manager Icon">\n            <svg class="icon logo mark" alt="Manager Brand Mark">\n                <use href="#icon-definition_logo-mark"></use>\n            </svg>\n        </div>\n        <button id="open-board-browser" type="button" data-route="#boards" title="Find Board">\n            <svg class="icon magnifying-glass">\n                <use href="#icon-definition_magnifying-glass"></use>\n            </svg>\n            <span class="label">Find Board</span>\n        </button>\n        <button id="open-settings" type="button" data-route="#config/settings" title="App Administration">\n            <svg class="icon gear">\n                <use href="#icon-definition_gear"></use>\n            </svg>\n        </button>\n    </header>\n    <editable-list id="boards" remove="false" edit="true" cancel-edit exportparts="items: board-items">\n        <slot></slot>\n        <button id="new-board-button" type="button" slot="add" title="New Board">\n            <svg class="icon plus" >\n                <use href="#icon-definition_plus"></use>\n            </svg>\n            <span class="label">New Board</span>\n        </button>\n        <template part="edit-button">\n            <svg class="icon expand" >\n                <use href="#icon-definition_stylus"></use>\n            </svg>\n        </template>\n    </editable-list>\n</menu>\n';

// components/app-menu/app-menu.ts
var AppMenuAttributes = /* @__PURE__ */ ((AppMenuAttributes2) => {
  AppMenuAttributes2["pathId"] = "path-id";
  return AppMenuAttributes2;
})(AppMenuAttributes || {});
var COMPONENT_STYLESHEET4 = new CSSStyleSheet();
COMPONENT_STYLESHEET4.replaceSync(`${shared_default}
    ${app_menu_default}`);
var COMPONENT_TEMPLATE2 = `${app_menu_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "MagnifyingGlass" /* MagnifyingGlass */,
  "Gear" /* Gear */,
  "PlusIcon" /* PlusIcon */
)}`;
var COMPONENT_TAG_NAME4 = "app-menu";
var AppMenuElement = class extends HTMLElement {
  static observedAttributes = [
    ...Object.values(AppMenuAttributes)
  ];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  onEdit;
  onBoardMove;
  onNew;
  #draggingBoard = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET4);
    this.#applyPartAttributes();
    this.#addDragHandlers();
    this.findElement("boards").addEventListener("edit", (event) => {
      if (this.onEdit == null) {
        return;
      }
      const customEvent = event;
      const board = customEvent.detail;
      this.onEdit(board.dataset.route);
    });
    this.findElement("new-board-button").addEventListener("click", () => {
      if (this.onNew == null) {
        return;
      }
      this.onNew();
    });
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
  }
  updateBoards(boards) {
    const menuItems = [];
    for (let i = 0; i < boards.length; i++) {
      const boardRecord = boards[i];
      const menuItem = this.#createBoardMenuItem(boardRecord);
      menuItems.push(menuItem);
    }
    this.innerHTML = "";
    this.append(...menuItems);
  }
  #createBoardMenuItem(board) {
    const element = document.createElement("a");
    element.innerHTML = `<span part="menu-item-handle" class="menu-item-handle"></span>
        <span part="board-item-name" class="board-item-name">${board.name}<span>`;
    element.setAttribute("part", "board");
    element.classList.add("board");
    element.dataset.route = `board/${board.id}`;
    const handle = element.querySelector('[part="menu-item-handle"]');
    handle.addEventListener("mousedown", (_event) => {
      element.draggable = true;
    });
    handle.addEventListener("mouseup", (_event) => {
      element.removeAttribute("draggable");
    });
    element.addEventListener("dragstart", (_event) => {
      this.#draggingBoard = element;
      element.classList.add("dragging");
      this.classList.add("drop-target");
    });
    element.addEventListener("dragend", (_event) => {
      element.classList.remove("dragging");
      this.#draggingBoard = null;
      this.classList.remove("drop-target");
    });
    return element;
  }
  #addDragHandlers() {
    this.addEventListener("dragover", this.boardsList_onDragover.bind(this));
    this.addEventListener("drop", this.boardsList_onDrop.bind(this));
  }
  boardsList_onDragover(event) {
    event.preventDefault();
    event.stopPropagation();
    this.#updateBoardItemOrder(event.clientY);
  }
  async boardsList_onDrop(_event) {
    console.log(_event);
    if (this.onBoardMove != null) {
      this.onBoardMove([...this.querySelectorAll("a")]);
    }
  }
  async #updateBoardItemOrder(draggingCursorY) {
    if (this.#draggingBoard == null) {
      return;
    }
    const nextElement = this.#getNextBoardItem(draggingCursorY).boardElement;
    if (this.#draggingBoard.parentElement == this && nextElement == this.#draggingBoard.nextElementSibling) {
      return;
    }
    if (nextElement == null) {
      this.append(this.#draggingBoard);
    } else {
      this.insertBefore(this.#draggingBoard, nextElement);
    }
  }
  #getNextBoardItem(mouseY) {
    const lists = [...this.querySelectorAll("a:not(.dragging)")];
    return lists.reduce((closest, item) => {
      const boundingRect = item.getBoundingClientRect();
      const offset = mouseY - boundingRect.top - boundingRect.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, boardElement: item };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY });
  }
  static create(properties) {
    const element = document.createElement(COMPONENT_TAG_NAME4);
    for (const [propertyName, value] of Object.entries(properties)) {
      if (!propertyName.startsWith("on")) {
        element.setAttribute(propertyName, value);
      }
    }
  }
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "path-id" /* pathId */) {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME4) == null) {
  customElements.define(COMPONENT_TAG_NAME4, AppMenuElement);
}

// components/welcome-panel/welcome-panel.css?raw
var welcome_panel_default = ":host\n{\n    align-self: center;\n    justify-self: center;\n    padding: 1em;\n}\n\n#recent-boards\n{\n    display: grid;\n    margin: 0;\n    padding: 0;\n}\n#recent-boards::part(items)\n{\n    display: grid;\n    \n}\n#recent-boards a\n{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 3px 7px;\n}\n#recent-boards a:hover\n{\n    background-color: highlight;\n    color: highlighttext;\n}\n#new-board-button\n{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n}\n\n#logo\n{\n    width: 100%;\n    height: 80px;\n}";

// components/welcome-panel/welcome-panel.html?raw
var welcome_panel_default2 = '<fieldset id="panel-fieldset">\n    <legend id="panel-legend">Welcome</legend>\n    <svg id="logo" part="logo" >\n        <use href="#icon-definition_logo"></use>\n    </svg>\n    <div id="description">\n        <p id="welcome-text">Welcome to your Taskboard Manager!</p>\n        <p id="create-text">Create a <a id="new-board-link">new board</a>, or select a recently-opened board below.</p>\n    </div>\n    <fieldset id="recent-fieldset">\n        <legend id="recent-legend">Recent Boards</legend>\n        <editable-list id="recent-boards" exportparts="edit:edit-button, handle: edit-handle">\n            <slot></slot>\n            <button type="button" slot="add" id="new-board-button" title="New Board">\n                <svg class="icon plus" >\n                    <use href="#icon-definition_plus"></use>\n                </svg>\n                <span class="label">New Board</span>\n            </button>\n        </editable-list>\n    </fieldset>\n</fieldset>';

// components/welcome-panel/welcome-panel.ts
var WelcomePanelAttributes = /* @__PURE__ */ ((WelcomePanelAttributes2) => {
  WelcomePanelAttributes2["pathId"] = "path-id";
  return WelcomePanelAttributes2;
})(WelcomePanelAttributes || {});
var COMPONENT_STYLESHEET5 = new CSSStyleSheet();
COMPONENT_STYLESHEET5.replaceSync(`${shared_default}
    ${welcome_panel_default}`);
var COMPONENT_TEMPLATE3 = `${welcome_panel_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "LogoType" /* LogoType */,
  "Logo" /* Logo */,
  "PlusIcon" /* PlusIcon */,
  "CancelCross" /* CancelCross */
)}`;
var COMPONENT_TAG_NAME5 = "welcome-panel";
var WelcomePanelElement = class extends HTMLElement {
  static observedAttributes = [
    ...Object.values(WelcomePanelAttributes)
  ];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  onRemoveBoard;
  onNew;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE3;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET5);
    this.#applyPartAttributes();
    this.findElement("new-board-button").addEventListener("click", () => {
      if (this.onNew == null) {
        return;
      }
      this.onNew();
    });
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
  }
  // #recentBoard_onRemove(this: TaskboardManagerElement, event: Event|CustomEvent)
  // {
  //     const data = (event as CustomEvent).detail;
  //     const path = (data as HTMLElement).getAttribute('path')!;
  //     const id = path.substring(path.lastIndexOf('/') + 1);
  //     this[SHAREDACCESSKEY].removeBoardFromRecentBoards(id)
  // }
  updateBoards(boards) {
    const menuItems = [];
    for (let i = 0; i < boards.length; i++) {
      const boardRecord = boards[i];
      const menuItem = this.#createBoardMenuItem(boardRecord);
      menuItems.push(menuItem);
    }
    this.innerHTML = "";
    this.append(...menuItems);
  }
  #createBoardMenuItem(board) {
    const element = document.createElement("a");
    element.innerHTML = `<span part="board-item-name" class="board-item-name">${board.description}<span>`;
    element.setAttribute("part", "board");
    element.classList.add("board");
    element.dataset.route = `board/${board.id}`;
    return element;
  }
  static create(properties) {
    const element = document.createElement(COMPONENT_TAG_NAME5);
    for (const [propertyName, value] of Object.entries(properties)) {
      if (!propertyName.startsWith("on")) {
        element.setAttribute(propertyName, value);
      }
    }
  }
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "path-id" /* pathId */) {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME5) == null) {
  customElements.define(COMPONENT_TAG_NAME5, WelcomePanelElement);
}

// components/board-browser/board-browser.css?raw
var board_browser_default = ":host { display: contents; }\n\n#header\n{\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    gap: 7px;\n    align-items: center;\n    font-weight: bold;\n    padding-block: 5px;\n}\n#icon\n{\n    width: var(--dialog-header-icon-size);\n    height: var(--dialog-header-icon-size);\n}\n\ncollection-browser\n{\n    margin: 1em;\n    overflow: hidden;\n}\n\ncollection-browser::part(items)\n{\n    display: flex;\n    gap: .5em;\n    flex-wrap: wrap;\n    padding: 7px;\n    overflow: hidden auto;\n}\n\ncollection-browser::part(add-button)\n{\n    display: none;\n}\n\n#actions\n{\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 1em;\n}\n\n#actions button\n{\n    width: 70px;\n    justify-content: center;\n}\n\n@media (max-width: 665px) \n{\n    #filter::part(input)\n    {\n        width: 157px;\n    }\n}";

// components/board-browser/board-browser.html?raw
var board_browser_default2 = '<header id="header">\n    <svg id="icon" >\n        <use href="#icon-definition_task-board"></use>\n    </svg>\n    <span id="title">Boards</span>\n    <collection-filter id="filter"></collection-filter>\n</header>\n<collection-browser id="collection-browser"><slot></slot></collection-browser>\n<footer id="footer">\n    <form id="actions" method="dialog">\n        <button type="submit" id="cancel">Cancel</button>\n        <button type="submit" id="ok">Open</button>\n    </form>\n</footer>\n\n<!-- <header part="board-browser-header">\n    <svg part="board-browser-icon" >\n        <use href="#icon-definition_task-board"></use>\n    </svg>\n    <span part="board-browser-title">Boards</span>\n    <collection-filter part="board-browser-filter" id="board-browser-filter"></collection-filter>\n</header>\n<collection-browser part="board-browser" id="board-browser"></collection-browser>\n<footer part="board-browser-footer">\n    <form part="board-browser-actions" method="dialog">\n        <button type="submit" part="board-browser-cancel" id="board-browser-cancel">Cancel</button>\n        <button type="submit" part="board-browser-ok" id="board-browser-ok">Open</button>\n    </form>\n</footer> -->';

// node_modules/.pnpm/@magnit-ce+captioned-thumbnail@0.0.3/node_modules/@magnit-ce/captioned-thumbnail/dist/captioned-thumbnail.js
var captioned_thumbnail_default = '\n\n:host\n{\n    display: inline-flex;\n    width: 80px;\n    height: 80px;\n    color-scheme: light dark;\n}\n\n:host(:focus) figure\n{\n    border-color: rgb(205 205 205);\n}\n@media (prefers-color-scheme: dark) \n{\n    :host(:focus) figure\n    {\n        border-color: rgb(81 81 81);\n    }\n}\n\nfigure\n{\n    flex: 1;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    margin: 0;\n    padding: 0;\n    border: solid 1px transparent;\n}\n:host(.selected) figure\n{\n    border-color: inherit;\n}\n\n[part="selected"]\n,::slotted([slot="selected"])\n{\n    grid-column: 1;\n    grid-row: 1;\n\n    justify-self: flex-start;\n    align-self: flex-start;\n    z-index: 2;\n\n    opacity: 0;\n    transition: opacity 200ms ease;\n}\n\n:host(:not([select],[selectable])) [part="selected"]\n,:host(:not([select],[selectable])) ::slotted([slot="selected"])\n{\n    display: none;\n    pointer-events: none;\n}\n\n[part="edit-button"]\n,::slotted([slot="edit-button"])\n{\n    grid-column: 1;\n    grid-row: 1;\n\n    justify-self: flex-end;\n    align-self: flex-start;\n    z-index: 2;\n\n    opacity: 0;\n    transition: opacity 200ms ease;\n}\n\n:host(:not([edit],[editable])) [part="edit-button"]\n,:host(:not([edit],[editable])) ::slotted([slot="edit-button"])\n{\n    display: none;\n    pointer-events: none;\n}\n\n[part="icon"]\n,::slotted([slot="icon"])\n{\n    grid-column: 1;\n    grid-row: 1;\n\n    justify-self: center;\n    align-self: center;\n\n    width: var(--icon-width, var(--icon-size));\n    margin: .25em;\n}\n::slotted(img[slot="icon"])\n{\n    display: block;\n    max-width: 100%;\n    min-width: 0;\n    max-height: 100%;\n    min-height: 0;\n}\n.text-icon\n{\n    font-size: 36px;\n    line-height: 1;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n[part="label"]\n,::slotted([slot="label"])\n{\n    text-align: center;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n:host(:not([select],[selectable]):hover)  [part="edit-button"]\n,:host(:not([select],[selectable]):hover) ::slotted([slot="edit-button"])\n,:host(:focus)  [part="edit-button"]\n,:host(:focus) ::slotted([slot="edit-button"])\n,figure:has(:checked) [part="edit-button"]\n,figure:has(:checked) ::slotted([slot="edit-button"])\n,figure:has(:focus) [part="edit-button"]\n,figure:has(:focus) ::slotted([slot="edit-button"])\n,figure:has(:focus-within) [part="edit-button"]\n,figure:has(:focus-within) ::slotted([slot="edit-button"])\n{ \n    opacity: 1;\n}\n\n\n:host(:hover) [part="selected"]\n,figure:has(:checked) [part="selected"]\n,figure:focus [part="selected"] \n,figure:focus-within [part="selected"]\n{ \n    opacity: 1;\n}';
var captioned_thumbnail_default2 = '<figure part="figure">\n    <slot name="selected"><input type="checkbox" part="selected" /></slot>\n    <slot name="edit-button"><button type="button" part="edit-button">&#9998;</button></slot>\n    <slot name="icon"><span part="icon" class="text-icon">\u{1F5CE}</span></slot>\n    <slot name="label"><figcaption part="label"><slot>Item</slot></figcaption></slot>\n</figure>';
var COMPONENT_STYLESHEET6 = new CSSStyleSheet();
COMPONENT_STYLESHEET6.replaceSync(captioned_thumbnail_default);
var COMPONENT_TAG_NAME6 = "captioned-thumbnail";
var CaptionedThumbnailElement = class _CaptionedThumbnailElement extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  static selectedClassName = "selected";
  get isSelected() {
    return this.classList.contains(_CaptionedThumbnailElement.selectedClassName);
  }
  set isSelected(value) {
    if (this.getAttribute("select") ?? this.getAttribute("selectable") == null) {
      return;
    }
    if (value == true) {
      this.classList.add(_CaptionedThumbnailElement.selectedClassName);
    } else {
      this.classList.remove(_CaptionedThumbnailElement.selectedClassName);
    }
    const selected = this.findPart("selected");
    if (selected != null) {
      selected.checked = value;
    }
  }
  editButton;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = captioned_thumbnail_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET6);
    this.shadowRoot.querySelector("slot:not([name])").addEventListener("slotchange", (event) => {
      let title = "";
      for (let i = 0; i < this.childNodes.length; i++) {
        const node = this.childNodes[i];
        if (node.nodeType == Node.TEXT_NODE) {
          const nodeText = node.textContent?.trim() ?? "";
          if (nodeText != "") {
            title += nodeText;
          }
        }
      }
      this.title = title;
    });
    this.addEventListener("keydown", (event) => {
      if (this.shadowRoot.activeElement == this.findPart("figure") && event.code == "Space") {
        this.isSelected = !this.isSelected;
      }
    });
    this.addEventListener("click", (event) => {
      event.stopPropagation();
      if (this.getAttribute("select") ?? this.getAttribute("selectable") == null) {
        return;
      }
      const selected = this.findPart("selected");
      if (selected != null) {
        const isSelected = this.classList.contains(_CaptionedThumbnailElement.selectedClassName);
        const method = isSelected == selected.checked ? "click" : "input";
        if (isSelected == true) {
          this.classList.remove(_CaptionedThumbnailElement.selectedClassName);
          selected.checked = false;
        } else {
          this.classList.add(_CaptionedThumbnailElement.selectedClassName);
          selected.checked = true;
        }
        const mouseEvent = event;
        this.dispatchEvent(new CustomEvent("change", { bubbles: true, detail: { shiftKey: mouseEvent.shiftKey, ctrlKey: mouseEvent.ctrlKey, method } }));
      }
    });
    const editButtonSlot = this.shadowRoot.querySelector('slot[name="edit-button"]');
    editButtonSlot.addEventListener("slotchange", () => {
      const button = editButtonSlot.assignedElements()[0];
      if (this.editButton == button) {
        return;
      }
      button.addEventListener("click", (event) => {
        this.dispatchEvent(new CustomEvent("edit", { bubbles: true }));
        event.stopPropagation();
        event.preventDefault();
        return false;
      });
      this.editButton = button;
    });
    this.findPart("edit-button")?.addEventListener("click", (event) => {
      this.dispatchEvent(new CustomEvent("edit", { bubbles: true }));
      event.stopPropagation();
      event.preventDefault();
      return false;
    });
  }
  static observedAttributes = ["label", "src", "select", "selectable"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "label") {
      const label = this.findPart("label") ?? this.querySelector(":not([slot])");
      if (label != null) {
        label.textContent = newValue;
        this.title = newValue;
      }
    } else if (attributeName == "src") {
      this.updateImage(newValue);
    } else if (attributeName == "select" || attributeName == "selectable") {
      this.findPart("figure").tabIndex = 0;
    }
  }
  updateImage(source) {
    let icon = this.findPart("icon") ?? this.querySelector('[slot="icon"]');
    if (source == null) {
      if (icon != null) {
        icon.remove();
      }
      icon = document.createElement("span");
      icon.setAttribute("part", "icon");
      icon.classList.add("text-icon");
      icon.textContent = "\u{1F5CE}";
      this.shadowRoot.querySelector('slot[name="icon"]')?.appendChild(icon);
      return;
    }
    if (icon != null && icon.tagName != "img") {
      icon.remove();
      icon = null;
    }
    if (icon == null) {
      icon = document.createElement("img");
      icon.setAttribute("alt", "Icon");
      icon.setAttribute("title", "Icon");
      icon.setAttribute("slot", "icon");
      this.appendChild(icon);
    }
    icon.src = source;
  }
};
if (customElements.get(COMPONENT_TAG_NAME6) == null) {
  customElements.define(COMPONENT_TAG_NAME6, CaptionedThumbnailElement);
}

// components/board-browser/board-browser.ts
var BoardBrowserAttributes = /* @__PURE__ */ ((BoardBrowserAttributes2) => {
  BoardBrowserAttributes2["pathId"] = "path-id";
  return BoardBrowserAttributes2;
})(BoardBrowserAttributes || {});
var COMPONENT_STYLESHEET7 = new CSSStyleSheet();
COMPONENT_STYLESHEET7.replaceSync(`${shared_default}
    ${board_browser_default}`);
var COMPONENT_TEMPLATE4 = `${board_browser_default2}
${defineIcons(
  "TaskBoard" /* TaskBoard */,
  "ConfirmCheck" /* ConfirmCheck */,
  "CancelCross" /* CancelCross */
)}`;
var COMPONENT_TAG_NAME7 = "board-browser";
var BoardBrowserElement = class extends HTMLElement {
  static observedAttributes = [
    ...Object.values(BoardBrowserAttributes)
  ];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  onChange;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE4;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET7);
    this.#applyPartAttributes();
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
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
  updateBoards(boards) {
    const menuItems = [];
    for (let i = 0; i < boards.length; i++) {
      const boardRecord = boards[i];
      const menuItem = this.#createBoardMenuItem(boardRecord);
      menuItems.push(menuItem);
    }
    this.innerHTML = "";
    this.append(...menuItems);
  }
  #createBoardMenuItem(boardRecord) {
    const element = new CaptionedThumbnailElement();
    element.innerHTML = `<svg part="item-icon" slot="icon">
            <use href="#icon-definition_task-board"></use>
        </svg>
        ${boardRecord.name}`;
    element.setAttribute("data-board-id", boardRecord.id);
    element.toggleAttribute("select", true);
    return element;
  }
  static create(properties) {
    const element = document.createElement(COMPONENT_TAG_NAME7);
    for (const [propertyName, value] of Object.entries(properties)) {
      if (!propertyName.startsWith("on")) {
        element.setAttribute(propertyName, value);
      }
    }
  }
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "path-id" /* pathId */) {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME7) == null) {
  customElements.define(COMPONENT_TAG_NAME7, BoardBrowserElement);
}

// components/board-settings/board-settings.css?raw
var board_settings_default = `:host { display: contents; }
#header
{
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 7px;
    align-items: center;
    font-weight: bold;
    padding-block: 5px;
}
#icon
{
    width: var(--dialog-header-icon-size);
    height: var(--dialog-header-icon-size);
}

#form
{
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

#fields
{
    overflow-y: auto;
    flex: 1;

    display: grid;
    gap: 1em;
    padding: 1em;
}

#footer
{
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 7px;
    padding-block: 5px;
}
#cancel
{
    grid-column: 3;
}
#save
{
    grid-column: 4;
}

@media (min-width: 800px) 
{
    :host
    {
        width: 801px;
    }
}


input,select,textarea
{
    font: inherit;
    min-width: 0;
    width: auto;
}

details summary
{
    user-select: none;
    display: inline-flex;
    gap: .25em;
    margin-bottom: 1em;
}
summary:before
{
    content: '\u25B6';
    transform-origin: 45% 50%;
    transition: transform 100ms ease-out;
    font-size: .78em;
    align-self: center;
    margin-right: .25em;
}
details[open] summary:before
{
    transform: rotate(90deg);
}

form-field:not([id^="background-image-offset"]) input[inputmode="numeric"]
{
    width: 5ch;
}

form-field:not([id^="background-image-offset"]) .container
{
    display: flex;
    flex-direction: column;
    gap: .25em;
}

fieldset
{
    display: grid;
    gap: 1em;
    min-width: 0;
    width: auto;
}

fieldset legend
{
    display: flex;
    gap: .25em;
    align-items: center;
}

form-field .label
,form-field .field-label
{
    display: flex;
    gap: .25em;
    align-items: center;
}
form-field .label input
,form-field .field-label input
{
    margin: 0;
}
/* form-field .label [part="text"]
,form-field .field-label [part="text"]
{
    flex: 1;
} */

fileimage-input::part(label)
{
    grid-column: span 2;
    grid-row: 1;
}

fileimage-input::part(field)
{
    display: grid;
    align-items: center;
    justify-items: center;
}

fileimage-input::part(preview)
{
    max-height: 64px;
    height: 100%;
}

fileimage-input::part(clear)
{
    grid-row: 2;
    grid-column: 2;
}

fileimage-input::part(view-link)
{
    grid-row: 2;
    grid-column: 1;
}


#properties
{
    display: flex;
    align-items: center;
    gap: 1em;
    grid-column: span 2;
}

#name-field .container
{
    flex: 1;
}

#appearance-fieldset .container > input
{
    flex: 1;
    min-height: 2ch;
}

#background-image-offset
{
    display: grid;
    gap: .5em;
}

#offset-header
{
    grid-column: span 2;
}

#background-image-offset form-field .container
{
    display: flex;
    gap: .5em;
    align-items: center;
}

#background-image-offset input
{
    flex: 1;
    width: 0;
    min-width: 5ch;
    /* max-width: 10ch; */
}

#lists
{
    grid-column: span 2;
}

#list-items
{
    gap: 1em;
    display: grid;
}

#list-actions
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5em;
    padding: .5em 0;
}

#tasks
{
    grid-column: span 2;
}


#delete-fieldset
{
    grid-template-rows: 1fr auto;
}

#duplicate-fieldset
{
    grid-column: 2;
}

#export-fieldset
{
    grid-column: span 2;
    padding: 1em;
    display: block;
}

#export-actions
{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .5em;
    padding: .5em 0;
}

#export-fieldset form-field .container
{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    gap: .25em;
}

#export-options
{
    display: inline-block;
}

#export-options > header
{
    margin-bottom: 1em;
    border-bottom: solid 2px;
}

#export-fieldset button
{
    margin-left: auto;
    display: block;
}

.icon
{
    width: 18px;
    height: 18px;
}
button .icon
{
    width: 12px;
    height: 12px;
}

#list-items::part(add-button)
{
    display: none;
}

#icon-definitions
{
    display: none;
}`;

// components/board-settings/board-settings.html?raw
var board_settings_default2 = '<form method="dialog" id="form">\n    <header id="header">\n        <svg id="icon" class="icon">\n            <use href="#icon-definition_task-board"></use>\n        </svg>\n        <span id="title">Board</span>\n    </header>\n    <div id="fields">\n        <input type="hidden" name="record-id" id="record-id" />\n        <div id="properties">\n            <form-field label="Color" id="color-field">\n                <input type="color" id="color" name="color" value="#000000" />\n            </form-field>\n            <form-field label="Name" id="name-field">\n                <input type="text" id="name" name="name" value="New Board" />\n            </form-field>\n            <form-field label="Order" id="order-field">\n                <input type="text" id="order" name="order" inputmode="numeric" disabled />\n            </form-field>\n        </div>\n        <fieldset id="appearance-fieldset">\n            <legend id="appearance-legend">\n                <svg id="color-icon" class="icon">\n                    <use href="#icon-definition_color"></use>\n                </svg>\n                <span id="appearance-label">Appearance</span>\n            </legend>\n            <form-field id="background-color-field" label="Background Color" optional optional-title="Override Background Color?">\n                <input type="color" name="background-color" id="background-color" value="#f9faf5" />\n            </form-field>\n            <form-field id="font-color-field" label="Font Color" optional optional-title="Override Font Color?">\n                <input type="color" name="font-color" id="font-color" value="#060703" />\n            </form-field>\n        </fieldset>\n        <fieldset id="image-fieldset">\n            <legend id="image-legend">\n                <svg id="image-icon" class="icon" >\n                    <use href="#icon-definition_image"></use>\n                </svg>\n                <span id="image-label">Background Image</span>\n            </legend>\n            <form-field id="background-image-field" label="Background Image" input-selector="fileimage-input">\n                <fileimage-input name="background-image" id="background-image" placeholder="Select an image...">\n                    <svg id="background-image-icon" class="icon" slot="placeholder-icon">\n                        <use href="#icon-definition_image"></use>\n                    </svg>\n                </fileimage-input>\n            </form-field>\n            <form-field id="background-image-display-field" label="Display">\n                <select id="background-image-display" name="background-image-display">\n                    <option value="stretch">Stretch</option>\n                    <option value="center">Center</option>\n                    <option value="tile">Tile</option>\n                </select>\n            </form-field>\n            <div id="background-image-offset">\n                <div id="offset-header">\n                    <span id="offset-label">Offset</span>\n                </div>\n                <form-field id="background-image-offset-x-field" label="X">\n                    <input type="text" inputmode="numeric" id="background-image-offset-x" name="background-image-offset-x" />\n                </form-field>\n                <form-field id="background-image-offset-y-field" label="Y">\n                    <input type="text" inputmode="numeric" id="background-image-offset-y" name="background-image-offset-y" />\n                </form-field>\n            </div>\n        </fieldset>\n        <details open id="lists">\n            <summary id="lists-summary">\n                <svg id="lists-icon" class="icon">\n                    <use href="#icon-definition_task-list"></use>\n                </svg>\n                <span id="lists-label">Lists<span>\n            </summary>\n            <div id="list-items"><slot><em id="lists-placeholder">No Lists</em></slot></div>\n            <div id="list-actions">\n                <button type="button" id="clear-lists-button" title="Clear All Lists">\n                    <svg id="clear-lists-button-icon" class="icon">\n                        <use href="#icon-definition_trash"></use>\n                    </svg>\n                    <span id="clear-board-lists-label">Clear</span>\n                </button>\n                <button type="button" id="add-list-button">\n                    <svg id="add-list-button-icon" class="icon">\n                        <use href="#icon-definition_plus"></use>\n                    </svg>\n                    <span id="add-list-label">Add List</span>\n                </button>\n            </div>\n        </details>\n        <details id="tasks" open>\n            <summary id="tasks-summary">\n                <svg id="tasks-icon" class="icon">\n                    <use href="#icon-definition_task"></use>\n                </svg>\n                <span id="tasks-label">Task Settings</span>\n            </summary>\n            <task-fields id="task-fields" class="task-fields"></task-fields>\n        </details>\n        <fieldset id="delete-fieldset">\n            <legend id="delete-legend">Delete</legend>\n            <p class="field-question">Delete this board?</p>\n            <button type="submit" id="remove-board-button">\n                <svg id="remove-board-icon" class="icon">\n                    <use href="#icon-definition_trash"></use>\n                </svg>\n                <span id="remove-board-label">Delete</span>\n            </button>\n        </fieldset>\n        <fieldset id="duplicate-fieldset">\n            <legend id="duplicate-legend">Duplicate</legend>\n            <p class="field-question">Duplicate this board?</p>\n            <form-field id="duplicate-board-name-field" label="New Board Name">\n                <input type="text" id="duplicate-board-name" />\n            </form-field>\n            <button type="button" id="duplicate-board-button">\n                <svg id="duplicate-board-icon" class="icon">\n                    <use href="#icon-definition_copy"></use>\n                </svg>\n                <span id="duplicate-board-label">Duplicate</span>\n            </button>\n        </fieldset>\n        <fieldset id="export-fieldset">\n            <legend id="export-legend">Export</legend>\n            <div id="export-options">\n                <header id="export-options-header" class="field-header">Options</header>\n                <form-field id="export-images-field" label="Export Background Image?">\n                    <svg id="export-images-icon" class="icon" slot="prefix">\n                        <use href="#icon-definition_image"></use>\n                    </svg>\n                    <input type="checkbox" id="export-background-image" checked="true">\n                </form-field>\n            </div>\n            <button id="export-button" type="button">\n                <svg id="export-button-icon" class="icon">\n                    <use href="#icon-definition_export"></use>\n                </svg>\n                <span id="export-button-label">Export Board</span>\n            </button>\n        </fieldset>\n    </div>\n    <footer id="footer">\n        <button type="submit" id="close" title="Close Board">\n        <svg id="close-board-icon" class="icon">\n            <use href="#icon-definition_close-cross"></use>\n        </svg>\n        </button>\n        <button type="submit" id="cancel" id="cancel" title="Cancel changes">Cancel</button>\n        <button type="submit" id="save" id="save" title="Save settings">Save</button>\n    </footer>\n</form>\n\n<!-- <form method="dialog" part="board-settings-form">\n    <header part="board-settings-header">\n        <svg part="board-settings-icon" >\n            <use href="#icon-definition_task-board"></use>\n        </svg>\n        <span part="board-settings-title">Board</span>\n    </header>\n    <taskboard-fields part="board-fields" id="board-fields"></taskboard-fields>\n    <footer part="board-settings-footer">\n        <button type="submit" part="close-board-button" id="close-board-button">\n        <svg part="close-board-icon" >\n            <use href="#icon-definition_trash"></use>\n        </svg>\n        </button>\n        <button type="submit" part="board-settings-cancel" id="board-settings-cancel">Cancel</button>\n        <button type="submit" part="board-settings-save" id="board-settings-save">Save</button>\n    </footer>\n</form> -->';

// data/records/task-board.record.ts
var TaskBoardRecord = class extends DataRecord {
  name = "New Board";
  color = "#531CE8";
  order = -1;
  backgroundImageId = "";
  backgroundDisplay = "stretch" /* Stretch */;
  backgroundOffsetX = 0;
  backgroundOffsetY = 0;
  useCustomBackgroundColor = false;
  backgroundColor = "#f9faf5";
  useCustomFontColor = false;
  fontColor = "#060703";
  taskSettingsId = "";
};

// components/board-settings/board-settings.ts
var BoardSettingsAttributes = /* @__PURE__ */ ((BoardSettingsAttributes2) => {
  BoardSettingsAttributes2["pathId"] = "path-id";
  return BoardSettingsAttributes2;
})(BoardSettingsAttributes || {});
var COMPONENT_STYLESHEET8 = new CSSStyleSheet();
COMPONENT_STYLESHEET8.replaceSync(`${shared_default}
    ${board_settings_default}`);
var COMPONENT_TEMPLATE5 = `${board_settings_default2}
${defineIcons(
  "Gear" /* Gear */,
  "Export" /* Export */,
  "PlusIcon" /* PlusIcon */,
  "Image" /* Image */,
  "Color" /* Color */,
  "Task" /* Task */,
  "TaskList" /* TaskList */,
  "TaskBoard" /* TaskBoard */,
  "CloseCross" /* CloseCross */
)}`;
var COMPONENT_TAG_NAME8 = "board-settings";
var BoardSettingsElement = class extends HTMLElement {
  static observedAttributes = [
    ...Object.values(BoardSettingsAttributes)
  ];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  #draggingList = null;
  onNavigate;
  onBoardMove;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE5;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET8);
    this.#applyPartAttributes();
    this.findElement("clear-lists-button").addEventListener("click", () => {
      this.querySelectorAll("tasklist-fields").forEach((item) => item.toggleAttribute("removed", true));
    });
    this.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (this.#draggingList == null || this.#draggingList.tagName.toLowerCase() != "tasklist-fields") {
        return;
      }
      const nextElement = this.getNextListItem(event.clientY).listElement;
      if (this.#draggingList.parentElement == this && nextElement == this.#draggingList.nextElementSibling) {
        return;
      }
      if (nextElement == null) {
        this.append(this.#draggingList);
      } else {
        this.insertBefore(this.#draggingList, nextElement);
      }
    });
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
  }
  // async function boardSettings_ok_onClick(this: TaskboardManagerElement, event: Event)
  // {
  //     await this[SHAREDACCESSKEY].updateBoardSettings();
  //     this[SHAREDACCESSKEY].refreshBoards();
  //     this[SHAREDACCESSKEY].refreshDeletedItems();
  //     const id  =this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id') ?? this[SHAREDACCESSKEY].getIdFromRoute();
  //     if(id == null)
  //     {
  //         MessageCardElement.notify(`An error occurred saving the board settings.`, 
  //         this.getElement('notifications'), { type: MessageCardType.Error });
  //         throw new Error('Unable to determine the target board\'s id');
  //     }
  //     // console.log(id);
  //     this.openBoard(id);
  // }
  // async function boardSettings_remove_onClick(this: TaskboardManagerElement, event: Event)
  // {
  //     const id  =this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id') ?? this[SHAREDACCESSKEY].getIdFromRoute();
  //     if(id == null)
  //     {
  //         MessageCardElement.notify(`An error occurred deleting a board.`, 
  //         this.getElement('notifications'), { type: MessageCardType.Error });
  //         throw new Error('Unable to determine the target board\'s id');
  //     }
  //     this.removeBoard(id);
  // }
  // async function exportBoardButton_onClick(this: TaskboardManagerElement, event: Event)
  // {        
  //     const boardId = this.findElement('board-fields').getAttribute('record-id');
  //     if(boardId == null || boardId == '')
  //     {
  //         MessageCardElement.notify(`An error occurred attempting to export the board.`, 
  //         this.getElement('notifications'), { type: MessageCardType.Error });
  //         throw new Error('Unable to determine the target board\'s id');
  //     }
  //     this.exportBoard(boardId);
  // }
  // function addList_onClick(this: TaskboardManagerElement, event: Event)
  // {
  //     this.addList();
  // }
  // function list_onDuplicate(this: TaskboardManagerElement, event: Event)
  // {
  //     const data = (event as CustomEvent).detail;
  //     this[SHAREDACCESSKEY].duplicateList(data.target, data.list, data.settings);
  // }
  // async function duplicateBoard_onClick(this: TaskboardManagerElement, _event: Event)
  // {
  //     const id = this.findElement<TaskBoardFieldsComponent>('board-fields').getAttribute('record-id');
  //     if(id == null)
  //     {
  //         MessageCardElement.notify(`An error occurred duplicating theboard.`, 
  //         this.getElement('notifications'), { type: MessageCardType.Error });
  //         throw new Error('Unable to determine the target board\'s id');
  //     }
  //     await this.duplicateBoard(id);
  //     this[SHAREDACCESSKEY].refreshBoards();
  // }
  // async function closeBoard_onClick(this: TaskboardManagerElement, _event: Event)
  // {
  //     await this.closeBoardSettings();
  //     this.closeBoard();
  // }
  setValues(board, taskSettings, backgroundImage = null) {
    this.setAttribute("record-id", board.id);
    this.findElement("color").value = board.color;
    this.findElement("name").value = board.name;
    this.findElement("order").value = board.order.toString();
    this.findElement("background-color-field").setAttribute("optional-value", board.useCustomBackgroundColor == true ? "true" : "false");
    this.findElement("background-color").value = board.backgroundColor;
    this.findElement("font-color-field").setAttribute("optional-value", board.useCustomFontColor == true ? "true" : "false");
    this.findElement("font-color").value = board.fontColor;
    this.findElement("background-image-display").value = board.backgroundDisplay;
    this.findElement("background-image-offset-x").value = board.backgroundOffsetX.toString();
    this.findElement("background-image-offset-y").value = board.backgroundOffsetY.toString();
    this.findElement("background-image-offset-y").value = board.backgroundOffsetY.toString();
    if (backgroundImage != null) {
      this.findElement("background-image").value = backgroundImage.image;
    } else {
      this.findElement("background-image").value = null;
    }
    this.findElement("task-fields").setValues(taskSettings);
  }
  setLists(taskLists, taskLists_TaskSettings) {
    this.innerHTML = "";
    if (taskLists.length == 0) {
      return;
    }
    const listElements = [];
    for (let i = 0; i < taskLists.length; i++) {
      const taskList = taskLists[i];
      if (taskList.deletedTimestamp != void 0) {
        continue;
      }
      const taskSettings = taskLists_TaskSettings.find((item) => item.id == taskList.taskSettingsId);
      if (taskSettings == null) {
        throw new Error("Unable to load list settings");
      }
      const taskListElement = this.createList(taskList, taskSettings);
      listElements.push(taskListElement);
    }
    this.append(...listElements);
  }
  addList(taskList, taskSettings) {
    const list = this.createList(taskList, taskSettings);
    this.append(list);
  }
  insertList(afterTarget, taskList, taskSettings) {
    const list = this.createList(taskList, taskSettings);
    if (afterTarget.nextElementSibling == null) {
      this.append(list);
    } else {
      this.insertBefore(list, afterTarget.nextElementSibling);
    }
  }
  createList(taskList, taskSettings) {
    const taskListElement = new TaskListFieldsComponent();
    if (taskSettings == null) {
      throw new Error("Unable to load list settings");
    }
    taskListElement.setValues(taskList, taskSettings);
    taskListElement.addEventListener("duplicate", (event) => {
      const [list, settings] = taskListElement.getRecords();
      this.dispatchEvent(new CustomEvent("duplicate", { detail: { target: taskListElement, list, settings } }));
    });
    const handle = taskListElement.findPart("handle");
    handle.addEventListener("mousedown", (_event) => {
      taskListElement.draggable = true;
    });
    handle.addEventListener("mouseup", (_event) => {
      taskListElement.removeAttribute("draggable");
    });
    taskListElement.addEventListener("dragstart", (_event) => {
      this.#draggingList = taskListElement;
      taskListElement.classList.add("dragging");
      this.classList.add("drop-target");
    });
    taskListElement.addEventListener("dragend", (_event) => {
      taskListElement.classList.remove("dragging");
      this.#draggingList = null;
      this.classList.remove("drop-target");
    });
    return taskListElement;
  }
  getRecords() {
    const board = new TaskBoardRecord();
    board.id = this.getAttribute("record-id");
    board.color = this.findElement("color").value;
    board.name = this.findElement("name").value;
    board.useCustomBackgroundColor = this.findElement("background-color-field").getAttribute("optional-value") == "true";
    board.backgroundColor = this.findElement("background-color").value;
    board.useCustomFontColor = this.findElement("font-color-field").getAttribute("optional-value") == "true";
    board.fontColor = this.findElement("font-color").value;
    board.backgroundDisplay = this.findElement("background-image-display").value;
    board.backgroundOffsetX = parseInt(this.findElement("background-image-offset-x").value);
    board.backgroundOffsetY = parseInt(this.findElement("background-image-offset-y").value);
    const boardTaskSettings = this.findElement("task-fields").getRecord();
    boardTaskSettings.parentRecordType = "board";
    board.taskSettingsId = this.findElement("task-fields").getAttribute("record-id");
    const listFields = [...this.querySelectorAll("tasklist-fields")];
    const lists = [];
    const toRemove = [];
    const taskSettings = [boardTaskSettings];
    for (let i = 0; i < listFields.length; i++) {
      const element = listFields[i];
      if (element.hasAttribute("removed")) {
        const recordId = element.getAttribute("record-id");
        if (recordId == null) {
          console.error("Unable to remove TaskList: record id attribute is unset.");
          continue;
        }
        toRemove.push(recordId);
        continue;
      }
      const [list, taskSettingsRecord] = element.getRecords();
      list.boardId = board.id;
      list.order = i;
      lists.push(list);
      taskSettings.push(taskSettingsRecord);
    }
    const records = [board, lists, taskSettings, toRemove];
    return records;
  }
  getNextListItem(mouseY) {
    const lists = [...this.querySelectorAll("tasklist-fields:not(.dragging)")];
    return lists.reduce((closest, item) => {
      const boundingRect = item.getBoundingClientRect();
      const offset = mouseY - boundingRect.top - boundingRect.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, listElement: item };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY });
  }
  static create(properties) {
    const element = document.createElement(COMPONENT_TAG_NAME8);
    for (const [propertyName, value] of Object.entries(properties)) {
      if (!propertyName.startsWith("on")) {
        element.setAttribute(propertyName, value);
      }
    }
  }
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "path-id" /* pathId */) {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME8) == null) {
  customElements.define(COMPONENT_TAG_NAME8, BoardSettingsElement);
}

// components/config-panel/config-panel.css?raw
var config_panel_default = ':host\n{\n    display: grid;\n    grid-template-rows: auto auto 1fr auto;\n    overflow: hidden;\n}\n\n#header\n{\n    margin-bottom: 20px;\n}\n\n#icon\n{\n    width: var(--dialog-header-icon-size);\n    height: var(--dialog-header-icon-size);\n}\n.icon\n{\n    width: var(--tab-icon-size);\n    height: var(--tab-icon-size);\n}\n\n#navigation\n{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    background-color: field;\n    color: fieldtext;\n    border: solid 1px graytext;\n    border-radius: 2px;\n    margin-bottom: 20px;\n    user-select: none;\n}\n\n.nav-item\n{\n    --tab-icon-size: 14px;\n    padding: 7px 12px;\n    display: flex;\n    align-items: center;\n    gap: 7px;\n}\n\n@media (max-width: 665px) \n{\n    #navigation\n    {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr;\n    }\n\n    .nav-item\n    {\n        justify-content: center;\n    }\n}\n\n.nav-item[aria-current="page"]\n,.nav-item:hover\n{\n    background-color: highlight;\n    color: highlighttext;\n}\n\n#router\n{\n    overflow: hidden;\n}\n.page\n{\n    overflow-y: auto;\n    display: grid;\n}\n\n\n#actions\n{\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    gap: 10px;\n    padding-block-start: 10px;\n}\n\n.button\n{\n    width: 75px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#cancel\n{\n    grid-column: 2;\n}\n#ok\n{\n    grid-column: 3;\n}';

// components/config-panel/config-panel.html?raw
var config_panel_default2 = '<header id="header">\n    <svg id="icon" >\n        <use href="#icon-definition_gear"></use>\n    </svg>\n    <span id="title">Configuration</span>\n</header>\n<menu id="navigation">\n    <a data-route="#config/settings" class="nav-item">\n        <svg id="settings-route-icon" class="icon">\n            <use href="#icon-definition_gear"></use>\n        </svg>\n        <span>Settings</span>\n    </a>\n    <a data-route="#config/data" class="nav-item">\n        <svg id="data-route-icon" class="icon">\n            <use href="#icon-definition_data"></use>\n        </svg>\n        <span>Data</span>\n    </a>\n    <a data-route="#config/history" class="nav-item">\n        <svg id="history-route-icon" class="icon">\n            <use href="#icon-definition_clock"></use>\n        </svg>\n        <span>History</span>\n    </a>\n    <a data-route="#config/about" class="nav-item">\n        <svg id="about-route-icon" class="icon">\n            <use href="#icon-definition_info"></use>\n        </svg>\n        <span>About</span>\n    </a>\n</menu>\n<path-router id="router" path="settings">\n    <route-page path="settings" id="settings-page" class="page">\n        <settings-panel id="settings-panel" exportparts="key">\n            <slot name="custom-settings" slot="custom-settings"></slot>\n        </settings-panel>\n    </route-page>\n    <route-page path="data" id="data-page" class="page">\n        <data-panel id="data-panel"></data-panel>\n    </route-page>\n    <route-page path="history" id="history-page" class="page">\n        <history-panel id="history-panel"></history-panel>\n    </route-page>\n    <route-page path="about" id="about-page" class="page">\n        <about-panel id="about-panel"></about-panel>\n    </route-page>\n</path-router>\n<footer id="footer">\n    <form id="actions" method="dialog">\n        <button type="submit" id="cancel" class="button">Cancel</button>\n        <button type="submit" id="ok" class="button">Ok</button>\n    </form>\n</footer>';

// components/config-panel/settings-panel/settings-panel.css?raw
var settings_panel_default = "\n\n:host\n{\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n    gap: 7px;\n    flex: 1;\n}\n#header\n{\n    font-size: 14px;\n    font-weight: bold;\n}\n\n#custom-settings-fieldset\n{\n    color: graytext;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.key\n{\n    background-color: #eee;\n    border-radius: 3px;\n    border: 1px solid #b4b4b4;\n    box-shadow:\n    0 1px 1px rgba(0, 0, 0, 0.2),\n    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;\n    color: #333;\n    display: inline-block;\n    font-size: 0.85em;\n    font-weight: 700;\n    line-height: 1;\n    padding: 2px 4px;\n    white-space: nowrap;\n    padding-block: 5px;\n    margin-block: 3px;\n}";

// components/config-panel/settings-panel/settings-panel.html?raw
var settings_panel_default2 = '\n<header id="header">App Settings</header>\n<fieldset id="color-scheme-fieldset">\n    <legend id="color-scheme-legend">Color Scheme</legend>\n    <div class="button-group" id="scheme-options">\n        <button class="button scheme" id="inherit-button" data-value="inherit">Inherit</button>\n        <button class="button scheme" id="browser-button" data-value="browser">Browser</button>\n        <button class="button scheme" id="light-button" data-value="light">Light</button>\n        <button class="button scheme" id="dark-button" data-value="dark">Dark</button>\n    </div>\n</fieldset>\n<fieldset id="custom-settings-fieldset">\n    <legend id="custom-settings-legend"><slot name="custom-settings-legend">Custom Settings</slot></legend>\n    <slot name="custom-settings">[ No Custom Settings ]</slot>\n</fieldset>\n<fieldset id="hotkeys-fieldset">\n    <legend id="hotkeyss-legend">Hot Keys</legend>\n    <dl id="hotkeys-list">\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Arrow Left</kbd></dt>\n        <dd class="hotkey-description">Move text cursor to previous word.</dd>\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Arrow Right</kbd></dt>\n        <dd class="hotkey-description">Move text cursor to next word.</dd>\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Arrow Up</kbd></dt>\n        <dd class="hotkey-description">Move text cursor to closest word in previous line.</dd>\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Arrow Down</kbd></dt>\n        <dd class="hotkey-description">Move text cursor to closest word in next line.</dd>\n\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Shift</kbd> + <kbd class="key">Arrow Left</kbd></dt>\n        <dd class="hotkey-description">Highlight from the current cursor position to the start of the previous word.</dd>\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Shift</kbd> + <kbd class="key">Arrow Right</kbd></dt>\n        <dd class="hotkey-description">Highlight from the current cursor position to the end of the next word.</dd>\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Shift</kbd> + <kbd class="key">Arrow Up</kbd></dt>\n        <dd class="hotkey-description">Highlight from the current cursor position to the closest position in the previous line.</dd>\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Shift</kbd> + <kbd class="key">Arrow Down</kbd></dt>\n        <dd class="hotkey-description">Highlight from the current cursor position to the closest position in the next line.</dd>\n\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Alt</kbd> + <kbd class="key">Arrow Left</kbd></dt>\n        <dd class="hotkey-description">Move to the task in the previous list.</dd>\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Alt</kbd> + <kbd class="key">Arrow Right</kbd></dt>\n        <dd class="hotkey-description">Move to the task in the previous list.</dd>\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Alt</kbd> + <kbd class="key">Arrow Up</kbd></dt>\n        <dd class="hotkey-description">Move to the task in the previous list.</dd>\n        <dt class="hotkey-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Alt</kbd> + <kbd class="key">Arrow Down</kbd></dt>\n        <dd class="hotkey-description">Move to the task in the previous list.</dd>\n    </dl>\n</fieldset>';

// components/config-panel/settings-panel/settings-panel.ts
var SettingsPanelAttributes = /* @__PURE__ */ ((SettingsPanelAttributes2) => {
  SettingsPanelAttributes2["pathId"] = "path-id";
  return SettingsPanelAttributes2;
})(SettingsPanelAttributes || {});
var COMPONENT_STYLESHEET9 = new CSSStyleSheet();
COMPONENT_STYLESHEET9.replaceSync(`${shared_default}
    ${settings_panel_default}`);
var COMPONENT_TEMPLATE6 = `${settings_panel_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "MagnifyingGlass" /* MagnifyingGlass */,
  "Gear" /* Gear */,
  "PlusIcon" /* PlusIcon */
)}`;
var COMPONENT_TAG_NAME9 = "settings-panel";
var SettingsPanelElement = class extends HTMLElement {
  static observedAttributes = [
    ...Object.values(SettingsPanelAttributes)
  ];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  onEdit;
  onBoardMove;
  onNew;
  #draggingBoard = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE6;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET9);
    this.#applyPartAttributes();
    const schemeOptions = [...this.findElement("scheme-options").querySelectorAll("button")];
    for (let i = 0; i < schemeOptions.length; i++) {
      schemeOptions[i].addEventListener("click", this.#colorSchemeButton_onClick.bind(this));
    }
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
  }
  #colorSchemeButton_onClick(event) {
    const scheme = event.target.dataset.value;
    if (scheme == null) {
      const message = `An error occurred attempting to set the app's color scheme. Scheme was not changed.`;
      const consoleMessage = "Scheme value was undefined.";
      this.dispatchEvent(new CustomEvent("error", { detail: { message, consoleMessage }, bubbles: true, composed: true }));
      return;
    }
    if (scheme != "inherit" && scheme != "browser" && scheme != "light" && scheme != "dark") {
      const message = `An error occurred attempting to set the app's color scheme. Scheme was not changed.`;
      const consoleMessage = "Scheme value was not recognized as a valid scheme.";
      this.dispatchEvent(new CustomEvent("error", { detail: { message, consoleMessage }, bubbles: true, composed: true }));
      return;
    }
    this.dispatchEvent(new CustomEvent("scheme", { detail: { scheme }, bubbles: true, composed: true }));
  }
  static create(properties) {
    const element = document.createElement(COMPONENT_TAG_NAME9);
    for (const [propertyName, value] of Object.entries(properties)) {
      if (!propertyName.startsWith("on")) {
        element.setAttribute(propertyName, value);
      }
    }
  }
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "path-id" /* pathId */) {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME9) == null) {
  customElements.define(COMPONENT_TAG_NAME9, SettingsPanelElement);
}

// components/config-panel/data-panel/data-panel.css?raw
var data_panel_default = ':host\n{\n    display: grid;\n    gap: 7px;\n}\n\n\n#header\n{\n    font-size: 14px;\n    font-weight: bold;\n}\n\n\n#deleted-items [data-restore="false"]\n{\n    scale: .98 .9;\n    opacity: .5;\n    pointer-events: none;\n}\n\n[to-delete]\n{\n    text-decoration: line-through;\n    color: #444;\n}\n\n#import-fieldset\n{\n    display: flex;\n    gap: 7px;\n}\n\n#import-field .container\n{\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 7px;\n}\n\n#import-board-file\n{\n    flex: 1;\n}\n\n#import-content\n{\n    overflow: hidden;\n    padding: 1em;\n    display: flex;\n}\n\n#import-manager\n{\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n#import-actions\n{\n    display: grid;\n    grid-template-columns: 1fr auto auto;\n    gap: 7px;\n}\n\n#import-cancel\n{\n    grid-column: 2;\n}\n\n#import-ok\n{\n    grid-column: 3;\n}\n\n#config-data-caches\n{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 7px;\n}\n\n#data-cleanup-fieldset\n{\n    display: grid;\n    grid-template-rows: max-content 1fr max-content;\n    gap: 7px;\n}\n\n#data-cleanup-range .container\n{\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    align-self: flex-end;\n}\n#data-persist-days\n{\n    flex: 1;\n}\n\n#apply-data-persist-days-button\n{\n    justify-self: flex-end;\n}\n\n#data-pending-fieldset\n,#image-cache-fieldset\n{\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    gap: 7px;\n}\n\n#deleted-items\n,#deleted-images\n{\n    display: grid;\n    background: field;\n    border-radius: 2px;\n    border: 1px solid graytext;\n    color: fieldtext;\n    height: 130px;\n    overflow: auto;\n    margin: 0;\n    padding: 0;\n    align-self: flex-end;\n}\n#deleted-item\n{\n    display: flex;\n    align-items: center;\n    padding: 3px 7px;\n}\n#deleted-item-label\n{\n    flex: 1;\n    gap: 5px;\n}\n\n#deleted-items::part(add)\n,#deleted-images::part(add)\n{\n    display: none;\n}\n\n#clear-deleted-button\n,#clear-image-cache-button\n{\n    justify-self: flex-end;\n}\n\n#data-clear-fieldset\n{\n    display: grid;\n    gap: 7px;\n}\n\n#clear-data-button\n{\n    justify-self: flex-end;\n}\n@media (max-width: 665px) \n{\n\n    #import-fieldset\n    {\n        flex-direction: column;\n    }\n    #import-field .container\n    {\n        flex-direction: column;\n        align-items: stretch;\n    }\n    #import-button\n    {\n        align-self: flex-end;\n    }\n    #config-data-caches\n    {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: 7px;\n    }\n}';

// components/config-panel/data-panel/data-panel.html?raw
var data_panel_default2 = '\n<header id="header">Data</header>\n<fieldset id="import-fieldset" class="fieldset">\n    <legend id="import-legend" class="legend">Import</legend>\n    <form-field id="import-field" class="field" label="Taskboard Data File" input-selector="fileimage-input">\n        <fileimage-input id="import-board-file" class="input">\n            <svg slot="icon" part="import-file-icon" class="icon">\n                <use href="#icon-definition_file"></use>\n            </svg>\n        </fileimage-input>\n    </form-field>\n    <button id="import-button" class="button">\n        <svg id="import-button-icon" class="icon">\n            <use href="#icon-definition_import"></use>\n        </svg>\n        <span id="import-button-label">Import Board</span>\n    </button>\n</fieldset>\n<div id="config-data-caches">\n    <fieldset id="data-cleanup-fieldset" class="fieldset">\n        <legend id="data-cleanup-legend" class="legend">Data Cleanup</legend>\n        <div id="data-cleanup-description">\n            <p class="text">Deleted items persist in the data store in order to enable Undo and Redo functionality.</p>\n            <p class="text">Set how many days deleted item should perisist using the slider below.</p>\n        </div>\n        <form-field label="Days" id="data-cleanup-range" class="field">\n            <input type="range" id="data-persist-days" class="input" max="30" list="data-persist-days-values" />\n            <datalist id="data-persist-days-values"></datalist>\n            <span slot="postfix" id="data-persist-days-value"></span>\n            <button slot="postfix" id="apply-data-persist-days-button" class="button">\n                <svg id="apply-data-persist-days-icon" class="icon">\n                    <use href="#icon-definition_confirm-check"></use>\n                </svg>\n                <span id="apply-data-persist-days-label">Apply</span>\n            </button>\n        </form-field>\n    </fieldset>\n    <fieldset id="data-pending-fieldset" class="fieldset">\n        <legend id="data-pending-legend" class="legend">Pending Cleanup</legend>\n        <div id="data-pending-description">\n            <p class="text">The following items have been deleted and will be purged from the data store after the configured cleanup days.</p>\n        </div>\n        <editable-list id="deleted-items" exportparts="remove:restore-item-button">\n            <template part="remove-button">\n                <svg id="restore-item-icon" class="icon" title="Restore">\n                    <use href="#icon-definition_restore"></use>\n                </svg>\n            </template>\n        </editable-list>\n        <button id="clear-deleted-button" class="button">\n            <svg id="clear-deleted-icon" class="icon" title="Clear">\n                <use href="#icon-definition_trash"></use>\n            </svg>\n            <span id="clear-deleted-label">Clear Pending Items</span>\n        </button>\n    </fieldset>\n    <fieldset id="image-cache-fieldset" class="fieldset">\n        <legend id="image-cache-legend" class="legend">Image Cache</legend>\n        <div id="image-cache-description">\n            <p class="text">Caching some image files provides undo and redo support.</p>\n            <p class="text">The images below have been deleted, but will not be automatically removed until they reach the expiration limit.</p>\n        </div>\n        <editable-list id="deleted-images" exportparts="remove:delete-cached-image-button"></editable-list>\n        <button id="clear-image-cache-button" class="button">\n            <svg id="clear-images-icon" title="Clear">\n                <use href="#icon-definition_trash"></use>\n            </svg>\n            <span id="clear-images-label">Clear Image Cache</span>\n        </button>\n    </fieldset>\n</div>\n<fieldset id="data-clear-fieldset" class="fieldset">\n    <legend id="data-clear-legend" class="legend">Clear Data</legend>\n    <div id="data-clear-description">\n        <p class="text">Delete all data, including app settings and history.</p>\n    </div>\n    <button id="clear-data-button" class="button">\n        <svg id="clear-data-icon" class="icon" title="Clear">\n            <use href="#icon-definition_trash"></use>\n        </svg>\n        <span id="clear-data-label">Clear All Data</span>\n    </button>\n</fieldset>';

// data/history/history-entry-data.ts
var HistoryEntryData = class {
  targetType;
  properties;
  constructor(targetType, properties) {
    this.targetType = targetType;
    this.properties = properties;
  }
};

// components/config-panel/data-panel/data-panel.ts
var DaysToPersistValues = /* @__PURE__ */ new Set([0, 7, 30]);
var DataPanelAttributes = /* @__PURE__ */ ((DataPanelAttributes2) => {
  DataPanelAttributes2["pathId"] = "path-id";
  return DataPanelAttributes2;
})(DataPanelAttributes || {});
var COMPONENT_STYLESHEET10 = new CSSStyleSheet();
COMPONENT_STYLESHEET10.replaceSync(`${shared_default}
    ${data_panel_default}`);
var COMPONENT_TEMPLATE7 = `${data_panel_default2}
${defineIcons(
  "File" /* File */,
  "Import" /* Import */,
  "Trash" /* Trash */,
  "Restore" /* Restore */,
  "ConfirmCheck" /* ConfirmCheck */
)}`;
var COMPONENT_TAG_NAME10 = "data-panel";
var DataPanelElement = class extends HTMLElement {
  static observedAttributes = [
    ...Object.values(DataPanelAttributes)
  ];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  onEdit;
  onBoardMove;
  onNew;
  #draggingBoard = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE7;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET10);
    this.#applyPartAttributes();
    this.findElement("import-button").addEventListener("click", this.#importButton_onClick.bind(this));
    this.findElement("data-persist-days").addEventListener("change", this.#daysToPersist_onChange.bind(this));
    this.findElement("apply-data-persist-days-button").addEventListener("click", this.#applyDaysToPersist_onClick.bind(this));
    this.findElement("clear-data-button").addEventListener("click", this.#clearData_onClick.bind(this));
    this.findElement("deleted-items").addEventListener("remove", this.#deletedItems_onRemove.bind(this));
    this.findElement("clear-deleted-button").addEventListener("click", this.#clearDeleted_onClick.bind(this));
    this.findElement("deleted-images").addEventListener("remove", this.#deletedImages_onRemove.bind(this));
    this.findElement("clear-image-cache-button").addEventListener("click", this.#clearImageCache_onClick.bind(this));
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
  }
  async #importButton_onClick(_event) {
    const importFileInput = this.findElement("import-board-file");
    const boardDataFile = importFileInput.files != null ? importFileInput.files[0] : null;
    if (boardDataFile == null) {
      const message = `An error occurred attempting to import board data. Confirm that the selected import file is a valid board export.`;
      const consoleMessage = "Unable to import selected file.";
      this.dispatchEvent(new CustomEvent("error", { detail: { message, consoleMessage }, bubbles: true, composed: true }));
      return;
    }
    const boardDataText = await boardDataFile.text();
    const boardData = JSON.parse(boardDataText);
    this.dispatchEvent(new CustomEvent("import", { detail: { boardData }, bubbles: true, composed: true }));
  }
  #daysToPersist_onChange(event) {
    const dataPersistsDaysValues = Array.from(DaysToPersistValues);
    const input = event.target;
    this.#snapToStep(input, dataPersistsDaysValues);
    this.findElement("data-persist-days-value").textContent = input.value;
  }
  #applyDaysToPersist_onClick(_event) {
    this.dispatchEvent(new CustomEvent("daystopersist", { detail: { daysToPersist: this.findElement("data-persist-days").value }, bubbles: true, composed: true }));
  }
  #clearData_onClick(_event) {
    this.dispatchEvent(new CustomEvent("cleardata", { bubbles: true, composed: true }));
  }
  #deletedItems_onRemove(event) {
    const item = event.detail;
    const recordType = item.dataset.recordType;
    const recordId = item.dataset.recordId;
    const timestamp = item.getAttribute("data-timestamp");
    const targetType = recordType == "board" ? "board" /* Board */ : recordType == "list" ? "list" /* List */ : recordType == "task" ? "task" /* Task */ : null;
    this.dispatchEvent(new CustomEvent("restoreitem", { detail: { targetType, recordId, timestamp }, bubbles: true, composed: true }));
  }
  async #clearDeleted_onClick(_event) {
    const items = [...this.findElement("deleted-items").querySelectorAll('[data-record-id]:not([data-restore="false"])')];
    this.dispatchEvent(new CustomEvent("cleardeleted", { detail: { items }, bubbles: true, composed: true }));
  }
  #deletedImages_onRemove(event) {
    const item = event.detail;
    this.dispatchEvent(new CustomEvent("deleteimage", { detail: { item }, bubbles: true, composed: true }));
  }
  async #clearImageCache_onClick(_event) {
    const items = [...this.findElement("deleted-images").querySelectorAll("[data-record-id]")];
    this.dispatchEvent(new CustomEvent("clearimages", { detail: { items }, bubbles: true, composed: true }));
  }
  #snapToStep(target, steps) {
    const inputValue = parseFloat(target.value);
    for (let i = 1; i < steps.length; i++) {
      const value = steps[i];
      const lastValue = steps[i - 1];
      const distanceFromValue = Math.abs(value - inputValue);
      const distanceFromLastValue = Math.abs(lastValue - inputValue);
      const isCloserToNewValue = Math.min(distanceFromValue, distanceFromLastValue) == distanceFromValue;
      if (isCloserToNewValue) {
        target.value = value.toString();
      } else {
        target.value = lastValue.toString();
        break;
      }
    }
  }
  static create(properties) {
    const element = document.createElement(COMPONENT_TAG_NAME10);
    for (const [propertyName, value] of Object.entries(properties)) {
      if (!propertyName.startsWith("on")) {
        element.setAttribute(propertyName, value);
      }
    }
  }
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "path-id" /* pathId */) {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME10) == null) {
  customElements.define(COMPONENT_TAG_NAME10, DataPanelElement);
}

// components/config-panel/history-panel/history-panel.css?raw
var history_panel_default = ":host\n{\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    gap: 7px;\n}\n\n#header\n{\n    font-size: 14px;\n    font-weight: bold;\n}\n\n#history-length-fieldset\n{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex: 1;\n}\n\n#history-length-field .container\n{\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    flex: 1;\n}\n\n#action-history-length\n{\n    flex: 1;\n}\n\n#navigation\n{\n    display: grid;\n    grid-template-columns: auto auto 1fr auto;\n    grid-template-rows: auto 1fr;\n    gap: 7px;\n    overflow: hidden;\n}\n#clear-history-button\n{\n    grid-column: 4;\n    white-space: nowrap;\n}\n#action-history\n{\n    grid-column: span 4;\n    background: field;\n    border-radius: 2px;\n    border: 1px solid graytext;\n    color: fieldtext;\n    overflow: auto;\n    flex: 1;\n}\n.action-history-entry\n{\n    padding: 3px 7px;\n    border-radius: 2px;\n}\n.action-history-entry:hover\n{\n    background-color: rgb(0 0 0 / .3);\n}\n@media (max-width: 665px) \n{\n    #action-history-length\n    {\n        width: 50px;\n    }\n}";

// components/config-panel/history-panel/history-panel.html?raw
var history_panel_default2 = '\n<header id="header">History</header>\n<fieldset id="navigation">\n    <legend id="navigation-legend">Navigation</legend>\n    <button id="undo" class="button">\n        <svg id="restore-item-icon" class="icon" title="Undo">\n            <use href="#icon-definition_undo-redo"></use>\n        </svg>\n        <span part="undo-label">Undo</span>\n    </button>\n    <button id="redo" class="button">\n        <svg id="restore-item-icon" class="icon" title="Redo" style="transform: scaleX(-1);">\n            <use href="#icon-definition_undo-redo"></use>\n        </svg>\n        <span id="redo-label">Redo</span>\n    </button>\n    <button id="clear-history-button" class="button">\n        <svg id="clear-history-icon" class="icon" title="Clear">\n            <use href="#icon-definition_trash"></use>\n        </svg>\n        <span id="clear-history-label">Clear History</span>\n    </button>\n    <action-history id="action-history" reverse></action-history>\n</fieldset>\n<fieldset id="history-length-fieldset">\n    <legend id="history-length-legend">History Length</legend>\n    <form-field id="history-length-field">\n        <input type="range" id="action-history-length" max="150" list="action-history-length-values" />\n        <datalist id="action-history-length-values"></datalist>\n        <span slot="postfix" id="action-history-length-value"></span>\n        <button slot="postfix" id="apply-history-length-button">\n            <svg id="apply-history-length-icon" class="icon">\n                <use href="#icon-definition_confirm-check"></use>\n            </svg>\n            <span id="apply-history-length-label">Apply</span>\n        </button>\n    </form-field>\n</fieldset>';

// components/config-panel/history-panel/history-panel.ts
var HistoryPanelAttributes = /* @__PURE__ */ ((HistoryPanelAttributes2) => {
  HistoryPanelAttributes2["pathId"] = "path-id";
  return HistoryPanelAttributes2;
})(HistoryPanelAttributes || {});
var COMPONENT_STYLESHEET11 = new CSSStyleSheet();
COMPONENT_STYLESHEET11.replaceSync(`${shared_default}
    ${history_panel_default}`);
var COMPONENT_TEMPLATE8 = `${history_panel_default2}
${defineIcons(
  "ConfirmCheck" /* ConfirmCheck */,
  "UndoRedo" /* UndoRedo */,
  "Trash" /* Trash */
)}`;
var COMPONENT_TAG_NAME11 = "history-panel";
var HistoryPanelElement = class extends HTMLElement {
  static observedAttributes = [
    ...Object.values(HistoryPanelAttributes)
  ];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  onEdit;
  onBoardMove;
  onNew;
  #draggingBoard = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE8;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET11);
    this.#applyPartAttributes();
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
  }
  // function history_undo_onClick(this: TaskboardManagerElement, _event: Event)
  // {
  //     this.undo();
  // }
  // function history_redo_onClick(this: TaskboardManagerElement, _event: Event)
  // {
  //     this.redo();
  // }
  // async function actionHistory_onBack(this: TaskboardManagerElement, target: HTMLElement, previous: HTMLElement|undefined, all: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
  // {
  //     await this[SHAREDACCESSKEY].handleActionEntryReverse(target, previous, targetIndex, previousActiveEntryIndex);
  //     const isLastUpdate = all.indexOf(target) == all.length - 1;
  //     if(isLastUpdate == true)
  //     {
  //         const recordType = target.querySelector('.target-type')?.textContent?.toLowerCase();
  //         if(recordType == 'board')
  //         {
  //             this[SHAREDACCESSKEY].refreshBoards();
  //         }
  //         const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
  //         if(currentBoardId != "")
  //         {
  //             this[SHAREDACCESSKEY].renderBoard(currentBoardId);
  //         }
  //         this[SHAREDACCESSKEY].refreshDeletedItems();
  //     }
  // }
  // async function actionHistory_onForward(this: TaskboardManagerElement, target: HTMLElement, previous: HTMLElement|undefined, all: HTMLElement[], targetIndex: number, previousActiveEntryIndex: number)
  // {
  //     await this[SHAREDACCESSKEY].handelActionEntryActivate(target, previous, targetIndex, previousActiveEntryIndex);
  //     const isLastUpdate = all.indexOf(target) == all.length - 1;
  //     if(isLastUpdate == true)
  //     {
  //         const recordType = target.querySelector('.target-type')?.textContent?.toLowerCase();
  //         if(recordType == 'board')
  //         {
  //             this[SHAREDACCESSKEY].refreshBoards();
  //         }
  //         const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
  //         if(currentBoardId != "")
  //         {
  //             this[SHAREDACCESSKEY].renderBoard(currentBoardId);
  //         }
  //         this[SHAREDACCESSKEY].refreshDeletedItems();
  //     }
  // }
  // async function historyLength_onChange(this: TaskboardManagerElement, event: Event)
  // {
  //     const input = event.target as HTMLInputElement;
  //     this[SHAREDACCESSKEY].snapToStep(input, this[SHAREDACCESSKEY].HistoryLengthSteps);
  //     this.findElement('action-history-length-value').textContent = input.value;
  //     this[SHAREDACCESSKEY].prepareHistoryEntries();
  // }
  // async function applyHistoryLength_onClick(this: TaskboardManagerElement, _event: Event)
  // {
  //     this[SHAREDACCESSKEY].applyHistoryLength();
  // }
  // function clearHistory_onClick(this: TaskboardManagerElement, _event: Event)
  // {
  //     this.clearHistory();
  // }
  updateBoards(boards) {
    const menuItems = [];
    for (let i = 0; i < boards.length; i++) {
      const boardRecord = boards[i];
      const menuItem = this.#createBoardMenuItem(boardRecord);
      menuItems.push(menuItem);
    }
    this.innerHTML = "";
    this.append(...menuItems);
  }
  #createBoardMenuItem(board) {
    const element = document.createElement("a");
    element.innerHTML = `<span part="menu-item-handle" class="menu-item-handle"></span>
        <span part="board-item-name" class="board-item-name">${board.name}<span>`;
    element.setAttribute("part", "board");
    element.classList.add("board");
    element.dataset.route = `board/${board.id}`;
    const handle = element.querySelector('[part="menu-item-handle"]');
    handle.addEventListener("mousedown", (_event) => {
      element.draggable = true;
    });
    handle.addEventListener("mouseup", (_event) => {
      element.removeAttribute("draggable");
    });
    element.addEventListener("dragstart", (_event) => {
      this.#draggingBoard = element;
      element.classList.add("dragging");
      this.classList.add("drop-target");
    });
    element.addEventListener("dragend", (_event) => {
      element.classList.remove("dragging");
      this.#draggingBoard = null;
      this.classList.remove("drop-target");
    });
    return element;
  }
  #addDragHandlers() {
    this.addEventListener("dragover", this.boardsList_onDragover.bind(this));
    this.addEventListener("drop", this.boardsList_onDrop.bind(this));
  }
  boardsList_onDragover(event) {
    event.preventDefault();
    event.stopPropagation();
    this.#updateBoardItemOrder(event.clientY);
  }
  async boardsList_onDrop(_event) {
    console.log(_event);
    if (this.onBoardMove != null) {
      this.onBoardMove([...this.querySelectorAll("a")]);
    }
  }
  async #updateBoardItemOrder(draggingCursorY) {
    if (this.#draggingBoard == null) {
      return;
    }
    const nextElement = this.#getNextBoardItem(draggingCursorY).boardElement;
    if (this.#draggingBoard.parentElement == this && nextElement == this.#draggingBoard.nextElementSibling) {
      return;
    }
    if (nextElement == null) {
      this.append(this.#draggingBoard);
    } else {
      this.insertBefore(this.#draggingBoard, nextElement);
    }
  }
  #getNextBoardItem(mouseY) {
    const lists = [...this.querySelectorAll("a:not(.dragging)")];
    return lists.reduce((closest, item) => {
      const boundingRect = item.getBoundingClientRect();
      const offset = mouseY - boundingRect.top - boundingRect.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, boardElement: item };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY });
  }
  static create(properties) {
    const element = document.createElement(COMPONENT_TAG_NAME11);
    for (const [propertyName, value] of Object.entries(properties)) {
      if (!propertyName.startsWith("on")) {
        element.setAttribute(propertyName, value);
      }
    }
  }
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "path-id" /* pathId */) {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME11) == null) {
  customElements.define(COMPONENT_TAG_NAME11, HistoryPanelElement);
}

// components/config-panel/about-panel/about-panel.css?raw
var about_panel_default = ":host\n{\n    display: grid;\n    gap: 7px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr auto;\n}\n\n#header\n{\n    font-size: 14px;\n    font-weight: bold;\n}\n\n#about-app-fieldset\n{\n    grid-column: span 2;\n}\n#about-app-fieldset .text\n{\n    text-align: center;\n}\n\n#version-fieldset\n{\n    grid-column: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n#copyright-fieldset\n{\n    grid-column: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}";

// components/config-panel/about-panel/about-panel.html?raw
var about_panel_default2 = '<header id="header">About</header>\n<fieldset id="about-app-fieldset">\n    <legend id="about-app-legend">App</legend>\n    <p class="text">The <em class="emphasis">My Boards</em> app is a Single Page App (SPA) implementation of the <code class="code">taskboard-manager</code> custom element.</p>\n    <p class="text">To see a Progressive Web App implementation of the <code class="code">taskboard-manager</code> custom element, see the </p>\n</fieldset>\n<fieldset id="version-fieldset">\n    <legend id="version-legend">Version</legend>\n    <div id="version-value">--.--.--</div>\n</fieldset>\n<fieldset id="copyright-fieldset">\n    <legend id="copyright-legend">Copyright</legend>\n    <div id="copyright-description">\n        <!-- For derivative work, replace this license with your own copyright -->\n        <p class="text" xmlns:cc="http://creativecommons.org/ns#" >\n            Both are released with \n            <a id="cc0-link" class="link" href="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1" \n            target="_blank" \n            rel="license noopener noreferrer" \n            style="display:inline-block;">\n                CC0 1.0\n                <img id="cc-icon" class="icon raster" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="Creative Commons Icon">\n                <img id="zero-icon" class="icon raster" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1" alt="Zero Icon">\n            </a>\n        </p>\n        <!-- End of CC0 License -->\n    </div>\n</fieldset>';

// components/config-panel/about-panel/about-panel.ts
var AboutPanelAttributes = /* @__PURE__ */ ((AboutPanelAttributes2) => {
  AboutPanelAttributes2["pathId"] = "path-id";
  return AboutPanelAttributes2;
})(AboutPanelAttributes || {});
var COMPONENT_STYLESHEET12 = new CSSStyleSheet();
COMPONENT_STYLESHEET12.replaceSync(`${shared_default}
    ${about_panel_default}`);
var COMPONENT_TEMPLATE9 = `${about_panel_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "MagnifyingGlass" /* MagnifyingGlass */,
  "Gear" /* Gear */,
  "PlusIcon" /* PlusIcon */
)}`;
var COMPONENT_TAG_NAME12 = "about-panel";
var AboutPanelElement = class extends HTMLElement {
  static observedAttributes = [
    ...Object.values(AboutPanelAttributes)
  ];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  onEdit;
  onBoardMove;
  onNew;
  #draggingBoard = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE9;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET12);
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
  }
  updateBoards(boards) {
    const menuItems = [];
    for (let i = 0; i < boards.length; i++) {
      const boardRecord = boards[i];
      const menuItem = this.#createBoardMenuItem(boardRecord);
      menuItems.push(menuItem);
    }
    this.innerHTML = "";
    this.append(...menuItems);
  }
  #createBoardMenuItem(board) {
    const element = document.createElement("a");
    element.innerHTML = `<span part="menu-item-handle" class="menu-item-handle"></span>
        <span part="board-item-name" class="board-item-name">${board.name}<span>`;
    element.setAttribute("part", "board");
    element.classList.add("board");
    element.dataset.route = `board/${board.id}`;
    const handle = element.querySelector('[part="menu-item-handle"]');
    handle.addEventListener("mousedown", (_event) => {
      element.draggable = true;
    });
    handle.addEventListener("mouseup", (_event) => {
      element.removeAttribute("draggable");
    });
    element.addEventListener("dragstart", (_event) => {
      this.#draggingBoard = element;
      element.classList.add("dragging");
      this.classList.add("drop-target");
    });
    element.addEventListener("dragend", (_event) => {
      element.classList.remove("dragging");
      this.#draggingBoard = null;
      this.classList.remove("drop-target");
    });
    return element;
  }
  #addDragHandlers() {
    this.addEventListener("dragover", this.boardsList_onDragover.bind(this));
    this.addEventListener("drop", this.boardsList_onDrop.bind(this));
  }
  boardsList_onDragover(event) {
    event.preventDefault();
    event.stopPropagation();
    this.#updateBoardItemOrder(event.clientY);
  }
  async boardsList_onDrop(_event) {
    console.log(_event);
    if (this.onBoardMove != null) {
      this.onBoardMove([...this.querySelectorAll("a")]);
    }
  }
  async #updateBoardItemOrder(draggingCursorY) {
    if (this.#draggingBoard == null) {
      return;
    }
    const nextElement = this.#getNextBoardItem(draggingCursorY).boardElement;
    if (this.#draggingBoard.parentElement == this && nextElement == this.#draggingBoard.nextElementSibling) {
      return;
    }
    if (nextElement == null) {
      this.append(this.#draggingBoard);
    } else {
      this.insertBefore(this.#draggingBoard, nextElement);
    }
  }
  #getNextBoardItem(mouseY) {
    const lists = [...this.querySelectorAll("a:not(.dragging)")];
    return lists.reduce((closest, item) => {
      const boundingRect = item.getBoundingClientRect();
      const offset = mouseY - boundingRect.top - boundingRect.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, boardElement: item };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY });
  }
  static create(properties) {
    const element = document.createElement(COMPONENT_TAG_NAME12);
    for (const [propertyName, value] of Object.entries(properties)) {
      if (!propertyName.startsWith("on")) {
        element.setAttribute(propertyName, value);
      }
    }
  }
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "path-id" /* pathId */) {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME12) == null) {
  customElements.define(COMPONENT_TAG_NAME12, AboutPanelElement);
}

// components/config-panel/config-panel.ts
var ConfigPanelAttributes = /* @__PURE__ */ ((ConfigPanelAttributes2) => {
  ConfigPanelAttributes2["pathId"] = "path-id";
  return ConfigPanelAttributes2;
})(ConfigPanelAttributes || {});
var COMPONENT_STYLESHEET13 = new CSSStyleSheet();
COMPONENT_STYLESHEET13.replaceSync(`${shared_default}
    ${config_panel_default}`);
var COMPONENT_TEMPLATE10 = `${config_panel_default2}
${defineIcons(
  "Gear" /* Gear */,
  // IconType.Data,
  "Clock" /* Clock */,
  "Info" /* Info */
)}`;
var COMPONENT_TAG_NAME13 = "config-panel";
var ConfigPanelElement = class extends HTMLElement {
  static observedAttributes = [
    ...Object.values(ConfigPanelAttributes)
  ];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  onEdit;
  onBoardMove;
  onNew;
  #draggingBoard = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE10;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET13);
    this.#applyPartAttributes();
  }
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
  }
  updateBoards(boards) {
    const menuItems = [];
    for (let i = 0; i < boards.length; i++) {
      const boardRecord = boards[i];
      const menuItem = this.#createBoardMenuItem(boardRecord);
      menuItems.push(menuItem);
    }
    this.innerHTML = "";
    this.append(...menuItems);
  }
  #createBoardMenuItem(board) {
    const element = document.createElement("a");
    element.innerHTML = `<span part="menu-item-handle" class="menu-item-handle"></span>
        <span part="board-item-name" class="board-item-name">${board.name}<span>`;
    element.setAttribute("part", "board");
    element.classList.add("board");
    element.dataset.route = `board/${board.id}`;
    const handle = element.querySelector('[part="menu-item-handle"]');
    handle.addEventListener("mousedown", (_event) => {
      element.draggable = true;
    });
    handle.addEventListener("mouseup", (_event) => {
      element.removeAttribute("draggable");
    });
    element.addEventListener("dragstart", (_event) => {
      this.#draggingBoard = element;
      element.classList.add("dragging");
      this.classList.add("drop-target");
    });
    element.addEventListener("dragend", (_event) => {
      element.classList.remove("dragging");
      this.#draggingBoard = null;
      this.classList.remove("drop-target");
    });
    return element;
  }
  #addDragHandlers() {
    this.addEventListener("dragover", this.boardsList_onDragover.bind(this));
    this.addEventListener("drop", this.boardsList_onDrop.bind(this));
  }
  boardsList_onDragover(event) {
    event.preventDefault();
    event.stopPropagation();
    this.#updateBoardItemOrder(event.clientY);
  }
  async boardsList_onDrop(_event) {
    console.log(_event);
    if (this.onBoardMove != null) {
      this.onBoardMove([...this.querySelectorAll("a")]);
    }
  }
  async #updateBoardItemOrder(draggingCursorY) {
    if (this.#draggingBoard == null) {
      return;
    }
    const nextElement = this.#getNextBoardItem(draggingCursorY).boardElement;
    if (this.#draggingBoard.parentElement == this && nextElement == this.#draggingBoard.nextElementSibling) {
      return;
    }
    if (nextElement == null) {
      this.append(this.#draggingBoard);
    } else {
      this.insertBefore(this.#draggingBoard, nextElement);
    }
  }
  #getNextBoardItem(mouseY) {
    const lists = [...this.querySelectorAll("a:not(.dragging)")];
    return lists.reduce((closest, item) => {
      const boundingRect = item.getBoundingClientRect();
      const offset = mouseY - boundingRect.top - boundingRect.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, boardElement: item };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY });
  }
  static create(properties) {
    const element = document.createElement(COMPONENT_TAG_NAME13);
    for (const [propertyName, value] of Object.entries(properties)) {
      if (!propertyName.startsWith("on")) {
        element.setAttribute(propertyName, value);
      }
    }
  }
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "path-id" /* pathId */) {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME13) == null) {
  customElements.define(COMPONENT_TAG_NAME13, ConfigPanelElement);
}

// node_modules/.pnpm/@magnit-ce+editable-list@0.0.10/node_modules/@magnit-ce/editable-list/dist/editable-list.mjs
var IGNORED_TAGS = /* @__PURE__ */ new Set([
  "style",
  "template"
]);
var HTML = `<div part="${"items"}"><slot part="${"items-slot"}"></slot></div>
<slot name="add"><button part="${"add"}" type="button">&plus;</button></slot>`;
var STYLE = `
* { box-sizing: border-box; }
:host
{
    /* begin default ul styles */
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    /* end default ul styles */
}`;
var COMPONENT_STYLESHEET14 = new CSSStyleSheet();
COMPONENT_STYLESHEET14.replaceSync(STYLE);
var COMPONENT_TAG_NAME14 = "editable-list";
var EditableListElement = class extends HTMLElement {
  /** if `true`, allows child elements to be removed from the DOM when their remove button is pressed */
  canRemove = true;
  /** if `true`, allows the edit button to be added and the edit event to be dispatched */
  canEdit = false;
  #boundEventHandlers = /* @__PURE__ */ new Map([
    ["add", this.#addButton_onClick.bind(this)]
  ]);
  /** Cached references to parts of this element, using the `part` attribute values as keys */
  componentParts = /* @__PURE__ */ new Map();
  /**
   * Get and cache an HTMLElement in this element's `shadowDOM` by it's `part` attribute value.
   * @param key the `part` attribute value of the `shadowDOM`'s target child element.
   * @returns the target child element
   */
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  /**
   * Get an HTMLElement in this element's `shadowDOM` by it's `part` attribute value.  
   * Unlike `getPart`, this method does not cache the value to keep in runtime memory.
   * @param key the `part` attribute value of the `shadowDOM`'s target child element.
   * @returns the target child element
   */
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = HTML;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET14);
    this.addEventListener("click", (event) => {
      let button = event.composedPath().find((item2) => item2 instanceof HTMLButtonElement);
      if (button == null) {
        return;
      }
      let item = button.parentElement;
      const part = button.getAttribute("part");
      if (part == "edit") {
        const result = this.dispatchEvent(new CustomEvent("edit", { detail: item, bubbles: true }));
        if (this.hasAttribute("cancel-edit")) {
          event.preventDefault();
          event.stopPropagation();
        }
      } else if (part == "remove") {
        const result = this.dispatchEvent(new CustomEvent("remove", { detail: item, bubbles: true, cancelable: true }));
        if (result == true) {
          item.remove();
        }
        if (this.hasAttribute("cancel-remove")) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    });
    this.findPart(
      "add"
      /* AddButton */
    )?.addEventListener("click", this.#boundEventHandlers.get("add"));
    this.getPart(
      "items-slot"
      /* ItemsSlot */
    ).addEventListener("slotchange", this.#updateItemButtons.bind(this));
  }
  /**
   * Create a new instance of an `EditableListElement` element using the provided properties to define the configuration.
   * @param props target `EditableListProperties` values
   * @returns a configured instance of an `EditableListElement` element.
   */
  static create(props) {
    const element = document.createElement(COMPONENT_TAG_NAME14);
    if (props == null) {
      return element;
    }
    for (const [key, value] of Object.entries(props)) {
      if (key == "remove") {
        value == false ? element.setAttribute(key, "false") : element.removeAttribute(key);
      } else if (key == "edit") {
        value == true ? element.setAttribute(key, "true") : element.removeAttribute(key);
      } else if (key.startsWith("on")) {
        const eventName = key.substring(2).toLowerCase();
        element.addEventListener(eventName, value);
      }
    }
    return element;
  }
  /**
   * Handle click on the "Add Item" button
   */
  #addButton_onClick() {
    this.dispatchEvent(new CustomEvent("add"));
  }
  /**
   * Iterate through slot children to add buttons and listeners where applicable.
   */
  #updateItemButtons() {
    const children = this.getPart(
      "items-slot"
      /* ItemsSlot */
    ).assignedElements();
    for (let i = 0; i < children.length; i++) {
      const target = children[i];
      if (IGNORED_TAGS.has(target.tagName.toLowerCase())) {
        continue;
      } else if (target.tagName.toLowerCase() == "slot") {
        children.push(...target.assignedElements());
        continue;
      }
      const item = children[i];
      const existingEditButton = children[i].querySelector(`button[part="${"edit"}"]`);
      if (this.canEdit) {
        if (existingEditButton == null) {
          const editButton = document.createElement("button");
          editButton.type = "button";
          editButton.setAttribute("part", "edit");
          const template = this.querySelector(`template[part="${"edit-button"}"]`);
          if (template != null) {
            editButton.append(template.content.cloneNode(true));
          } else {
            editButton.textContent = "\u2026";
          }
          item.appendChild(editButton);
        }
      } else if (existingEditButton != null) {
        existingEditButton.remove();
      }
      const existingRemoveButton = children[i].querySelector(`button[part="${"remove"}"]`);
      if (this.canRemove) {
        if (existingRemoveButton == null) {
          const removeButton = document.createElement("button");
          removeButton.type = "button";
          removeButton.setAttribute("part", "remove");
          const template = this.querySelector(`template[part="${"remove-button"}"]`);
          if (template != null) {
            removeButton.append(template.content.cloneNode(true));
          } else {
            removeButton.textContent = "\xD7";
          }
          item.appendChild(removeButton);
        }
      } else if (existingRemoveButton != null) {
        existingRemoveButton.remove();
      }
    }
  }
  static observedAttributes = [
    "remove",
    "edit"
  ];
  /**
   * Update items to new configuration when attributes change
   * @param attributeName the attribute that has changed
   * @param _oldValue the previous value that the updating attribute was assinged as
   * @param newValue the new value that the updating attribute is assigned as
   */
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "remove") {
      if (newValue == null || newValue.trim() == "true") {
        this.canRemove = true;
      } else {
        this.canRemove = false;
      }
      this.#updateItemButtons();
    } else if (attributeName == "edit") {
      if (newValue == null || newValue.trim() != "true") {
        this.canEdit = false;
      } else {
        this.canEdit = true;
      }
      this.#updateItemButtons();
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME14) == null) {
  customElements.define(COMPONENT_TAG_NAME14, EditableListElement);
}

// node_modules/.pnpm/@magnit-ce+path-router@0.2.8/node_modules/@magnit-ce/path-router/dist/path-router.js
var path_router_default = "/* \n   Animations will not be awaitable in code if they have a display of none.\n   Instead, the routes are stacked in a grid.\n */\npath-router\n,.route-view\n{ \n    display: var(--router-display, grid);\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n}\n\nroute-page\n{\n    display: var(--route-display, block);\n    visibility: hidden;\n    grid-row: 1;\n    grid-column: 1;\n}\n/* \n   Visibility is visible during the entering and exiting phases\n   to allow for animations to be awaited.\n */\nroute-page[open]\n,route-page[data-entering]\n,route-page[data-exiting]\n{\n    visibility: visible;\n}\n\n/* sub routes should respect the visibility of the parent routes */\nroute-page:not([open],[data-entering],[data-exiting]) route-page[open]\n{\n    visibility: inherit;\n}";
var RouteType = (elementType = HTMLElement) => {
  return class extends elementType {
    currentProcess = Promise.resolve();
    canBeOpened = async () => true;
    canBeClosed = async () => true;
    getProperties() {
      const dataValues = Object.entries(this.dataset);
      const properties = dataValues.reduce((result, item) => {
        const dataItemName = item[0];
        if (!dataItemName.startsWith(ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD)) {
          return result;
        }
        const key = dataItemName[ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD.length].toLowerCase() + dataItemName.substring(ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD.length + 1);
        const value = item[1];
        result[key] = value;
        return result;
      }, {});
      return properties;
    }
    async enter(path) {
      const canNavigate = await this.canBeOpened();
      if (!canNavigate) {
        console.info("Navigation blocked by validity check.");
        return false;
      }
      this.currentProcess = this.#enter(path);
      await this.currentProcess;
      this.currentProcess = Promise.resolve();
      return true;
    }
    async #enter(path) {
      this.dispatchEvent(new CustomEvent("beforeopen", { detail: { path, properties: this.getProperties() } }));
      await Promise.allSettled(this.#blockingBeforeOpen.map((value) => value()));
      this.dataset.entering = "";
      await Promise.allSettled(this.getAnimations({ subtree: true }).map((animation) => animation.finished));
      delete this.dataset.entering;
      this.#open();
      this.dispatchEvent(new Event(
        "afteropen"
        /* AfterOpen */
      ));
      await Promise.allSettled(this.#blockingAfterOpen.map((value) => value()));
    }
    async #open() {
      this.toggleAttribute("open", true);
      this.setAttribute("aria-current", "page");
    }
    async exit() {
      const canNavigate = await this.canBeClosed();
      if (canNavigate == false) {
        console.info("Navigation blocked by validity check.");
        return false;
      }
      this.currentProcess = this.#exit();
      await this.currentProcess;
      this.currentProcess = Promise.resolve();
      return true;
    }
    async #exit() {
      this.dispatchEvent(new Event(
        "beforeclose"
        /* BeforeClose */
      ));
      await Promise.allSettled(this.#blockingBeforeClose.map((value) => value()));
      this.dataset.exiting = "";
      this.removeAttribute("open");
      await Promise.all(this.getAnimations({ subtree: true }).map((animation) => animation.finished));
      this.#close();
      delete this.dataset.exiting;
      this.dispatchEvent(new Event(
        "afterclose"
        /* AfterClose */
      ));
      await Promise.allSettled(this.#blockingAfterClose.map((value) => value()));
    }
    #close() {
      this.toggleAttribute("open", false);
      this.removeAttribute("aria-current");
    }
    #blockingBeforeOpen = [];
    #blockingAfterOpen = [];
    #blockingBeforeClose = [];
    #blockingAfterClose = [];
    applyEventListener(type, listener, options) {
      const isOpen = this.getAttribute("open") != null;
      this.addEventListener(type, listener, options);
      if ((type == "beforeopen".toString() || type == "afteropen".toString()) && isOpen == true) {
        this.dispatchEvent(new Event(type));
      } else if (type == "beforeclose".toString() || type == "afterclose".toString() && isOpen == false) {
        this.dispatchEvent(new Event(type));
      }
    }
    addBlockingEventListener(eventName, handler) {
      switch (eventName) {
        case "beforeopen":
          this.#blockingBeforeOpen.push(handler);
          break;
        case "afteropen":
          this.#blockingAfterOpen.push(handler);
          break;
        case "beforeclose":
          this.#blockingBeforeClose.push(handler);
          break;
        case "afterclose":
          this.#blockingAfterClose.push(handler);
          break;
      }
    }
    applyBlockingEventListener(eventName, handler) {
      const isOpen = this.getAttribute("open") != null;
      this.addBlockingEventListener(eventName, handler);
      if ((eventName == "beforeopen".toString() || eventName == "afteropen".toString()) && isOpen == true) {
        this.dispatchEvent(new Event(eventName));
      } else if (eventName == "beforeclose".toString() || eventName == "afterclose".toString() && isOpen == false) {
        this.dispatchEvent(new Event(eventName));
      }
    }
  };
};
var COMPONENT_TAG_NAME15 = "route-dialog";
var RouteDialogElement = class extends RouteType(HTMLDialogElement) {
};
if (customElements.get(COMPONENT_TAG_NAME15) == null) {
  customElements.define(COMPONENT_TAG_NAME15, RouteDialogElement, { extends: "dialog" });
}
var COMPONENT_TAG_NAME22 = "route-page";
var RoutePageElement = class extends RouteType() {
};
if (customElements.get(COMPONENT_TAG_NAME22) == null) {
  customElements.define(COMPONENT_TAG_NAME22, RoutePageElement);
}
var COMPONENT_STYLESHEET15 = new CSSStyleSheet();
COMPONENT_STYLESHEET15.replaceSync(path_router_default);
var DOMCONTENTLOADED_PROMISE = new Promise((resolve) => document.addEventListener("DOMContentLoaded", resolve));
var ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD = "property";
var COMPONENT_TAG_NAME32 = "path-router";
var PathRouterElement = class extends HTMLElement {
  get routePages() {
    return Array.from(this.querySelectorAll(`:scope > ${COMPONENT_TAG_NAME22}, ${COMPONENT_TAG_NAME32} :not(${COMPONENT_TAG_NAME32}) ${COMPONENT_TAG_NAME22}`), (route) => route);
  }
  get routeDialogs() {
    return Array.from(this.querySelectorAll(`:scope > [is="${COMPONENT_TAG_NAME15}"]`), (routeDialog) => routeDialog);
  }
  get routes() {
    return Array.from(this.querySelectorAll(`:scope > ${COMPONENT_TAG_NAME22},${COMPONENT_TAG_NAME32} :not(${COMPONENT_TAG_NAME32}) ${COMPONENT_TAG_NAME22},:scope > [is="${COMPONENT_TAG_NAME15}"]`), (route) => route);
  }
  /** The `<page-route>` element currently being navigated to. */
  targetPageRoute;
  /** The `<page-route>` element that the router currently has open. */
  currentPageRoute;
  /** The `route-dialog` element currently being navigated to. */
  targetDialogRoute;
  /** The `route-dialog` element that the router currently has open. */
  currentDialogRoute;
  /** The route that will be selected if no other routes match the current path. */
  defaultRoute;
  /** The path which controls the router's navigation. */
  get path() {
    return this.getAttribute("path");
  }
  set path(value) {
    this.setAttribute("path", value);
  }
  #activationPromise;
  #toUpdate = [];
  #resolveNavigation;
  /**
   * Navigate to a route path.
   * @param path route path
   */
  async navigate(path) {
    return new Promise((resolve) => {
      this.#resolveNavigation = resolve;
      this.setAttribute("path", path);
    });
  }
  /**
   * Adds simple click handling to a parent element that contains all of the 
   * route links that you want to use for the target `<path-router>` element.
   * @param parent An element that will contain every link that should be listened for. If no parent is provided, the document `<body>` will be used.
   * @param linkQuery A query that will be used to de-select all route links. This can be customized for use-cases like nested path routers which may benefit from scoped selectors. By default, the query is `a[data-route],button[data-route]`.
   */
  addRouteLinkClickHandlers(parent, linkQuery = "a[data-route],button[data-route]") {
    parent = parent ?? document.body;
    parent.addEventListener("click", (event) => this.routeLink_onClick(parent, event, linkQuery));
  }
  routeLink_onClick(parent, event, linkQuery = "a[data-route],button[data-route]") {
    let targetLink = event.composedPath().find((item) => item.dataset?.route != null);
    if (targetLink != null) {
      const links = [...parent.querySelectorAll(linkQuery)];
      for (let i = 0; i < links.length; i++) {
        links[i].removeAttribute("aria-current");
      }
      let path = targetLink.dataset.route;
      if (path.indexOf(":") != -1) {
        let parentRoute = targetLink.closest('route-page,[is="route-dialog"]');
        while (parentRoute != null) {
          const parentProperties = parentRoute.getProperties();
          const linkProperties = path.split("/").filter((item) => item.startsWith(":"));
          for (let i = 0; i < linkProperties.length; i++) {
            const linkPropertyName = linkProperties[i].substring(1);
            if (parentProperties[linkPropertyName] != null) {
              path = path.replace(`:${linkPropertyName}`, parentProperties[linkPropertyName]);
            }
          }
          parentRoute = parentRoute.parentElement?.closest('route-page,[is="route-dialog"]');
        }
      }
      if (path.startsWith("#")) {
        const currentPath = this.path ?? "";
        const currentPathArray = currentPath.split("#");
        currentPathArray[1] = path.substring(1);
        path = currentPathArray.join("#");
      }
      this.setAttribute("path", path);
      targetLink.setAttribute("aria-current", "page");
    }
  }
  getRouteProperties(route) {
    if (route != null) {
      return route.getProperties();
    }
    const properties = {};
    for (let i = 0; i < this.routes.length; i++) {
      const route2 = this.routes[i];
      Object.assign(properties, route2.getProperties());
    }
    return properties;
  }
  /**
   * Compare two `URL` objects to determine whether they represet different locations and, if so, whether or not the new location is marked as a replacement change.
   * @param currentLocation a url object representing the current location
   * @param updatedLocation a url object representing the location to compare against
   * @returns `{ hasChanged, isReplacementChange }`: Whether there was a change, and whether history management should add an entry, or replace the last entry.
   */
  compareLocations(currentLocation, updatedLocation) {
    let hasChanged = false;
    let isReplacementChange = false;
    if (updatedLocation.pathname != currentLocation.pathname) {
      hasChanged = true;
    } else if (updatedLocation.pathname == currentLocation.pathname && updatedLocation.hash != currentLocation.hash) {
      hasChanged = true;
      if (currentLocation.hash != "" && updatedLocation.hash != "") {
        isReplacementChange = true;
      }
    }
    return { hasChanged, isReplacementChange };
  }
  async #update(path, previousPath) {
    if (this.#isActivated == false) {
      throw new Error("Unable to update path-router before activation.");
    }
    const sanitizedPath = path.startsWith("/") ? path.substring(1) : path;
    const [pagePath, dialogPath] = this.#getTypedPaths(sanitizedPath);
    const [currentPagePath, currentDialogPath] = this.#getTypedPaths(previousPath);
    let openedPage = false;
    let openedDialog = false;
    const pageHasChanged = dialogPath != "" && pagePath == "" ? false : currentPagePath != pagePath;
    const hashHasChanged = dialogPath != currentDialogPath;
    const currentlyOpen = this.querySelector("[open]");
    if (pageHasChanged == false && hashHasChanged == false && currentlyOpen != null) {
      if (this.#resolveNavigation != null) {
        this.#resolveNavigation();
        this.#resolveNavigation = void 0;
      }
      currentlyOpen.dispatchEvent(new CustomEvent("refresh", { detail: { path }, bubbles: true, cancelable: true }));
      return [openedPage, openedDialog];
    }
    await this.#awaitAllRouteProcesses();
    const matchingRoutes = this.#findMatchingRoutes(sanitizedPath);
    let matchingPageRoutes = matchingRoutes.filter((item) => item.route instanceof RoutePageElement);
    const matchingDialogRoutes = matchingRoutes.filter((item) => item.route instanceof RouteDialogElement);
    let openPagePromise = new Promise((resolve) => resolve(false));
    matchingPageRoutes = this.#filterPropertyRoutes(matchingPageRoutes);
    let hasClosedPages = false;
    const pagesToRemainOpen = matchingPageRoutes.map((item) => item.route);
    if (pageHasChanged == true || currentlyOpen == null) {
      const closed = await this.#closeCurrentRoutePages(pagesToRemainOpen);
      if (closed == false) {
        console.warn("Navigation was prevented.");
        console.info(`Requested path: ${path}`);
        if (this.#resolveNavigation != null) {
          this.#resolveNavigation();
          this.#resolveNavigation = void 0;
        }
        return false;
      }
      hasClosedPages = true;
      for (let i = 0; i < matchingPageRoutes.length; i++) {
        const routeData = matchingPageRoutes[i];
        openPagePromise = this.#openRoutePage(routeData.route, dialogPath);
        this.#assignRouteProperties(routeData.route, routeData.properties);
      }
    }
    if (pageHasChanged || currentDialogPath != dialogPath) {
      const closed = await this.#closeCurrentRouteDialogs(matchingDialogRoutes.map((item) => item.route));
      if (closed != false) {
        for (let i = 0; i < matchingDialogRoutes.length; i++) {
          const routeData = matchingDialogRoutes[i];
          openedDialog = await this.#openRouteDialog(routeData.route, dialogPath);
          this.#assignRouteProperties(routeData.route, routeData.properties);
          if (hasClosedPages == false) {
            const subroutes = [...routeData.route.querySelectorAll("route-page")];
            for (let i2 = 0; i2 < subroutes.length; i2++) {
              if (pagesToRemainOpen.indexOf(subroutes[i2]) > -1) {
                continue;
              }
              await subroutes[i2].exit();
            }
          }
        }
        for (let i = 0; i < matchingPageRoutes.length; i++) {
          const routeData = matchingPageRoutes[i];
          if (routeData.route.closest(`[is="${COMPONENT_TAG_NAME15}"][open]`) != null) {
            openPagePromise = this.#openRoutePage(routeData.route, dialogPath);
            this.#assignRouteProperties(routeData.route, routeData.properties);
          }
        }
      }
    }
    openedPage = await openPagePromise;
    this.targetPageRoute = void 0;
    this.targetDialogRoute = void 0;
    if (this.#resolveNavigation != null) {
      this.#resolveNavigation();
      this.#resolveNavigation = void 0;
    }
    this.dispatchEvent(new CustomEvent("pathchange", { detail: { sanitizedPath }, bubbles: true, cancelable: true }));
    return [openedPage, openedDialog];
  }
  #getTypedPaths(path) {
    const pathArray = path.split("#");
    const pagePath = pathArray[0];
    const remainingPath = path.length > 1 ? pathArray[1] : null;
    const remainingPathArray = remainingPath == null ? [""] : remainingPath.split("?");
    const dialogPath = remainingPathArray == null ? "" : remainingPathArray[0];
    return [pagePath, dialogPath];
  }
  #findMatchingRoutes(path) {
    const routes = [];
    const previousMatches = [];
    for (let i = 0; i < this.routes.length; i++) {
      const route = this.routes[i];
      const [routeMatches, properties] = this.routeMatchesPath(route, path, previousMatches, route instanceof RouteDialogElement);
      if (routeMatches == true) {
        routes.push({ route, properties });
        previousMatches.push(route);
      }
    }
    return routes;
  }
  #filterPropertyRoutes(matchingPageRoutes) {
    const toRemove = [];
    for (let i = 0; i < matchingPageRoutes.length; i++) {
      const currentMatch = matchingPageRoutes[i];
      const currentMatchPath = currentMatch.route.getAttribute("path");
      const closestCurrentMatchRouteParent = currentMatch.route.parentElement?.closest('route-page,[is="route-dialog"],path-router');
      const comparisonMatch = matchingPageRoutes.find((item) => {
        return toRemove.indexOf(item) == -1 && item != currentMatch && item.route.parentElement?.closest('route-page,[is="route-dialog"],path-router') == closestCurrentMatchRouteParent;
      });
      if (comparisonMatch == null) {
        continue;
      }
      if (currentMatchPath?.startsWith(":")) {
        toRemove.push(currentMatch);
        continue;
      }
      const comparisonMatchPath = comparisonMatch.route.getAttribute("path");
      if (comparisonMatchPath?.startsWith(":")) {
        toRemove.push(comparisonMatch);
      }
    }
    const result = matchingPageRoutes.filter((item) => toRemove.indexOf(item) == -1);
    return result;
  }
  async #awaitAllRouteProcesses() {
    return Promise.allSettled(this.routes.map((route) => {
      return route.currentProcess;
    }));
  }
  async #openRoutePage(route, path) {
    this.targetPageRoute = route;
    this.targetPageRoute = this.targetPageRoute || this.defaultRoute;
    if (this.targetPageRoute == null) {
      return false;
    }
    const opened = await this.targetPageRoute.enter(path);
    if (opened) {
      this.currentPageRoute = this.targetPageRoute;
      this.dispatchEvent(new CustomEvent("change", { detail: { route: this.targetPageRoute, path } }));
    }
    return opened;
  }
  async #openRouteDialog(route, path) {
    this.targetDialogRoute = route;
    if (this.targetDialogRoute == null) {
      return false;
    }
    const opened = await this.targetDialogRoute.enter(path);
    if (opened) {
      this.currentDialogRoute = this.targetDialogRoute;
      this.dispatchEvent(new CustomEvent("change", { detail: { route: this.targetDialogRoute, path } }));
    }
    return opened;
  }
  async #closeCurrentRoutePages(toRemainOpen) {
    const openPages = this.routePages.filter((item) => item.getAttribute("aria-current") == "page");
    let closed = true;
    for (let i = 0; i < openPages.length; i++) {
      if (toRemainOpen.indexOf(openPages[i]) > -1) {
        continue;
      }
      closed = closed == false ? closed : await openPages[i].exit();
    }
    return closed;
  }
  async #closeCurrentRouteDialogs(toRemainOpen) {
    const openDialogs = this.routeDialogs.filter((item) => item.getAttribute("aria-current") == "page");
    let closed = true;
    for (let i = 0; i < openDialogs.length; i++) {
      if (toRemainOpen.indexOf(openDialogs[i]) > -1) {
        continue;
      }
      closed = closed == false ? closed : await openDialogs[i].exit();
    }
    return closed;
  }
  #assignRouteProperties(route, properties) {
    for (const [key, value] of Object.entries(properties)) {
      const dataKey = ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD + key.substring(0, 1).toUpperCase() + key.substring(1);
      route.dataset[dataKey] = value;
    }
  }
  routeMatchesPath(route, queryPath, previousMatches, isDialog = false) {
    const queryPathArray = queryPath.split("#");
    const pagePath = queryPathArray[0];
    const dialogPath = queryPathArray.length > 1 ? queryPathArray[1] : null;
    const routePath = route.getAttribute("path") ?? "";
    const routePathArray = routePath.split("/");
    const pagePathArray = pagePath.split("/");
    const pathType = route.closest(`[is="${COMPONENT_TAG_NAME15}"]`) == null ? "Page" : "Dialog";
    if (pathType == "Page") {
      return this.routeTypeMatches(route, pagePathArray, routePathArray, `${COMPONENT_TAG_NAME22}`, previousMatches);
    } else if (dialogPath == null) {
      return [false, {}];
    }
    const dialogPathArray = dialogPath.split("/");
    return this.routeTypeMatches(route, dialogPathArray, routePathArray, `${COMPONENT_TAG_NAME22},[is="${COMPONENT_TAG_NAME15}"]`, previousMatches);
  }
  routeTypeMatches(route, queryPathArray, routePathArray, parentRouteSelector, previousMatches) {
    if (queryPathArray.length == 1 && queryPathArray[0].trim() == "") {
      return [routePathArray.length == 1 && routePathArray[0].trim() == "", {}];
    }
    const parentRoutes = [];
    let parentRoute = route.parentElement?.closest(parentRouteSelector);
    while (parentRoute != null) {
      if (previousMatches.indexOf(parentRoute) == -1) {
        return [false, {}];
      }
      parentRoutes.push(parentRoute);
      parentRoute = parentRoute.parentElement?.closest(parentRouteSelector);
    }
    let composedParentPath = parentRoutes.reverse().reduce((accumulation, item, index) => {
      return `${accumulation == "" ? "" : accumulation + "/"}${item.getAttribute("path") ?? ""}`;
    }, "");
    const parentRouteArray = composedParentPath.split("/");
    let subrouteArray = [...queryPathArray].filter((item, index) => {
      const parentRouteElement = parentRouteArray[index];
      const parentRouteElementIsProperty = parentRouteElement?.startsWith(":");
      return !(parentRouteElementIsProperty == true || parentRouteElement == item);
    });
    let { match, properties } = this.pathArraySelectsRouteArray(subrouteArray, routePathArray);
    return [match, properties];
  }
  pathArraySelectsRouteArray(pathArray, routeArray) {
    let properties = {};
    if (routeArray.length > pathArray.length) {
      return { match: false, properties };
    }
    let routeMatchesPath = false;
    for (let i = 0; i < pathArray.length; i++) {
      const routeSlug = routeArray[i];
      const pathSlug = pathArray[i];
      if (routeSlug == null) {
        return { match: routeMatchesPath, properties };
      }
      const isParameter = routeSlug.startsWith(":");
      if (isParameter == false) {
        if (routeSlug != pathSlug) {
          return { match: false, properties };
        }
      } else {
        properties[routeSlug.substring(1)] = pathSlug;
      }
      routeMatchesPath = true;
    }
    return { match: routeMatchesPath, properties };
  }
  async connectedCallback() {
    this.#activationPromise = this.#activateRouteManagement();
    this.#injectStyles();
    await this.#activationPromise;
    await this.#openPreActivationRoutes();
    if (this.getAttribute("path") != null && this.currentPageRoute == null && this.defaultRoute != null) {
      this.#openRoutePage(this.defaultRoute, "");
    }
  }
  disconnectedCallback() {
    this.#deactivateRouteManagement();
  }
  #isActivated = false;
  async #activateRouteManagement() {
    await DOMCONTENTLOADED_PROMISE;
    this.#assignDefaultRoute();
    this.#addDialogCloseHandlers();
    this.#isActivated = true;
  }
  #assignDefaultRoute() {
    this.defaultRoute = this.querySelector("route-page[default]");
    if (this.defaultRoute == null) {
      this.defaultRoute = this.querySelector("route-page");
    }
  }
  async #openPreActivationRoutes() {
    for (let i = 0; i < this.#toUpdate.length; i++) {
      await this.#update(this.#toUpdate[i].newValue, this.#toUpdate[i].oldValue);
    }
  }
  #boundDialogOnCloseHandler = this.#dialog_onClose.bind(this);
  #addDialogCloseHandlers() {
    for (let i = 0; i < this.routeDialogs.length; i++) {
      this.routeDialogs[i].addEventListener("close", this.#boundDialogOnCloseHandler);
    }
  }
  async #dialog_onClose(event) {
    const dialog = event.target;
    const isExiting = dialog.getAttribute("data-exiting") != null;
    if (!isExiting) {
      const pathAttribute = this.getAttribute("path") ?? "/";
      const path = pathAttribute.split("#")[0];
      await this.navigate(path);
    }
    dialog.removeAttribute("data-exiting");
  }
  #deactivateRouteManagement() {
    this.#unassignDefaultRoute();
    this.#removeDialogCloseHandler();
    this.#activationPromise = void 0;
    this.#isActivated = false;
  }
  #unassignDefaultRoute() {
    if (this.defaultRoute != null) {
      this.defaultRoute = void 0;
    }
  }
  #removeDialogCloseHandler() {
    this.removeEventListener("close", this.#boundDialogOnCloseHandler);
  }
  #injectStyles() {
    let parent = this.getRootNode();
    if (parent.adoptedStyleSheets.indexOf(COMPONENT_STYLESHEET15) == -1) {
      parent.adoptedStyleSheets.push(COMPONENT_STYLESHEET15);
    }
  }
  static observedAttributes = ["path"];
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName == "path") {
      if (this.#isActivated == true) {
        this.#update(newValue, oldValue ?? "");
      } else {
        this.#toUpdate.push({ newValue, oldValue: oldValue ?? "" });
      }
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME32) == null) {
  customElements.define(COMPONENT_TAG_NAME32, PathRouterElement);
}

// node_modules/.pnpm/@magnit-ce+task-board@0.0.3/node_modules/@magnit-ce/task-board/dist/task-board.js
var COMPONENT_STYLESHEET16 = new CSSStyleSheet();
COMPONENT_STYLESHEET16.replaceSync(`
:host
{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    --list-min-width: 300px;
}
[part="lists"]
{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    flex: 1;
    overflow: auto hidden;
}
::slotted(task-list)
{
    overflow: hidden auto;
    min-width: var(--list-min-width);
}
`);
var COMPONENT_TAG_NAME16 = "task-board";
var TaskBoardElement = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot name="header"></slot><div part="lists"><slot></slot></div><slot name="footer"></slot>`;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET16);
  }
};
if (customElements.get(COMPONENT_TAG_NAME16) == null) {
  customElements.define(COMPONENT_TAG_NAME16, TaskBoardElement);
}

// node_modules/.pnpm/@magnit-ce+task-list@0.0.14/node_modules/@magnit-ce/task-list/dist/task-list.js
var task_list_default = ':host\n{\n    --border-color: rgb(95, 95, 95);\n    display: inline-block;\n    border: solid 1px var(--border-color);\n    border-radius: 3px;\n    padding: .5em;\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        --border-color: rgb(71, 71, 71);\n    }\n}\n\n\n[part="header"]\n{\n    display: grid;\n    grid-template-columns: auto minmax(0, 1fr) auto;\n    align-items: center;\n    position: sticky;\n}\n\n[part="color-container"]\n{\n    display: contents;\n}\n\n[part="color"]\n{\n    padding: 0;\n    width: 12px;\n    min-height: 0;\n    height: auto;\n    border: solid 1px transparent;\n    align-self: stretch;\n}\n[part="color"]::-moz-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n[part="color"]::-webkit-color-swatch-wrapper \n{\n    padding: 0;\n    margin: 0;\n}\n\n[part="color"]::-webkit-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n[part="tasks"]\n{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n[part="add-button"]\n{\n    margin-top: 1rem;\n    margin-inline: auto;\n    min-width: 100px;\n    align-self: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n:host([collapsed]) > [part="tasks"]\n{\n    overflow: hidden;\n    height: min-content;\n    height: 0;\n    opacity: 0;\n    padding: 0;\n    margin: 0;\n    border: none;\n    pointer-events: none;\n    user-select: none;\n}\n\n::slotted([data-drag-id])\n{\n    opacity: .7;\n    scale: .97;\n    transition: opacity 100ms ease, scale 100ms ease;\n}\n\n::slotted(task-list)\n{\n    margin-block: 7px;\n}';
var task_list_default2 = '<slot name="header">\n    <header part="header">\n        <label part="color-container" title="Color">\n            <input type="color" part="color" value="#919191" />\n        </label>\n        <input type="text" part="name" placeholder="List Name" />\n        <button type="button" part="collapse-button" title="Collapse">\n            <span part="collapse-icon">\u25B2</span>\n        </button>\n    </header>\n</slot>\n<ul part="tasks">\n    <slot></slot>\n</ul>\n<slot name="add-button"><button type="button" part="add-button" title="Add">\n    <span part="add-icon">&plus;</span>\n    <span part="add-label">Add Task</span>\n</button></slot>\n<slot name="footer"></slot>';
var COMPONENT_STYLESHEET17 = new CSSStyleSheet();
COMPONENT_STYLESHEET17.replaceSync(task_list_default);
var COMPONENT_TAG_NAME17 = "task-list";
var TaskListElement = class extends HTMLElement {
  TASKCARD_TAG_NAME = "task-card";
  dragAndDropQueryParent;
  parentScopeSelector = "";
  componentParts = /* @__PURE__ */ new Map();
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  handledItems = /* @__PURE__ */ new WeakSet();
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = task_list_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET17);
    this.dragAndDropQueryParent = this.parentElement == null ? this.getRootNode() : this.parentElement.getRootNode();
    this.findPart("name").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
    });
    this.findPart("color").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
    });
    this.findPart("collapse-button").addEventListener("click", () => {
      this.toggleHidden();
    });
    this.findPart("add-button").addEventListener("click", () => {
      const order = this.querySelectorAll(`:scope > ${this.TASKCARD_TAG_NAME}`).length;
      this.dispatchEvent(new CustomEvent("add", { bubbles: true, cancelable: true, detail: { order } }));
    });
    if (this.getAttribute("drag-drop") != null) {
      this.#applyDragAndDropHandlers();
    }
    this.shadowRoot.querySelector("slot:not([name])").addEventListener("slotchange", (event) => {
      const children = event.target.assignedElements();
      for (let i = 0; i < children.length; i++) {
        if (this.handledItems.has(children[i])) {
          continue;
        }
        if (children[i].tagName.toLowerCase() == COMPONENT_TAG_NAME17.toLowerCase()) {
          this.dispatchEvent(new CustomEvent("nested", { bubbles: true, cancelable: true, detail: { target: children[i] } }));
          this.handledItems.add(children[i]);
        }
        if (children[i].tagName.toLowerCase() == this.TASKCARD_TAG_NAME.toLowerCase() && children[i].dataset.dragId == null) {
          this.handledItems.add(children[i]);
          if (this.getAttribute("drag-drop") != null) {
            this.applyDragAndDropCardHandler(children[i]);
          }
        }
      }
    });
  }
  toggleHidden() {
    if (this.getAttribute("collapsed") == null) {
      this.hide();
    } else {
      this.show();
    }
  }
  hide() {
    this.findPart("collapse-icon").textContent = "\u25BC";
    this.setAttribute("collapsed", "");
    this.dispatchEvent(new CustomEvent("collapse", { bubbles: true, cancelable: true }));
  }
  show() {
    this.findPart("collapse-icon").textContent = "\u25B2";
    this.removeAttribute("collapsed");
    this.dispatchEvent(new CustomEvent("collapse", { bubbles: true, cancelable: true }));
  }
  static observedAttributes = ["name", "description", "color", "collapsed", "drag-drop"];
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName == "name") {
      this.findPart("name").value = newValue;
    } else if (attributeName == "description") {
      this.findPart("header").title = newValue;
    } else if (attributeName == "color") {
      this.findPart("color").value = newValue;
    } else if (attributeName == "collapsed") {
      if (newValue === "true") {
        this.classList.add("collapsed");
      } else {
        this.classList.remove("collapsed");
      }
    } else if (attributeName == "drag-drop" && oldValue == null) {
      this.#applyDragAndDropHandlers();
    }
  }
  #applyDragAndDropHandlers() {
    this.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.effectAllowed = "move";
      const tasks = [...this.querySelectorAll(`:scope > ${this.TASKCARD_TAG_NAME}:not([data-drag-id])`)];
      const nextElement = tasks.reduce((closest, task) => {
        const boundingRect = task.getBoundingClientRect();
        const offset = event.clientY - boundingRect.top - boundingRect.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, task };
        }
        return closest;
      }, { offset: Number.NEGATIVE_INFINITY, task: void 0 }).task;
      const target = this.dragAndDropQueryParent.querySelector(`${this.parentScopeSelector}${this.TASKCARD_TAG_NAME}[data-drag-id]`);
      if (target == null || target.parentElement == this && nextElement == target.nextElementSibling) {
        return;
      }
      if (nextElement == null || this.getAttribute("collapsed") != null) {
        this.append(target);
      } else {
        this.insertBefore(target, nextElement);
      }
    });
    this.addEventListener("drop", (event) => {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  }
  applyDragAndDropCardHandler(taskCard) {
    taskCard.setAttribute("draggable", "true");
    taskCard.addEventListener("dragstart", this.#boundEventHandlers.item_onDragStart);
    taskCard.addEventListener("dragend", this.#boundEventHandlers.item_onDragEnd);
  }
  #item_onDragStart(event) {
    const taskCard = event.currentTarget;
    const dragId = this.#createDragId();
    const childItems = [...this.querySelectorAll(`:scope > ${this.TASKCARD_TAG_NAME}`)];
    const order = childItems.indexOf(taskCard);
    taskCard.dataset.dragId = dragId;
    taskCard.dataset.order = order.toString();
    taskCard.dataset.listIndex = [...this.parentElement.children].indexOf(this).toString();
  }
  /**
   * A function to generate an id for identifying the task that
   * is currently being dragged.
   * @returns a random `number` between 0 and 1000;
   */
  #createDragId() {
    return Math.floor(Math.random() * 1e3).toString();
  }
  #item_onDragEnd(event) {
    event.preventDefault();
    event.stopPropagation();
    const taskCard = event.currentTarget;
    const previousOrder = parseInt(taskCard.dataset.order ?? "");
    const previousParent = this.parentElement.children[parseInt(taskCard.dataset.listIndex)];
    const currentParent = taskCard.parentElement;
    const childItems = [...currentParent.querySelectorAll(`:scope > ${this.TASKCARD_TAG_NAME}`)];
    const order = childItems.indexOf(taskCard);
    if (previousParent != currentParent) {
      currentParent.applyDragAndDropCardHandler(taskCard);
      currentParent.handledItems.add(taskCard);
      currentParent.dispatchEvent(new CustomEvent("added", { bubbles: true, detail: { order, target: taskCard } }));
      taskCard.removeEventListener("dragstart", previousParent.#boundEventHandlers.item_onDragStart);
      taskCard.removeEventListener("dragend", previousParent.#boundEventHandlers.item_onDragEnd);
      previousParent.handledItems.delete(taskCard);
      previousParent.dispatchEvent(new CustomEvent("removed", { bubbles: true, detail: { order: previousOrder, target: taskCard } }));
    } else {
      currentParent.dispatchEvent(new CustomEvent("change", { bubbles: true, detail: { order, previousOrder, target: taskCard } }));
    }
    delete taskCard.dataset.dragId;
    delete taskCard.dataset.order;
    delete taskCard.previousParent;
  }
  #boundEventHandlers = {
    item_onDragStart: this.#item_onDragStart.bind(this),
    item_onDragEnd: this.#item_onDragEnd.bind(this)
  };
};
if (customElements.get(COMPONENT_TAG_NAME17) == null) {
  customElements.define(COMPONENT_TAG_NAME17, TaskListElement);
}

// node_modules/.pnpm/@magnit-ce+task-card@0.0.17/node_modules/@magnit-ce/task-card/dist/task-card.js
var task_card_default = ':host\n{\n    --border-color: rgb(95, 95, 95);\n    border: solid 1px var(--border-color);\n    border-radius: 3px;\n    padding: 0;\n    margin: .25em;\n    display: inline-flex;\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        --border-color: rgb(71, 71, 71);\n    }\n}\n\n[part="color-container"]\n{\n    display: contents;\n}\n\n[part="color"]\n{\n    margin: 0;\n    padding: 0;\n    width: 7.5px;\n    min-height: 0;\n    height: auto;\n    border: none;\n}\n[part="color"]::-moz-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n[part="color"]::-webkit-color-swatch-wrapper \n{\n    padding: 0;\n    margin: 0;\n}\n\n[part="color"]::-webkit-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n[part="is-finished"]\n{\n    margin: 1em .5em;\n}\n\n[part="finished-indicator"]\n{\n    margin-block: var(--margin, .5em);\n    background: var(--background);\n    background-color: var(--background-color, transparent);\n    background-image: var(--background-image, none);\n    border: var(--border, none);\n    color: var(--color);\n}\n\n\n[part="is-finished"]:checked ~ slot [part="description"]\n,[part="is-finished"]:checked ~ ::slotted([slot="description"])\n{\n    text-decoration: line-through;\n}\n\n::slotted([slot="custom-check"])\n{\n    display: none;\n}\n[part="is-finished"]:checked ~ [part="finished-indicator"]\n{\n    background: var(--finished-background);\n    background-color: var(--finished-background-color, transparent);\n    background-image: var(--finished-background-image, none);\n    border: var(--finished-border, none);\n    color: var(--finished-color);\n}\n[part="is-finished"]:checked ~ [part="finished-indicator"] ::slotted([slot="custom-check"])\n{\n    display: var(--custom-check-display, block);\n}\n\n[part="description"]\n{\n    /* user-agent input defaults */\n    --input-border-color: rgb(118, 118, 118);\n\n    min-height: 1.2em;\n    min-width: 24px;\n    resize: both;\n    background-color: field;\n    color: fieldtext;\n    border: solid 1px var(--input-border-color, fieldtext);\n    padding: 3px 15px 3px 5px;\n    font-size: 12px;\n    font-family: sans-serif;\n    display: block;\n    border-radius: 2px;\n    overflow: auto;\n    overflow-wrap: normal;\n\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        /* user-agent input defaults */\n        --input-border-color: rgb(133, 133, 133);\n    }\n}\n\n[part="description"]\n,::slotted([slot="description"])\n{\n    margin: 1em .5em 1em 0;\n    flex: 1;\n}\n\n[part="remove-button"]\n{\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    margin:1em .5em 1em 0;\n}\n[part="remove-icon"]\n{\n    width: var(--icon-width, var(--icon-size, 12px));\n    height: var(--icon-height, var(--icon-size, 12px));\n}\n\n\n:host(.stacked)\n{\n    display: grid;\n    grid-template-columns: auto auto 1fr auto;\n    grid-template-rows: auto 1fr;\n}\n\n:host(.stacked) [part="color-container"]\n,:host(.stacked) [part="color"]\n{\n    grid-row: 2;\n    grid-column: 2;\n    width: 14px;\n    height: 14px;\n    margin-block-end: 7px;\n    margin-block-start: 0;\n    border-radius: 3px;\n    align-self: center;\n    justify-self: center;\n}\n\n:host(.stacked) [part="handle"]\n{\n    grid-row: span 2;\n    grid-column: 1;\n}\n\n:host(.stacked) [part="is-finished"]\n,:host(.stacked) [part="finished-indicator"]\n{\n    grid-row: 1;\n    grid-column: 2;\n    margin-block-start: 7px;\n    margin-block-end: 0;\n}\n\n:host(.stacked) [part="description"]\n,:host(.stacked) [part="remove-button"]\n{\n    grid-row: span 2;\n}';
var task_card_default2 = '<slot name="handle">\n    <span part="handle"></span>\n</slot>\n<label part="color-container">\n    <input type="color" part="color" value="#919191" />\n</label>\n<input type="checkbox" part="is-finished" title="Finished?" id="finished-checkbox" />\n<label part="finished-indicator" for="finished-checkbox"><slot name="custom-check"></slot></label>\n<slot name="description"><div part="description" contenteditable="true"></div></slot>\n<button type="button" part="remove-button" title="Delete">\n    <slot name="remove-button-label">\n        <svg part="remove-icon" class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n            <path\n            style="display:inline;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\n            d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />\n        </svg>\n    </slot>\n</button>';
var COMPONENT_STYLESHEET18 = new CSSStyleSheet();
COMPONENT_STYLESHEET18.replaceSync(task_card_default);
var COMPONENT_TAG_NAME18 = "task-card";
var TaskCardElement = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  /**
   * Query for a part in the element's shadow DOM and then caches it so that the next time this function is called, the cached element can be provided.
   * @param key the part value of the child element to query for
   * @returns the requested `HTMLElement` or `undefined`
   */
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  /**
   * Query for a part in the element's shadow DOM
   * @param key the part value of the child element to query for
   * @returns the requested `HTMLElement` or `undefined`
   */
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  get value() {
    return this.findPart("description").textContent;
  }
  #previousValue = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = task_card_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET18);
    this.findPart("color").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
    });
    this.findPart("is-finished").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
    });
    this.findPart("description").addEventListener("blur", (event) => {
      if (this.value != this.#previousValue) {
        this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
      }
      this.#previousValue = this.value;
    });
    this.findPart("remove-button").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("remove", { bubbles: true, cancelable: true }));
    });
  }
  static create(props) {
    const element = document.createElement(COMPONENT_TAG_NAME18);
    if (props == null) {
      return element;
    }
    for (const [key, value] of Object.entries(props)) {
      if (key == "value" || key == "placeholder" || key == "color") {
        element.setAttribute(key, value);
      } else if (key.startsWith("on")) {
        const eventName = key.substring(2).toLowerCase();
        element.addEventListener(eventName, value);
      }
    }
    return element;
  }
  static observedAttributes = ["value", "description", "color", "is-finished"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "value" || attributeName == "description") {
      this.findPart("description").textContent = newValue;
    } else if (attributeName == "is-finished") {
      this.findPart("is-finished").checked = newValue == "true";
    } else if (attributeName == "color") {
      this.findPart("color").value = newValue;
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME18) == null) {
  customElements.define(COMPONENT_TAG_NAME18, TaskCardElement);
}

// node_modules/.pnpm/@magnit-ce+collection-browser@0.0.3/node_modules/@magnit-ce/collection-browser/dist/collection-browser.js
var collection_browser_default = ':host\n{\n    --border-color: rgb(205 205 205);\n\n    display: grid;\n    border: solid 1px var(--border-color);\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        --border-color: rgb(81 81 81);\n    }\n}\n\n[part="navigation"]\n{\n    border-right: solid 1px var(--border-color);\n}\n[part="categories"] > ::slotted(*)\n{\n    padding: var(--category-padding, 5px 15px);\n}\n\n[part="gallery"]\n{\n    margin: 0;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    /* gap: 1em; */\n    user-select: none;\n    overflow: auto;\n}\n\n[part="header"]\n{\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n\n    border-bottom: solid 1px var(--border-color);\n}\n\n[part="items"]\n{\n    padding: 0;\n    margin: 0;\n    list-style: none;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fill, var(--item-width, minmax(0, 100px)));\n    /* grid-column-gap: var(--column-gap, 1em);\n    grid-row-gap: var(--row-gap, 1em); */\n}\n\n\n::slotted(:not([slot]))\n{\n    border: solid 1px transparent;\n    margin: 3px 7px;\n}\n\n::slotted(:not([slot]):focus)\n{\n    border-color: rgb(205 205 205);\n}\n::slotted(:not([slot]):hover)\n{\n    background-color: var(--background-color-hover, rgb(221, 221, 221));\n}\n::slotted(:not([slot]).selected)\n{\n    background-color: var(--background-color-selected, highlight);\n    color: var(--color-selected, highlighttext);\n}\n@media (prefers-color-scheme: dark) \n{\n    ::slotted(:not([slot]):hover)\n    {\n        --background-color-hover: rgb(197, 197, 197);\n    }\n}\n\n[part="add-button"]\n{\n    align-self: center;\n    justify-self: flex-end;\n    margin: .5em 1em;\n}\n\n\n@media (max-width: 800px) \n{\n    \n}\n@media (min-width: 800px) \n{\n    :host\n    {\n        display: grid;\n        grid-template-columns: auto 1fr;\n    }\n}';
var collection_browser_default2 = '<nav part="navigation">\n    <slot name="navigation-header">\n        <header part="navigation-header">\n            <slot name="navigation-header-content"></slot>\n        </header>\n    </slot>\n    <selectable-items part="categories"><slot name="category"></slot></selectable-items>\n</nav>\n<div part="gallery">\n    <slot name="header">\n        <header part="header">\n            <slot name="header-content">\n            </slot>\n            <slot name="add-button">\n                <button part="add-button">\n                    <slot name="add-button-content">\n                        <span part="add-button-icon">+</span>\n                        <span part="add-button-label">Add Item</span>\n                    </slot>\n                </button>\n            </slot>\n        </header>\n    </slot>\n    <div part="items">\n        <slot></slot>\n    </div>\n</div>';
var selectable_items_default = ":host { user-select: none; }\n::slotted(*)\n{\n    user-select: none;\n    cursor: pointer;\n}\n::slotted(:hover)\n{\n    background-color: var(--background-color-hover, rgb(221, 221, 221));\n}\n::slotted(.selected)\n{\n    background-color: var(--background-color-selected, highlight);\n    color: var(--color-selected, highlighttext);\n}\n@media (prefers-color-scheme: dark) \n{\n    ::slotted(:hover)\n    {\n        --background-color-hover: rgb(197, 197, 197);\n    }\n}";
var COMPONENT_STYLESHEET19 = new CSSStyleSheet();
COMPONENT_STYLESHEET19.replaceSync(selectable_items_default);
document.addEventListener("keydown", (event) => {
  if (SelectableItemsElement.multipleModifierKeys.indexOf(event.code) > -1) {
    SelectableItemsElement._multipleModifierActive = true;
    return;
  }
});
document.addEventListener("keyup", (event) => {
  if (SelectableItemsElement.multipleModifierKeys.indexOf(event.code) > -1) {
    SelectableItemsElement._multipleModifierActive = SelectableItemsElement.multipleModifierActive;
  }
});
var COMPONENT_TAG_NAME19 = "selectable-items";
var SelectableItemsElement = class _SelectableItemsElement extends HTMLElement {
  static observedAttributes = [];
  // internal
  static _multipleModifierActive = false;
  // externally available to define when multiples are selected
  static multipleModifierKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight"];
  static multipleModifierActive = false;
  static selectKeys = ["Enter", "Space"];
  static selectedClassName = "selected";
  selected = () => [...this.querySelectorAll(`.${_SelectableItemsElement.selectedClassName}`)];
  // handledItems: WeakSet<Element> = new WeakSet();
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET19);
    this.addEventListener("click", (event) => {
      let item;
      const composedPath = event.composedPath();
      for (let i = 0; i < composedPath.length; i++) {
        const element = composedPath[i];
        if (element.parentElement == this) {
          item = element.tagName == "SLOT" ? element.assignedElements().find((slotChild) => composedPath.indexOf(slotChild) > -1) : element;
        }
      }
      if (item == null) {
        return;
      }
      this.selectItem(item);
    });
    this.addEventListener("keydown", (event) => {
      if (_SelectableItemsElement.selectKeys.indexOf(event.code) > -1) {
        this.selectItem(event.target);
        event.preventDefault();
      }
    });
    this.shadowRoot.querySelector("slot").addEventListener("slotchange", (event) => {
      const children = event.target.assignedElements();
      for (let i = 0; i < children.length; i++) {
        if (children[i].hasAttribute("tabIndex")) {
          continue;
        }
        children[i].setAttribute("tabIndex", "0");
      }
    });
  }
  selectItem(item) {
    const allowMultipleAttribute = this.getAttribute("multiple") ?? this.getAttribute("multi");
    if (_SelectableItemsElement._multipleModifierActive == false || allowMultipleAttribute == null) {
      const currentlySelected = [...(item.parentElement ?? this).children].reduce((selected, currentItem, _index) => {
        if (currentItem.classList.contains(_SelectableItemsElement.selectedClassName)) {
          selected.push(currentItem);
        }
        return selected;
      }, new Array());
      currentlySelected.forEach((currentItem) => currentItem.classList.remove(_SelectableItemsElement.selectedClassName));
    }
    item.classList.add(_SelectableItemsElement.selectedClassName);
    this.dispatchEvent(new Event("change"));
  }
};
if (customElements.get(COMPONENT_TAG_NAME19) == null) {
  customElements.define(COMPONENT_TAG_NAME19, SelectableItemsElement);
}
var COMPONENT_STYLESHEET22 = new CSSStyleSheet();
COMPONENT_STYLESHEET22.replaceSync(collection_browser_default);
var COMPONENT_TAG_NAME23 = "collection-browser";
var CollectionBrowserElement = class _CollectionBrowserElement extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  get selected() {
    return this.#getSelected();
  }
  #getSelected = () => [
    ...this.shadowRoot.querySelector("slot:not([name])").assignedElements().reduce((selected, item, _index) => {
      if (item.classList.contains("selected")) {
        selected.push(item);
      }
      return selected;
    }, new Array())
  ];
  get allowMultiSelect() {
    return this.hasAttribute("multi") || this.hasAttribute("multiple");
  }
  handledItems = /* @__PURE__ */ new WeakSet();
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = collection_browser_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET22);
    let previousCategorySelection = [];
    this.shadowRoot.querySelector("selectable-items").addEventListener("change", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const categories = [...this.querySelectorAll('[slot="category"]')];
      const selected = categories.find((item) => item.classList.contains("selected"));
      const changeEvent = new CustomEvent("category", { cancelable: true, detail: { previousSelection: previousCategorySelection, newSelection: selected } });
      const value = this.dispatchEvent(changeEvent);
      if (selected == null) {
        previousCategorySelection = [];
      } else {
        previousCategorySelection = [selected];
      }
      if (value == false || selected == null) {
        return;
      }
      const category = selected.dataset.category;
      if (category == null || category.trim() == "") {
        return;
      }
      this.dataset.category = category;
      const items = [...this.querySelectorAll(":not([slot])")];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.classList.remove("has-category");
        if (item.dataset.category == null || item.dataset.category.trim() == "") {
          continue;
        }
        if (item.dataset.category == category) {
          item.classList.add("has-category");
        } else {
          const categoriesArray = item.dataset.category.split(",");
          for (let j = 0; j < categoriesArray.length; j++) {
            const currentCategory = categoriesArray[j];
            if (currentCategory == category) {
              item.classList.add("has-category");
              break;
            }
          }
        }
      }
    });
    this.shadowRoot.querySelector("slot:not([name])").addEventListener("slotchange", (event) => {
      const children = event.target.assignedElements();
      for (let i = 0; i < children.length; i++) {
        if (this.handledItems.has(children[i])) {
          continue;
        }
        children[i].addEventListener("click", (event2) => {
          event2.stopPropagation();
          const currentlySelected = children.reduce((selected, item, _index) => {
            if (item.classList.contains(_CollectionBrowserElement.selectedClassName) && item != children[i]) {
              selected.push(item);
            }
            return selected;
          }, new Array());
          const shift = event2.getModifierState("Shift");
          const ctrl = event2.getModifierState("Control");
          const alt = event2.getModifierState("Alt");
          const changeEvent = new CustomEvent("change", { cancelable: true, detail: { newSelection: children[i], previousSelection: currentlySelected, shift, ctrl, alt } });
          const value = this.dispatchEvent(changeEvent);
          if (value == false) {
            return;
          }
          if (this.allowMultiSelect == false) {
            for (let i2 = 0; i2 < currentlySelected.length; i2++) {
              currentlySelected[i2].classList.remove(_CollectionBrowserElement.selectedClassName);
            }
          }
          children[i].classList.toggle(_CollectionBrowserElement.selectedClassName);
        });
      }
    });
  }
  static selectedClassName = "selected";
  // static create(props?: CollectionBrowserProperties)
  // {
  //     const element = document.createElement(COMPONENT_TAG_NAME) as CollectionBrowserElement;
  //     if(props != null)
  //     {
  //         for(const [key, value] of Object.entries(props))
  //         {
  //             if(key == 'open')
  //             {
  //                 element.findPart<HTMLDialogElement>('dialog').open = value as boolean;
  //             }
  //             // else if(key == 'key')
  //             // {
  //             //     element.dataset.key = value as string;
  //             // }
  //             else if(key.startsWith('on'))
  //             {
  //                 // const eventName = key.substring(2).toLowerCase();
  //                 // element.addEventListener(eventName, value as any);
  //             }
  //         }
  //     }
  //     return element;
  // }
  // attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string) 
  // {
  // }
  clearSelection() {
    this.dispatchEvent(new CustomEvent("change", { detail: { newSelection: null, previousSelection: this.selected, shift: false, ctrl: false, alt: false } }));
  }
};
if (customElements.get(COMPONENT_TAG_NAME23) == null) {
  customElements.define(COMPONENT_TAG_NAME23, CollectionBrowserElement);
}

// node_modules/.pnpm/@magnit-ce+collection-filter@0.0.4/node_modules/@magnit-ce/collection-filter/dist/collection-filter.js
var collection_filter_default = 'svg\n{\n    width: 12px;\n    height: 12px;\n}\n\nbutton\n{\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: var(--button-padding, 2px 5px);\n}\n\nsearch, form, [part="query"]\n{\n    display: flex;\n    min-width:0;\n    flex: 1;\n}\n\n[part="query"] input\n{\n    flex: 1;\n    min-width: 0;\n}\n\n\nbutton\n{\n    border: solid 1px transparent;\n}\n:host([regex]) [part="regex-button"]\n{\n    border-color: highlight;\n}\n\n[part="filter-button"]\n{\n    display: none;\n    /* functionality has not been implemented */\n}\n';
var collection_filter_default2 = '<search part="search">\n    <form part="form">\n        <span part="query">\n            <!-- <button type="button" part="filter-button" title="Filters" popovertarget="filter-list-container">\n                <slot name="filter-icon">\n                    <svg part="filter-icon"  class="icon filter" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                    <path\n                        style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"\n                        d="m 1.8697249,0.49986407 c -0.3237,0 -0.4665,0.34257 -0.25647,0.57509003 l 6.71347,7.43236 0.41559,13.3278599 c 0.008,0.25922 -0.0185,0.53883 0.14083,0.46848 l 4.6352201,-2.04568 c 0.15939,-0.0703 0.29609,-0.20929 0.30565,-0.46847 l 0.41593,-11.2821899 7.02268,-7.42331 c 0.16433,-0.27887003 -0.26045,-0.58414003 -0.58412,-0.58414003 z" />\n                    </svg>\n                </slot>\n            </button> -->\n            <input type="search" part="input" />\n            <button type="button" part="regex-button" title="Regex?">\n                <slot name="regex-icon">\n                    <svg part="regex-icon" class="icon regex" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                        <path\n                            style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:0.799997;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"\n                            d="m 13.39781,0.28938961 c -0.224939,0.0457322 -0.420792,0.21339591 -0.508262,0.34752541 -0.08747,0.1341295 -0.111102,0.2373859 -0.126685,0.3185644 -0.03118,0.16236468 -0.02196,0.26434118 -0.01375,0.37344288 0.01649,0.2182033 0.059,0.4438907 0.116002,0.7087705 0.114041,0.5297673 0.291114,1.1921891 0.468579,1.8565308 0.06283,0.2351616 0.103522,0.4158349 0.163312,0.6432315 0.01938,0.1321316 0.03993,0.2540164 0.05955,0.3810597 C 13.443987,4.8517115 13.336761,4.7859384 13.219236,4.7173167 13.03212,4.5780833 12.881108,4.4734066 12.688084,4.3286323 12.137552,3.9157161 11.588154,3.5045247 11.138869,3.2006945 10.914235,3.0487795 10.721766,2.9241398 10.525296,2.8272516 10.427057,2.778788 10.335156,2.7326266 10.172719,2.7007389 10.091501,2.6848185 9.988104,2.6684299 9.8308249,2.6991781 9.6735379,2.7300044 9.4446367,2.8494153 9.3179834,3.0406085 9.1913224,3.2318018 9.1703867,3.4875975 9.2035055,3.6442107 c 0.033135,0.1566131 0.089385,0.2455801 0.1358434,0.3139911 0.092925,0.1368219 0.1718224,0.2030321 0.2548929,0.2743618 0.1661411,0.142675 0.3551794,0.2721376 0.5830492,0.4191673 0.455755,0.2940671 1.05101,0.6386894 1.646899,0.98314 0.211724,0.1223843 0.369894,0.2209114 0.57389,0.3399087 0.106397,0.079048 0.205347,0.1517355 0.308314,0.2271078 -0.124066,0.031529 -0.243772,0.060872 -0.372418,0.0945 -0.233215,0.034026 -0.41626,0.066335 -0.657844,0.1006029 C 10.994485,6.4937694 10.313275,6.5902752 9.7804511,6.6926965 9.5140393,6.7438915 9.2904522,6.7931824 9.0829243,6.8634117 8.9791682,6.8985303 8.8815232,6.9297468 8.7440856,7.0219291 8.6753941,7.0679734 8.589268,7.1298991 8.4998754,7.2627643 8.4104827,7.3956217 8.3334764,7.6417326 8.3792941,7.8663587 8.4250884,8.0909926 8.59298,8.2865795 8.7272995,8.3739311 c 0.1343117,0.087359 0.2361767,0.1094294 0.3174733,0.1249908 0.1625776,0.031139 0.2646926,0.02349 0.3739425,0.015218 0.2184997,-0.016467 0.4444938,-0.058921 0.7097337,-0.1158444 0.530487,-0.1138855 1.195333,-0.2907192 1.860577,-0.467943 0.238325,-0.063526 0.421479,-0.1057849 0.65174,-0.166142 0.12949,-0.018964 0.249376,-0.037226 0.373943,-0.056424 -0.06541,0.1098664 -0.129764,0.2146134 -0.196892,0.3292325 -0.1409,0.188891 -0.247133,0.3415397 -0.393792,0.5365335 -0.413478,0.5497849 -0.826752,1.0984382 -1.130994,1.5471135 -0.152122,0.224329 -0.275407,0.418067 -0.372419,0.614262 -0.04853,0.09811 -0.09476,0.18989 -0.126685,0.352107 -0.01594,0.08111 -0.03392,0.184357 -0.0031,0.34143 0.03087,0.157074 0.150442,0.385657 0.341895,0.512146 0.191453,0.126481 0.44912,0.147396 0.605946,0.114315 0.156826,-0.03309 0.245921,-0.09079 0.314425,-0.137181 0.137,-0.0928 0.2033,-0.170068 0.274735,-0.253026 0.142865,-0.165915 0.272503,-0.356219 0.419741,-0.583787 0.294466,-0.455129 0.638025,-1.048055 0.982944,-1.6431273 0.12255,-0.2114372 0.221211,-0.3693927 0.34037,-0.5731193 0.07941,-0.1065887 0.151715,-0.2062708 0.227417,-0.3094179 0.03141,0.1233832 0.05955,0.2424585 0.0931,0.3703915 0.03423,0.2339442 0.06775,0.4175597 0.102263,0.6599947 0.09691,0.6807303 0.193547,1.3594863 0.296108,1.8915873 0.05127,0.26605 0.100622,0.490856 0.170947,0.698102 0.03517,0.103623 0.06799,0.201128 0.160265,0.338379 0.04611,0.0686 0.106585,0.153086 0.23963,0.242357 0.133038,0.08927 0.379483,0.167695 0.604415,0.12194 0.224939,-0.04573 0.420791,-0.213396 0.508269,-0.347526 0.08747,-0.134137 0.111095,-0.237386 0.126677,-0.318572 0.03118,-0.162357 0.02196,-0.264333 0.01375,-0.373435 -0.01649,-0.218203 -0.059,-0.443891 -0.115994,-0.708778 -0.114048,-0.52976 -0.291122,-1.1921823 -0.468579,-1.8565236 -0.06283,-0.2351616 -0.103529,-0.4158349 -0.16332,-0.6432315 -0.01938,-0.1321316 -0.03993,-0.2540242 -0.05955,-0.3810597 0.112571,0.066803 0.219789,0.1325764 0.337315,0.2011981 0.187124,0.1392334 0.338135,0.2439023 0.531159,0.3886844 0.550524,0.4129162 1.099923,0.824108 1.549207,1.127938 0.224642,0.1519153 0.417111,0.2765553 0.613581,0.3734433 0.09823,0.04846 0.19014,0.09462 0.352577,0.126505 0.08122,0.01592 0.184607,0.03231 0.341894,0.0016 0.157287,-0.03083 0.386189,-0.150237 0.512842,-0.34143 0.126653,-0.1911933 0.147597,-0.4469893 0.11447,-0.6036023 C 20.126173,9.3665769 20.06993,9.2776018 20.023464,9.2091986 19.930547,9.0723767 19.851641,9.0061665 19.768571,8.934829 19.60243,8.7921619 19.413391,8.6626992 19.185522,8.5156618 18.729775,8.2215946 18.134511,7.8769801 17.538631,7.5325295 17.326906,7.4101452 17.168736,7.3116181 16.964733,7.1926209 c -0.10639,-0.079048 -0.20534,-0.1517434 -0.308315,-0.2271078 0.124075,-0.031529 0.243773,-0.060872 0.372419,-0.094508 0.233215,-0.034026 0.416259,-0.066257 0.657844,-0.1005951 0.681655,-0.096779 1.362857,-0.1932848 1.89568,-0.2957061 0.266412,-0.051195 0.489999,-0.1004859 0.697527,-0.1707152 0.103764,-0.035119 0.201409,-0.066335 0.338839,-0.1585174 0.06869,-0.046122 0.154817,-0.10797 0.24421,-0.2408352 0.08939,-0.1328574 0.166399,-0.3789683 0.120581,-0.6036022 -0.04579,-0.224626 -0.213686,-0.420213 -0.347997,-0.5075724 -0.134312,-0.087352 -0.236185,-0.1094216 -0.317473,-0.124983 -0.162586,-0.031138 -0.264701,-0.02349 -0.373951,-0.015218 -0.2185,0.016467 -0.444494,0.058921 -0.709733,0.1158366 -0.530487,0.1138933 -1.195333,0.290727 -1.860577,0.467943 -0.238318,0.063526 -0.42148,0.1057927 -0.651741,0.166142 -0.12949,0.018964 -0.249375,0.037226 -0.373942,0.056424 0.06541,-0.1098664 0.129764,-0.2146134 0.196892,-0.3292403 0.140907,-0.188891 0.247141,-0.3415319 0.393792,-0.5365335 0.413477,-0.5497771 0.826751,-1.0984305 1.130994,-1.5471051 0.152121,-0.2243374 0.275407,-0.4180669 0.372426,-0.6142704 0.04853,-0.098098 0.09475,-0.1898821 0.126685,-0.3520987 0.01594,-0.081108 0.03392,-0.1843568 0.0031,-0.3414304 C 18.541151,1.5818539 18.421585,1.3532633 18.230125,1.2267819 18.038672,1.1003005 17.781004,1.080915 17.624178,1.1139889 17.467353,1.1470784 17.378265,1.2032447 17.309761,1.249648 17.172753,1.3424468 17.106453,1.4197155 17.035026,1.5026733 16.892157,1.668589 16.762519,1.8588925 16.615289,2.086453 16.320815,2.5415816 15.977256,3.1345156 15.632338,3.7295878 15.509787,3.9410249 15.411126,4.0989804 15.291975,4.302707 15.212554,4.4092957 15.140252,4.5089778 15.064551,4.6121249 15.033136,4.4887417 15.005003,4.3696664 14.971446,4.2417334 14.937218,4.0077814 14.903692,3.8241738 14.869183,3.5817387 14.772272,2.9010084 14.675635,2.2222525 14.573074,1.6901518 14.52181,1.4241014 14.472452,1.1992958 14.402127,0.99204952 14.366961,0.88842632 14.334139,0.79091382 14.241871,0.65367052 14.195686,0.58507222 14.135278,0.50058482 14.00224,0.41131342 13.869194,0.32204206 13.622757,0.24361842 13.397818,0.289374 Z" />\n                        <path\n                            style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"\n                            d="m 2.3960485,12.796482 h 8.6904305 c 0.26835,0 0.48438,0.21604 0.48438,0.48438 v 8.67733 c 0,0.26835 -0.21603,0.48439 -0.48438,0.48439 H 2.3960485 c -0.26835,0 -0.48439,-0.21604 -0.48439,-0.48439 v -8.67733 c 0,-0.26834 0.21604,-0.48438 0.48439,-0.48438 z" />\n                    </svg>\n                </slot>\n            </button>\n            <button type="submit" part="search-button" title="Search">\n                <slot name="search-icon">\n                    <svg part="search-icon" class="icon magnifying-glass" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                    <path\n                        style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke-width:1.00001;stroke-linecap:round;-inkscape-stroke:none"\n                        d="m 13.933452,0.33101262 c 4.665112,0 8.484511,3.81819728 8.484511,8.48276858 0,4.6645798 -3.819397,8.4827768 -8.484511,8.4827768 -1.192569,0 -2.291872,-0.315962 -3.312255,-0.763428 -0.01293,0.01395 -0.01062,0.02239 -0.02429,0.03642 l -0.0035,0.0036 -0.0052,0.0053 -5.0265086,5.023041 c -1.1757993,1.176212 -3.1098412,1.176212 -4.2856361,0 -1.17525285,-1.176408 -1.17551045,-3.11046 0.00178,-4.285633 L 6.2973927,12.297813 C 5.7998422,11.231935 5.4489409,10.075498 5.4489418,8.8137812 5.4489453,4.1492099 9.2683445,0.33101262 13.933452,0.33101262 Z m 0,1.77671558 c -3.698211,0 -6.7077912,3.00885 -6.7077947,6.706053 -9e-7,1.2159838 0.3489754,2.3493058 0.9334695,3.3504318 L 8.6154513,12.945 7.8259926,13.387438 c -0.1727127,0.09663 -0.260868,0.155498 -0.2758768,0.17004 l -0.039905,0.0382 -4.9761929,4.976189 c -0.4938381,0.492967 -0.495224,1.279271 -0.00178,1.773242 0.4934623,0.493643 1.2797717,0.493652 1.7732439,0 l 5.021306,-5.017827 c 0.016968,-0.01741 0.077527,-0.11092 0.1787127,-0.300167 l 0.4250934,-0.794671 0.7877241,0.435508 c 0.968614,0.534854 2.054792,0.851917 3.215091,0.851917 3.698219,0 6.707794,-3.00885 6.707794,-6.7060612 0,-3.6972029 -3.00958,-6.706053 -6.707794,-6.706053 z" />\n                    <path\n                        style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:none;stroke-width:0.500001;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\n                        d="m 13.933412,1.441451 c 4.060915,0 7.374068,3.3121531 7.374068,7.3722324 0,4.0600786 -3.31315,7.3722326 -7.374068,7.3722326 -1.357274,0 -2.63002,-0.371201 -3.724448,-1.015473 a 1.9197456,1.9197456 0 0 1 -0.4067369,0.623423 l -5.0263745,5.023156 a 1.9197456,1.9197456 0 0 1 -2.7154086,0 1.9197456,1.9197456 0 0 1 0.00187,-2.715407 L 7.0868452,13.078458 A 1.9197456,1.9197456 0 0 1 7.6684894,12.691916 C 6.966462,11.563897 6.5593712,10.235038 6.5593721,8.8136834 6.5593756,4.7536041 9.8725264,1.441451 13.933439,1.441451 Z m 0,1.9207539 c -3.023755,0 -5.4533082,2.4292498 -5.4533109,5.4514785 -1.8e-6,3.0222286 2.4295529,5.4514696 5.4533109,5.4514696 3.02376,0 5.45515,-2.429241 5.455149,-5.4514696 -2e-6,-3.0222287 -2.431391,-5.4514785 -5.455149,-5.4514785 z" />\n                    <path\n                        style="color:#000000;display:inline;fill:var(--icon-secondary-color,InfoBackground);fill-opacity:1;stroke-width:0.866683;-inkscape-stroke:none"\n                        d="M 8.3751718,8.8139322 A 5.5588643,5.557011 0 0 0 13.934035,14.370947 5.5588643,5.557011 0 0 0 19.4929,8.8139322 5.5588643,5.557011 0 0 0 13.934035,3.2569256 5.5588643,5.557011 0 0 0 8.3751718,8.8139322 Z" />\n                    </svg>\n                </slot>\n            </button>\n        </span>\n        <!-- <div part="filter-list-container" id="filter-list-container" popover>\n            <header>\n                <span part="filter-list-title">Filters</span>\n                <button type="button" part="close-filter-list-button" popovertarget="filter-list-container">\n                    <slot name="close-icon">\n                        <svg part="close-icon"  class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                            <path\n                                style="color:#000000;display:inline;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\n                                d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />\n                        </svg>\n                    </slot>\n                </button>\n            </header>\n            <ul class="filters" part="filter-list"></ul>\n            <button type="button" part="new-filter">\n                <svg part="new-filter-icon" class="icon plus" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                    <path\n                        style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-opacity:1;-inkscape-stroke:none"\n                        d="M 11.406117,0.76837147 A 1.6733008,1.6733014 0 0 0 9.7322668,2.4422315 v 7.29197 h -7.29198 a 1.6733008,1.6733014 0 0 0 -1.67190999,1.6738595 1.6733008,1.6733014 0 0 0 1.67190999,1.67239 h 7.29198 v 7.29343 a 1.6733008,1.6733014 0 0 0 1.6738502,1.67241 1.6733008,1.6733014 0 0 0 1.67433,-1.67241 v -7.29343 h 7.29149 a 1.6733008,1.6733014 0 0 0 1.6724,-1.67239 1.6733008,1.6733014 0 0 0 -1.6724,-1.6738595 h -7.29149 v -7.29197 a 1.6733008,1.6733014 0 0 0 -1.67433,-1.67386003 z" />\n                </svg>\n                <span part="new-filter-label">New Filter...</span>\n            </button>\n        </div> -->\n    </form>\n</search>';
var QueryMatch = class {
  constructor(value, start, end) {
    this.value = value;
    this.start = start;
    this.end = end;
  }
};
var ItemFilterMatch = class {
  constructor(item, queryMatches, filter, propertyName) {
    this.item = item;
    this.queryMatches = queryMatches;
    this.filter = filter;
    this.propertyName = propertyName;
  }
};
var ItemFilter = class {
  constructor(value, type = "textQuery", compare) {
    this.value = value;
    this.type = type;
    this.compare = compare;
  }
};
var ItemFilters = class {
  filters = [];
  query = "";
  utilities;
  constructor() {
    this.utilities = {
      matchTextQuery: this.matchTextQuery,
      matchRegexQuery: this.matchRegexQuery
    };
  }
  setQuery(query, comparison, mode = null) {
    const existingQueryFilterIndex = this.filters.findIndex((item) => item.type == "textQuery" || item.type == "regexQuery");
    if (existingQueryFilterIndex != -1) {
      this.removeFilter(existingQueryFilterIndex);
    }
    if (query == "") {
      return;
    }
    const filterType = mode == "regex" ? "regexQuery" : "textQuery";
    this.addFilter(query, filterType, comparison);
  }
  addFilter(value, type, comparison) {
    const filter = new ItemFilter(value, type, comparison);
    this.filters.push(filter);
    return filter;
  }
  addFilters(...filters) {
    this.filters.concat(filters);
  }
  removeFilter(index) {
    this.filters.splice(index, 1);
  }
  filterItems(items, context) {
    const matching = [];
    let failedComparison = false;
    for (let i = 0; i < items.length; i++) {
      failedComparison = false;
      let matchResult = null;
      for (let j = 0; j < this.filters.length; j++) {
        const currentMatchResult = this.filters[j].compare.call(context ?? this, this.filters[j], items[i], this.utilities);
        if (currentMatchResult != false) {
          matchResult = currentMatchResult;
        } else {
          failedComparison = true;
        }
        if (failedComparison == true) {
          break;
        }
      }
      if (failedComparison == false && matchResult != null) {
        matching.push(matchResult);
      }
    }
    return matching;
  }
  matchTextQuery(query, propertyValue) {
    const results = [];
    const matchIndex = propertyValue.toLowerCase().indexOf(query.toLowerCase());
    if (matchIndex == -1) {
      return results;
    }
    const result = new QueryMatch(query, matchIndex, matchIndex + query.length);
    results.push(result);
    return results;
  }
  matchRegexQuery(query, propertyValue) {
    const matches = Array.from(propertyValue.matchAll(new RegExp(query, "gi")));
    const results = [];
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      const value = match[0];
      const result = new QueryMatch(value, match.index, match.index + value.length);
      results.push(result);
    }
    return results;
  }
};
var COMPONENT_STYLESHEET20 = new CSSStyleSheet();
COMPONENT_STYLESHEET20.replaceSync(collection_filter_default);
var COMPONENT_TAG_NAME20 = "collection-filter";
var CollectionFilterElement = class extends HTMLElement {
  // #boundEventHandlers: Map<string, (event?:Event) => void> = new Map([
  // ]);
  componentParts = /* @__PURE__ */ new Map();
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  itemFilters = new ItemFilters();
  get filterPropertyAttribute() {
    return this.getAttribute("filter-property") ?? "data-filter-property";
  }
  constructor() {
    super();
    const parentForm = this.closest("form");
    if (parentForm != null) {
      throw new Error("The <collection-filter> element cannot be placed inside of a <form> element.");
    }
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = collection_filter_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET20);
    this.findPart("form").addEventListener("submit", (event) => {
      const mode = this.hasAttribute("regex") ? "regex" : null;
      const queryComparison = mode == "regex" ? this.regexQueryComparison : this.textQueryComparison;
      this.itemFilters.setQuery(this.findPart("input").value, queryComparison, mode);
      this.dispatchEvent(new CustomEvent("change", { detail: { filters: this.itemFilters.filters } }));
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    this.findPart("regex-button").addEventListener("click", () => {
      if (this.hasAttribute("regex")) {
        this.removeAttribute("regex");
      } else {
        this.toggleAttribute("regex", true);
      }
    });
    this.findPart("input").addEventListener("input", (event) => {
      if (event.currentTarget.value == "") {
        this.itemFilters.setQuery("", () => {
          return false;
        });
        this.dispatchEvent(new CustomEvent("change", { detail: { filters: this.itemFilters.filters } }));
      }
    });
  }
  static observedAttributes = ["placeholder"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "placeholder") {
      this.findPart("input").placeholder = newValue;
    }
  }
  filterElements(items) {
    return this.itemFilters.filterItems(items, this);
  }
  textQueryComparison(filter, item, utilities) {
    const propertyValue = item.getAttribute(this.filterPropertyAttribute);
    const queryValue = propertyValue ?? item.textContent ?? "";
    const results = utilities.matchTextQuery(filter.value, queryValue);
    if (results.length == 0) {
      return false;
    }
    return new ItemFilterMatch(item, results, filter, propertyValue == null ? "[ Text Content ]" : this.filterPropertyAttribute);
  }
  regexQueryComparison(filter, item, utilities) {
    const propertyValue = item.getAttribute(this.filterPropertyAttribute);
    const queryValue = propertyValue ?? item.textContent ?? "";
    const results = utilities.matchRegexQuery(filter.value, queryValue);
    if (results.length == 0) {
      return false;
    }
    return new ItemFilterMatch(item, results, filter, propertyValue == null ? "[ Text Content ]" : this.filterPropertyAttribute);
  }
  // addFilters(...filters: ItemFilter[])
  // {
  //     this.#itemFilters.addFilters(...filters);
  // }
  // addTextFilter(query: string)
  // {
  //     this.#itemFilters.addTextFilter(query);
  //     this.dispatchEvent(new CustomEvent('change', { detail: { filters: this.#itemFilters.filters } }));
  // }
  // addTagFilter()
  // {
  // }
  // removeFilter(index: number)
  // {
  //     this.itemFilters.removeFilter(index);
  // }
};
if (customElements.get(COMPONENT_TAG_NAME20) == null) {
  customElements.define(COMPONENT_TAG_NAME20, CollectionFilterElement);
}

// node_modules/.pnpm/@magnit-ce+fileimage-input@0.0.2/node_modules/@magnit-ce/fileimage-input/dist/fileimage-input.js
var fileimage_input_default = '\n:host \n{ \n    display: inline-grid;\n    grid-template-columns: 1fr auto;\n    gap: .25em;\n    min-height: 34px;\n\n    /* user-agent input defaults */\n    --border-color: rgb(118, 118, 118);\n\n    /* slotted elements can inherit this for easy color matching */\n    --placeholder-color: #757575;\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n      --border-color: rgb(133, 133, 133);\n    }\n}\n\n/* block styles */\n:host(.block)\n{\n    grid-template-columns: 1fr 1fr;\n}\n:host(.block) [part="label"]\n{\n    grid-column: span 2;\n    grid-row: 1;\n}\n:host(.block) [part="field"]\n{\n    border: dashed 1px #666;\n    display: grid;\n    gap: .5em;\n    justify-items: center;\n}\n:host(.block) [part="preview"]\n{\n    height: 70px;\n}\n:host(.block) [part="placeholder-icon"]\n{\n    font-size: 3em;\n}\n:host(.block) [part="clear"]\n{\n    grid-column: 1;\n    grid-row: 2;\n}\n:host(.block) [part="view-link"]\n{\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: flex-end;\n}\n/* end block styles */\n\ninput\n{\n    display: none;\n}\n\n[part="label"]\n{\n    flex: 1;\n    display: flex;\n    grid-row: span 2;\n    grid-column: 1;\n    overflow: hidden;\n}\n\n[part="field"]\n{\n    flex: 1;\n    white-space: nowrap;\n\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n    gap: .25em;\n    padding: .25em .5em;\n\n    background-color: field;\n    color: fieldtext;\n\n    font-size: 13.33px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: var(--border-color);\n    border-radius: 2px;\n    overflow: hidden;\n    min-width: 0;\n\n}\n[part="field"]:focus-visible\n,[part="field"]:focus\n{\n    outline: solid 2px;\n    border-radius: 3px;\n}\n\n[part="status"]\n{\n    overflow: hidden;\n}\n\n[part="preview"][src=""]\n,[part="preview"]:not([src])\n{\n    display: none;\n}\n[part="preview"]\n{\n    height: 1em;\n}\n\n[part="view-link"][href="#"]\n{\n    display: none;\n}\n[part="view-link"]\n{\n    white-space: nowrap;\n    font-size: .75em;\n    grid-column: 2;\n    grid-row: 2;\n    align-self: center;\n}\n\n[part="thumbnail"]\n{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n[part="placeholder-label"]\n,[part="placeholder-icon"]\n,::slotted([slot="placeholder"])\n,::slotted([slot="placeholder-icon"])\n{\n    color: var(--placeholder-color);\n}\n:host([specified]) [part="placeholder-label"]\n,:host([specified].image) [part="placeholder-icon"]\n,:host([specified]) ::slotted([slot="placeholder"])\n,:host([specified].image) ::slotted([slot="placeholder-icon"])\n{\n    display: none;\n}\n\n[part="clear"]\n{\n    display: none;\n    white-space: nowrap;\n    font-size: .75em;\n    grid-column: 2;\n    grid-row: 1;\n    align-self: center;\n}\n:host([specified]) [part="clear"]\n{\n    display: block;\n}';
var fileimage_input_default2 = '<label part="label" tabindex="0">\n    <input type="file" part="input" />\n    <span part="field">\n        <span part="thumbnail">\n            <slot name="placeholder-icon"><span part="placeholder-icon">\u{1F5CE}</span></slot>\n            <img alt="image preview" title="Image Preview" part="preview" />\n        </span>\n        <span part="status">\n            <span part="filename"></span>\n            <slot name="placeholder"><span part="placeholder-label"></span></slot>\n        </span>\n    </span>\n</label>\n<a href="" part="clear" tabindex="0"><slot name="clear">Clear Selection</slot></a>\n<a href="#" target="_blank" part="view-link" tabindex="0"><slot name="view-link">View Selection</slot></a>';
var COMPONENT_STYLESHEET21 = new CSSStyleSheet();
COMPONENT_STYLESHEET21.replaceSync(fileimage_input_default);
var COMPONENT_TAG_NAME21 = "fileimage-input";
var FileImageInputElement = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  get files() {
    return this.findPart("input").files;
  }
  #previewURL;
  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = "file";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = fileimage_input_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET21);
    this.findPart("label").tabIndex = 0;
    const placeholderLabel = this.findPart("placeholder-label");
    if (placeholderLabel != null) {
      placeholderLabel.textContent = this.getAttribute("placeholder") ?? "Select a file...";
    }
    this.updateFormStatus();
    const input = this.findPart("input");
    input.addEventListener("input", () => {
      const value = input.files == null ? null : input.files[0];
      this.updateFormStatus();
      this.updatePreview(value);
      this.dispatchEvent(new Event("change"));
    });
    this.addEventListener("keydown", (event) => {
      if (event.code == "Space" || event.code == "Enter" || event.code == "NumpadEnter") {
        this.findPart("input").click();
        event.preventDefault();
        event.stopPropagation();
      }
    });
    this.findPart("clear").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.value = null;
      this.dispatchEvent(new Event("change"));
      return false;
    });
    this.findPart("clear").addEventListener("keydown", (event) => {
      if (event.code == "Space" || event.code == "Enter" || event.code == "NumpadEnter") {
        event.preventDefault();
        event.stopPropagation();
        this.value = null;
        this.dispatchEvent(new Event("change"));
        return false;
      }
    });
    this.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    this.addEventListener("drop", (event) => {
      event.preventDefault();
      if (event.dataTransfer == null) {
        return;
      }
      const accepted = this.findPart("input").getAttribute("accept").split(",").map((item) => item.trim());
      if (event.dataTransfer.items) {
        const dataItems = [...event.dataTransfer.items];
        for (let i = 0; i < dataItems.length; i++) {
          const item = dataItems[i];
          if (item.kind == "file") {
            const file = item.getAsFile();
            if (file == null) {
              this.value = file;
              return;
            }
            if (accepted.indexOf(file.type) > -1) {
              this.value = file;
            } else {
              this.dispatchEvent(new CustomEvent("deny", { detail: {
                file,
                message: "File type disallowed by accepted list",
                accepted
              } }));
            }
          }
        }
      } else {
        const dataFiles = [...event.dataTransfer.files];
        for (let i = 0; i < dataFiles.length; i++) {
          const file = dataFiles[i];
          if (file == null) {
            this.value = file;
            return;
          }
          if (accepted.indexOf(file.type) > -1) {
            this.value = file;
          } else {
            this.dispatchEvent(new CustomEvent("deny", { detail: {
              file,
              message: "File type disallowed by accepted list",
              accepted
            } }));
          }
        }
      }
    });
  }
  connectedCallback() {
    this.updateFormStatus();
    this.updatePreview(this.value);
  }
  // custom elements reference
  static observedAttributes = ["accept"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "accept") {
      this.findPart("input").setAttribute("accept", newValue);
    }
  }
  updatePreview(file) {
    if (file == null) {
      this.findPart("preview").removeAttribute("src");
      this.findPart("view-link").href = "#";
      this.findPart("filename").textContent = "";
      this.removeAttribute("specified");
      this.classList.remove("file", "image");
      const placeholderLabel = this.findPart("placeholder-label");
      if (placeholderLabel != null) {
        placeholderLabel.textContent = this.getAttribute("placeholder") ?? "Select a file...";
      }
      if (this.#previewURL != null) {
        window.URL.revokeObjectURL(this.#previewURL);
        this.#previewURL = void 0;
      }
      return;
    }
    this.findPart("filename").textContent = file.name;
    this.toggleAttribute("specified", true);
    if (file.type.startsWith("image")) {
      this.classList.add("image");
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        const result = event.target?.result;
        this.findPart("preview").src = result;
      });
      reader.readAsDataURL(file);
    } else {
      this.classList.add("file");
    }
    this.#previewURL = window.URL.createObjectURL(file);
    this.findPart("view-link").href = this.#previewURL;
  }
  ///// Form Functionality ///// 
  static formAssociated = true;
  // this allows form event functionality;
  #internals;
  // #defaultValue: null = null;
  get value() {
    const input = this.findPart("input");
    return input.files == null ? null : input.files[0];
  }
  set value(val) {
    const transfer = new DataTransfer();
    if (val != null) {
      transfer.items.add(val);
    }
    const input = this.findPart("input");
    input.files = transfer.files;
    this.updateFormStatus();
    this.updatePreview(input.files == null ? null : input.files[0]);
  }
  get validity() {
    return this.#internals.validity;
  }
  #validationMessage = "Please fill out this field.";
  get validationMessage() {
    return this.#validationMessage;
  }
  setCustomValidity(value) {
    this.#validationMessage = value;
    const input = this.findPart("input");
    const formValue = input.files == null ? null : input.files[0];
    this.#internals.setValidity(
      { valueMissing: this.getAttribute("required") != null && formValue == null },
      this.#validationMessage,
      this.findPart("label")
    );
  }
  formDisabledCallback(disabled) {
    this.findPart("input").disabled = disabled;
  }
  formResetCallback() {
    this.value = null;
  }
  checkValidity() {
    return this.#internals.checkValidity();
  }
  reportValidity() {
    return this.#internals.reportValidity();
  }
  updateFormStatus() {
    const input = this.findPart("input");
    const formValue = input.files == null ? null : input.files[0];
    this.#internals.setValidity(
      { valueMissing: this.getAttribute("required") != null && formValue == null },
      this.#validationMessage,
      this.findPart("label")
    );
    this.#internals.setFormValue(formValue);
  }
};
if (customElements.get(COMPONENT_TAG_NAME21) == null) {
  customElements.define(COMPONENT_TAG_NAME21, FileImageInputElement);
}

// node_modules/.pnpm/@magnit-ce+form-field@0.0.6/node_modules/@magnit-ce/form-field/dist/form-field.js
var COMPONENT_STYLESHEET23 = new CSSStyleSheet();
COMPONENT_STYLESHEET23.replaceSync(`form-field { display: var(--form-field-display, contents) }`);
var singleTemplate = `<label class="container">
<slot class="field-label" name="field-label"></slot>
<slot class="prefix" name="prefix"></slot>
<slot class="light"></slot>
<slot class="postfix" name="postfix"></slot>
</label>`;
var groupTemplate = `<div class="container">
<slot class="field-label" name="field-label"></slot>
<label class="option">
    <slot class="prefix" name="prefix"></slot>
    <slot class="light"></slot>
    <slot class="postfix" name="postfix"></slot>
    <span class="label"></span>
</label>
</div>`;
var COMPONENT_TAG_NAME24 = "form-field";
var FormFieldElement = class _FormFieldElement extends HTMLElement {
  static parser = new DOMParser();
  static singleTemplateDOM;
  static groupTemplateDOM;
  constructor() {
    super();
  }
  renderIntoTemplate() {
    if (this.hasAttribute("initialized")) {
      return;
    }
    const inputSelector = this.getAttribute("input-selector") || "input,select,textarea";
    const groupElements = [...this.querySelectorAll(inputSelector)].filter((item) => !item.classList.contains("enabled-checkbox"));
    const fieldLabel = this.querySelector('[slot="field-label"]');
    if (fieldLabel != null) {
      fieldLabel.remove();
    }
    const prefix = this.querySelector('[slot="prefix"]');
    if (prefix != null) {
      prefix.remove();
    }
    const postfix = this.querySelector('[slot="postfix"]');
    if (postfix != null) {
      postfix.remove();
    }
    if (groupElements.length > 1) {
      if (_FormFieldElement.groupTemplateDOM == null) {
        _FormFieldElement.groupTemplateDOM = _FormFieldElement.parser.parseFromString(groupTemplate, "text/html");
      }
      const inputs = [...this.querySelectorAll(inputSelector)];
      const otherElements = [...this.querySelectorAll(`:scope > :not(${inputSelector})`)];
      this.innerHTML = "";
      this.classList.add("group");
      const containerTemplate = _FormFieldElement.groupTemplateDOM.querySelector(".container");
      const containerFragment = containerTemplate.cloneNode(true);
      this.append(containerFragment);
      const containerClone = this.querySelector(".container");
      const optionTemplate = this.querySelector(".option");
      optionTemplate.remove();
      for (let i = 0; i < inputs.length; i++) {
        const optionClone = optionTemplate.cloneNode(true);
        containerClone.append(optionClone);
        const lightDOMChildrenSlot = this.querySelector(".light");
        const label2 = this.getLabel(inputs[i]);
        lightDOMChildrenSlot.parentElement.querySelector(".label").textContent = label2;
        if (prefix != null) {
          const prefixSlots = [...this.querySelectorAll(".prefix")];
          for (let i2 = 0; i2 < prefixSlots.length; i2++) {
            const slot = prefixSlots[i2];
            const newPrefix = prefix.cloneNode(true);
            newPrefix.classList.add("prefix");
            slot.parentElement.replaceChild(newPrefix, slot);
          }
        }
        lightDOMChildrenSlot.parentElement.replaceChild(inputs[i], lightDOMChildrenSlot);
        if (postfix != null) {
          const postfixSlots = [...this.querySelectorAll(".postfix")];
          for (let i2 = 0; i2 < postfixSlots.length; i2++) {
            const slot = postfixSlots[i2];
            const newPostfix = postfix.cloneNode(true);
            newPostfix.classList.add("postfix");
            slot.parentElement.replaceChild(newPostfix, slot);
          }
        }
      }
      this.append(...otherElements);
    } else {
      if (_FormFieldElement.singleTemplateDOM == null) {
        _FormFieldElement.singleTemplateDOM = _FormFieldElement.parser.parseFromString(singleTemplate, "text/html");
      }
      const fieldTemplate = _FormFieldElement.singleTemplateDOM.querySelector(".container");
      let input = this.querySelector(inputSelector);
      if (input == null) {
        input = document.createElement("input");
        input.placeholder = this.getAttribute("placeholder") ?? "";
        input.value = this.getAttribute("value") ?? "";
        input.name = this.getAttribute("name") ?? "";
      }
      if (input != null) {
        const otherElements = [...this.querySelectorAll(`:scope > :not(${inputSelector})`)];
        this.append(fieldTemplate.cloneNode(true));
        const postfixSlot = this.querySelector(".postfix");
        const prefixSlot = this.querySelector(".prefix");
        const lightDOMChildrenSlot = this.querySelector(".light");
        if (prefix != null && prefixSlot != null) {
          prefix.classList.add("prefix");
          prefixSlot.parentElement.replaceChild(prefix, prefixSlot);
        }
        lightDOMChildrenSlot.parentElement.replaceChild(input, lightDOMChildrenSlot);
        if (postfix != null && postfixSlot != null) {
          postfix.classList.add("postfix");
          postfixSlot.parentElement.replaceChild(postfix, postfixSlot);
        }
        this.append(...otherElements);
      }
    }
    const fieldLabelSlot = this.querySelector(".field-label");
    if (fieldLabel != null && fieldLabelSlot != null) {
      fieldLabel.classList.add("field-label");
      fieldLabelSlot.parentElement.replaceChild(fieldLabel, fieldLabelSlot);
    } else if (fieldLabelSlot != null) {
      const labelElement = document.createElement("span");
      labelElement.classList.add("field-label");
      fieldLabelSlot?.replaceWith(labelElement);
    }
    const labelValue = this.getAttribute("label");
    const label = this.querySelector(".field-label");
    if (label != null && labelValue != null) {
      if (this.hasAttribute("optional")) {
        const optionalTitle = this.getAttribute("optional-title");
        const inputs = [...this.querySelectorAll(inputSelector)];
        const optionalCheckbox = document.createElement("input");
        optionalCheckbox.type = "checkbox";
        optionalCheckbox.classList.add("enabled-checkbox");
        if (optionalTitle != null) {
          optionalCheckbox.setAttribute("title", optionalTitle);
        }
        optionalCheckbox.addEventListener("change", () => {
          this.setAttribute("optional-value", optionalCheckbox.checked == true ? "true" : "false");
          for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            if (optionalCheckbox.checked == true) {
              input.removeAttribute("disabled");
            } else {
              input.toggleAttribute("disabled", true);
            }
          }
        });
        const text = document.createElement("span");
        text.textContent = labelValue;
        label.append(optionalCheckbox, text);
        const optionalValue = this.getAttribute("optional-value") == "true" ? true : false;
        optionalCheckbox.checked = optionalValue;
        for (let i = 0; i < inputs.length; i++) {
          const input = inputs[i];
          if (optionalCheckbox.checked == true) {
            input.removeAttribute("disabled");
          } else {
            input.setAttribute("disabled", "disabled");
          }
        }
      } else {
        label.textContent = labelValue;
      }
    }
    this.toggleAttribute("initialized", true);
  }
  getLabel(input) {
    if (input.dataset.label != null) {
      return input.dataset.label;
    }
    const value = input.getAttribute("value") ?? "";
    return _FormFieldElement.toTitleCase(value);
  }
  static toTitleCase(value) {
    return value.substring(0, 1).toUpperCase() + value.replace(/([A-Z]+)/g, " $1").replace(/-([A-Za-z])/g, " $1").replace(/([A-Z][a-z])/g, " $1").replace(/ ([a-z])/g, (match) => `${match.toUpperCase()}`).substring(1).trim();
  }
  static observedAttributes = ["label", "value", "placeholder", "name", "optional-value", "disabled"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "label") {
      const label = this.querySelector(".field-label");
      if (label != null) {
        label.textContent = newValue;
      }
    } else if (attributeName == "value") {
      const inputSelector = this.getAttribute("input-selector") || "input,select,textarea";
      const inputs = [...this.querySelectorAll(inputSelector)];
      if (inputs.length > 1 || inputs.length == 1 && inputs[0].classList.contains("enabled-checkbox")) {
        return;
      }
      inputs[0].value = newValue;
    } else if (attributeName == "optional-value") {
      const checkbox = this.querySelector(".enabled-checkbox");
      const optionalValue = newValue == "true" ? true : false;
      if (checkbox != null) {
        checkbox.checked = optionalValue;
      }
    } else if (attributeName == "disabled") {
      const isDisabled = newValue != null;
      const inputSelector = this.getAttribute("input-selector") || "input,select,textarea";
      const inputs = [...this.querySelectorAll(inputSelector)];
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.classList.contains("enabled-checkbox")) {
          continue;
        }
        if (isDisabled) {
          input.toggleAttribute("disabled", true);
        } else {
          input.removeAttribute("disabled");
        }
      }
      const checkbox = this.querySelector(".enabled-checkbox");
      if (checkbox != null) {
        checkbox.checked = !isDisabled;
      }
    } else if (attributeName == "placeholder") {
      const inputSelector = this.getAttribute("input-selector") || "input,select,textarea";
      const inputs = [...this.querySelectorAll(inputSelector)];
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.classList.contains("enabled-checkbox")) {
          continue;
        }
        input.placeholder = newValue;
      }
    } else if (attributeName == "name") {
      const inputSelector = this.getAttribute("input-selector") || "input,select,textarea";
      const inputs = [...this.querySelectorAll(inputSelector)];
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.classList.contains("enabled-checkbox")) {
          continue;
        }
        input.name = newValue;
      }
    }
  }
  connectedCallback() {
    let parent = this.getRootNode();
    parent.adoptedStyleSheets.push(COMPONENT_STYLESHEET23);
    this.renderIntoTemplate();
  }
};
if (customElements.get(COMPONENT_TAG_NAME24) == null) {
  customElements.define(COMPONENT_TAG_NAME24, FormFieldElement);
}

// node_modules/.pnpm/@magnit-ce+action-history@0.0.3/node_modules/@magnit-ce/action-history/dist/action-history.js
var action_history_default = ":host\n{\n    display: flex; /* needed for reverse ordering */\n    flex-direction: column;\n    overflow: auto;\n}\n\n::slotted([data-entry])\n{\n    cursor: pointer;\n    flex-shrink: 0; /* prevents squishing due to the flex display */\n}\n\n::slotted([data-active][data-entry])\n{\n    text-decoration: underline;\n}\n\n::slotted([data-entry][data-reversed])\n{\n    scale: .98;\n    opacity: .5;\n}";
var HistoryEntryType = /* @__PURE__ */ ((HistoryEntryType2) => {
  HistoryEntryType2["Create"] = "create";
  HistoryEntryType2["Read"] = "read";
  HistoryEntryType2["Update"] = "update";
  HistoryEntryType2["Delete"] = "delete";
  HistoryEntryType2["Custom"] = "custom";
  return HistoryEntryType2;
})(HistoryEntryType || {});
var ATTRIBUTENAME_REVERSED = "data-reversed";
var ATTRIBUTENAME_ACTIVE = "data-active";
var ATTRIBUTENAME_ENTRY = "data-entry";
var ATTRIBUTENAME_TIMESTAMP = "data-timestamp";
var COMPONENT_STYLESHEET24 = new CSSStyleSheet();
COMPONENT_STYLESHEET24.replaceSync(action_history_default);
var COMPONENT_TAG_NAME25 = "action-history";
var ActionHistoryElement = class extends HTMLElement {
  onBack = async (target, previous, toReverse, targetIndex, previousActiveEntryIndex) => {
  };
  onForward = async (target, previous, toActivate, targetIndex, previousActiveEntryIndex) => {
  };
  get entryAttributeName() {
    return this.getAttribute("entry-attribute") ?? ATTRIBUTENAME_ENTRY;
  }
  get activeAttributeName() {
    return this.getAttribute("active-attribute") ?? ATTRIBUTENAME_ACTIVE;
  }
  get reversedAttributeName() {
    return this.getAttribute("reversed-attribute") ?? ATTRIBUTENAME_REVERSED;
  }
  get timestampAttributeName() {
    return this.getAttribute("timestamp-attribute") ?? ATTRIBUTENAME_TIMESTAMP;
  }
  #slot;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET24);
    this.#slot = this.shadowRoot.querySelector(`slot`);
    this.#slot.addEventListener("slotchange", (event) => {
      const children = this.#slot.assignedElements();
      this.querySelector(`[${this.activeAttributeName}][${this.timestampAttributeName}]`)?.removeAttribute(this.activeAttributeName);
      let lastChild = null;
      for (let i = 0; i < children.length; i++) {
        if (children[i].getAttribute(this.entryAttributeName) == null) {
          continue;
        }
        lastChild = children[i];
        if (children[i].hasAttribute(this.timestampAttributeName)) {
          continue;
        }
        const toReverse = [...this.querySelectorAll("[data-reversed]")];
        for (let i2 = 0; i2 < toReverse.length; i2++) {
          toReverse[i2].remove();
        }
        children[i].setAttribute(this.timestampAttributeName, Date.now().toString());
        this.updateOrder();
        this.dispatchEvent(new CustomEvent("add", { detail: { target: children[i] } }));
      }
      if (this.querySelector(`[${this.activeAttributeName}]`) == null && lastChild != null && lastChild.getAttribute(this.reversedAttributeName) == null) {
        lastChild.toggleAttribute(this.activeAttributeName, true);
      }
    });
    this.addEventListener("click", (event) => {
      const target = event.target.closest(`[${this.entryAttributeName}]`);
      if (target == null) {
        return;
      }
      this.activateEntry(target);
    });
  }
  updateOrder(children) {
    children = children ?? this.#slot.assignedElements();
    if (this.hasAttribute("reverse")) {
      for (let i = 0; i < children.length; i++) {
        const order = this.children.length - i;
        children[i].tabIndex = order;
        children[i].style.order = order.toString();
      }
    } else {
      for (let i = 0; i < children.length; i++) {
        children[i].removeAttribute("tabindex");
        children[i].style.removeProperty("order");
      }
    }
  }
  /**
   * Activate the previous entry, if it exists.
   * @returns `void`
   */
  back() {
    const children = [...this.children];
    const activeEntry = children.find((item) => item.getAttribute(this.activeAttributeName) != null);
    if (activeEntry == null) {
      return;
    }
    const activeIndex = children.indexOf(activeEntry);
    const backIndex = activeIndex - 1;
    if (backIndex == -1) {
      new Promise(async (resolve) => {
        await this.onBack(activeEntry, activeEntry, [activeEntry], backIndex, activeIndex);
        activeEntry.toggleAttribute(this.reversedAttributeName, true);
        activeEntry.removeAttribute(this.activeAttributeName);
        resolve();
      });
      return;
    }
    if (backIndex >= 0 && backIndex < children.length) {
      const entry = children[backIndex];
      entry.click();
    }
  }
  /**
   * Activate the next entry, if it exists.
   * @returns `void`
   */
  forward() {
    const children = [...this.children];
    let activeEntry = children.find((item) => item.getAttribute(this.activeAttributeName) != null);
    const forwardIndex = activeEntry == null ? children.length > 0 ? 0 : -1 : children.indexOf(activeEntry) + 1;
    if (forwardIndex == -1) {
      return;
    }
    if (forwardIndex < children.length) {
      const entry = children[forwardIndex];
      entry.click();
    }
  }
  /**
   * 
   * @returns `void`
   */
  async activateEntry(target) {
    if (target.hasAttribute(this.activeAttributeName)) {
      this.dispatchEvent(new CustomEvent("refresh", { detail: { target } }));
      return;
    }
    const activationProperties = await this.#activateEntry(target);
    this.dispatchEvent(new CustomEvent("activate", { detail: activationProperties }));
  }
  async #activateEntry(target) {
    const children = [...this.children];
    const previousActiveEntry = children.find((item) => item.getAttribute(this.activeAttributeName) != null);
    if (previousActiveEntry != null) {
      previousActiveEntry.removeAttribute(this.activeAttributeName);
    }
    const targetIndex = children.indexOf(target);
    const previousActiveEntryIndex = previousActiveEntry == null ? -1 : children.indexOf(previousActiveEntry);
    const toReverse = [];
    const toActivate = [];
    if (previousActiveEntryIndex > targetIndex) {
      for (let i = previousActiveEntryIndex; i > targetIndex; i--) {
        toReverse.push(children[i]);
      }
    } else if (previousActiveEntryIndex < targetIndex) {
      for (let i = previousActiveEntryIndex + 1; i <= targetIndex; i++) {
        toActivate.push(children[i]);
      }
    } else {
      throw new Error("Unable to determine action");
    }
    const activationProperties = { target, previousActiveEntry, toReverse, toActivate, targetIndex, previousActiveEntryIndex };
    if (toReverse.length > 0) {
      for (let i = 0; i < toReverse.length; i++) {
        toReverse[i].toggleAttribute(this.reversedAttributeName, true);
      }
      const reverseTarget = toReverse[toReverse.length - 1];
      ;
      await this.onBack(reverseTarget, previousActiveEntry, toReverse, children.indexOf(reverseTarget), previousActiveEntryIndex);
    } else if (toActivate.length > 0) {
      for (let i = 0; i < toActivate.length; i++) {
        toActivate[i].removeAttribute(this.reversedAttributeName);
      }
      const activateTarget = toActivate[toActivate.length - 1];
      await this.onForward(activateTarget, previousActiveEntry, toActivate, children.indexOf(activateTarget), previousActiveEntryIndex);
    }
    target.toggleAttribute(this.activeAttributeName, true);
    return activationProperties;
  }
  /**
   * Using the target for reference, sets the active entry as the 
   * entry directly preceeding the target entry. Calls `onBack`
   * handlers, in order, for every entry that is active, and later 
   * than the activated entry (including the target entry), or 
   * `onForward` handlers, in order, for  every entry that is inactive
   *  and earlier than the activated entry.
   * @returns `void`
   * @description Useful for "Undo" functionality where the action to
   * reverse is well-known, but finding the action to activate might
   * require a lookup/query.
   */
  async reverseEntry(target) {
    if (target.hasAttribute(this.reversedAttributeName)) {
      return;
    }
    const children = [...this.children];
    const previousActiveEntry = children.find((item) => item.getAttribute(this.activeAttributeName) != null);
    if (previousActiveEntry != null) {
      previousActiveEntry.removeAttribute(this.activeAttributeName);
    }
    const targetIndex = children.indexOf(target);
    const previousActiveEntryIndex = previousActiveEntry == null ? -1 : children.indexOf(previousActiveEntry);
    const toReverse = [target];
    const toActivate = [];
    if (targetIndex == previousActiveEntryIndex) {
      await this.onBack(target, target, [target], targetIndex, previousActiveEntryIndex);
      target.toggleAttribute(this.reversedAttributeName, true);
      target.removeAttribute(this.activeAttributeName);
      const preceedingItem2 = this.querySelector(`[data-entry]:has(+ [data-timestamp="${target.dataset.timestamp}"])`);
      if (preceedingItem2 != null) {
        preceedingItem2.toggleAttribute(this.activeAttributeName, true);
      }
      this.dispatchEvent(new CustomEvent("reverse", { detail: { target, previousActiveEntry, toReverse, toActivate, targetIndex, previousActiveEntryIndex } }));
      return;
    }
    if (previousActiveEntryIndex > targetIndex) {
      for (let i = previousActiveEntryIndex; i > targetIndex; i--) {
        toReverse.push(children[i]);
      }
    } else if (previousActiveEntryIndex < targetIndex) {
      for (let i = previousActiveEntryIndex + 1; i <= targetIndex; i++) {
        toActivate.push(children[i]);
      }
    } else {
      throw new Error("Unable to determine action");
    }
    const activationProperties = { target, previousActiveEntry, toReverse, toActivate, targetIndex, previousActiveEntryIndex };
    if (toReverse.length > 0) {
      for (let i = 0; i < toReverse.length; i++) {
        toReverse[i].toggleAttribute(this.reversedAttributeName, true);
      }
      const reverseTarget = toReverse[toReverse.length - 1];
      await this.onBack(reverseTarget, previousActiveEntry, toReverse, children.indexOf(reverseTarget), previousActiveEntryIndex);
    } else if (toActivate.length > 0) {
      for (let i = 0; i < toActivate.length; i++) {
        toActivate[i].removeAttribute(this.reversedAttributeName);
      }
      const activateTarget = toActivate[toActivate.length - 1];
      await this.onForward(activateTarget, previousActiveEntry, toActivate, children.indexOf(activateTarget), previousActiveEntryIndex);
    }
    const preceedingItem = this.querySelector(`[data-entry]:has(+ [data-timestamp="${target.dataset.timestamp}"])`);
    if (preceedingItem != null) {
      preceedingItem.toggleAttribute(this.activeAttributeName, true);
    }
    target.removeAttribute(this.activeAttributeName);
    this.dispatchEvent(new CustomEvent("reverse", { detail: activationProperties }));
  }
  static observedAttributes = [
    /* 'placeholder',*/
    "reverse"
  ];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "reverse") {
      this.updateOrder();
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME25) == null) {
  customElements.define(COMPONENT_TAG_NAME25, ActionHistoryElement);
}

// node_modules/.pnpm/@magnit-ce+record-tree@0.0.4/node_modules/@magnit-ce/record-tree/dist/record-tree.js
var record_tree_default = "record-tree\n{\n    display: block;\n    --spacing: 7px;\n    --indent: 20px;\n}\n\nrecord-tree .collection\n{\n    border-radius: 3px;\n    padding: var(--spacing);\n    border: solid 1px transparent;\n}\nrecord-tree .collection:hover\n{\n    border-color: graytext;\n}\n\nrecord-tree .collection > .collection\n{\n    margin-left: var(--indent);\n    margin-block: var(--spacing);\n}\n\nrecord-tree .collection > .property:first-of-type\n{\n    margin-top: var(--spacing);\n}\nrecord-tree .collection > .property\n{\n    margin-left: var(--indent);\n}\nrecord-tree .collection > .property:last-of-type\n{\n    margin-bottom: var(--spacing);\n}\n\nrecord-tree .removed\n{\n    scale: .99;\n    color: graytext;\n}\n\nrecord-tree summary\n{\n    user-select: none;\n    display: flex;\n    gap: var(--spacing);\n}\nrecord-tree summary:before\n{\n    content: '\u25B6';\n    transition: transform 100ms ease-out;\n    font-size: .78em;\n    align-self: center;\n    margin-right: var(--spacing);\n}\nrecord-tree details[open] > summary:before\n{\n    transform: rotate(90deg);\n}\nrecord-tree summary .name\n{\n    flex: 1;\n}\nrecord-tree :not(.properties) > summary .name\n{\n    font-weight: bold;\n    font-size: .8em;\n}\n\nrecord-tree ul\n{\n    margin-block: var(--spacing);\n    margin-left: var(--indent);\n    padding: 0;\n}\n\nrecord-tree .property\n{\n    user-select: none;\n    display: flex;\n    align-items: center;\n    border-radius: 3px;\n    border: solid 1px transparent;\n}\nrecord-tree .property:hover\n{\n    border-color: graytext;\n}\n\nrecord-tree .property .name\n{\n    font-weight: bold;\n    font-size: .8em;    \n    text-align: right;\n\n    padding-left: var(--spacing);\n    padding-block: var(--spacing);\n    width: var(--property-name-width);\n}\nrecord-tree .property .value\n{\n    padding-inline: var(--spacing);\n    padding-block: var(--spacing);\n    flex: 1;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\nrecord-tree button\n{\n    display: inline-flex;\n    align-items: center;\n    margin-left: auto;\n    margin-right: var(--spacing);\n}\n\nrecord-tree button .icon\n{\n    --size: 14px;\n    width: var(--size);\n    height: var(--size);\n}";
var COMPONENT_STYLESHEET25 = new CSSStyleSheet();
COMPONENT_STYLESHEET25.replaceSync(record_tree_default);
var DEFAULT_REMOVED_CLASS_NAME = "removed";
var ICON_CANCEL_CROSS = `<svg class="icon cancel-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-linecap:square;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
    d="m 1237.4389,207.63366 -1.8991,1.8987 a 0.65841136,0.65841136 90.003442 0 0 0,0.93116 l 0.4831,0.48317 a 14628.329,14628.329 44.999244 0 0 0.9312,0.93118 l 3.7936,3.79311 a 0.65840885,0.65840885 89.998393 0 1 0,0.93116 l -3.7936,3.7936 a 8783.6896,8783.6896 135.00442 0 1 -0.9313,0.93111 l -0.4829,0.48283 a 0.65811,0.65811 89.993977 0 0 10e-5,0.93094 l 1.8987,1.89741 a 0.65867085,0.65867085 179.98891 0 0 0.9314,-1.8e-4 l 0.4826,-0.48267 a 45427.77,45427.77 134.99941 0 1 0.9312,-0.93119 l 3.7931,-3.79308 a 0.65848899,0.65848899 179.99848 0 1 0.9312,-2e-5 l 3.7936,3.79312 a 10110.91,10110.91 44.992994 0 0 0.9313,0.93108 l 0.483,0.48285 a 0.65856615,0.65856615 179.99438 0 0 0.9313,-9e-5 l 1.897,-1.89705 a 0.65833101,0.65833101 89.994378 0 0 -10e-5,-0.93111 l -0.483,-0.48285 a 5293.5057,5293.5057 44.99639 0 1 -0.9313,-0.93113 l -3.793,-3.79354 a 0.65849247,0.65849247 90.001607 0 1 0,-0.93122 l 3.793,-3.79305 a 149190.44,149190.44 134.99995 0 1 0.9312,-0.93119 l 0.4832,-0.48321 a 0.65863247,0.65863247 90.008202 0 0 10e-5,-0.93132 l -1.8972,-1.89834 a 0.65838576,0.65838576 0.01346964 0 0 -0.9312,-2.2e-4 l -0.483,0.48285 a 7148.543,7148.543 135.00546 0 0 -0.9313,0.9311 l -3.7936,3.79359 a 0.65841791,0.65841791 0.00151591 0 1 -0.9312,-3e-5 l -3.7931,-3.79353 a 52707.551,52707.551 45.002134 0 0 -0.9312,-0.93122 l -0.4826,-0.48267 a 0.65849044,0.65849044 0.00323988 0 0 -0.9312,-5e-5 z"
    transform="translate(-1232.6358,-204.72848)" />
</svg>`;
var ICON_UNDO = `<svg class="icon undo-redo" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
   style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,CanvasText);fill-opacity:1;stroke-width:0.999999;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
   d="M 8.7359009 1.1063924 C 8.3768905 1.0950243 8.0017196 1.1736712 7.641394 1.3523722 L 1.6107544 6.1205566 L 1.5916341 6.1386434 L 1.53479 6.1939372 C 1.0620233 6.6537208 0.70744486 7.6004515 1.0769368 8.152474 L 5.3030355 14.40894 C 6.1798306 15.219356 7.5994445 15.083541 8.4749349 14.106116 C 9.2135837 13.277519 9.3398045 12.086041 8.7787923 11.23549 L 11.334192 11.410673 C 14.129266 11.815808 17.330477 13.067707 18.931144 18.826241 C 19.313756 19.953163 19.735424 21.309718 20.245793 22.173324 C 20.976132 22.497497 21.420713 20.679238 21.478792 18.791101 C 21.506716 14.251463 18.262689 8.6142076 13.845667 6.7716797 C 13.291103 6.5403477 11.805521 5.8978235 10.30118 5.3355916 L 9.7994019 5.1107992 C 10.609379 4.4184442 10.916638 3.2966427 10.55026 2.3703979 C 10.238366 1.5905459 9.5257236 1.1314023 8.7359009 1.1063924 z " />
</svg>`;
var COMPONENT_TAG_NAME26 = "record-tree";
var RecordTreeElement = class extends HTMLElement {
  static observedAttributes = [];
  #data;
  path = [];
  #removedPaths = /* @__PURE__ */ new Set();
  #customCollectionRenderers = new Array();
  #customObjectRenderers = new Array();
  #customPropertyRenderers = new Array();
  #customPropertyNameGenerators = new Array();
  #customPropertyValueGenerators = new Array();
  #widestPropertyName = 0;
  constructor() {
    super();
    let parent = this.getRootNode();
    parent.adoptedStyleSheets.push(COMPONENT_STYLESHEET25);
    this.addEventListener("click", this.#onClick.bind(this));
  }
  #onClick(event) {
    const removeButton = event.target.closest("svg") != null ? event.target.closest("button") : event.target;
    if (removeButton == null || !removeButton.classList.contains("remove")) {
      return;
    }
    const parentToRemove = removeButton.parentElement?.classList.contains("property") ? removeButton.parentElement : removeButton.parentElement?.parentElement?.classList.contains("collection") ? removeButton.parentElement.parentElement : null;
    if (parentToRemove == null) {
      console.error("Unknown button clicked");
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    if (this.hasAttribute("removed-class")) {
      let removeAttributeName = this.getAttribute("removed-class");
      if (removeAttributeName == null || removeAttributeName == "") {
        removeAttributeName = DEFAULT_REMOVED_CLASS_NAME;
      }
      const isRemoved = parentToRemove.classList.contains(removeAttributeName);
      if (isRemoved) {
        parentToRemove.classList.remove(removeAttributeName);
        if (parentToRemove.dataset.path != ".properties") {
          this.#removedPaths.delete(parentToRemove.dataset.path);
        }
        removeButton.innerHTML = ICON_CANCEL_CROSS;
        removeButton.title = "Remove";
        this.dispatchEvent(new CustomEvent("restore", { detail: { path: parentToRemove.dataset.path } }));
      } else {
        parentToRemove.classList.add(removeAttributeName);
        if (parentToRemove.dataset.path != ".properties") {
          this.#removedPaths.add(parentToRemove.dataset.path);
        }
        removeButton.innerHTML = ICON_UNDO;
        removeButton.title = "Undo";
        removeButton.classList.add("undo");
        this.dispatchEvent(new CustomEvent("remove", { detail: { path: parentToRemove.dataset.path } }));
      }
    } else {
      parentToRemove.remove();
      this.#removedPaths.add(parentToRemove.dataset.path);
      this.dispatchEvent(new CustomEvent("remove", { detail: { path: parentToRemove.dataset.path } }));
    }
  }
  getPathArray() {
    return this.path;
  }
  getCurrentPathString() {
    return this.path.join(".");
  }
  getInitialData() {
    return this.#data;
  }
  setData(data) {
    this.#data = data;
    this.renderRecordData(this.#data);
  }
  async renderRecordData(data) {
    this.innerHTML = "";
    this.path = [];
    await this.renderData(data, this);
    this.path = [];
    this.style.setProperty("--property-name-width", `${this.#widestPropertyName}px`);
  }
  async renderData(data, parentElement, usePropertiesContainer = true) {
    const lastPathEntry = this.path[this.path.length - 1] ?? this.getAttribute("parent-name") ?? "Data";
    if (Array.isArray(data)) {
      let renderer = this.renderArrayAsCollection;
      for (let i = 0; i < this.#customCollectionRenderers.length; i++) {
        if (this.#customCollectionRenderers[i].condition(lastPathEntry, data, parentElement) == true) {
          renderer = this.#customCollectionRenderers[i].renderer;
          break;
        }
      }
      await renderer.call(this, lastPathEntry, data, parentElement);
    } else if (Object.prototype.toString.call(data) === "[object Object]") {
      data = this.draftObject(data);
      let renderer = this.renderObjectAsCollection;
      for (let i = 0; i < this.#customObjectRenderers.length; i++) {
        if (this.#customObjectRenderers[i].condition(lastPathEntry, data, parentElement) == true) {
          renderer = this.#customObjectRenderers[i].renderer;
          break;
        }
      }
      await renderer.call(this, lastPathEntry, data, parentElement);
    } else if (usePropertiesContainer == true) {
      const pathMinusLastEntry = this.path.filter((item, index) => index < this.path.length - 1);
      let properties = this.querySelector(`details[data-path="${pathMinusLastEntry.join(".")}.properties"]`);
      let propertyList = properties == null ? null : properties.querySelector("ul");
      if (properties == null) {
        properties = this.createCollectionDetailsElement("Properties", `${pathMinusLastEntry.join(".")}.properties`, ["collection", "properties"], false);
        properties.toggleAttribute("open", true);
        propertyList = document.createElement("ul");
        properties.append(propertyList);
        parentElement.append(properties);
      }
      if (propertyList.children.length > 10) {
        properties.toggleAttribute("open", false);
      }
      let renderer = this.renderObjectProperty;
      for (let i = 0; i < this.#customPropertyRenderers.length; i++) {
        if (this.#customPropertyRenderers[i].condition(lastPathEntry, data, propertyList) == true) {
          renderer = this.#customPropertyRenderers[i].renderer;
          break;
        }
      }
      await renderer.call(this, lastPathEntry, data, propertyList);
    } else {
      let renderer = this.renderObjectProperty;
      for (let i = 0; i < this.#customPropertyRenderers.length; i++) {
        if (this.#customPropertyRenderers[i].condition(lastPathEntry, data, parentElement) == true) {
          renderer = this.#customPropertyRenderers[i].renderer;
          break;
        }
      }
      await renderer.call(this, lastPathEntry, data, parentElement);
    }
  }
  addCustomCollectionRenderer(condition, renderer) {
    this.#customCollectionRenderers.push(
      {
        condition,
        renderer
      }
    );
  }
  addCustomObjectRenderer(condition, renderer) {
    this.#customObjectRenderers.push(
      {
        condition,
        renderer
      }
    );
  }
  addCustomPropertyRenderer(condition, renderer) {
    this.#customPropertyRenderers.push(
      {
        condition,
        renderer
      }
    );
  }
  addCustomPropertyNameGenerator(condition, generator) {
    this.#customPropertyNameGenerators.push(
      {
        condition,
        generator
      }
    );
  }
  addCustomPropertyValueGenerator(condition, generator) {
    this.#customPropertyValueGenerators.push(
      {
        condition,
        generator
      }
    );
  }
  clear() {
    this.innerHTML = "";
  }
  refresh() {
    this.setData(this.#data);
  }
  getUpdatedData() {
    const updatedData = structuredClone(this.#data);
    for (const [key] of this.#removedPaths.entries()) {
      const keyArray = key.split(".");
      let parent = updatedData;
      let target = updatedData[keyArray[0]];
      let targetKey = keyArray[0];
      for (let i = 1; i < keyArray.length; i++) {
        targetKey = keyArray[i];
        parent = target;
        target = parent[targetKey];
      }
      if (parent != null && target != null) {
        delete parent[targetKey];
      }
    }
    return updatedData;
  }
  createCollectionDetailsElement(name, path, classes, preventRemoveButton) {
    const details = document.createElement("details");
    if (classes != null) {
      details.classList.add(...classes);
    }
    details.setAttribute("data-path", path);
    const summary = document.createElement("summary");
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;
    nameSpan.classList.add("name");
    summary.append(nameSpan);
    if (preventRemoveButton != false) {
      const removeButton = document.createElement("button");
      removeButton.innerHTML = ICON_CANCEL_CROSS;
      removeButton.title = "Remove";
      removeButton.classList.add("remove");
      summary.append(removeButton);
    }
    details.append(summary);
    return details;
  }
  async renderArrayAsCollection(key, data, parentElement) {
    const name = isNaN(parseInt(key)) ? key : `[${key}]`;
    const details = this.createCollectionDetailsElement(name, this.path.join("."), ["collection"]);
    if (this.path.length == 0) {
      details.setAttribute("open", "");
    }
    parentElement.append(details);
    for (let i = 0; i < data.length; i++) {
      this.path.push(i.toString());
      await this.renderData(data[i], details, false);
      this.path.pop();
    }
  }
  async renderObjectAsCollection(key, data, parentElement) {
    const name = isNaN(parseInt(key)) ? key : data.name != null && data.name.trim() != "" ? data.name : data.description != null && data.description.trim() != "" ? data.description : data.key != null && data.key.trim() != "" ? data.key : data.id != null && data.id.toString().trim() != "" ? data.id : `[${key}]`;
    const details = this.createCollectionDetailsElement(name, this.path.join("."), ["collection"]);
    if (this.path.length == 0) {
      details.setAttribute("open", "");
    }
    parentElement.append(details);
    for (const [key2, value] of Object.entries(data)) {
      this.path.push(key2);
      await this.renderData(data[key2], details);
      this.path.pop();
    }
  }
  async renderObjectProperty(title, value, parentElement) {
    const tagName = parentElement instanceof HTMLUListElement ? "li" : "div";
    const property = document.createElement(tagName);
    property.classList.add("property");
    property.dataset.path = this.path.join(".");
    let nameGenerator = this.createPropertyName;
    for (let i = 0; i < this.#customPropertyNameGenerators.length; i++) {
      if (this.#customPropertyNameGenerators[i].condition(title, value, parentElement) == true) {
        nameGenerator = this.#customPropertyNameGenerators[i].generator;
        break;
      }
    }
    const name = await nameGenerator(title, value, parentElement);
    const delimiter = document.createElement("span");
    delimiter.classList.add("delimiter");
    delimiter.textContent = ":";
    let valueGenerator = this.createPropertyValue.bind(this);
    for (let i = 0; i < this.#customPropertyValueGenerators.length; i++) {
      if (this.#customPropertyValueGenerators[i].condition(title, value, parentElement) == true) {
        valueGenerator = this.#customPropertyValueGenerators[i].generator;
        break;
      }
    }
    const valueSpan = await valueGenerator(title, value, parentElement);
    const removeButton = document.createElement("button");
    removeButton.innerHTML = ICON_CANCEL_CROSS;
    removeButton.title = "Remove";
    removeButton.classList.add("remove");
    property.append(name, delimiter, valueSpan, removeButton);
    property.title = `${name.getAttribute("title")}: ${valueSpan.getAttribute("title")}`;
    parentElement.append(property);
    const propertyNameWidth = Math.ceil(name.getBoundingClientRect().width);
    if (this.#widestPropertyName < propertyNameWidth) {
      this.#widestPropertyName = propertyNameWidth;
    }
  }
  createPropertyName(title, value, parentElement) {
    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = title;
    name.title = title;
    return name;
  }
  createPropertyValue(title, value, parentElement) {
    const valueSpan = document.createElement("span");
    valueSpan.classList.add("value");
    if (value === void 0) {
      const undefinedTextValue = this.getAttribute("undefined-value") ?? "[ undefined ]";
      value = undefinedTextValue;
    } else if (value === null) {
      const nullTextValue = this.getAttribute("null-value") ?? "[ null ]";
      value = nullTextValue;
    } else {
      value = value.toString();
    }
    if (value.trim() == "") {
      const blankTextValue = this.getAttribute("blank-value") ?? "[ blank text ]";
      value = blankTextValue;
    }
    valueSpan.textContent = value.length > 1024 ? value.substring(0, 1024) : value;
    valueSpan.title = value.startsWith("data:") ? "[ Binary Data ]" : value;
    return valueSpan;
  }
  async renderCollectionAsKeyValuePairs(key, items, parentElement) {
    const propertiesDetails = this.createCollectionDetailsElement(key, this.path.join("."), ["collection", "key-value-pairs"]);
    const propertiesList = document.createElement("ul");
    propertiesDetails.append(propertiesList);
    for (let i = 0; i < items.length; i++) {
      this.path.push(items[i].key);
      await this.renderObjectProperty(items[i].key, items[i].value, propertiesList);
      this.path.pop();
    }
    parentElement.append(propertiesDetails);
  }
  async renderCollectionAsValues(key, items, parentElement) {
    const propertiesDetails = this.createCollectionDetailsElement(key, this.path.join("."), ["collection", "values"]);
    const propertiesList = document.createElement("ul");
    propertiesDetails.append(propertiesList);
    for (let i = 0; i < items.length; i++) {
      this.path.push(items[i]);
      await this.renderObjectAsValue(items[i], items[i], propertiesList);
      this.path.pop();
    }
    parentElement.append(propertiesDetails);
  }
  async renderObjectAsValue(key, value, parentElement) {
    const property = document.createElement("li");
    property.classList.add("property");
    property.dataset.path = this.path.join(".");
    const valueSpan = document.createElement("span");
    valueSpan.classList.add("value");
    valueSpan.textContent = value.toString();
    valueSpan.title = "[ Object ]";
    const removeButton = document.createElement("button");
    removeButton.innerHTML = ICON_CANCEL_CROSS;
    removeButton.title = "Remove";
    removeButton.classList.add("remove");
    property.append(valueSpan, removeButton);
    parentElement.append(property);
  }
  // generic json rendering
  renderDataObject(data, parent) {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const value = data[i];
        const $details = document.createElement("details");
        const $summary = document.createElement("summary");
        let textContent = value.name ?? value.description ?? value.key;
        if (textContent == null || textContent.trim() == "") {
          textContent = i.toString();
        }
        $summary.classList.add("property");
        $summary.textContent = textContent.substring(0, Math.min(textContent.length, 20));
        $details.classList.add("subrecord");
        parent.appendChild($details);
        $details.appendChild($summary);
        this.renderDataObject(value, $details);
      }
    } else {
      let propertiesList = null;
      for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value) || Object.prototype.toString.call(value) === "[object Object]") {
          const $details = document.createElement("details");
          const $summary = document.createElement("summary");
          $summary.classList.add("property");
          $summary.textContent = key;
          $details.classList.add("subrecord");
          parent.appendChild($details);
          $details.appendChild($summary);
          this.renderDataObject(value, $details);
        } else {
          if (propertiesList == null) {
            propertiesList = parent.querySelector(":scope > ul");
            if (propertiesList == null) {
              propertiesList = document.createElement("ul");
              parent.appendChild(propertiesList);
            }
          }
          const $property = document.createElement("li");
          $property.classList.add("property");
          const $name = document.createElement("span");
          $name.classList.add("name");
          $name.textContent = key;
          const $value = document.createElement("span");
          $value.classList.add("value");
          let textContent = value.toString();
          $value.textContent = textContent.substring(0, Math.min(textContent.length, 20));
          $property.append($name, $value);
          propertiesList.append($property);
        }
      }
    }
  }
  // helpers
  /**
   * Converts a complex object that may contain `get` properties and functions,
   * into a simple object that is only key-value pairs of data.  
   * @param instance a complex object to be collapsed into a key-value object.
   * @returns a simple key-value object that represents the point-in-execution data of the provided object.
   */
  draftObject(instance) {
    return Object.assign({}, instance, this.extractProperties(instance));
  }
  extractProperties(instance) {
    const propertyNames = this.getPropertyNames(instance);
    const itemData = {};
    for (let i = 0; i < propertyNames.length; i++) {
      itemData[propertyNames[i]] = instance[propertyNames[i]];
    }
    return itemData;
  }
  getPropertyNames(instance) {
    const prototype = Reflect.getPrototypeOf(instance);
    const descriptors = Object.getOwnPropertyDescriptors(prototype);
    return Object.entries(descriptors).filter((entry) => typeof entry[1].get === "function" && entry[0] !== "__proto__").map((entry) => entry[0]);
  }
};
if (customElements.get(COMPONENT_TAG_NAME26) == null) {
  customElements.define(COMPONENT_TAG_NAME26, RecordTreeElement);
}

// node_modules/.pnpm/@magnit-ce+message-card@0.0.3/node_modules/@magnit-ce/message-card/dist/message-card.js
var message_card_default = '\n:host([type="info"])    { --primary-color:#0184db; }\n:host([type="success"]) { --primary-color:#20a453; }\n:host([type="warning"]) { --primary-color:#f0cb52; }\n:host([type="error"])   { --primary-color:#db283b; }\n:host([type="aside"])   { --primary-color:#1f3cd0; }\n:host([type="note"])    { --primary-color:#db8630; }\n:host([type="report"])  { --primary-color:#4d5168; }\n\n@media (prefers-color-scheme: dark) \n{\n    :host([type="info"])    { --primary-color:#3baee9; }\n    :host([type="success"]) { --primary-color:#4fc872; }\n    :host([type="warning"]) { --primary-color:#f0cb52; }\n    :host([type="error"])   { --primary-color:#e95a5c; }\n    :host([type="aside"])   { --primary-color:#3760ff; }\n    :host([type="note"])    { --primary-color:#e9ac60; }\n    :host([type="report"])  { --primary-color:#707177; }\n}\n\n:host\n{\n    --primary-color: graytext;\n    --font-color: fieldtext;\n    background-color: var(--background-color, field);\n    color: var(--font-color);\n    border: solid 1px var(--primary-color);\n    border-radius: 3px;\n    padding: .5em;\n    display: none;\n    font-family: sans-serif;\n    font-size: 12px;\n    position: relative;\n\n    grid-template-columns: auto 1fr auto;\n    grid-template-rows: auto 1fr;\n}\n\n:host([open])\n{\n    display: grid;\n}\n\n[part="message-icon"]\n,::slotted([slot="message-icon"])\n{\n    align-self: center;\n    grid-row: span 2;\n    margin-right: 1em;\n}\n\n[part="heading"]\n,::slotted([slot="heading"])\n{\n    color: var(--primary-color);\n    font-weight: bold;\n    font-size: 13px;\n    align-self: center;\n    display: inline-block;\n}\n\n[part="message"]\n{\n    grid-row: 2;\n    grid-column: 2;\n    margin-top: .3em;\n}\n\nsvg path { fill: var(--primary-color); }\n\n:host([prevent-close]) [part="close-button"]\n{\n    display: none;\n}\n[part="close-button"]\n{\n    align-self: center;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    margin:1em .5em 1em 0;\n    background: none;\n    padding: 2px 5px;\n    margin: 0;\n    border: solid 1px transparent;\n    border-radius: 3px;\n}\n[part="close-button"]:hover\n{\n    background-color: rgb(0 0 0 / .05);\n    border-color: rgb(0 0 0 / .1);\n}\n@media (prefers-color-scheme: dark) \n{\n    [part="close-button"]:hover\n    {\n        background-color: rgb(0 0 0 / .4);\n        border-color: rgb(0 0 0 / .7);\n    }\n}\n[part="close-icon"]\n,::slotted([slot="close-icon"])\n{\n    width: var(--icon-width, var(--icon-size, 12px));\n    height: var(--icon-height, var(--icon-size, 12px));\n}\n\n[part="duration"]\n{\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    appearance: none;\n    height: 2px;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n    border: none;\n    transition: all 50ms ease;\n    accent-color: var(--primary-color);\n}\n\n[part="duration"]::-webkit-progress-value\n{\n    background-color: var(--primary-color, canvastext);\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n}\n\n[part="duration"]::-webkit-progress-bar\n{\n    background: none;\n}\n[part="duration"]::-moz-progress-bar\n{\n    background-color: var(--primary-color, canvastext);\n}\n\n:host(:not([duration])) [part="duration"]\n{\n    display: none;\n}\n\n/* progress {\n}\nprogress::-webkit-progress-bar {\n}\nprogress::-webkit-progress-value {\n}\nprogress::-moz-progress-bar {\n} */';
var message_card_default2 = '<slot name="message-icon">\n    <svg part="message-icon" class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n        <path d="M16.142 2l5.858 5.858v8.284l-5.858 5.858h-8.284l-5.858-5.858v-8.284l5.858-5.858h8.284zm.829-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-5.971 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"></path>\n    </svg>\n</slot>\n<header part="header">\n    <slot name="heading"><span part="heading">Message</span></slot>\n</header>\n<div part="message">\n    <slot></slot>\n</div>\n<button part="close-button">\n    <slot name="close-icon">\n        <svg part="close-icon" class="icon" width="14" height="14" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n            <path\n            style="color:#000000;fill:var(--primary-color,InfoText);stroke:var(--outline-color,transparent);stroke-linecap:square;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"\n            d="m 1237.4389,207.63366 -1.8991,1.8987 a 0.65841136,0.65841136 90.003442 0 0 0,0.93116 l 0.4831,0.48317 a 14628.329,14628.329 44.999244 0 0 0.9312,0.93118 l 3.7936,3.79311 a 0.65840885,0.65840885 89.998393 0 1 0,0.93116 l -3.7936,3.7936 a 8783.6896,8783.6896 135.00442 0 1 -0.9313,0.93111 l -0.4829,0.48283 a 0.65811,0.65811 89.993977 0 0 10e-5,0.93094 l 1.8987,1.89741 a 0.65867085,0.65867085 179.98891 0 0 0.9314,-1.8e-4 l 0.4826,-0.48267 a 45427.77,45427.77 134.99941 0 1 0.9312,-0.93119 l 3.7931,-3.79308 a 0.65848899,0.65848899 179.99848 0 1 0.9312,-2e-5 l 3.7936,3.79312 a 10110.91,10110.91 44.992994 0 0 0.9313,0.93108 l 0.483,0.48285 a 0.65856615,0.65856615 179.99438 0 0 0.9313,-9e-5 l 1.897,-1.89705 a 0.65833101,0.65833101 89.994378 0 0 -10e-5,-0.93111 l -0.483,-0.48285 a 5293.5057,5293.5057 44.99639 0 1 -0.9313,-0.93113 l -3.793,-3.79354 a 0.65849247,0.65849247 90.001607 0 1 0,-0.93122 l 3.793,-3.79305 a 149190.44,149190.44 134.99995 0 1 0.9312,-0.93119 l 0.4832,-0.48321 a 0.65863247,0.65863247 90.008202 0 0 10e-5,-0.93132 l -1.8972,-1.89834 a 0.65838576,0.65838576 0.01346964 0 0 -0.9312,-2.2e-4 l -0.483,0.48285 a 7148.543,7148.543 135.00546 0 0 -0.9313,0.9311 l -3.7936,3.79359 a 0.65841791,0.65841791 0.00151591 0 1 -0.9312,-3e-5 l -3.7931,-3.79353 a 52707.551,52707.551 45.002134 0 0 -0.9312,-0.93122 l -0.4826,-0.48267 a 0.65849044,0.65849044 0.00323988 0 0 -0.9312,-5e-5 z"\n            transform="translate(-1232.6358,-204.72848)" />\n        </svg>\n    </slot>\n</button>\n<progress part="duration" min="0" max="100" step="1" value="100"></progress>';
var ProgressTimeout = class {
  duration;
  startTime = performance.now();
  elapsedTime = 0;
  onUpdate;
  onComplete;
  isPaused = false;
  #previousTimestamp = 0;
  #animationFrameHandle;
  #animationFrameHandler = this.update.bind(this);
  constructor(duration, onUpdate, onComplete) {
    this.duration = duration;
    this.onUpdate = onUpdate;
    this.onComplete = onComplete;
  }
  start() {
    this.clear();
    this.startTime = performance.now();
    this.#previousTimestamp = this.startTime;
    this.elapsedTime = 0;
    this.#animationFrameHandle = requestAnimationFrame(this.#animationFrameHandler);
  }
  pause() {
    this.isPaused = true;
    if (this.#animationFrameHandle != null) {
      cancelAnimationFrame(this.#animationFrameHandle);
    }
  }
  resume() {
    this.isPaused = false;
    this.#previousTimestamp = performance.now();
    this.#animationFrameHandle = requestAnimationFrame(this.#animationFrameHandler);
  }
  update(timestamp) {
    const delta = timestamp - this.#previousTimestamp;
    this.elapsedTime += delta;
    this.#previousTimestamp = timestamp;
    const timeLeft = this.duration - this.elapsedTime;
    if (this.onUpdate != null) {
      this.onUpdate(timestamp, timeLeft);
    }
    if (timeLeft > 0) {
      this.#animationFrameHandle = requestAnimationFrame(this.#animationFrameHandler);
    } else {
      if (this.onComplete != null) {
        this.onComplete();
      }
      this.clear();
    }
  }
  clear() {
    if (this.#animationFrameHandle != null) {
      cancelAnimationFrame(this.#animationFrameHandle);
    }
    this.isPaused = false;
  }
};
var MessageCardType = /* @__PURE__ */ ((MessageCardType2) => {
  MessageCardType2["Info"] = "info";
  MessageCardType2["Success"] = "success";
  MessageCardType2["Warn"] = "warning";
  MessageCardType2["Error"] = "error";
  MessageCardType2["Aside"] = "aside";
  MessageCardType2["Note"] = "note";
  MessageCardType2["Report"] = "report";
  return MessageCardType2;
})(MessageCardType || {});
var MessageCardEvent = /* @__PURE__ */ ((MessageCardEvent2) => {
  MessageCardEvent2["Open"] = "open";
  MessageCardEvent2["Close"] = "close";
  MessageCardEvent2["ProgressComplete"] = "progresscomplete";
  MessageCardEvent2["Remove"] = "remove";
  MessageCardEvent2["Cancel"] = "cancel";
  return MessageCardEvent2;
})(MessageCardEvent || {});
var DEFAULT_DURATION_MILLISECONDS = 5e3;
var componentTemplate = `<style>${message_card_default}</style>
${message_card_default2}`;
var COMPONENT_TAG_NAME27 = "message-card";
var MessageCardElement = class _MessageCardElement extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  get value() {
    return this.findPart("message").textContent;
  }
  get duration() {
    const durationAttribute = this.getAttribute("duration");
    return durationAttribute != null ? parseInt(durationAttribute) : DEFAULT_DURATION_MILLISECONDS;
  }
  #timeout;
  #animationFrameHandle;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = componentTemplate;
    this.findPart("close-button").addEventListener("click", () => {
      const result = this.dispatchEvent(new CustomEvent("cancel", { cancelable: true, bubbles: true }));
      if (result == false) {
        return;
      }
      this.endTimeout();
      this.#timeout = void 0;
      this.close();
      if (this.hasAttribute("open") == false && this.hasAttribute("managed") == true) {
        const result2 = this.dispatchEvent(new CustomEvent("remove", { cancelable: true, bubbles: true }));
        if (result2 == false) {
          return;
        }
        this.remove();
      }
    });
    this.addEventListener("mouseenter", () => {
      this.pauseTimeout();
    });
    this.addEventListener("mouseleave", () => {
      this.resumeTimeout();
    });
    this.addEventListener("focus", () => {
      this.pauseTimeout();
    });
    this.addEventListener("blur", () => {
      this.resumeTimeout();
    });
  }
  /**
   * Adds a new message-card element to the page, shows it, and then hides and removes it when its duration has elapsed.  
   Useful for injecting short-lived messages, rather than defining each message as a predetermined html element.
   * @param content If `content` is a `message-card` element, it will be used as the target card. If `content` is an `HTMLElement`, it will be injected as the message's content. If `content` is a `string`, the message slot will be filled with the string data.
   * @param parent the container element to append the `message-card` element into.
   * @param cardProperties configuration properties for the `message-card` element.
   */
  static notify(content, parent, cardProperties) {
    const card = _MessageCardElement.prepare(content, parent, cardProperties);
    card.show();
    return card;
  }
  /**
   * Adds a new message-card element to the page, and adds listeners to hide and remove it when its duration has elapsed, without showing it.  
   Useful for injecting short-lived messages, rather than defining each message as a predetermined html element.
   Differs from `notify` because when it gets shown is left to the implementer. Allows implementer to get a reference to the card to pass to a function which can call the cancel event.
   * @param content If `content` is a `message-card` element, it will be used as the target card. If `content` is an `HTMLElement`, it will be injected as the message's content. If `content` is a `string`, the message slot will be filled with the string data.
   * @param parent the container element to append the `message-card` element into.
   * @param cardProperties configuration properties for the `message-card` element.
   */
  static prepare(content, parent, cardProperties) {
    const properties = { duration: DEFAULT_DURATION_MILLISECONDS, heading: "Notification" };
    if (cardProperties != null) {
      Object.assign(properties, cardProperties);
    }
    if (typeof content == "string") {
      properties.value = content;
    }
    const card = content instanceof _MessageCardElement ? content : _MessageCardElement.create(properties);
    card.toggleAttribute("managed", true);
    if (content instanceof HTMLElement && card != content) {
      card.append(content);
    }
    parent.append(card);
    return card;
  }
  static create(props) {
    const element = document.createElement(COMPONENT_TAG_NAME27);
    if (props == null) {
      return element;
    }
    for (const [key, value] of Object.entries(props)) {
      if (key == "value" || key == "type" || key == "duration" || key == "heading" || key == "prevent-close") {
        element.setAttribute(key, value);
      } else if (key.startsWith("on")) {
        const eventName = key.substring(2).toLowerCase();
        element.addEventListener(eventName, value);
      }
    }
    return element;
  }
  show() {
    this.toggleAttribute("open", true);
    if (this.duration > 0) {
      this.startTimeout();
    }
  }
  close() {
    if (this.hasAttribute("prevent-close")) {
      return;
    }
    this.removeAttribute("open");
    if (this.#animationFrameHandle != null) {
      cancelAnimationFrame(this.#animationFrameHandle);
    }
  }
  static observedAttributes = ["open", "value", "type", "heading", "duration"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "open") {
      if (newValue != null) {
        this.dispatchEvent(new CustomEvent("open", { cancelable: true, bubbles: true }));
      } else {
        this.dispatchEvent(new CustomEvent("close", { cancelable: true, bubbles: true }));
      }
    } else if (attributeName == "value") {
      let toReplace = null;
      for (let i = 0; i < this.childNodes.length; i++) {
        if (this.childNodes[i].nodeType == 3) {
          toReplace = this.childNodes[i];
          break;
        }
      }
      if (toReplace != null) {
        toReplace.replaceWith(newValue);
      } else {
        this.append(newValue);
      }
    } else if (attributeName == "heading") {
      this.findPart("heading").textContent = newValue;
    } else if (attributeName == "duration") {
      if (this.hasAttribute("open")) {
        this.startTimeout();
      }
    }
  }
  startTimeout() {
    this.#timeout = new ProgressTimeout(this.duration, this.timeout_onAnimationFrame.bind(this), () => {
      this.#timeout = void 0;
      const result = this.dispatchEvent(new CustomEvent("progresscomplete", { cancelable: true, bubbles: true }));
      if (this.hasAttribute("managed") && result == true) {
        this.close();
        const result2 = this.dispatchEvent(new CustomEvent("remove", { cancelable: true, bubbles: true }));
        if (result2 == false) {
          return;
        }
        this.remove();
      }
    });
    this.#timeout.start();
  }
  pauseTimeout() {
    if (this.#timeout != null) {
      this.#timeout.pause();
    }
  }
  resumeTimeout() {
    if (this.#timeout != null) {
      this.#timeout.resume();
    }
  }
  endTimeout() {
    if (this.#timeout != null) {
      this.#timeout.clear();
    }
  }
  timeout_onAnimationFrame(timestamp, timeLeft) {
    let progress = 100 * timeLeft / this.#timeout.duration;
    this.getPart("duration").value = progress;
  }
  connectedCallback() {
    this.tabIndex = 0;
  }
};
if (customElements.get(COMPONENT_TAG_NAME27) == null) {
  customElements.define(COMPONENT_TAG_NAME27, MessageCardElement);
}

// data/records/custom-image.record.ts
var CustomImageRecord = class extends DataRecord {
  boardId = "";
  isSingleBoard = false;
  name = "";
  description = "";
  image;
};

// data/records/task.record.ts
var TaskRecord = class extends DataRecord {
  boardId = "";
  listId = "";
  order = -1;
  color = "#858585";
  description = "";
  isFinished = false;
};

// data/channels/data.channel.ts
var DataChannel = class {
  data;
  storeName;
  channels;
  constructor(data, storeName, channels = {}) {
    this.data = data;
    this.storeName = storeName;
    this.channels = channels;
  }
  async getAll(sortKey = "order") {
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    const records = await store.getAllRecords(sortKey);
    if (records == null) {
      return [];
    }
    return records;
  }
  async get(id) {
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    return store.getRecord(id);
  }
  async getItems(ids) {
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    const records = await store.getRecords(ids, "order");
    if (records == null) {
      return [];
    }
    return records;
  }
  async query(equalityPredicate, sortKey) {
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    return store.query(equalityPredicate, sortKey);
  }
  async save(record) {
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    return store.updateRecord(record);
  }
  async saveItems(records) {
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    return store.updateRecords(records);
  }
  async delete(id, overrideSoftDelete = false) {
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    const record = await this.get(id);
    if (record == null) {
      return;
    }
    return store.removeRecord(id, overrideSoftDelete);
  }
  async deleteItems(ids, overrideSoftDelete = false) {
    if (ids.length == 0) {
      return;
    }
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    const records = await this.getItems(ids);
    if (!records.every((item) => item != null)) {
      throw new Error("Some record ids were unable to be found. Delete process prevented.");
    }
    return store.removeRecords(ids, overrideSoftDelete);
  }
  async restore(id) {
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    return store.restoreRecord(id);
  }
  async restoreItems(ids) {
    if (ids.length == 0) {
      return;
    }
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    return store.restoreRecords(ids);
  }
};

// data/channels/board.channel.ts
var DEFAULT_LISTS = [
  { name: "To Do", description: "Things to get done.", color: "#837fd0" },
  { name: "In Progress", description: "Things being done now.", color: "#55c1c4" },
  { name: "Blocked", description: "Things that cannot be done now.", color: "#e45f60" },
  { name: "In Review", description: "Things that need confirmation on being done.", color: "#d68e3c" },
  { name: "Complete", description: "Things that are done.", color: "#5de467" }
];
var BoardChannel = class extends DataChannel {
  create() {
    const board = new TaskBoardRecord();
    board.id = RecordSetter.generateId();
    const lists = [];
    for (let i = 0; i < DEFAULT_LISTS.length; i++) {
      const listData = this.channels.taskLists.create();
      listData[0].boardId = board.id;
      listData[0].order = i;
      listData[0].name = DEFAULT_LISTS[i].name;
      listData[0].description = DEFAULT_LISTS[i].description;
      listData[0].color = DEFAULT_LISTS[i].color;
      lists.push(listData);
    }
    const taskSettings = this.channels.taskSettings.create("board");
    board.taskSettingsId = taskSettings.id;
    const value = [board, taskSettings, lists];
    return value;
  }
  async getTaskLists(boardId) {
    const store = this.data.getStore("tasklists");
    if (store == null) {
      throw new Error("Store is null.");
    }
    const records = await store.query({ boardId }, "order");
    if (records == null) {
      return [];
    }
    return records;
  }
  async getTasks(boardId) {
    const tasks = await this.channels.tasks.query({ boardId }, "order");
    return tasks;
  }
  async delete(id, overrideSoftDelete = false) {
    const boardsStore = this.data.getStore("boards");
    if (boardsStore == null) {
      throw new Error("Store is null.");
    }
    const board = await this.get(id);
    if (board == null || board.deletedTimestamp != null && overrideSoftDelete == false) {
      return;
    }
    await boardsStore.removeRecord(id, overrideSoftDelete);
    await this.channels.taskSettings.delete(board.taskSettingsId, overrideSoftDelete);
    if (board.backgroundImageId != null) {
      const backgroundImage = await this.channels.customImages.get(board.backgroundImageId);
      if (backgroundImage != null && backgroundImage.deletedTimestamp != null) {
        await this.channels.customImages.delete(board.backgroundImageId, overrideSoftDelete);
      }
    }
    const lists = await this.getTaskLists(id);
    for (let i = 0; i < lists.length; i++) {
      await this.channels.taskLists.delete(lists[i].id, overrideSoftDelete);
    }
    return true;
  }
  async restore(id) {
    const boardsStore = this.data.getStore("boards");
    if (boardsStore == null) {
      throw new Error("Store is null.");
    }
    const board = await this.get(id);
    if (board == null) {
      throw new Error("Record is null.");
    }
    const boardDeleted = board.deletedTimestamp;
    if (boardDeleted == null) {
      throw new Error("Deleted timestamp is null");
    }
    await this.channels.taskSettings.restore(board.taskSettingsId);
    if (board.backgroundImageId != null && board.backgroundImageId.trim() != "") {
      const backgroundImage = await this.channels.customImages.get(board.backgroundImageId);
      const imageDeleted = backgroundImage.deletedTimestamp ?? Number.MIN_SAFE_INTEGER;
      if (backgroundImage != null && imageDeleted >= boardDeleted) {
        await this.channels.customImages.restore(board.backgroundImageId);
      }
    }
    const lists = await this.getTaskLists(id);
    for (let i = 0; i < lists.length; i++) {
      const listDeleted = lists[i].deletedTimestamp ?? Number.MIN_SAFE_INTEGER;
      if (listDeleted >= boardDeleted) {
        await this.channels.taskLists.restore(lists[i].id);
      }
    }
    return boardsStore.restoreRecord(id);
  }
};

// data/channels/task-list.channel.ts
var TaskListChannel = class extends DataChannel {
  create(sourceList, sourceSettings) {
    const list = sourceList || new TaskListRecord();
    list.id = RecordSetter.generateId();
    const taskSettings = this.channels.taskSettings.create("list", sourceSettings);
    list.taskSettingsId = taskSettings.id;
    return [list, taskSettings];
  }
  async delete(id, overrideSoftDelete = false) {
    const store = this.data.stores.get("tasklists");
    if (store == null) {
      throw new Error("Store is null.");
    }
    const list = await this.get(id);
    if (list == null) {
      throw new Error("Record is null.");
    }
    if (list.deletedTimestamp != null && overrideSoftDelete == false) {
      return;
    }
    await store.removeRecord(id, overrideSoftDelete);
    await this.channels.taskSettings.delete(list.taskSettingsId, overrideSoftDelete);
    const tasks = await this.channels.tasks.query({ listId: id });
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].deletedTimestamp == null) {
        await this.channels.tasks.delete(tasks[i].id, overrideSoftDelete);
      }
    }
    return true;
  }
  async deleteItems(ids, overrideSoftDelete = false) {
    const store = this.data.stores.get("tasklists");
    if (store == null) {
      throw new Error("Store is null.");
    }
    const taskLists = await this.getItems(ids);
    const filteredLists = taskLists.filter((item) => item.deletedTimestamp == null);
    let toRemove = filteredLists.map((item) => item.id);
    await store.removeRecords(toRemove, overrideSoftDelete);
    const tasks = await this.channels.tasks.query({ listId: ids });
    const taskIds = tasks.filter((item) => item.deletedTimestamp == null).map((item) => item.id);
    await this.channels.tasks.deleteItems(taskIds);
    const taskSettingsIds = filteredLists.map((item) => item.taskSettingsId);
    await this.channels.taskSettings.deleteItems(taskSettingsIds);
    return new Array().fill(true, 0, ids.length);
  }
  async restore(id) {
    const store = this.data.getStore("tasklists");
    if (store == null) {
      throw new Error("Store is null.");
    }
    const list = await this.get(id);
    if (list == null) {
      throw new Error("Record is null.");
    }
    const listDeleted = list.deletedTimestamp;
    if (listDeleted == null) {
      throw new Error("Deleted timestamp is null");
    }
    await this.channels.taskSettings.restore(list.taskSettingsId);
    const tasks = await this.channels.tasks.query({ listId: id });
    for (let i = 0; i < tasks.length; i++) {
      const taskDeleted = tasks[i].deletedTimestamp ?? Number.MIN_SAFE_INTEGER;
      if (taskDeleted >= listDeleted) {
        await this.channels.tasks.restore(tasks[i].id);
      }
    }
    return store.restoreRecord(id);
  }
};

// data/channels/task.channel.ts
var TaskChannel = class extends DataChannel {
  create(boardId, listId) {
    const task = new TaskRecord();
    task.id = RecordSetter.generateId();
    task.boardId = boardId;
    task.listId = listId;
    return task;
  }
};

// data/channels/task-settings.channel.ts
var TaskSettingsChannel = class extends DataChannel {
  create(parentType, sourceSettings) {
    const taskSettings = sourceSettings || new TaskSettingsRecord();
    taskSettings.id = RecordSetter.generateId();
    taskSettings.parentRecordType = parentType;
    return taskSettings;
  }
};

// data/channels/custom-image.channel.ts
var CustomImageChannel = class extends DataChannel {
  create() {
    const record = new CustomImageRecord();
    record.id = RecordSetter.generateId();
    return record;
  }
  createFromImage(image) {
    const record = new CustomImageRecord();
    record.id = RecordSetter.generateId();
    record.name = image.name;
    record.image = image;
    return record;
  }
};

// data/records/history-entry.record.ts
var HistoryEntryRecord = class extends DataRecord {
  action = HistoryEntryType.Read;
  timestamp = -1;
  data;
  isActive = 0;
};

// data/channels/history-entry.channel.ts
var HistoryEntryChannel = class extends DataChannel {
  create(data, action) {
    const record = new HistoryEntryRecord();
    record.id = RecordSetter.generateId();
    if (action != null) {
      record.action = action;
    }
    record.data = data;
    record.timestamp = Date.now();
    return record;
  }
  async getActiveEntry() {
    const activeEntries = await this.query({ isActive: 1 });
    return activeEntries[0];
  }
  /**
   * Re-evaluates whether or not the ids exist and only deletes
   * items that are still in the database.
   * @param ids the ids of the records to delete
   * @returns `boolean[]` array of values indicating whether the delete was successful. Only contains existing ids.
   */
  async deleteIfExists(ids) {
    if (ids.length == 0) {
      return;
    }
    const store = this.data.getStore(this.storeName);
    if (store == null) {
      throw new Error("Store is null.");
    }
    const records = await this.getItems(ids);
    const existingRecords = records.filter((item) => item != null);
    const existingIds = existingRecords.map((item) => item.id);
    if (existingIds.length == 0) {
      return;
    }
    return store.removeRecords(existingIds, true);
  }
};

// data/data.ts
var DEFAULT_SCHEMA = {
  "boards": "id, order",
  "tasklists": "id, boardId, order",
  "tasks": "id, boardId, listId, order",
  "taskSettings": "id, [parentRecordType+parentId]",
  "customImages": "id, boardId, parentId",
  "actionHistoryEntries": "id, boardId"
};
var TaskManagerComponentDataConfig = class {
  name;
  version;
  schema;
  constructor(name = "TaskManager", version = 1, schema = DEFAULT_SCHEMA) {
    this.name = name;
    this.version = version;
    this.schema = schema;
  }
};
var TaskManagerComponentData = class {
  isInitialized = false;
  boards;
  lists;
  tasks;
  taskSettings;
  customImages;
  historyEntries;
  #data;
  #config;
  constructor(config) {
    this.#config = Object.assign(new TaskManagerComponentDataConfig(), config);
    this.#data = new RecordSetter();
  }
  async init() {
    await this.#data.open(this.#config);
    this.#data.addStore(
      "boards",
      [
        "boards",
        "taskSettings",
        "tasklists",
        "tasks",
        "customImages"
      ],
      { useSoftDelete: true }
    );
    this.#data.addStore(
      "tasklists",
      [
        "taskSettings",
        "tasklists",
        "tasks"
      ],
      { useSoftDelete: true }
    );
    this.#data.addStore(
      "tasks",
      [
        "tasks"
      ],
      { useSoftDelete: true }
    );
    this.#data.addStore(
      "taskSettings",
      [
        "taskSettings"
      ],
      { useSoftDelete: true }
    );
    this.#data.addStore(
      "customImages",
      [
        "customImages"
      ],
      { useSoftDelete: true }
    );
    this.#data.addStore(
      "actionHistoryEntries",
      [
        "actionHistoryEntries"
      ]
    );
    this.#createChannels();
    this.isInitialized = true;
  }
  #createChannels() {
    const historyEntriesChannel = new HistoryEntryChannel(this.#data, "actionHistoryEntries");
    const customImageChannel = new CustomImageChannel(this.#data, "customImages");
    const taskSettingsChannel = new TaskSettingsChannel(this.#data, "taskSettings");
    const taskChannel = new TaskChannel(this.#data, "tasks");
    const taskListChannel = new TaskListChannel(this.#data, "tasklists", { tasks: taskChannel, taskSettings: taskSettingsChannel });
    const boardChannel = new BoardChannel(this.#data, "boards", { taskSettings: taskSettingsChannel, taskLists: taskListChannel, tasks: taskChannel, customImages: customImageChannel });
    this.boards = boardChannel;
    this.lists = taskListChannel;
    this.tasks = taskChannel;
    this.taskSettings = taskSettingsChannel;
    this.customImages = customImageChannel;
    this.historyEntries = historyEntriesChannel;
  }
  getValue = (key) => this.#data.getValue(key);
  setValue = (key, value) => this.#data.setValue(key, value);
  async clearAllData() {
    return Promise.allSettled([
      (await this.#data.getKeyValueStore()).clear(),
      this.#data.getStore("boards").clear(),
      this.#data.getStore("tasklists").clear(),
      this.#data.getStore("tasks").clear(),
      this.#data.getStore("taskSettings").clear(),
      this.#data.getStore("customImages").clear(),
      this.#data.getStore("actionHistoryEntries").clear()
    ]);
  }
  // actions    
  boardUpdate_getActionProperties(board, taskLists, taskSettings, image) {
    const boardDiff = Object.fromEntries(Object.entries(board.existing).filter(([key, value]) => value !== board.updated[key]));
    const board_changedValues = /* @__PURE__ */ new Map();
    for (const [key, value] of Object.entries(boardDiff)) {
      board_changedValues.set(key, { from: value, to: board.updated[key] });
    }
    let boardPropertyUpdate = board_changedValues.size == 0 ? void 0 : {
      id: board.updated.id,
      updates: board_changedValues
    };
    let imagePropertyUpdate;
    if (image != null && image.existing != null && image.updated != null) {
      const imageDiff = Object.fromEntries(Object.entries(image.existing).filter(([key, value]) => {
        if (key == "image") {
          const targetImage = image.updated[key];
          if (value == null && targetImage == null) {
            return false;
          }
          if (value == null && targetImage != null || value != null && targetImage == null) {
            return true;
          }
          return !(value.name == targetImage.name && value.lastModified == targetImage.lastModified && value.size == targetImage.size && value.type == targetImage.type);
        }
        return value !== image.updated[key];
      }));
      const image_changedValues = /* @__PURE__ */ new Map();
      for (const [key, value] of Object.entries(imageDiff)) {
        image_changedValues.set(key, { from: value, to: image.updated[key] });
      }
      imagePropertyUpdate = image_changedValues.size == 0 ? void 0 : {
        id: image.updated.id,
        updates: image_changedValues
      };
      if (imagePropertyUpdate != null) {
        boardPropertyUpdate = boardPropertyUpdate ?? {
          id: board.updated.id
        };
        boardPropertyUpdate.backgroundImages = boardPropertyUpdate.backgroundImages ?? [];
        boardPropertyUpdate.backgroundImages.push(imagePropertyUpdate);
      }
    }
    const listPropertyUpdates = [];
    const settingsIdListMap = /* @__PURE__ */ new Map();
    if (taskLists != null) {
      for (let i = 0; i < taskLists.existing.length; i++) {
        const existingList = taskLists.existing[i];
        const updatedList = taskLists.updated[i];
        const listId = existingList?.id ?? updatedList.id;
        if (updatedList != null) {
          settingsIdListMap.set(updatedList.taskSettingsId, listId);
        } else if (existingList != null) {
          settingsIdListMap.set(existingList.taskSettingsId, listId);
        }
        if (existingList == null || updatedList == null) {
          continue;
        }
        const listDiff = Object.fromEntries(Object.entries(existingList).filter(([key, value]) => value !== updatedList[key]));
        const list_changedValues = /* @__PURE__ */ new Map();
        for (const [key, value] of Object.entries(listDiff)) {
          list_changedValues.set(key, { from: value, to: updatedList[key] });
        }
        if (list_changedValues.size == 0) {
          continue;
        }
        const listPropertyUpdate = {
          id: updatedList.id,
          updates: list_changedValues
        };
        listPropertyUpdates.push(listPropertyUpdate);
      }
    }
    if (taskSettings != null) {
      for (let i = 0; i < taskSettings.existing.length; i++) {
        const existingSettings = taskSettings.existing[i];
        const updatedSettings = taskSettings.updated[i];
        if (existingSettings == null || updatedSettings == null) {
          continue;
        }
        const settingsDiff = Object.fromEntries(Object.entries(existingSettings).filter(([key, value]) => value !== updatedSettings[key]));
        const settings_changedValues = /* @__PURE__ */ new Map();
        for (const [key, value] of Object.entries(settingsDiff)) {
          settings_changedValues.set(key, { from: value, to: updatedSettings[key] });
        }
        if (settings_changedValues.size == 0) {
          continue;
        }
        const settingsPropertyUpdate = {
          id: updatedSettings.id,
          updates: settings_changedValues
        };
        if (updatedSettings.parentRecordType == "board") {
          boardPropertyUpdate = boardPropertyUpdate ?? {
            id: board.updated.id
          };
          boardPropertyUpdate.taskSettings = settingsPropertyUpdate;
        } else if (updatedSettings.parentRecordType == "list") {
          let listId = settingsIdListMap.get(updatedSettings.id);
          if (listId == null) {
            continue;
          }
          let parentProperties = listPropertyUpdates.find((item) => item.id == listId);
          if (parentProperties != null) {
            parentProperties.taskSettings = settingsPropertyUpdate;
          } else {
            listPropertyUpdates.push({
              id: listId,
              taskSettings: settingsPropertyUpdate
            });
          }
        }
      }
    }
    const updates = [boardPropertyUpdate, listPropertyUpdates];
    return updates;
  }
  // foreign data
  async naturalizeForeignData(boardData, order) {
    const board = new TaskBoardRecord();
    const lists = [];
    const tasks = [];
    const settings = [];
    const images = [];
    board.id = boardData.id ?? RecordSetter.generateId();
    board.name = boardData.name ?? board.name;
    board.color = boardData.color ?? board.color;
    board.order = order;
    board.backgroundImageId = boardData.backgroundImageId ?? board.backgroundImageId;
    board.backgroundDisplay = boardData.backgroundDisplay ?? board.backgroundDisplay;
    board.backgroundOffsetX = boardData.backgroundOffsetX ?? board.backgroundOffsetX;
    board.backgroundOffsetY = boardData.backgroundOffsetY ?? board.backgroundOffsetY;
    board.useCustomBackgroundColor = boardData.useCustomBackgroundColor ?? board.useCustomBackgroundColor;
    board.backgroundColor = boardData.backgroundColor ?? board.backgroundColor;
    board.useCustomFontColor = boardData.useCustomFontColor ?? board.useCustomFontColor;
    board.fontColor = boardData.fontColor ?? board.fontColor;
    const boardTaskSettings = new TaskSettingsRecord();
    boardTaskSettings.id = boardData.taskSettings?.id ?? RecordSetter.generateId();
    boardTaskSettings.parentRecordType = "board";
    board.taskSettingsId = boardTaskSettings.id;
    if (boardData.taskSettings != null) {
      boardTaskSettings.centerCheckbox = boardData.taskSettings.centerCheckbox ?? boardTaskSettings.centerCheckbox;
      boardTaskSettings.colorDisplay = boardData.taskSettings.colorDisplay ?? boardTaskSettings.colorDisplay;
      boardTaskSettings.useCustomBackgroundColor = boardData.taskSettings.useCustomBackgroundColor ?? boardTaskSettings.useCustomBackgroundColor;
      boardTaskSettings.customBackgroundColor = boardData.taskSettings.customBackgroundColor ?? boardTaskSettings.customBackgroundColor;
      boardTaskSettings.useCustomFontSize = boardData.taskSettings.useCustomFontSize ?? boardTaskSettings.useCustomFontSize;
      boardTaskSettings.customFontSize = boardData.taskSettings.customFontSize ?? boardTaskSettings.customFontSize;
      boardTaskSettings.useCustomFontColor = boardData.taskSettings.useCustomFontColor ?? boardTaskSettings.useCustomFontColor;
      boardTaskSettings.customFontColor = boardData.taskSettings.customFontColor ?? boardTaskSettings.customFontColor;
      boardTaskSettings.useCustomWidth = boardData.taskSettings.useCustomWidth ?? boardTaskSettings.useCustomWidth;
      boardTaskSettings.customWidth = boardData.taskSettings.customWidth ?? boardTaskSettings.customWidth;
      boardTaskSettings.useCustomBorderWidth_top = boardData.taskSettings.useCustomBorderWidth_top ?? boardTaskSettings.useCustomBorderWidth_top;
      boardTaskSettings.borderWidth_top = boardData.taskSettings.borderWidth_top ?? boardTaskSettings.borderWidth_top;
      boardTaskSettings.useCustomBorderWidth_right = boardData.taskSettings.useCustomBorderWidth_right ?? boardTaskSettings.useCustomBorderWidth_right;
      boardTaskSettings.borderWidth_right = boardData.taskSettings.borderWidth_right ?? boardTaskSettings.borderWidth_right;
      boardTaskSettings.useCustomBorderWidth_bottom = boardData.taskSettings.useCustomBorderWidth_bottom ?? boardTaskSettings.useCustomBorderWidth_bottom;
      boardTaskSettings.borderWidth_bottom = boardData.taskSettings.borderWidth_bottom ?? boardTaskSettings.borderWidth_bottom;
      boardTaskSettings.useCustomBorderWidth_left = boardData.taskSettings.useCustomBorderWidth_left ?? boardTaskSettings.useCustomBorderWidth_left;
      boardTaskSettings.borderWidth_left = boardData.taskSettings.borderWidth_left ?? boardTaskSettings.borderWidth_left;
      boardTaskSettings.useCustomBorderRadius = boardData.taskSettings.useCustomBorderRadius ?? boardTaskSettings.useCustomBorderRadius;
      boardTaskSettings.borderRadiusValue = boardData.taskSettings.borderRadiusValue ?? boardTaskSettings.borderRadiusValue;
      boardTaskSettings.borderRadiusUnit = boardData.taskSettings.borderRadiusUnit ?? boardTaskSettings.borderRadiusUnit;
      boardTaskSettings.useCustomBorderColor = boardData.taskSettings.useCustomBorderColor ?? boardTaskSettings.useCustomBorderColor;
      boardTaskSettings.customBorderColor = boardData.taskSettings.customBorderColor ?? boardTaskSettings.customBorderColor;
      boardTaskSettings.centerRemoveButton = boardData.taskSettings.centerRemoveButton ?? boardTaskSettings.centerRemoveButton;
    }
    settings.push(boardTaskSettings);
    if (boardData.backgroundImage != null) {
      const backgroundImage = new CustomImageRecord();
      backgroundImage.id = boardData.backgroundImage.id ?? RecordSetter.generateId();
      backgroundImage.name = boardData.backgroundImage.name ?? backgroundImage.name;
      backgroundImage.description = boardData.backgroundImage.description ?? backgroundImage.description;
      backgroundImage.boardId = boardData.backgroundImage.boardId ?? board.id;
      backgroundImage.isSingleBoard = boardData.backgroundImage.isSingleBoard ?? backgroundImage.isSingleBoard;
      if (boardData.backgroundImage.image_base64 != null) {
        const imageResponse = await fetch(boardData.backgroundImage.image_base64);
        backgroundImage.image = new File([await imageResponse.blob()], boardData.backgroundImage.name ?? "Background Image");
      }
      images.push(backgroundImage);
    }
    if (boardData.lists != null) {
      for (let i = 0; i < boardData.lists.length; i++) {
        const listData = boardData.lists[i];
        const list = new TaskListRecord();
        list.id = listData.id ?? RecordSetter.generateId();
        list.boardId = listData.boardId ?? board.id;
        const listTaskSettings = new TaskSettingsRecord();
        listTaskSettings.id = listData.taskSettings?.id ?? RecordSetter.generateId();
        listTaskSettings.parentRecordType = "list";
        list.taskSettingsId = listTaskSettings.id;
        list.category = listData.category ?? list.category;
        list.order = listData.order ?? i;
        list.color = listData.color ?? list.color;
        list.name = listData.name ?? list.name;
        list.description = listData.description ?? list.description;
        list.colorDisplay = listData.colorDisplay ?? list.colorDisplay;
        list.useCustomBackgroundColor = listData.useCustomBackgroundColor ?? list.useCustomBackgroundColor;
        list.backgroundColor = listData.backgroundColor ?? list.backgroundColor;
        list.useCustomFontColor = listData.useCustomFontColor ?? list.useCustomFontColor;
        list.fontColor = listData.fontColor ?? list.fontColor;
        list.useCustomWidth = listData.useCustomWidth ?? list.useCustomWidth;
        list.width = listData.width ?? list.width;
        list.isCollapsed = listData.isCollapsed ?? list.isCollapsed;
        if (listData.taskSettings != null) {
          listTaskSettings.centerCheckbox = listData.taskSettings.centerCheckbox ?? listTaskSettings.centerCheckbox;
          listTaskSettings.colorDisplay = listData.taskSettings.colorDisplay ?? listTaskSettings.colorDisplay;
          listTaskSettings.useCustomBackgroundColor = listData.taskSettings.useCustomBackgroundColor ?? listTaskSettings.useCustomBackgroundColor;
          listTaskSettings.customBackgroundColor = listData.taskSettings.customBackgroundColor ?? listTaskSettings.customBackgroundColor;
          listTaskSettings.useCustomFontSize = listData.taskSettings.useCustomFontSize ?? listTaskSettings.useCustomFontSize;
          listTaskSettings.customFontSize = listData.taskSettings.customFontSize ?? listTaskSettings.customFontSize;
          listTaskSettings.useCustomFontColor = listData.taskSettings.useCustomFontColor ?? listTaskSettings.useCustomFontColor;
          listTaskSettings.customFontColor = listData.taskSettings.customFontColor ?? listTaskSettings.customFontColor;
          listTaskSettings.useCustomWidth = listData.taskSettings.useCustomWidth ?? listTaskSettings.useCustomWidth;
          listTaskSettings.customWidth = listData.taskSettings.customWidth ?? listTaskSettings.customWidth;
          listTaskSettings.useCustomBorderWidth_top = listData.taskSettings.useCustomBorderWidth_top ?? listTaskSettings.useCustomBorderWidth_top;
          listTaskSettings.borderWidth_top = listData.taskSettings.borderWidth_top ?? listTaskSettings.borderWidth_top;
          listTaskSettings.useCustomBorderWidth_right = listData.taskSettings.useCustomBorderWidth_right ?? listTaskSettings.useCustomBorderWidth_right;
          listTaskSettings.borderWidth_right = listData.taskSettings.borderWidth_right ?? listTaskSettings.borderWidth_right;
          listTaskSettings.useCustomBorderWidth_bottom = listData.taskSettings.useCustomBorderWidth_bottom ?? listTaskSettings.useCustomBorderWidth_bottom;
          listTaskSettings.borderWidth_bottom = listData.taskSettings.borderWidth_bottom ?? listTaskSettings.borderWidth_bottom;
          listTaskSettings.useCustomBorderWidth_left = listData.taskSettings.useCustomBorderWidth_left ?? listTaskSettings.useCustomBorderWidth_left;
          listTaskSettings.borderWidth_left = listData.taskSettings.borderWidth_left ?? listTaskSettings.borderWidth_left;
          listTaskSettings.useCustomBorderRadius = listData.taskSettings.useCustomBorderRadius ?? listTaskSettings.useCustomBorderRadius;
          listTaskSettings.borderRadiusValue = listData.taskSettings.borderRadiusValue ?? listTaskSettings.borderRadiusValue;
          listTaskSettings.borderRadiusUnit = listData.taskSettings.borderRadiusUnit ?? listTaskSettings.borderRadiusUnit;
          listTaskSettings.useCustomBorderColor = listData.taskSettings.useCustomBorderColor ?? listTaskSettings.useCustomBorderColor;
          listTaskSettings.customBorderColor = listData.taskSettings.customBorderColor ?? listTaskSettings.customBorderColor;
          listTaskSettings.centerRemoveButton = listData.taskSettings.centerRemoveButton ?? listTaskSettings.centerRemoveButton;
        }
        settings.push(listTaskSettings);
        if (listData.tasks != null) {
          for (let j = 0; j < listData.tasks.length; j++) {
            const taskData = listData.tasks[j];
            const task = new TaskRecord();
            task.id = taskData.id ?? RecordSetter.generateId();
            task.boardId = taskData.boardId ?? board.id;
            task.listId = taskData.listId ?? list.id;
            task.order = taskData.order ?? j;
            task.color = taskData.color ?? task.color;
            task.description = taskData.description ?? task.description;
            task.isFinished = taskData.isFinished ?? task.isFinished;
            tasks.push(task);
          }
        }
        lists.push(list);
      }
    }
    const data = [board, lists, tasks, settings, images];
    return data;
  }
};
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
function extendableType() {
  return class {
  };
}

// data/foreign/exported-image.ts
var ImageExport = class extends extendableType() {
  constructor(image) {
    super();
    Object.assign(this, image);
  }
  async loadImage() {
    if (this.image != null) {
      this.image_base64 = await toBase64(this.image);
      if (this.image instanceof File) {
        if (this.image.name.endsWith("jpg") || this.image.name.endsWith("jpeg")) {
          this.image_base64 = this.image_base64.replace("application/octet-stream", "image/jpg");
        } else if (this.image.name.endsWith("png")) {
          this.image_base64 = this.image_base64.replace("application/octet-stream", "image/png");
        } else if (this.image.name.endsWith("webp")) {
          this.image_base64 = this.image_base64.replace("application/octet-stream", "image/webp");
        } else if (this.image.name.endsWith("gif")) {
          this.image_base64 = this.image_base64.replace("application/octet-stream", "image/gif");
        }
      }
    }
  }
};

// data/foreign/exported-board.ts
var BoardExport = class extends extendableType() {
  constructor(board, taskSettings, backgroundImage, lists) {
    super();
    Object.assign(this, board);
    this.taskSettings = taskSettings;
    this.lists = lists;
    this.backgroundImage = backgroundImage != null ? new ImageExport(backgroundImage) : void 0;
  }
};

// data/foreign/exported-list.ts
var ListExport = class extends extendableType() {
  constructor(list, taskSettings, tasks) {
    super();
    Object.assign(this, list);
    this.taskSettings = taskSettings;
    this.tasks = tasks;
  }
};

// handlers/route.handlers.ts
var historyIsUpdating = false;
function addRouteHandlers() {
  this.findElement("app-router").addRouteLinkClickHandlers(this.shadowRoot);
  this.findElement("app-router").addEventListener("pathchange", router_onPathChange.bind(this));
  window.addEventListener("popstate", async (event) => {
    historyIsUpdating = true;
    const { windowPath, windowHash } = parseWindowPath();
    let route = windowPath + windowHash;
    console.log(route);
    await this.findElement("app-router").navigate(route);
    historyIsUpdating = false;
  });
  this.findElement("board-route").applyEventListener("beforeopen", boardRoute_beforeOpen.bind(this));
  this.findElement("board-settings-dialog").applyEventListener("beforeopen", boardSettingsRoute_beforeOpen.bind(this));
}
function router_onPathChange(event) {
  if (historyIsUpdating == true) {
    return;
  }
  const router = event.target;
  const currentLocationSearchPathArray = window.location.search.substring(1).split("=");
  const searchPathValue = currentLocationSearchPathArray[1] ?? "";
  const currentLocation = new URL(`${window.location.origin}/${searchPathValue}`);
  let updatedPath = router.getAttribute("path");
  const origin = window.location.origin;
  const updatedLocation = new URL(`${origin}/${updatedPath}`);
  const { hasChanged, isReplacementChange } = router.compareLocations(currentLocation, updatedLocation);
  if (hasChanged) {
    const newHistoryState = `${updatedLocation.origin}/demo/app.html?path=${updatedLocation.pathname}${updatedLocation.hash}`;
    if (isReplacementChange) {
      window.history.replaceState(null, "", newHistoryState);
    } else {
      window.history.pushState(null, "", newHistoryState);
    }
  }
  const currentPathArray = updatedPath.split("#");
  const pageRoute = currentPathArray[0];
  const hashRoute = currentPathArray[1];
  const items = [...this.findElement("app-menu").querySelectorAll("a")];
  for (let i = 0; i < items.length; i++) {
    items[i].part.remove("selected");
  }
  if (pageRoute != null) {
    const currentMenuItem = this.findElement("app-menu").querySelector(`[data-route="${pageRoute}"]`);
    if (currentMenuItem != null) {
      currentMenuItem.setAttribute("aria-current", "page");
      currentMenuItem.part.add("selected");
    }
  }
  if (hashRoute != null) {
    if (hashRoute.indexOf("config") == -1) {
      return;
    }
    const configRoute = hashRoute.substring(7);
    const configPanel = this.findElement("config-panel");
    const configMenuItems = [...configPanel.findElement("navigation").querySelectorAll(`a`)];
    for (let i = 0; i < configMenuItems.length; i++) {
      configMenuItems[i].toggleAttribute("aria-current", false);
    }
    configPanel.findElement("navigation").querySelector(`[data-route="#${hashRoute}"]`)?.setAttribute("aria-current", "page");
    configPanel.findElement("router").setAttribute("path", configRoute);
  }
}
function parseWindowPath() {
  const pathArray = window.location.search.substring(1).split("=");
  let windowPath = pathArray[1] ?? "";
  if (windowPath.startsWith("/")) {
    windowPath = windowPath.substring(1);
  }
  if (windowPath.startsWith("demo/app/")) {
    windowPath = windowPath.substring(10);
  } else if (windowPath.startsWith("demo/app.html")) {
    windowPath = windowPath.substring(14);
  }
  windowPath = windowPath.trim();
  let windowHash = window.location.hash;
  if (windowHash.startsWith("#")) {
    windowHash = windowHash.substring(1);
  }
  windowHash = windowHash.trim();
  return { windowPath, windowHash };
}
function boardRoute_beforeOpen(event) {
  const data = event.detail;
  const boardId = data.properties.id;
  if (boardId == null) {
    MessageCardElement.notify(
      `An error occurred attempting to open the board.`,
      this.getElement("notifications"),
      { type: MessageCardType.Error }
    );
    throw new Error("Unable to open board route with unknown id");
  }
  this[SHAREDACCESSKEY].renderBoard(boardId);
  this[SHAREDACCESSKEY].updateRecentBoardEntry(boardId);
}
async function boardSettingsRoute_beforeOpen(event) {
  const data = event.detail;
  const router = this.findElement("app-router");
  const properties = await router.getRouteProperties();
  if (properties.id == null) {
    MessageCardElement.notify(
      `An error occurred attempting to open the board for editing.`,
      this.getElement("notifications"),
      { type: MessageCardType.Error }
    );
    throw new Error("Unable to determine the selected board's id");
  }
  this.openBoardSettings(properties.id);
}

// handlers/board.handlers.ts
async function taskDescription_onKeyUp(event) {
  if (event.code != "Enter" || event.shiftKey == false && event.ctrlKey == false) {
    return;
  }
  const list = event.target.getRootNode().host.parentElement;
  const listId = list?.dataset.tasklistId;
  if (list == null || listId == null) {
    MessageCardElement.notify(
      `An error occurred creating a new task.`,
      this.getElement("notifications"),
      { type: MessageCardType.Error }
    );
    console.error(new Error("List data not found."));
    return;
  }
  const card = new TaskCardElement();
  list.append(card);
  this[SHAREDACCESSKEY].registerTaskCard(card, listId, list.children.length);
  list.append(card);
  card.findPart("description").focus();
}

// taskboard-manager.ts
var AppSettingKey = /* @__PURE__ */ ((AppSettingKey2) => {
  AppSettingKey2["ActiveEntryIndex"] = "activeEntryIndex";
  AppSettingKey2["HistoryLength"] = "historyLength";
  AppSettingKey2["DaysToPersistData"] = "daysToPersistData";
  AppSettingKey2["RecentBoards"] = "recentBoards";
  AppSettingKey2["ColorScheme"] = "color-scheme";
  AppSettingKey2["Language"] = "language";
  return AppSettingKey2;
})(AppSettingKey || {});
var MILLISECONDSINDAY = 1e3 * 60 * 60 * 24;
var DEFAULT_HISTORY_LENGTH = "30";
var DEFAULT_PERSIST_DAYS = "7";
var DATA_ERROR_MESSAGE = `<p>An error occurred trying to access the [subject] data.</p>
<p>If this is a repeating issue, you can try to refresh the application. Data may be lost when taking this action.</p>
<p>For more information, see the console in the browser's developer tools.</p>`;
var BOARD_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Task Board");
var LIST_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Task List");
var TASK_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Task");
var IMAGE_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Image");
var HISTORY_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "History");
var SETTINGS_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Settings");
var ATTRIBUTE_PREPARED_FOR_DELETE = "to-delete";
var SHAREDACCESSKEY = Symbol("SHAREDACCESSKEY");
var COMPONENT_STYLESHEET26 = new CSSStyleSheet();
COMPONENT_STYLESHEET26.replaceSync(`${shared_default}
${board_item_global_default}
${browser_item_global_default}
${settings_default}
${taskboard_manager_default}`);
var COMPONENT_TEMPLATE11 = `${taskboard_manager_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "LogoType" /* LogoType */,
  "Logo" /* Logo */,
  "PlusIcon" /* PlusIcon */,
  "Stylus" /* Stylus */,
  "TaskBoard" /* TaskBoard */
)}`;
var COMPONENT_TAG_NAME28 = "taskboard-manager";
var TaskboardManagerElement3 = class extends HTMLElement {
  static observedAttributes = [];
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  initPromise;
  #data;
  #customImageUrls = /* @__PURE__ */ new Map();
  /** Exposes "shared" private functions/properties to external modules. */
  [SHAREDACCESSKEY];
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE11;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET26);
    const datastoreName = this.getAttribute("datastore-name");
    this.#data = new TaskManagerComponentData(datastoreName == null ? void 0 : { name: datastoreName });
    const autoLaunch = this.getAttribute("autolaunch") != "false";
    if (autoLaunch == true) {
      this.initPromise = this.#init();
    }
  }
  // api
  /**
  * Initializes the app.  
  * Not necessary if the `autolaunch` attribute was not set to `false`.
  */
  async init() {
    this.initPromise = this.#init();
  }
  async addBoard() {
    const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const listChannel = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, "danger");
    const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, "danger");
    const [board, taskSettings, listData] = await boardChannel.create();
    board.order = this.findElement("app-menu").querySelectorAll("a").length;
    boardChannel.save(board);
    const lists = [];
    const listSettings = [];
    for (let i = 0; i < listData.length; i++) {
      const [list, settings] = listData[i];
      lists.push(list);
      listSettings.push(settings);
    }
    listChannel.saveItems(lists);
    taskSettingsChannel.saveItems([taskSettings, ...listSettings]);
    await this.#addActionHistoryEntry(HistoryEntryType.Create, "board" /* Board */, { id: board.id });
  }
  async openBoard(id) {
    await this.initPromise;
    await this.closeBoard();
    await this.getElement("app-router").navigate(`board/${id}`);
  }
  async closeBoard() {
    await this.findElement("app-router").navigate("/" + window.location.hash);
    this.getElement("task-board").innerHTML = "";
  }
  async openBoardSettings(id) {
    await this.initPromise;
    const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, "danger");
    const imagesChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, "danger");
    const board = await boardChannel.get(id);
    if (board == null) {
      MessageCardElement.notify(
        `No board found with the target id (${id}).`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      console.warn(`No board found with the target id (${id}).`);
      return;
    }
    const taskLists = await boardChannel.getTaskLists(id);
    const taskSettingIds = taskLists.map((item) => item.taskSettingsId);
    const taskSettings = await taskSettingsChannel.getItems([board.taskSettingsId, ...taskSettingIds]);
    const boardTaskSettings = taskSettings.find((item) => item.id == board.taskSettingsId);
    const listTaskSettings = taskSettings.filter((item) => taskSettingIds.indexOf(item.id) > -1);
    if (boardTaskSettings == null) {
      MessageCardElement.notify(
        `An error occurred accessing task settings data.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      console.warn(`An error occurred accessing task settings data.`);
      return;
    }
    const backgroundImage = board.backgroundImageId == "" ? null : await imagesChannel.get(board.backgroundImageId);
    const boardSettings = this.findElement("board-settings");
    boardSettings.setValues(board, boardTaskSettings, backgroundImage);
    boardSettings.setLists(taskLists, listTaskSettings);
  }
  async duplicateBoard(id) {
    const boardExportData = await this.#prepareExportData(id);
    const duplicateData = this.findElement("import-manager").prepareData(boardExportData);
    const newNameInput = this.findElement("board-settings").findElement("duplicate-board-name");
    if (newNameInput?.value != null && newNameInput.value.trim() != "") {
      duplicateData.name = newNameInput.value;
    }
    await this.importBoard(duplicateData, "An error occurred duplicating a board.");
  }
  async removeBoard(boardId, confirm = true) {
    const confirmed = await this.#getConfirmation("Are you sure you want to delete this board and all of its tasks, lists, and images?", "warn");
    if (confirm == true && confirmed == false) {
      return;
    }
    await this.closeBoardSettings();
    const channel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    if (this.findElement("app-router").getAttribute("path")?.indexOf(boardId) != null) {
      this.closeBoard();
    }
    await channel.delete(boardId);
    const entry = await this.#addActionHistoryEntry(HistoryEntryType.Delete, "board" /* Board */, { id: boardId });
    this.#refreshBoards();
    this.#refreshDeletedItems();
    await this.#removeBoardFromRecentBoards(boardId);
    this.#refreshRecentBoards();
    if (entry != null) {
      this.#addUndoNotification("A board was just deleted", entry.getAttribute("data-entry-id"));
    }
  }
  #addUndoNotification(message, entryId) {
    const content = document.createElement("span");
    content.setAttribute("part", "message-content");
    const messageText = document.createElement("span");
    messageText.setAttribute("part", "undo-message");
    messageText.textContent = message;
    const messageButton = document.createElement("button");
    messageButton.setAttribute("part", "notification-undo-button");
    messageButton.innerHTML = `<span part="button-label">Undo?</span>`;
    messageButton.type = "button";
    content.append(messageText, messageButton);
    const notification = MessageCardElement.prepare(content, this.findElement("notifications"), { type: MessageCardType.Success, heading: "Success!" });
    messageButton.addEventListener("click", () => {
      const entry = this.getElement("action-history").querySelector(`[data-entry-id="${entryId}"]`);
      if (entry == null) {
        MessageCardElement.notify(
          `An error occurred restoring a record. The record was not restored`,
          this.findElement("notifications"),
          { type: MessageCardType.Error }
        );
        return;
      }
      this.getElement("action-history").reverseEntry(entry);
      notification.dispatchEvent(new CustomEvent(MessageCardEvent.Cancel));
      notification.remove();
    });
    notification.show();
  }
  async exportBoard(id) {
    const boardExportData = await this.#prepareExportData(id);
    this.#downloadExportData(boardExportData);
  }
  async importBoard(boardData, errorMessage) {
    try {
      const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
      const listChannel = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, "danger");
      const taskChannel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, "danger");
      const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, "danger");
      const imageChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, "danger");
      const order = this.findElement("app-menu").querySelectorAll("a").length;
      const [board, lists, tasks, settings, images] = await this.#data.naturalizeForeignData(boardData, order);
      await Promise.allSettled([
        boardChannel.save(board),
        listChannel.saveItems(lists),
        taskChannel.saveItems(tasks),
        taskSettingsChannel.saveItems(settings),
        imageChannel.saveItems(images)
      ]);
    } catch (exception) {
      console.error(exception);
      this.#showMessageDialog(errorMessage || "An error occurred importing the board data. Please confirm the import file contains valid board data.");
    }
  }
  async closeBoardSettings() {
    return new Promise((resolve) => {
      this.findElement("board-settings-dialog").close();
      requestAnimationFrame(resolve);
    });
  }
  addList() {
    const canAddList = this.#canAddList();
    if (canAddList == false) {
      this.#showMessageDialog("Unable to add list when a board is not open for editing and no board has been opened for task management.");
    }
    const channel = this.#getChannel(this.#data.lists, DATA_ERROR_MESSAGE.replace("[subject]", "Task List"));
    const [list, settings] = channel.create();
    this.findElement("board-settings").addList(list, settings);
  }
  // async addTask(listId: string)
  // {
  //     const list = this.shadowRoot!.querySelector(`task-list[data-tasklist-id="${listId}"]`);
  //     if(list == null)
  //     {
  //         this.#showMessageDialog('An error occurred creating a new task.', 'danger');
  //         console.error(`An error occurred accessing task-list element. Unable to save new task.`);
  //         return;
  //     }
  //     const newCard = new TaskCardElement();
  //     list.append(newCard);
  //     newCard.findPart('description').focus();
  // }
  async undo() {
    this.findElement("action-history").back();
  }
  async redo() {
    this.findElement("action-history").forward();
  }
  async clearData() {
    const confirmed = await this.#getConfirmation("Are you sure you want to delete all data associated with the app? This CAN NOT be undone.", "danger");
    if (confirmed == false) {
      return;
    }
    await this.#data.clearAllData();
    this.#refreshBoards();
    this.#refreshActionHistory();
    this.#refreshDeletedItems();
  }
  async clearHistory() {
    const confirmed = await this.#getConfirmation("Are you sure you want to delete all app history? This CAN NOT be undone.", "danger");
    if (confirmed == false) {
      return;
    }
    const channel = this.#getChannel(this.#data.historyEntries, DATA_ERROR_MESSAGE.replace("[subject]", "History"), "danger");
    const ids = (await channel.getAll()).map((item) => item.id);
    await channel.deleteItems(ids);
    this.#refreshActionHistory();
  }
  setColorScheme(scheme) {
    const value = scheme == "browser" ? "light dark" : scheme;
    this.style.setProperty("color-scheme", value);
  }
  // management
  async #init() {
    this.#setAppVersion();
    await this.#data.init();
    this.#registerSharedData();
    this.#loadColorScheme();
    await this.#prepareDynamicContent();
    this.#addHandlers();
    this.#refreshRecentBoards();
    const boardsPromise = this.#refreshBoards();
    const { windowPath, windowHash } = parseWindowPath();
    const filteredWindowHash = windowHash.replace("import", "");
    await this.getElement("app-router").navigate(`${windowPath}#${filteredWindowHash}`);
    if (filteredWindowHash != windowHash) {
      const newHistoryState = `${window.origin}/demo/app.html?path=${windowPath}${filteredWindowHash != "" ? `#${filteredWindowHash}` : ""}`;
      window.history.replaceState(null, "", newHistoryState);
    }
    boardsPromise.then(() => {
      let boardIdIndex = windowPath.indexOf("board/");
      if (boardIdIndex > -1) {
        const currentMenuItem = this.findElement("app-menu").querySelector(`[data-route="${windowPath}"]`);
        if (currentMenuItem != null) {
          currentMenuItem.setAttribute("aria-current", "page");
          currentMenuItem.part.add("selected");
        }
      }
    });
    this.#removeExpiredData();
    setInterval(() => {
      this.#removeExpiredData();
    }, MILLISECONDSINDAY);
  }
  async #setAppVersion() {
    const manifestLink = document.head.querySelector('link[rel="manifest"]');
    const manifestRef = manifestLink?.getAttribute("href");
    if (manifestRef == null) {
      console.warn(`A manifest file could not be found linked in the index document's head. The app's version information could not be determined.`);
      return;
    }
    const manifestData = await fetch(manifestRef);
    const manifest = await manifestData.json();
    this.findElement("version-value").textContent = manifest.version;
  }
  async #loadColorScheme() {
    const colorScheme = await this.#getAppSetting("color-scheme" /* ColorScheme */);
    if (colorScheme == null) {
      return;
    }
    this.setColorScheme(colorScheme);
  }
  #registerSharedData() {
    this[SHAREDACCESSKEY] = {
      data: this.#data,
      refreshBoards: this.#refreshBoards.bind(this),
      refreshActionHistory: this.#refreshActionHistory.bind(this),
      refreshDeletedItems: this.#refreshDeletedItems.bind(this),
      saveAppSetting: this.#saveAppSetting.bind(this),
      restoreDeletedItem: this.#restoreDeletedItem.bind(this),
      handleActionEntryReverse: this.#handleActionEntryReverse.bind(this),
      handelActionEntryActivate: this.#handelActionEntryActivate.bind(this),
      prepareHistoryEntries: this.#prepareHistoryEntries.bind(this),
      applyHistoryLength: this.#applyHistoryLength.bind(this),
      renderBoard: this.#renderBoard.bind(this),
      updateBoardSettings: this.#updateBoardSettings.bind(this),
      // updateBoardItemOrder: this.#updateBoardItemOrder.bind(this),
      updateListRecord: this.#updateListRecord.bind(this),
      duplicateList: this.#duplicateList.bind(this),
      // updateBoardRecordsAfterMove: this.#updateBoardRecordsAfterMove.bind(this),
      updateRecentBoardEntry: this.#updateRecentBoardEntry.bind(this),
      removeBoardFromRecentBoards: this.#removeBoardFromRecentBoards.bind(this),
      registerTaskCard: this.#registerTaskCard.bind(this),
      updateTaskRecord: this.#updateTaskRecord.bind(this),
      updateTaskRecordsAfterMove: this.#updateTaskRecordsAfterMove.bind(this),
      deleteTaskRecord: this.#deleteTaskRecord.bind(this),
      openImportManager: this.#openImportManager.bind(this),
      getConfirmation: this.#getConfirmation.bind(this),
      getIdFromRoute: this.#getIdFromRoute.bind(this)
    };
  }
  async #prepareDynamicContent() {
    const createOption = (value) => {
      const option = document.createElement("option");
      const stringValue = value.toString();
      option.value = stringValue;
      option.textContent = stringValue;
      return option;
    };
  }
  #addHandlers() {
    const menu = this.getElement("app-menu");
    menu.onBoardMove = this.#updateBoardRecordsAfterMove.bind(this);
    menu.onEdit = this.#board_edit_onClick.bind(this);
    menu.onNew = this.#newBoard_onClick.bind(this);
    const configPanel = this.getElement("config-panel");
    configPanel.addEventListener("error", (event) => {
      const { message, type, consoleMessage } = event.detail;
      MessageCardElement.notify(
        message,
        this.getElement("notifications"),
        { type: type ?? MessageCardType.Error }
      );
      console.error(new Error(consoleMessage));
    });
    configPanel.addEventListener("scheme", (event) => {
      const { scheme } = event.detail;
      this.setColorScheme(scheme);
      this.#saveAppSetting("color-scheme" /* ColorScheme */, scheme);
    });
    configPanel.addEventListener("import", (event) => {
      const { boardData } = event.detail;
      this.#openImportManager(boardData);
    });
    configPanel.addEventListener("daystopersist", (event) => {
      const { daysToPersist } = event.detail;
      this.#saveAppSetting("daysToPersistData" /* DaysToPersistData */, daysToPersist);
    });
    configPanel.addEventListener("cleardata", (event) => {
      this.clearData();
    });
    configPanel.addEventListener("restoreitem", (event) => {
      const { targetType, recordId, timestamp } = event.detail;
      this.#restoreDeletedItem(targetType, recordId, timestamp);
    });
    configPanel.addEventListener("cleardeleted", async (event) => {
      const { items } = event.detail;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        await this.deleteItem(item, false);
      }
      this.#refreshDeletedItems();
      this.#refreshActionHistory();
    });
    configPanel.addEventListener("restoreitem", (event) => {
      const { item } = event.detail;
      return this.deleteImage(item);
    });
    configPanel.addEventListener("clearimages", async (event) => {
      const { items } = event.detail;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        await this.deleteImage(item, false);
      }
      this.#refreshActionHistory();
      this.#refreshDeletedItems();
    });
    addRouteHandlers.call(this);
  }
  async #importDialog_import_onClick(event) {
    const boardData = this.findElement("import-manager").getRecord();
    await this.importBoard(boardData);
    this[SHAREDACCESSKEY].refreshBoards();
  }
  // settings
  #getAppSetting(key) {
    if (this.#data.isInitialized == false) {
      this.#showMessageDialog(SETTINGS_ERROR_MESSAGE, "danger");
      throw new Error(`Data Access Error`);
    }
    return this.#data.getValue(key);
  }
  async #saveAppSetting(key, value) {
    if (this.#data.isInitialized == false) {
      this.#showMessageDialog(SETTINGS_ERROR_MESSAGE, "danger");
      throw new Error(`Data Access Error`);
    }
    await this.#data.setValue(key, value);
  }
  // boards
  async #refreshBoards() {
    const channel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const boardRecords = (await channel.getAll()).filter((item) => item.deletedTimestamp == null);
    const collectionItems = [];
    for (let i = 0; i < boardRecords.length; i++) {
      const boardRecord = boardRecords[i];
    }
    const menu = this.findElement("app-menu");
    menu.updateBoards(boardRecords);
    const boardBrowser = this.findElement("board-browser");
    boardBrowser.updateBoards(boardRecords);
  }
  // #createBoardMenuItem(boardRecord: TaskBoardRecord)
  // {
  //     const element = document.createElement('a');
  //     element.innerHTML = `<span part="menu-item-handle" class="menu-item-handle"></span><span part="board-item-name" class="board-item-name">${boardRecord.name}<span>`;
  //     // element.setAttribute('part', 'board-menu-item');
  //     element.classList.add('board-menu-item');
  //     element.dataset.route = `board/${boardRecord.id}`;
  //     const handle = element.querySelector('[part="menu-item-handle"]')!;
  //     handle.addEventListener('mousedown', (_event) =>
  //     {
  //         element.draggable = true;
  //     });
  //     handle.addEventListener('mouseup', (_event) =>
  //     {
  //         element.removeAttribute('draggable');
  //     });
  //     element.addEventListener('dragstart', (_event: DragEvent) => 
  //     {
  //         this.#draggingBoard = element;
  //         element.classList.add('dragging');
  //         this.classList.add('drop-target');
  //     });
  //     element.addEventListener('dragend', (_event: DragEvent) => 
  //     {
  //         element.classList.remove('dragging');
  //         this.#draggingBoard = null;
  //         this.classList.remove('drop-target');
  //     });
  //     return element;
  // }
  // #createBoardCollectionItem(boardRecord: TaskBoardRecord)
  // {
  //     const element = new CaptionedThumbnailElement();
  //     element.innerHTML = `<svg part="board-browser-icon" slot="icon">
  //         <use href="#icon-definition_task-board"></use>
  //     </svg>
  //     ${boardRecord.name}`;
  //     element.setAttribute('data-board-id', boardRecord.id);
  //     element.toggleAttribute('select', true);
  //     return element;
  // }
  async #updateBoardRecordsAfterMove() {
    const toSave = await this.#getOrderedBoards();
    const channel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    await channel.saveItems(toSave);
  }
  #board_edit_onClick(boardRoute) {
    if (boardRoute == null) {
      MessageCardElement.notify(
        `An error occurred attempting to open the board for editing.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      throw new Error("Unable to collected path from board item's path attribute.");
    }
    this.findElement("app-router").navigate(`${boardRoute}#board-settings`);
  }
  async #newBoard_onClick() {
    await this.addBoard();
    this.#refreshBoards();
  }
  // async #updateBoardItemOrder(draggingCursorY: number)
  // {
  //     if(this.#draggingBoard == null)
  //     {
  //         return;
  //     }
  //     const boards = this.findElement('boards');
  //     const nextElement = this.#getNextBoardItem(draggingCursorY).boardElement;
  //     // prevent unecessary re-renders; this can kill perf, if you don't guard here;
  //     // re-rendering by appending or inserting on every mouse-move is heavy;
  //     if(this.#draggingBoard.parentElement == boards && nextElement == this.#draggingBoard.nextElementSibling){ return; }
  //     if(nextElement == null)
  //     {
  //         boards.append(this.#draggingBoard);
  //     }
  //     else
  //     {
  //         boards.insertBefore(this.#draggingBoard, nextElement);
  //     }
  // }
  async #refreshRecentBoards() {
    const boards = await this.#getRecentBoards();
    const welcomePanel = this.shadowRoot.querySelector("welcome-panel");
    welcomePanel.updateBoards(boards);
  }
  // #getNextBoardItem(mouseY: number)
  // {
  //     const lists = [...this.findElement('boards').querySelectorAll('a:not(.dragging)')] as HTMLElement[];
  //     return lists.reduce((closest: { offset: number, boardElement?:HTMLElement }, item: HTMLElement) =>
  //     {
  //         const boundingRect = item.getBoundingClientRect();
  //         const offset = mouseY - boundingRect.top - (boundingRect.height / 2);
  //         if(offset < 0 && offset > closest.offset)
  //         {
  //             return { offset, boardElement: item };
  //         }
  //         return closest;
  //     }, { offset: Number.NEGATIVE_INFINITY });
  // }
  async #getOrderedBoards() {
    const channel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const orderedIds = [];
    const boardItems = [...this.findElement("app-menu").querySelectorAll("a.board")];
    for (let i = 0; i < boardItems.length; i++) {
      const boardItem = boardItems[i];
      const boardId = boardItem.dataset.route.split("/")[1];
      if (boardId == null) {
        throw new Error("Unset board id");
      }
      orderedIds.push(boardId);
    }
    const boards = await channel.getItems(orderedIds);
    const orderedBoards = [];
    for (let i = 0; i < orderedIds.length; i++) {
      const board = boards[boards.findIndex((value) => value.id == orderedIds[i])];
      if (board == null) {
        throw new Error("Unknown board");
      }
      board.order = i;
      orderedBoards.push(board);
    }
    return orderedBoards;
  }
  async #renderBoard(id) {
    const channel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const settingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, "danger");
    const board = await channel.get(id);
    if (board == null) {
      this.findElement("app-router").navigate("/");
      MessageCardElement.notify(
        `No board found with the target id (${id}). Navigated back to Welcome page.`,
        this.getElement("notifications"),
        { type: MessageCardType.Warn }
      );
      console.warn(`No board found with the target id (${id}). Navigated back to Welcome page.`);
      return;
    }
    const taskBoard = this.findElement("task-board");
    taskBoard.innerHTML = "";
    taskBoard.setAttribute("data-board-id", board.id);
    this.#renderBoardBackground(board);
    if (board.useCustomFontColor == true) {
      taskBoard.style.setProperty("--board-font-color", board.fontColor);
    } else {
      taskBoard.style.removeProperty("--board-font-color");
    }
    const settings = await settingsChannel.get(board.taskSettingsId);
    if (settings != null) {
      this.#applyTaskSettings(taskBoard, settings);
    }
    const tasks = await channel.getTasks(id);
    await this.#loadLists(taskBoard, tasks);
    await this.#addBoardToRecentBoards(id, board.name);
    this.#refreshRecentBoards();
  }
  async #renderBoardBackground(board) {
    const channel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, "danger");
    const taskBoard = this.findElement("task-board");
    if (board.backgroundImageId != null && board.backgroundImageId.trim() != "") {
      let backgroundImageUrl = this.#customImageUrls.get(board.backgroundImageId);
      if (backgroundImageUrl == null) {
        const backgroundImage = await channel.get(board.backgroundImageId);
        if (backgroundImage == null) {
          MessageCardElement.notify(
            `No image found with the target id (${board.backgroundImageId}).`,
            this.getElement("notifications"),
            { type: MessageCardType.Warn }
          );
          throw new Error(`Unable to find background image from id: ${board.backgroundImageId}`);
        }
        if (backgroundImage.image == null) {
          throw new Error(`Cannot load custom image with null image property.`);
        }
        this.#customImageUrls.set(board.backgroundImageId, URL.createObjectURL(backgroundImage.image));
        backgroundImageUrl = this.#customImageUrls.get(board.backgroundImageId);
      }
      taskBoard.style.setProperty("--board-background-source", `url(${backgroundImageUrl})`);
    } else {
      taskBoard.style.removeProperty("--board-background-source");
    }
    if (board.backgroundDisplay == "center") {
      taskBoard.style.removeProperty("--background-image-display");
      taskBoard.style.setProperty("--background-image-repeat", "no-repeat");
      taskBoard.style.setProperty("--background-image-position", `calc(50% + ${board.backgroundOffsetX}px) calc(50% + ${board.backgroundOffsetY}px)`);
    } else if (board.backgroundDisplay == "stretch") {
      taskBoard.style.setProperty("--background-image-repeat", "no-repeat");
      taskBoard.style.setProperty("--background-image-display", "cover");
      taskBoard.style.setProperty("--background-image-position", "0px 0px");
    } else if (board.backgroundDisplay == "tile") {
      taskBoard.style.removeProperty("--background-image-display");
      taskBoard.style.removeProperty("--background-image-repeat");
      taskBoard.style.removeProperty("--background-image-position");
    }
    taskBoard.style.setProperty("--background-image-offset", `${board.backgroundOffsetX}px ${board.backgroundOffsetY}px`);
    if (board.useCustomBackgroundColor == true) {
      taskBoard.style.setProperty("--board-background-color", board.backgroundColor);
    } else {
      taskBoard.style.removeProperty("--board-background-color");
    }
  }
  async #updateBoardSettings() {
    const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const listChannel = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, "danger");
    const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, "danger");
    const imageChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, "danger");
    const boards = this.findElement("boards");
    const boardSettings = this.findElement("board-settings");
    const [board, taskLists, taskSettings, removedListIds] = boardSettings.getRecords();
    const [existingBoard, existingTaskLists, existingTaskSettings] = await Promise.all([
      boardChannel.get(board.id),
      (await boardChannel.getTaskLists(board.id)).filter((item) => item.deletedTimestamp == void 0),
      taskSettingsChannel.getItems(taskSettings.map((item) => item.id))
    ]);
    if (existingBoard == null) {
      MessageCardElement.notify(
        `An error occurred saving a task board.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      console.error(`An error occurred finding the existing board record.`);
      return;
    }
    const boardItem = boards.querySelector(`a[data-route*="${board.id}"]`);
    if (boardItem == null) {
      MessageCardElement.notify(
        `An error occurred saving a task board.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      console.error(`An error occurred finding the board's menu item.`);
      return;
    }
    board.order = [...this.shadowRoot.querySelectorAll("a")].indexOf(boardItem);
    board.backgroundImageId = existingBoard.backgroundImageId;
    let existingImageActionProperties = { id: board.backgroundImageId, updates: /* @__PURE__ */ new Map() };
    const imageUpdates = [];
    const imageValue = boardSettings.findElement("background-image").value;
    let backgroundImageRecord = null;
    if (imageValue != null) {
      if (board.backgroundImageId != "") {
        const existingImage = await imageChannel.get(board.backgroundImageId);
        if (existingImage != null) {
          await imageChannel.delete(existingImage.id);
          const deletedImage = await imageChannel.get(board.backgroundImageId);
          existingImageActionProperties.updates.set("deletedTimestamp", { from: void 0, to: deletedImage?.deletedTimestamp });
          imageUpdates.push(existingImageActionProperties);
        }
      }
      backgroundImageRecord = imageChannel.createFromImage(imageValue);
      backgroundImageRecord.boardId = board.id;
      backgroundImageRecord = await imageChannel.save(backgroundImageRecord);
      const newImageActionUpdates = { id: backgroundImageRecord.id, updates: /* @__PURE__ */ new Map([["boardId", { from: "", to: backgroundImageRecord.boardId }]]) };
      imageUpdates.push(newImageActionUpdates);
      board.backgroundImageId = backgroundImageRecord.id;
    } else {
      if (board.backgroundImageId != "") {
        await imageChannel.delete(board.backgroundImageId);
        const deletedImage = await imageChannel.get(board.backgroundImageId);
        existingImageActionProperties.updates.set("deletedTimestamp", { from: void 0, to: deletedImage?.deletedTimestamp });
        imageUpdates.push(existingImageActionProperties);
        board.backgroundImageId = "";
      }
    }
    await Promise.allSettled([
      boardChannel.save(board),
      listChannel.saveItems(taskLists),
      taskSettingsChannel.saveItems(taskSettings),
      this.#data.lists.deleteItems(removedListIds)
    ]);
    MessageCardElement.notify(
      `The board settings have been saved successfully!`,
      this.getElement("notifications"),
      { type: MessageCardType.Success, heading: "Success!" }
    );
    const [
      boardActionProperties,
      listActionProperties
    ] = this.#data.boardUpdate_getActionProperties(
      { existing: existingBoard, updated: board },
      { existing: existingTaskLists, updated: taskLists },
      { existing: existingTaskSettings, updated: taskSettings }
    );
    if (boardActionProperties != null && imageUpdates.length > 0) {
      if (boardActionProperties.backgroundImages != null) {
        boardActionProperties.backgroundImages = boardActionProperties.backgroundImages.concat(imageUpdates);
      } else if (boardActionProperties.backgroundImages == null) {
        boardActionProperties.backgroundImages = imageUpdates;
      }
      await this.#addActionHistoryEntry(HistoryEntryType.Update, "board" /* Board */, boardActionProperties);
    }
    for (let i = 0; i < listActionProperties.length; i++) {
      const actionProperties = listActionProperties[i];
      await this.#addActionHistoryEntry(HistoryEntryType.Update, "list" /* List */, actionProperties);
    }
    const existingListIds = new Set(existingTaskLists.filter((item) => item != void 0).map((item) => item.id));
    const currentListIds = new Set(taskLists.filter((item) => item != void 0).map((item) => item.id));
    const addedLists = taskLists.filter((item) => item != void 0 && !existingListIds.has(item.id));
    for (let i = 0; i < addedLists.length; i++) {
      const addedList = addedLists[i];
      await this.#addActionHistoryEntry(HistoryEntryType.Create, "list" /* List */, { id: addedList.id });
    }
    const removedLists = existingTaskLists.filter((item) => item != void 0 && !currentListIds.has(item.id));
    for (let i = 0; i < removedLists.length; i++) {
      const removedList = removedLists[i];
      await this.#addActionHistoryEntry(HistoryEntryType.Delete, "list" /* List */, { id: removedList.id });
    }
    this.#updateRecentBoardEntry(board.id, board.name);
  }
  async #prepareExportData(id) {
    const exportBackgroundImage = this.findElement("board-settings").findElement("export-background-image").checked;
    const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, "danger");
    const imageChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, "danger");
    const board = await boardChannel.get(id);
    if (board == null) {
      throw new Error(`Error loading board from id: ${id}`);
    }
    const tasks = await boardChannel.getTasks(id);
    const lists = await boardChannel.getTaskLists(id);
    const listExports = [];
    const taskSettingsIds = [board.taskSettingsId];
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      if (list.deletedTimestamp != void 0) {
        continue;
      }
      const listTasks = tasks.filter((item) => item.listId == list.id && item.deletedTimestamp == void 0);
      const listExport = new ListExport(list, void 0, listTasks);
      taskSettingsIds.push(list.taskSettingsId);
      listExports.push(listExport);
    }
    const backgroundImage = exportBackgroundImage == true && board.backgroundImageId != null && board.backgroundImageId != "" ? await imageChannel.get(board.backgroundImageId) ?? void 0 : void 0;
    const boardExportData = new BoardExport(board, void 0, backgroundImage);
    if (boardExportData.backgroundImage != null) {
      await boardExportData.backgroundImage.loadImage();
    } else if (exportBackgroundImage == false) {
      delete boardExportData.backgroundImageId;
    }
    const taskSettings = await taskSettingsChannel.getItems(taskSettingsIds);
    for (let i = 0; i < taskSettings.length; i++) {
      const item = taskSettings[i];
      if (board.taskSettingsId == item.id) {
        boardExportData.taskSettings = item;
        continue;
      }
      const target = listExports.find((listItem) => listItem.taskSettingsId == item.id);
      if (target == null) {
        throw new Error(`Error assigning task settings to target list`);
      }
      target.taskSettings = item;
    }
    boardExportData.lists = listExports;
    return boardExportData;
  }
  #downloadExportData(boardExportData) {
    const currentDate = /* @__PURE__ */ new Date();
    const currentDateString = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;
    const filename = `taskboard_export_${currentDateString}.json`;
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:application/json;charset=utf-8, " + encodeURIComponent(JSON.stringify(boardExportData, null, 2))
    );
    element.setAttribute("download", filename);
    this.appendChild(element);
    element.click();
    this.removeChild(element);
  }
  // lists
  async #loadLists(board, tasks) {
    const boardId = board.dataset.boardId;
    if (boardId == null) {
      MessageCardElement.notify(
        `An error occurred loading the board. Navigated back to Welcome page.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      console.error(new Error("Unable to add task when parent boards's data-board-id attribute is undefined."));
      return;
    }
    const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const settingsChannel = this.#getChannel(this.#data.taskSettings, LIST_ERROR_MESSAGE, "danger");
    const lists = await boardChannel.getTaskLists(boardId);
    const taskSettings = await settingsChannel.getItems(lists.map((item) => item.taskSettingsId));
    const listElements = [];
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      if (list.deletedTimestamp != void 0) {
        continue;
      }
      const settings = taskSettings.find((item) => item.id == list.taskSettingsId);
      if (settings == null) {
        MessageCardElement.notify(
          `An error occurred loading a list's settings. Some settings may not be displayed properly.`,
          this.getElement("notifications"),
          { type: MessageCardType.Warn }
        );
        console.warn(new Error(`Unable to find settings from list's taskSettingsId.`));
      }
      const element = new TaskListElement();
      element.setAttribute("name", list.name);
      element.setAttribute("color", list.color);
      element.setAttribute("data-tasklist-id", list.id);
      element.toggleAttribute("drag-drop", true);
      element.setAttribute("part", "task-list");
      element.style.setProperty("--list-color", list.color);
      element.setAttribute("exportparts", "header:list-header, color-container:list-color-container, color:list-color, name:list-name, collapse-button:list-collapse, tasks:list-tasks, add-button:list-add-button");
      element.dragAndDropQueryParent = board;
      if (list.useCustomWidth == true) {
        element.style.setProperty("--list-width", `${list.width}px`);
        element.style.setProperty("flex-grow", "0");
      } else {
        element.style.removeProperty("--list-width");
        element.style.removeProperty("flex-grow");
      }
      const listTitle = list.description == null || list.description.trim() == "" ? list.name : list.description;
      element.setAttribute("title", listTitle);
      if (list.useCustomBackgroundColor == true) {
        element.style.setProperty("--list-background-color", list.backgroundColor);
      } else {
        element.style.removeProperty("--list-background-color");
      }
      if (list.useCustomFontColor == true) {
        element.style.setProperty("--list-font-color", list.fontColor);
      } else {
        element.style.removeProperty("--list-font-color");
      }
      if (list.colorDisplay == "border-color" /* BorderColor */) {
        element.classList.add("hide-color");
        element.style.setProperty("--list-border-color", list.color);
      } else if (list.colorDisplay == "font-color" /* FontColor */) {
        element.classList.add("hide-color");
        element.style.setProperty("--list-font-color", list.color);
      } else {
        element.classList.remove("hide-color");
        element.style.removeProperty("--list-border-color");
        if (list.useCustomFontColor == false) {
          element.style.removeProperty("--list-font-color");
        }
      }
      this.#applyTaskSettings(element, settings);
      this.#loadListTasks(element, tasks);
      listElements.push(element);
    }
    board.append(...listElements);
  }
  #applyTaskSettings(target, settings) {
    if (settings == null) {
      return;
    }
    if (settings.useCustomBackgroundColor == true) {
      target.style.setProperty("--task-background-color", settings.customBackgroundColor);
    } else {
      target.style.removeProperty("--task-background-color");
    }
    if (settings.useCustomFontColor == true) {
      target.style.setProperty("--task-font-color", settings.customFontColor);
    } else {
      target.style.removeProperty("--task-font-color");
    }
    if (settings.useCustomFontSize == true) {
      target.style.setProperty("--task-font-size", `${settings.customFontSize}px`);
    } else {
      target.style.removeProperty("--task-font-size");
    }
    if (settings.useCustomBorderColor == true) {
      target.style.setProperty("--task-border-color", settings.customBorderColor);
    } else {
      target.style.removeProperty("--task-border-color");
    }
    if (settings.useCustomBorderRadius == true) {
      target.style.setProperty("--task-border-radius", `${settings.borderRadiusValue}${settings.borderRadiusUnit}`);
    } else {
      target.style.removeProperty("--task-border-radius");
    }
    if (settings.colorDisplay == "hidden" /* Hidden */) {
      target.classList.remove("task-color-border");
      target.classList.remove("color-border-top");
      target.classList.remove("color-border-right");
      target.classList.remove("color-border-bottom");
      target.classList.remove("color-border-left");
      target.classList.remove("task-color-background");
      target.classList.add("hide-task-color");
    } else if (settings.colorDisplay == "border" /* Borders */) {
      target.classList.remove("hide-task-color");
      target.classList.remove("task-color-background");
      target.classList.remove("color-border-top");
      target.classList.remove("color-border-right");
      target.classList.remove("color-border-bottom");
      target.classList.remove("color-border-left");
      target.classList.add("task-color-border");
    } else if (settings.colorDisplay == "top-border" /* TopBorder */) {
      target.classList.remove("hide-task-color");
      target.classList.remove("task-color-background");
      target.classList.remove("color-border-right");
      target.classList.remove("color-border-bottom");
      target.classList.remove("color-border-left");
      target.classList.add("task-color-border", "color-border-top");
    } else if (settings.colorDisplay == "right-border" /* RightBorder */) {
      target.classList.remove("hide-task-color");
      target.classList.remove("task-color-background");
      target.classList.remove("color-border-top");
      target.classList.remove("color-border-bottom");
      target.classList.remove("color-border-left");
      target.classList.add("task-color-border", "color-border-right");
    } else if (settings.colorDisplay == "bottom-border" /* BottomBorder */) {
      target.classList.remove("hide-task-color");
      target.classList.remove("task-color-background");
      target.classList.remove("color-border-top");
      target.classList.remove("color-border-right");
      target.classList.remove("color-border-left");
      target.classList.add("task-color-border", "color-border-bottom");
    } else if (settings.colorDisplay == "left-border" /* LeftBorder */) {
      target.classList.remove("hide-task-color");
      target.classList.remove("task-color-background");
      target.classList.remove("color-border-top");
      target.classList.remove("color-border-right");
      target.classList.remove("color-border-bottom");
      target.classList.add("task-color-border", "color-border-left");
    } else if (settings.colorDisplay == "background" /* Background */) {
      target.classList.remove("hide-task-color");
      target.classList.remove("task-color-border");
      target.classList.remove("color-border-top");
      target.classList.remove("color-border-right");
      target.classList.remove("color-border-bottom");
      target.classList.remove("color-border-left");
      target.classList.add("task-color-background");
    } else {
      target.classList.remove("hide-task-color");
      target.classList.remove("task-color-border");
      target.classList.remove("color-border-top");
      target.classList.remove("color-border-right");
      target.classList.remove("color-border-bottom");
      target.classList.remove("color-border-left");
      target.classList.remove("task-color-background");
    }
    if (settings.centerCheckbox == true) {
      target.classList.add("center-checkbox");
    } else {
      target.classList.remove("center-checkbox");
    }
    if (settings.centerRemoveButton == true) {
      target.classList.add("center-remove");
    } else {
      target.classList.remove("center-remove");
    }
    if (settings.useCustomWidth == true) {
      target.style.setProperty("--task-width", `${settings.customWidth}px`);
    } else {
      target.style.removeProperty("--task-width");
    }
    if (settings.useCustomBorderWidth_top == true) {
      target.style.setProperty("--task-border-top", `${settings.useCustomBorderWidth_top}px`);
    } else {
      target.style.removeProperty("--task-border-top");
    }
    if (settings.useCustomBorderWidth_right == true) {
      target.style.setProperty("--task-border-right", `${settings.borderWidth_right}px`);
    } else {
      target.style.removeProperty("--task-border-right");
    }
    if (settings.useCustomBorderWidth_bottom == true) {
      target.style.setProperty("--task-border-bottom", `${settings.borderWidth_bottom}px`);
    } else {
      target.style.removeProperty("--task-border-bottom");
    }
    if (settings.useCustomBorderWidth_left == true) {
      target.style.setProperty("--task-border-left", `${settings.borderWidth_left}px`);
    } else {
      target.style.removeProperty("--task-border-left");
    }
  }
  #loadListTasks(taskList, tasks) {
    const listId = taskList.dataset.tasklistId;
    for (let i = 0; i < tasks.length; i++) {
      const taskElements = [];
      if (tasks[i].listId == listId) {
        const task = tasks[i];
        if (task.deletedTimestamp != void 0) {
          continue;
        }
        const taskElement = new TaskCardElement();
        this.#initTaskCard(taskElement, task);
        taskElements.push(taskElement);
      }
      taskList.append(...taskElements);
    }
  }
  async #updateListRecord(taskListComponent) {
    const lists = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, "danger");
    const id = taskListComponent.dataset.tasklistId;
    if (id == null) {
      MessageCardElement.notify(
        `An error occurred saving a task list.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      throw new Error("Unable to update tasklist with unset 'data-tasklist-id' attribute");
    }
    const taskList = await lists.get(id);
    if (taskList == null) {
      MessageCardElement.notify(
        `An error occurred saving a task list.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      throw new Error(`Unable to update tasklist. No tasklist found with target id (${id}).`);
    }
    const listPreviousName = taskList.name;
    const inputNameValue = taskListComponent.findPart("name").value;
    const listPreviousColor = taskList.color;
    const inputColorValue = taskListComponent.findPart("color").value;
    taskList.name = inputNameValue;
    taskList.color = inputColorValue;
    await lists.save(taskList);
    const updates = /* @__PURE__ */ new Map();
    if (listPreviousName != taskList.name) {
      updates.set("name", { from: listPreviousName, to: taskList.name });
    }
    if (listPreviousColor != taskList.color) {
      updates.set("color", { from: listPreviousColor, to: taskList.color });
    }
    const properties = {
      id: taskList.id,
      updates
    };
    await this.#addActionHistoryEntry(HistoryEntryType.Update, "list" /* List */, properties);
  }
  #duplicateList(target, list, settings) {
    const taskLists = this.#getChannel(this.#data.lists, DATA_ERROR_MESSAGE.replace("[subject]", "Task List"));
    const [duplicateList, duplicateSettings] = taskLists.create(list, settings);
    this.findElement("board-settings").insertList(target, duplicateList, duplicateSettings);
  }
  #canAddList() {
    const route = this.getElement("app-router").getAttribute("path");
    if (route == null) {
      return false;
    }
    const boardOrSettingsAreOpen = route.includes("#board-settings") || route.includes("board");
    if (!boardOrSettingsAreOpen) {
      return false;
    }
    return true;
  }
  // tasks
  async #getOrderedTasks(tasklist) {
    const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, "danger");
    const orderedIds = [];
    const taskItems = [...tasklist.querySelectorAll("task-card")];
    for (let i = 0; i < taskItems.length; i++) {
      const item = taskItems[i];
      const id = item.getAttribute("data-task-id");
      if (id == null) {
        throw new Error("Unset task id");
      }
      orderedIds.push(id);
    }
    const tasks = await channel.getItems(orderedIds);
    const orderedTasks = [];
    for (let i = 0; i < orderedIds.length; i++) {
      const board = tasks[tasks.findIndex((value) => value.id == orderedIds[i])];
      if (board == null) {
        throw new Error("Unknown task");
      }
      board.order = i;
      orderedTasks.push(board);
    }
    return orderedTasks;
  }
  async #getTaskFromComponent(taskComponent) {
    const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, "danger");
    const id = taskComponent.dataset.taskId;
    if (id == null) {
      MessageCardElement.notify(
        `An error occurred identifying a task.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      throw new Error("Unable to update task with unset 'data-tasklist-id' attribute");
    }
    const task = await channel.get(id);
    if (task == null) {
      MessageCardElement.notify(
        `An error occurred identifying a task.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      throw new Error(`Unable to update task. No task found with target id (${id}).`);
    }
    return task;
  }
  async #registerTaskCard(card, listId, order) {
    const errorMessage = "An error occured creating a new Task. Refreshing the application may help. If the problem persists, more detail can be found in your browsers development tools.";
    if (listId == null) {
      this.#showMessageDialog(errorMessage);
      throw new Error("Unable to add task when parent list's data-tasklist-id attribute is undefined.");
    }
    const boardId = this.findElement("task-board").dataset.boardId;
    if (boardId == null) {
      this.#showMessageDialog(errorMessage);
      throw new Error("Unable to add task when parent boards's data-board-id attribute is undefined.");
    }
    const task = await this.#addTaskRecord(boardId, listId, order);
    if (task == void 0) {
      return;
    }
    this.#initTaskCard(card, task);
  }
  async #addTaskRecord(boardId, listId, order) {
    const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, "danger");
    const task = channel.create(boardId, listId);
    task.order = order;
    await channel.save(task);
    this.#addActionHistoryEntry(HistoryEntryType.Create, "task" /* Task */, { id: task.id });
    return task;
  }
  async #updateTaskRecord(taskComponent, parentList) {
    const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, "danger");
    const listId = parentList.dataset.tasklistId;
    if (listId == null) {
      MessageCardElement.notify(
        `An error occurred saving a task.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      throw new Error("Unable to update task when parent list's data-tasklist-id attribute is not available.");
    }
    const task = await this.#getTaskFromComponent(taskComponent);
    const previousValues = structuredClone(task);
    task.listId = listId;
    task.color = taskComponent.findPart("color").value;
    task.isFinished = taskComponent.findPart("is-finished").checked;
    task.description = taskComponent.value ?? "";
    const tasks = [...parentList.querySelectorAll("task-card")];
    task.order = tasks.indexOf(taskComponent);
    if (task.order == -1) {
      console.warn("Unable to find index of task in parent list");
      task.order = tasks.length;
    }
    await channel.save(task);
    const diff = Object.fromEntries(Object.entries(previousValues).filter(([key, value]) => value !== task[key]));
    const updates = /* @__PURE__ */ new Map();
    for (const [key, value] of Object.entries(diff)) {
      updates.set(key, { from: value, to: task[key] });
    }
    const properties = {
      id: task.id,
      updates
    };
    await this.#addActionHistoryEntry(HistoryEntryType.Update, "task" /* Task */, properties);
  }
  async #deleteTaskRecord(taskComponent) {
    const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, "danger");
    const id = taskComponent.dataset.taskId;
    if (id == null) {
      MessageCardElement.notify(
        `An error occurred deleting a task.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      throw new Error("Unable to delete task when task's data-task-id attribute is not available.");
    }
    await channel.delete(id);
    const entry = await this.#addActionHistoryEntry(HistoryEntryType.Delete, "task" /* Task */, { id });
    if (entry != null) {
      this.#addUndoNotification("A task was just deleted", entry.getAttribute("data-entry-id"));
    }
  }
  async #updateTaskRecordsAfterMove(target, parent) {
    await this.#updateTaskRecord(target, parent);
    if (this.#data.tasks == null) {
      MessageCardElement.notify(
        `An error occurred moving a task.`,
        this.getElement("notifications"),
        { type: MessageCardType.Error }
      );
      console.warn(`An error occurred accessing task data. Unable to save task order.`);
      return;
    }
    const toSave = await this.#getOrderedTasks(parent);
    await this.#data.tasks.saveItems(toSave);
  }
  #initTaskCard(card, task) {
    card.dataset.taskId = task.id;
    card.setAttribute("color", task.color);
    card.setAttribute("is-finished", task.isFinished.toString());
    card.setAttribute("description", task.description);
    card.setAttribute("draggable", "true");
    card.setAttribute("part", "task-card");
    card.setAttribute("exportparts", "description: task-description, is-finished:task-checkbox, color-container:task-color-container, color:task-color, remove-button:task-remove-button, handle:task-handle, finished-indicator:task-finished-indicator");
    card.style.setProperty("--task-color", task.color);
    card.findPart("description").addEventListener("keyup", taskDescription_onKeyUp.bind(this));
  }
  // history    
  async #refreshActionHistory() {
    const channel = this.#getChannel(this.#data.historyEntries, HISTORY_ERROR_MESSAGE, "danger");
    [...this.getElement("action-history").querySelectorAll("[data-entry]")].map((item) => item.remove());
    const records = await channel.getAll("timestamp");
    if (records.length == 0) {
      return;
    }
    let activeEntryIndex = await this.#getAppSetting("activeEntryIndex" /* ActiveEntryIndex */);
    if (activeEntryIndex != null && activeEntryIndex > records.length) {
      activeEntryIndex = records.length - 1;
    }
    let entries = [];
    let activeEntry = null;
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      const entry = this.#createActionHistoryEntryElement(record);
      entries.push(entry);
      if (i == activeEntryIndex) {
        entry.toggleAttribute(ATTRIBUTENAME_ACTIVE, true);
        activeEntry = entry;
        continue;
      }
      if (activeEntry != null) {
        entry.toggleAttribute(ATTRIBUTENAME_REVERSED, true);
      }
    }
    if (activeEntry == null) {
      entries = entries.map((item) => {
        item.toggleAttribute(ATTRIBUTENAME_REVERSED, true);
        return item;
      });
    }
    this.getElement("action-history").append(...entries);
  }
  #createActionHistoryEntryElement(entry) {
    const element = document.createElement("div");
    element.toggleAttribute("data-entry", true);
    element.setAttribute("timestamp", entry.timestamp.toString());
    element.setAttribute("data-entry-id", entry.id);
    element.setAttribute("part", "action-history-entry");
    element.innerHTML = `<span class="action-type">${entry.action.toUpperCase()}</span>
        <span class="data">
            <span class="target-type">${entry.data.targetType[0].toUpperCase()}${entry.data.targetType.substring(1)}</span>
            <span class="target-id">${entry.data.properties.id}</span>
        </span>`;
    return element;
  }
  async #handleActionEntryReverse(targetEntry, previousEntry, targetIndex, previousEntryIndex) {
    const actionType = targetEntry.querySelector(".action-type")?.textContent?.toLowerCase();
    const recordType = targetEntry.querySelector(".target-type")?.textContent?.toLowerCase();
    const recordId = targetEntry.querySelector(".target-id")?.textContent;
    const entryId = targetEntry.getAttribute("data-entry-id");
    if (actionType == null || recordType == null || recordId == null || entryId == null) {
      console.error(new Error("Required property was not found."));
      return;
    }
    const channel = recordType == "board" ? this.#data.boards : recordType == "list" ? this.#data.lists : recordType == "task" ? this.#data.tasks : recordType == "image" ? this.#data.customImages : null;
    if (channel == null) {
      throw new Error(`Unknown record type: ${recordType}`);
    }
    if (actionType == "create") {
      await channel.delete(recordId);
    } else if (actionType == "update") {
      const currentEntry = await this.#data.historyEntries?.get(entryId);
      if (currentEntry == null) {
        throw new Error("Unable to find target entry.");
      }
      const target = await channel.get(recordId);
      if (target == null) {
        throw new Error("Unable to find target record.");
      }
      await this.#reverseUpdate(channel, currentEntry, target);
    } else if (actionType == "delete") {
      await channel.restore(recordId);
    } else {
      console.error(`Unknown action type: ${actionType}`);
    }
    await this.#saveAppSetting("activeEntryIndex" /* ActiveEntryIndex */, targetIndex > -1 ? targetIndex : null);
  }
  async #reverseUpdate(channel, currentEntry, target) {
    if (currentEntry.data.properties.updates != null) {
      let isRestorationUpdate = false;
      for (const [key, value] of currentEntry.data.properties.updates) {
        if (key == "deletedTimestamp") {
          isRestorationUpdate = true;
          continue;
        }
        target[key] = value.from;
      }
      await channel.save(target);
      if (isRestorationUpdate == true) {
        await channel.delete(currentEntry.data.properties.id);
      }
    }
    if (currentEntry.data.properties.taskSettings != null && currentEntry.data.properties.taskSettings.updates != null) {
      const settingsTarget = await this.#data.taskSettings?.get(currentEntry.data.properties.taskSettings.id);
      if (settingsTarget == null) {
        throw new Error("Unable to find target record.");
      }
      for (const [key, value] of currentEntry.data.properties.taskSettings.updates) {
        settingsTarget[key] = value.from;
      }
      await this.#data.taskSettings?.save(settingsTarget);
    }
    if (currentEntry.data.properties.backgroundImages != null) {
      const updatedImages = [];
      const deletedImageIds = [];
      for (let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++) {
        const data = currentEntry.data.properties.backgroundImages[i];
        const imageTarget = await this.#data.customImages?.get(data.id);
        if (imageTarget == null) {
          throw new Error("Unable to find target record.");
        }
        for (const [key, value] of currentEntry.data.properties.backgroundImages[i].updates) {
          if (key == "boardId" && value.from == "") {
            deletedImageIds.push(currentEntry.data.properties.backgroundImages[i].id);
            continue;
          }
          imageTarget[key] = value.from;
        }
        updatedImages.push(imageTarget);
      }
      await this.#data.customImages?.saveItems(updatedImages);
      await this.#data.customImages?.deleteItems(deletedImageIds);
    }
  }
  async #handelActionEntryActivate(targetEntry, previousEntry, targetIndex, previousEntryIndex) {
    const actionType = targetEntry.querySelector(".action-type")?.textContent?.toLowerCase();
    const recordType = targetEntry.querySelector(".target-type")?.textContent?.toLowerCase();
    const recordId = targetEntry.querySelector(".target-id")?.textContent;
    const entryId = targetEntry.getAttribute("data-entry-id");
    if (actionType == null || recordType == null || recordId == null || entryId == null) {
      console.error(new Error("Required property was not found."));
      return;
    }
    const channel = recordType == "board" ? this.#data.boards : recordType == "list" ? this.#data.lists : recordType == "task" ? this.#data.tasks : recordType == "image" ? this.#data.customImages : null;
    if (channel == null) {
      throw new Error(`Unknown record type: ${recordType}`);
    }
    if (actionType == "create") {
      await channel.restore(recordId);
    } else if (actionType == "update") {
      const currentEntry = await this.#data.historyEntries?.get(entryId);
      if (currentEntry == null) {
        throw new Error("Unable to find target entry.");
      }
      const target = await channel.get(recordId);
      if (target == null) {
        throw new Error("Unable to find target record.");
      }
      await this.#activateUpdate(channel, currentEntry, target);
    } else if (actionType == "delete") {
      await channel.delete(recordId);
    } else {
      console.error(`Unknown action type: ${actionType}`);
    }
    await this.#saveAppSetting("activeEntryIndex" /* ActiveEntryIndex */, targetIndex > -1 ? targetIndex : null);
  }
  async #activateUpdate(channel, currentEntry, target) {
    if (currentEntry.data.properties.updates != null) {
      let isRestorationUpdate = false;
      for (const [key, value] of currentEntry.data.properties.updates) {
        if (key == "deletedTimestamp") {
          isRestorationUpdate = true;
          continue;
        }
        target[key] = value.to;
      }
      await channel.save(target);
      if (isRestorationUpdate == true) {
        await channel.restore(currentEntry.data.properties.id);
      }
    }
    if (currentEntry.data.properties.taskSettings != null && currentEntry.data.properties.taskSettings.updates != null) {
      const settingsTarget = await this.#data.taskSettings?.get(currentEntry.data.properties.taskSettings.id);
      if (settingsTarget == null) {
        throw new Error("Unable to find target record.");
      }
      for (const [key, value] of currentEntry.data.properties.taskSettings.updates) {
        settingsTarget[key] = value.to;
      }
      await this.#data.taskSettings?.save(settingsTarget);
    }
    if (currentEntry.data.properties.backgroundImages != null) {
      const updatedImages = [];
      const restoredImageIds = [];
      for (let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++) {
        const data = currentEntry.data.properties.backgroundImages[i];
        const imageTarget = await this.#data.customImages?.get(data.id);
        if (imageTarget == null) {
          throw new Error("Unable to find target record.");
        }
        for (const [key, value] of currentEntry.data.properties.backgroundImages[i].updates) {
          if (key == "boardId" && value.from == "") {
            restoredImageIds.push(currentEntry.data.properties.backgroundImages[i].id);
            continue;
          }
          imageTarget[key] = value.to;
        }
        updatedImages.push(imageTarget);
      }
      await this.#data.customImages?.saveItems(updatedImages);
      await this.#data.customImages?.restoreItems(restoredImageIds);
    }
  }
  async #addActionHistoryEntry(action, type, properties) {
    const historyLength = parseFloat(await this.#getAppSetting("historyLength" /* HistoryLength */) ?? DEFAULT_HISTORY_LENGTH);
    if (historyLength == 0) {
      return;
    }
    const channel = await this.#getChannel(this.#data.historyEntries, HISTORY_ERROR_MESSAGE, "danger");
    const history = this.findElement("action-history");
    const historyEntries = [...history.children];
    const elementsToRemove = historyEntries.filter((item) => item.hasAttribute(ATTRIBUTENAME_REVERSED));
    const removeIds = [];
    if (elementsToRemove.length > 0) {
      for (let i = 0; i < elementsToRemove.length; i++) {
        const entryId = elementsToRemove[i].getAttribute("data-entry-id");
        if (entryId != null) {
          removeIds.push(entryId);
        }
        elementsToRemove[i].remove();
      }
    }
    const data = new HistoryEntryData(type, properties);
    const entry = channel.create(data, action);
    await channel.save(entry);
    const entries = await channel.getAll("timestamp");
    const removeCount = entries.length - historyLength;
    if (removeCount > 0) {
      for (let i = 0; i < removeCount; i++) {
        removeIds.push(entries[i].id);
        history.querySelector(`[data-entry-id="${entries[i].id}"]`)?.remove();
      }
    }
    if (removeIds.length > 0) {
      await channel.deleteIfExists(removeIds);
    }
    const entryElement = this.#createActionHistoryEntryElement(entry);
    history.append(entryElement);
    const activeIndex = [...history.children].indexOf(entryElement);
    await this.#saveAppSetting("activeEntryIndex" /* ActiveEntryIndex */, activeIndex > -1 ? activeIndex : null);
    return entryElement;
  }
  async #prepareHistoryEntries() {
    if (this.#data.historyEntries == null) {
      console.warn(`An error occurred accessing Action History data. Unable to refresh action history.`);
      return;
    }
    const entries = await this.#data.historyEntries.getAll("timestamp");
    let startIndex = parseInt(this.findElement("action-history-length").value);
    if (startIndex > 0) {
      startIndex--;
    }
    const history = this.findElement("action-history");
    for (let i = 0; i < entries.length; i++) {
      const element = history.querySelector(`[data-entry-id="${entries[i].id}"]`);
      if (i < startIndex) {
        element.removeAttribute(ATTRIBUTE_PREPARED_FOR_DELETE);
      } else {
        element.toggleAttribute(ATTRIBUTE_PREPARED_FOR_DELETE, true);
      }
    }
  }
  async #applyHistoryLength() {
    await this.#saveAppSetting("historyLength" /* HistoryLength */, this.findElement("action-history-length").value);
    if (this.#data.historyEntries == null) {
      console.warn(`An error occurred accessing Action History data. Unable to refresh action history.`);
      return;
    }
    const entries = await this.#data.historyEntries.getAll("timestamp");
    let startIndex = parseInt(this.findElement("action-history-length").value);
    if (startIndex > 0) {
      startIndex--;
    }
    const ids = [];
    for (let i = startIndex; i < entries.length; i++) {
      ids.push(entries[i].id);
    }
    await this.#data.historyEntries.deleteItems(ids);
    this.#refreshActionHistory();
  }
  async #getRecentBoards() {
    let boardsString = await this.#getAppSetting("recentBoards" /* RecentBoards */);
    if (boardsString == null) {
      boardsString = "[]";
    }
    const boards = JSON.parse(boardsString);
    boards.sort((a, b) => b.timestamp - a.timestamp);
    return boards;
  }
  async #addBoardToRecentBoards(id, description) {
    const boards = await this.#getRecentBoards();
    const existingEntry = boards.find((item) => item.id == id);
    if (existingEntry != null) {
      return;
    }
    boards.unshift({ id, description, timestamp: Date.now() });
    if (boards.length > 10) {
      boards.pop();
    }
    const boardsString = JSON.stringify(boards);
    this.#saveAppSetting("recentBoards" /* RecentBoards */, boardsString);
  }
  async #updateRecentBoardEntry(id, description) {
    const boards = await this.#getRecentBoards();
    const existingEntry = boards.find((item) => item.id == id);
    if (existingEntry == null) {
      return;
    }
    existingEntry.description = description ?? existingEntry.description;
    existingEntry.timestamp = Date.now();
    const boardsString = JSON.stringify(boards);
    this.#saveAppSetting("recentBoards" /* RecentBoards */, boardsString);
    this.#refreshRecentBoards();
  }
  async #removeBoardFromRecentBoards(id) {
    const boards = await this.#getRecentBoards();
    const existingEntry = boards.find((item) => item.id == id);
    if (existingEntry == null) {
      return;
    }
    boards.splice(boards.indexOf(existingEntry), 1);
    const boardsString = JSON.stringify(boards);
    this.#saveAppSetting("recentBoards" /* RecentBoards */, boardsString);
  }
  // cache    
  async #refreshDeletedItems() {
    const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const listChannel = this.#getChannel(this.#data.lists, BOARD_ERROR_MESSAGE, "danger");
    const taskChannel = this.#getChannel(this.#data.tasks, BOARD_ERROR_MESSAGE, "danger");
    const imageChannel = this.#getChannel(this.#data.customImages, BOARD_ERROR_MESSAGE, "danger");
    const deletedItems = [];
    const boards = await boardChannel.getAll();
    const lists = await listChannel.getAll();
    const tasks = await taskChannel.getAll();
    const images = await imageChannel.getAll();
    const deletedBoards = boards.filter((item) => item.deletedTimestamp != null);
    const deletedLists = lists.filter((item) => item.deletedTimestamp != null);
    const deletedTasks = tasks.filter((item) => item.deletedTimestamp != null);
    const deletedImages = images.filter((item) => item.deletedTimestamp != null);
    for (let i = 0; i < deletedBoards.length; i++) {
      const record = deletedBoards[i];
      const element = this.#createDeletedItem(record, "board", true, record.deletedTimestamp);
      deletedItems.push(element);
    }
    for (let i = 0; i < deletedLists.length; i++) {
      const record = deletedLists[i];
      const canRestore = deletedBoards.find((item) => item.id == record.boardId && item.deletedTimestamp != null) == null;
      const element = this.#createDeletedItem(record, "list", canRestore, record.deletedTimestamp);
      deletedItems.push(element);
    }
    for (let i = 0; i < deletedTasks.length; i++) {
      const record = deletedTasks[i];
      const canRestore = deletedBoards.find((item) => item.id == record.boardId && item.deletedTimestamp != null) == null;
      const element = this.#createDeletedItem(record, "task", canRestore, record.deletedTimestamp);
      deletedItems.push(element);
    }
    const deletedImageElements = [];
    for (let i = 0; i < deletedImages.length; i++) {
      const record = deletedImages[i];
      const element = this.#createDeletedItem(record, "image", true, record.deletedTimestamp);
      deletedImageElements.push(element);
    }
    const deletedImagesElement = this.findElement("deleted-images");
    [...deletedImagesElement.querySelectorAll("div")].map((item) => item.remove());
    deletedImagesElement.append(...deletedImageElements);
    const deletedItemsElement = this.findElement("deleted-items");
    [...deletedItemsElement.querySelectorAll("div")].map((item) => item.remove());
    deletedItemsElement.append(...deletedItems);
  }
  #createDeletedItem(data, recordType, canRestore, timestamp) {
    const item = document.createElement("div");
    item.setAttribute("data-record-type", recordType);
    item.setAttribute("part", "deleted-item");
    item.setAttribute("data-timestamp", timestamp.toString());
    const label = document.createElement("span");
    label.setAttribute("part", "deleted-item-label");
    let record;
    if (recordType == "board") {
      record = data;
      label.textContent = record.name;
    } else if (recordType == "list") {
      record = data;
      label.textContent = record.name;
    } else if (recordType == "task") {
      record = data;
      label.textContent = record.description.trim() == "" ? "[Blank Task]" : record.description;
    } else if (recordType == "image") {
      record = data;
      label.textContent = record.name;
    } else {
      throw new Error("Unknown deleted record type");
    }
    item.setAttribute("data-record-id", record.id);
    item.append(label);
    if (canRestore == false) {
      item.dataset.restore = "false";
    }
    return item;
  }
  async #restoreDeletedItem(targetType, recordId, timestamp) {
    if (targetType == null) {
      console.error("Unable to restore record with unknown type or id");
      return;
    }
    const channel = targetType == "board" ? this.#data.boards : targetType == "list" ? this.#data.lists : targetType == "task" ? this.#data.tasks : null;
    if (channel == null) {
      console.error("Unable to restore record. Error accessing data.");
      return;
    }
    await channel.restore(recordId);
    const updates = /* @__PURE__ */ new Map([["deletedTimestamp", { from: timestamp, to: void 0 }]]);
    const properties = {
      id: recordId,
      updates
    };
    await this.#addActionHistoryEntry(HistoryEntryType.Update, targetType, properties);
    if (targetType == "board" /* Board */) {
      this.openBoard(recordId);
      this.#refreshBoards();
    }
    this.#refreshDeletedItems();
  }
  async #removeExpiredData() {
    const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, "danger");
    const listChannel = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, "danger");
    const taskChannel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, "danger");
    const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, "danger");
    const imageChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, "danger");
    const daysToPersistData = await this.#getAppSetting("daysToPersistData" /* DaysToPersistData */) ?? DEFAULT_PERSIST_DAYS;
    const comparisonTime = Date.now() - parseInt(daysToPersistData) * MILLISECONDSINDAY;
    const boards = await boardChannel.getAll();
    const lists = await listChannel.getAll();
    const tasks = await taskChannel.getAll();
    const taskSettings = await taskSettingsChannel.getAll();
    const customImages = await imageChannel.getAll();
    const boardIds = this.#getExpiredRecordIds(boards, comparisonTime);
    await boardChannel.deleteItems(boardIds);
    const listIds = this.#getExpiredRecordIds(lists, comparisonTime);
    await listChannel.deleteItems(listIds);
    const taskIds = this.#getExpiredRecordIds(tasks, comparisonTime);
    await taskChannel.deleteItems(taskIds);
    const settingsIds = this.#getExpiredRecordIds(taskSettings, comparisonTime);
    await taskSettingsChannel.deleteItems(settingsIds);
    const imageIds = this.#getExpiredRecordIds(customImages, comparisonTime);
    await imageChannel.deleteItems(imageIds);
  }
  #getExpiredRecordIds(allRecords, comparisonTime) {
    const toDelete = [];
    for (let i = 0; i < allRecords.length; i++) {
      const record = allRecords[i];
      if (record.deletedTimestamp != null && record.deletedTimestamp < comparisonTime) {
        toDelete.push(record.id);
      }
    }
    return toDelete;
  }
  async #openImportManager(data) {
    const boardData = new BoardExport(data, data.taskSettings, data.backgroundImage, data.lists);
    const router = this.findElement("app-router");
    const currentPath = router.path ?? "";
    const currentPathArray = currentPath.split("#");
    currentPathArray[1] = "import";
    const importPath = currentPathArray.join("#");
    router.navigate(importPath);
    this.findElement("import-manager").setData(boardData);
  }
  async deleteItem(item, refresh = true) {
    if (this.#data.historyEntries == null) {
      console.warn(`An error occurred accessing Action History data.`);
      return;
    }
    const recordId = item.dataset.recordId;
    if (recordId == null) {
      throw new Error('Unable to manage entry with unset "data-record-id" attribute');
    }
    const recordType = item.dataset.recordType;
    if (recordType == null) {
      throw new Error('Unable to manage entry with unset "data-record-type" attribute');
    }
    const channel = recordType == "board" ? this.#data.boards : recordType == "list" ? this.#data.lists : recordType == "task" ? this.#data.tasks : null;
    if (channel == null) {
      console.warn(`An error occurred accessing board data.`);
      return;
    }
    await channel.delete(recordId, true);
    const historyEntries = await this.#data.historyEntries.getAll();
    const toDelete = [];
    for (let i = 0; i < historyEntries.length; i++) {
      const entry = historyEntries[i];
      const entryId = entry.data.properties.id;
      if (entryId == recordId) {
        toDelete.push(entry.id);
      }
    }
    await this.#data.historyEntries.deleteItems(toDelete);
    if (refresh == true) {
      this.#refreshActionHistory();
    }
  }
  async deleteImage(item, refresh = true) {
    if (this.#data.customImages == null) {
      console.warn(`An error occurred accessing custom image data.`);
      return;
    }
    if (this.#data.historyEntries == null) {
      console.warn(`An error occurred accessing Action History data.`);
      return;
    }
    const recordId = item.dataset.recordId;
    if (recordId == null) {
      throw new Error('Unable to manage image entry with unset "data-record-id" attribute');
    }
    await this.#data.customImages.delete(recordId, true);
    const historyEntries = await this.#data.historyEntries.getAll();
    const updatedEntries = [];
    for (let i = 0; i < historyEntries.length; i++) {
      const entry = historyEntries[i];
      const imageUpdates = entry.data.properties.backgroundImages;
      if (imageUpdates == null) {
        continue;
      }
      const toKeep = [];
      for (let j = 0; j < imageUpdates.length; j++) {
        if (imageUpdates[j].id != recordId) {
          toKeep.push(imageUpdates[i]);
        }
      }
      entry.data.properties.backgroundImages = toKeep;
      updatedEntries.push(entry);
    }
    await this.#data.historyEntries.saveItems(updatedEntries);
    if (refresh == true) {
      this.#refreshActionHistory();
    }
  }
  //utils
  #getChannel(channel, errorMessage, type = "info") {
    if (this.#data.isInitialized == false || channel == null) {
      this.#showMessageDialog(errorMessage, type);
      throw new Error(`Data Access Error`);
    }
    return channel;
  }
  #getIdFromRoute() {
    const pathAttribute = this.findElement("app-router").getAttribute("path") ?? "";
    if (pathAttribute == null) {
      throw new Error("Unable to edit board data when path data is unavailable");
    }
    const attributeArray = pathAttribute.split("#");
    const path = attributeArray[0];
    const pathArray = path.split("/");
    const id = pathArray[pathArray.length - 1];
    return id;
  }
  #getConfirmation(message, type = "info") {
    this.getElement("confirmation-dialog").querySelector(`route-page[path="${type}"]`).innerHTML = message;
    this.getElement("confirmation-dialog").showModal();
    this.getElement("confirmation-router").navigate(type);
    return new Promise((resolve) => {
      this.getElement("confirmation-dialog-form").addEventListener("submit", (event) => {
        if (event.submitter == this.getElement("confirmation-confirm-button")) {
          resolve(true);
          return;
        }
        resolve(false);
      }, { once: true });
    });
  }
  #showMessageDialog(message, type = "info") {
    const dialog = this.getElement("confirmation-dialog");
    dialog.querySelector(`path-route[path="${type}"]`).innerHTML = message;
    dialog.show();
    dialog.classList.add("message");
    this.getElement("confirmation-router").navigate(type);
    return new Promise((resolve) => {
      this.getElement("confirmation-dialog-form").addEventListener("submit", (event) => {
        dialog.classList.remove("message");
        resolve();
      }, { once: true });
    });
  }
};
if (customElements.get(COMPONENT_TAG_NAME28) == null) {
  customElements.define(COMPONENT_TAG_NAME28, TaskboardManagerElement3);
}
export {
  AppSettingKey,
  SHAREDACCESSKEY,
  TaskboardManagerElement3 as TaskboardManagerElement
};
