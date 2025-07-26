// src/styles/shared.css?raw
var shared_default = '\r\ninput, button, textarea, select \r\n{\r\n    font: inherit; \r\n}\r\ninput[type="color"]::-webkit-color-swatch\r\n{\r\n    border: none;\r\n    padding: 0;\r\n}\r\ninput[type="color"]::-webkit-color-swatch-wrapper\r\n{\r\n    padding: 0;\r\n    border: none;\r\n}\r\n\r\nbutton\r\n{\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 7px;\r\n}\r\n\r\nbutton svg\r\n{\r\n    width: var(--button-icon-size);\r\n    height: var(--button-icon-size);\r\n}\r\n';

// src/components/app-menu/board-item.global.css?raw
var board_item_global_default = '\r\na.board\r\n{\r\n    margin: 0;\r\n    flex-shrink: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: .25em;\r\n    padding: .25em 1em;\r\n}\r\na.board .name\r\n{\r\n    flex: 1;\r\n}\r\na.board:hover\r\n{\r\n    background: highlight;\r\n    color: highlighttext;\r\n}\r\na.board[aria-current="page"]\r\n{\r\n    background: highlight;\r\n    color: highlighttext;\r\n}\r\n\r\n@media (max-width: 665px) \r\n{\r\n\r\n    a.board [part="edit"]\r\n    {\r\n        display: none;\r\n    }\r\n}\r\n@media (max-width: 800px) \r\n{\r\n    \r\n}\r\n\r\n/* only desktop */\r\n@media (min-width: 665px) \r\n{\r\n\r\n    /* a.board\r\n    {\r\n        overflow: hidden;\r\n    } */\r\n\r\n    .menu-item-handle\r\n    ,a.board [part="edit"]\r\n    {\r\n        opacity: 0;\r\n        transition: opacity 200ms ease;\r\n    }\r\n    .menu-item-handle\r\n    ,a.board:hover [part="edit"]\r\n    {\r\n        opacity: 1;\r\n    }\r\n\r\n    a.board [part="edit"]:hover\r\n    {\r\n        opacity: 1;\r\n    }\r\n\r\n    a.board .board-item-name\r\n    {\r\n        flex: 1;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    \r\n    .menu-item-handle\r\n    {\r\n        display: flex;\r\n        width: 10px;\r\n        align-self: stretch;\r\n        cursor: grab;\r\n        /* border-radius: 3px; */\r\n        transform: translateY(-1px);\r\n        \r\n        background-image: radial-gradient(var(--grip-color, canvastext) 40%, transparent 41%);\r\n        background-size: 5px 6px;\r\n        background-position: 0 0, 2px 4px;\r\n    }\r\n    .menu-item-handle:active\r\n    {\r\n        cursor: grabbing;\r\n    }\r\n}\r\n@media (min-width: 800px) \r\n{\r\n\r\n}';

// src/components/board-browser/browser-item.global.css?raw
var browser_item_global_default = "captioned-thumbnail\r\n{\r\n    height: auto;\r\n}\r\n\r\ncaptioned-thumbnail::part(figure)\r\n{\r\n    padding: 3px;\r\n}\r\n\r\ncaptioned-thumbnail svg\r\n{\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\ncaptioned-thumbnail.match\r\n{\r\n    border: solid 1px highlight;\r\n    order: 0;\r\n}\r\nboard-browser:has(captioned-thumbnail.match) captioned-thumbnail:not(.match)\r\n{\r\n    order: 1;\r\n}";

// src/styles/settings.css?raw
var settings_default = 'task-board\r\n{\r\n    background-color: var(--board-background-color, transparent);\r\n    color: var(--board-font-color);\r\n}\r\ntask-board[style*="--board-background-source"]\r\n{\r\n    background:  var(--board-background-source), var(--board-background-color, transparent);\r\n    background-size: var(--background-image-display);\r\n    background-position: var(--background-image-position, var(--background-image-offset));\r\n    background-repeat: var(--background-image-repeat);\r\n}\r\n\r\ntask-list\r\n{\r\n    background: var(--list-background-color);\r\n    color: var(--list-font-color);\r\n    border-color: var(--list-border-color, transparent);\r\n}\r\ntask-list::part(header)\r\n{\r\n    top: 0;\r\n    margin-bottom: 14px;\r\n}\r\ntask-list::part(name)\r\n{\r\n    color: inherit;\r\n}\r\ntask-list.hide-color::part(color)\r\n{\r\n    display: none;\r\n}\r\ntask-list.hide-color::part(header)\r\n{\r\n    grid-template-columns: 1fr auto;\r\n}\r\n\r\ntask-card\r\n{\r\n    background-color: var(--task-background-color, canvas);\r\n    width: var(--task-width, 300px);\r\n    overflow: hidden;\r\n    font-family: sans-serif;\r\n    color: var(--task-font-color, currentcolor);\r\n    font-size: var(--task-font-size, 12px);\r\n    border-color: var(--task-border-color, var(--input-border-color));\r\n    border-radius: var(--task-border-radius, 2px);\r\n    border-top-width: var(--task-border-top, 1px);\r\n    border-right-width: var(--task-border-right, 1px);\r\n    border-bottom-width: var(--task-border-bottom, 1px);\r\n    border-left-width: var(--task-border-left, 1px);\r\n}\r\ntask-card::part(description)\r\n{\r\n    font: inherit;\r\n}\r\n.center-remove task-card::part(remove-button)\r\n{\r\n    align-self: center;\r\n}\r\ntask-card::part(is-finished)\r\n{\r\n    align-self: flex-start;\r\n}\r\n.center-checkbox task-card::part(is-finished)\r\n{\r\n    align-self: center;\r\n}\r\n\r\n.hide-task-color task-card::part(color-container)\r\n{\r\n    display: none;\r\n}\r\n\r\n.task-color-border task-card\r\n{\r\n    display: grid;\r\n    grid-template-columns: auto auto 1fr auto;\r\n    grid-template-rows: auto 1fr;\r\n}\r\n\r\n.task-color-border:not(.color-border-top,.color-border-right,.color-border-bottom,.color-border-left) task-card\r\n{\r\n    border-color: var(--task-color);\r\n}\r\n.task-color-border.color-border-top task-card\r\n{\r\n    border-top-color: var(--task-color);\r\n}\r\n.task-color-border.color-border-right task-card\r\n{\r\n    border-right-color: var(--task-color);\r\n}\r\n.task-color-border.color-border-bottom task-card\r\n{\r\n    border-bottom-color: var(--task-color);\r\n}\r\n.task-color-border.color-border-left task-card\r\n{\r\n    border-left-color: var(--task-color);\r\n}\r\n.task-color-background task-card\r\n{\r\n    background-color: var(--task-color);\r\n}\r\n\r\n.task-color-border task-card::part(is-finished)\r\n{\r\n    grid-row: 2;\r\n    grid-column: 2;\r\n    margin-block-end: 7px;\r\n    margin-block-start: 0;\r\n}\r\n\r\n.task-color-border task-card::part(color-container)\r\n{\r\n    display: block;\r\n    margin: 7px;\r\n    width: 14px;\r\n    height: 6px;\r\n    background-color: var(--task-color);\r\n    border-radius: 5px;\r\n    align-self: center;\r\n\r\n    grid-row: 1;\r\n    grid-column: 2;\r\n    margin-block-start: 7px;\r\n    margin-block-end: 0;\r\n    justify-self: center;\r\n}\r\n.task-color-border task-card::part(color)\r\n{\r\n    display: none;\r\n}\r\n\r\n.task-color-border task-card::part(description)\r\n{\r\n    width: auto;\r\n    grid-row: span 2;\r\n    margin-block: 7px;\r\n}\r\n\r\n.task-color-border task-card::part(remove-button)\r\n{\r\n    grid-row: span 2;\r\n}\r\n\r\n/* .task-color-border task-card\r\n{\r\n    display: grid;\r\n    grid-template-columns: auto auto 1fr auto;\r\n    grid-template-rows: auto 1fr;\r\n}\r\n\r\n.task-color-border task-card::part(color-container)\r\n,.task-color-border task-card::part(color)\r\n{\r\n    grid-row: 2;\r\n    grid-column: 2;\r\n    width: 14px;\r\n    height: 14px;\r\n    margin-block-end: 7px;\r\n    margin-block-start: 0;\r\n    border-radius: 3px;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n\r\n.task-color-border task-card::part(handle)\r\n{\r\n    grid-row: span 2;\r\n    grid-column: 1;\r\n}\r\n\r\n.task-color-border task-card::part(is-finished)\r\n,.task-color-border task-card::part(finished-indicator)\r\n{\r\n    grid-row: 1;\r\n    grid-column: 2;\r\n    margin-block-start: 7px;\r\n    margin-block-end: 0;\r\n}\r\n\r\n.task-color-border task-card::part(description)\r\n,.task-color-border task-card::part(remove-button)\r\n{\r\n    grid-row: span 2;\r\n} */\r\n\r\n@media (min-width: 665px) \r\n{\r\n    task-list\r\n    {\r\n        width: var(--list-width);\r\n    } \r\n}';

// src/taskboard-manager.css?raw
var taskboard_manager_default = `*\r
{\r
    box-sizing: border-box;\r
}\r
\r
/* helper parts */\r
/* \r
    text\r
    button\r
    fieldset\r
    legend\r
    input\r
    textinput\r
    toggle\r
    select\r
    field\r
    icon\r
    detail\r
    summary\r
    listitem\r
    header\r
 */\r
\r
input, button, textarea, select \r
{\r
    font: inherit; \r
}\r
\r
button svg\r
{\r
    width: var(--button-icon-size);\r
    height: var(--button-icon-size);\r
}\r
\r
:host\r
{    \r
    font: inherit;\r
    display: grid;\r
    border: solid 1px;\r
    position: relative;\r
    background: canvas;\r
    color: canvastext;\r
\r
    --icon-size: 12px;\r
    --tab-icon-size: var(--icon-size);\r
    --brand-icon-size: 24px;\r
    --button-icon-size: var(--icon-size);\r
    --dialog-margin: 10px;\r
    --dialog-header-icon-size: 16px;\r
\r
    --task-width: auto;\r
}\r
\r
#welcome-page\r
{\r
    display: grid;\r
}\r
\r
#loading\r
{\r
    align-self: center;\r
    justify-self: center;\r
\r
    display: inline-block;\r
    width: 50px;\r
    height: 50px;\r
    border: 3px solid highlighttext;\r
    border-radius: 50%;\r
    border-top-color: highlight;\r
    animation: loading-spin 1s ease-in-out infinite;\r
    -webkit-animation: loading-spin 1s ease-in-out infinite;\r
    opacity: 0;\r
    transition: opacity 200ms linear;\r
    pointer-events: none;\r
    position: absolute;\r
}\r
:host([loading]) #loading\r
{\r
    opacity: 1;\r
    pointer-events: initial;\r
    position: static;\r
}\r
\r
app-menu\r
{\r
    display: contents;\r
}\r
\r
.board\r
{\r
    user-select: none;\r
}\r
\r
.edit\r
{\r
    opacity: 0;\r
}\r
.board:hover .edit\r
,.board[aria-current="page"] .edit\r
,.board .edit:focus\r
{\r
    opacity: 1;\r
}\r
\r
#app-router\r
{\r
    overflow: hidden;\r
}\r
\r
#board-page\r
{\r
    display: flex;\r
    overflow: hidden;\r
}\r
\r
task-board\r
{\r
    flex: 1;\r
}\r
\r
task-card[data-drag-id]\r
{\r
    /* background-color: red; */\r
    padding: 10px;\r
    scale: .9;\r
    border: dashed 1px graytext;\r
}\r
\r
.add-task-button\r
{\r
    margin: 14px auto;\r
    display: flex;\r
}\r
\r
captioned-thumbnail::part(selected)\r
{\r
    display: none;\r
}\r
\r
\r
#notifications\r
{\r
    position: absolute;\r
    top: 0;\r
    right: 0;\r
    padding: 1em;\r
    width: 375px;\r
    display: grid;\r
    row-gap: 7px;\r
}\r
#notifications:empty\r
{\r
    pointer-events: none;\r
}\r
\r
#message-content\r
{\r
    display: grid;\r
    grid-template-columns: 1fr auto;\r
    align-items: center;\r
}\r
    \r
/* message-card\r
{\r
    background-color: field;\r
    box-shadow: 1px 1px 7px 3px rgb(0 0 0 / .4);\r
}\r
\r
message-card::part(message)\r
{\r
    display: grid;\r
    grid-template-columns: 1fr auto;\r
} */\r
\r
\r
#confirmation-router\r
{\r
    margin-block: 1em;\r
}\r
\r
#confirmation-dialog-header\r
{\r
    display: grid;\r
    grid-template-columns: auto 1fr auto;\r
    gap: 7px;\r
    align-items: center;\r
    font-weight: bold;\r
    padding-bottom: 1em;\r
}\r
#confirmation-dialog-icon\r
{\r
    width: var(--dialog-header-icon-size);\r
    height: var(--dialog-header-icon-size);\r
}\r
\r
#confirmation-dialog-form\r
{\r
    display: flex;\r
    justify-content: flex-end;\r
    gap: 10px;\r
}\r
\r
.notification\r
{\r
    background-color: canvas;\r
}\r
\r
.notification-message-content\r
{\r
    display: grid;\r
    grid-template-columns: 1fr auto;\r
    align-items: center;\r
    gap: 14px;\r
}\r
  \r
@keyframes loading-spin { to { -webkit-transform: rotate(360deg); } }\r
@-webkit-keyframes loading-spin { to { -webkit-transform: rotate(360deg); } }\r
\r
\r
@media (max-width: 665px) \r
{\r
    :host\r
    {\r
        grid-template-rows: 1fr auto auto;\r
        grid-template-columns: 1fr;\r
        /* grid-template-areas: 'menu'\r
        'taskboard'; */\r
    }\r
\r
    .board .edit\r
    {\r
        display: none;\r
    }\r
\r
    #app-router route-page\r
    {\r
        width: 100vw;\r
    }\r
\r
    task-board::part(lists)\r
    {\r
        scroll-snap-type: x mandatory;\r
    }\r
    task-list\r
    {\r
        scroll-snap-align: start;\r
        width: 100vw;\r
    }\r
    task-list::part(collapse-button)\r
    {\r
        display: none;\r
    }\r
    \r
    #notifications\r
    {\r
        width: 100vw;\r
    }\r
\r
    dialog\r
    {\r
        bottom: 25px;\r
    }\r
}\r
@media (max-width: 785px) \r
{\r
    \r
}\r
\r
/* only desktop */\r
@media (min-width: 665px) \r
{\r
    :host\r
    {\r
        grid-template-columns: auto 1fr;\r
        grid-template-areas: 'menu taskboard';\r
    }\r
\r
    #app-router\r
    {\r
        grid-column: 2;\r
        grid-row: 1;\r
        flex: 1;\r
    }\r
\r
    #loading\r
    {\r
        grid-column: 2;\r
        grid-row: 1;\r
    }\r
    dialog\r
    {\r
        width: 750px;\r
        top: 50px;\r
    }\r
\r
    #config-dialog\r
    ,#board-settings-dialog\r
    {\r
        width: calc(100% - (var(--dialog-margin)*2));\r
    }\r
\r
    task-card::part(description)\r
    {\r
        width: min-content;\r
    }\r
\r
    task-list\r
    {\r
        transition: width 200ms linear;\r
    }\r
    task-list::part(collapse-icon)\r
    {\r
        display: inline-block;\r
        rotate: -90deg;\r
        transition: color 200ms linear;\r
    }\r
    task-list[collapsed]\r
    {\r
        overflow: hidden;\r
        --list-min-width: var(--collapsed-list-width, calc(1ch + 45px));\r
        width: 0;\r
    }\r
    task-list[collapsed]::part(collapse-icon)\r
    {\r
        font-size: 18px;\r
        color: var(--list-color);\r
    }\r
    task-list[collapsed]::part(header)\r
    {\r
        grid-template-columns: 1fr;\r
    }\r
    task-list[collapsed]::part(color-container)\r
    ,task-list[collapsed]::part(name)\r
    ,task-list[collapsed] .list-add-button-label\r
    {\r
        display: none !important;\r
    }\r
}\r
@media (min-width: 800px) \r
{\r
}\r
@media (prefers-color-scheme: dark) \r
{\r
    :host(:not([style*="color-scheme: light;"])) config-panel::part(key)\r
    {\r
        background-color: #444;\r
        color: #aaa;\r
        border-color: #666;\r
        box-shadow: 1px 1px rgba(255, 255, 255, 0.6),\r
        0 2px 0 0 rgba(255, 255, 255, 0.1) inset;\r
    }\r
}\r
:host([style*="color-scheme: dark;"]) config-panel::part(key)\r
{\r
    background-color: #444;\r
    color: #aaa;\r
    border-color: #666;\r
    box-shadow: 1px 1px rgba(255, 255, 255, 0.6),\r
    0 2px 0 0 rgba(255, 255, 255, 0.1) inset;\r
}\r
\r
\r
dialog\r
{\r
    max-height: 80%;\r
    max-width: calc(100% - (var(--dialog-margin)*2));\r
    overflow: hidden;\r
    flex-direction: column;\r
    transition: transform 200ms ease, opacity 200ms ease;\r
}\r
dialog[open]\r
{\r
    display: flex;\r
    opacity: 1;\r
}\r
@starting-style \r
{\r
    dialog[open]\r
    {\r
        opacity: 0;\r
        transform: translateY(20px);\r
    }\r
}\r
\r
@media (max-width: 665px) \r
{\r
    dialog\r
    {\r
        bottom: 25px;\r
    }\r
}\r
@media (max-width: 800px) \r
{\r
    \r
}\r
\r
/* only desktop */\r
@media (min-width: 665px) \r
{\r
    dialog\r
    {\r
        min-width: 500px;\r
        max-width: 850px;\r
        top: 50px;\r
    }\r
}\r
@media (min-width: 800px) \r
{\r
}`;

// src/taskboard-manager.html?raw
var taskboard_manager_default2 = '<app-menu id="app-menu-container"></app-menu>\r\n<path-router id="app-router" path="">\r\n    <route-page id="welcome-page" class="page" path="">\r\n        <welcome-panel\r\n            id="welcome-panel"\r\n            exportparts="edit-button:recent-edit-button,handle:recent-edit-handle">\r\n        </welcome-panel>\r\n    </route-page>\r\n    <route-page id="board-page" class="page" path="board/:id" >\r\n        <task-board id="task-board" exportparts="lists:task-board-lists"></task-board>\r\n    </route-page>\r\n    <dialog id="board-browser-dialog" class="dialog" is="route-dialog" path="boards">\r\n        <board-browser\r\n            id="board-browser"\r\n            exportparts="regex,active">\r\n        </board-browser>\r\n    </dialog>\r\n    <dialog id="config-dialog" class="dialog" is="route-dialog" path="config">\r\n        <config-panel id="config-panel" exportparts="selected,deleted-item,action-history-entry,active">\r\n            <slot name="custom-settings" slot="custom-settings"></slot>\r\n        </config-panel>\r\n    </dialog>\r\n    <dialog id="board-settings-dialog" class="dialog" is="route-dialog" path="board-settings">\r\n        <board-settings id="board-settings" exportparts="option-true"></board-settings>\r\n    </dialog>\r\n    <dialog id="import-dialog" class="dialog" is="route-dialog" path="import">\r\n        <import-manager\r\n            id="import-manager"\r\n            exportparts="preview: import-preview,\r\n                         content: import-dialog-content,\r\n                         removed,\r\n                         undo:import-target-undo"\r\n            ></import-manager>\r\n    </dialog>\r\n</path-router>\r\n<dialog id="confirmation-dialog" class="dialog">\r\n    <header id="confirmation-dialog-header" class="header dialog-header">\r\n        <svg id="confirmation-dialog-icon" class="icon">\r\n            <use href="#icon-definition_logo-mark"></use>\r\n        </svg>\r\n        <span id="confirmation-dialog-title" class="title">Confirmation</span>\r\n    </header>\r\n    <path-router id="confirmation-router" class="router">\r\n        <route-page id="confirmation-info" class="confirmation-page" path="info"></route-page>\r\n        <route-page id="confirmation-warn" class="confirmation-page" path="warn"></route-page>\r\n        <route-page id="confirmation-danger" class="confirmation-page" path="danger"></route-page>\r\n    </path-router>\r\n    <footer id="confirmation-dialog-footer" class="footer dialog-footer">\r\n        <form id="confirmation-dialog-form" method="dialog">\r\n            <button type="submit" id="confirmation-cancel-button" class="button action-button cancel">Cancel</button>\r\n            <button type="submit" id="confirmation-confirm-button" class="button action-button ok preferred-button">Confirm</button>\r\n        </form>\r\n    </footer>\r\n</dialog>\r\n<div id="notifications"></div>\r\n<div id="loading"></div>';

// src/assets/icons/cancel-cross.ts
var CancelCross = `<svg id="icon-definition_cancel-cross" class="icon cancel-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <path
        style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-linecap:square;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
        d="m 1237.4389,207.63366 -1.8991,1.8987 a 0.65841136,0.65841136 90.003442 0 0 0,0.93116 l 0.4831,0.48317 a 14628.329,14628.329 44.999244 0 0 0.9312,0.93118 l 3.7936,3.79311 a 0.65840885,0.65840885 89.998393 0 1 0,0.93116 l -3.7936,3.7936 a 8783.6896,8783.6896 135.00442 0 1 -0.9313,0.93111 l -0.4829,0.48283 a 0.65811,0.65811 89.993977 0 0 10e-5,0.93094 l 1.8987,1.89741 a 0.65867085,0.65867085 179.98891 0 0 0.9314,-1.8e-4 l 0.4826,-0.48267 a 45427.77,45427.77 134.99941 0 1 0.9312,-0.93119 l 3.7931,-3.79308 a 0.65848899,0.65848899 179.99848 0 1 0.9312,-2e-5 l 3.7936,3.79312 a 10110.91,10110.91 44.992994 0 0 0.9313,0.93108 l 0.483,0.48285 a 0.65856615,0.65856615 179.99438 0 0 0.9313,-9e-5 l 1.897,-1.89705 a 0.65833101,0.65833101 89.994378 0 0 -10e-5,-0.93111 l -0.483,-0.48285 a 5293.5057,5293.5057 44.99639 0 1 -0.9313,-0.93113 l -3.793,-3.79354 a 0.65849247,0.65849247 90.001607 0 1 0,-0.93122 l 3.793,-3.79305 a 149190.44,149190.44 134.99995 0 1 0.9312,-0.93119 l 0.4832,-0.48321 a 0.65863247,0.65863247 90.008202 0 0 10e-5,-0.93132 l -1.8972,-1.89834 a 0.65838576,0.65838576 0.01346964 0 0 -0.9312,-2.2e-4 l -0.483,0.48285 a 7148.543,7148.543 135.00546 0 0 -0.9313,0.9311 l -3.7936,3.79359 a 0.65841791,0.65841791 0.00151591 0 1 -0.9312,-3e-5 l -3.7931,-3.79353 a 52707.551,52707.551 45.002134 0 0 -0.9312,-0.93122 l -0.4826,-0.48267 a 0.65849044,0.65849044 0.00323988 0 0 -0.9312,-5e-5 z"
        transform="translate(-1232.6358,-204.72848)" />
    </svg>`;

// src/assets/icons/category.ts
var Category = `<svg id="icon-definition_category" class="icon category" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
    style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1.05234;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dashoffset:7.75;stroke-opacity:1;-inkscape-stroke:none"
    d="m 987.94777,204.09868 c -4.44519,0.87265 -7.98186,4.41036 -8.85465,8.85572 -0.0684,0.34864 0.18257,0.63461 0.53791,0.63461 h 5.87812 c 0.35534,0 0.73933,-0.27384 0.91251,-0.58373 0.37028,-0.66258 0.91474,-1.20741 1.57707,-1.57789 0.30982,-0.17329 0.58366,-0.55731 0.58366,-0.91265 v -5.87812 c 0,-0.35534 -0.28597,-0.60638 -0.63462,-0.53794 z"
    transform="matrix(0.9558402,0,0,0.94471945,-934.79517,-191.8839)" />
<path
    style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke:var(--icon-primary-color,InfoText);stroke-width:0.999997;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dashoffset:7.75;stroke-opacity:1;-inkscape-stroke:none"
    d="m 13.169023,0.92164365 c -0.27557,0.007 -0.48525,0.22472995 -0.48525,0.51846995 v 5.55324 c 0,0.33571 0.26185,0.69844 0.55799,0.86216 0.6331,0.34999 1.15358,0.865 1.50751,1.49096 0.16552,0.29274 0.53272,0.55116 0.87238,0.55116 h 5.61853 c 0.33963,0 0.57943,-0.27012 0.51393,-0.5995 -0.83416,-4.19961 -4.21463,-7.54184 -8.46353,-8.36622995 -0.0417,-0.009 -0.0822,-0.0112 -0.12156,-0.0103 z M 1.5756828,12.919584 c -0.3397,0 -0.58000002,0.27014 -0.51453,0.59951 0.83422,4.19961 4.21518,7.54182 8.46408,8.36624 0.33325,0.0646 0.6063302,-0.17251 0.6063302,-0.50822 v -5.55325 c 0,-0.33569 -0.2618502,-0.69844 -0.5580002,-0.86215 -0.63309,-0.34999 -1.15357,-0.86501 -1.5075,-1.49096 -0.16553,-0.29275 -0.53224,-0.55117 -0.8719,-0.55117 z m 14.0459702,0 c -0.33966,0 -0.70686,0.25842 -0.87238,0.55117 -0.35393,0.62595 -0.87441,1.14097 -1.50751,1.49096 -0.29614,0.16371 -0.55799,0.52646 -0.55799,0.86215 v 5.55276 c 0,0.3357 0.27356,0.57288 0.60681,0.50821 4.2489,-0.8244 7.62937,-4.16613 8.46353,-8.36574 0.066,-0.32937 -0.1743,-0.59951 -0.51393,-0.59951 z" />
</svg>`;

// src/assets/icons/clock.ts
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

// src/assets/icons/close-cross.ts
var CloseCross = `<svg id="icon-definition_close-cross" class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <path
        style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"
        d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />
    </svg>`;

// src/assets/icons/color.ts
var Color = `<svg id="icon-definition_color" class="icon color" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:0.999999;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dasharray:none;stroke-dashoffset:29.2913;stroke-opacity:1"
        d="M 9.6625302,0.28350092 C 4.876543,0.30766312 0.86199994,6.2841871 0.86199994,11.54637 c 0,6.013935 4.94572596,11.805887 10.88934906,10.889269 9.547678,-1.472442 12.893064,-7.159584 7.892436,-11.10838 C 16.445118,8.8013071 16.247659,2.3066926 11.751349,0.65711502 11.045546,0.39820412 10.346185,0.28003772 9.6625302,0.28350092 Z M 18.494069,12.83467 a 1.87029,1.9922655 0 0 1 1.870151,1.99264 1.87029,1.9922655 0 0 1 -1.870151,1.99213 1.87029,1.9922655 0 0 1 -1.870152,-1.99213 1.87029,1.9922655 0 0 1 1.870152,-1.99264 z" />
    <path style="fill:var(--icon-secondary-color,InfoBackground);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dashoffset:29.2913"
        d="m 9.4950819,2.2130913 a 2.2939048,2.4435074 0 0 0 -2.2939,2.44378 2.2939048,2.4435074 0 0 0 2.2939,2.44326 2.2939048,2.4435074 0 0 0 2.2940001,-2.44326 2.2939048,2.4435074 0 0 0 -2.2940001,-2.44378 z m -5.2642,5.69733 a 2.2939048,2.4435074 0 0 0 -2.294,2.4432597 2.2939048,2.4435074 0 0 0 2.294,2.44378 2.2939048,2.4435074 0 0 0 2.2939,-2.44378 2.2939048,2.4435074 0 0 0 -2.2939,-2.4432597 z m 2.7941,7.2465897 a 2.2939048,2.4435074 0 0 0 -2.2939,2.44377 2.2939048,2.4435074 0 0 0 2.2939,2.44327 2.2939048,2.4435074 0 0 0 2.2939,-2.44327 2.2939048,2.4435074 0 0 0 -2.2939,-2.44377 z m 7.2864001,0.77514 a 2.2939048,2.4435074 0 0 0 -2.2939,2.44378 2.2939048,2.4435074 0 0 0 2.2939,2.44326 2.2939048,2.4435074 0 0 0 2.2939,-2.44326 2.2939048,2.4435074 0 0 0 -2.2939,-2.44378 z" />
</svg>`;

// src/assets/icons/confirm-check.ts
var ConfirmCheck = `<svg id="icon-definition_confirm-check" class="icon confirm-check" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <path
         style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-linecap:square;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
         d="m 1217.8244,205.78897 -0.2601,0.45136 a 1678.5796,1678.5796 119.92232 0 0 -0.7375,1.28138 l -5.9817,10.40385 a 0.56505518,0.56505518 172.50336 0 1 -0.8902,0.11714 l -2.5269,-2.53657 a 11807.915,11807.915 45.113224 0 1 -1.0433,-1.04749 l -0.369,-0.37041 a 0.73898684,0.73898684 0.10741692 0 0 -1.0452,-0.002 l -1.7867,1.78058 a 0.73898921,0.73898921 90.088719 0 0 -0,1.04526 l 0.3681,0.36914 a 1932.0309,1932.0309 45.101339 0 1 1.0436,1.04728 l 6.2204,6.24724 a 0.56490867,0.56490867 172.50982 0 0 0.8901,-0.11702 l 8.5912,-14.94289 a 3197.1389,3197.1389 119.88313 0 0 0.7367,-1.28189 l 0.2597,-0.45232 a 0.7394065,0.7394065 74.876753 0 0 -0.2727,-1.00934 l -2.185,-1.25556 a 0.74005456,0.74005456 164.91559 0 0 -1.0099,0.27222 z"
         transform="translate(-1200.7725,-203.67043)" />
    </svg>`;

// src/assets/icons/export.ts
var Export = `<svg id="icon-definition_export" class="icon export" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
d="M 1.4836068,2.5301415 H 21.329107 c 0.2559,0 0.4618,0.20586 0.4618,0.46157 V 19.822941 c 0,0.25571 -0.2059,0.46158 -0.4618,0.46158 H 1.4836068 c -0.2559,0 -0.4618,-0.20587 -0.4618,-0.46158 V 2.9917115 c 0,-0.25571 0.2059,-0.46157 0.4618,-0.46157 z" />
<path
style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
d="m 11.406307,3.5941715 c -0.5307,9e-5 -1.0159,0.16025 -1.253,0.41372 l -4.5001002,4.80389 c -0.5756,0.61476 0.2618,1.3380295 1.5493,1.3380395 h 0.868 v 4.77458 c -0.958,0.18943 -1.8327,0.45786 -2.5896,0.79458 -1.5866,0.70582 -2.7631,0.25992 -2.7631,1.60646 v 1.20148 H 20.241207 v -1.20148 c 0,-1.34654 -1.1764,-0.90064 -2.763,-1.60646 -0.7953,-0.35379 -1.7195,-0.633 -2.7349,-0.8235 v -4.74566 h 0.8669 c 1.2875,-10e-6 2.125,-0.7232795 1.5493,-1.3380395 l -4.5,-4.80389 c -0.2371,-0.25349 -0.7223,-0.41365 -1.2532,-0.41372 z" />
</svg>`;

// src/assets/icons/file.ts
var File2 = `<svg id="icon-definition_file" class="icon file" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
    style="fill:var(--icon-secondary-color,InfoBackground);stroke:var(--icon-primary-color,InfoText);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
    d="M 3.2868718,1.1832965 H 19.525832 c 0.29256,0 0.52808,0.23535 0.52808,0.52768 V 21.103686 c 0,0.29234 -0.23552,0.52768 -0.52808,0.52768 H 3.2868718 c -0.29255,0 -0.52807,-0.23534 -0.52807,-0.52768 V 1.7109765 c 0,-0.29233 0.23552,-0.52768 0.52807,-0.52768 z" />
    <path
    style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none"
    d="m 5.3448518,3.0908565 c -0.29255,0 -0.52788,0.23517 -0.52788,0.52749 v 4.50924 c 0,0.29234 0.23533,0.52749 0.52788,0.52749 h 6.0050702 c 0.29255,0 0.52789,-0.23515 0.52789,-0.52749 v -4.50924 c 0,-0.29232 -0.23534,-0.52749 -0.52789,-0.52749 z m 8.8552002,0.39689 c -0.56451,1.3e-4 -1.02173,0.45768 -1.0214,1.02176 1.1e-4,0.56379 0.45722,1.02049 1.0214,1.02062 h 3.0755 c 0.56451,2.6e-4 1.02241,-0.45656 1.02252,-1.02062 2.2e-4,-0.56436 -0.4578,-1.02203 -1.02252,-1.02176 z m 0.0986,3.24542 c -0.56451,1.3e-4 -1.02173,0.45768 -1.02141,1.02176 1.1e-4,0.56379 0.45723,1.02049 1.02141,1.02062 h 3.07549 c 0.56451,2.6e-4 1.02243,-0.45656 1.02254,-1.02062 2.2e-4,-0.56436 -0.45781,-1.02203 -1.02254,-1.02176 z M 5.2524718,10.113686 c -0.56451,1.3e-4 -1.02167,0.45768 -1.02141,1.02176 1.5e-4,0.5638 0.45718,1.0205 1.02141,1.02063 H 17.558362 c 0.5645,2.6e-4 1.0224,-0.45656 1.02254,-1.02063 2.6e-4,-0.56436 -0.45774,-1.02202 -1.02254,-1.02176 z m 0,3.53027 c -0.5645,1.3e-4 -1.02167,0.45769 -1.02141,1.02175 1.3e-4,0.5638 0.45718,1.02107 1.02141,1.0212 H 17.558362 c 0.56451,2.7e-4 1.02241,-0.45712 1.02254,-1.0212 2.6e-4,-0.56434 -0.45775,-1.02201 -1.02254,-1.02175 z m 0,3.53308 c -0.56423,1.3e-4 -1.02128,0.4574 -1.02141,1.0212 1.3e-4,0.56379 0.45718,1.02049 1.02141,1.02062 H 17.558362 c 0.56451,2.6e-4 1.02241,-0.45654 1.02254,-1.02062 -1.3e-4,-0.56408 -0.45803,-1.02146 -1.02254,-1.0212 z" />
</svg>`;

// src/assets/icons/gear.ts
var Gear = `<svg id="icon-definition_gear" class="icon gear" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;stop-color:#000000"
d="m 16.427119,1.7236663 c -0.04201,-0.030363 -0.09197,-0.0081 -0.13494,0.027216 l -2.542428,2.092726 A 8.0066645,8.0066666 0.07978599 0 0 12.700072,3.587311 l -1.32925,-3.00282785 c -0.01379,-0.031878 -0.03339,-0.059706 -0.05792,-0.074523 -0.01453,-0.00916 -0.03218,-0.012136 -0.0512,-0.00947 L 8.1090776,1.0093593 c -0.050929,0.00839 -0.070562,0.058983 -0.075473,0.1143574 L 7.7206901,4.3497491 A 8.0066645,8.0066666 0.07978599 0 0 6.7396517,4.9429409 L 3.7285594,3.7801761 c -0.05187,-0.020049 -0.106186,-0.024719 -0.136533,0.017397 l -1.868883,2.5890597 c -0.03036,0.04201 -0.0089,0.092198 0.02647,0.1350479 l 2.00726,2.4379768 a 8.0066645,8.0066666 0.07978599 0 0 -0.297337,1.2099175 l -2.87584998,1.273802 c -0.05063,0.0223 -0.09223,0.05787 -0.08414,0.108856 l 0.50969398,3.152475 c 0.0084,0.05102 0.05865,0.07099 0.113649,0.07645 l 3.087471,0.299096 a 8.0066645,8.0066666 0.07978599 0 0 0.68339,1.120066 l -1.114043,2.885401 c -0.02005,0.05187 -0.02553,0.10619 0.01665,0.136641 l 2.5895106,1.869223 c 0.04201,0.03036 0.091971,0.0081 0.134949,-0.02722 l 2.3878482,-1.965906 a 8.0066645,8.0066666 0.07978599 0 0 1.2773308,0.295263 l 1.256164,2.837039 c 0.0223,0.05063 0.05862,0.09153 0.108856,0.08414 l 3.151794,-0.508734 8.25e-4,-1.3e-4 c 0.05107,-0.0084 0.07076,-0.05944 0.07585,-0.114806 l 0.3036,-3.12985 a 8.0066645,8.0066666 0.07978599 0 0 1.055091,-0.66366 l 2.945999,1.137519 c 0.05187,0.02005 0.106185,0.02472 0.136533,-0.0174 l 1.868882,-2.589057 c 0.03036,-0.04201 0.0089,-0.09211 -0.02647,-0.135048 l -2.047647,-2.487429 a 8.0066645,8.0066666 0.07978599 0 0 0.254477,-1.123453 l 2.9591,-1.310827 c 0.05063,-0.0223 0.09221,-0.05786 0.08412,-0.108842 l -0.509199,-3.1521593 -4.82e-4,-3.34e-4 c -0.0083,-0.051202 -0.05851,-0.070949 -0.113645,-0.076438 l -3.267,-0.3163889 a 8.0066645,8.0066666 0.07978599 0 0 -0.575389,-0.917404 l 1.185522,-3.0707544 c 0.02005,-0.051874 0.02553,-0.1061893 -0.01665,-0.1366322 z" />
<path
style="fill:var(--icon-secondary-color,InfoBackground);stroke-width:0.25;stroke-linecap:round;stroke-linejoin:round;stop-color:#000000"
d="M 13.837065,10.003961 A 2.8067404,2.8067404 0 0 1 12.809727,13.838039 2.8067404,2.8067404 0 0 1 8.9756487,12.810701 2.8067404,2.8067404 0 0 1 10.002987,8.9766233 2.8067404,2.8067404 0 0 1 13.837065,10.003961 Z" />
</svg>`;

// src/assets/icons/image.ts
var Image = `<svg id="icon-definition_image" class="icon picture" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
        style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
        d="M 1.4148868,2.4681265 H 21.397817 c 0.25758,0 0.46494,0.20731 0.46494,0.4648 V 19.881746 c 0,0.25749 -0.20736,0.46479 -0.46494,0.46479 H 1.4148868 c -0.25757,0 -0.46492999,-0.2073 -0.46492999,-0.46479 V 2.9329265 c 0,-0.25749 0.20735999,-0.4648 0.46492999,-0.4648 z" />
    <path
        style="fill:var(--icon-secondary-color,InfoBackground);stroke-width:0.999994;stroke-linecap:round;stroke-linejoin:round"
        d="m 16.864987,4.9730465 c -1.11495,0 -2.01231,0.93615 -2.01231,2.09899 v 0.92032 c 0,1.16285 0.89736,2.0989895 2.01231,2.0989895 h 0.88241 c 1.11495,0 2.01281,-0.9361395 2.01281,-2.0989895 v -0.92032 c 0,-1.16284 -0.89786,-2.09899 -2.01281,-2.09899 z m -7.7437002,3.26724 c -0.2302,-0.007 -0.4579,0.0739 -0.62895,0.24496 l -7.05127,7.0491895 v 4.33335 c 1e-5,0.31395 0.2529,0.56628 0.56693,0.56628 H 20.804797 c 0.062,-9e-5 0.12029,-0.0121 0.17608,-0.0302 0.0891,-0.3069 0.009,-0.65983 -0.24552,-0.91388 L 9.7660968,8.5239765 c -0.18175,-0.18168 -0.41463,-0.27663 -0.64481,-0.28364 z" />
</svg>`;

// src/assets/icons/import.ts
var Import = `<svg id="icon-definition_import" class="icon import" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
    style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:0.999992;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
    d="M 1.5076568,2.5517565 H 21.305057 c 0.2552,0 0.4606,0.20535 0.4606,0.46044 V 19.802466 c 0,0.25509 -0.2054,0.46044 -0.4606,0.46044 H 1.5076568 c -0.2552,0 -0.4606,-0.20535 -0.4606,-0.46044 V 3.0121965 c 0,-0.25509 0.2054,-0.46044 0.4606,-0.46044 z" />
    <path
    style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
    d="m 8.4079568,3.2417565 v 7.4180595 h -1.4098 a 1.8163661,1.0387492 0 0 0 -1.6246,1.50355 l 4.7184002,5.39695 a 1.4694711,0.84036577 0 0 0 2.6287,0 l 4.7187,-5.39695 a 1.8163661,1.0387492 0 0 0 -1.6246,-1.50355 h -1.4089 V 3.2417565 Z" />
</svg>`;

// src/assets/icons/info.ts
var Info = `<svg id="icon-definition_info" class="icon info" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
    style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:0.999999;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dasharray:none;stroke-dashoffset:29.2913;stroke-opacity:1"
    d="M 22.295505,11.407332 A 10.889144,10.889144 0 0 1 11.406424,22.296479 10.889144,10.889144 0 0 1 0.51720881,11.407332 10.889144,10.889144 0 0 1 11.406424,0.51818382 10.889144,10.889144 0 0 1 22.295505,11.407332 Z" />
<path
    d="m 13.945668,4.3053761 c 0.150778,-0.96462 -0.30687,-1.43709 -1.36997,-1.43709 -1.063,0 -1.668452,0.47247 -1.81923,1.43709 -0.150779,0.96462 0.306971,1.43708 1.369971,1.43708 1.004,0 1.66845,-0.47246 1.819229,-1.43708 z M 11.693889,17.829726 13.373994,7.0811161 h -2.9333 L 8.7605887,17.829726 Z"
    style="font-size:19.6861px;font-family:Passageway;-inkscape-font-specification:Passageway;fill:var(--icon-secondary-color,InfoBackground);stroke-width:2.5;stroke-linejoin:round;stroke-miterlimit:6.3;stroke-dashoffset:29.2913"
    aria-label="i" />
</svg>`;

// src/assets/icons/logo.ts
var Logo = `<svg id="icon-definition_logo" viewBox="0 0 150 31">            
    <use href="#icon-definition_logo-mark" x="-59" height="26" y="2"></use>
    <use href="#icon-definition_logo-type" x="16" y="3" height="28"></use>
</svg>`;

// src/assets/icons/logo-mark.ts
var LogoMark = `<svg id="icon-definition_logo-mark" viewBox="0 0 39.072864 33.103016" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <g
     transform="translate(-32.699748,-93.890704)"
     id="g2214">
    <rect
       style="fill:var(--brand-3, #b8dcff);fill-opacity:1;stroke:var(--brand-2, #386caa);stroke-width:3.29545;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="35.777416"
       height="29.807568"
       x="34.347473"
       y="95.538429"
       ry="0.37767497"
       id="rect2206" />
    <rect
       style="fill:var(--brand-1, #60b0ff);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="9.2341394"
       height="23.481096"
       x="47.61911"
       y="98.701668"
       ry="0.37767494"
       id="rect2208" />
    <rect
       style="fill:var(--brand-1, #60b0ff);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="9.2341394"
       height="23.481096"
       x="58.202446"
       y="98.701668"
       ry="0.37767494"
       id="rect2210" />
    <rect
       style="fill:var(--brand-1, #60b0ff);fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill;stop-color:#000000"
       width="9.2341394"
       height="23.481096"
       x="37.035774"
       y="98.701668"
       ry="0.37767494"
       id="rect2212" />
  </g>
</svg>
`;

// src/assets/icons/logo-type.ts
var LogoType = `<svg
   viewBox="0 0 115.45518 28.3332"
   version="1.1"
   id="icon-definition_logo-type"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <g transform="translate(-75.903209,-98.753381)"
     class="container">
    <path
        id="logo-outline"
        class="outline"
        part="outline"
       style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:var(--brand-2, #386caa);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
       d="M 179.85914 98.753898 C 178.20133 98.753898 176.50241 99.004913 174.77366 99.48822 A 2.0002 2.0002 0 0 0 173.33034 101.68343 C 173.36904 101.96754 173.38873 102.24983 173.38873 102.53144 C 173.38873 103.13721 173.05681 104.84444 172.79859 106.31468 C 172.5475 106.28758 172.31334 106.14466 172.06065 106.14466 C 170.62353 106.14466 169.24254 106.61472 168.08621 107.44226 C 167.45249 106.6799 166.37654 106.14466 165.40679 106.14466 L 165.40627 106.14466 C 164.51461 106.14466 163.75117 106.41911 163.05655 106.85935 A 2.0002 2.0002 0 0 0 162.25608 106.37307 C 159.81122 106.37307 158.03727 106.49333 156.59751 106.94926 A 2.0002 2.0002 0 0 0 156.10141 107.18697 C 154.51175 106.56557 152.9763 106.22063 151.48619 106.22063 A 2.0002 2.0002 0 0 0 150.59374 106.71465 C 149.88608 106.48955 149.19739 106.14414 148.46467 106.14414 L 148.46467 106.14466 C 146.5938 106.14466 144.82671 106.99614 143.56058 108.39362 C 143.49123 108.24014 143.41292 108.08985 143.32028 107.94507 C 142.58843 106.77554 141.12227 106.14414 139.82799 106.14414 L 139.82799 106.14466 C 139.44494 106.14466 139.07351 106.24065 138.69938 106.31623 L 137.71856 106.22838 A 2.0002 2.0002 0 0 0 137.54286 106.22063 C 135.36494 106.22063 133.30922 107.09254 131.86879 108.66492 C 132.48172 107.68514 132.81033 106.52522 132.81033 105.35143 C 132.81033 103.50412 131.88697 101.67023 130.34381 100.67729 C 128.80066 99.684364 126.89376 99.363163 124.61341 99.363163 C 123.44636 99.363163 122.08519 99.453521 120.5041 99.626713 C 118.96186 99.780937 118.03815 99.881777 117.38853 100.0117 A 2.0002 2.0002 0 0 0 115.80672 101.65605 L 115.70491 102.29115 A 2.0002 2.0002 0 0 0 116.2656 104.02128 L 116.53277 104.28896 C 116.52018 104.27983 116.61591 104.39773 116.72449 104.63468 A 2.0002 2.0002 0 0 0 116.75395 104.69514 C 116.80315 104.79344 116.84748 104.93211 116.84748 105.19898 C 116.84748 104.87005 116.76567 105.78433 116.53897 106.88467 C 116.53456 106.90608 116.52849 106.93371 116.52399 106.95546 A 2.0002 2.0002 0 0 0 115.06258 106.32191 L 114.85949 106.32243 C 114.03577 106.32243 113.15021 106.41327 112.17593 106.57823 C 111.36345 106.70382 110.71987 106.89286 110.08407 107.13685 A 2.0002 2.0002 0 0 0 108.61129 106.34775 C 107.27462 106.34775 105.66695 106.5824 103.64002 107.00869 C 103.83037 106.0307 103.93147 105.21357 103.93147 104.48636 C 103.93147 103.07598 103.41627 101.61536 102.33209 100.67368 C 101.33197 99.790771 99.988431 99.363163 98.654275 99.363163 C 97.197989 99.363163 95.768081 99.947296 94.32224 100.75171 C 94.167775 100.59406 94.059104 100.39622 93.878856 100.26543 C 92.969234 99.605348 91.873421 99.363163 90.781371 99.363163 C 89.494074 99.363163 88.229468 99.828159 86.95318 100.48247 A 2.0002 2.0002 0 0 0 85.269562 99.388484 C 82.526109 99.388484 80.650629 99.490059 79.140737 100.00188 A 2.0002 2.0002 0 0 0 77.804902 101.59972 L 77.728421 102.10718 A 2.0002 2.0002 0 0 0 78.121161 103.62285 L 78.374893 103.95306 A 2.0002 2.0002 0 0 0 78.410033 103.99802 C 78.666146 104.31196 78.731696 104.49264 78.744896 104.67705 C 78.739895 104.68154 78.72623 104.88737 78.687535 105.1132 C 78.634225 105.42451 78.549878 105.87334 78.433804 106.44335 C 78.201656 107.58336 77.847451 109.21138 77.374954 111.3123 C 76.419395 115.56113 75.902175 117.9232 75.902175 119.54901 A 2.0002 2.0002 0 0 0 77.90257 121.54889 L 78.209011 121.54889 C 80.68744 121.54889 82.334075 121.52098 83.873265 120.61148 A 2.0002 2.0002 0 0 0 84.398298 119.6875 A 2.0002 2.0002 0 0 0 86.285004 121.57421 L 86.97075 121.57421 C 89.14719 121.57421 90.774063 121.43887 92.200922 120.68176 A 2.0002 2.0002 0 0 0 93.154352 119.09581 C 93.353895 119.58837 93.600874 120.06529 93.990477 120.4549 C 94.820557 121.28498 96.024943 121.70133 97.156175 121.70133 C 98.86548 121.70133 100.54405 121.16548 102.12435 120.21925 C 102.14393 120.23936 102.16361 120.25946 102.18378 120.2792 C 102.34184 120.43396 102.54982 120.485 102.72638 120.60528 C 102.2306 121.35797 101.98844 122.24685 101.98844 123.10538 C 101.98844 124.2867 102.70047 125.53378 103.65035 126.17961 C 104.59948 126.82944 105.73655 127.08602 106.88478 127.08602 C 108.81822 127.08602 110.67431 126.28108 112.04105 124.88667 C 113.09535 123.81103 113.90151 122.43783 114.54219 120.797 A 2.0002 2.0002 0 0 0 115.77158 121.47861 C 116.12084 121.52851 116.4755 121.54889 116.8418 121.54889 C 118.05188 121.54889 119.14323 121.29802 120.2049 120.98613 C 121.55942 121.39746 122.92924 121.70133 124.30852 121.70133 C 126.50045 121.70133 128.55316 121.02464 130.11902 119.66012 A 2.0002 2.0002 0 0 0 130.13091 119.6503 C 130.32372 119.47952 130.50623 119.29915 130.67816 119.11079 C 130.83584 119.35038 131.01115 119.5788 131.20526 119.79447 A 2.0002 2.0002 0 0 0 131.2187 119.81049 C 132.37009 121.06423 134.07468 121.70082 135.81428 121.70082 C 137.95853 121.70082 139.99451 120.78261 141.42376 119.17746 C 141.53708 119.05018 141.64556 118.91944 141.75087 118.78627 C 141.91245 119.13716 142.10811 119.47119 142.3436 119.78517 C 143.25149 120.99569 144.79971 121.70133 146.3046 121.70133 C 147.36099 121.70133 148.36716 121.33905 149.36126 120.84351 C 149.41316 120.88351 149.41654 120.96095 149.47081 120.99802 C 150.22443 121.51268 151.10602 121.70133 151.94353 121.70133 C 152.93787 121.70133 153.91306 121.45207 154.91027 121.04504 A 2.0002 2.0002 0 0 0 154.92784 121.03678 C 155.08039 120.97271 155.22879 120.90692 155.37536 120.83989 A 2.0002 2.0002 0 0 0 156.89671 121.54889 L 157.0998 121.54889 C 159.40458 121.54889 160.89842 121.51082 162.2659 120.98252 A 2.0002 2.0002 0 0 0 163.54489 119.05085 L 163.52163 118.34185 C 163.52263 117.69551 163.62626 116.7648 163.86166 115.60352 A 2.0002 2.0002 0 0 0 163.86942 115.55649 C 163.91902 115.27873 163.99685 114.8615 164.06475 114.49196 C 164.12285 114.49996 164.21299 114.51366 164.21306 114.51366 A 2.0002 2.0002 0 0 0 164.42235 114.50177 C 164.47401 114.49634 164.52542 114.49004 164.57687 114.48317 C 164.5584 114.76335 164.54844 115.04636 164.54844 115.33221 C 164.54844 117.13688 164.86711 118.76029 165.96076 120.00583 A 2.0002 2.0002 0 0 0 165.9959 120.04304 C 166.98227 121.10939 168.45108 121.70133 169.90212 121.70133 C 170.94646 121.70133 171.95796 121.36453 172.96447 120.90242 C 173.70023 121.39312 174.5576 121.70133 175.38861 121.70133 C 176.83902 121.70133 178.25185 121.24462 179.60954 120.45645 C 179.80301 120.58134 180.00443 120.69623 180.21674 120.80888 A 2.0002 2.0002 0 0 0 180.23224 120.81663 C 181.45175 121.45077 182.85186 121.70133 184.38083 121.70133 C 186.04832 121.70133 187.65929 121.21089 188.97073 120.24458 A 2.0002 2.0002 0 0 0 188.97434 120.24251 C 190.3259 119.24049 191.25586 117.64239 191.25586 115.96887 C 191.25586 114.9873 190.88388 114.11036 190.38666 113.27342 C 190.93791 112.4391 191.35714 111.56438 191.35714 110.53354 C 191.35714 109.23285 190.65463 107.80739 189.53297 107.08207 C 188.4935 106.39558 187.26838 106.14473 185.98073 106.14466 L 185.98021 106.14466 C 184.17915 106.14475 182.47945 106.61053 181.20996 107.67842 C 181.76143 105.10763 182.06262 103.53454 182.06262 102.32784 C 182.06262 101.85855 182.04489 101.45171 181.99389 101.0566 C 181.94289 100.66149 181.92403 100.29243 181.56239 99.704744 A 2.0002 2.0002 0 0 0 179.85914 98.753898 z M 81.509585 101.47053 L 81.544725 101.51549 L 81.810342 101.85913 L 81.794839 101.95887 C 81.690013 101.80136 81.6287 101.61655 81.509585 101.47053 z M 119.37291 101.47259 L 119.81629 101.91598 L 119.78735 102.09943 C 119.64686 101.89376 119.56505 101.66473 119.37291 101.47259 z M 120.33202 102.9061 L 120.36148 102.96863 C 120.35548 102.95583 120.34361 102.94629 120.33771 102.93349 C 120.33371 102.92449 120.33602 102.9146 120.33202 102.9061 z M 177.93367 103.03529 C 177.86177 103.63645 177.62335 105.35581 176.93942 108.50782 A 2.0002 2.0002 0 0 0 176.93735 108.51764 C 176.1658 112.15249 175.74983 114.51078 175.74983 116.14663 C 175.74983 116.5824 175.75414 116.97038 175.94155 117.51761 C 175.94755 117.53501 175.9739 117.56069 175.9803 117.57859 C 175.78612 117.61309 175.56168 117.70158 175.38861 117.70158 C 175.28319 117.70158 175.21595 117.70884 175.17364 117.71967 A 2.0002 2.0002 0 0 0 174.77366 117.34191 A 2.0002 2.0002 0 0 0 175.07597 116.83238 L 175.07442 116.90473 C 175.13142 115.74968 175.44359 113.6252 176.02733 110.72319 A 2.0002 2.0002 0 0 0 175.93948 109.72274 A 2.0002 2.0002 0 0 0 176.4025 109.13104 C 176.98415 106.47432 177.24189 104.65779 177.29857 103.12934 C 177.51377 103.08984 177.72268 103.06469 177.93367 103.03529 z M 90.781371 103.36344 C 91.297984 103.36344 91.484087 103.46775 91.531196 103.50193 C 91.578306 103.53613 91.623671 103.54058 91.697077 103.87503 A 2.0002 2.0002 0 0 0 92.222626 104.4843 A 2.0002 2.0002 0 0 0 91.673823 105.35556 C 91.573033 106.0179 91.317465 107.26445 90.916246 108.98635 C 90.053548 112.58902 89.615286 115.15711 89.433649 117.26181 C 89.261076 117.30491 88.919061 117.31895 88.652302 117.36155 C 88.813778 116.04922 88.896342 114.92643 89.423831 112.72669 C 89.82527 111.0526 90.128609 109.70665 90.33592 108.67009 C 90.543232 107.63353 90.671817 107.0228 90.671817 106.29091 C 90.671817 105.49688 90.787442 104.85206 90.074437 103.86108 C 89.989307 103.73796 89.871498 103.72349 89.777297 103.62492 C 90.142929 103.51152 90.548594 103.36344 90.781371 103.36344 z M 98.654275 103.36344 C 99.245206 103.36344 99.4715 103.47623 99.689354 103.66988 A 2.0002 2.0002 0 0 0 99.713125 103.69158 C 99.839257 103.80019 99.931716 103.87037 99.931716 104.48636 C 99.931716 104.98825 99.610899 106.94686 98.880618 109.7186 A 2.0002 2.0002 0 0 0 98.877 109.72687 C 98.131755 112.60387 97.722549 114.62826 97.722549 116.22312 C 97.722549 116.58428 97.716446 116.94571 97.949408 117.49642 C 97.956308 117.51272 97.987827 117.53243 97.995917 117.54913 C 97.716386 117.59963 97.423954 117.70158 97.156175 117.70158 C 96.831144 117.70158 96.868663 117.67756 96.818211 117.62716 C 96.831221 117.64016 96.744314 117.61145 96.744314 117.11143 C 96.744314 116.78428 97.045517 114.81217 97.726683 112.00218 L 97.72875 111.99392 C 98.08722 110.54263 98.358099 109.36714 98.544721 108.44736 C 98.731756 107.52554 98.85168 106.95722 98.851679 106.26558 C 98.851679 105.48991 98.946818 104.8287 98.242414 103.86315 C 98.135405 103.71297 97.979039 103.6744 97.853807 103.55877 C 98.12375 103.49317 98.455842 103.36344 98.654275 103.36344 z M 83.687747 103.5195 C 83.688847 103.5494 83.700563 103.55691 83.701183 103.58771 A 2.0002 2.0002 0 0 0 84.148184 104.29103 A 2.0002 2.0002 0 0 0 83.478457 105.32611 C 83.342347 106.08228 83.032972 107.47961 82.562751 109.42766 A 2.0002 2.0002 0 0 0 82.562751 109.4318 C 81.696561 113.04315 81.250223 115.38529 81.048631 117.24993 C 80.933769 117.27463 80.534753 117.29007 80.316376 117.32847 C 80.503508 116.11265 80.620507 115.11131 81.277558 112.18977 C 81.753324 110.07431 82.10941 108.43059 82.351394 107.24227 C 82.472387 106.64811 82.565743 106.16998 82.630964 105.78913 C 82.696184 105.40829 82.748269 105.23497 82.748269 104.76593 C 82.748269 104.37151 82.623615 103.99689 82.527094 103.61717 C 82.890369 103.57667 83.207912 103.5487 83.687747 103.5195 z M 121.88645 103.54275 L 121.88697 103.54275 C 121.84527 103.83878 121.57685 105.60899 120.93354 108.52746 A 2.0002 2.0002 0 0 0 121.22241 109.76149 A 2.0002 2.0002 0 0 0 120.47827 110.44311 C 119.81246 113.3624 119.38339 115.47795 119.17964 116.90421 A 2.0002 2.0002 0 0 0 119.30056 117.15794 C 119.07284 117.23464 118.73717 117.23554 118.47477 117.2892 C 118.66145 116.09406 118.76395 115.1553 119.39823 112.43368 C 119.86609 110.42613 120.21808 108.8516 120.45708 107.69134 C 120.69609 106.53108 120.84775 106.05284 120.84775 105.19898 C 120.84775 104.6714 120.65625 104.16423 120.49997 103.65437 C 120.6992 103.63307 120.67941 103.62945 120.90046 103.60735 A 2.0002 2.0002 0 0 0 120.9201 103.60528 C 121.3104 103.56238 121.53095 103.57405 121.88645 103.54275 z M 127.73415 103.88072 C 127.86472 103.93752 128.0891 103.98267 128.1796 104.04091 C 128.7023 104.37723 128.81057 104.54021 128.81057 105.35143 C 128.81057 106.13094 128.64608 106.48022 128.18736 106.90224 A 2.0002 2.0002 0 0 0 128.17185 106.91619 C 128.02876 107.05052 127.77455 107.08261 127.61323 107.19524 C 127.86636 106.46391 128.01166 105.69879 128.01166 104.91993 C 128.01166 104.57368 127.79639 104.22872 127.73415 103.88072 z M 158.79479 108.051 L 159.2635 108.52126 L 159.24024 108.69748 C 159.10105 108.48255 159.00277 108.25898 158.79479 108.051 z M 184.70329 108.4024 C 184.70129 108.4034 184.70287 108.40609 184.70122 108.40809 C 184.69922 108.41009 184.69495 108.40809 184.69295 108.41016 L 184.70329 108.4024 z M 159.60508 109.21476 L 159.60559 109.21476 L 159.62471 109.25765 C 159.62171 109.25065 159.61478 109.24543 159.61128 109.23853 C 159.60728 109.23153 159.60908 109.22166 159.60508 109.21476 z M 126.46291 109.32586 L 126.46291 109.32638 L 126.43759 109.35945 C 126.44359 109.35245 126.44533 109.3434 126.45103 109.3362 C 126.45403 109.3322 126.46021 109.32986 126.46291 109.32586 z M 131.09261 109.65091 C 131.02495 109.75115 130.95949 109.85245 130.89623 109.95528 C 130.87361 109.93286 130.85109 109.91065 130.82802 109.88862 C 130.84912 109.86932 130.8774 109.85903 130.8983 109.83953 C 130.96476 109.77822 131.02937 109.7152 131.09261 109.65091 z M 130.704 109.71189 L 130.72053 109.72635 C 130.71653 109.72335 130.71287 109.7216 130.70917 109.7186 C 130.70753 109.71696 130.70595 109.71401 130.704 109.71189 z M 126.51562 110.039 L 126.57608 110.10359 C 126.56518 110.09119 126.54791 110.0884 126.53681 110.0762 C 126.52601 110.0646 126.52672 110.0505 126.51562 110.039 z M 139.92979 110.05863 A 2.0002 2.0002 0 0 0 139.95305 110.09584 C 140.03695 110.22552 140.1985 110.71865 140.25174 111.48232 C 140.10174 111.45717 139.91579 111.42149 139.8838 111.43064 C 139.86941 111.38284 139.84763 111.2675 139.84763 111.01568 C 139.84763 110.84546 139.8622 110.65908 139.8962 110.45499 A 2.0002 2.0002 0 0 0 139.85538 110.12323 C 139.93498 110.10543 139.94259 110.07943 139.92979 110.05863 z M 185.85929 110.41779 L 187.32638 110.58005 C 187.31938 110.59595 187.07026 111.07227 186.6427 111.6327 C 186.5925 111.6217 186.56135 111.62597 186.48044 111.57637 C 186.2254 111.41942 185.85929 110.78084 185.85929 110.45706 C 185.85929 110.40386 185.85529 110.45489 185.85929 110.41779 z M 152.6055 110.47256 C 152.77177 110.49836 152.95798 110.55501 153.13467 110.594 C 152.9701 111.30109 152.77248 111.91557 152.63858 112.71894 C 152.37777 114.26682 152.23033 115.33619 152.23033 116.2226 C 152.23033 116.62369 152.23149 116.97616 152.3926 117.48815 C 152.4006 117.51255 152.43464 117.55257 152.44324 117.57807 C 152.29572 117.60287 152.04405 117.70106 151.94353 117.70106 C 151.82804 117.70106 151.78685 117.69767 151.773 117.69589 A 2.0002 2.0002 0 0 0 151.37095 117.27938 A 2.0002 2.0002 0 0 0 151.65621 116.69699 C 151.71811 114.90265 152.0134 112.99478 152.55486 110.97227 A 2.0002 2.0002 0 0 0 152.6055 110.47256 z M 161.01378 110.48238 A 2.0002 2.0002 0 0 0 161.10938 110.6033 A 2.0002 2.0002 0 0 0 160.56264 111.52366 C 160.52274 111.76329 160.42331 112.27533 160.27325 112.99231 A 2.0002 2.0002 0 0 0 160.2655 113.03726 C 160.12946 113.76848 160.01764 114.37225 159.93167 114.85369 L 159.94149 114.80873 C 159.74733 115.76659 159.69794 116.54649 159.63867 117.34553 C 159.48104 117.36813 159.21599 117.37454 158.99426 117.39824 C 159.06996 116.84487 159.1139 116.38827 159.39062 114.96686 L 159.39269 114.95291 C 159.60429 113.90303 159.76547 113.07429 159.87534 112.459 C 159.98581 111.84038 160.06655 111.67197 160.06655 111.01568 C 160.06655 110.85858 159.97387 110.7286 159.95338 110.57436 C 160.30668 110.53836 160.56948 110.50518 161.01378 110.48238 z M 112.70096 110.55111 C 112.67914 110.70556 112.67388 110.72173 112.65032 110.89062 A 2.0002 2.0002 0 0 0 112.65032 110.89476 C 112.20097 114.15673 111.71195 116.59659 111.24782 118.0938 A 2.0002 2.0002 0 0 0 111.24627 118.10207 C 111.19917 118.25623 111.13866 118.34445 111.08969 118.49068 A 2.0002 2.0002 0 0 0 110.90986 117.58221 A 2.0002 2.0002 0 0 0 111.40027 116.96312 C 111.53976 116.07386 111.72633 114.75776 111.96302 113.00006 L 111.96457 112.98455 C 112.1272 111.84628 112.20756 111.31956 112.30667 110.64671 C 112.46845 110.61021 112.49752 110.58541 112.70096 110.55111 z M 106.62847 110.62501 L 106.62898 110.62501 C 106.55278 111.15728 106.52599 111.51252 106.27913 112.60732 A 2.0002 2.0002 0 0 0 106.27552 112.62489 C 106.0867 113.50033 105.94303 114.20125 105.8435 114.74414 C 105.744 115.28703 105.67193 115.53568 105.67193 116.09547 C 105.67193 116.44981 105.77682 116.86901 105.95512 117.28713 C 105.79271 117.30553 105.56373 117.44733 105.412 117.44733 C 105.17904 117.44733 105.05679 117.42606 104.99807 117.41116 C 104.98685 117.35787 104.97224 117.25478 104.97224 117.06079 C 104.97224 116.94643 105.11883 115.80743 105.48021 114.23047 A 2.0002 2.0002 0 0 0 105.48228 114.22634 C 105.83433 112.67411 106.00454 111.66258 106.03884 110.70717 C 106.25331 110.67397 106.43475 110.65021 106.62847 110.62501 z M 183.85528 110.73043 C 183.92678 111.54931 184.20055 111.83512 184.43147 112.16807 C 184.69385 112.54639 185.00823 112.92303 185.40454 113.36541 A 2.0002 2.0002 0 0 0 186.46494 113.4822 A 2.0002 2.0002 0 0 0 186.44943 114.5333 C 187.1339 115.32514 187.2561 115.83301 187.2561 115.96887 C 187.2561 116.23247 187.0058 116.42682 186.84579 116.62516 C 186.75289 116.32558 186.74396 115.99697 186.57811 115.74821 C 186.45687 115.56634 186.37259 115.43016 186.34556 115.38286 C 186.16588 115.06842 185.99683 114.86071 185.78901 114.61133 C 185.64036 114.41878 185.51436 114.25612 185.40815 114.12867 C 184.99182 113.62906 184.61941 113.17453 184.29091 112.7639 C 183.63047 111.93836 183.50956 111.39678 183.50956 111.34589 C 183.50956 110.98725 183.54275 110.97061 183.65994 110.85342 A 2.0002 2.0002 0 0 0 183.67389 110.83998 C 183.71759 110.79538 183.80545 110.7721 183.85528 110.73043 z M 170.05819 111.06271 L 170.0587 111.06271 C 169.9978 111.23509 169.87477 111.37645 169.82616 111.55467 A 2.0002 2.0002 0 0 0 169.81634 111.59756 C 169.49154 112.89672 169.32386 114.19689 169.32386 115.48621 C 169.32386 116.18526 169.35654 116.81109 169.68146 117.53931 C 169.69916 117.57891 169.76089 117.61581 169.78275 117.6561 C 169.39394 117.6368 169.18125 117.57375 168.96058 117.33984 C 168.83255 117.18697 168.54872 116.59338 168.54872 115.33221 C 168.54872 113.65712 168.94309 112.43126 169.68353 111.41617 C 169.81188 111.24413 169.93505 111.19433 170.05819 111.06271 z M 134.81848 111.3924 C 134.80728 111.4308 134.79474 111.45875 134.78334 111.49782 A 2.0002 2.0002 0 0 0 134.77713 111.52159 C 134.47713 112.60164 134.32187 113.69932 134.32187 114.79891 C 134.32187 115.70662 134.42591 116.5113 134.81021 117.33778 C 134.6344 117.24468 134.31731 117.26287 134.17355 117.1073 C 133.81368 116.70394 133.54879 116.0845 133.54879 114.9002 C 133.54879 113.43147 133.92786 112.40135 134.71874 111.47664 A 2.0002 2.0002 0 0 0 134.72649 111.4663 C 134.75549 111.4319 134.78948 111.4252 134.81848 111.3924 z M 139.89155 111.45286 C 139.89742 111.46166 139.89666 111.46445 139.89155 111.45286 z M 127.5197 112.48433 C 127.67535 112.57953 127.91675 112.58412 128.05661 112.70912 A 2.0002 2.0002 0 0 0 128.07418 112.72462 C 128.40873 113.01647 128.58216 113.315 128.58216 114.18965 C 128.58216 115.28216 128.28762 115.93331 127.48249 116.64841 C 127.25019 116.85009 126.96526 116.96125 126.70114 117.10523 C 127.30056 116.02651 127.62873 114.80908 127.62873 113.55454 C 127.62873 113.18609 127.55908 112.83988 127.5197 112.48433 z M 180.0829 113.50132 C 180.15228 113.63937 180.22547 113.77618 180.30252 113.91215 C 180.19649 113.98629 180.09359 114.06444 179.99298 114.14572 C 180.0188 113.94641 180.04894 113.73098 180.0829 113.50132 z M 145.92064 114.12609 C 145.89458 114.4484 145.88085 114.76589 145.88085 115.07848 C 145.88085 115.54847 145.89478 115.95209 145.93718 116.33422 C 145.97968 116.71636 145.98388 117.0459 146.29685 117.62716 C 146.30914 117.64996 146.34007 117.65757 146.35317 117.67987 C 146.34417 117.68007 146.3131 117.70158 146.3046 117.70158 C 145.77749 117.70158 145.7526 117.6644 145.54289 117.3848 C 145.34191 117.11682 145.10519 116.5031 145.10519 115.38286 C 145.10519 115.05926 145.12237 114.75033 145.15428 114.45268 C 145.39588 114.36966 145.62858 114.27786 145.84364 114.16794 A 2.0002 2.0002 0 0 0 145.92064 114.12609 z M 140.77367 117.35328 L 140.7561 117.37498 C 140.7581 117.37198 140.75772 117.36816 140.75972 117.36516 C 140.76372 117.36016 140.76997 117.35798 140.77367 117.35328 z M 177.84944 119.01778 C 177.93364 119.02948 177.99878 119.11131 178.07992 119.11131 A 2.0002 2.0002 0 0 0 178.2582 119.09736 C 178.26771 119.1143 178.27739 119.13088 178.28714 119.14749 L 177.93574 119.26169 L 177.84944 119.01778 z M 154.83172 119.08237 C 154.83197 119.08757 154.83199 119.09269 154.83224 119.09788 L 154.52735 119.18366 L 154.49996 119.10718 C 154.50396 119.10721 154.5063 119.11131 154.5103 119.11131 A 2.0002 2.0002 0 0 0 154.83172 119.08237 z M 108.8614 124.17922 L 108.8614 124.17974 L 108.79474 124.23451 C 108.79774 124.23251 108.79794 124.22718 108.80094 124.22418 C 108.81934 124.20808 108.8431 124.19532 108.8614 124.17922 z "
       transform="translate(6.2500021e-8)" />
    <g
       id="logo-boards-text"
       part="logo-boards-text"
       transform="translate(6.2500021e-8)">
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:var(--brand-1, #60b0ff);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 189.25678,115.96798 q 0,1.5748 -1.4732,2.667 -1.4478,1.0668 -3.4036,1.0668 -1.9558,0 -3.2258,-0.6604 -1.2446,-0.6604 -1.2446,-1.2446 0,-0.6096 0.762,-1.524 0.7874,-0.9398 1.6002,-1.0922 1.1684,0.635 2.1082,2.8194 0.7366,0 0.7366,-0.4826 0,-0.3556 -0.2032,-0.6604 -0.2032,-0.3048 -0.3048,-0.4826 -0.1016,-0.1778 -0.3556,-0.4826 -0.254,-0.3302 -0.381,-0.4826 -0.635,-0.762 -1.143,-1.397 -1.2192,-1.524 -1.2192,-2.667 0,-1.1684 0.7366,-1.905 1.27,-1.2954 3.7338,-1.2954 1.5494,0 2.4638,0.6096 0.9144,0.5842 0.9144,1.778 0,1.1684 -1.397,2.6924 1.2954,1.4986 1.2954,2.7432 z m -1.7018,-4.6482 q 0.3048,-0.4826 0.3048,-0.8636 0,-0.381 -0.3302,-0.5842 -0.3302,-0.2032 -0.7874,-0.2032 -0.4572,0 -0.7112,0.2286 -0.2286,0.2032 -0.2286,0.5588 0,0.3556 1.0922,1.5748 0.3556,-0.254 0.6604,-0.7112 z"
         id="logo-s"
         class="logo-letter"
         part="logo-s logo-letter logo-boards-letter"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:var(--brand-1, #60b0ff);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 175.38838,119.70178 q -1.5748,0 -2.032,-1.2192 -1.9304,1.2192 -3.4544,1.2192 -1.4986,0 -2.4384,-1.016 -0.9144,-1.0414 -0.9144,-3.3528 0,-3.0226 1.524,-5.1054 1.5494,-2.0828 3.9878,-2.0828 1.1938,0 2.3876,0.5588 0.9398,-4.2926 0.9398,-6.1722 0,-0.5588 -0.0762,-1.1176 2.3622,-0.6604 4.5466,-0.6604 0.2032,0.3302 0.2032,1.5748 0,1.2192 -1.1684,6.604 -1.143,5.3848 -1.143,7.2136 0,0.9652 0.3302,0.9652 l 1.0922,-0.3556 0.4572,1.2954 q -2.2352,1.651 -4.2418,1.651 z m -3.3274,-2.5654 q 0.4572,0 1.016,-0.3048 v -0.0254 q 0.1016,-2.0574 0.9906,-6.477 -0.508,-0.1524 -0.7366,-0.1524 -0.5334,0 -0.9398,0.5334 -0.4064,0.5334 -0.635,1.3716 -0.4318,1.7272 -0.4318,3.4036 0,1.651 0.7366,1.651 z"
         id="logo-d"
         class="logo-letter"
         part="logo-d logo-letter logo-boards-letter"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:var(--brand-1, #60b0ff);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 157.10037,119.54938 h -0.2032 q -0.0762,-0.3556 -0.0762,-1.0922 0,-0.762 0.6096,-3.8862 0.635,-3.1496 0.635,-3.556 0,-0.4318 -0.2286,-0.8636 -0.2286,-0.4572 -0.4572,-0.6858 l -0.2286,-0.2286 0.0508,-0.381 q 1.524,-0.4826 5.0546,-0.4826 0.3302,0.635 0.4064,1.4986 1.5494,-1.7272 2.7432,-1.7272 1.5494,0 1.7018,2.6162 -0.0508,0.0508 -0.127,0.1778 -0.0762,0.1016 -0.3556,0.381 -0.2794,0.2794 -0.5842,0.508 -0.8636,0.5842 -1.8288,0.6858 -0.0254,0 -0.3556,-0.5588 -0.3048,-0.5588 -0.5334,-0.5588 -0.2032,0 -0.7874,0.4572 -0.0762,0.4572 -0.3048,1.5494 -0.2032,1.0922 -0.3302,1.8034 -0.381,1.8796 -0.381,3.1496 l 0.0254,0.762 q -1.1176,0.4318 -4.445,0.4318 z"
         id="logo-r"
         class="logo-letter"
         part="logo-r logo-letter logo-boards-letter"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:var(--brand-1, #60b0ff);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 155.52557,109.10998 q -0.5334,1.651 -0.9144,3.937 -0.381,2.2606 -0.381,3.175 0,0.889 0.2794,0.889 l 1.27,-0.3556 0.4572,1.27 q -0.8128,0.635 -2.0828,1.1684 -1.2446,0.508 -2.2098,0.508 -1.651,0 -2.0828,-1.4224 -2.0066,1.4224 -3.556,1.4224 -1.524,0 -2.3622,-1.1176 -0.8382,-1.1176 -0.8382,-3.2004 0,-2.8702 1.4732,-5.0546 1.4732,-2.1844 3.8862,-2.1844 1.3208,0 2.6924,0.7366 0.2032,-0.4572 0.3302,-0.6604 1.8288,0 4.0386,0.889 z m -7.6454,5.969 q 0,1.27 0.1778,1.6002 0.1778,0.3302 0.6604,0.3302 0.4826,0 0.9398,-0.381 0.1016,-2.9464 0.9652,-6.1722 -0.381,-0.2286 -0.889,-0.2286 -0.4826,0 -0.889,0.5588 -0.381,0.5588 -0.5842,1.397 -0.381,1.6002 -0.381,2.8956 z"
         id="logo-a"
         class="logo-letter"
         part="logo-a logo-letter logo-boards-letter"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:var(--brand-1, #60b0ff);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 135.81519,119.70178 q -1.9812,0 -3.1242,-1.2446 -1.143,-1.27 -1.143,-3.556 0,-2.794 1.651,-4.7244 1.651,-1.9558 4.3434,-1.9558 l 1.143,0.1016 q 0.6096,-0.1778 1.143,-0.1778 1.27,0 1.8034,0.8636 0.5588,0.8636 0.635,2.4638 1.0668,-0.0508 2.032,-0.3302 l 0.3556,-0.1016 q 0.1778,0.1778 0.254,1.0668 l 0.0254,0.2794 q -1.143,0.5842 -2.794,0.9144 -0.5588,2.6924 -2.2098,4.5466 -1.651,1.8542 -4.1148,1.8542 z m 0.508,-4.9022 q 0,2.3622 1.1938,2.3622 0.8382,0 1.7018,-1.0668 0.889,-1.0668 1.2192,-2.5908 -2.5908,0 -2.5908,-2.4892 0,-0.4318 0.0762,-0.889 -0.254,0 -0.381,0.0762 -0.4318,0.4572 -0.8382,1.8542 -0.381,1.3716 -0.381,2.7432 z"
         id="logo-o"
         class="logo-letter"
         part="logo-o logo-letter logo-boards-letter"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:var(--brand-1, #60b0ff);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 124.30898,119.70178 q -2.032,0 -4.064,-0.7112 -1.4732,0.5588 -3.4036,0.5588 -0.4318,0 -0.7874,-0.0508 0,-1.524 1.397,-7.5184 1.397,-5.9944 1.397,-6.7818 0,-0.7874 -0.3048,-1.397 -0.2794,-0.6096 -0.5842,-0.9144 l -0.2794,-0.2794 0.1016,-0.635 q 0.635,-0.127 2.921,-0.3556 2.3114,-0.254 3.9116,-0.254 6.1976,0 6.1976,3.9878 0,1.8542 -1.27,3.0226 -1.2446,1.1684 -3.0988,1.5748 1.7526,0.2032 2.9464,1.27 1.1938,1.0414 1.1938,2.9718 0,2.3876 -1.778,3.9624 -1.778,1.5494 -4.4958,1.5494 z m -0.8636,-8.89 q -0.4572,0 -1.016,0.0762 -0.9906,4.3434 -1.27,6.2992 0.5588,0.3302 1.524,0.3302 1.4732,0 2.2098,-1.2192 0.7366,-1.2192 0.7366,-2.7432 0,-1.5494 -0.5588,-2.1336 -0.5334,-0.6096 -1.6256,-0.6096 z m -0.3302,-1.8542 q 1.1176,0 1.7526,-0.8382 1.143,-1.4478 1.143,-3.2004 0,-1.778 -1.2192,-1.778 l -0.8382,0.1016 q -0.0254,0.9906 -1.0668,5.715 z"
         id="logo-b"
         class="logo-letter"
         part="logo-b logo-letter logo-boards-letter"
         transform="translate(0)" />
    </g>
    <g
        id="logo-my-text"
        part="logo-my-text"
       transform="translate(6.2500021e-8)">
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:var(--brand-3, #b8dcff);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 114.8602,108.32258 h 0.2032 q -0.127,0.6604 -0.4318,2.8448 -0.6858,4.9784 -1.4732,7.5184 -1.9558,6.4008 -6.2738,6.4008 -1.2954,0 -2.1082,-0.5588 -0.7874,-0.5334 -0.7874,-1.4224 0,-0.8636 0.4064,-1.4478 0.4318,-0.5588 1.2192,-0.9398 1.3462,-0.6604 3.302,-1.0922 0.2032,-0.9652 0.254,-1.2446 -1.9812,1.0668 -3.7592,1.0668 -2.4384,0 -2.4384,-2.3876 0,-0.8382 0.5588,-3.2766 0.5588,-2.4638 0.5588,-3.4036 0,-0.9398 -0.127,-1.397 2.9972,-0.635 4.6482,-0.635 0.2032,0.3048 0.2032,1.2192 0,0.889 -0.5842,3.4798 -0.5588,2.5908 -0.5588,3.048 0,0.7874 0.762,0.7874 0.4318,0 0.9906,-0.2286 0.2032,-1.2954 0.5588,-3.937 0.381,-2.667 0.5334,-3.6576 0.6604,-0.3048 1.9812,-0.508 1.3462,-0.2286 2.3622,-0.2286 z m -9.0678,14.3002 q 0,0.5842 0.762,0.5842 0.381,0 0.9906,-0.5334 0.635,-0.508 1.016,-1.524 -2.7686,0.4826 -2.7686,1.4732 z"
         id="logo-y"
         class="logo-letter logo-my-letter"
         part="logo-y logo-letter logo-my-letter"
         transform="translate(6.2500021e-8)" />
      <path
         style="color:#000000;-inkscape-font-specification:'Trebuchet MS Bold';fill:var(--brand-3, #b8dcff);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke markers fill"
         d="m 78.208009,119.54938 h -0.3048 q 0,-1.4732 1.4224,-7.7978 1.4224,-6.3246 1.4224,-6.985 0,-1.0668 -0.7874,-2.032 l -0.254,-0.3302 0.0762,-0.508 q 1.4986,-0.508 5.4864,-0.508 0.4064,0.9144 0.4318,2.159 2.9718,-2.1844 5.08,-2.1844 2.413,0 2.8702,2.0828 2.870199,-2.0828 5.003799,-2.0828 1.447802,0 2.362202,0.8128 0.9144,0.7874 0.9144,2.3114 0,1.4986 -1.1176,5.7404 -1.092202,4.2164 -1.092202,5.9944 0,0.6604 0.279402,0.6604 0.5334,0 1.2954,-0.3048 l 0.5334,1.4478 q -2.362202,1.6764 -4.673602,1.6764 -1.0922,0 -1.7526,-0.6604 -0.660399,-0.6604 -0.660399,-1.9304 0,-1.2954 1.041399,-5.588 1.0668,-4.318 1.0668,-5.2578 0,-0.9398 -0.2286,-1.2446 -0.2286,-0.3302 -0.889,-0.3302 -0.660399,0 -2.082799,0.9652 -0.1778,1.1684 -0.7874,3.7846 -1.6002,6.6802 -1.6002,9.4742 -1.2446,0.6604 -4.2926,0.6604 h -0.6858 q 0,-2.3368 1.1938,-7.3152 1.1938,-4.9784 1.1938,-5.969 0,-0.9906 -0.2286,-1.2954 -0.2032,-0.3048 -0.889,-0.3048 -0.6604,0 -2.1082,0.9906 -0.2286,1.27 -0.9398,4.2164 -1.651,6.8834 -1.651,8.9916 -1.1176,0.6604 -4.6482,0.6604 z"
         id="logo-m"
         class="logo-letter logo-my-letter"
         part="logo-m logo-letter logo-my-letter"
         transform="translate(6.2500021e-8)" />
    </g>
  </g>
</svg>`;

// src/assets/icons/magnifying-glass.ts
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

// src/assets/icons/plus.ts
var PlusIcon = `<svg id="icon-definition_plus" class="icon plus" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path
    style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-opacity:1;-inkscape-stroke:none"
    d="M 11.406117,0.76837147 A 1.6733008,1.6733014 0 0 0 9.7322668,2.4422315 v 7.29197 h -7.29198 a 1.6733008,1.6733014 0 0 0 -1.67190999,1.6738595 1.6733008,1.6733014 0 0 0 1.67190999,1.67239 h 7.29198 v 7.29343 a 1.6733008,1.6733014 0 0 0 1.6738502,1.67241 1.6733008,1.6733014 0 0 0 1.67433,-1.67241 v -7.29343 h 7.29149 a 1.6733008,1.6733014 0 0 0 1.6724,-1.67239 1.6733008,1.6733014 0 0 0 -1.6724,-1.6738595 h -7.29149 v -7.29197 a 1.6733008,1.6733014 0 0 0 -1.67433,-1.67386003 z" />
</svg>`;

// src/assets/icons/profile.ts
var Profile = `<svg id="icon-definition_profile" class="icon profile" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
   style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
   d="m 11.405696,0.60086147 c -2.6349905,0 -4.7961505,2.16117003 -4.7961505,4.79616003 -1e-5,1.66616 0.86481,3.14225 2.16641,4.00292 h -0.0536 c -1.59386,0 -3.77968,1.8748995 -3.77968,5.4964695 v 1.82092 c 0,3.62158 -0.69262,5.49647 1.97372,5.49647 h 8.9799305 c 2.66634,0 1.97371,-1.87489 1.97371,-5.49647 v -1.82092 c 0,-3.62157 -2.18581,-5.4964695 -3.77968,-5.4964695 h -0.0549 c 1.30196,-0.86063 2.16702,-2.33662 2.16702,-4.00292 0,-2.635 -2.16178,-4.79618003 -4.79677,-4.79616003 z" />
</svg>`;

// src/assets/icons/stylus.ts
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

// src/assets/icons/task.ts
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

// src/assets/icons/taskboard.ts
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

// src/assets/icons/tasklist.ts
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

// src/assets/icons/trash.ts
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

// src/assets/icons/undo-redo.ts
var UndoRedo = `<svg id="icon-definition_undo-redo" class="icon undo-redo" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
   style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,CanvasText);fill-opacity:1;stroke-width:0.999999;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
   d="M 8.7359009 1.1063924 C 8.3768905 1.0950243 8.0017196 1.1736712 7.641394 1.3523722 L 1.6107544 6.1205566 L 1.5916341 6.1386434 L 1.53479 6.1939372 C 1.0620233 6.6537208 0.70744486 7.6004515 1.0769368 8.152474 L 5.3030355 14.40894 C 6.1798306 15.219356 7.5994445 15.083541 8.4749349 14.106116 C 9.2135837 13.277519 9.3398045 12.086041 8.7787923 11.23549 L 11.334192 11.410673 C 14.129266 11.815808 17.330477 13.067707 18.931144 18.826241 C 19.313756 19.953163 19.735424 21.309718 20.245793 22.173324 C 20.976132 22.497497 21.420713 20.679238 21.478792 18.791101 C 21.506716 14.251463 18.262689 8.6142076 13.845667 6.7716797 C 13.291103 6.5403477 11.805521 5.8978235 10.30118 5.3355916 L 9.7994019 5.1107992 C 10.609379 4.4184442 10.916638 3.2966427 10.55026 2.3703979 C 10.238366 1.5905459 9.5257236 1.1314023 8.7359009 1.1063924 z " />
</svg>`;

// src/assets/icons/restore.ts
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

// src/assets/icons/copy.ts
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

// src/assets/icons/data.ts
var Data = `<svg id="icon-definition_data" class="icon data" viewBox="0 0 22.813 22.813" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
  <path
      class="path primary"
     style="stroke-width:0.726972;display:inline;fill:var(--icon-primary-color,CanvasText);stroke-linecap:round;stroke-linejoin:round"
     d="m -14.158826,11.788428 c -5.538195,0 -10.045062,0.557497 -10.220048,1.253153 h -0.0088 v 2.710946 0.05788 h 0.02791 a 10.228635,1.2947637 0 0 0 10.200927,1.236617 10.228635,1.2947637 0 0 0 10.2009281,-1.236617 h 0.018603 v -0.03927 a 10.228635,1.2947637 0 0 0 0.00879,-0.0186 10.228635,1.2947637 0 0 0 -0.00879,-0.05478 v -2.568319 c 0.00422,-0.01529 0.0093,-0.03057 0.0093,-0.04599 1.3e-6,-0.715078 -4.579713,-1.295011 -10.2288331,-1.295011 z"
     transform="matrix(0.964335,0,0,1.9622037,25.037832,-11.98175)" />
  <path
      class="path secondary"
     style="stroke-width:0.726972;display:inline;fill:var(--icon-secondary-color,canvas);stroke-linecap:round;stroke-linejoin:round"
     d="m -14.158309,11.289233 c -2.841662,0 -5.414259,0.144121 -7.296712,0.382406 -0.941227,0.119143 -1.706167,0.258633 -2.271696,0.427881 -0.282765,0.08463 -0.515786,0.172823 -0.716752,0.297139 -0.188462,0.116582 -0.410958,0.30737 -0.438216,0.624252 a 0.50005,0.50005 0 0 0 -0.0052,0.02015 v 0.04289 2.668054 0.05839 a 0.50005,0.50005 0 0 0 0.06149,0.171049 l -0.0047,-0.0031 c 0.107704,0.303283 0.317901,0.420451 0.525549,0.527616 0.207647,0.107166 0.451116,0.19158 0.742074,0.271302 0.581916,0.159443 1.354229,0.293075 2.287199,0.406176 1.865942,0.2262 4.368416,0.362695 7.116878,0.363286 2.748462,-5.91e-4 5.2514532,-0.137086 7.1173951,-0.363286 0.9329709,-0.113101 1.7052831,-0.246733 2.2871989,-0.406176 0.2909578,-0.07972 0.5323594,-0.164136 0.7400065,-0.271302 0.20534,-0.105975 0.4126465,-0.225552 0.5214152,-0.521415 l -0.00568,0.02119 c 0.00441,-0.0083 0.00772,-0.01872 0.011886,-0.02739 0.00551,-0.01146 0.012563,-0.02309 0.01757,-0.03514 a 0.50005,0.50005 0 0 0 0.026872,-0.130741 0.50005,0.50005 0 0 0 0.00207,-0.0021 v -0.0078 a 0.50005,0.50005 0 0 0 0.00982,-0.04703 c 1.358e-4,-0.02019 -0.0081,-0.03839 -0.00982,-0.05839 v -0.0021 -2.496488 c 0.00585,-0.03657 0.00982,-0.07437 0.00982,-0.114722 0,-0.356227 -0.2444843,-0.56298 -0.4454509,-0.687297 -0.2009666,-0.124316 -0.4319202,-0.212514 -0.714685,-0.297139 -0.5655297,-0.169248 -1.3320197,-0.308738 -2.2732463,-0.427881 -1.8824533,-0.238285 -4.4534995,-0.382406 -7.2951615,-0.382406 z m 0,0.999939 c 2.807457,0 5.3505207,0.144326 7.1701051,0.374654 0.9097921,0.115163 1.6418345,0.254249 2.111499,0.394808 0.03089,0.0092 0.033444,0.016 0.062012,0.02532 -0.028326,0.0092 -0.031408,0.01409 -0.062012,0.02325 -0.4696645,0.140558 -1.2017069,0.279645 -2.111499,0.394808 -1.8195844,0.230327 -4.3626481,0.376721 -7.1701051,0.376721 -2.807457,0 -5.350004,-0.146394 -7.169588,-0.376721 -0.909792,-0.115163 -1.641835,-0.25425 -2.111499,-0.394808 -0.0306,-0.0092 -0.0342,-0.01402 -0.06253,-0.02325 0.02857,-0.0093 0.03164,-0.01608 0.06253,-0.02532 0.469664,-0.140559 1.201707,-0.279645 2.111499,-0.394808 1.819584,-0.230328 4.362131,-0.374654 7.169588,-0.374654 z m -9.728605,1.722376 c 0.05414,0.01798 0.102004,0.03736 0.160197,0.05478 0.565529,0.169249 1.330469,0.308738 2.271696,0.427881 1.882453,0.238285 4.45505,0.384472 7.296712,0.384472 2.841662,0 5.4127087,-0.146187 7.295162,-0.384472 0.9412266,-0.119143 1.7077166,-0.258632 2.2732463,-0.427881 0.054785,-0.0164 0.099315,-0.03479 0.1503784,-0.05168 v 1.590084 c -0.00792,0.0028 -0.00761,3.29e-4 -0.031006,0.0124 -0.1063055,0.05486 -0.2987795,0.126831 -0.5488037,0.195337 -0.5000485,0.137012 -1.2394013,0.269246 -2.1430216,0.378788 -1.8072405,0.219085 -4.2806554,0.35495 -6.9959554,0.355534 -2.7153,-5.84e-4 -5.190782,-0.136449 -6.998022,-0.355534 -0.90362,-0.109542 -1.642457,-0.241776 -2.142505,-0.378788 -0.250024,-0.06851 -0.440432,-0.140474 -0.546737,-0.195337 -0.02837,-0.01464 -0.02979,-0.01823 -0.04134,-0.02687 z m 19.5063028,1.525488 a 0.50005,0.50005 0 0 0 -0.021704,0.08578 0.50005,0.50005 0 0 0 -0.00413,0.0021 l 0.013953,-0.06408 c 0.00364,-0.0088 0.00821,-0.01683 0.011885,-0.02377 z m 0.927592,0.287321 -0.039274,0.15813 -0.020671,0.01447 a 0.50005,0.50005 0 0 0 0.059945,-0.1726 z"
     transform="matrix(0.964335,0,0,1.9622037,25.037832,-11.98175)" />
  <path
      class="path primary"
     style="stroke-width:0.726972;display:inline;fill:var(--icon-primary-color,CanvasText);stroke-linecap:round;stroke-linejoin:round"
     d="m -14.158826,11.788428 c -5.538195,0 -10.045062,0.557497 -10.220048,1.253153 h -0.0088 v 2.710946 0.05788 h 0.02791 a 10.228635,1.2947637 0 0 0 10.200927,1.236617 10.228635,1.2947637 0 0 0 10.2009281,-1.236617 h 0.018603 v -0.03927 a 10.228635,1.2947637 0 0 0 0.00879,-0.0186 10.228635,1.2947637 0 0 0 -0.00879,-0.05478 v -2.568319 c 0.00422,-0.01529 0.0093,-0.03057 0.0093,-0.04599 1.3e-6,-0.715078 -4.579713,-1.295011 -10.2288331,-1.295011 z"
     transform="matrix(0.964335,0,0,1.9622037,25.037832,-17.01913)" />
  <path
      class="path secondary"
     style="stroke-width:0.726972;display:inline;fill:var(--icon-secondary-color,canvas);stroke-linecap:round;stroke-linejoin:round"
     d="m -14.158309,11.289233 c -2.841662,0 -5.414259,0.144121 -7.296712,0.382406 -0.941227,0.119143 -1.706167,0.258633 -2.271696,0.427881 -0.282765,0.08463 -0.515786,0.172823 -0.716752,0.297139 -0.188462,0.116582 -0.410958,0.30737 -0.438216,0.624252 a 0.50005,0.50005 0 0 0 -0.0052,0.02015 v 0.04289 2.668054 0.05839 a 0.50005,0.50005 0 0 0 0.06149,0.171049 l -0.0047,-0.0031 c 0.107704,0.303283 0.317901,0.420451 0.525549,0.527616 0.207647,0.107166 0.451116,0.19158 0.742074,0.271302 0.581916,0.159443 1.354229,0.293075 2.287199,0.406176 1.865942,0.2262 4.368416,0.362695 7.116878,0.363286 2.748462,-5.91e-4 5.2514532,-0.137086 7.1173951,-0.363286 0.9329709,-0.113101 1.7052831,-0.246733 2.2871989,-0.406176 0.2909578,-0.07972 0.5323594,-0.164136 0.7400065,-0.271302 0.20534,-0.105975 0.4126465,-0.225552 0.5214152,-0.521415 l -0.00568,0.02119 c 0.00441,-0.0083 0.00772,-0.01872 0.011886,-0.02739 0.00551,-0.01146 0.012563,-0.02309 0.01757,-0.03514 a 0.50005,0.50005 0 0 0 0.026872,-0.130741 0.50005,0.50005 0 0 0 0.00207,-0.0021 v -0.0078 a 0.50005,0.50005 0 0 0 0.00982,-0.04703 c 1.358e-4,-0.02019 -0.0081,-0.03839 -0.00982,-0.05839 v -0.0021 -2.496488 c 0.00585,-0.03657 0.00982,-0.07437 0.00982,-0.114722 0,-0.356227 -0.2444843,-0.56298 -0.4454509,-0.687297 -0.2009666,-0.124316 -0.4319202,-0.212514 -0.714685,-0.297139 -0.5655297,-0.169248 -1.3320197,-0.308738 -2.2732463,-0.427881 -1.8824533,-0.238285 -4.4534995,-0.382406 -7.2951615,-0.382406 z m 0,0.999939 c 2.807457,0 5.3505207,0.144326 7.1701051,0.374654 0.9097921,0.115163 1.6418345,0.254249 2.111499,0.394808 0.03089,0.0092 0.033444,0.016 0.062012,0.02532 -0.028326,0.0092 -0.031408,0.01409 -0.062012,0.02325 -0.4696645,0.140558 -1.2017069,0.279645 -2.111499,0.394808 -1.8195844,0.230327 -4.3626481,0.376721 -7.1701051,0.376721 -2.807457,0 -5.350004,-0.146394 -7.169588,-0.376721 -0.909792,-0.115163 -1.641835,-0.25425 -2.111499,-0.394808 -0.0306,-0.0092 -0.0342,-0.01402 -0.06253,-0.02325 0.02857,-0.0093 0.03164,-0.01608 0.06253,-0.02532 0.469664,-0.140559 1.201707,-0.279645 2.111499,-0.394808 1.819584,-0.230328 4.362131,-0.374654 7.169588,-0.374654 z m -9.728605,1.722376 c 0.05414,0.01798 0.102004,0.03736 0.160197,0.05478 0.565529,0.169249 1.330469,0.308738 2.271696,0.427881 1.882453,0.238285 4.45505,0.384472 7.296712,0.384472 2.841662,0 5.4127087,-0.146187 7.295162,-0.384472 0.9412266,-0.119143 1.7077166,-0.258632 2.2732463,-0.427881 0.054785,-0.0164 0.099315,-0.03479 0.1503784,-0.05168 v 1.590084 c -0.00792,0.0028 -0.00761,3.29e-4 -0.031006,0.0124 -0.1063055,0.05486 -0.2987795,0.126831 -0.5488037,0.195337 -0.5000485,0.137012 -1.2394013,0.269246 -2.1430216,0.378788 -1.8072405,0.219085 -4.2806554,0.35495 -6.9959554,0.355534 -2.7153,-5.84e-4 -5.190782,-0.136449 -6.998022,-0.355534 -0.90362,-0.109542 -1.642457,-0.241776 -2.142505,-0.378788 -0.250024,-0.06851 -0.440432,-0.140474 -0.546737,-0.195337 -0.02837,-0.01464 -0.02979,-0.01823 -0.04134,-0.02687 z m 19.5063028,1.525488 a 0.50005,0.50005 0 0 0 -0.021704,0.08578 0.50005,0.50005 0 0 0 -0.00413,0.0021 l 0.013953,-0.06408 c 0.00364,-0.0088 0.00821,-0.01683 0.011885,-0.02377 z m 0.927592,0.287321 -0.039274,0.15813 -0.020671,0.01447 a 0.50005,0.50005 0 0 0 0.059945,-0.1726 z"
     transform="matrix(0.964335,0,0,1.9622037,25.037832,-17.01913)" />
  <path
      class="path primary"
     style="stroke-width:0.726972;display:inline;fill:var(--icon-primary-color,CanvasText);stroke-linecap:round;stroke-linejoin:round"
     d="m -14.158826,11.788428 c -5.538195,0 -10.045062,0.557497 -10.220048,1.253153 h -0.0088 v 2.710946 0.05788 h 0.02791 a 10.228635,1.2947637 0 0 0 10.200927,1.236617 10.228635,1.2947637 0 0 0 10.2009281,-1.236617 h 0.018603 v -0.03927 a 10.228635,1.2947637 0 0 0 0.00879,-0.0186 10.228635,1.2947637 0 0 0 -0.00879,-0.05478 v -2.568319 c 0.00422,-0.01529 0.0093,-0.03057 0.0093,-0.04599 1.3e-6,-0.715078 -4.579713,-1.295011 -10.2288331,-1.295011 z"
     transform="matrix(0.964335,0,0,1.9622037,25.081976,-21.78704)" />
  <path
      class="path secondary"
     style="stroke-width:0.726972;display:inline;fill:var(--icon-secondary-color,canvas);stroke-linecap:round;stroke-linejoin:round"
     d="m -14.158309,11.289233 c -2.841662,0 -5.414259,0.144121 -7.296712,0.382406 -0.941227,0.119143 -1.706167,0.258633 -2.271696,0.427881 -0.282765,0.08463 -0.515786,0.172823 -0.716752,0.297139 -0.188462,0.116582 -0.410958,0.30737 -0.438216,0.624252 a 0.50005,0.50005 0 0 0 -0.0052,0.02015 v 0.04289 2.668054 0.05839 a 0.50005,0.50005 0 0 0 0.06149,0.171049 l -0.0047,-0.0031 c 0.107704,0.303283 0.317901,0.420451 0.525549,0.527616 0.207647,0.107166 0.451116,0.19158 0.742074,0.271302 0.581916,0.159443 1.354229,0.293075 2.287199,0.406176 1.865942,0.2262 4.368416,0.362695 7.116878,0.363286 2.748462,-5.91e-4 5.2514532,-0.137086 7.1173951,-0.363286 0.9329709,-0.113101 1.7052831,-0.246733 2.2871989,-0.406176 0.2909578,-0.07972 0.5323594,-0.164136 0.7400065,-0.271302 0.20534,-0.105975 0.4126465,-0.225552 0.5214152,-0.521415 l -0.00568,0.02119 c 0.00441,-0.0083 0.00772,-0.01872 0.011886,-0.02739 0.00551,-0.01146 0.012563,-0.02309 0.01757,-0.03514 a 0.50005,0.50005 0 0 0 0.026872,-0.130741 0.50005,0.50005 0 0 0 0.00207,-0.0021 v -0.0078 a 0.50005,0.50005 0 0 0 0.00982,-0.04703 c 1.358e-4,-0.02019 -0.0081,-0.03839 -0.00982,-0.05839 v -0.0021 -2.496488 c 0.00585,-0.03657 0.00982,-0.07437 0.00982,-0.114722 0,-0.356227 -0.2444843,-0.56298 -0.4454509,-0.687297 -0.2009666,-0.124316 -0.4319202,-0.212514 -0.714685,-0.297139 -0.5655297,-0.169248 -1.3320197,-0.308738 -2.2732463,-0.427881 -1.8824533,-0.238285 -4.4534995,-0.382406 -7.2951615,-0.382406 z m 0,0.999939 c 2.807457,0 5.3505207,0.144326 7.1701051,0.374654 0.9097921,0.115163 1.6418345,0.254249 2.111499,0.394808 0.03089,0.0092 0.033444,0.016 0.062012,0.02532 -0.028326,0.0092 -0.031408,0.01409 -0.062012,0.02325 -0.4696645,0.140558 -1.2017069,0.279645 -2.111499,0.394808 -1.8195844,0.230327 -4.3626481,0.376721 -7.1701051,0.376721 -2.807457,0 -5.350004,-0.146394 -7.169588,-0.376721 -0.909792,-0.115163 -1.641835,-0.25425 -2.111499,-0.394808 -0.0306,-0.0092 -0.0342,-0.01402 -0.06253,-0.02325 0.02857,-0.0093 0.03164,-0.01608 0.06253,-0.02532 0.469664,-0.140559 1.201707,-0.279645 2.111499,-0.394808 1.819584,-0.230328 4.362131,-0.374654 7.169588,-0.374654 z m -9.728605,1.722376 c 0.05414,0.01798 0.102004,0.03736 0.160197,0.05478 0.565529,0.169249 1.330469,0.308738 2.271696,0.427881 1.882453,0.238285 4.45505,0.384472 7.296712,0.384472 2.841662,0 5.4127087,-0.146187 7.295162,-0.384472 0.9412266,-0.119143 1.7077166,-0.258632 2.2732463,-0.427881 0.054785,-0.0164 0.099315,-0.03479 0.1503784,-0.05168 v 1.590084 c -0.00792,0.0028 -0.00761,3.29e-4 -0.031006,0.0124 -0.1063055,0.05486 -0.2987795,0.126831 -0.5488037,0.195337 -0.5000485,0.137012 -1.2394013,0.269246 -2.1430216,0.378788 -1.8072405,0.219085 -4.2806554,0.35495 -6.9959554,0.355534 -2.7153,-5.84e-4 -5.190782,-0.136449 -6.998022,-0.355534 -0.90362,-0.109542 -1.642457,-0.241776 -2.142505,-0.378788 -0.250024,-0.06851 -0.440432,-0.140474 -0.546737,-0.195337 -0.02837,-0.01464 -0.02979,-0.01823 -0.04134,-0.02687 z m 19.5063028,1.525488 a 0.50005,0.50005 0 0 0 -0.021704,0.08578 0.50005,0.50005 0 0 0 -0.00413,0.0021 l 0.013953,-0.06408 c 0.00364,-0.0088 0.00821,-0.01683 0.011885,-0.02377 z m 0.927592,0.287321 -0.039274,0.15813 -0.020671,0.01447 a 0.50005,0.50005 0 0 0 0.059945,-0.1726 z"
     transform="matrix(0.964335,0,0,1.9622037,25.081976,-21.78704)" />
</svg>`;

// src/assets/icons/icons.asset.ts
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
  ["Copy" /* Copy */]: Copy,
  ["Data" /* Data */]: Data
};
function defineIcons(...icons) {
  return `<div id="icon-definitions" style="display: none;">
        ${(icons.length == 0 ? Object.values(Icons) : Object.entries(Icons).filter(([key, value]) => icons.indexOf(key) > -1)).map(([key, value]) => value).reduce(
    (accumulatedValues, value) => `${accumulatedValues}
${value}`
  )}
    </div>`;
}

// src/components/import-manager/import-manager.component.css?raw
var import_manager_component_default = ":host { display: contents; user-select: none; }\r\n\r\n#import-header\r\n{\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 7px;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n#import-title\r\n{\r\n    font-weight: bold;\r\n}\r\n\r\n.header-icon\r\n{\r\n    width: var(--dialog-header-icon-size);\r\n    height: var(--dialog-header-icon-size);\r\n}\r\n\r\n.value\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.old\r\n{\r\n    text-decoration: line-through;\r\n    opacity: .8;\r\n    padding-inline: .5em;\r\n    display: inline-block;\r\n    width: 100px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.value\r\n{\r\n    max-width: 500px;\r\n    overflow: hidden;\r\n    word-break: break-word;\r\n}\r\n.value:has(.display)\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.value .view-link\r\n{\r\n    align-self: flex-end;\r\n}\r\n\r\n.removed\r\n{\r\n    text-decoration: line-through;\r\n}\r\n\r\n.value img.preview\r\n{\r\n    max-height: 200px;\r\n}\r\n\r\n#content\r\n{\r\n    overflow: hidden;\r\n    display: grid;\r\n}\r\n\r\n#import-board-data-fieldset\r\n{\r\n    overflow: hidden;\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#preview\r\n{\r\n    overflow: auto;\r\n}\r\n\r\n.actions\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 14px;\r\n    padding-top: 1em;\r\n}\r\n\r\n@media (max-width: 665px) \r\n{\r\n    #preview\r\n    {\r\n        --indent: 5px;\r\n        --property-name-width: 75px;\r\n    }\r\n    #preview .property .name\r\n    {\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n    #preview .property .value\r\n    {\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        word-break: break-all;\r\n    }\r\n}";

// src/components/import-manager/import-manager.component.html?raw
var import_manager_component_default2 = '<header id="import-header" class="header dialog-header">\r\n    <svg id="import-icon" class="icon header-icon">\r\n        <use href="#icon-definition_import"></use>\r\n    </svg>\r\n    <span id="import-title" class="title dialog-title">Import</span>\r\n</header>\r\n<div id="content">\r\n    <fieldset id="import-board-data-fieldset" class="fieldset import-fieldset">\r\n        <legend id="import-board-data-legend" class="legend import-legend">Board Data</legend>\r\n        <p id="description">The following Taskboard, Tasklists, and Tasks will be imported with their settings. Make final adjustments and select "Import" to complete the import.</p>\r\n        <record-tree id="preview" removed-class parent-name="Board"></record-tree>\r\n    </fieldset>\r\n</div>\r\n<footer id="import-footer" class="footer dialog-footer">\r\n    <form id="import-actions" class="actions" method="dialog">\r\n        <button type="submit" id="import-cancel" class="button action-button cancel label-button" title="Cancel import">Cancel</button>\r\n        <button type="submit" id="import-ok" class="button action-button preferred-button ok label-button" title="Confirm import">Import</button>\r\n    </form>\r\n</footer>\r\n\r\n';

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

// src/libs/ce-part-utils/ce-part-utils.js
var DEFAULT_ELEMENT_SELECTOR = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function assignClassAndIdToPart(shadowRoot) {
  const identifiedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[id]`)];
  for (let i = 0; i < identifiedElements.length; i++) {
    identifiedElements[i].part.add(identifiedElements[i].id);
  }
  const classedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[class]`)];
  for (let i = 0; i < classedElements.length; i++) {
    classedElements[i].part.add(...classedElements[i].classList);
  }
}
function assignTagToPart(shadowRoot, config) {
  const elements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}`)];
  for (let i = 0; i < elements.length; i++) {
    const tagName = elements[i].tagName.toLowerCase();
    elements[i].part.add(config?.[tagName] ?? tagName);
  }
}
var InputTypePartMap = class {
  button;
  checkbox;
  color;
  date;
  ["datetime-local"];
  email;
  file;
  hidden;
  image;
  month;
  number;
  password;
  radio;
  range;
  reset;
  search;
  submit;
  tel;
  text;
  time;
  url;
  week;
  ["text-numeric"] = "number";
};
function assignInputTypeToPart(shadowRoot, config = new InputTypePartMap()) {
  const elements = [...shadowRoot.querySelectorAll("input")];
  for (let i = 0; i < elements.length; i++) {
    const inputType = elements[i].type;
    if (inputType == "text") {
      if (elements[i].inputMode == "numeric") {
        elements[i].part.add(config["text-numeric"]);
      }
    }
    elements[i].part.add(config[inputType] ?? inputType);
  }
}
function assignFormFieldPartAttributes(shadowRoot) {
  const formFieldElements = [...shadowRoot.querySelectorAll("form-field")];
  for (let i = 0; i < formFieldElements.length; i++) {
    const formFieldElement = formFieldElements[i];
    const fieldId = formFieldElement.id;
    const container = formFieldElement.querySelector(".container");
    container?.part.add("container", "field-container", `${fieldId}-container`);
    const label = formFieldElement.querySelector(".field-label");
    label?.part.add("label", "field-label", `${fieldId}-label`);
    const prefix = formFieldElement.querySelector(".prefix");
    prefix?.part.add("prefix", "field-prefix", `${fieldId}-prefix`);
    const postfix = formFieldElement.querySelector(".postfix");
    postfix?.part.add("postfix", "field-postfix", `${fieldId}-postfix`);
    const enabledCheckbox = formFieldElement.querySelector(".enabled-checkbox");
    enabledCheckbox?.part.add("enabled-checkbox", "field-enabled-checkbox", `${fieldId}-enabled-checkbox`);
  }
}
function getExportPartsFromParts(shadowRoot, addNewlines = false, replacements) {
  const exportPartsSet = new Set([...shadowRoot.querySelectorAll("[part]")].map((item) => {
    let parts = [...item.part.values()].filter((item2) => item2 != null).map((part) => {
      const replacement = replacements?.[part];
      return replacement != null ? `${part}:${replacement}` : part;
    });
    const childExports = item.getAttribute("exportparts");
    if (childExports != null) {
      const childParts = childExports.replaceAll(/[\s\n]/g, "").split(",").map((item2) => item2.indexOf(":") == -1 ? item2 : item2.split(":")[1]);
      parts = parts.concat(...childParts);
    }
    return parts;
  }).flat().filter((item) => item.length > 0));
  const exportParts = Array.from(exportPartsSet).join(`,${addNewlines == true ? "\n" : ""}`);
  return exportParts;
}
function assignPartsAsExportPartsAttribute(shadowRoot, addNewlines = false, replacements) {
  const exportParts = getExportPartsFromParts(shadowRoot, addNewlines, replacements);
  const existingExports = shadowRoot.host.getAttribute("exportparts");
  shadowRoot.host.setAttribute("exportparts", `${existingExports == null ? "" : `${existingExports},`}${exportParts}`);
}

// src/components/import-manager/import-manager.component.ts
var ID_PROPERTIES = /* @__PURE__ */ new Set(["id", "listId", "taskSettingsId", "backgroundImageId", "boardId"]);
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${import_manager_component_default}
${shared_default}
`);
var COMPONENT_TEMPLATE = `${import_manager_component_default2}
${defineIcons(
  "Import" /* Import */
)}`;
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
    return this.shadowRoot.querySelector(`#${id}`);
  }
  #generatedIdMap = /* @__PURE__ */ new Map();
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
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
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignInputTypeToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
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

// src/data/records/task-settings.record.ts
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

// src/components/board-settings/form-field.css?raw
var form_field_default = '[part="field-label"]\r\n{\r\n    white-space: nowrap;\r\n}\r\nform-field [part="label"]\r\n,form-field [part="field-label"]\r\n{\r\n    display: flex;\r\n    gap: .25em;\r\n    align-items: center;\r\n}\r\nform-field [part="label"] input\r\n,form-field [part="field-label"] input\r\n{\r\n    margin: 0;\r\n}\r\nform-field [part="label"] [part="text"]\r\n,form-field [part="field-label"] [part="text"]\r\n{\r\n    flex: 1;\r\n}\r\n\r\nform-field [part="container"]\r\n{\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    gap: .25em;\r\n}\r\nform-field [part="container"]:has([slot="postfix"])\r\n{\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n    column-gap: 0;\r\n    row-gap: .25em;\r\n}\r\nform-field [part="container"]:has([slot="postfix"]) [part="field-label"]\r\n{\r\n    grid-column: span 2;\r\n}\r\n\r\n';

// src/components/board-settings/task-fields/task-fields.component.css?raw
var task_fields_component_default = ':host\r\n{\r\n    display: grid;\r\n    grid-template-columns: auto minmax(160px, 1fr) auto;\r\n}\r\n\r\nfieldset\r\n{\r\n    display: grid;\r\n    gap: 1em;\r\n    min-width: 0;\r\n    width: auto;\r\n}\r\ninput,select,textarea\r\n{\r\n    font: inherit;\r\n    min-width: 0;\r\n    width: auto;\r\n}\r\n\r\ninput[type="color"]\r\n{\r\n    width: 100%;\r\n}\r\ninput[type="text"][inputmode="numeric"]\r\n{\r\n    width: 5ch;\r\n}\r\n\r\nform-field .container\r\n{\r\n}\r\nform-field .field-label\r\n{\r\n    display: flex;\r\n    gap: 5px;\r\n    margin-bottom: 7px;\r\n    align-items: center;\r\n}\r\n\r\n#task-appearance-fieldset\r\n{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n#task-appearance-fieldset .container > input\r\n{\r\n    flex: 1;\r\n    min-height: 2ch;\r\n}\r\n\r\n#task-border-radius-field .option\r\n{\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    gap: 5px;\r\n}\r\n\r\n#task-border-weights-fieldset\r\n{\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n    grid-template-rows: min-content min-content;\r\n}\r\n\r\n#task-font-size-field .container\r\n,#task-card-width-field .container\r\n,#task-border-weights-fieldset .container\r\n{\r\n    align-items: flex-start;\r\n    column-gap: .25em !important;\r\n}\r\n\r\n#task-font-size-field .postfix\r\n,#task-card-width-field .container\r\n,#task-card-width-field .postfix\r\n,#task-card-width-field input[type="text"]\r\n,#task-border-weights-fieldset .postfix\r\n{\r\n    align-self: flex-end;\r\n}\r\n\r\n#task-card-width-field .container\r\n{\r\n    grid-template-columns: auto 1fr;\r\n}\r\n\r\n#task-card-width-field .postfix\r\n{\r\n    justify-self: flex-start;\r\n}\r\n\r\n#task-center-checkbox-field input\r\n,#task-center-remove-button-field input\r\n{\r\n    justify-self: flex-start;\r\n    margin: 0;\r\n}\r\n\r\n\r\n@media (max-width: 785px) \r\n{\r\n    :host\r\n    {\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-template-columns: 1fr auto;\r\n    }\r\n    #task-appearance-fieldset\r\n    {\r\n        grid-template-columns: 1fr;\r\n        grid-row: span 2;\r\n    }\r\n}\r\n@media (max-width: 560px) \r\n{\r\n    :host\r\n    {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    /* #task-border-weights-fieldset\r\n    {\r\n        grid-template-columns: 1fr;\r\n    } */\r\n}\r\n/* @media (max-width: 450px) \r\n{\r\n    #task-border-radius-field .container\r\n    {\r\n        grid-template-columns: 1fr;\r\n    }\r\n} */\r\n';

// src/components/board-settings/task-fields/task-fields.component.html?raw
var task_fields_component_default2 = '<fieldset class="fieldset" id="task-appearance-fieldset">\r\n    <legend class="legend" id="task-appearance-legend">Appearance</legend>\r\n    <form-field class="field" id="task-font-size-field" label="Font Size" optional optional-title="Override Font Size?">\r\n        <input class="input"  id="task-font-size" name="task-font-size" type="text" inputmode="numeric" />\r\n        <span class="postfix" id="font-size-unit" slot="postfix">px</span>\r\n    </form-field>\r\n    <form-field class="field" id="task-background-color-field" label="Background Color" optional optional-title="Override Background Color?">\r\n        <input class="input color" id="task-background-color" name="task-background-color" type="color" value="#f9faf5" />\r\n    </form-field>\r\n    <form-field class="field" id="task-border-radius-field" label="Border Radius" optional optional-title="Override Border Radius?">\r\n        <input class="input" id="task-border-radius" name="task-border-radius" type="text" inputmode="numeric" />\r\n        <select class="select postfix" id="task-border-radius-unit" slot="postfix">\r\n            <option class="option first" value="px">px</option>\r\n            <option class="option last" value="%">%</option>\r\n        </select>\r\n    </form-field>\r\n    <form-field class="field" id="task-font-color-field" label="Font Color" optional optional-title="Override Font Color?">\r\n        <input class="input color" id="task-font-color" name="task-font-color" type="color" value="#060703" />\r\n    </form-field>\r\n    <form-field class="field" id="task-color-display-field" label="Color Display">\r\n        <select class="select" id="task-color-display" name="task-color-display"></select>\r\n    </form-field>\r\n    <form-field class="field" id="task-border-color-field" label="Border Color" optional optional-title="Override Border Color?">\r\n        <input class="input color" id="task-border-color" name="task-border-color" type="color"value="#060703" />\r\n    </form-field>\r\n</fieldset>  \r\n\r\n<fieldset class="fieldset" id="task-layout-fieldset">\r\n    <legend class="legend" id="task-layout-fields-legend">Layout</legend>\r\n    <form-field class="field" id="task-center-checkbox-field" label="Center Checkbox">\r\n        <input class="input" id="task-center-checkbox"  name="task-center-checkbox" type="checkbox"title="Center the checkbox?" />\r\n    </form-field>\r\n    <form-field class="field" id="task-center-remove-button-field" label="Center Remove Button">\r\n        <input class="input" id="task-center-remove-button" name="task-center-remove-button" type="checkbox" title="Center the remove button?" />\r\n    </form-field>\r\n    <form-field class="field" id="task-card-width-field" label="Card Width" optional option-title="Override Task Card Width?">\r\n        <input class="input" id="task-card-width" name="task-card-width" type="text" inputmode="numeric" value="" />\r\n        <span class="postfix" id="task-card-width-unit" slot="postfix">px</span>\r\n    </form-field>\r\n</fieldset>      \r\n\r\n<fieldset class="fieldset" id="task-border-weights-fieldset">\r\n    <legend class="legend" id="task-border-weights-legend">Border Weights</legend>\r\n    <form-field class="field" id="task-border-top-field" label="Top" optional optional-title="Use a custom top border size?">\r\n        <input class="input" id="task-border-top" name="task-border-top" type="text" inputmode="numeric"/>\r\n        <span class="postfix" id="task-border-top-unit" slot="postfix">px</span>\r\n    </form-field>\r\n    <form-field class="field" id="task-border-right-field" label="Right" optional optional-title="Use a custom right border size?">\r\n        <input class="input" id="task-border-right" name="task-border-right" type="text" inputmode="numeric" />\r\n        <span class="postfix" id="task-border-right-unit" slot="postfix">px</span>\r\n    </form-field>\r\n    <form-field class="field" id="task-border-bottom-field" label="Bottom" optional optional-title="Use a custom bottom border size?">\r\n        <input class="input" id="task-border-bottom" name="task-border-bottom" type="text" inputmode="numeric"/>\r\n        <span class="postfix" id="task-border-bottom-unit" slot="postfix">px</span>\r\n    </form-field>\r\n    <form-field class="field" id="task-border-left-field" label="Left" optional optional-title="Use a custom left border size?">\r\n        <input class="input" id="task-border-left" name="task-border-left" type="text" inputmode="numeric" />\r\n        <span class="postfix" id="task-border-left-unit" slot="postfix">px</span>\r\n    </form-field>\r\n</fieldset>';

// src/components/board-settings/task-fields/task-fields.component.ts
var COMPONENT_STYLESHEET2 = new CSSStyleSheet();
COMPONENT_STYLESHEET2.replaceSync(`${shared_default}
${form_field_default}
${task_fields_component_default}
`);
var COMPONENT_TAG_NAME2 = "task-fields";
var TaskFieldsComponent = class extends HTMLElement {
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
    this.findElement("task-color-display").append(...options);
  }
  connectedCallback() {
    requestAnimationFrame(() => {
      assignTagToPart(this.shadowRoot);
      assignClassAndIdToPart(this.shadowRoot);
      assignInputTypeToPart(this.shadowRoot);
      assignFormFieldPartAttributes(this.shadowRoot);
      this.setAttribute("exportparts", "option-true");
      assignPartsAsExportPartsAttribute(this.shadowRoot);
      const taskCenterRemoveButton = this.getElement("task-center-remove-button");
      if (taskCenterRemoveButton != null) {
        taskCenterRemoveButton.part.toggle("option-true", taskCenterRemoveButton.checked);
      }
      const taskCenterCheckbox = this.getElement("task-center-checkbox");
      if (taskCenterCheckbox != null) {
        taskCenterCheckbox.part.toggle("option-true", taskCenterCheckbox.checked);
      }
      this.dispatchEvent(new CustomEvent("ready", { bubbles: true }));
    });
  }
  //#region API
  setValues(settings) {
    this.setAttribute("task-record-id", settings.id);
    this.findElement("task-background-color-field").setAttribute("optional-value", settings.useCustomBackgroundColor == true ? "true" : "false");
    this.findElement("task-background-color").value = settings.customBackgroundColor;
    this.findElement("task-font-color-field").setAttribute("optional-value", settings.useCustomFontColor == true ? "true" : "false");
    this.findElement("task-font-color").value = settings.customFontColor;
    this.findElement("task-font-size-field").setAttribute("optional-value", settings.useCustomFontSize == true ? "true" : "false");
    this.findElement("task-font-size").value = settings.customFontSize.toString();
    this.findElement("task-border-color-field").setAttribute("optional-value", settings.useCustomBorderColor == true ? "true" : "false");
    this.findElement("task-border-color").value = settings.customBorderColor;
    this.findElement("task-border-radius-field").setAttribute("optional-value", settings.useCustomBorderRadius == true ? "true" : "false");
    this.findElement("task-border-radius").value = settings.borderRadiusValue.toString();
    this.findElement("task-border-radius-unit").value = settings.borderRadiusUnit;
    this.findElement("task-color-display").value = settings.colorDisplay;
    this.findElement("task-center-checkbox").checked = settings.centerCheckbox;
    this.findElement("task-center-remove-button").checked = settings.centerRemoveButton;
    this.findElement("task-card-width-field").setAttribute("optional-value", settings.useCustomWidth == true ? "true" : "false");
    this.findElement("task-card-width").value = settings.customWidth.toString();
    this.findElement("task-border-top-field").setAttribute("optional-value", settings.useCustomBorderWidth_top == true ? "true" : "false");
    this.findElement("task-border-top").value = settings.borderWidth_top.toString();
    this.findElement("task-border-right-field").setAttribute("optional-value", settings.useCustomBorderWidth_right == true ? "true" : "false");
    this.findElement("task-border-right").value = settings.borderWidth_right.toString();
    this.findElement("task-border-bottom-field").setAttribute("optional-value", settings.useCustomBorderWidth_bottom == true ? "true" : "false");
    this.findElement("task-border-bottom").value = settings.borderWidth_bottom.toString();
    this.findElement("task-border-left-field").setAttribute("optional-value", settings.useCustomBorderWidth_left == true ? "true" : "false");
    this.findElement("task-border-left").value = settings.borderWidth_left.toString();
  }
  getRecord() {
    const settings = new TaskSettingsRecord();
    settings.id = this.getAttribute("task-record-id");
    settings.useCustomBackgroundColor = this.findElement("task-background-color-field").getAttribute("optional-value") == "true";
    settings.customBackgroundColor = this.findElement("task-background-color").value;
    settings.useCustomFontColor = this.findElement("task-font-color-field").getAttribute("optional-value") == "true";
    settings.customFontColor = this.findElement("task-font-color").value;
    settings.useCustomFontSize = this.findElement("task-font-size-field").getAttribute("optional-value") == "true";
    settings.customFontSize = parseFloat(this.findElement("task-font-size").value);
    settings.useCustomBorderColor = this.findElement("task-border-color-field").getAttribute("optional-value") == "true";
    settings.customBorderColor = this.findElement("task-border-color").value;
    settings.useCustomBorderRadius = this.findElement("task-border-radius-field").getAttribute("optional-value") == "true";
    settings.borderRadiusValue = parseFloat(this.findElement("task-border-radius").value);
    settings.borderRadiusUnit = this.findElement("task-border-radius-unit").value;
    settings.colorDisplay = this.findElement("task-color-display").value;
    settings.centerCheckbox = this.findElement("task-center-checkbox").checked;
    settings.centerRemoveButton = this.findElement("task-center-remove-button").checked;
    settings.useCustomWidth = this.findElement("task-card-width-field").getAttribute("optional-value") == "true";
    settings.customWidth = parseFloat(this.findElement("task-card-width").value);
    settings.useCustomBorderWidth_top = this.findElement("task-border-top-field").getAttribute("optional-value") == "true";
    settings.borderWidth_top = parseFloat(this.findElement("task-border-top").value);
    settings.useCustomBorderWidth_right = this.findElement("task-border-right-field").getAttribute("optional-value") == "true";
    settings.borderWidth_right = parseFloat(this.findElement("task-border-right").value);
    settings.useCustomBorderWidth_bottom = this.findElement("task-border-bottom-field").getAttribute("optional-value") == "true";
    settings.borderWidth_bottom = parseFloat(this.findElement("task-border-bottom").value);
    settings.useCustomBorderWidth_left = this.findElement("task-border-left-field").getAttribute("optional-value") == "true";
    settings.borderWidth_left = parseFloat(this.findElement("task-border-left").value);
    return settings;
  }
  //#endregion API
  //#region Internal
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
    const formFieldElements = [...this.shadowRoot.querySelectorAll("form-field")];
    for (let i = 0; i < formFieldElements.length; i++) {
      const formFieldElement = formFieldElements[i];
      const fieldId = formFieldElement.id;
      const container = formFieldElement.querySelector(".container");
      container?.part.add("container", "field-container", `${fieldId}-container`);
      const label = formFieldElement.querySelector(".field-label");
      label?.part.add("label", "field-label", `${fieldId}-label`);
      const prefix = formFieldElement.querySelector(".prefix");
      prefix?.part.add("prefix", "field-prefix", `${fieldId}-prefix`);
      const postfix = formFieldElement.querySelector(".postfix");
      postfix?.part.add("postfix", "field-postfix", `${fieldId}-postfix`);
      const enabledCheckbox = formFieldElement.querySelector(".enabled-checkbox");
      enabledCheckbox?.part.add("enabled-checkbox", "field-enabled-checkbox", `${fieldId}-enabled-checkbox`);
    }
  }
  //#endregion Internal
};
if (customElements.get(COMPONENT_TAG_NAME2) == null) {
  customElements.define(COMPONENT_TAG_NAME2, TaskFieldsComponent);
}

// src/data/records/task-list.record.ts
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

// src/components/board-settings/tasklist-fields/tasklist-fields.component.css?raw
var tasklist_fields_component_default = `:host([removed])\r
{\r
    opacity: .6;\r
    scale: .98 .9;\r
    user-select: none;\r
}\r
\r
input,select,textarea\r
{\r
    font: inherit;\r
    min-width: 0;\r
    width: auto;\r
}\r
\r
#icon-definitions\r
{\r
    display: none;\r
}\r
\r
/* #tasklist-settings-handle\r
{\r
    display: flex;\r
    width: 15px;\r
    align-self: stretch;\r
    cursor: grab;\r
    border-radius: 3px;\r
    \r
    background-image: radial-gradient(var(--grip-color, canvastext) 15%, transparent 16%),\r
    radial-gradient(var(--grip-color, canvastext) 15%, transparent 16%);\r
    background-size: 5px 5px;\r
    background-position: 0 0, 2px 2px;\r
}\r
#tasklist-settings-handle:active\r
{\r
    cursor: grabbing;\r
} */\r
#tasklist-settings-handle\r
{\r
    display: flex;\r
    width: 10px;\r
    align-self: stretch;\r
    cursor: grab;\r
    /* border-radius: 3px; */\r
    transform: translateY(-1px);\r
    \r
    background-image: radial-gradient(var(--grip-color, canvastext) 40%, transparent 41%);\r
    background-size: 5px 6px;\r
    background-position: 0 0, 2px 4px;\r
}\r
#tasklist-settings-handle:active\r
{\r
    cursor: grabbing;\r
}\r
\r
.icon\r
{\r
    width: var(--icon-size, 12px);\r
    height: var(--icon-size, 12px);\r
}\r
\r
#tasklist-settings-undo-icon\r
{\r
    display: none;\r
}\r
:host([removed]) #tasklist-settings-remove-icon\r
{\r
    display: none;\r
}\r
:host([removed]) #tasklist-settings-undo-icon\r
{\r
    display: flex;\r
}\r
\r
details\r
{\r
    --board-details-background: rgb(0 0 0 / .085);\r
    background-color: var(--board-details-background);\r
    border-radius: 3px;\r
    padding: 7px 3px;\r
}\r
\r
details summary\r
{\r
    user-select: none;\r
    display: flex;\r
    gap: .25em;\r
}\r
summary:before\r
{\r
    content: '\u25B6';\r
    transform-origin: 45% 50%;\r
    transition: transform 100ms ease-out;\r
    font-size: .78em;\r
    align-self: center;\r
    margin-right: .25em;\r
}\r
details[open] summary:before\r
{\r
    transform: rotate(90deg);\r
}\r
\r
.details-content\r
{\r
    padding: 7px 3px;\r
    display: grid;\r
    gap: 7px;\r
}\r
\r
summary button\r
{\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
}\r
\r
fieldset\r
{\r
    display: grid;\r
    gap: 1em;\r
    min-width: 0;\r
    width: auto;\r
}\r
\r
form-field .container\r
{\r
    display: grid;\r
    grid-template-rows: auto 1fr;\r
    gap: 7px;\r
}\r
form-field .field-label\r
{\r
    display: flex;\r
    gap: 5px;\r
    align-items: center;\r
}\r
\r
form-field input[type="color"]\r
{\r
    width: 100%;\r
    height: auto;\r
}\r
\r
.enabled-checkbox\r
{\r
    margin-right: 7px;\r
}\r
\r
#tasklist-color\r
{\r
    width: 15px;\r
    height: auto;\r
    padding: 0;\r
    border-style: solid;\r
    border-width: 1px;\r
    border-color: rgb(170 170 170 / .75);\r
    background-color: transparent;\r
    border-radius: 3px;\r
}\r
#tasklist-color:hover\r
{\r
    border-color: rgb(170 170 170);\r
}\r
/* #tasklist-color::-webkit-color-swatch\r
{\r
    padding: 0;\r
    border: none;\r
}\r
#tasklist-color::-webkit-color-swatch-wrapper\r
{\r
    padding: 0;\r
    border: none;\r
} */\r
\r
#tasklist-name\r
{\r
    flex: 1;\r
}\r
\r
#tasklist-settings-fieldset\r
{\r
    grid-template-columns: 1fr minmax(min-content, 18ch);\r
}\r
\r
#tasklist-settings-fieldset .fieldset-column\r
{\r
    display: grid;\r
    gap: .5em;\r
}\r
\r
#tasklist-settings-fieldset .column input[type="color"]\r
{\r
    height: auto;\r
}\r
\r
input[type="text"]\r
{\r
    min-width: 5ch;\r
}\r
\r
#tasklist-width-field .container\r
{\r
    column-gap: .25em !important;\r
}\r
\r
#tasklist-width\r
,#tasklist-width-unit\r
{\r
    grid-row: 2;\r
}\r
\r
#tasklist-width-field [slot="postfix"]\r
{\r
    align-self: flex-end;\r
}\r
\r
:host([style*="color-scheme: light;"]) svg.copy\r
{\r
    --icon-primary-color: canvas;\r
    --icon-secondary-color: canvastext;\r
}\r
\r
@media (max-width: 450px) \r
{\r
    #tasklist-name\r
    {\r
        width: 0;\r
    }\r
    #tasklist-settings-fieldset\r
    {\r
        grid-template-columns: 1fr;\r
    }\r
    form-field input[type="color"]\r
    {\r
        min-height: 30px;\r
    }\r
}\r
@media (prefers-color-scheme: light) \r
{\r
    :host(:not([style*="color-scheme: dark;"])) svg.copy\r
    {\r
        --icon-primary-color: canvas;\r
        --icon-secondary-color: canvastext;\r
    }\r
}\r
@media (prefers-color-scheme: dark) \r
{\r
    :host(:not([style*="color-scheme: light;"])) details\r
    {\r
        --board-details-background: rgb(255 255 255 / .085);\r
    }\r
}`;

// src/components/board-settings/tasklist-fields/tasklist-fields.component.html?raw
var tasklist_fields_component_default2 = '<details class="details" id="tasklist-settings-details">\r\n    <summary class="summary" id="tasklist-settings-summary">\r\n        <div class="handle" id="tasklist-settings-handle"></div>\r\n        <input class="input color" id="tasklist-color" name="tasklist-color" type="color" />\r\n        <input class="input name" id="tasklist-name" name="tasklist-name" type="text" />\r\n        <button class="duplicate-button icon-button" id="tasklist-settings-duplicate-button" type="button">\r\n            <svg class="icon copy" id="tasklist-settings-duplicate-icon">\r\n                <use href="#icon-definition_copy"></use>\r\n            </svg>\r\n        </button>\r\n        <button class="button icon-button" id="tasklist-settings-remove-button" type="button">\r\n            <svg class="icon" id="tasklist-settings-remove-icon">\r\n                <use href="#icon-definition_cancel-cross"></use>\r\n            </svg>\r\n            <svg class="icon" id="tasklist-settings-undo-icon">\r\n                <use href="#icon-definition_undo-redo"></use>\r\n            </svg>\r\n        </button>\r\n    </summary>\r\n    <div class="details-content" id="task-fields-content">\r\n        <fieldset class="fieldset" id="tasklist-settings-fieldset">\r\n            <legend class="legend" id="tasklist-settings-legend">List</legend>\r\n            <div class="fieldset-column first tasklist-settings-fieldset-column">\r\n                <form-field class="field"  id="tasklist-background-color-field"label="Background Color" optional optional-title="Override Background Color?">\r\n                    <input class="input color" id="tasklist-background-color" type="color" name="background-color" value="#f9faf5" />\r\n                </form-field>\r\n                <form-field class="field" id="tasklist-font-color-field" label="Font Color" optional optional-title="Override Font Color?">\r\n                    <input class="input color" id="tasklist-font-color" type="color" name="font-color" value="#060703" />\r\n                </form-field>\r\n            </div>\r\n            <div class="fieldset-column second tasklist-settings-fieldset-column">\r\n                <form-field class="field" id="tasklist-order-field" label="Order" >\r\n                    <input class="input" id="tasklist-order" type="text" name="order" inputmode="numeric" disabled />\r\n                </form-field>\r\n                <form-field class="field" id="tasklist-width-field" label="List Width" optional optional-title="Use a custom list width?">\r\n                    <input class="input" id="tasklist-width" type="text" inputmode="numeric" name="list-width" value="" />\r\n                    <span class="postfix" id="tasklist-width-unit" slot="postfix">px</span>\r\n                </form-field>\r\n                <form-field class="field" id="tasklist-color-display-field" label="Color Display">\r\n                    <select class="select" id="tasklist-color-display" name="color-display"></select>\r\n                </form-field>\r\n            </div>\r\n        </fieldset>\r\n        <fieldset class="fieldset" id="task-settings-fieldset">\r\n            <legend class="legend" id="task-settings-legend">List Tasks</legend>\r\n            <task-fields id="task-settings"></task-fields>\r\n        </fieldset>\r\n    </div>\r\n</details>';

// src/components/board-settings/tasklist-fields/tasklist-fields.component.ts
var COMPONENT_STYLESHEET3 = new CSSStyleSheet();
COMPONENT_STYLESHEET3.replaceSync(`${shared_default}
${form_field_default}
${tasklist_fields_component_default}
`);
var COMPONENT_TEMPLATE2 = `${tasklist_fields_component_default2}
${defineIcons(
  "CancelCross" /* CancelCross */,
  "Copy" /* Copy */,
  "UndoRedo" /* UndoRedo */
)}`;
var COMPONENT_TAG_NAME3 = "tasklist-fields";
var TaskListFieldsComponent = class extends HTMLElement {
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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET3);
    const options = [];
    for (const [key, value] of Object.entries(TaskListColorDisplay)) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = key.replace(/([A-Z])/g, " $1").trim();
      options.push(option);
    }
    this.findElement("tasklist-color-display").append(...options);
    this.findElement("tasklist-name").addEventListener("keyup", (event) => {
      if (event.code == "Space") {
        event.preventDefault();
      }
    });
    this.shadowRoot.addEventListener("ready", () => {
      this.setAttribute("exportparts", "option-true");
      assignPartsAsExportPartsAttribute(this.shadowRoot);
    }, { once: true });
  }
  connectedCallback() {
    requestAnimationFrame(() => {
      assignTagToPart(this.shadowRoot);
      assignClassAndIdToPart(this.shadowRoot);
      assignInputTypeToPart(this.shadowRoot);
      assignFormFieldPartAttributes(this.shadowRoot);
    });
  }
  //#region API
  setValues(taskList, taskSettings) {
    this.setAttribute("tasklist-record-id", taskList.id);
    this.findElement("tasklist-color").value = taskList.color;
    this.findElement("tasklist-name").value = taskList.name;
    this.findElement("tasklist-order").value = taskList.order.toString();
    this.findElement("tasklist-background-color-field").setAttribute("optional-value", taskList.useCustomBackgroundColor == true ? "true" : "false");
    this.findElement("tasklist-background-color").value = taskList.backgroundColor;
    this.findElement("tasklist-font-color-field").setAttribute("optional-value", taskList.useCustomFontColor == true ? "true" : "false");
    this.findElement("tasklist-font-color").value = taskList.fontColor;
    this.findElement("tasklist-width-field").setAttribute("optional-value", taskList.useCustomWidth == true ? "true" : "false");
    this.findElement("tasklist-width").value = taskList.width.toString();
    this.findElement("tasklist-color-display").value = taskList.colorDisplay;
    this.findElement("task-settings").setValues(taskSettings);
  }
  getRecords() {
    const taskList = new TaskListRecord();
    taskList.id = this.getAttribute("tasklist-record-id");
    taskList.color = this.findElement("tasklist-color").value;
    taskList.name = this.findElement("tasklist-name").value;
    taskList.useCustomBackgroundColor = this.findElement("tasklist-background-color-field").getAttribute("optional-value") == "true";
    taskList.backgroundColor = this.findElement("tasklist-background-color").value;
    taskList.useCustomFontColor = this.findElement("tasklist-font-color-field").getAttribute("optional-value") == "true";
    taskList.fontColor = this.findElement("tasklist-font-color").value;
    taskList.useCustomWidth = this.findElement("tasklist-width-field").getAttribute("optional-value") == "true";
    taskList.width = parseFloat(this.findElement("tasklist-width").value);
    taskList.colorDisplay = this.findElement("tasklist-color-display").value;
    const taskSettings = this.findElement("task-settings").getRecord();
    taskSettings.parentRecordType = "list";
    taskList.taskSettingsId = taskSettings.id;
    const result = [taskList, taskSettings];
    return result;
  }
  //#endregion API
  //#region Management
  //#endregion Management
  //#region Internal
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
    const formFieldElements = [...this.shadowRoot.querySelectorAll("form-field")];
    for (let i = 0; i < formFieldElements.length; i++) {
      const formFieldElement = formFieldElements[i];
      const fieldId = formFieldElement.id;
      const container = formFieldElement.querySelector(".container");
      container?.part.add("container", "field-container", `${fieldId}-container`);
      const label = formFieldElement.querySelector(".field-label");
      label?.part.add("label", "field-label", `${fieldId}-label`);
      const prefix = formFieldElement.querySelector(".prefix");
      prefix?.part.add("prefix", "field-prefix", `${fieldId}-prefix`);
      const postfix = formFieldElement.querySelector(".postfix");
      postfix?.part.add("postfix", "field-postfix", `${fieldId}-postfix`);
      const enabledCheckbox = formFieldElement.querySelector(".enabled-checkbox");
      enabledCheckbox?.part.add("enabled-checkbox", "field-enabled-checkbox", `${fieldId}-enabled-checkbox`);
    }
  }
  //#endregion Internal
};
if (customElements.get(COMPONENT_TAG_NAME3) == null) {
  customElements.define(COMPONENT_TAG_NAME3, TaskListFieldsComponent);
}

// src/components/app-menu/app-menu.css?raw
var app_menu_default = `#app-menu\r
{\r
    padding: 0;\r
    margin: 0;\r
    background-color: field;\r
    color: fieldtext;\r
    border-right: solid 1px graytext;\r
}\r
\r
#app-menu-header\r
{\r
    display: flex;\r
    gap: .5em;\r
    padding: .5em;\r
}\r
\r
#app-menu-branding\r
{\r
    grid-area: brand;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
}\r
\r
.logo.mark\r
{\r
    width: var(--brand-icon-size);\r
    height: var(--brand-icon-size);\r
}\r
\r
#find-board-button\r
{\r
    flex: 1;\r
    display: grid;\r
    grid-template-columns: max-content max-content;\r
    justify-content: center;\r
    gap: 5px;\r
    text-align: center;\r
}\r
\r
#boards\r
{\r
    margin: 0;\r
    padding: 0;\r
}\r
\r
@media (max-width: 665px) \r
{\r
    #app-menu\r
    {\r
        max-width: 100vw;\r
        display: grid;\r
        border-right: none;\r
        order: 2;\r
    }\r
\r
    #app-menu-header\r
    {\r
        grid-row: 2;\r
        display: flex;\r
        justify-content: space-between;\r
        order: 3;\r
        background-color: field;\r
    }\r
    \r
    /* [part="menu"] .board-search\r
    {\r
        align-items: center;\r
        justify-content: center;\r
    } */\r
    #boards\r
    {\r
        display: flex;\r
        align-items: center;\r
        order: 2;\r
        background-color: field;\r
        border-top: solid 1px graytext;\r
    }\r
    #boards::part(items)\r
    {\r
        display: flex;\r
        flex-wrap: nowrap;\r
        overflow-x: auto;\r
        overflow-y: hidden;\r
        width: 0; /* doesn't actually set width, just corrects weird overflow issue */\r
        flex: 1;\r
        gap: var(--menu-gap);\r
        padding: var(--menu-padding);\r
        box-shadow: inset -10px 0 10px -10px rgb(0 0 0 / .8);\r
    }\r
\r
    #new-board-button\r
    {\r
        display: flex;\r
        align-self: stretch;\r
        margin: 7px;\r
    }\r
\r
    #new-board-button .label\r
    {\r
        display: none;\r
    }\r
}\r
@media (max-width: 800px) \r
{\r
    \r
}\r
\r
/* only desktop */\r
@media (min-width: 665px) \r
{\r
    #app-menu\r
    {\r
        display: grid;\r
        grid-template-rows: auto 1fr;\r
        overflow: hidden;\r
        width: 230px;\r
    }\r
\r
\r
    #boards\r
    {\r
        display: grid;\r
        grid-template-rows: 1fr auto;\r
        overflow: hidden;\r
    }\r
    #boards::part(items)\r
    {\r
        margin: 0;\r
        padding: 0;\r
        display: grid;\r
        gap: .5em;\r
        overflow-y: auto;\r
        overflow-x: hidden;\r
        grid-auto-rows: max-content;\r
    }\r
\r
    #new-board-button\r
    {\r
        margin: 10px;\r
        margin-top: 1em;\r
        justify-self: center;\r
    }\r
}\r
@media (min-width: 800px) \r
{\r
\r
}`;

// src/components/app-menu/app-menu.html?raw
var app_menu_default2 = '<menu id="app-menu" class="menu">\r\n    <header id="app-menu-header" class="header">\r\n        <div id="app-menu-branding" class="branding" title="Manager Icon">\r\n            <svg class="icon logo mark" alt="Manager Brand Mark">\r\n                <use href="#icon-definition_logo-mark"></use>\r\n            </svg>\r\n        </div>\r\n        <button id="find-board-button" class="button" type="button" data-route="#boards" title="Find Board">\r\n            <svg class="icon button-icon magnifying-glass">\r\n                <use href="#icon-definition_magnifying-glass"></use>\r\n            </svg>\r\n            <span class="button-label">Find Board</span>\r\n        </button>\r\n        <button id="open-settings-button" class="button icon-button" type="button" data-route="#config/settings" title="App Administration">\r\n            <svg class="icon button-icon gear">\r\n                <use href="#icon-definition_gear"></use>\r\n            </svg>\r\n        </button>\r\n    </header>\r\n    <editable-list id="boards" remove="false" edit="true" edit-class="button board-edit-button icon-button" exportparts="items: board-items">\r\n        <slot></slot>\r\n        <button id="new-board-button" class="button new-board-button label-button" type="button" slot="add" title="New Board">\r\n            <svg class="icon button-icon plus" >\r\n                <use href="#icon-definition_plus"></use>\r\n            </svg>\r\n            <span class="label button-label">New Board</span>\r\n        </button>\r\n        <template part="edit-button">\r\n            <svg class="icon button-icon expand">\r\n                <use href="#icon-definition_stylus"></use>\r\n            </svg>\r\n        </template>\r\n    </editable-list>\r\n</menu>\r\n';

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
var COMPONENT_TAG_NAME4 = "message-card";
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
    const element = document.createElement(COMPONENT_TAG_NAME4);
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
if (customElements.get(COMPONENT_TAG_NAME4) == null) {
  customElements.define(COMPONENT_TAG_NAME4, MessageCardElement);
}

// src/services/feedback.service.ts
var DATA_ERROR_MESSAGE = `<p>An error occurred trying to access the [subject] data.</p>
<p>If this is a repeating issue, you can try to refresh the application. Data may be lost when taking this action.</p>
<p>For more information, see the console in the browser's developer tools.</p>`;
var UNKNOWN_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "target");
var BOARD_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Task Board");
var LIST_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Task List");
var TASK_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Task");
var IMAGE_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Image");
var HISTORY_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "History");
var SETTINGS_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace("[subject]", "Settings");
var FeedbackService = class _FeedbackService {
  static #manager;
  static ErrorMessages = {
    ["UNKNOWN" /* UNKNOWN */]: UNKNOWN_ERROR_MESSAGE,
    ["BOARD" /* BOARD */]: BOARD_ERROR_MESSAGE,
    ["LIST" /* LIST */]: LIST_ERROR_MESSAGE,
    ["TASK" /* TASK */]: TASK_ERROR_MESSAGE,
    ["IMAGE" /* IMAGE */]: IMAGE_ERROR_MESSAGE,
    ["HISTORY" /* HISTORY */]: HISTORY_ERROR_MESSAGE,
    ["SETTINGS" /* SETTINGS */]: SETTINGS_ERROR_MESSAGE
  };
  static init(taskboardManager) {
    _FeedbackService.#manager = taskboardManager;
  }
  static getConfirmation(message, type = "info") {
    if (_FeedbackService.#manager == null) {
      throw new Error("Unable to manage dialogs before service has been initialized.");
    }
    _FeedbackService.#manager.getElement("confirmation-dialog").querySelector(`route-page[path="${type}"]`).innerHTML = message;
    _FeedbackService.#manager.getElement("confirmation-dialog").showModal();
    _FeedbackService.#manager.getElement("confirmation-router").navigate(type);
    return new Promise((resolve) => {
      _FeedbackService.#manager.getElement("confirmation-dialog-form").addEventListener("submit", (event) => {
        if (event.submitter == _FeedbackService.#manager.getElement("confirmation-confirm-button")) {
          resolve(true);
          return;
        }
        resolve(false);
      }, { once: true });
    });
  }
  static showErrorMessageDialog(error) {
    this.showMessageDialog(_FeedbackService.ErrorMessages[error], "danger");
  }
  static showMessageDialog(message, type = "info") {
    if (_FeedbackService.#manager == null) {
      throw new Error("Unable to manage dialogs before service has been initialized.");
    }
    const dialog = _FeedbackService.#manager.getElement("confirmation-dialog");
    dialog.querySelector(`path-route[path="${type}"]`).innerHTML = message;
    dialog.show();
    dialog.classList.add("message");
    _FeedbackService.#manager.getElement("confirmation-router").navigate(type);
    return new Promise((resolve) => {
      _FeedbackService.#manager.getElement("confirmation-dialog-form").addEventListener("submit", (event) => {
        dialog.classList.remove("message");
        resolve();
      }, { once: true });
    });
  }
  static showMessageCard(message, type) {
    MessageCardElement.notify(message, _FeedbackService.#manager.getElement("notifications"), { type });
  }
  static showErrorMessageCard(message) {
    _FeedbackService.showMessageCard(message, MessageCardType.Error);
  }
  static showMessageCard_customTitle(message, type, title) {
    MessageCardElement.notify(message, _FeedbackService.#manager.getElement("notifications"), { type, heading: title });
  }
};

// src/data/records/task-board.record.ts
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

// src/data/records/custom-image.record.ts
var CustomImageRecord = class extends DataRecord {
  boardId = "";
  isSingleBoard = false;
  name = "";
  description = "";
  image;
};

// src/data/records/task.record.ts
var TaskRecord = class extends DataRecord {
  boardId = "";
  listId = "";
  order = -1;
  color = "#858585";
  description = "";
  isFinished = false;
};

// src/data/channels/data.channel.ts
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

// src/data/channels/board.channel.ts
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

// src/data/channels/task-list.channel.ts
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

// src/data/channels/task.channel.ts
var TaskChannel = class extends DataChannel {
  create(boardId, listId) {
    const task = new TaskRecord();
    task.id = RecordSetter.generateId();
    task.boardId = boardId;
    task.listId = listId;
    return task;
  }
};

// src/data/channels/task-settings.channel.ts
var TaskSettingsChannel = class extends DataChannel {
  create(parentType, sourceSettings) {
    const taskSettings = sourceSettings || new TaskSettingsRecord();
    taskSettings.id = RecordSetter.generateId();
    taskSettings.parentRecordType = parentType;
    return taskSettings;
  }
};

// src/data/channels/custom-image.channel.ts
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

// node_modules/.pnpm/@magnit-ce+action-history@0.0.7/node_modules/@magnit-ce/action-history/dist/action-history.js
var action_history_default = ":host\n{\n    display: flex; /* needed for reverse ordering */\n    flex-direction: column;\n    overflow: auto;\n}\n:host([empty])::before\n{\n    content: attr(placeholder);\n    color: graytext;\n    font-style: italic;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n::slotted([data-entry])\n{\n    cursor: pointer;\n    flex-shrink: 0; /* prevents squishing due to the flex display */\n}\n\n::slotted([data-active][data-entry])\n{\n    text-decoration: underline;\n}\n\n::slotted([data-entry][data-reversed])\n{\n    scale: .98;\n    opacity: .5;\n}";
var HistoryEntryType = /* @__PURE__ */ ((HistoryEntryType22) => {
  HistoryEntryType22["Create"] = "create";
  HistoryEntryType22["Read"] = "read";
  HistoryEntryType22["Update"] = "update";
  HistoryEntryType22["Delete"] = "delete";
  HistoryEntryType22["Custom"] = "custom";
  return HistoryEntryType22;
})(HistoryEntryType || {});
var ATTRIBUTENAME_REVERSED = "data-reversed";
var ATTRIBUTENAME_ACTIVE = "data-active";
var ATTRIBUTENAME_ENTRY = "data-entry";
var ATTRIBUTENAME_TIMESTAMP = "data-timestamp";
var COMPONENT_STYLESHEET4 = new CSSStyleSheet();
COMPONENT_STYLESHEET4.replaceSync(action_history_default);
var COMPONENT_TAG_NAME5 = "action-history";
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
  #boundSlotChange;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET4);
    this.#boundSlotChange = ((_event) => {
      const children = this.#slot.assignedElements();
      if (children.length == 1 && children[0] instanceof HTMLSlotElement) {
        let descendantSlot = children[0];
        let descendantSlotChildren = descendantSlot.assignedElements();
        while (descendantSlot instanceof HTMLSlotElement && descendantSlotChildren[0] instanceof HTMLSlotElement) {
          descendantSlot = descendantSlotChildren[0];
          if (descendantSlot instanceof HTMLSlotElement) {
            descendantSlotChildren = descendantSlot.assignedElements();
          }
        }
        this.#registerSlot(descendantSlot);
        return;
      }
      this.#updateEntries(children);
    }).bind(this);
    this.#registerSlot(this.shadowRoot.querySelector(`slot`));
    this.addEventListener("click", (event) => {
      const target = event.target.closest(`[${this.entryAttributeName}]`);
      if (target == null) {
        return;
      }
      this.activateEntry(target);
    });
  }
  #registerSlot(slot) {
    if (this.#slot != null) {
      this.#slot.removeEventListener("slotchange", this.#boundSlotChange);
    }
    this.#slot = slot;
    this.#slot.addEventListener("slotchange", this.#boundSlotChange);
    const children = this.#slot.assignedElements();
    this.toggleAttribute("empty", children.length == 0);
    this.#updateEntries(children);
  }
  #updateEntries(children) {
    let activeEntry = children.find((item) => item.getAttribute(this.activeAttributeName) != null);
    if (activeEntry != null && activeEntry.getAttribute(this.timestampAttributeName) != null) {
      activeEntry.removeAttribute(this.activeAttributeName);
      activeEntry = void 0;
    }
    const canRemoveReversedEntries = this.getAttribute("prevent-removal") == void 0;
    let lastChild = null;
    for (let i = 0; i < children.length; i++) {
      if (children[i].getAttribute(this.entryAttributeName) == null) {
        continue;
      }
      lastChild = children[i];
      if (children[i].hasAttribute(this.timestampAttributeName)) {
        continue;
      }
      if (canRemoveReversedEntries == true) {
        const toReverse = children.filter((item) => item.getAttribute(this.reversedAttributeName) != null);
        for (let i2 = 0; i2 < toReverse.length; i2++) {
          toReverse[i2].remove();
        }
      }
      children[i].setAttribute(this.timestampAttributeName, Date.now().toString());
      this.updateOrder(children);
      this.dispatchEvent(new CustomEvent("add", { detail: { target: children[i] }, bubbles: true, composed: true }));
    }
    if (activeEntry == null && lastChild != null && lastChild.getAttribute(this.reversedAttributeName) == null) {
      lastChild.toggleAttribute(this.activeAttributeName, true);
    }
    this.toggleAttribute("empty", children.length == 0);
  }
  updateOrder(children) {
    children = children ?? this.#slot.assignedElements();
    if (this.hasAttribute("reverse")) {
      for (let i = 0; i < children.length; i++) {
        const order = children.length - i;
        const element = children[i];
        element.tabIndex = order;
        element.style.order = order.toString();
      }
    } else {
      for (let i = 0; i < children.length; i++) {
        const element = children[i];
        element.removeAttribute("tabindex");
        element.style.removeProperty("order");
      }
    }
  }
  /**
   * Activate the previous entry, if it exists.
   * @returns `void`
   */
  back() {
    const children = this.#slot.assignedElements();
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
    const children = this.#slot.assignedElements();
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
      this.dispatchEvent(new CustomEvent("refresh", { detail: { target }, bubbles: true, composed: true }));
      return;
    }
    const activationProperties = await this.#activateEntry(target);
    this.dispatchEvent(new CustomEvent("activate", { detail: activationProperties, bubbles: true, composed: true }));
  }
  async #activateEntry(target) {
    const children = this.#slot.assignedElements();
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
    const children = this.#slot.assignedElements();
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
      const itemIndex2 = children.findIndex((item) => item.dataset.timestamp == target.dataset.timestamp);
      const preceedingItemIndex2 = itemIndex2 - 1;
      const preceedingItem2 = preceedingItemIndex2 < 0 || preceedingItemIndex2 > children.length - 1 ? void 0 : children[preceedingItemIndex2];
      if (preceedingItem2 != null) {
        preceedingItem2.toggleAttribute(this.activeAttributeName, true);
      }
      this.dispatchEvent(new CustomEvent("reverse", { detail: { target, previousActiveEntry, toReverse, toActivate, targetIndex, previousActiveEntryIndex }, bubbles: true, composed: true }));
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
    const itemIndex = children.findIndex((item) => item.dataset.timestamp == target.dataset.timestamp);
    const preceedingItemIndex = itemIndex - 1;
    const preceedingItem = preceedingItemIndex < 0 || preceedingItemIndex > children.length - 1 ? void 0 : children[preceedingItemIndex];
    if (preceedingItem != null) {
      preceedingItem.toggleAttribute(this.activeAttributeName, true);
    }
    target.removeAttribute(this.activeAttributeName);
    this.dispatchEvent(new CustomEvent("reverse", { detail: activationProperties, bubbles: true, composed: true }));
  }
  static observedAttributes = ["reverse"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "reverse") {
      this.updateOrder();
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME5) == null) {
  customElements.define(COMPONENT_TAG_NAME5, ActionHistoryElement);
}

// src/data/records/history-entry.record.ts
var HistoryEntryRecord = class extends DataRecord {
  action = HistoryEntryType.Read;
  timestamp = -1;
  data;
  isActive = 0;
};

// src/data/channels/history-entry.channel.ts
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

// src/data/data.ts
var DEFAULT_SCHEMA = {
  "boards": "id, order",
  "tasklists": "id, boardId, order",
  "tasks": "id, boardId, listId, order",
  "taskSettings": "id, [parentRecordType+parentId]",
  "customImages": "id, boardId, parentId",
  "actionHistoryEntries": "id, boardId"
};
var TaskboardManagerElementDataConfig = class {
  name;
  version;
  schema;
  constructor(name = "TaskManager", version = 1, schema = DEFAULT_SCHEMA) {
    this.name = name;
    this.version = version;
    this.schema = schema;
  }
};
var TaskboardManagerElementData = class {
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
    this.#config = Object.assign(new TaskboardManagerElementDataConfig(), config);
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

// src/data/foreign/exported-image.ts
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

// src/data/foreign/exported-board.ts
var BoardExport = class extends extendableType() {
  constructor(board, taskSettings, backgroundImage, lists) {
    super();
    Object.assign(this, board);
    this.taskSettings = taskSettings;
    this.lists = lists;
    this.backgroundImage = backgroundImage != null ? new ImageExport(backgroundImage) : void 0;
  }
};

// src/data/foreign/exported-list.ts
var ListExport = class extends extendableType() {
  constructor(list, taskSettings, tasks) {
    super();
    Object.assign(this, list);
    this.taskSettings = taskSettings;
    this.tasks = tasks;
  }
};

// src/components/config-panel/data-panel/data-panel.css?raw
var data_panel_default = ':host\r\n{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: 7px;\r\n}\r\n\r\n\r\n#data-header\r\n{\r\n    grid-column: span 3;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n#deleted-items [data-restore="false"]\r\n{\r\n    scale: .98 .9;\r\n    opacity: .5;\r\n    pointer-events: none;\r\n}\r\n\r\n[to-delete]\r\n{\r\n    text-decoration: line-through;\r\n    color: #444;\r\n}\r\n\r\n#import-fieldset\r\n{\r\n    grid-column: span 3;\r\n    display: flex;\r\n    gap: 7px;\r\n}\r\n\r\n#import-field\r\n{\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 7px;\r\n}\r\n\r\n#import-field .container\r\n{\r\n    display: contents;\r\n}\r\n\r\n#import-board-file\r\n{\r\n    flex: 1;\r\n}\r\n\r\n\r\n#data-cleanup-fieldset\r\n{\r\n    display: grid;\r\n    grid-template-rows: max-content 1fr max-content;\r\n    gap: 7px;\r\n}\r\n\r\n#data-cleanup-range .container\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    align-self: flex-end;\r\n}\r\n#data-persist-days\r\n{\r\n    flex: 1;\r\n}\r\n\r\n#apply-data-persist-days-button\r\n{\r\n    justify-self: flex-end;\r\n}\r\n\r\n#data-pending-fieldset\r\n,#image-cache-fieldset\r\n{\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n    gap: 7px;\r\n}\r\n\r\n#deleted-items\r\n,#deleted-images\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: field;\r\n    border-radius: 2px;\r\n    border: 1px solid graytext;\r\n    color: fieldtext;\r\n    height: 130px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    margin: 0;\r\n    padding: 0;\r\n    align-self: flex-end;\r\n}\r\n\r\n#deleted-items::part(add)\r\n,#deleted-images::part(add)\r\n{\r\n    display: none !important;\r\n}\r\n\r\n.deleted-item\r\n{\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n    padding: 7px;\r\n    align-items: center;\r\n}\r\n\r\n.deleted-item-label\r\n{\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n#clear-deleted-button\r\n,#clear-image-cache-button\r\n{\r\n    justify-self: flex-end;\r\n}\r\n\r\n#data-clear-fieldset\r\n{\r\n    display: grid;\r\n    gap: 7px;\r\n    grid-column: span 3;\r\n}\r\n\r\n#clear-data-button\r\n{\r\n    justify-self: flex-end;\r\n}\r\n@media (max-width: 665px) \r\n{\r\n    :host\r\n    {\r\n        grid-template-columns: 1fr;\r\n        column-gap: 0;\r\n    }\r\n    :host > *\r\n    {\r\n        grid-column: 1;\r\n    }\r\n\r\n    #import-fieldset\r\n    {\r\n        flex-direction: column;\r\n    }\r\n    #import-field .container\r\n    {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n    }\r\n    #import-button\r\n    {\r\n        align-self: flex-end;\r\n    }\r\n    #config-data-caches\r\n    {\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        gap: 7px;\r\n    }\r\n}';

// src/components/config-panel/data-panel/data-panel.html?raw
var data_panel_default2 = '\r\n<header id="data-header" class="page-header">Data</header>\r\n<fieldset id="import-fieldset" class="config-fieldset">\r\n    <legend id="import-legend" class="config-legend">Import</legend>\r\n    <form-field id="import-field" class="field config-field data-field" label="Taskboard Data File" input-selector="fileimage-input">\r\n        <fileimage-input id="import-board-file" exportparts="field:input,text,clear:import-clear,view-link:import-view-link">\r\n            <svg slot="icon" id="import-file-icon" class="icon">\r\n                <use href="#icon-definition_file"></use>\r\n            </svg>\r\n        </fileimage-input>\r\n    </form-field>\r\n    <button id="import-button" class="label-button" disabled>\r\n        <svg id="import-button-icon" class="icon">\r\n            <use href="#icon-definition_import"></use>\r\n        </svg>\r\n        <span id="import-button-label" class="label">Import Board</span>\r\n    </button>\r\n</fieldset>\r\n<fieldset id="data-cleanup-fieldset" class="config-fieldset">\r\n    <legend id="data-cleanup-legend" class="config-legend">Data Cleanup</legend>\r\n    <div id="data-cleanup-description">\r\n        <p class="text">Deleted items persist in the data store in order to enable Undo and Redo functionality.</p>\r\n        <p class="text">Set how many days deleted item should perisist using the slider below.</p>\r\n    </div>\r\n    <form-field label="Days" id="data-cleanup-range" class="field config-field data-field">\r\n        <input type="range" id="data-persist-days" class="input range" max="30" list="data-persist-days-values" />\r\n        <datalist id="data-persist-days-values"></datalist>\r\n        <span slot="postfix" id="data-persist-days-value"></span>\r\n        <button slot="postfix" id="apply-data-persist-days-button" class="button label-button data-button">\r\n            <svg id="apply-data-persist-days-icon" class="icon">\r\n                <use href="#icon-definition_confirm-check"></use>\r\n            </svg>\r\n            <span id="apply-data-persist-days-label">Apply</span>\r\n        </button>\r\n    </form-field>\r\n</fieldset>\r\n<fieldset id="data-pending-fieldset" class="config-fieldset">\r\n    <legend id="data-pending-legend" class="config-legend">Pending Cleanup</legend>\r\n    <div id="data-pending-description">\r\n        <p class="text">The following items have been deleted and will be purged from the data store after the configured cleanup days.</p>\r\n    </div>\r\n    <editable-list id="deleted-items" class="cache-list" remove-class="restore-button button icon-button" exportparts="remove:restore-item-button">\r\n        <template part="remove-button">\r\n            <svg class="icon restore-icon restore-item-icon" class="icon" title="Restore">\r\n                <use href="#icon-definition_restore"></use>\r\n            </svg>\r\n        </template>\r\n    </editable-list>\r\n    <button id="clear-deleted-button" class="label-button data-button">\r\n        <svg id="clear-deleted-icon" class="icon" title="Clear">\r\n            <use href="#icon-definition_trash"></use>\r\n        </svg>\r\n        <span id="clear-deleted-label" class="label">Clear Pending Items</span>\r\n    </button>\r\n</fieldset>\r\n<fieldset id="image-cache-fieldset" class="config-fieldset">\r\n    <legend id="image-cache-legend" class="config-legend">Image Cache</legend>\r\n    <div id="image-cache-description">\r\n        <p class="text">Caching some image files provides undo and redo support.</p>\r\n        <p class="text">The images below have been deleted, but will not be automatically removed until they reach the expiration limit.</p>\r\n    </div>\r\n    <editable-list id="deleted-images" remove-class="button icon-button deleted-item-remove-button" class="cache-list" exportparts="button, remove:delete-cached-image-button">\r\n        <template part="remove-button">\r\n            <svg class="icon delete-image-icon trash-icon" title="Clear">\r\n                <use href="#icon-definition_trash"></use>\r\n            </svg>\r\n        </template>\r\n    </editable-list>\r\n    <button id="clear-image-cache-button" class="label-button data-button">\r\n        <svg id="clear-images-icon" title="Clear">\r\n            <use href="#icon-definition_trash"></use>\r\n        </svg>\r\n        <span id="clear-images-label" class="label">Clear Image Cache</span>\r\n    </button>\r\n</fieldset>\r\n<fieldset id="data-clear-fieldset" class="config-fieldset">\r\n    <legend id="data-clear-legend" class="config-legend">Clear Data</legend>\r\n    <div id="data-clear-description">\r\n        <p class="text">Delete all data, including app settings and history.</p>\r\n    </div>\r\n    <button id="clear-data-button" class="label-button danger-button">\r\n        <svg id="clear-data-icon" class="icon" title="Clear">\r\n            <use href="#icon-definition_trash"></use>\r\n        </svg>\r\n        <span id="clear-data-label" class="label">Clear All Data</span>\r\n    </button>\r\n</fieldset>';

// src/data/history/history-entry-data.ts
var HistoryEntryData = class {
  targetType;
  properties;
  constructor(targetType, properties) {
    this.targetType = targetType;
    this.properties = properties;
  }
};

// src/resources/utils.ts
function snapToStep(target, steps) {
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
function createOptionElement(value) {
  const option = document.createElement("option");
  const stringValue = value.toString();
  option.value = stringValue;
  option.textContent = stringValue;
  return option;
}

// src/components/config-panel/data-panel/data-panel.ts
var DaysToPersistValues = [0, 7, 30];
var DEFAULT_PERSIST_DAYS = "7";
var COMPONENT_STYLESHEET5 = new CSSStyleSheet();
COMPONENT_STYLESHEET5.replaceSync(`${shared_default}
    ${data_panel_default}`);
var COMPONENT_TEMPLATE3 = `${data_panel_default2}
${defineIcons(
  "File" /* File */,
  "Import" /* Import */,
  "Trash" /* Trash */,
  "ConfirmCheck" /* ConfirmCheck */,
  "Restore" /* Restore */
)}`;
var COMPONENT_TAG_NAME6 = "data-panel";
var DataPanelElement = class extends HTMLElement {
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
  //#region Housekeeping
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE3;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET5);
    this.addEventListener("click", this.#onClick.bind(this));
    this.findElement("data-persist-days").addEventListener("change", this.#daysToPersist_onChange.bind(this));
    this.findElement("deleted-items").addEventListener("remove", this.#deletedItems_onRemove.bind(this));
    this.findElement("deleted-images").addEventListener("remove", this.#deletedImages_onRemove.bind(this));
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
  }
  //#endregion Housekeeping
  //#region API
  #openImportManager;
  #openBoard;
  #refreshActionHistory;
  #refreshBoards;
  #addActionHistoryEntry;
  async init(options) {
    this.#openImportManager = options.openImportManager;
    this.#openBoard = options.openBoard;
    this.#refreshActionHistory = options.refreshActionHistory;
    this.#refreshBoards = options.refreshBoards;
    this.#addActionHistoryEntry = options.addActionHistoryEntry;
    const importFileInput = this.getElement("import-board-file");
    importFileInput.addEventListener("change", () => {
      const value = importFileInput.value;
      if (value != null) {
        this.getElement("import-button").toggleAttribute("disabled", false);
      } else {
        this.getElement("import-button").toggleAttribute("disabled", true);
      }
    });
    const daysToPersistData = await DataService.getAppSetting("daysToPersistData" /* DaysToPersistData */) ?? DEFAULT_PERSIST_DAYS;
    this.#prepareDaysToPersistOptions(daysToPersistData);
    this.refreshCache();
  }
  async refreshCache() {
    const deletedItems = [];
    const [deletedBoards, deletedLists, deletedTasks, deletedImages] = await DataService.getDeletedItems();
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
    [...deletedImagesElement.children].forEach((item) => {
      if (!(item instanceof HTMLTemplateElement)) {
        item.remove();
      }
    });
    deletedImagesElement.append(...deletedImageElements);
    const deletedItemsElement = this.findElement("deleted-items");
    [...deletedItemsElement.children].forEach((item) => {
      if (!(item instanceof HTMLTemplateElement)) {
        item.remove();
      }
    });
    deletedItemsElement.append(...deletedItems);
  }
  async clearData() {
    const confirmed = await FeedbackService.getConfirmation("Are you sure you want to delete all data associated with the app? This CAN NOT be undone.", "danger");
    if (confirmed == false) {
      return;
    }
    await DataService.clearAllData();
    this.#refreshBoards();
    this.#refreshActionHistory();
    this.refreshCache();
  }
  //#endregion API
  //#region Management
  #prepareDaysToPersistOptions(daysToPersist) {
    const daysToPersistOptions = Array.from(DaysToPersistValues).map((value) => createOptionElement(value));
    this.findElement("data-persist-days-values").append(...daysToPersistOptions);
    this.findElement("data-persist-days").value = daysToPersist;
    this.findElement("data-persist-days-value").textContent = daysToPersist;
  }
  #createDeletedItem(data, recordType, canRestore, timestamp) {
    const item = document.createElement("div");
    item.setAttribute("data-record-type", recordType);
    item.setAttribute("part", "deleted-item");
    item.classList.add("deleted-item");
    item.setAttribute("data-timestamp", timestamp.toString());
    const label = document.createElement("span");
    label.setAttribute("part", "deleted-item-label");
    label.classList.add("deleted-item-label");
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
  async #deleteItem(item, refresh = true) {
    const recordId = item.dataset.recordId;
    if (recordId == null) {
      throw new Error('Unable to manage entry with unset "data-record-id" attribute');
    }
    const recordType = item.dataset.recordType;
    if (recordType == null) {
      throw new Error('Unable to manage entry with unset "data-record-type" attribute');
    }
    const channel = recordType == "board" ? DataService.data.boards : recordType == "list" ? DataService.data.lists : recordType == "task" ? DataService.data.tasks : null;
    if (channel == null) {
      FeedbackService.showErrorMessageCard("An error occurred deleting a cache item.");
      console.error(`Unable to delete entry with unknown record type.`);
      return;
    }
    await channel.delete(recordId, true);
    const historyEntries = await DataService.getHistoryEntries();
    const toDelete = [];
    for (let i = 0; i < historyEntries.length; i++) {
      const entry = historyEntries[i];
      const entryId = entry.data.properties.id;
      if (entryId == recordId) {
        toDelete.push(entry.id);
      }
    }
    await DataService.deleteHistoryEntries(...toDelete);
    if (refresh == true) {
      this.#refreshActionHistory();
    }
  }
  async #deleteImage(item, refresh = true) {
    const recordId = item.dataset.recordId;
    if (recordId == null) {
      throw new Error('Unable to manage image entry with unset "data-record-id" attribute');
    }
    await DataService.deleteImage(recordId, true);
    const historyEntries = await DataService.getHistoryEntries();
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
    await DataService.saveHistoryEntries(...updatedEntries);
    if (refresh == true) {
      this.#refreshActionHistory();
    }
  }
  async #restoreDeletedItem(targetType, recordId, timestamp) {
    if (targetType == null) {
      console.error("Unable to restore record with unknown type or id");
      return;
    }
    const channel = targetType == "board" ? DataService.data.boards : targetType == "list" ? DataService.data.lists : targetType == "task" ? DataService.data.tasks : null;
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
      this.#openBoard(recordId);
      this.#refreshBoards();
    }
    this.refreshCache();
  }
  //#endregion Management
  //#region Handlers
  #onClick(event) {
    const composedPath = event.composedPath().filter((item) => item instanceof HTMLElement);
    const importButton = composedPath.find((item) => item.id == "import-button");
    if (importButton != null) {
      this.#importButton_onClick();
      return;
    }
    const applyDaysToPersistButton = composedPath.find((item) => item.id == "apply-data-persist-days-button");
    if (applyDaysToPersistButton != null) {
      this.#applyDaysToPersist_onClick();
      return;
    }
    const clearDataButton = composedPath.find((item) => item.id == "clear-data-button");
    if (clearDataButton != null) {
      this.#clearData_onClick();
      return;
    }
    const clearDeletedButton = composedPath.find((item) => item.id == "clear-deleted-button");
    if (clearDeletedButton != null) {
      this.#clearDeleted_onClick();
      return;
    }
    const clearImagesButton = composedPath.find((item) => item.id == "clear-image-cache-button");
    if (clearImagesButton != null) {
      this.#clearImageCache_onClick();
      return;
    }
  }
  async #importButton_onClick() {
    const importFileInput = this.findElement("import-board-file");
    const boardDataFile = importFileInput.files != null ? importFileInput.files[0] : null;
    if (boardDataFile == null) {
      FeedbackService.showErrorMessageCard(`An error occurred attempting to import board data. Confirm that the selected import file is a valid board export.`);
      console.error("Unable to import selected file.");
      return;
    }
    const boardDataText = await boardDataFile.text();
    const boardData = JSON.parse(boardDataText);
    this.#openImportManager(boardData);
  }
  #applyDaysToPersist_onClick() {
    const daysToPersist = this.findElement("data-persist-days").value;
    DataService.saveAppSetting("daysToPersistData" /* DaysToPersistData */, daysToPersist);
  }
  #clearData_onClick() {
    this.clearData();
  }
  async #clearDeleted_onClick() {
    const items = [...this.findElement("deleted-items").querySelectorAll('[data-record-id]:not([data-restore="false"])')];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      await this.#deleteItem(item, false);
    }
    this.refreshCache();
    this.#refreshActionHistory();
  }
  async #clearImageCache_onClick() {
    const items = [...this.findElement("deleted-images").querySelectorAll("[data-record-id]")];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      await this.#deleteImage(item, false);
    }
    this.refreshCache();
    this.#refreshActionHistory();
  }
  #daysToPersist_onChange(event) {
    const dataPersistsDaysValues = DaysToPersistValues;
    const input = event.target;
    snapToStep(input, dataPersistsDaysValues);
    this.findElement("data-persist-days-value").textContent = input.value;
  }
  #deletedItems_onRemove(event) {
    const item = event.detail;
    const recordType = item.dataset.recordType;
    const recordId = item.dataset.recordId;
    const timestamp = item.getAttribute("data-timestamp");
    const targetType = recordType == "board" ? "board" /* Board */ : recordType == "list" ? "list" /* List */ : recordType == "task" ? "task" /* Task */ : null;
    this.#restoreDeletedItem(targetType, recordId, timestamp);
  }
  #deletedImages_onRemove(event) {
    const item = event.detail;
    return this.#deleteImage(item);
  }
  //#endregion Handlers
  //#region Internal
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll(":not(form-field,.postfix,.prefix,.container, .field-label)[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      const classedElement = classedElements[i];
      classedElement.part.add(...classedElements[i].classList);
    }
    const formFieldElements = [...this.shadowRoot.querySelectorAll("form-field")];
    for (let i = 0; i < formFieldElements.length; i++) {
      const formFieldElement = formFieldElements[i];
      const fieldId = formFieldElement.id;
      const container = formFieldElement.querySelector(".container");
      container.part.add("container", "field-container", `${fieldId}-container`);
      const label = formFieldElement.querySelector(".field-label");
      label.part.add("label", "field-label", `${fieldId}-label`);
      const prefix = formFieldElement.querySelector(".prefix");
      prefix.part.add("prefix", "field-prefix", `${fieldId}-prefix`);
      const postfix = formFieldElement.querySelector(".postfix");
      postfix.part.add("postfix", "field-postfix", `${fieldId}-postfix`);
      const enabledCheckbox = formFieldElement.querySelector(".enabled-checkbox");
      enabledCheckbox?.part.add("enabled-checkbox", "field-enabled-checkbox", `${fieldId}-enabled-checkbox`);
    }
  }
  //#endregion Internal
};
if (customElements.get(COMPONENT_TAG_NAME6) == null) {
  customElements.define(COMPONENT_TAG_NAME6, DataPanelElement);
}

// src/data/data.service.ts
var MILLISECONDSINDAY = 1e3 * 60 * 60 * 24;
var DataService = class _DataService {
  static #data;
  static #initPromise;
  static #hasStartedInitialization = false;
  static #hasFinishedInitialization = false;
  static async init(datastoreName) {
    _DataService.#hasStartedInitialization = true;
    _DataService.#data = new TaskboardManagerElementData(datastoreName == null ? void 0 : { name: datastoreName });
    _DataService.#initPromise = this.#data.init();
    await this.#initPromise;
    _DataService.#hasFinishedInitialization = true;
  }
  static get data() {
    if (_DataService.#hasStartedInitialization == false) {
      throw new Error("Cannot get data before service has been initialized.");
    }
    if (_DataService.#hasFinishedInitialization == false) {
      throw new Error("Cannot get data before service has finished initializing.");
    }
    return this.#data;
  }
  //#region Settings
  static async getAppSetting(key) {
    await this.#initPromise;
    return _DataService.#data.getValue(key);
  }
  static async saveAppSetting(key, value) {
    await this.#initPromise;
    await _DataService.#data.setValue(key, value);
  }
  //#endregion Settings
  //#region Boards
  static async getAllBoardRecords() {
    const boardChannel = _DataService.#getChannel(_DataService.data.boards, "BOARD" /* BOARD */);
    return (await boardChannel.getAll()).filter((item) => item.deletedTimestamp == null);
  }
  static async getBoardRecords(...ids) {
    if (ids.length == 0) {
      return [];
    }
    const channel = _DataService.#getChannel(_DataService.data.boards, "BOARD" /* BOARD */);
    return (await channel.getItems(ids)).filter((item) => item.deletedTimestamp == null);
  }
  static async getBoardRecord(id) {
    const channel = _DataService.#getChannel(_DataService.data.boards, "BOARD" /* BOARD */);
    return channel.get(id);
  }
  static async getBoardLists(id) {
    const channel = _DataService.#getChannel(_DataService.data.boards, "BOARD" /* BOARD */);
    return channel.getTaskLists(id);
  }
  static async getBoardTasks(id) {
    const channel = _DataService.#getChannel(_DataService.data.boards, "BOARD" /* BOARD */);
    return channel.getTasks(id);
  }
  static async createBoard(order) {
    const boardChannel = _DataService.#getChannel(_DataService.data.boards, "BOARD" /* BOARD */);
    const listChannel = this.#getChannel(this.#data.lists, "LIST" /* LIST */);
    const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, "BOARD" /* BOARD */);
    const [board, taskSettings, listData] = await boardChannel.create();
    board.order = order;
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
    return board;
  }
  static async saveBoardRecords(...items) {
    if (items.length == 0) {
      return;
    }
    const boardChannel = _DataService.#getChannel(_DataService.data.boards, "BOARD" /* BOARD */);
    return boardChannel.saveItems(items);
  }
  static async deleteBoard(id) {
    const channel = _DataService.#getChannel(_DataService.data.boards, "BOARD" /* BOARD */);
    return channel.delete(id);
  }
  //#endregion Boards
  //#region Lists
  static async createList(list, settings) {
    const taskLists = this.#getChannel(this.#data.lists, "LIST" /* LIST */);
    return taskLists.create(list, settings);
  }
  static async getListRecord(id) {
    const channel = _DataService.#getChannel(_DataService.data.lists, "LIST" /* LIST */);
    return channel.get(id);
  }
  static async saveListRecords(...items) {
    if (items.length == 0) {
      return;
    }
    const channel = _DataService.#getChannel(_DataService.data.lists, "LIST" /* LIST */);
    return channel.saveItems(items);
  }
  static async deleteListRecords(...ids) {
    if (ids.length == 0) {
      return;
    }
    const channel = _DataService.#getChannel(_DataService.data.lists, "LIST" /* LIST */);
    return channel.deleteItems(ids);
  }
  //#endregion Lists
  //#region Task Settings
  static async getTaskSettingsRecords(...ids) {
    if (ids.length == 0) {
      return [];
    }
    const channel = _DataService.#getChannel(_DataService.data.taskSettings, "BOARD" /* BOARD */);
    return (await channel.getItems(ids)).filter((item) => item.deletedTimestamp == null);
  }
  static async getTaskSettingsRecord(id) {
    const channel = _DataService.#getChannel(_DataService.data.taskSettings, "BOARD" /* BOARD */);
    return channel.get(id);
  }
  static async saveTaskSettingsRecords(...items) {
    if (items.length == 0) {
      return;
    }
    const channel = _DataService.#getChannel(_DataService.data.taskSettings, "SETTINGS" /* SETTINGS */);
    return channel.saveItems(items);
  }
  //#endregion Task Settings
  //#region Tasks
  static async createTask(boardId, listId) {
    const tasks = this.#getChannel(this.#data.tasks, "TASK" /* TASK */);
    return tasks.create(boardId, listId);
  }
  static async getTaskRecord(id) {
    const channel = _DataService.#getChannel(_DataService.data.tasks, "TASK" /* TASK */);
    return channel.get(id);
  }
  static async getTaskRecords(...ids) {
    if (ids.length == 0) {
      return [];
    }
    const channel = _DataService.#getChannel(_DataService.data.tasks, "TASK" /* TASK */);
    return (await channel.getItems(ids)).filter((item) => item.deletedTimestamp == null);
  }
  static async saveTaskRecords(...items) {
    if (items.length == 0) {
      return;
    }
    const channel = _DataService.#getChannel(_DataService.data.tasks, "TASK" /* TASK */);
    return channel.saveItems(items);
  }
  static async deleteTaskRecords(...ids) {
    if (ids.length == 0) {
      return;
    }
    const channel = _DataService.#getChannel(_DataService.data.tasks, "TASK" /* TASK */);
    return channel.deleteItems(ids);
  }
  //#endregion Tasks
  //#region Images
  static async getImageRecord(id) {
    const channel = _DataService.#getChannel(_DataService.data.customImages, "IMAGE" /* IMAGE */);
    return channel.get(id);
  }
  //#endregion
  //#region History
  static getHistoryEntries() {
    const channel = this.#getChannel(this.#data.historyEntries, "HISTORY" /* HISTORY */);
    return channel.getAll("timestamp");
  }
  static getHistoryEntry(id) {
    const channel = this.#getChannel(this.#data.historyEntries, "HISTORY" /* HISTORY */);
    return channel.get(id);
  }
  static createHistoryEntry(data, action) {
    const channel = this.#getChannel(this.#data.historyEntries, "HISTORY" /* HISTORY */);
    return channel.create(data, action);
  }
  static saveHistoryEntry(entry) {
    const channel = this.#getChannel(this.#data.historyEntries, "HISTORY" /* HISTORY */);
    return channel.save(entry);
  }
  static saveHistoryEntries(...entries) {
    const channel = this.#getChannel(this.#data.historyEntries, "HISTORY" /* HISTORY */);
    return channel.saveItems(entries);
  }
  static deleteHistoryEntriesIfExists(ids) {
    const channel = this.#getChannel(this.#data.historyEntries, "HISTORY" /* HISTORY */);
    return channel.deleteIfExists(ids);
  }
  static deleteHistoryEntries(...ids) {
    const channel = this.#getChannel(this.#data.historyEntries, "HISTORY" /* HISTORY */);
    return channel.deleteItems(ids);
  }
  static async reverseUpdate(channel, currentEntry, target) {
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
      const taskSettingsChannel = _DataService.#getChannel(_DataService.data.taskSettings, "SETTINGS" /* SETTINGS */);
      const settingsTarget = await taskSettingsChannel.get(currentEntry.data.properties.taskSettings.id);
      if (settingsTarget == null) {
        throw new Error("Unable to find target record.");
      }
      for (const [key, value] of currentEntry.data.properties.taskSettings.updates) {
        settingsTarget[key] = value.from;
      }
      await taskSettingsChannel.save(settingsTarget);
    }
    if (currentEntry.data.properties.backgroundImages != null) {
      const imagesChannel = _DataService.#getChannel(_DataService.data.customImages, "IMAGE" /* IMAGE */);
      const updatedImages = [];
      const deletedImageIds = [];
      for (let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++) {
        const data = currentEntry.data.properties.backgroundImages[i];
        const imageTarget = await imagesChannel.get(data.id);
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
      await imagesChannel.saveItems(updatedImages);
      await imagesChannel.deleteItems(deletedImageIds);
    }
  }
  static async activateUpdate(channel, currentEntry, target) {
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
      const taskSettingsChannel = _DataService.#getChannel(_DataService.data.taskSettings, "SETTINGS" /* SETTINGS */);
      const settingsTarget = await taskSettingsChannel.get(currentEntry.data.properties.taskSettings.id);
      if (settingsTarget == null) {
        throw new Error("Unable to find target record.");
      }
      for (const [key, value] of currentEntry.data.properties.taskSettings.updates) {
        settingsTarget[key] = value.to;
      }
      await taskSettingsChannel.save(settingsTarget);
    }
    if (currentEntry.data.properties.backgroundImages != null) {
      const imagesChannel = _DataService.#getChannel(_DataService.data.customImages, "IMAGE" /* IMAGE */);
      const updatedImages = [];
      const restoredImageIds = [];
      for (let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++) {
        const data = currentEntry.data.properties.backgroundImages[i];
        const imageTarget = await imagesChannel.get(data.id);
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
      await imagesChannel.saveItems(updatedImages);
      await imagesChannel.restoreItems(restoredImageIds);
    }
  }
  //#endregion History
  //#region Cache
  static async getDeletedItems() {
    const boardChannel = this.#getChannel(this.#data.boards, "BOARD" /* BOARD */);
    const listChannel = this.#getChannel(this.#data.lists, "LIST" /* LIST */);
    const taskChannel = this.#getChannel(this.#data.tasks, "TASK" /* TASK */);
    const imageChannel = this.#getChannel(this.#data.customImages, "IMAGE" /* IMAGE */);
    const boards = await boardChannel.getAll();
    const lists = await listChannel.getAll();
    const tasks = await taskChannel.getAll();
    const images = await imageChannel.getAll();
    const deletedBoards = boards.filter((item) => item.deletedTimestamp != null);
    const deletedLists = lists.filter((item) => item.deletedTimestamp != null);
    const deletedTasks = tasks.filter((item) => item.deletedTimestamp != null);
    const deletedImages = images.filter((item) => item.deletedTimestamp != null);
    return [deletedBoards, deletedLists, deletedTasks, deletedImages];
  }
  static saveImage(item) {
    const channel = this.#getChannel(this.#data.customImages, "IMAGE" /* IMAGE */);
    return channel.save(item);
  }
  static createImageFromImage(image) {
    const channel = this.#getChannel(this.#data.customImages, "IMAGE" /* IMAGE */);
    return channel.createFromImage(image);
  }
  static deleteImage(id, overrideSoftDelete = false) {
    const channel = this.#getChannel(this.#data.customImages, "IMAGE" /* IMAGE */);
    return channel.delete(id, overrideSoftDelete);
  }
  static deleteImages(...ids) {
    const channel = this.#getChannel(this.#data.customImages, "IMAGE" /* IMAGE */);
    return channel.deleteItems(ids);
  }
  //#endregion Cache
  //#region Import/Export
  static async prepareExportData(target, id) {
    const exportBackgroundImage = target.findElement("board-settings").findElement("export-background-image").checked;
    const boardChannel = this.#getChannel(this.#data.boards, "BOARD" /* BOARD */);
    const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, "BOARD" /* BOARD */);
    const imageChannel = this.#getChannel(this.#data.customImages, "IMAGE" /* IMAGE */);
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
      const target2 = listExports.find((listItem) => listItem.taskSettingsId == item.id);
      if (target2 == null) {
        throw new Error(`Error assigning task settings to target list`);
      }
      target2.taskSettings = item;
    }
    boardExportData.lists = listExports;
    return boardExportData;
  }
  static async exportBoard(target, id) {
    const boardExportData = await this.prepareExportData(target, id);
    this.#downloadExportData(target, boardExportData);
  }
  static async importBoard(boardData, order, errorMessage) {
    try {
      const boardChannel = this.#getChannel(this.#data.boards, "BOARD" /* BOARD */);
      const listChannel = this.#getChannel(this.#data.lists, "LIST" /* LIST */);
      const taskChannel = this.#getChannel(this.#data.tasks, "TASK" /* TASK */);
      const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, "BOARD" /* BOARD */);
      const imageChannel = this.#getChannel(this.#data.customImages, "IMAGE" /* IMAGE */);
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
      FeedbackService.showMessageDialog(errorMessage || "An error occurred importing the board data. Please confirm the import file contains valid board data.");
    }
  }
  //#endregion Import/Export
  //#region Management
  static clearAllData() {
    return this.#data.clearAllData();
  }
  //#endregion Management
  //#region Utilities
  static async removeExpiredData() {
    const boardChannel = _DataService.#getChannel(_DataService.#data.boards, "BOARD" /* BOARD */);
    const listChannel = _DataService.#getChannel(_DataService.#data.lists, "LIST" /* LIST */);
    const taskChannel = _DataService.#getChannel(_DataService.#data.tasks, "TASK" /* TASK */);
    const taskSettingsChannel = _DataService.#getChannel(_DataService.#data.taskSettings, "BOARD" /* BOARD */);
    const imageChannel = _DataService.#getChannel(_DataService.#data.customImages, "IMAGE" /* IMAGE */);
    const daysToPersistData = await _DataService.getAppSetting("daysToPersistData" /* DaysToPersistData */) ?? DEFAULT_PERSIST_DAYS;
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
  //#endregion Utilities
  //#region Internal
  static #getChannel(channel, errorType = "UNKNOWN" /* UNKNOWN */) {
    if (_DataService.data.isInitialized == false || channel == null) {
      FeedbackService.showErrorMessageDialog(errorType);
      throw new Error(`Data Access Error`);
    }
    return channel;
  }
  static #downloadExportData(target, boardExportData) {
    const currentDate = /* @__PURE__ */ new Date();
    const currentDateString = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;
    const filename = `taskboard_export_${currentDateString}.json`;
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:application/json;charset=utf-8, " + encodeURIComponent(JSON.stringify(boardExportData, null, 2))
    );
    element.setAttribute("download", filename);
    target.appendChild(element);
    element.click();
    target.removeChild(element);
  }
  static #getExpiredRecordIds(allRecords, comparisonTime) {
    const toDelete = [];
    for (let i = 0; i < allRecords.length; i++) {
      const record = allRecords[i];
      if (record.deletedTimestamp != null && record.deletedTimestamp < comparisonTime) {
        toDelete.push(record.id);
      }
    }
    return toDelete;
  }
  //#endregion Internal
};

// src/components/app-menu/app-menu.ts
var COMPONENT_STYLESHEET6 = new CSSStyleSheet();
COMPONENT_STYLESHEET6.replaceSync(`${shared_default}
    ${app_menu_default}`);
var COMPONENT_TEMPLATE4 = `${app_menu_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "MagnifyingGlass" /* MagnifyingGlass */,
  "Gear" /* Gear */,
  "PlusIcon" /* PlusIcon */
)}`;
var COMPONENT_TAG_NAME7 = "app-menu";
var AppMenuElement = class extends HTMLElement {
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  #draggingBoard = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE4;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET6);
    this.#addDragHandlers();
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
  }
  //#region API
  #addBoard;
  #editBoard;
  init(options) {
    this.#addBoard = options.addBoard;
    this.#editBoard = options.editBoard;
    this.addEventListener("click", this.#onClick.bind(this));
  }
  async refresh() {
    const boardRecords = await DataService.getAllBoardRecords();
    this.updateBoards(boardRecords);
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
  //#endregion
  //#region Handlers
  #onClick(event) {
    const composedPath = event.composedPath().filter((item) => item instanceof HTMLElement);
    const longpress = composedPath.find((item) => item.classList.contains("longpress"));
    if (longpress != null) {
      event.stopPropagation();
      return;
    }
    const editButton = composedPath.find((item) => item.classList.contains("board-edit-button"));
    if (editButton != null) {
      const boardId = editButton.parentElement.dataset.route.split("/")[1];
      this.#editBoard(boardId);
      event.stopPropagation();
      return;
    }
    const newBoardButton = composedPath.find((item) => item.classList.contains("new-board-button"));
    if (newBoardButton != null) {
      this.#addBoard();
      return;
    }
  }
  boardsList_onDragover(event) {
    event.preventDefault();
    event.stopPropagation();
    this.#updateBoardItemOrder(event.clientY);
  }
  async boardsList_onDrop(_event) {
    this.#updateBoardRecordsAfterMove();
  }
  //#endregion Handlers
  //#region Management
  #createBoardMenuItem(board) {
    const element = document.createElement("a");
    element.tabIndex = 0;
    element.innerHTML = `<span part="handle menu-item-handle" class="handle menu-item-handle"></span>
        <span part="board-item-name" class="board-item-name">${board.name}<span>`;
    element.setAttribute("part", "board");
    element.classList.add("board");
    element.dataset.route = `board/${board.id}`;
    let timeout;
    const cancel = () => {
      if (timeout != null) {
        clearTimeout(timeout);
        timeout = null;
      }
      element.removeEventListener("pointerleave", cancel);
      element.removeEventListener("pointermove", cancel);
      requestAnimationFrame(() => {
        element.classList.remove("awaiting-longpress", "pre-longpress");
        element.part.remove("awaiting-longpress", "pre-longpress");
      });
    };
    const cancelPointerUp = () => {
      cancel();
      element.removeEventListener("pointerup", cancelPointerUp);
      requestAnimationFrame(() => {
        element.classList.remove("longpress");
        element.part.remove("longpress");
      });
    };
    element.addEventListener("pointerdown", (event) => {
      if (event.composedPath().find((item) => item instanceof HTMLElement && item.classList.contains("menu-item-handle"))) {
        return;
      }
      timeout = setTimeout(() => {
        if (timeout == null) {
          return;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          element.classList.add("longpress");
          element.part.add("longpress");
          this.#editBoard(board.id);
          cancel();
          const boards = [...this.querySelectorAll("a")];
          for (let i = 0; i < boards.length; i++) {
            boards[i].classList.remove("selected");
            boards[i].part.remove("selected");
            boards[i].toggleAttribute("aria-current", false);
          }
          element.classList.add("selected");
          element.part.add("selected");
          element.setAttribute("aria-current", "page");
        }, 1e3);
        element.classList.replace("pre-longpress", "awaiting-longpress");
        element.part.replace("pre-longpress", "awaiting-longpress");
      }, 250);
      element.addEventListener("pointerup", cancelPointerUp);
      element.addEventListener("pointerleave", cancel);
      element.addEventListener("pointermove", cancel);
      element.classList.add("pre-longpress");
      element.part.add("pre-longpress");
    });
    const handle = element.querySelector(".menu-item-handle");
    handle.addEventListener("pointerdown", (_event) => {
      element.draggable = true;
    });
    handle.addEventListener("pointerup", () => {
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
  async #updateBoardRecordsAfterMove() {
    const toSave = await this.#getOrderedBoards();
    await DataService.saveBoardRecords(...toSave);
  }
  async #getOrderedBoards() {
    const orderedIds = [];
    const boardItems = [...this.querySelectorAll("a.board")];
    for (let i = 0; i < boardItems.length; i++) {
      const boardItem = boardItems[i];
      const boardId = boardItem.dataset.route.split("/")[1];
      if (boardId == null) {
        throw new Error("Unset board id");
      }
      orderedIds.push(boardId);
    }
    const boards = await DataService.getBoardRecords(...orderedIds);
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
  //#endregion
};
if (customElements.get(COMPONENT_TAG_NAME7) == null) {
  customElements.define(COMPONENT_TAG_NAME7, AppMenuElement);
}

// src/components/welcome-panel/welcome-panel.css?raw
var welcome_panel_default = ":host\r\n{\r\n    align-self: center;\r\n    justify-self: center;\r\n    padding: 1em;\r\n}\r\n\r\n#recent-boards\r\n{\r\n    display: grid;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n#recent-boards::part(items)\r\n{\r\n    display: grid;\r\n    \r\n}\r\n#recent-boards a\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 3px 7px;\r\n}\r\n#recent-boards a:hover\r\n{\r\n    background-color: highlight;\r\n    color: highlighttext;\r\n}\r\n#new-board-button\r\n{\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 10px;\r\n}\r\n\r\n#logo\r\n{\r\n    width: 100%;\r\n    height: 80px;\r\n}";

// src/components/welcome-panel/welcome-panel.html?raw
var welcome_panel_default2 = '<fieldset id="welcome-fieldset">\r\n    <legend id="welcome-legend">Welcome</legend>\r\n    <header id="welcome-header" class="panel-header">\r\n        <svg id="welcome-logo" class="logo">\r\n            <use href="#icon-definition_logo"></use>\r\n        </svg>\r\n    </header>\r\n    <div id="welcome-description" class="description">\r\n        <p id="welcome-text" class="text">Welcome to your Taskboard Manager!</p>\r\n        <p id="create-text" class="text">Create a <a id="new-board-link" class="link">new board</a>, or select a recently-opened board below.</p>\r\n    </div>\r\n    <fieldset id="recent-fieldset">\r\n        <legend id="recent-legend">Recent Boards</legend>\r\n        <editable-list id="recent-boards" remove-class="button recent-board-remove-button icon-button" exportparts="edit:edit-button, handle: edit-handle, button, remove:remove-button">\r\n            <slot></slot>\r\n            <button type="button" slot="add" id="new-board-button" class="new-board-button label-button" title="New Board">\r\n                <svg class="icon plus" >\r\n                    <use href="#icon-definition_plus"></use>\r\n                </svg>\r\n                <span class="label">New Board</span>\r\n            </button>\r\n            <template part="remove-button">\r\n                <svg class="icon button-icon remove">\r\n                    <use href="#icon-definition_close-cross"></use>\r\n                </svg>\r\n            </template>\r\n        </editable-list>\r\n    </fieldset>\r\n</fieldset>';

// src/components/welcome-panel/welcome-panel.ts
var WelcomePanelAttributes = /* @__PURE__ */ ((WelcomePanelAttributes2) => {
  WelcomePanelAttributes2["pathId"] = "path-id";
  return WelcomePanelAttributes2;
})(WelcomePanelAttributes || {});
var COMPONENT_STYLESHEET7 = new CSSStyleSheet();
COMPONENT_STYLESHEET7.replaceSync(`${shared_default}
    ${welcome_panel_default}`);
var COMPONENT_TEMPLATE5 = `${welcome_panel_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "LogoType" /* LogoType */,
  "Logo" /* Logo */,
  "PlusIcon" /* PlusIcon */
)}`;
var COMPONENT_TAG_NAME8 = "welcome-panel";
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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE5;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET7);
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(
      this.shadowRoot,
      false,
      {
        "edit-button": "recent-edit-button",
        "handle": "recent-edit-handle",
        "new-board-button": "recent-new-board-button"
      }
    );
    this.findElement("recent-boards").addEventListener("remove", this.#recentBoard_onRemove.bind(this));
  }
  async refresh() {
    const recentBoards = await this.#getRecentBoards();
    this.updateBoards(recentBoards);
  }
  updateBoards(boards) {
    const menuItems = boards.map((item) => this.#createBoardMenuItem(item));
    this.innerHTML = "";
    this.append(...menuItems);
  }
  async addBoardToRecentBoards(id, description) {
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
    DataService.saveAppSetting("recentBoards" /* RecentBoards */, boardsString);
  }
  async updateRecentBoardEntry(id, description) {
    const boards = await this.#getRecentBoards();
    const existingEntry = boards.find((item) => item.id == id);
    if (existingEntry == null) {
      return;
    }
    existingEntry.description = description ?? existingEntry.description;
    existingEntry.timestamp = Date.now();
    const boardsString = JSON.stringify(boards);
    DataService.saveAppSetting("recentBoards" /* RecentBoards */, boardsString);
    this.refresh();
  }
  async removeBoardFromRecentBoards(id) {
    const boards = await this.#getRecentBoards();
    const existingEntry = boards.find((item) => item.id == id);
    if (existingEntry == null) {
      return;
    }
    boards.splice(boards.indexOf(existingEntry), 1);
    const boardsString = JSON.stringify(boards);
    DataService.saveAppSetting("recentBoards" /* RecentBoards */, boardsString);
  }
  async #getRecentBoards() {
    let boardsString = await DataService.getAppSetting("recentBoards" /* RecentBoards */);
    if (boardsString == null) {
      boardsString = "[]";
    }
    const boards = JSON.parse(boardsString);
    boards.sort((a, b) => b.timestamp - a.timestamp);
    return boards;
  }
  #createBoardMenuItem(board) {
    const element = document.createElement("a");
    element.innerHTML = `<span part="board-item-name recent" class="board-item-name recent">${board.description}<span>`;
    element.setAttribute("part", "board recent");
    element.classList.add("board", "recent");
    element.dataset.route = `board/${board.id}`;
    return element;
  }
  #recentBoard_onRemove(event) {
    const boardItem = event.detail;
    const route = boardItem.dataset.route;
    const id = route.substring(route.lastIndexOf("/") + 1);
    this.removeBoardFromRecentBoards(id);
  }
};
if (customElements.get(COMPONENT_TAG_NAME8) == null) {
  customElements.define(COMPONENT_TAG_NAME8, WelcomePanelElement);
}

// src/components/board-browser/board-browser.css?raw
var board_browser_default = ":host { display: contents; }\r\n\r\n#board-browser-header\r\n{\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 7px;\r\n    align-items: center;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n#board-browser-title\r\n{\r\n    font-weight: bold;\r\n}\r\n\r\n.header-icon\r\n{\r\n    width: var(--dialog-header-icon-size);\r\n    height: var(--dialog-header-icon-size);\r\n}\r\n\r\ncollection-browser\r\n{\r\n    overflow: hidden;\r\n}\r\n\r\ncollection-browser::part(navigation)\r\n,collection-browser::part(gallery-header)\r\n{\r\n    border: none;\r\n}\r\n\r\ncollection-browser::part(items)\r\n{\r\n    gap: .5em;\r\n    /* flex-wrap: wrap; */\r\n    padding: 7px 0;\r\n    overflow: hidden auto;\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\r\n    /* margin: 0 auto; */\r\n    justify-content: center;\r\n    justify-items: center;\r\n    min-height: 250px;\r\n    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));\r\n}\r\n\r\ncollection-browser::part(add-button)\r\n{\r\n    display: none !important;\r\n}\r\n\r\n#board-browser-actions\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 14px;\r\n    padding-top: 1em;\r\n}\r\n\r\n#board-browser-actions button\r\n{\r\n    width: 70px;\r\n    justify-content: center;\r\n}\r\n\r\n@media (max-width: 665px) \r\n{\r\n    #filter::part(input)\r\n    {\r\n        width: 157px;\r\n    }\r\n}";

// src/components/board-browser/board-browser.html?raw
var board_browser_default2 = '<header id="board-browser-header" class="dialog-header">\r\n    <svg id="board-browser-icon" class="icon board-icon header-icon">\r\n        <use href="#icon-definition_task-board"></use>\r\n    </svg>\r\n    <span id="board-browser-title" class="title">Boards</span>\r\n    <collection-filter \r\n        id="filter"\r\n        exportparts="search:filter-search,\r\n                     form:filter-form,\r\n                     query:filter-query,\r\n                     input:filter-input,\r\n                     button,\r\n                     field-button,\r\n                     regex-button:filter-regex-button,\r\n                     search-button:filter-search-button,\r\n                     icon,\r\n                     regex-icon:filter-regex-icon,\r\n                     active,\r\n                     search-icon:filter-search-icon">\r\n    </collection-filter>\r\n</header>\r\n<collection-browser\r\n    id="collection-browser"\r\n    exportparts="gallery,\r\n                 gallery-header,\r\n                 header,\r\n                 items,\r\n                 add-button,\r\n                 button,\r\n                 icon,\r\n                 add-button-icon,\r\n                 add-button-label">\r\n    <slot></slot>\r\n</collection-browser>\r\n<footer id="board-browser-footer" class="dialog-footer">\r\n    <form id="board-browser-actions" class="actions" method="dialog">\r\n        <button type="submit" id="board-browser-cancel" class="action-button cancel label-button">Cancel</button>\r\n        <button type="submit" id="board-browser-ok" class="action-button ok preferred-button label-button">Open</button>\r\n    </form>\r\n</footer>';

// node_modules/.pnpm/@magnit-ce+captioned-thumbnail@0.0.5/node_modules/@magnit-ce/captioned-thumbnail/dist/captioned-thumbnail.js
var captioned_thumbnail_default = '\n\n:host\n{\n    display: inline-flex;\n    width: 80px;\n    height: 80px;\n    color-scheme: light dark;\n}\n\n:host(:focus) figure\n{\n    border-color: rgb(205 205 205);\n}\n@media (prefers-color-scheme: dark) \n{\n    :host(:focus) figure\n    {\n        border-color: rgb(81 81 81);\n    }\n}\n\nfigure\n{\n    flex: 1;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    margin: 0;\n    padding: 0;\n    border: solid 1px transparent;\n}\n:host(.selected) figure\n{\n    border-color: inherit;\n}\n\n#selected\n,::slotted([slot="selected"])\n{\n    grid-column: 1;\n    grid-row: 1;\n\n    justify-self: flex-start;\n    align-self: flex-start;\n    z-index: 2;\n\n    opacity: 0;\n    transition: opacity 200ms ease;\n}\n\n:host(:not([select],[selectable])) #selected\n,:host(:not([select],[selectable])) ::slotted([slot="selected"])\n{\n    display: none;\n    pointer-events: none;\n}\n\n#edit-button\n,::slotted([slot="edit-button"])\n{\n    grid-column: 1;\n    grid-row: 1;\n\n    justify-self: flex-end;\n    align-self: flex-start;\n    z-index: 2;\n\n    opacity: 0;\n    transition: opacity 200ms ease;\n}\n\n:host(:not([edit],[editable])) #edit-button\n,:host(:not([edit],[editable])) ::slotted([slot="edit-button"])\n{\n    display: none;\n    pointer-events: none;\n}\n\n.icon\n,::slotted([slot="icon"])\n{\n    grid-column: 1;\n    grid-row: 1;\n\n    justify-self: center;\n    align-self: center;\n\n    width: var(--icon-width, var(--icon-size));\n    margin: .25em;\n}\n#image-icon\n,::slotted(img[slot="icon"])\n{\n    display: block;\n    max-width: 100%;\n    min-width: 0;\n    max-height: 100%;\n    min-height: 0;\n}\n#text-icon\n{\n    font-size: 36px;\n    line-height: 1;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:host(:not([src])) #image-icon\n,:host([src]) #text-icon\n{\n    display: none;\n}\n\n#caption\n,::slotted([slot="caption"])\n{\n    text-align: center;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n:host(:not([select],[selectable]):hover)  #edit-button\n,:host(:not([select],[selectable]):hover) ::slotted([slot="edit-button"])\n,:host(:focus)  #edit-button\n,:host(:focus) ::slotted([slot="edit-button"])\n,figure:has(:checked) #edit-button\n,figure:has(:checked) ::slotted([slot="edit-button"])\n,figure:has(:focus) #edit-button\n,figure:has(:focus) ::slotted([slot="edit-button"])\n,figure:has(:focus-within) #edit-button\n,figure:has(:focus-within) ::slotted([slot="edit-button"])\n{ \n    opacity: 1;\n}\n\n\n:host(:hover) #selected\n,figure:has(:checked) #selected\n,figure:focus #selected\n,figure:focus-within #selected\n{ \n    opacity: 1;\n}';
var captioned_thumbnail_default2 = '<figure id="figure">\n    <slot name="selected"><input type="checkbox" id="selected" /></slot>\n    <slot name="edit-button"><button type="button" id="edit-button">&#9998;</button></slot>\n    <slot name="icon">\n        <span id="text-icon" class="icon">\u{1F5CE}</span>\n        <img id="image-icon" class="icon" />\n    </slot>\n    <slot name="caption"><figcaption id="caption"><slot>Item</slot></figcaption></slot>\n</figure>';
var KEYCODE_SELECTION_MAP = ["Space", "Enter"];
var COMPONENT_STYLESHEET8 = new CSSStyleSheet();
COMPONENT_STYLESHEET8.replaceSync(captioned_thumbnail_default);
var COMPONENT_TAG_NAME9 = "captioned-thumbnail";
var CaptionedThumbnailElement = class _CaptionedThumbnailElement extends HTMLElement {
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
  static selectedClassName = "selected";
  get isSelected() {
    return this.hasAttribute("aria-selected");
  }
  set isSelected(value) {
    if (value == true) {
      this.#select();
    } else {
      this.#deselect();
    }
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = captioned_thumbnail_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET8);
    this.#applyPartAttributes();
    this.#updateTitle();
    this.addEventListener("click", this.#onClick.bind(this));
    this.addEventListener("keydown", this.#onKeyDown.bind(this));
    this.shadowRoot.querySelector("slot:not([name])").addEventListener("slotchange", this.#onSlotChange.bind(this));
    const selected = this.findElement("selected");
    if (selected != null) {
      selected.addEventListener("input", this.#selectedInput_onInput.bind(this));
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
  #onSlotChange(_event) {
    this.#updateTitle();
  }
  #onClick(event) {
    const targetEditButton = event.composedPath().find((item) => item instanceof HTMLElement && (item.id == "edit-button" || item.getAttribute("slot") == "edit-button"));
    if (targetEditButton != null) {
      this.dispatchEvent(new CustomEvent("edit", { detail: { button: targetEditButton, item: this }, bubbles: true, composed: true }));
      event.stopPropagation();
      return;
    }
    if (this.getAttribute("select") ?? this.getAttribute("selectable") == null) {
      return;
    }
    const targetSelectInput = event.composedPath().find((item) => item instanceof HTMLInputElement && (item.id == "selected" || item.getAttribute("slot") == "selected"));
    const method = targetSelectInput == null ? "click" : "input";
    const mouseEvent = event;
    const allowDefault = this.dispatchEvent(new CustomEvent(
      "change",
      {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
          shiftKey: mouseEvent.shiftKey,
          ctrlKey: mouseEvent.ctrlKey,
          method
        }
      }
    ));
    if (allowDefault == false) {
      return;
    }
    this.toggleSelection();
  }
  #onKeyDown(event) {
    if (this.shadowRoot.activeElement == this.findElement("figure") && KEYCODE_SELECTION_MAP.indexOf(event.code) != -1) {
      event.preventDefault();
      const allowDefault = this.dispatchEvent(new CustomEvent(
        "change",
        {
          bubbles: true,
          composed: true,
          cancelable: true,
          detail: {
            method: event.code
          }
        }
      ));
      if (allowDefault == false) {
        return;
      }
      this.toggleSelection();
    }
  }
  #selectedInput_onInput(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isSelected = event.target.checked;
  }
  #updateTitle() {
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
    if (title.trim() == "") {
      title = this.findElement("caption").textContent;
    }
    this.title = title;
  }
  #select() {
    if (this.getAttribute("select") ?? this.getAttribute("selectable") == null) {
      return;
    }
    this.setAttribute("aria-selected", "option");
  }
  #deselect() {
    this.removeAttribute("aria-selected");
  }
  toggleSelection() {
    if (this.isSelected == true) {
      this.#deselect();
    } else {
      this.#select();
    }
  }
  #updateSelectionIndicators() {
    const isSelected = this.isSelected;
    const selected = this.findElement("selected");
    if (selected != null) {
      selected.checked = this.isSelected;
    }
    this.classList.toggle(_CaptionedThumbnailElement.selectedClassName, isSelected);
  }
  updateImage(source) {
    let imageIcon = this.findElement("image-icon");
    imageIcon.src = source;
  }
  static observedAttributes = ["label", "src", "select", "selectable", "aria-selected"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "label") {
      const textNodes = Array.from(this.childNodes).filter((item) => item.nodeType == Node.TEXT_NODE);
      for (let i = 0; i < textNodes.length; i++) {
        textNodes[i].remove();
      }
      this.append(newValue);
      this.#updateTitle();
    } else if (attributeName == "src") {
      this.updateImage(newValue);
    } else if (attributeName == "select" || attributeName == "selectable") {
      this.findElement("figure").tabIndex = 0;
    } else if (attributeName == "aria-selected") {
      this.#updateSelectionIndicators();
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME9) == null) {
  customElements.define(COMPONENT_TAG_NAME9, CaptionedThumbnailElement);
}

// src/components/board-browser/board-browser.ts
var BoardBrowserAttributes = /* @__PURE__ */ ((BoardBrowserAttributes2) => {
  return BoardBrowserAttributes2;
})(BoardBrowserAttributes || {});
var COMPONENT_STYLESHEET9 = new CSSStyleSheet();
COMPONENT_STYLESHEET9.replaceSync(`${shared_default}
    ${board_browser_default}`);
var COMPONENT_TEMPLATE6 = `${board_browser_default2}
${defineIcons(
  "TaskBoard" /* TaskBoard */,
  "ConfirmCheck" /* ConfirmCheck */,
  "CancelCross" /* CancelCross */
)}`;
var COMPONENT_TAG_NAME10 = "board-browser";
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
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE6;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET9);
    this.findElement("board-browser-ok").addEventListener("click", this.boardBrowserOkButton_onClick.bind(this));
    this.findElement("collection-browser").addEventListener("change", this.boardBrowserSelection_onChange.bind(this));
    this.findElement("filter").addEventListener("change", this.boardBrowserFilter_onChange.bind(this));
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignInputTypeToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
  }
  boardBrowserOkButton_onClick(event) {
    const selected = this.findElement("collection-browser").getSelected();
    if (selected == null) {
      return;
    }
    const item = selected[0];
    if (item == null) {
      return;
    }
    const boardId = item.getAttribute("data-board-id");
    this.dispatchEvent(new CustomEvent("select", { detail: { boardId } }));
  }
  boardBrowserSelection_onChange(event) {
    const { detail } = event;
    if (event.target instanceof CaptionedThumbnailElement && (detail.method == "click" || detail.method == "input")) {
      event.preventDefault();
    }
    if (event.target == this.findElement("collection-browser")) {
      event.preventDefault();
      detail.previousSelection.forEach((item) => {
        item.isSelected = false;
        item.part.remove("selected-board-gallery-item");
      });
      detail.newSelection.isSelected = !detail.newSelection.isSelected;
      detail.newSelection.part.add("selected-board-gallery-item");
    }
  }
  boardBrowserFilter_onChange(event) {
    const customEvent = event;
    const allItems = [...this.querySelectorAll("captioned-thumbnail")];
    const filters = customEvent.detail.filters;
    if (filters.length == 0) {
      for (let i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove("match");
      }
      return;
    }
    const items = this.findElement("filter").filterElements(allItems).map((match) => match.item);
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove("match");
      if (items.indexOf(allItems[i]) > -1) {
        allItems[i].classList.add("match");
      }
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
  #createBoardMenuItem(boardRecord) {
    const element = new CaptionedThumbnailElement();
    element.innerHTML = `<svg part="icon item-icon" slot="icon">
            <use href="#icon-definition_task-board"></use>
        </svg>
        ${boardRecord.name}`;
    element.setAttribute("data-board-id", boardRecord.id);
    element.toggleAttribute("select", true);
    element.part.add("board-gallery-item");
    return element;
  }
};
if (customElements.get(COMPONENT_TAG_NAME10) == null) {
  customElements.define(COMPONENT_TAG_NAME10, BoardBrowserElement);
}

// src/components/board-settings/board-settings.css?raw
var board_settings_default = `:host { display: contents; }\r
\r
#board-settings-header\r
{\r
    display: grid;\r
    grid-template-columns: auto 1fr auto;\r
    gap: 7px;\r
    align-items: center;\r
    font-weight: bold;\r
    padding-bottom: 1em;\r
}\r
#board-settings-icon\r
{\r
    width: var(--dialog-header-icon-size);\r
    height: var(--dialog-header-icon-size);\r
}\r
\r
#board-settings-form\r
{\r
    display: flex;\r
    flex-direction: column;\r
    overflow: hidden;\r
}\r
\r
#board-fields\r
{\r
    overflow-y: auto;\r
    flex: 1;\r
\r
    display: grid;\r
    gap: 1em;\r
    padding: 1em;\r
}\r
\r
#board-settings-footer\r
{\r
    display: flex;\r
    align-items: center;\r
    justify-content: flex-end;\r
    gap: 14px;\r
}\r
#board-settings-cancel\r
{\r
    grid-column: 3;\r
}\r
#board-settings-save\r
{\r
    grid-column: 4;\r
}\r
\r
\r
input,select,textarea\r
{\r
    font: inherit;\r
    min-width: 0;\r
    width: auto;\r
}\r
\r
details\r
{\r
    --board-details-background: rgb(0 0 0 / .05);\r
    background-color: var(--board-details-background);\r
    border-radius: 3px;\r
    padding: 7px 3px;\r
}\r
\r
details summary\r
{\r
    user-select: none;\r
    display: inline-flex;\r
    gap: .25em;\r
}\r
summary:before\r
{\r
    content: '\u25B6';\r
    transform-origin: 45% 50%;\r
    transition: transform 100ms ease-out;\r
    font-size: .78em;\r
    align-self: center;\r
    margin-right: .25em;\r
}\r
details[open] summary:before\r
{\r
    transform: rotate(90deg);\r
}\r
\r
.details-content\r
{\r
    padding: 14px 3px 3px 3px;\r
}\r
\r
form-field:not([id^="board-background-image-offset"]) input[inputmode="numeric"]\r
{\r
    width: 5ch;\r
}\r
\r
form-field:not([id^="board-background-image-offset"]) .container\r
{\r
    display: flex;\r
    flex-direction: column;\r
    gap: .25em;\r
}\r
\r
fieldset\r
{\r
    display: grid;\r
    gap: 1em;\r
    min-width: 0;\r
    width: auto;\r
}\r
\r
fieldset legend\r
{\r
    display: flex;\r
    gap: .25em;\r
    align-items: center;\r
}\r
\r
form-field .label\r
,form-field .field-label\r
{\r
    display: flex;\r
    gap: .25em;\r
    align-items: center;\r
}\r
form-field .label input\r
,form-field .field-label input\r
{\r
    margin: 0;\r
}\r
/* form-field .label [part="text"]\r
,form-field .field-label [part="text"]\r
{\r
    flex: 1;\r
} */\r
\r
form-field .field-label .enabled-checkbox\r
{\r
    margin-right: 5px;\r
}\r
\r
fileimage-input::part(label)\r
{\r
    grid-column: span 2;\r
    grid-row: 1;\r
}\r
\r
fileimage-input::part(field)\r
{\r
    display: grid;\r
    align-items: center;\r
    justify-items: center;\r
}\r
\r
fileimage-input::part(preview)\r
{\r
    max-height: 64px;\r
    height: 100%;\r
}\r
\r
fileimage-input::part(clear)\r
{\r
    grid-row: 2;\r
    grid-column: 2;\r
}\r
\r
fileimage-input::part(view-link)\r
{\r
    grid-row: 2;\r
    grid-column: 1;\r
}\r
\r
\r
#board-properties\r
{\r
    display: flex;\r
    align-items: center;\r
    gap: 1em;\r
    grid-column: span 2;\r
}\r
\r
#board-color\r
{\r
    height: 23px;\r
    padding: 0;\r
    border-style: solid;\r
    border-width: 1px;\r
    border-color: rgb(170 170 170 / .75);\r
    background-color: transparent;\r
    border-radius: 3px;\r
}\r
#board-color:hover\r
{\r
    border-color: rgb(170 170 170);\r
}\r
/* #board-color::-webkit-color-swatch\r
{\r
    padding: 0;\r
    border: none;\r
}\r
#board-color::-webkit-color-swatch-wrapper\r
{\r
    padding: 0;\r
    border: none;\r
} */\r
\r
#board-name-field .container\r
{\r
    flex: 1;\r
}\r
\r
#board-appearance-fieldset .container > input\r
{\r
    flex: 1;\r
    min-height: 2ch;\r
}\r
\r
#board-background-image-display\r
{\r
    height: auto;\r
    flex: 1;\r
}\r
\r
#board-image-fieldset\r
{\r
    display: grid;\r
    grid-template-columns: 1fr auto;\r
}\r
\r
#board-background-image-field .container\r
{\r
    grid-column: span 2;\r
}\r
\r
#background-image-offset\r
{\r
    display: grid;\r
    row-gap: .25em;\r
    column-gap: .5em;\r
}\r
\r
#offset-header\r
{\r
    grid-column: span 2;\r
}\r
\r
#background-image-offset form-field .container\r
{\r
    display: flex;\r
    gap: .5em;\r
    align-items: center;\r
}\r
\r
#background-image-offset input\r
{\r
    flex: 1;\r
    width: 0;\r
    min-width: 5ch;\r
}\r
\r
#board-list-details\r
{\r
    grid-column: span 2;\r
}\r
\r
#board-lists\r
{\r
    gap: 7px;\r
    display: grid;\r
}\r
\r
#board-list-actions\r
{\r
    display: flex;\r
    align-items: center;\r
    justify-content: space-between;\r
    gap: 7px;\r
    margin-top: 14px;\r
}\r
\r
#board-task-details\r
{\r
    grid-column: span 2;\r
}\r
\r
\r
#delete-fieldset\r
{\r
    grid-template-rows: 1fr auto;\r
}\r
\r
#duplicate-fieldset\r
{\r
    grid-column: 2;\r
}\r
\r
#duplicate-fieldset .button\r
, #delete-fieldset .button\r
{\r
    justify-content: center;\r
}\r
\r
#duplicate-board-name-field .field-label\r
{\r
    margin-bottom: 7px;\r
}\r
\r
#export-fieldset\r
{\r
    grid-column: span 2;\r
    padding: 1em;\r
    display: block;\r
}\r
\r
#export-actions\r
{\r
    display: flex;\r
    align-items: center;\r
    justify-content: flex-end;\r
    gap: .5em;\r
    padding: .5em 0;\r
}\r
\r
#export-fieldset form-field .container\r
{\r
    display: flex;\r
    flex-direction: row-reverse;\r
    align-items: center;\r
    justify-content: flex-end;\r
    gap: .25em;\r
}\r
\r
#export-options\r
{\r
    display: inline-block;\r
    margin-bottom: 7px;\r
}\r
\r
#export-options > header\r
{\r
    margin-bottom: 1em;\r
    border-bottom: solid 2px;\r
}\r
\r
#export-fieldset button\r
{\r
    margin-left: auto;\r
    display: block;\r
}\r
\r
.icon\r
{\r
    width: 18px;\r
    height: 18px;\r
}\r
button .icon\r
{\r
    width: 12px;\r
    height: 12px;\r
}\r
\r
#icon-definitions\r
{\r
    display: none;\r
}\r
\r
#board-settings-footer\r
{\r
    display: flex;\r
    align-items: center;\r
    justify-content: flex-end;\r
    gap: 14px;\r
    padding-top: 1em;\r
}\r
\r
#close-board-button\r
{\r
    margin-right: auto;\r
}\r
\r
\r
\r
image-input [slot="placeholder"]\r
{\r
    display: grid;\r
    justify-items: center;\r
    gap: .25em;\r
    padding: .5em;\r
    max-width: 300px;\r
    max-height: 300px;\r
}\r
\r
/* [part="field-label"]\r
{\r
    white-space: nowrap;\r
}\r
form-field [part="label"]\r
,form-field [part="field-label"]\r
{\r
    display: flex;\r
    gap: .25em;\r
    align-items: center;\r
}\r
form-field [part="label"] input\r
,form-field [part="field-label"] input\r
{\r
    margin: 0;\r
}\r
form-field [part="label"] [part="text"]\r
,form-field [part="field-label"] [part="text"]\r
{\r
    flex: 1;\r
}\r
\r
form-field [part="container"]\r
{\r
    display: grid;\r
    grid-template-rows: auto 1fr;\r
    gap: .25em;\r
}\r
form-field [part="container"]:has([slot="postfix"])\r
{\r
    display: grid;\r
    grid-template-columns: 1fr auto;\r
    column-gap: 0;\r
    row-gap: .25em;\r
}\r
form-field [part="container"]:has([slot="postfix"]) [part="field-label"]\r
{\r
    grid-column: span 2;\r
} */\r
\r
\r
:host([style*="color-scheme: light;"]) svg.copy\r
{\r
    --icon-primary-color: canvas;\r
    --icon-secondary-color: canvastext;\r
}\r
\r
\r
@media (min-width: 800px) \r
{\r
    :host\r
    {\r
        width: 801px;\r
    }\r
}\r
@media (max-width: 560px) \r
{\r
    #board-appearance-fieldset\r
    ,#board-image-fieldset\r
    ,#delete-fieldset\r
    ,#duplicate-fieldset\r
    {\r
        grid-column: span 2;\r
    }\r
    #board-fields\r
    {\r
        grid-template-columns: 1fr;\r
    }\r
    #board-image-fieldset\r
    {\r
        grid-template-columns: 1fr;\r
    }\r
    #board-background-image-field .container\r
    {\r
        grid-column: 1;\r
    }\r
\r
}\r
@media (max-width: 450px) \r
{\r
    #board-name\r
    {\r
        width: 100%;\r
    }\r
    #offset-header\r
    {\r
        grid-column: 1;\r
    }\r
}\r
@media (prefers-color-scheme: light) \r
{\r
    :host(:not([style*="color-scheme: dark;"])) svg.copy\r
    {\r
        --icon-primary-color: canvas;\r
        --icon-secondary-color: canvastext;\r
    }\r
}\r
@media (prefers-color-scheme: dark) \r
{\r
    :host(:not([style*="color-scheme: light;"])) details\r
    {\r
        --board-details-background: rgb(255 255 255 / .05);\r
    }\r
}`;

// src/components/board-settings/board-settings.html?raw
var board_settings_default2 = '<form method="dialog" id="board-settings-form" class="form">\r\n    <header class="header dialog-header" id="board-settings-header">\r\n        <svg class="icon dialog-header-icon" id="board-settings-icon">\r\n            <use href="#icon-definition_task-board"></use>\r\n        </svg>\r\n        <span class="title dialog-title" id="board-settings-title">Board</span>\r\n    </header>\r\n    <div id="board-fields" class="page">\r\n        <div id="board-properties">\r\n            <form-field class="field" id="board-color-field" label="Color">\r\n                <input class="input color" id="board-color" name="board-color" type="color" value="#000000" />\r\n            </form-field>\r\n            <form-field class="field" id="board-name-field" label="Name">\r\n                <input class="input text" id="board-name" name="board-name" type="text" value="New Board" />\r\n            </form-field>\r\n            <form-field class="field" id="order-field" label="Order">\r\n                <input class="input number" id="board-order" name="board-order" type="text" inputmode="numeric" disabled />\r\n            </form-field>\r\n        </div>\r\n        <fieldset class="fieldset board-settings-fieldset" id="board-appearance-fieldset">\r\n            <legend class="legend board-settings-legend" id="board-appearance-legend">\r\n                <svg class="icon legend-icon" id="board-settings-color-icon">\r\n                    <use href="#icon-definition_color"></use>\r\n                </svg>\r\n                <span class="label legend-label" id="board-settings-appearance-label">Appearance</span>\r\n            </legend>\r\n            <form-field class="field" id="board-background-color-field" label="Background Color" optional optional-title="Override Background Color?">\r\n                <input class="input color" id="board-background-color" name="board-background-color" type="color" value="#f9faf5" />\r\n            </form-field>\r\n            <form-field class="field" id="board-font-color-field" label="Font Color" optional optional-title="Override Font Color?">\r\n                <input class="input color" id="board-font-color" name="board-font-color" type="color" value="#060703" />\r\n            </form-field>\r\n        </fieldset>\r\n        <fieldset class="fieldset board-settings-fieldset" id="board-image-fieldset">\r\n            <legend class="legend board-settings-legend" id="board-image-legend">\r\n                <svg class="icon" id="image-icon">\r\n                    <use href="#icon-definition_image"></use>\r\n                </svg>\r\n                <span class="label legend-label" id="image-label">Background Image</span>\r\n            </legend>\r\n            <form-field class="field" id="board-background-image-field" label="Background Image" input-selector="fileimage-input">\r\n                <fileimage-input class="input image" id="board-background-image" exportparts="field:image-input" name="board-background-image" placeholder="Select an image...">\r\n                    <svg class="icon" id="background-image-icon" slot="placeholder-icon">\r\n                        <use href="#icon-definition_image"></use>\r\n                    </svg>\r\n                </fileimage-input>\r\n            </form-field>\r\n            <form-field class="field" id="board-background-image-display-field" label="Display">\r\n                <select class="select" id="board-background-image-display" name="board-background-image-display">\r\n                    <option class="option first" value="stretch">Stretch</option>\r\n                    <option class="option" value="center">Center</option>\r\n                    <option class="option last" value="tile">Tile</option>\r\n                </select>\r\n            </form-field>\r\n            <div id="background-image-offset">\r\n                <div id="offset-header">\r\n                    <span id="offset-label">Offset</span>\r\n                </div>\r\n                <form-field class="field" id="board-background-image-offset-x-field" label="X">\r\n                    <input class="input number" type="text" inputmode="numeric" id="board-background-image-offset-x" name="background-image-offset-x" />\r\n                </form-field>\r\n                <form-field class="field" id="board-background-image-offset-y-field" label="Y">\r\n                    <input class="input number"type="text" inputmode="numeric" id="board-background-image-offset-y" name="background-image-offset-y" />\r\n                </form-field>\r\n            </div>\r\n        </fieldset>\r\n        <details class="settings-details board-settings-details" id="board-list-details" open>\r\n            <summary class="settings-summary board-settings-summary" id="board-list-summary">\r\n                <svg class="icon summary-icon" id="board-list-icon">\r\n                    <use href="#icon-definition_task-list"></use>\r\n                </svg>\r\n                <span class="summary-label" id="board-list-label">Lists<span>\r\n            </summary>\r\n            <div class="details-content">\r\n                <div id="board-lists"><slot><em id="board-list-placeholder">No Lists</em></slot></div>\r\n                <div id="board-list-actions">\r\n                    <button class="button label-button" id="clear-lists-button" type="button" title="Clear All Lists">\r\n                        <svg class="icon button-icon" id="clear-lists-button-icon">\r\n                            <use href="#icon-definition_trash"></use>\r\n                        </svg>\r\n                        <span class="label button-label" id="clear-lists-button-label">Clear</span>\r\n                    </button>\r\n                    <button class="button label-button" id="add-list-button" type="button">\r\n                        <svg class="icon button-icon" id="add-list-button-icon">\r\n                            <use href="#icon-definition_plus"></use>\r\n                        </svg>\r\n                        <span class="label button-label" id="add-list-button-label">Add List</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </details>\r\n        <details class="settings-details board-settings-details" id="board-task-details" open>\r\n            <summary class="settings-summary board-settings-summary" id="board-task-summary">\r\n                <svg class="icon summary-icon" id="board-task-icon">\r\n                    <use href="#icon-definition_task"></use>\r\n                </svg>\r\n                <span class="label" id="boardtasks-label">Task Settings</span>\r\n            </summary>\r\n            <task-fields\r\n                class="task-fields details-content"\r\n                id="board-task-settings"\r\n                exportparts="option-true"></task-fields>\r\n        </details>\r\n        <fieldset class="fieldset board-settings-fieldset" id="delete-fieldset">\r\n            <legend class="legend board-settings-legend" id="delete-legend">Delete</legend>\r\n            <p class="field-question">Delete this board?</p>\r\n            <button class="button label-button" id="remove-board-button" type="submit">\r\n                <svg class="icon button-icon" id="remove-board-icon">\r\n                    <use href="#icon-definition_trash"></use>\r\n                </svg>\r\n                <span class="label button-label" id="remove-board-label">Delete</span>\r\n            </button>\r\n        </fieldset>\r\n        <fieldset class="fieldset board-settings-fieldset" id="duplicate-fieldset">\r\n            <legend class="legend board-settings-legend" id="duplicate-legend">Duplicate</legend>\r\n            <p class="field-question">Duplicate this board?</p>\r\n            <form-field class="field" id="duplicate-board-name-field" label="New Board Name">\r\n                <input class="input" id="duplicate-board-name" type="text" />\r\n            </form-field>\r\n            <button class="button label-button" id="duplicate-board-button" type="button">\r\n                <svg class="icon copy" id="duplicate-board-icon">\r\n                    <use href="#icon-definition_copy"></use>\r\n                </svg>\r\n                <span class="label button-label" id="duplicate-board-label">Duplicate</span>\r\n            </button>\r\n        </fieldset>\r\n        <fieldset class="fieldset board-settings-fieldset" id="export-fieldset">\r\n            <legend class="legend board-settings-legend" id="export-legend">Export</legend>\r\n            <div id="export-options">\r\n                <header class="field-header" id="export-options-header">Options</header>\r\n                <form-field class="field" id="export-images-field" label="Export Background Image?">\r\n                    <svg class="icon" id="export-images-icon" slot="prefix">\r\n                        <use href="#icon-definition_image"></use>\r\n                    </svg>\r\n                    <input class="input" id="export-background-image" type="checkbox" checked="true">\r\n                </form-field>\r\n            </div>\r\n            <button class="button label-button" id="export-button" type="button">\r\n                <svg class="icon" id="export-button-icon">\r\n                    <use href="#icon-definition_export"></use>\r\n                </svg>\r\n                <span class="label button-label" id="export-button-label">Export Board</span>\r\n            </button>\r\n        </fieldset>\r\n    </div>\r\n    <footer class="footer dialog-footer" id="board-settings-footer">\r\n        <button class="button label-button" id="close-board-button" type="submit" title="Close Board">\r\n            <svg class="icon" id="close-board-icon">\r\n                <use href="#icon-definition_close-cross"></use>\r\n            </svg>\r\n            <span class="label button-label" id="close-board-button-label" title="Close the board and return to the Welcome page">Close</span>\r\n        </button>\r\n        <button class="button action-button cancel label-button" id="board-settings-cancel" type="submit"title="Cancel changes">Cancel</button>\r\n        <button class="button action-button ok preferred-button label-button"  id="board-settings-save" type="submit" title="Save settings">Save</button>\r\n    </footer>\r\n</form>';

// src/components/board-settings/board-settings.ts
var COMPONENT_STYLESHEET10 = new CSSStyleSheet();
COMPONENT_STYLESHEET10.replaceSync(`${shared_default}
    ${board_settings_default}`);
var COMPONENT_TEMPLATE7 = `${board_settings_default2}
${defineIcons(
  "Gear" /* Gear */,
  "Export" /* Export */,
  "PlusIcon" /* PlusIcon */,
  "Image" /* Image */,
  "Color" /* Color */,
  "Task" /* Task */,
  "TaskList" /* TaskList */,
  "TaskBoard" /* TaskBoard */,
  "CloseCross" /* CloseCross */,
  "Trash" /* Trash */,
  "Copy" /* Copy */
)}`;
var COMPONENT_TAG_NAME11 = "board-settings";
var BoardSettingsElement = class extends HTMLElement {
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
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE7;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET10);
    this.addEventListener("click", this.#onClick.bind(this));
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
  connectedCallback() {
    requestAnimationFrame(() => {
      assignTagToPart(this.shadowRoot);
      assignClassAndIdToPart(this.shadowRoot);
      assignInputTypeToPart(this.shadowRoot);
      assignFormFieldPartAttributes(this.shadowRoot);
      assignPartsAsExportPartsAttribute(this.shadowRoot);
      this.dispatchEvent(new CustomEvent("ready", { bubbles: true }));
    });
  }
  //#region API
  #canAddList;
  #removeBoard;
  #duplicateBoard;
  #exportBoard;
  #closeBoard;
  #closeBoardSettings;
  #saveSettingsTarget;
  init(options) {
    this.#canAddList = options.canAddList;
    this.#removeBoard = options.removeBoard;
    this.#duplicateBoard = options.duplicateBoard;
    this.#exportBoard = options.exportBoard;
    this.#closeBoard = options.closeBoard;
    this.#closeBoardSettings = options.closeBoardSettings;
    this.#saveSettingsTarget = options.saveSettingsTarget;
    const taskCenterRemoveButton = this.getElement("task-center-remove-button");
    if (taskCenterRemoveButton != null) {
      taskCenterRemoveButton.part.toggle("option-true", taskCenterRemoveButton.checked);
      return;
    }
  }
  setValues(board, taskSettings, backgroundImage = null) {
    this.setAttribute("record-id", board.id);
    this.findElement("board-color").value = board.color;
    this.findElement("board-name").value = board.name;
    this.findElement("board-order").value = board.order.toString();
    this.findElement("board-background-color-field").setAttribute("optional-value", board.useCustomBackgroundColor == true ? "true" : "false");
    this.findElement("board-background-color").value = board.backgroundColor;
    this.findElement("board-font-color-field").setAttribute("optional-value", board.useCustomFontColor == true ? "true" : "false");
    this.findElement("board-font-color").value = board.fontColor;
    this.findElement("board-background-image-display").value = board.backgroundDisplay;
    this.findElement("board-background-image-offset-x").value = board.backgroundOffsetX.toString();
    this.findElement("board-background-image-offset-y").value = board.backgroundOffsetY.toString();
    if (backgroundImage != null) {
      this.findElement("board-background-image").value = backgroundImage.image;
    } else {
      this.findElement("board-background-image").value = null;
    }
    this.findElement("board-task-settings").setValues(taskSettings);
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
      const taskListElement = this.#createList(taskList, taskSettings);
      listElements.push(taskListElement);
    }
    this.append(...listElements);
  }
  getRecords() {
    const board = new TaskBoardRecord();
    board.id = this.getAttribute("record-id");
    board.color = this.findElement("board-color").value;
    board.name = this.findElement("board-name").value;
    board.useCustomBackgroundColor = this.findElement("board-background-color-field").getAttribute("optional-value") == "true";
    board.backgroundColor = this.findElement("board-background-color").value;
    board.useCustomFontColor = this.findElement("board-font-color-field").getAttribute("optional-value") == "true";
    board.fontColor = this.findElement("board-font-color").value;
    board.backgroundDisplay = this.findElement("board-background-image-display").value;
    board.backgroundOffsetX = parseInt(this.findElement("board-background-image-offset-x").value);
    board.backgroundOffsetY = parseInt(this.findElement("board-background-image-offset-y").value);
    const boardTaskSettings = this.findElement("board-task-settings").getRecord();
    boardTaskSettings.parentRecordType = "board";
    board.taskSettingsId = boardTaskSettings.id;
    const listFields = [...this.querySelectorAll("tasklist-fields")];
    const lists = [];
    const toRemove = [];
    const taskSettings = [boardTaskSettings];
    for (let i = 0; i < listFields.length; i++) {
      const element = listFields[i];
      if (element.hasAttribute("removed")) {
        const recordId = element.getAttribute("tasklist-record-id");
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
  async addList() {
    const canAddList = this.#canAddList();
    if (canAddList == false) {
      FeedbackService.showMessageDialog("Unable to add list when a board is not open for editing and no board has been opened for task management.");
    }
    const [list, settings] = await DataService.createList();
    this.#addList(list, settings);
  }
  insertList(afterTarget, taskList, taskSettings) {
    const list = this.#createList(taskList, taskSettings);
    if (afterTarget.nextElementSibling == null) {
      this.append(list);
    } else {
      this.insertBefore(list, afterTarget.nextElementSibling);
    }
  }
  async duplicateList(target, list, settings) {
    const [duplicateList, duplicateSettings] = await DataService.createList(list, settings);
    this.insertList(target, duplicateList, duplicateSettings);
  }
  async saveBoard(order) {
    const [board, taskLists, taskSettings, removedListIds] = this.getRecords();
    const [existingBoard, existingTaskLists, existingTaskSettings] = await Promise.all([
      DataService.getBoardRecord(board.id),
      (await DataService.getBoardLists(board.id)).filter((item) => item.deletedTimestamp == void 0),
      DataService.getTaskSettingsRecords(...taskSettings.map((item) => item.id))
    ]);
    if (existingBoard == null) {
      FeedbackService.showErrorMessageCard(`An error occurred saving a task board.`);
      console.error(`An error occurred finding the existing board record.`);
      return [];
    }
    board.order = order;
    board.backgroundImageId = existingBoard.backgroundImageId;
    let existingImageActionProperties = { id: board.backgroundImageId, updates: /* @__PURE__ */ new Map() };
    const imageUpdates = [];
    const imageValue = this.findElement("board-background-image").value;
    let backgroundImageRecord = null;
    if (imageValue != null) {
      if (board.backgroundImageId != "") {
        const existingImage = await DataService.getImageRecord(board.backgroundImageId);
        if (existingImage != null) {
          await DataService.deleteImage(existingImage.id);
          const deletedImage = await DataService.getImageRecord(board.backgroundImageId);
          existingImageActionProperties.updates.set("deletedTimestamp", { from: void 0, to: deletedImage?.deletedTimestamp });
          imageUpdates.push(existingImageActionProperties);
        }
      }
      backgroundImageRecord = DataService.createImageFromImage(imageValue);
      backgroundImageRecord.boardId = board.id;
      backgroundImageRecord = await DataService.saveImage(backgroundImageRecord);
      const newImageActionUpdates = { id: backgroundImageRecord.id, updates: /* @__PURE__ */ new Map([["boardId", { from: "", to: backgroundImageRecord.boardId }]]) };
      imageUpdates.push(newImageActionUpdates);
      board.backgroundImageId = backgroundImageRecord.id;
    } else {
      if (board.backgroundImageId != "") {
        await DataService.deleteImage(board.backgroundImageId);
        const deletedImage = await DataService.getImageRecord(board.backgroundImageId);
        existingImageActionProperties.updates.set("deletedTimestamp", { from: void 0, to: deletedImage?.deletedTimestamp });
        imageUpdates.push(existingImageActionProperties);
        board.backgroundImageId = "";
      }
    }
    await Promise.allSettled([
      DataService.saveBoardRecords(board),
      DataService.saveListRecords(...taskLists),
      DataService.saveTaskSettingsRecords(...taskSettings),
      DataService.deleteListRecords(...removedListIds)
    ]);
    FeedbackService.showMessageCard_customTitle(`The board settings have been saved successfully!`, MessageCardType.Success, "Success!");
    return [
      existingBoard,
      existingTaskLists,
      existingTaskSettings,
      board,
      taskLists,
      taskSettings,
      imageUpdates
    ];
  }
  //#endregion API
  //#region Handlers
  #onClick(event) {
    const composedPath = event.composedPath().filter((item) => item instanceof HTMLElement);
    const addListsButton = composedPath.find((item) => item.id == "add-list-button");
    if (addListsButton != null) {
      this.addList();
      return;
    }
    const clearListsButton = composedPath.find((item) => item.id == "clear-lists-button");
    if (clearListsButton != null) {
      this.querySelectorAll("tasklist-fields").forEach((item) => item.toggleAttribute("removed", true));
      return;
    }
    const removeListButton = composedPath.find((item) => item.id == "tasklist-settings-remove-button");
    if (removeListButton != null) {
      removeListButton.getRootNode().host.toggleAttribute("removed");
      return;
    }
    const duplicateButton = composedPath.find((item) => item.id == "tasklist-settings-duplicate-button");
    if (duplicateButton != null) {
      const listElement = duplicateButton.getRootNode().host;
      const [listRecord, settingsRecord] = listElement.getRecords();
      this.duplicateList(listElement, listRecord, settingsRecord);
      return;
    }
    const removeBoardButton = composedPath.find((item) => item.id == "remove-board-button");
    if (removeBoardButton != null) {
      const id = this.getAttribute("record-id");
      if (id == null || id.trim() == "") {
        FeedbackService.showErrorMessageCard(`An error occurred deleting a board.`);
        throw new Error(`Unable to determine the target board's id`);
      }
      event.preventDefault();
      event.stopPropagation();
      this.#removeBoard(id);
      return;
    }
    const duplicateBoardButton = composedPath.find((item) => item.id == "duplicate-board-button");
    if (duplicateBoardButton != null) {
      const id = this.getAttribute("record-id");
      if (id == null) {
        FeedbackService.showErrorMessageCard(`An error occurred duplicating theboard.`);
        throw new Error("Unable to determine the target board's id");
      }
      this.#duplicateBoard(id);
      return;
    }
    const exportBoardButton = composedPath.find((item) => item.id == "export-button");
    if (exportBoardButton != null) {
      const boardId = this.getAttribute("record-id");
      if (boardId == null || boardId == "") {
        FeedbackService.showErrorMessageCard(`An error occurred attempting to export the board.`);
        throw new Error("Unable to determine the target board's id");
      }
      this.#exportBoard(boardId);
      return;
    }
    const closeBoardButton = composedPath.find((item) => item.id == "close-board-button");
    if (closeBoardButton != null) {
      this.#closeBoardSettings();
      this.#closeBoard();
      return;
    }
    const saveBoardButton = composedPath.find((item) => item.id == "board-settings-save");
    if (saveBoardButton != null) {
      this.#saveSettingsTarget();
      return;
    }
    const taskCenterRemoveButton = composedPath.find((item) => item.id == "task-center-remove-button");
    if (taskCenterRemoveButton != null) {
      taskCenterRemoveButton.part.toggle("option-true", taskCenterRemoveButton.checked);
      return;
    }
    const taskCenterCheckbox = composedPath.find((item) => item.id == "task-center-checkbox");
    if (taskCenterCheckbox != null) {
      taskCenterCheckbox.part.toggle("option-true", taskCenterCheckbox.checked);
      return;
    }
    const exportBackgroundImage = composedPath.find((item) => item.id == "export-background-image");
    if (exportBackgroundImage != null) {
      exportBackgroundImage.part.toggle("option-true", exportBackgroundImage.checked);
      return;
    }
  }
  //#endregion Handlers
  //#region Management
  #addList(taskList, taskSettings) {
    const list = this.#createList(taskList, taskSettings);
    this.append(list);
  }
  #createList(taskList, taskSettings) {
    const taskListElement = new TaskListFieldsComponent();
    if (taskSettings == null) {
      throw new Error("Unable to load list settings");
    }
    taskListElement.setValues(taskList, taskSettings);
    taskListElement.classList.add("tasklist-settings");
    taskListElement.part.add("tasklist-settings");
    taskListElement.style.setProperty("color-scheme", this.style.getPropertyValue("color-scheme"));
    const handle = taskListElement.findElement("tasklist-settings-handle");
    handle.addEventListener("mousedown", (_event) => {
      taskListElement.draggable = true;
    });
    handle.addEventListener("mouseup", (_event) => {
      taskListElement.removeAttribute("draggable");
    });
    taskListElement.addEventListener("dragstart", (event) => {
      this.#draggingList = taskListElement;
      taskListElement.classList.add("dragging");
      this.classList.add("drop-target");
      event.dataTransfer?.setDragImage(taskListElement.shadowRoot.querySelector("summary"), 0, 0);
    });
    taskListElement.addEventListener("dragend", (_event) => {
      taskListElement.classList.remove("dragging");
      this.#draggingList = null;
      this.classList.remove("drop-target");
    });
    return taskListElement;
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
  //#endregion Management
  //#region Internal
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll("[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      classedElements[i].part.add(...classedElements[i].classList);
    }
    const formFieldElements = [...this.shadowRoot.querySelectorAll("form-field")];
    for (let i = 0; i < formFieldElements.length; i++) {
      const formFieldElement = formFieldElements[i];
      const fieldId = formFieldElement.id;
      const container = formFieldElement.querySelector(".container");
      container?.part.add("container", "field-container", `${fieldId}-container`);
      const label = formFieldElement.querySelector(".field-label");
      label?.part.add("label", "field-label", `${fieldId}-label`);
      const prefix = formFieldElement.querySelector(".prefix");
      prefix?.part.add("prefix", "field-prefix", `${fieldId}-prefix`);
      const postfix = formFieldElement.querySelector(".postfix");
      postfix?.part.add("postfix", "field-postfix", `${fieldId}-postfix`);
      const enabledCheckbox = formFieldElement.querySelector(".enabled-checkbox");
      enabledCheckbox?.part.add("enabled-checkbox", "field-enabled-checkbox", `${fieldId}-enabled-checkbox`);
    }
  }
  //#endregion Internal
};
if (customElements.get(COMPONENT_TAG_NAME11) == null) {
  customElements.define(COMPONENT_TAG_NAME11, BoardSettingsElement);
}

// src/components/config-panel/config-panel.css?raw
var config_panel_default = ':host\r\n{\r\n    display: grid;\r\n    grid-template-rows: auto auto 1fr auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.icon\r\n{\r\n    width: var(--tab-icon-size);\r\n    height: var(--tab-icon-size);\r\n}\r\n\r\n#config-header\r\n{\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 7px;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n#config-title\r\n{\r\n    font-weight: bold;\r\n}\r\n\r\n.header-icon\r\n{\r\n    width: var(--dialog-header-icon-size);\r\n    height: var(--dialog-header-icon-size);\r\n}\r\n\r\n#config-navigation\r\n{\r\n    margin: 0;\r\n    margin-bottom: 14px;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: field;\r\n    color: fieldtext;\r\n    border: solid 1px graytext;\r\n    border-radius: 2px;\r\n    user-select: none;\r\n}\r\n\r\n.nav-item\r\n{\r\n    --tab-icon-size: 14px;\r\n    padding: 7px 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 7px;\r\n}\r\n\r\n@media (max-width: 665px) \r\n{\r\n    #config-navigation\r\n    {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n    }\r\n\r\n    .nav-item\r\n    {\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.nav-item[aria-current="page"]\r\n,.nav-item:hover\r\n{\r\n    background-color: highlight;\r\n    color: highlighttext;\r\n}\r\n\r\n#config-router\r\n{\r\n    overflow: hidden;\r\n}\r\n.page\r\n{\r\n    overflow-y: auto;\r\n    display: grid;\r\n}\r\n\r\n\r\n#board-settings-footer\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 14px;\r\n    padding-top: 1em;\r\n}\r\n\r\n#config-actions\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 14px;\r\n    padding-top: 1em;\r\n}\r\n\r\n.button\r\n{\r\n    width: 75px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#config-cancel\r\n{\r\n    grid-column: 2;\r\n}\r\n#config-ok\r\n{\r\n    grid-column: 3;\r\n}';

// src/components/config-panel/config-panel.html?raw
var config_panel_default2 = '<header id="config-header" class="dialog-header">\r\n    <svg id="config-icon" class="icon gear-icon header-icon">\r\n        <use href="#icon-definition_gear"></use>\r\n    </svg>\r\n    <span id="config-title" class="title">Configuration</span>\r\n</header>\r\n<menu id="config-navigation" class="navigation">\r\n    <a data-route="#config/settings" id="settings-nav-item" class="nav-item first">\r\n        <svg id="settings-route-icon" class="icon nav-item-icon">\r\n            <use href="#icon-definition_gear"></use>\r\n        </svg>\r\n        <span class="label nav-item-label">Settings</span>\r\n    </a>\r\n    <a data-route="#config/data" id="data-nav-item"  class="nav-item">\r\n        <svg id="data-route-icon" class="icon nav-item-icon">\r\n            <use href="#icon-definition_data"></use>\r\n        </svg>\r\n        <span class="nav-item-label">Data</span>\r\n    </a>\r\n    <a data-route="#config/history" id="history-nav-item"  class="nav-item">\r\n        <svg id="history-route-icon" class="icon nav-item-icon">\r\n            <use href="#icon-definition_clock"></use>\r\n        </svg>\r\n        <span class="label nav-item-label">History</span>\r\n    </a>\r\n    <a data-route="#config/about" id="about-nav-item"  class="nav-item last">\r\n        <svg id="about-route-icon" class="icon nav-item-icon">\r\n            <use href="#icon-definition_info"></use>\r\n        </svg>\r\n        <span class="label nav-item-label">About</span>\r\n    </a>\r\n</menu>\r\n<path-router id="config-router" class="router" path="settings">\r\n    <route-page path="settings" id="settings-page" class="page config-page">\r\n        <settings-panel\r\n            id="settings-panel"\r\n            class="config-page-panel"\r\n            exportparts="selected">\r\n            <slot name="custom-settings" slot="custom-settings"></slot>\r\n        </settings-panel>\r\n    </route-page>\r\n    <route-page path="data" id="data-page" class="page config-page">\r\n        <data-panel\r\n            id="data-panel"\r\n            class="config-page-panel"\r\n            exportparts="selected,deleted-item,deleted-item-remove-button,restore-button">\r\n            <slot name="deleted-images" slot="deleted-images"></slot>\r\n            <slot name="deleted-items" slot="deleted-items"></slot>\r\n        </data-panel>\r\n    </route-page>\r\n    <route-page path="history" id="history-page" class="page config-page">\r\n        <history-panel\r\n            id="history-panel"\r\n            class="config-page-panel"\r\n            exportparts="selected,action-history,action-history-entry,active">\r\n            <slot name="action-history" slot="action-history"></slot>\r\n        </history-panel>\r\n    </route-page>\r\n    <route-page path="about" id="about-page" class="page config-page">\r\n        <about-panel\r\n            id="about-panel"\r\n            class="config-page-panel"\r\n            ></about-panel>\r\n    </route-page>\r\n</path-router>\r\n<footer id="config-footer" class="footer dialog-footer">\r\n    <form id="config-actions" class="actions" method="dialog">\r\n        <button type="submit" id="config-cancel" class="button action-button close preferred-button label-button">Close</button>\r\n    </form>\r\n</footer>';

// src/components/config-panel/settings-panel/settings-panel.css?raw
var settings_panel_default = "\r\n\r\n:host\r\n{\r\n    display: grid;\r\n    grid-template-rows: auto auto 1fr;\r\n    gap: 7px;\r\n    flex: 1;\r\n}\r\n.header\r\n{\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n#custom-settings-fieldset\r\n{\r\n    color: graytext;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#shortcuts\r\n{\r\n    display: grid;\r\n    gap: 14px;\r\n}\r\n\r\n.shortcut\r\n{\r\n    display: grid;\r\n    gap: 7px;\r\n}\r\n\r\n.shortcut-description\r\n{\r\n    margin-left: 7px;\r\n}\r\n\r\n.key\r\n{\r\n    background-color: #eee;\r\n    border-radius: 3px;\r\n    border: 1px solid #b4b4b4;\r\n    box-shadow:\r\n    0 1px 1px rgba(0, 0, 0, 0.2),\r\n    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;\r\n    color: #333;\r\n    display: inline-block;\r\n    font-size: 0.85em;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    padding: 2px 4px;\r\n    white-space: nowrap;\r\n    padding-block: 5px;\r\n    margin-block: 3px;\r\n}";

// src/components/config-panel/settings-panel/settings-panel.html?raw
var settings_panel_default2 = '\r\n<header id="settings-header" class="page-header">App Settings</header>\r\n<fieldset id="color-scheme-fieldset" class="config-fieldset">\r\n    <legend id="color-scheme-legend" class="config-legend">Color Scheme</legend>\r\n    <div class="button-group" id="scheme-options">\r\n        <button class="scheme group-button first" id="inherit-button" data-value="inherit">Inherit</button>\r\n        <button class="scheme group-button" id="browser-button" data-value="browser">Browser</button>\r\n        <button class="scheme group-button" id="light-button" data-value="light">Light</button>\r\n        <button class="scheme group-button last" id="dark-button" data-value="dark">Dark</button>\r\n    </div>\r\n</fieldset>\r\n<fieldset id="custom-settings-fieldset" class="config-fieldset">\r\n    <legend id="custom-settings-legend" class="config-legend"><slot name="custom-settings-legend">Custom Settings</slot></legend>\r\n    <slot name="custom-settings">[ No Custom Settings ]</slot>\r\n</fieldset>\r\n<fieldset id="shortcuts-fieldset" class="config-fieldset">\r\n    <legend id="shortcuts-legend" class="config-legend">Shortcuts</legend>\r\n    <div id="shortcuts">\r\n        <div id="previous-word" class="shortcut word">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Arrow Left</kbd></div>\r\n            <div class="shortcut-description">Move text cursor to previous word.</div>\r\n        </div>\r\n        <div id="next-word" class="shortcut word">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Arrow Right</kbd></div>\r\n            <div class="shortcut-description">Move text cursor to next word.</div>\r\n        </div>\r\n        <div id="previous-line" class="shortcut line">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Arrow Up</kbd></div>\r\n            <div class="shortcut-description">Move text cursor to closest word in previous line.</div>\r\n        </div>\r\n        <div id="next-line" class="shortcut line">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Arrow Down</kbd></div>\r\n            <div class="shortcut-description">Move text cursor to closest word in next line.</div>\r\n        </div>\r\n        <div id="highlight-previous-word" class="shortcut highlight word">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Shift</kbd> + <kbd class="key">Arrow Left</kbd></div>\r\n            <div class="shortcut-description">Highlight from the current cursor position to the start of the previous word.</div>\r\n        </div>\r\n        <div id="highlight-next-word" class="shortcut highlight word">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Shift</kbd> + <kbd class="key">Arrow Right</kbd></div>\r\n            <div class="shortcut-description">Highlight from the current cursor position to the end of the next word.</div>\r\n        </div>\r\n        <div id="previous-line" class="shortcut highlight line">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Shift</kbd> + <kbd class="key">Arrow Up</kbd></div>\r\n            <div class="shortcut-description">Highlight from the current cursor position to the closest position in the previous line.</div>\r\n        </div>\r\n        <div id="next-line" class="shortcut highlight line">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Shift</kbd> + <kbd class="key">Arrow Down</kbd></div>\r\n            <div class="shortcut-description">Highlight from the current cursor position to the closest position in the next line.</div>\r\n        </div>\r\n        <div id="previous-task" class="shortcut task">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Alt</kbd> + <kbd class="key">Arrow Left</kbd></div>\r\n            <div class="shortcut-description">Move to the task in the previous list</div>\r\n        </div>\r\n        <div id="next-task" class="shortcut task">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Alt</kbd> + <kbd class="key">Arrow Right</kbd></div>\r\n            <div class="shortcut-description">Move to the task in the next list.</div>\r\n        </div>\r\n        <div id="next-list" class="shortcut task list">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Alt</kbd> + <kbd class="key">Arrow Up</kbd></div>\r\n            <div class="shortcut-description">Move to the task in the previous list.</div>\r\n        </div>\r\n        <div id="previous-list" class="shortcut task list">\r\n            <div class="shortcut-title"><kbd class="key">Ctrl</kbd> + <kbd class="key">Alt</kbd> + <kbd class="key">Arrow Down</kbd></div>\r\n            <div class="shortcut-description">Move to the task in the previous list.</div>\r\n        </div>\r\n    </div>\r\n</fieldset>';

// src/components/config-panel/settings-panel/settings-panel.ts
var COMPONENT_STYLESHEET11 = new CSSStyleSheet();
COMPONENT_STYLESHEET11.replaceSync(`${shared_default}
    ${settings_panel_default}`);
var COMPONENT_TEMPLATE8 = `${settings_panel_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "MagnifyingGlass" /* MagnifyingGlass */,
  "Gear" /* Gear */,
  "PlusIcon" /* PlusIcon */
)}`;
var COMPONENT_TAG_NAME12 = "settings-panel";
var SettingsPanelElement = class extends HTMLElement {
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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE8;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET11);
    this.addEventListener("click", this.#onClick.bind(this));
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
  }
  #scheme_onChange;
  async init(options) {
    const scheme = await DataService.getAppSetting("color-scheme" /* ColorScheme */);
    const button = this.shadowRoot.querySelector(`.scheme[data-value="${scheme}"]`);
    if (button != null) {
      button.classList.add("selected");
      button.part.add("selected");
    }
    this.#scheme_onChange = options.scheme_onChange;
  }
  #onClick(event) {
    const composedPath = event.composedPath();
    const button = composedPath.find((item) => item instanceof HTMLButtonElement);
    if (button == null) {
      return;
    }
    const buttons = [...this.shadowRoot.querySelectorAll("button.scheme")];
    for (let i = 0; i < buttons.length; i++) {
      const button2 = buttons[i];
      button2.classList.remove("selected");
      button2.part.remove("selected");
    }
    button.classList.add("selected");
    button.part.add("selected");
    const scheme = button.dataset.value;
    if (scheme == null) {
      FeedbackService.showErrorMessageCard(`An error occurred attempting to set the app's color scheme. Scheme was not changed.`);
      console.error(new Error("Scheme value was undefined."));
      return;
    }
    if (scheme != "inherit" && scheme != "browser" && scheme != "light" && scheme != "dark") {
      FeedbackService.showErrorMessageCard(`An error occurred attempting to set the app's color scheme. Scheme was not changed.`);
      console.error(new Error("Scheme value was not recognized as a valid scheme."));
      return;
    }
    this.#scheme_onChange(scheme);
  }
};
if (customElements.get(COMPONENT_TAG_NAME12) == null) {
  customElements.define(COMPONENT_TAG_NAME12, SettingsPanelElement);
}

// src/components/config-panel/history-panel/history-panel.css?raw
var history_panel_default = ":host\r\n{\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n    gap: 7px;\r\n    overflow: hidden;\r\n}\r\n\r\n#history-header\r\n{\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n#history-length-fieldset\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    flex: 1;\r\n}\r\n\r\n#history-length-field .container\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    flex: 1;\r\n}\r\n\r\n#action-history-length\r\n{\r\n    flex: 1;\r\n}\r\n\r\n#history-navigation-fieldset\r\n{\r\n    display: grid;\r\n    grid-template-columns: auto auto 1fr auto;\r\n    grid-template-rows: auto 1fr;\r\n    gap: 7px;\r\n    overflow: hidden;\r\n}\r\n#clear-history-button\r\n{\r\n    grid-column: 4;\r\n    white-space: nowrap;\r\n}\r\n#action-history\r\n{\r\n    grid-column: span 4;\r\n    background: field;\r\n    border-radius: 2px;\r\n    border: 1px solid graytext;\r\n    color: fieldtext;\r\n    overflow: auto;\r\n    flex: 1;\r\n}\r\n\r\n\r\n.action-history-entry\r\n{\r\n    padding: 7px;\r\n    border-radius: 2px;\r\n}\r\n.action-history-entry:hover\r\n{\r\n    background-color: highlight;\r\n    color: highlighttext;\r\n}\r\n\r\n@media (max-width: 665px) \r\n{\r\n    #action-history-length\r\n    {\r\n        width: 50px;\r\n    }\r\n}";

// src/components/config-panel/history-panel/history-panel.html?raw
var history_panel_default2 = '\r\n<header id="history-header" class="page-header">History</header>\r\n<fieldset id="history-navigation-fieldset" class="config-fieldset">\r\n    <legend id="history-navigation-legend" class="config-legend">Navigation</legend>\r\n    <button id="undo-button" class="data-button">\r\n        <svg id="undo-icon" class="icon" title="Undo">\r\n            <use href="#icon-definition_undo-redo"></use>\r\n        </svg>\r\n        <span part="undo-label">Undo</span>\r\n    </button>\r\n    <button id="redo-button" class="data-button">\r\n        <svg id="redo-icon" class="icon" title="Redo" style="transform: scaleX(-1);">\r\n            <use href="#icon-definition_undo-redo"></use>\r\n        </svg>\r\n        <span id="redo-label">Redo</span>\r\n    </button>\r\n    <button id="clear-history-button" class="label-button data-button">\r\n        <svg id="clear-history-icon" class="icon" title="Clear">\r\n            <use href="#icon-definition_trash"></use>\r\n        </svg>\r\n        <span id="clear-history-label">Clear History</span>\r\n    </button>\r\n    <action-history id="action-history" reverse></action-history>\r\n</fieldset>\r\n<fieldset id="history-length-fieldset" class="config-fieldset">\r\n    <legend id="history-length-legend" class="config-legend">History Length</legend>\r\n    <form-field id="history-length-field" class="field">\r\n        <input type="range" id="action-history-length" class="input" max="150" list="action-history-length-values" />\r\n        <datalist id="action-history-length-values"></datalist>\r\n        <span slot="postfix" id="action-history-length-value" part="field-postfix"></span>\r\n        <button slot="postfix" id="apply-history-length-button" part="button field-postfix label-button data-button">\r\n            <svg id="apply-history-length-icon" class="icon">\r\n                <use href="#icon-definition_confirm-check"></use>\r\n            </svg>\r\n            <span id="apply-history-length-label">Apply</span>\r\n        </button>\r\n    </form-field>\r\n</fieldset>';

// src/components/config-panel/history-panel/history-panel.ts
var HistoryLengthValues = [0, 30, 50, 100, 150];
var DEFAULT_HISTORY_LENGTH = "30";
var ATTRIBUTE_PREPARED_FOR_DELETE = "to-delete";
var COMPONENT_STYLESHEET12 = new CSSStyleSheet();
COMPONENT_STYLESHEET12.replaceSync(`${shared_default}
    ${history_panel_default}`);
var COMPONENT_TEMPLATE9 = `${history_panel_default2}
${defineIcons(
  "ConfirmCheck" /* ConfirmCheck */,
  "UndoRedo" /* UndoRedo */,
  "Trash" /* Trash */
)}`;
var COMPONENT_TAG_NAME13 = "history-panel";
var HistoryPanelElement = class extends HTMLElement {
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
  //#region Housekeeping
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE9;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET12);
    this.addEventListener("click", this.#onClick.bind(this));
    this.findElement("action-history-length").addEventListener("change", this.#historyLength_onChange.bind(this));
    const actionHistory = this.getElement("action-history");
    actionHistory.onBack = this.#actionHistory_onBack.bind(this);
    actionHistory.onForward = this.#actionHistory_onForward.bind(this);
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
  }
  #refreshBoards;
  #refreshCache;
  async init(options) {
    this.#refreshBoards = options.refreshBoards;
    this.#refreshCache = options.refreshCache;
    const historyLength = await DataService.getAppSetting("historyLength" /* HistoryLength */) ?? DEFAULT_HISTORY_LENGTH;
    this.#prepareHistoryLength(historyLength);
    this.refresh();
  }
  //#endregion Housekeeping
  //#region API
  async refresh() {
    const actionHistory = this.getElement("action-history");
    actionHistory.innerHTML = "";
    actionHistory.toggleAttribute("prevent-removal", true);
    const records = await DataService.getHistoryEntries();
    if (records.length == 0) {
      return;
    }
    let activeEntryIndex = await DataService.getAppSetting("activeEntryIndex" /* ActiveEntryIndex */);
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
        activeEntry.part.add("active");
        const descendants = [...activeEntry.querySelectorAll("span")];
        for (let i2 = 0; i2 < descendants.length; i2++) {
          descendants[i2].part.add("active");
        }
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
    actionHistory.append(...entries);
    requestAnimationFrame(() => {
      actionHistory.toggleAttribute("prevent-removal", false);
    });
  }
  undo() {
    this.findElement("action-history").back();
  }
  redo() {
    this.findElement("action-history").forward();
  }
  async addActionHistoryEntry(action, type, properties) {
    const historyLength = parseFloat(await DataService.getAppSetting("historyLength" /* HistoryLength */) ?? DEFAULT_HISTORY_LENGTH);
    if (historyLength == 0) {
      return;
    }
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
    const entry = DataService.createHistoryEntry(data, action);
    await DataService.saveHistoryEntry(entry);
    const entries = await DataService.getHistoryEntries();
    const removeCount = entries.length - historyLength;
    if (removeCount > 0) {
      for (let i = 0; i < removeCount; i++) {
        removeIds.push(entries[i].id);
        history.querySelector(`[data-entry-id="${entries[i].id}"]`)?.remove();
      }
    }
    if (removeIds.length > 0) {
      await DataService.deleteHistoryEntriesIfExists(removeIds);
    }
    const entryElement = this.#createActionHistoryEntryElement(entry);
    history.append(entryElement);
    const activeIndex = [...history.children].indexOf(entryElement);
    await DataService.saveAppSetting("activeEntryIndex" /* ActiveEntryIndex */, activeIndex > -1 ? activeIndex : null);
    return entryElement;
  }
  async clearHistory() {
    const confirmed = await FeedbackService.getConfirmation("Are you sure you want to delete all app history? This CAN NOT be undone.", "danger");
    if (confirmed == false) {
      return;
    }
    const ids = (await DataService.getHistoryEntries()).map((item) => item.id);
    await DataService.deleteHistoryEntries(...ids);
    this.refresh();
  }
  //#endregion API
  //#region Internal
  #prepareHistoryLength(historyLength) {
    const historyLengthOptions = Array.from(HistoryLengthValues).map((value) => createOptionElement(value));
    this.findElement("action-history-length-values").append(...historyLengthOptions);
    this.findElement("action-history-length").value = historyLength;
    this.findElement("action-history-length-value").textContent = historyLength;
  }
  async #prepareHistoryEntries(historyElement, startIndex) {
    const entries = await DataService.getHistoryEntries();
    for (let i = 0; i < entries.length; i++) {
      const element = historyElement.querySelector(`[data-entry-id="${entries[i].id}"]`);
      if (i < startIndex) {
        element.removeAttribute(ATTRIBUTE_PREPARED_FOR_DELETE);
      } else {
        element.toggleAttribute(ATTRIBUTE_PREPARED_FOR_DELETE, true);
      }
    }
  }
  async #applyHistoryLength(actionHistoryLength) {
    await DataService.saveAppSetting("historyLength" /* HistoryLength */, actionHistoryLength);
    const entries = await DataService.getHistoryEntries();
    let startIndex = actionHistoryLength;
    if (startIndex > 0) {
      startIndex--;
    }
    const ids = [];
    for (let i = startIndex; i < entries.length; i++) {
      ids.push(entries[i].id);
    }
    await DataService.deleteHistoryEntries(...ids);
    this.refresh();
  }
  #createActionHistoryEntryElement(entry) {
    const element = document.createElement("div");
    element.toggleAttribute("data-entry", true);
    element.setAttribute("timestamp", entry.timestamp.toString());
    element.setAttribute("data-entry-id", entry.id);
    element.setAttribute("part", "action-history-entry");
    element.classList.add("action-history-entry");
    element.innerHTML = `<span class="action-type" part="action-history-entry-type">${entry.action.toUpperCase()}</span>
        <span class="data" part="action-history-entry-data">
            <span class="target-type" part="action-history-target-type">${entry.data.targetType[0].toUpperCase()}${entry.data.targetType.substring(1)}</span>
            <span class="target-id" part="action-history-target-id">${entry.data.properties.id}</span>
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
    const channel = recordType == "board" ? DataService.data.boards : recordType == "list" ? DataService.data.lists : recordType == "task" ? DataService.data.tasks : recordType == "image" ? DataService.data.customImages : null;
    if (channel == null) {
      throw new Error(`Unknown record type: ${recordType}`);
    }
    if (actionType == "create") {
      await channel.delete(recordId);
    } else if (actionType == "update") {
      const currentEntry = await DataService.getHistoryEntry(entryId);
      if (currentEntry == null) {
        throw new Error("Unable to find target entry.");
      }
      const target = await channel.get(recordId);
      if (target == null) {
        throw new Error("Unable to find target record.");
      }
      await DataService.reverseUpdate(channel, currentEntry, target);
    } else if (actionType == "delete") {
      await channel.restore(recordId);
    } else {
      console.error(`Unknown action type: ${actionType}`);
    }
    await DataService.saveAppSetting("activeEntryIndex" /* ActiveEntryIndex */, targetIndex > -1 ? targetIndex : null);
  }
  async #handleActionEntryActivate(targetEntry, previousEntry, targetIndex, previousEntryIndex) {
    const previouslyActive = [...targetEntry.parentElement.querySelectorAll('[part="active"]')];
    for (let i = 0; i < previouslyActive.length; i++) {
      previouslyActive[i].part.remove("active");
      const descendants2 = [...previouslyActive[i].querySelectorAll("span")];
      for (let i2 = 0; i2 < descendants2.length; i2++) {
        descendants2[i2].part.add("active");
      }
    }
    targetEntry.part.add("active");
    const descendants = [...targetEntry.querySelectorAll("span")];
    for (let i = 0; i < descendants.length; i++) {
      descendants[i].part.add("active");
    }
    const actionType = targetEntry.querySelector(".action-type")?.textContent?.toLowerCase();
    const recordType = targetEntry.querySelector(".target-type")?.textContent?.toLowerCase();
    const recordId = targetEntry.querySelector(".target-id")?.textContent;
    const entryId = targetEntry.getAttribute("data-entry-id");
    if (actionType == null || recordType == null || recordId == null || entryId == null) {
      console.error(new Error("Required property was not found."));
      return;
    }
    const channel = recordType == "board" ? DataService.data.boards : recordType == "list" ? DataService.data.lists : recordType == "task" ? DataService.data.tasks : recordType == "image" ? DataService.data.customImages : null;
    if (channel == null) {
      throw new Error(`Unknown record type: ${recordType}`);
    }
    if (actionType == "create") {
      await channel.restore(recordId);
    } else if (actionType == "update") {
      const currentEntry = await DataService.getHistoryEntry(entryId);
      if (currentEntry == null) {
        throw new Error("Unable to find target entry.");
      }
      const target = await channel.get(recordId);
      if (target == null) {
        throw new Error("Unable to find target record.");
      }
      await DataService.activateUpdate(channel, currentEntry, target);
    } else if (actionType == "delete") {
      await channel.delete(recordId);
    } else {
      console.error(`Unknown action type: ${actionType}`);
    }
    await DataService.saveAppSetting("activeEntryIndex" /* ActiveEntryIndex */, targetIndex > -1 ? targetIndex : null);
  }
  //#region Handlers
  #onClick(event) {
    const composedPath = event.composedPath().filter((item) => item instanceof HTMLElement);
    const undoButton = composedPath.find((item) => item.id == "undo-button");
    if (undoButton != null) {
      this.undo();
      return;
    }
    const redoButton = composedPath.find((item) => item.id == "redo-button");
    if (redoButton != null) {
      this.redo();
      return;
    }
    const applyHistoryLengthButton = composedPath.find((item) => item.id == "apply-history-length-button");
    if (applyHistoryLengthButton != null) {
      const historyLength = this.findElement("action-history-length").value;
      this.#applyHistoryLength(parseInt(historyLength));
      return;
    }
    const clearHistoryButton = composedPath.find((item) => item.id == "clear-history-button");
    if (clearHistoryButton != null) {
      this.clearHistory();
      return;
    }
  }
  async #historyLength_onChange(event) {
    const input = event.target;
    snapToStep(input, HistoryLengthValues);
    this.findElement("action-history-length-value").textContent = input.value;
    let startIndex = parseInt(this.findElement("action-history-length").value);
    if (startIndex > 0) {
      startIndex--;
    }
    const actionHistory = this.findElement("action-history");
    this.#prepareHistoryEntries(actionHistory, startIndex);
  }
  async #actionHistory_onBack(target, previous, all, targetIndex, previousActiveEntryIndex) {
    let refreshBoards = false;
    let refreshDeletedItems = false;
    const isLastUpdate = all.indexOf(target) == all.length - 1;
    if (isLastUpdate == true) {
      const recordType = target.querySelector(".target-type")?.textContent?.toLowerCase();
      if (recordType == "board") {
        refreshBoards = true;
      }
      refreshDeletedItems = true;
    }
    await this.#handleActionEntryReverse(target, previous, targetIndex, previousActiveEntryIndex);
    if (refreshBoards == true) {
      this.#refreshBoards();
    }
    if (refreshDeletedItems == true) {
      this.#refreshCache();
    }
  }
  async #actionHistory_onForward(target, previous, all, targetIndex, previousActiveEntryIndex) {
    let refreshBoards = false;
    let refreshDeletedItems = false;
    const isLastUpdate = all.indexOf(target) == all.length - 1;
    if (isLastUpdate == true) {
      const recordType = target.querySelector(".target-type")?.textContent?.toLowerCase();
      if (recordType == "board") {
        refreshBoards = true;
      }
      refreshDeletedItems = true;
    }
    await this.#handleActionEntryActivate(target, previous, targetIndex, previousActiveEntryIndex);
    if (refreshBoards == true) {
      this.#refreshBoards();
    }
    if (refreshDeletedItems == true) {
      this.#refreshCache();
    }
  }
  //#endregion Handlers
  #applyPartAttributes() {
    const identifiedElements = [...this.shadowRoot.querySelectorAll("[id]")];
    for (let i = 0; i < identifiedElements.length; i++) {
      identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...this.shadowRoot.querySelectorAll(":not(form-field,.postfix,.prefix,.container, .field-label)[class]")];
    for (let i = 0; i < classedElements.length; i++) {
      const classedElement = classedElements[i];
      classedElement.part.add(...classedElements[i].classList);
    }
    const formFieldElements = [...this.shadowRoot.querySelectorAll("form-field")];
    for (let i = 0; i < formFieldElements.length; i++) {
      const formFieldElement = formFieldElements[i];
      const inputId = formFieldElement.id;
      const container = formFieldElement.querySelector(".container");
      container.part.add("container", "field-container", `${inputId}-container`);
      const label = formFieldElement.querySelector(".field-label");
      label.part.add("container", "field-label", `${inputId}-label`);
      const prefix = formFieldElement.querySelector(".prefix");
      prefix.part.add("container", "field-prefix", `${inputId}-prefix`);
      const postfix = formFieldElement.querySelector(".postfix");
      postfix.part.add("container", "field-postfix", `${inputId}-postfix`);
    }
  }
  //#endregion Internal
};
if (customElements.get(COMPONENT_TAG_NAME13) == null) {
  customElements.define(COMPONENT_TAG_NAME13, HistoryPanelElement);
}

// src/components/config-panel/about-panel/about-panel.css?raw
var about_panel_default = ":host\r\n{\r\n    display: grid;\r\n    gap: 7px;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: auto 1fr auto;\r\n}\r\n\r\n#about-header\r\n{\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    grid-column: span 2;\r\n}\r\n\r\n#about-app-fieldset\r\n{\r\n    grid-column: span 2;\r\n}\r\n#about-app-fieldset .text\r\n{\r\n    text-align: center;\r\n}\r\n\r\n#version-fieldset\r\n{\r\n    grid-column: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#copyright-fieldset\r\n{\r\n    grid-column: 2;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}";

// src/components/config-panel/about-panel/about-panel.html?raw
var about_panel_default2 = '<header id="about-header" class="page-header">About</header>\r\n<fieldset id="about-app-fieldset" class="config-fieldset">\r\n    <legend id="about-app-legend" class="config-legend">App</legend>\r\n    <p class="text">The <em class="emphasis">My Boards</em> app is a Single Page App (SPA) implementation of the <code class="code">taskboard-manager</code> custom element.</p>\r\n    <p class="text">To see a Progressive Web App implementation of the <code class="code">taskboard-manager</code> custom element, see the </p>\r\n</fieldset>\r\n<fieldset id="version-fieldset" class="config-fieldset">\r\n    <legend id="version-legend" class="config-legend">Version</legend>\r\n    <div id="version-value">--.--.--</div>\r\n</fieldset>\r\n<fieldset id="copyright-fieldset" class="config-fieldset">\r\n    <legend id="copyright-legend" class="config-legend">Copyright</legend>\r\n    <div id="copyright-description">\r\n        <!-- For derivative work, replace this license with your own copyright -->\r\n        <p class="text copyright-text" xmlns:cc="http://creativecommons.org/ns#" >\r\n            Both are released with \r\n            <a id="cc0-link" class="link copyright-link" href="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1" \r\n            target="_blank" \r\n            rel="license noopener noreferrer" \r\n            style="display:inline-block;">\r\n                CC0 1.0\r\n                <img id="cc-icon" class="icon raster" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="Creative Commons Icon">\r\n                <img id="zero-icon" class="icon raster" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1" alt="Zero Icon">\r\n            </a>\r\n        </p>\r\n        <!-- End of CC0 License -->\r\n    </div>\r\n</fieldset>';

// src/components/config-panel/about-panel/about-panel.ts
var COMPONENT_STYLESHEET13 = new CSSStyleSheet();
COMPONENT_STYLESHEET13.replaceSync(`${shared_default}
    ${about_panel_default}`);
var COMPONENT_TEMPLATE10 = `${about_panel_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "MagnifyingGlass" /* MagnifyingGlass */,
  "Gear" /* Gear */,
  "PlusIcon" /* PlusIcon */
)}`;
var COMPONENT_TAG_NAME14 = "about-panel";
var AboutPanelElement = class extends HTMLElement {
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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE10;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET13);
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
  }
  init(options) {
    this.setVersion(options.appVersion);
  }
  setVersion(version) {
    this.findElement("version-value").textContent = version;
  }
};
if (customElements.get(COMPONENT_TAG_NAME14) == null) {
  customElements.define(COMPONENT_TAG_NAME14, AboutPanelElement);
}

// src/components/config-panel/config-panel.ts
var COMPONENT_STYLESHEET14 = new CSSStyleSheet();
COMPONENT_STYLESHEET14.replaceSync(`${shared_default}
    ${config_panel_default}`);
var COMPONENT_TEMPLATE11 = `${config_panel_default2}
${defineIcons(
  "Gear" /* Gear */,
  "Data" /* Data */,
  "Clock" /* Clock */,
  "Info" /* Info */
)}`;
var COMPONENT_TAG_NAME15 = "config-panel";
var ConfigPanelElement = class extends HTMLElement {
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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE11;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET14);
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
  }
  async init(options) {
    this.findElement("settings-panel").init({ scheme_onChange: options.scheme_onChange });
    this.findElement("data-panel").init({
      openImportManager: options.openImportManager,
      openBoard: options.openBoard,
      refreshActionHistory: this.refreshHistory.bind(this),
      refreshBoards: options.refreshBoards,
      addActionHistoryEntry: this.addActionHistoryEntry.bind(this)
    });
    this.findElement("history-panel").init({ refreshBoards: options.refreshBoards, refreshCache: this.refreshCache.bind(this) });
    this.findElement("about-panel").init({ appVersion: options.appVersion });
  }
  refreshCache() {
    this.findElement("data-panel").refreshCache();
  }
  refreshHistory() {
    this.findElement("history-panel").refresh();
  }
  history_undo() {
    this.findElement("history-panel").undo();
  }
  history_redo() {
    this.findElement("history-panel").redo();
  }
  addActionHistoryEntry(action, type, properties) {
    return this.findElement("history-panel").addActionHistoryEntry(action, type, properties);
  }
  async clearData() {
    this.findElement("data-panel").clearData();
  }
};
if (customElements.get(COMPONENT_TAG_NAME15) == null) {
  customElements.define(COMPONENT_TAG_NAME15, ConfigPanelElement);
}

// node_modules/.pnpm/@magnit-ce+editable-list@0.0.11/node_modules/@magnit-ce/editable-list/dist/editable-list.mjs
var IGNORED_TAGS = /* @__PURE__ */ new Set([
  "style",
  "template"
]);
var HTML = `<div id="${"items"}"><slot id="${"items-slot"}"></slot></div>
<slot name="add"><button id="${"add"}" class="button" type="button">&plus;</button></slot>`;
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
var COMPONENT_STYLESHEET15 = new CSSStyleSheet();
COMPONENT_STYLESHEET15.replaceSync(STYLE);
var COMPONENT_TAG_NAME16 = "editable-list";
var EditableListElement = class extends HTMLElement {
  /** if `true`, allows child elements to be removed from the DOM when their remove button is pressed */
  canRemove = true;
  /** if `true`, allows the edit button to be added and the edit event to be dispatched */
  canEdit = false;
  #boundEventHandlers = /* @__PURE__ */ new Map([
    ["add", this.#addButton_onClick.bind(this)]
  ]);
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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = HTML;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET15);
    this.addEventListener("click", (event) => {
      let button = event.composedPath().find((item2) => item2 instanceof HTMLButtonElement);
      if (button == null) {
        return;
      }
      let item = button.parentElement;
      if (button.classList.contains("edit")) {
        const result = this.dispatchEvent(new CustomEvent("edit", { detail: item, bubbles: true }));
        if (this.hasAttribute("cancel-edit")) {
          event.preventDefault();
          event.stopPropagation();
        }
      } else if (button.classList.contains("remove")) {
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
    this.findElement(
      "add"
      /* AddButton */
    )?.addEventListener("click", this.#boundEventHandlers.get("add"));
    this.getElement(
      "items-slot"
      /* ItemsSlot */
    ).addEventListener("slotchange", this.#updateItemButtons.bind(this));
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
  /**
   * Create a new instance of an `EditableListElement` element using the provided properties to define the configuration.
   * @param props target `EditableListProperties` values
   * @returns a configured instance of an `EditableListElement` element.
   */
  static create(props) {
    const element = document.createElement(COMPONENT_TAG_NAME16);
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
    const children = this.getElement(
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
      const existingEditButton = children[i].querySelector(`button.${"edit"}`);
      if (this.canEdit) {
        if (existingEditButton == null) {
          const editButton = document.createElement("button");
          editButton.type = "button";
          const editClasses = this.getAttribute("edit-class")?.trim() ?? "";
          editButton.classList.add(
            "edit"
            /* EditButton */
          );
          if (editClasses != "") {
            editButton.classList.add(...editClasses.split(" "));
          }
          editButton.setAttribute("part", `${"edit"}${editClasses != "" ? ` ${editClasses}` : ""}`);
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
      const existingRemoveButton = children[i].querySelector(`button.${"remove"}`);
      if (this.canRemove) {
        if (existingRemoveButton == null) {
          const removeButton = document.createElement("button");
          removeButton.type = "button";
          const removeClasses = this.getAttribute("remove-class")?.trim() ?? "";
          removeButton.classList.add(
            "remove"
            /* RemoveButton */
          );
          if (removeClasses != "") {
            removeButton.classList.add(...removeClasses.split(" "));
          }
          removeButton.setAttribute("part", `${"remove"}${removeClasses != "" ? ` ${removeClasses}` : ""}`);
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
if (customElements.get(COMPONENT_TAG_NAME16) == null) {
  customElements.define(COMPONENT_TAG_NAME16, EditableListElement);
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
var COMPONENT_TAG_NAME17 = "route-dialog";
var RouteDialogElement = class extends RouteType(HTMLDialogElement) {
};
if (customElements.get(COMPONENT_TAG_NAME17) == null) {
  customElements.define(COMPONENT_TAG_NAME17, RouteDialogElement, { extends: "dialog" });
}
var COMPONENT_TAG_NAME22 = "route-page";
var RoutePageElement = class extends RouteType() {
};
if (customElements.get(COMPONENT_TAG_NAME22) == null) {
  customElements.define(COMPONENT_TAG_NAME22, RoutePageElement);
}
var COMPONENT_STYLESHEET16 = new CSSStyleSheet();
COMPONENT_STYLESHEET16.replaceSync(path_router_default);
var DOMCONTENTLOADED_PROMISE = new Promise((resolve) => document.addEventListener("DOMContentLoaded", resolve));
var ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD = "property";
var COMPONENT_TAG_NAME32 = "path-router";
var PathRouterElement = class extends HTMLElement {
  get routePages() {
    return Array.from(this.querySelectorAll(`:scope > ${COMPONENT_TAG_NAME22}, ${COMPONENT_TAG_NAME32} :not(${COMPONENT_TAG_NAME32}) ${COMPONENT_TAG_NAME22}`), (route) => route);
  }
  get routeDialogs() {
    return Array.from(this.querySelectorAll(`:scope > [is="${COMPONENT_TAG_NAME17}"]`), (routeDialog) => routeDialog);
  }
  get routes() {
    return Array.from(this.querySelectorAll(`:scope > ${COMPONENT_TAG_NAME22},${COMPONENT_TAG_NAME32} :not(${COMPONENT_TAG_NAME32}) ${COMPONENT_TAG_NAME22},:scope > [is="${COMPONENT_TAG_NAME17}"]`), (route) => route);
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
          if (routeData.route.closest(`[is="${COMPONENT_TAG_NAME17}"][open]`) != null) {
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
    const pathType = route.closest(`[is="${COMPONENT_TAG_NAME17}"]`) == null ? "Page" : "Dialog";
    if (pathType == "Page") {
      return this.routeTypeMatches(route, pagePathArray, routePathArray, `${COMPONENT_TAG_NAME22}`, previousMatches);
    } else if (dialogPath == null) {
      return [false, {}];
    }
    const dialogPathArray = dialogPath.split("/");
    return this.routeTypeMatches(route, dialogPathArray, routePathArray, `${COMPONENT_TAG_NAME22},[is="${COMPONENT_TAG_NAME17}"]`, previousMatches);
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
    if (parent.adoptedStyleSheets.indexOf(COMPONENT_STYLESHEET16) == -1) {
      parent.adoptedStyleSheets.push(COMPONENT_STYLESHEET16);
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

// node_modules/.pnpm/@magnit-ce+task-board@0.0.4/node_modules/@magnit-ce/task-board/dist/task-board.js
var COMPONENT_STYLESHEET17 = new CSSStyleSheet();
COMPONENT_STYLESHEET17.replaceSync(`
:host
{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    --list-min-width: 300px;
}
#lists
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
var COMPONENT_TAG_NAME18 = "task-board";
var TaskBoardElement = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot name="header"></slot><div id="lists" part="lists"><slot></slot></div><slot name="footer"></slot>`;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET17);
  }
};
if (customElements.get(COMPONENT_TAG_NAME18) == null) {
  customElements.define(COMPONENT_TAG_NAME18, TaskBoardElement);
}

// node_modules/.pnpm/@magnit-ce+task-list@0.0.17/node_modules/@magnit-ce/task-list/dist/task-list.js
var task_list_default = ":host\n{\n    --border-color: rgb(95, 95, 95);\n    display: inline-block;\n    border: solid 1px var(--border-color);\n    border-radius: 3px;\n    padding: .5em;\n    overflow-y: scroll;\n}\n#header:has(#name:focus)\n{\n    outline: var(--list-name-focus-outline);\n}\n\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        --border-color: rgb(71, 71, 71);\n    }\n}\n\n\n#header\n{\n    display: grid;\n    grid-template-columns: auto minmax(0, 1fr) auto;\n    align-items: center;\n    position: sticky;\n    top: 0;\n}\n\n#color-container\n{\n    display: contents;\n}\n\n#color\n{\n    padding: 0;\n    width: 12px;\n    min-height: 0;\n    height: auto;\n    border: solid 1px transparent;\n    align-self: stretch;\n}\n#color::-moz-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n#color::-webkit-color-swatch-wrapper \n{\n    padding: 0;\n    margin: 0;\n}\n\n#color::-webkit-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n#tasks\n{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n#add-button\n{\n    margin-top: 1rem;\n    margin-inline: auto;\n    min-width: 100px;\n    align-self: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n:host([collapsed]) > #tasks\n{\n    overflow: hidden;\n    height: min-content;\n    height: 0;\n    opacity: 0;\n    padding: 0;\n    margin: 0;\n    border: none;\n    pointer-events: none;\n    user-select: none;\n}\n\n::slotted([data-drag-id])\n{\n    opacity: .7;\n    scale: .97;\n    transition: opacity 100ms ease, scale 100ms ease;\n}\n\n::slotted(task-list)\n{\n    margin-block: 7px;\n}";
var task_list_default2 = '<slot name="header">\n    <header id="header">\n        <label id="color-container" title="Color">\n            <input type="color" id="color" class="input" value="#919191" />\n        </label>\n        <input type="text" id="name" class="input" placeholder="List Name" />\n        <button type="button" id="collapse-button" class="button field-button" title="Collapse">\n            <span id="collapse-icon" class="icon">\u25B2</span>\n        </button>\n    </header>\n</slot>\n<ul id="tasks">\n    <slot></slot>\n</ul>\n<slot name="add-button">\n<button type="button" id="add-button" class="button" title="Add">\n    <span id="add-icon" class="icon">&plus;</span>\n    <span id="add-label">Add Task</span>\n</button>\n</slot>\n<slot name="footer"></slot>';
var COMPONENT_STYLESHEET18 = new CSSStyleSheet();
COMPONENT_STYLESHEET18.replaceSync(task_list_default);
var COMPONENT_TAG_NAME19 = "task-list";
var TaskListElement = class extends HTMLElement {
  TASKCARD_TAG_NAME = "task-card";
  dragAndDropQueryParent;
  parentScopeSelector = "";
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
  handledItems = /* @__PURE__ */ new WeakSet();
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = task_list_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET18);
    this.dragAndDropQueryParent = this.parentElement == null ? this.getRootNode() : this.parentElement.getRootNode();
    this.findElement("name").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
    });
    this.findElement("color").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, detail: { target: event.target } }));
    });
    this.findElement("collapse-button").addEventListener("click", () => {
      this.toggleHidden();
    });
    this.findElement("add-button").addEventListener("click", () => {
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
        if (children[i].tagName.toLowerCase() == COMPONENT_TAG_NAME19.toLowerCase()) {
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
  toggleHidden() {
    if (this.getAttribute("collapsed") == null) {
      this.hide();
    } else {
      this.show();
    }
  }
  hide() {
    this.findElement("collapse-icon").textContent = "\u25BC";
    this.setAttribute("collapsed", "");
    this.dispatchEvent(new CustomEvent("collapse", { bubbles: true, cancelable: true }));
  }
  show() {
    this.findElement("collapse-icon").textContent = "\u25B2";
    this.removeAttribute("collapsed");
    this.dispatchEvent(new CustomEvent("collapse", { bubbles: true, cancelable: true }));
  }
  static observedAttributes = ["name", "description", "color", "collapsed", "drag-drop"];
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName == "name") {
      this.findElement("name").value = newValue;
    } else if (attributeName == "description") {
      this.findElement("header").title = newValue;
    } else if (attributeName == "color") {
      this.findElement("color").value = newValue;
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
if (customElements.get(COMPONENT_TAG_NAME19) == null) {
  customElements.define(COMPONENT_TAG_NAME19, TaskListElement);
}

// node_modules/.pnpm/@magnit-ce+task-card@0.0.24/node_modules/@magnit-ce/task-card/dist/task-card.js
var task_card_default = ':host\n{\n    --border-color: rgb(95, 95, 95);\n    border: solid 1px var(--border-color);\n    border-radius: 3px;\n    padding: 0;\n    margin: .25em;\n    display: inline-flex;\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        --border-color: rgb(71, 71, 71);\n    }\n}\n\n:host:has(#description:focus)\n{\n    outline: var(--task-focus-outline);\n}\n\n#color-container\n{\n    display: contents;\n}\n\n#color\n{\n    margin: 0;\n    padding: 0;\n    width: 7.5px;\n    min-height: 0;\n    height: auto;\n    border: none;\n}\n#color::-moz-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n#color::-webkit-color-swatch-wrapper \n{\n    padding: 0;\n    margin: 0;\n}\n\n#color::-webkit-color-swatch \n{\n    border: none;\n    padding: 0;\n    margin: 0;\n}\n\n#is-finished\n{\n    margin: 1em .5em;\n}\n\n:host(.custom-checkbox) #is-finished\n{\n    display: none;\n}\n\n#finished-indicator\n{\n    margin-block: var(--margin-block, var(--margin, .5em));\n    margin-inline: var(--margin-inline, var(--margin, .5em));\n    background: var(--background);\n    background-color: var(--background-color, field);\n    background-image: var(--background-image, none);\n    border: var(--border, solid 1px fieldtext);\n    color: var(--color);\n    min-width: 13px;\n    min-height: 13px;\n    border-radius: 3px;\n    padding: 1px 2px;\n    box-sizing: border-box;\n    user-select: none;\n}\n:host(:not(.custom-checkbox)) #finished-indicator\n{\n    display: none;\n}\n\n\n#is-finished:checked ~ slot #description\n,#is-finished:checked ~ ::slotted([slot="description"])\n{\n    text-decoration: line-through;\n}\n\n::slotted([slot="custom-check"])\n{\n    visibility: hidden;\n}\n#is-finished:checked ~ #finished-indicator\n{\n    background: var(--finished-background);\n    background-color: var(--finished-background-color, transparent);\n    background-image: var(--finished-background-image, none);\n    border: var(--finished-border, solid 1px fieldtext);\n    color: var(--finished-color);\n}\n#is-finished:checked ~ #finished-indicator ::slotted([slot="custom-check"])\n{\n    visibility: var(--custom-check-visibility, visible);\n    display: var(--custom-check-display, block);\n}\n\n#description\n{\n    /* user-agent input defaults */\n    --input-border-color: rgb(118, 118, 118);\n\n    min-height: 1.2em;\n    min-width: 24px;\n    resize: both;\n    background-color: field;\n    color: fieldtext;\n    border: solid 1px var(--input-border-color, fieldtext);\n    padding: 3px 15px 3px 5px;\n    font-size: 12px;\n    font-family: sans-serif;\n    display: block;\n    border-radius: 2px;\n    overflow: auto;\n    overflow-wrap: normal;\n\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        /* user-agent input defaults */\n        --input-border-color: rgb(133, 133, 133);\n    }\n}\n\n#description\n,::slotted([slot="description"])\n{\n    margin: 1em .5em 1em 0;\n    flex: 1;\n}\n\n#remove-button\n{\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    margin:1em .5em 1em 0;\n}\n#remove-icon\n{\n    width: var(--icon-width, var(--icon-size, 12px));\n    height: var(--icon-height, var(--icon-size, 12px));\n}\n\n\n:host(.stacked)\n{\n    display: grid;\n    grid-template-columns: auto auto 1fr auto;\n    grid-template-rows: auto 1fr;\n}\n\n:host(.stacked) #color-container\n,:host(.stacked) #color\n{\n    grid-row: 2;\n    grid-column: 2;\n    width: 14px;\n    height: 14px;\n    margin-block-end: 7px;\n    margin-block-start: 0;\n    border-radius: 3px;\n    align-self: center;\n    justify-self: center;\n}\n\n:host(.stacked) #handle\n{\n    grid-row: span 2;\n    grid-column: 1;\n}\n\n:host(.stacked) #is-finished\n{\n    grid-row: 1;\n    grid-column: 2;\n    margin-block-start: 7px;\n    margin-block-end: 0;\n}\n\n:host(.stacked) #description\n,:host(.stacked) #remove-button\n{\n    grid-row: span 2;\n    margin-top: 7px;\n    margin-bottom: 7px;\n}';
var task_card_default2 = '<slot name="handle">\n    <span id="handle"></span>\n</slot>\n<label id="color-container">\n    <input type="color" id="color" class="input" value="#919191" />\n</label>\n<input type="checkbox" id="is-finished" class="input checkbox" title="Finished?" />\n<label id="finished-indicator" for="is-finished" tabindex="0">\n    <slot id="custom-check" name="custom-check"></slot>\n</label>\n<slot name="description"><div id="description" contenteditable="true"></div></slot>\n<button type="button" id="remove-button" class="button" title="Delete">\n    <slot name="remove-button-label">\n        <svg id="remove-icon" class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n            <path\n            style="display:inline;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\n            d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />\n        </svg>\n    </slot>\n</button>';
var COMPONENT_STYLESHEET19 = new CSSStyleSheet();
COMPONENT_STYLESHEET19.replaceSync(task_card_default);
var COMPONENT_TAG_NAME20 = "task-card";
var TaskCardElement = class extends HTMLElement {
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
  get value() {
    return this.findElement("description").textContent;
  }
  #previousValue = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = task_card_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET19);
    this.findElement("custom-check").addEventListener("slotchange", (event) => {
      const customCheck = event.target.assignedNodes()[0];
      this.classList.toggle("custom-checkbox", customCheck != null);
    });
    this.findElement("color").addEventListener("change", (event) => {
      this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, composed: true, detail: this.#getCardData("color") }));
    });
    this.findElement("is-finished").addEventListener("change", (event) => {
      const isAllowed = this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, composed: true, detail: this.#getCardData("is-finished") }));
      if (isAllowed == false) {
        return;
      }
      const finished = event.target.checked;
      this.classList.toggle("finished", finished);
      this.part.toggle("finished", finished);
      const indicator = this.findElement("finished-indicator");
      indicator.classList.toggle("finished", finished);
      indicator.part.toggle("finished", finished);
    });
    this.findElement("description").addEventListener("blur", (event) => {
      if (this.value != this.#previousValue) {
        this.dispatchEvent(new CustomEvent("change", { bubbles: true, cancelable: true, composed: true, detail: this.#getCardData("description") }));
      }
      this.#previousValue = this.value;
    });
    this.findElement("remove-button").addEventListener("click", (event) => {
      this.dispatchEvent(new CustomEvent("remove", { bubbles: true, cancelable: true, composed: true }));
    });
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
  #getCardData(currentUpdate) {
    return {
      currentUpdate,
      color: this.findElement("color").value,
      isFinished: this.findElement("is-finished").checked,
      description: this.findElement("description").textContent
    };
  }
  static create(props) {
    const element = document.createElement(COMPONENT_TAG_NAME20);
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
      this.findElement("description").textContent = newValue;
    } else if (attributeName == "is-finished") {
      const finished = newValue == "true";
      this.findElement("is-finished").checked = finished;
      this.classList.toggle("finished", finished);
      this.part.toggle("finished", finished);
      const indicator = this.findElement("finished-indicator");
      indicator.classList.toggle("finished", finished);
      indicator.part.toggle("finished", finished);
    } else if (attributeName == "color") {
      this.findElement("color").value = newValue;
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME20) == null) {
  customElements.define(COMPONENT_TAG_NAME20, TaskCardElement);
}

// node_modules/.pnpm/@magnit-ce+collection-browser@0.0.5/node_modules/@magnit-ce/collection-browser/dist/collection-browser.js
var collection_browser_default = ":host\n{\n    --border-color: rgb(205 205 205);\n\n    display: grid;\n    border: solid 1px var(--border-color);\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n        --border-color: rgb(81 81 81);\n    }\n}\n\n#navigation\n{\n    border-right: solid 1px var(--border-color);\n}\n#categories > ::slotted(*)\n{\n    padding: var(--category-padding, 5px 15px);\n}\n\n#gallery\n{\n    margin: 0;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    /* gap: 1em; */\n    user-select: none;\n    overflow: auto;\n}\n\n#gallery-header\n{\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n\n    border-bottom: solid 1px var(--border-color);\n}\n\n#items\n{\n    padding: 0;\n    margin: 0;\n    list-style: none;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fill, var(--item-width, minmax(0, 100px)));\n    /* grid-column-gap: var(--column-gap, 1em);\n    grid-row-gap: var(--row-gap, 1em); */\n}\n\n\n::slotted(:not([slot]))\n{\n    border: solid 1px transparent;\n    margin: 3px 7px;\n}\n\n::slotted(:not([slot]):focus)\n{\n    border-color: rgb(205 205 205);\n}\n::slotted(:not([slot]):hover)\n{\n    background-color: var(--background-color-hover, rgb(221, 221, 221));\n}\n::slotted(:not([slot]).selected)\n{\n    background-color: var(--background-color-selected, highlight);\n    color: var(--color-selected, highlighttext);\n}\n@media (prefers-color-scheme: dark) \n{\n    ::slotted(:not([slot]):hover)\n    {\n        --background-color-hover: rgb(197, 197, 197);\n    }\n}\n\n#add-button\n{\n    display: inline-flex;\n    gap: 7px;\n    align-items: center;\n    justify-content: center;\n    padding: 3px 7px;\n    margin: 3px 7px;\n    max-height: 80px;\n    max-width: 100px;\n}\n\n\n@media (max-width: 800px) \n{\n    \n}\n@media (min-width: 800px) \n{\n    :host\n    {\n        display: grid;\n        grid-template-columns: auto 1fr;\n    }\n}";
var collection_browser_default2 = '<nav id="navigation">\n    <slot name="navigation-header">\n        <header id="navigation-header" class="header">\n            <slot name="navigation-header-content"></slot>\n        </header>\n    </slot>\n    <selectable-items id="categories"><slot name="category"></slot></selectable-items>\n</nav>\n<div id="gallery">\n    <slot name="header">\n        <header id="gallery-header" class="header">\n            <slot name="header-content"></slot>\n        </header>\n    </slot>\n    <div id="items">\n        <slot></slot>\n        <slot name="add-button">\n            <button id="add-button" class="button">\n                <slot name="add-button-content">\n                    <span id="add-button-icon" class="icon">+</span>\n                    <span id="add-button-label">Add Item</span>\n                </slot>\n            </button>\n        </slot>\n    </div>\n</div>';
var selectable_items_default = ":host { user-select: none; }\n::slotted(*)\n{\n    user-select: none;\n    cursor: pointer;\n}\n::slotted(:hover)\n{\n    background-color: var(--background-color-hover, rgb(221, 221, 221));\n}\n::slotted([aria-selected])\n{\n    background-color: var(--background-color-selected, highlight);\n    color: var(--color-selected, highlighttext);\n}\n@media (prefers-color-scheme: dark) \n{\n    ::slotted(:hover)\n    {\n        --background-color-hover: rgb(197, 197, 197);\n    }\n}";
var COMPONENT_STYLESHEET20 = new CSSStyleSheet();
COMPONENT_STYLESHEET20.replaceSync(selectable_items_default);
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
function getSelectableItem(event, reference) {
  const pathItems = event.composedPath();
  let selectableItem = void 0;
  for (let i = 0; i < pathItems.length; i++) {
    let pathItem = pathItems[i];
    if (pathItem == reference) {
      break;
    }
    if (pathItem instanceof HTMLElement && pathItem instanceof HTMLSlotElement == false) {
      selectableItem = pathItem;
    }
  }
  return selectableItem;
}
var COMPONENT_TAG_NAME21 = "selectable-items";
var SelectableItemsElement = class _SelectableItemsElement extends HTMLElement {
  static observedAttributes = [];
  // internal
  static _multipleModifierActive = false;
  // externally available to define when multiples are selected
  static multipleModifierKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight"];
  static multipleModifierActive = false;
  static selectKeys = ["Enter", "Space"];
  static selectedClassName = "selected";
  selected = () => {
    let slot = this.querySelector("slot");
    let target = this;
    while (slot != null) {
      target = slot;
      slot = slot.querySelector("slot");
    }
    const targetChildren = target instanceof HTMLSlotElement ? target.assignedElements() : [...target.children];
    return targetChildren.filter((item) => item instanceof HTMLElement && item.hasAttribute("aria-selected"));
  };
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET20);
    this.addEventListener("keydown", (event) => {
      if (_SelectableItemsElement.selectKeys.indexOf(event.code) > -1) {
        const selectedChild = getSelectableItem(event, this);
        if (selectedChild == void 0) {
          return;
        }
        const defaultAllowed = this.#dispatchChange(selectedChild);
        if (defaultAllowed == false) {
          return;
        }
        event.preventDefault();
        this.selectItem(selectedChild);
      }
    });
    this.addEventListener("click", (event) => {
      const selectedChild = getSelectableItem(event, this);
      if (selectedChild == null) {
        return;
      }
      const defaultAllowed = this.#dispatchChange(selectedChild);
      if (defaultAllowed == false) {
        return;
      }
      this.selectItem(selectedChild);
    });
    this.shadowRoot.querySelector("slot").addEventListener("slotchange", (event) => {
      const children = event.target.assignedElements();
      for (let i = 0; i < children.length; i++) {
        if (children[i].hasAttribute("tabIndex") == false) {
          children[i].setAttribute("tabIndex", "0");
        }
      }
    });
  }
  selectItem(item) {
    const allowMultipleAttribute = this.getAttribute("multiple") ?? this.getAttribute("multi");
    if (_SelectableItemsElement._multipleModifierActive == false || allowMultipleAttribute == null) {
      const currentlySelected = [...(item.parentElement ?? this).children].reduce((selected, currentItem, _index) => {
        if (currentItem.hasAttribute("aria-selected")) {
          selected.push(currentItem);
        }
        return selected;
      }, new Array());
      currentlySelected.forEach((currentItem) => this.#deselectItem(currentItem));
    }
    this.#selectItem(item);
    return this.selected();
  }
  #selectItem(item) {
    item.classList.add(this.getAttribute("selected-class-name") ?? _SelectableItemsElement.selectedClassName);
    item.setAttribute("aria-selected", "option");
  }
  #deselectItem(item) {
    item.classList.remove(this.getAttribute("selected-class-name") ?? _SelectableItemsElement.selectedClassName);
    item.removeAttribute("aria-selected");
  }
  #dispatchChange(selectedItem) {
    const selected = /* @__PURE__ */ new Set([selectedItem]);
    const allowMultipleAttribute = this.hasAttribute("multiple") || this.hasAttribute("multi");
    if (_SelectableItemsElement._multipleModifierActive == true && allowMultipleAttribute == true) {
      for (const element of this.selected()) {
        selected.add(element);
      }
    }
    const defaultAllowed = this.dispatchEvent(new CustomEvent("change", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { selected: Array.from(selected) }
    }));
    return defaultAllowed;
  }
};
if (customElements.get(COMPONENT_TAG_NAME21) == null) {
  customElements.define(COMPONENT_TAG_NAME21, SelectableItemsElement);
}
var COMPONENT_STYLESHEET22 = new CSSStyleSheet();
COMPONENT_STYLESHEET22.replaceSync(collection_browser_default);
var COMPONENT_TAG_NAME23 = "collection-browser";
var CollectionBrowserElement = class _CollectionBrowserElement extends HTMLElement {
  static selectedClassName = "selected";
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
  // get selected()
  // {
  //     return this.#getSelected();
  // }
  get allowMultiSelect() {
    return this.hasAttribute("multi") || this.hasAttribute("multiple");
  }
  // handledItems: WeakSet<Element> = new WeakSet();
  #defaultSlot;
  #boundSlotChange;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = collection_browser_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET22);
    this.#applyPartAttributes();
    this.#boundSlotChange = ((_event) => {
      const children = this.#defaultSlot.assignedElements();
      if (children.length == 1 && children[0] instanceof HTMLSlotElement) {
        let descendantSlot = children[0];
        let descendantSlotChildren = descendantSlot.assignedElements();
        while (descendantSlot instanceof HTMLSlotElement && descendantSlotChildren[0] instanceof HTMLSlotElement) {
          descendantSlot = descendantSlotChildren[0];
          if (descendantSlot instanceof HTMLSlotElement) {
            descendantSlotChildren = descendantSlot.assignedElements();
          }
        }
        this.#registerSlot("default", descendantSlot);
        return;
      }
    }).bind(this);
    this.#defaultSlot = this.shadowRoot.querySelector("slot:not([name])");
    this.#defaultSlot.addEventListener("slotchange", this.#boundSlotChange);
    this.shadowRoot.querySelector("selectable-items").addEventListener("change", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const { selected } = event.detail;
      const selectedCategoryItem = selected[0];
      const changeEvent = new CustomEvent("category", { cancelable: true, detail: { selected: selectedCategoryItem } });
      const allowDefault = this.dispatchEvent(changeEvent);
      if (allowDefault == false || selectedCategoryItem == null) {
        return;
      }
      event.target.selectItem(selectedCategoryItem);
      const category = selectedCategoryItem.dataset.category;
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
    this.findElement("gallery").addEventListener("click", (event) => {
      event.stopPropagation();
      const children = this.#defaultSlot.assignedElements();
      const target = event.composedPath().find((item) => item instanceof Element && children.indexOf(item) != -1);
      if (target == null || !(target instanceof HTMLElement)) {
        return;
      }
      const currentlySelected = this.getSelected();
      const shift = event.getModifierState("Shift");
      const ctrl = event.getModifierState("Control");
      const alt = event.getModifierState("Alt");
      const changeEvent = new CustomEvent("change", { cancelable: true, detail: { newSelection: target, previousSelection: currentlySelected, shift, ctrl, alt } });
      const value = this.dispatchEvent(changeEvent);
      if (value == false) {
        return;
      }
      if (this.allowMultiSelect == false) {
        for (let i = 0; i < currentlySelected.length; i++) {
          const selectedItem = currentlySelected[i];
          this.#deselectItem(selectedItem);
        }
      }
      this.#toggleSelection(target);
    });
  }
  #registerSlot(slotIdentifier, slot) {
    if (slotIdentifier == "default") {
      if (this.#defaultSlot != null) {
        this.#defaultSlot.removeEventListener("slotchange", this.#boundSlotChange);
      }
      this.#defaultSlot = slot;
      this.#defaultSlot.addEventListener("slotchange", this.#boundSlotChange);
      const children = this.#defaultSlot.assignedElements();
      this.toggleAttribute("empty", children.length == 0);
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
  getSelected() {
    const selected = this.#defaultSlot.assignedElements().reduce((selected2, item, _index) => {
      if (item.hasAttribute("aria-selected")) {
        selected2.push(item);
      }
      return selected2;
    }, new Array());
    return selected;
  }
  selectItems(...items) {
    const children = this.#defaultSlot.assignedElements();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (children.indexOf(item) == -1) {
        continue;
      }
      this.#selectItem(item);
    }
  }
  #selectItem(item) {
    item.setAttribute("aria-selected", "option");
    item.classList.add(_CollectionBrowserElement.selectedClassName);
  }
  deselectItems(...items) {
    const children = this.#defaultSlot.assignedElements();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (children.indexOf(item) == -1) {
        continue;
      }
      this.#deselectItem(item);
    }
  }
  #deselectItem(item) {
    item.removeAttribute("aria-selected");
    item.classList.remove(_CollectionBrowserElement.selectedClassName);
  }
  #toggleSelection(item) {
    if (item.hasAttribute("aria-selected")) {
      this.#deselectItem(item);
    } else {
      this.#selectItem(item);
    }
  }
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
    this.dispatchEvent(new CustomEvent("change", { detail: { newSelection: null, previousSelection: this.getSelected(), shift: false, ctrl: false, alt: false } }));
  }
};
if (customElements.get(COMPONENT_TAG_NAME23) == null) {
  customElements.define(COMPONENT_TAG_NAME23, CollectionBrowserElement);
}

// node_modules/.pnpm/@magnit-ce+collection-filter@0.0.9/node_modules/@magnit-ce/collection-filter/dist/collection-filter.js
var collection_filter_default = "svg\n{\n    width: 12px;\n    height: 12px;\n}\n\nbutton\n{\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: var(--button-padding, 2px 5px);\n}\n\nsearch, form, #query\n{\n    display: flex;\n    min-width:0;\n    flex: 1;\n}\n\n#input\n{\n    flex: 1;\n    min-width: 0;\n}\n\n\n.button\n{\n    border: solid 1px transparent;\n}\n:host([regex]) #regex-button\n{\n    border-color: highlight;\n}\n\n#filter-button\n{\n    display: none;\n    /* functionality has not been implemented */\n}\n";
var collection_filter_default2 = '<search id="search">\n    <form id="form">\n        <span id="query">\n            <!-- <button type="button" part="filter-button" title="Filters" popovertarget="filter-list-container">\n                <slot name="filter-icon">\n                    <svg part="filter-icon"  class="icon filter" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                    <path\n                        style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"\n                        d="m 1.8697249,0.49986407 c -0.3237,0 -0.4665,0.34257 -0.25647,0.57509003 l 6.71347,7.43236 0.41559,13.3278599 c 0.008,0.25922 -0.0185,0.53883 0.14083,0.46848 l 4.6352201,-2.04568 c 0.15939,-0.0703 0.29609,-0.20929 0.30565,-0.46847 l 0.41593,-11.2821899 7.02268,-7.42331 c 0.16433,-0.27887003 -0.26045,-0.58414003 -0.58412,-0.58414003 z" />\n                    </svg>\n                </slot>\n            </button> -->\n            <input type="search" id="input" />\n            <button type="button" id="regex-button" class="button field-button" title="Regex?">\n                <slot name="regex-icon">\n                    <svg id="regex-icon" class="icon regex" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                        <path\n                            style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:0.799997;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"\n                            d="m 13.39781,0.28938961 c -0.224939,0.0457322 -0.420792,0.21339591 -0.508262,0.34752541 -0.08747,0.1341295 -0.111102,0.2373859 -0.126685,0.3185644 -0.03118,0.16236468 -0.02196,0.26434118 -0.01375,0.37344288 0.01649,0.2182033 0.059,0.4438907 0.116002,0.7087705 0.114041,0.5297673 0.291114,1.1921891 0.468579,1.8565308 0.06283,0.2351616 0.103522,0.4158349 0.163312,0.6432315 0.01938,0.1321316 0.03993,0.2540164 0.05955,0.3810597 C 13.443987,4.8517115 13.336761,4.7859384 13.219236,4.7173167 13.03212,4.5780833 12.881108,4.4734066 12.688084,4.3286323 12.137552,3.9157161 11.588154,3.5045247 11.138869,3.2006945 10.914235,3.0487795 10.721766,2.9241398 10.525296,2.8272516 10.427057,2.778788 10.335156,2.7326266 10.172719,2.7007389 10.091501,2.6848185 9.988104,2.6684299 9.8308249,2.6991781 9.6735379,2.7300044 9.4446367,2.8494153 9.3179834,3.0406085 9.1913224,3.2318018 9.1703867,3.4875975 9.2035055,3.6442107 c 0.033135,0.1566131 0.089385,0.2455801 0.1358434,0.3139911 0.092925,0.1368219 0.1718224,0.2030321 0.2548929,0.2743618 0.1661411,0.142675 0.3551794,0.2721376 0.5830492,0.4191673 0.455755,0.2940671 1.05101,0.6386894 1.646899,0.98314 0.211724,0.1223843 0.369894,0.2209114 0.57389,0.3399087 0.106397,0.079048 0.205347,0.1517355 0.308314,0.2271078 -0.124066,0.031529 -0.243772,0.060872 -0.372418,0.0945 -0.233215,0.034026 -0.41626,0.066335 -0.657844,0.1006029 C 10.994485,6.4937694 10.313275,6.5902752 9.7804511,6.6926965 9.5140393,6.7438915 9.2904522,6.7931824 9.0829243,6.8634117 8.9791682,6.8985303 8.8815232,6.9297468 8.7440856,7.0219291 8.6753941,7.0679734 8.589268,7.1298991 8.4998754,7.2627643 8.4104827,7.3956217 8.3334764,7.6417326 8.3792941,7.8663587 8.4250884,8.0909926 8.59298,8.2865795 8.7272995,8.3739311 c 0.1343117,0.087359 0.2361767,0.1094294 0.3174733,0.1249908 0.1625776,0.031139 0.2646926,0.02349 0.3739425,0.015218 0.2184997,-0.016467 0.4444938,-0.058921 0.7097337,-0.1158444 0.530487,-0.1138855 1.195333,-0.2907192 1.860577,-0.467943 0.238325,-0.063526 0.421479,-0.1057849 0.65174,-0.166142 0.12949,-0.018964 0.249376,-0.037226 0.373943,-0.056424 -0.06541,0.1098664 -0.129764,0.2146134 -0.196892,0.3292325 -0.1409,0.188891 -0.247133,0.3415397 -0.393792,0.5365335 -0.413478,0.5497849 -0.826752,1.0984382 -1.130994,1.5471135 -0.152122,0.224329 -0.275407,0.418067 -0.372419,0.614262 -0.04853,0.09811 -0.09476,0.18989 -0.126685,0.352107 -0.01594,0.08111 -0.03392,0.184357 -0.0031,0.34143 0.03087,0.157074 0.150442,0.385657 0.341895,0.512146 0.191453,0.126481 0.44912,0.147396 0.605946,0.114315 0.156826,-0.03309 0.245921,-0.09079 0.314425,-0.137181 0.137,-0.0928 0.2033,-0.170068 0.274735,-0.253026 0.142865,-0.165915 0.272503,-0.356219 0.419741,-0.583787 0.294466,-0.455129 0.638025,-1.048055 0.982944,-1.6431273 0.12255,-0.2114372 0.221211,-0.3693927 0.34037,-0.5731193 0.07941,-0.1065887 0.151715,-0.2062708 0.227417,-0.3094179 0.03141,0.1233832 0.05955,0.2424585 0.0931,0.3703915 0.03423,0.2339442 0.06775,0.4175597 0.102263,0.6599947 0.09691,0.6807303 0.193547,1.3594863 0.296108,1.8915873 0.05127,0.26605 0.100622,0.490856 0.170947,0.698102 0.03517,0.103623 0.06799,0.201128 0.160265,0.338379 0.04611,0.0686 0.106585,0.153086 0.23963,0.242357 0.133038,0.08927 0.379483,0.167695 0.604415,0.12194 0.224939,-0.04573 0.420791,-0.213396 0.508269,-0.347526 0.08747,-0.134137 0.111095,-0.237386 0.126677,-0.318572 0.03118,-0.162357 0.02196,-0.264333 0.01375,-0.373435 -0.01649,-0.218203 -0.059,-0.443891 -0.115994,-0.708778 -0.114048,-0.52976 -0.291122,-1.1921823 -0.468579,-1.8565236 -0.06283,-0.2351616 -0.103529,-0.4158349 -0.16332,-0.6432315 -0.01938,-0.1321316 -0.03993,-0.2540242 -0.05955,-0.3810597 0.112571,0.066803 0.219789,0.1325764 0.337315,0.2011981 0.187124,0.1392334 0.338135,0.2439023 0.531159,0.3886844 0.550524,0.4129162 1.099923,0.824108 1.549207,1.127938 0.224642,0.1519153 0.417111,0.2765553 0.613581,0.3734433 0.09823,0.04846 0.19014,0.09462 0.352577,0.126505 0.08122,0.01592 0.184607,0.03231 0.341894,0.0016 0.157287,-0.03083 0.386189,-0.150237 0.512842,-0.34143 0.126653,-0.1911933 0.147597,-0.4469893 0.11447,-0.6036023 C 20.126173,9.3665769 20.06993,9.2776018 20.023464,9.2091986 19.930547,9.0723767 19.851641,9.0061665 19.768571,8.934829 19.60243,8.7921619 19.413391,8.6626992 19.185522,8.5156618 18.729775,8.2215946 18.134511,7.8769801 17.538631,7.5325295 17.326906,7.4101452 17.168736,7.3116181 16.964733,7.1926209 c -0.10639,-0.079048 -0.20534,-0.1517434 -0.308315,-0.2271078 0.124075,-0.031529 0.243773,-0.060872 0.372419,-0.094508 0.233215,-0.034026 0.416259,-0.066257 0.657844,-0.1005951 0.681655,-0.096779 1.362857,-0.1932848 1.89568,-0.2957061 0.266412,-0.051195 0.489999,-0.1004859 0.697527,-0.1707152 0.103764,-0.035119 0.201409,-0.066335 0.338839,-0.1585174 0.06869,-0.046122 0.154817,-0.10797 0.24421,-0.2408352 0.08939,-0.1328574 0.166399,-0.3789683 0.120581,-0.6036022 -0.04579,-0.224626 -0.213686,-0.420213 -0.347997,-0.5075724 -0.134312,-0.087352 -0.236185,-0.1094216 -0.317473,-0.124983 -0.162586,-0.031138 -0.264701,-0.02349 -0.373951,-0.015218 -0.2185,0.016467 -0.444494,0.058921 -0.709733,0.1158366 -0.530487,0.1138933 -1.195333,0.290727 -1.860577,0.467943 -0.238318,0.063526 -0.42148,0.1057927 -0.651741,0.166142 -0.12949,0.018964 -0.249375,0.037226 -0.373942,0.056424 0.06541,-0.1098664 0.129764,-0.2146134 0.196892,-0.3292403 0.140907,-0.188891 0.247141,-0.3415319 0.393792,-0.5365335 0.413477,-0.5497771 0.826751,-1.0984305 1.130994,-1.5471051 0.152121,-0.2243374 0.275407,-0.4180669 0.372426,-0.6142704 0.04853,-0.098098 0.09475,-0.1898821 0.126685,-0.3520987 0.01594,-0.081108 0.03392,-0.1843568 0.0031,-0.3414304 C 18.541151,1.5818539 18.421585,1.3532633 18.230125,1.2267819 18.038672,1.1003005 17.781004,1.080915 17.624178,1.1139889 17.467353,1.1470784 17.378265,1.2032447 17.309761,1.249648 17.172753,1.3424468 17.106453,1.4197155 17.035026,1.5026733 16.892157,1.668589 16.762519,1.8588925 16.615289,2.086453 16.320815,2.5415816 15.977256,3.1345156 15.632338,3.7295878 15.509787,3.9410249 15.411126,4.0989804 15.291975,4.302707 15.212554,4.4092957 15.140252,4.5089778 15.064551,4.6121249 15.033136,4.4887417 15.005003,4.3696664 14.971446,4.2417334 14.937218,4.0077814 14.903692,3.8241738 14.869183,3.5817387 14.772272,2.9010084 14.675635,2.2222525 14.573074,1.6901518 14.52181,1.4241014 14.472452,1.1992958 14.402127,0.99204952 14.366961,0.88842632 14.334139,0.79091382 14.241871,0.65367052 14.195686,0.58507222 14.135278,0.50058482 14.00224,0.41131342 13.869194,0.32204206 13.622757,0.24361842 13.397818,0.289374 Z" />\n                        <path\n                            style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"\n                            d="m 2.3960485,12.796482 h 8.6904305 c 0.26835,0 0.48438,0.21604 0.48438,0.48438 v 8.67733 c 0,0.26835 -0.21603,0.48439 -0.48438,0.48439 H 2.3960485 c -0.26835,0 -0.48439,-0.21604 -0.48439,-0.48439 v -8.67733 c 0,-0.26834 0.21604,-0.48438 0.48439,-0.48438 z" />\n                    </svg>\n                </slot>\n            </button>\n            <button type="submit" id="search-button" class="button field-button" title="Search">\n                <slot name="search-icon">\n                    <svg id="search-icon" class="icon magnifying-glass" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                    <path\n                        style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke-width:1.00001;stroke-linecap:round;-inkscape-stroke:none"\n                        d="m 13.933452,0.33101262 c 4.665112,0 8.484511,3.81819728 8.484511,8.48276858 0,4.6645798 -3.819397,8.4827768 -8.484511,8.4827768 -1.192569,0 -2.291872,-0.315962 -3.312255,-0.763428 -0.01293,0.01395 -0.01062,0.02239 -0.02429,0.03642 l -0.0035,0.0036 -0.0052,0.0053 -5.0265086,5.023041 c -1.1757993,1.176212 -3.1098412,1.176212 -4.2856361,0 -1.17525285,-1.176408 -1.17551045,-3.11046 0.00178,-4.285633 L 6.2973927,12.297813 C 5.7998422,11.231935 5.4489409,10.075498 5.4489418,8.8137812 5.4489453,4.1492099 9.2683445,0.33101262 13.933452,0.33101262 Z m 0,1.77671558 c -3.698211,0 -6.7077912,3.00885 -6.7077947,6.706053 -9e-7,1.2159838 0.3489754,2.3493058 0.9334695,3.3504318 L 8.6154513,12.945 7.8259926,13.387438 c -0.1727127,0.09663 -0.260868,0.155498 -0.2758768,0.17004 l -0.039905,0.0382 -4.9761929,4.976189 c -0.4938381,0.492967 -0.495224,1.279271 -0.00178,1.773242 0.4934623,0.493643 1.2797717,0.493652 1.7732439,0 l 5.021306,-5.017827 c 0.016968,-0.01741 0.077527,-0.11092 0.1787127,-0.300167 l 0.4250934,-0.794671 0.7877241,0.435508 c 0.968614,0.534854 2.054792,0.851917 3.215091,0.851917 3.698219,0 6.707794,-3.00885 6.707794,-6.7060612 0,-3.6972029 -3.00958,-6.706053 -6.707794,-6.706053 z" />\n                    <path\n                        style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:none;stroke-width:0.500001;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\n                        d="m 13.933412,1.441451 c 4.060915,0 7.374068,3.3121531 7.374068,7.3722324 0,4.0600786 -3.31315,7.3722326 -7.374068,7.3722326 -1.357274,0 -2.63002,-0.371201 -3.724448,-1.015473 a 1.9197456,1.9197456 0 0 1 -0.4067369,0.623423 l -5.0263745,5.023156 a 1.9197456,1.9197456 0 0 1 -2.7154086,0 1.9197456,1.9197456 0 0 1 0.00187,-2.715407 L 7.0868452,13.078458 A 1.9197456,1.9197456 0 0 1 7.6684894,12.691916 C 6.966462,11.563897 6.5593712,10.235038 6.5593721,8.8136834 6.5593756,4.7536041 9.8725264,1.441451 13.933439,1.441451 Z m 0,1.9207539 c -3.023755,0 -5.4533082,2.4292498 -5.4533109,5.4514785 -1.8e-6,3.0222286 2.4295529,5.4514696 5.4533109,5.4514696 3.02376,0 5.45515,-2.429241 5.455149,-5.4514696 -2e-6,-3.0222287 -2.431391,-5.4514785 -5.455149,-5.4514785 z" />\n                    <path\n                        style="color:#000000;display:inline;fill:var(--icon-secondary-color,InfoBackground);fill-opacity:1;stroke-width:0.866683;-inkscape-stroke:none"\n                        d="M 8.3751718,8.8139322 A 5.5588643,5.557011 0 0 0 13.934035,14.370947 5.5588643,5.557011 0 0 0 19.4929,8.8139322 5.5588643,5.557011 0 0 0 13.934035,3.2569256 5.5588643,5.557011 0 0 0 8.3751718,8.8139322 Z" />\n                    </svg>\n                </slot>\n            </button>\n        </span>\n        <!-- <div part="filter-list-container" id="filter-list-container" popover>\n            <header>\n                <span part="filter-list-title">Filters</span>\n                <button type="button" part="close-filter-list-button" popovertarget="filter-list-container">\n                    <slot name="close-icon">\n                        <svg part="close-icon"  class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                            <path\n                                style="color:#000000;display:inline;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\n                                d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />\n                        </svg>\n                    </slot>\n                </button>\n            </header>\n            <ul class="filters" part="filter-list"></ul>\n            <button type="button" part="new-filter">\n                <svg part="new-filter-icon" class="icon plus" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\n                    <path\n                        style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-opacity:1;-inkscape-stroke:none"\n                        d="M 11.406117,0.76837147 A 1.6733008,1.6733014 0 0 0 9.7322668,2.4422315 v 7.29197 h -7.29198 a 1.6733008,1.6733014 0 0 0 -1.67190999,1.6738595 1.6733008,1.6733014 0 0 0 1.67190999,1.67239 h 7.29198 v 7.29343 a 1.6733008,1.6733014 0 0 0 1.6738502,1.67241 1.6733008,1.6733014 0 0 0 1.67433,-1.67241 v -7.29343 h 7.29149 a 1.6733008,1.6733014 0 0 0 1.6724,-1.67239 1.6733008,1.6733014 0 0 0 -1.6724,-1.6738595 h -7.29149 v -7.29197 a 1.6733008,1.6733014 0 0 0 -1.67433,-1.67386003 z" />\n                </svg>\n                <span part="new-filter-label">New Filter...</span>\n            </button>\n        </div> -->\n    </form>\n</search>';
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
var COMPONENT_STYLESHEET21 = new CSSStyleSheet();
COMPONENT_STYLESHEET21.replaceSync(collection_filter_default);
var COMPONENT_TAG_NAME24 = "collection-filter";
var CollectionFilterElement = class extends HTMLElement {
  // #boundEventHandlers: Map<string, (event?:Event) => void> = new Map([
  // ]);
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
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET21);
    this.findElement("form").addEventListener("submit", (event) => {
      const mode = this.hasAttribute("regex") ? "regex" : null;
      const queryComparison = mode == "regex" ? this.regexQueryComparison : this.textQueryComparison;
      this.itemFilters.setQuery(this.findElement("input").value, queryComparison, mode);
      this.dispatchEvent(new CustomEvent("change", { detail: { filters: this.itemFilters.filters } }));
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    this.findElement("regex-button").addEventListener("click", () => {
      if (this.hasAttribute("regex")) {
        this.removeAttribute("regex");
        this.part.remove("regex");
        this.findElement("regex-button").part.remove("regex", "active");
      } else {
        this.toggleAttribute("regex", true);
        this.part.add("regex");
        this.findElement("regex-button").part.add("regex", "active");
      }
    });
    this.findElement("input").addEventListener("input", (event) => {
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
      this.findElement("input").placeholder = newValue;
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
  connectedCallback() {
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
};
if (customElements.get(COMPONENT_TAG_NAME24) == null) {
  customElements.define(COMPONENT_TAG_NAME24, CollectionFilterElement);
}

// node_modules/.pnpm/@magnit-ce+fileimage-input@0.0.4/node_modules/@magnit-ce/fileimage-input/dist/fileimage-input.js
var fileimage_input_default = '\n:host \n{ \n    display: inline-grid;\n    grid-template-columns: 1fr auto;\n    gap: .25em;\n    min-height: 34px;\n\n    /* user-agent input defaults */\n    --border-color: rgb(118, 118, 118);\n\n    /* slotted elements can inherit this for easy color matching */\n    --placeholder-color: #757575;\n}\n@media (prefers-color-scheme: dark) \n{\n    :host\n    {\n      --border-color: rgb(133, 133, 133);\n    }\n}\n\n/* block styles */\n:host(.block)\n{\n    grid-template-columns: 1fr 1fr;\n}\n:host(.block) .label\n{\n    grid-column: span 2;\n    grid-row: 1;\n}\n:host(.block) .field\n{\n    border: dashed 1px #666;\n    display: grid;\n    gap: .5em;\n    justify-items: center;\n}\n:host(.block) .preview\n{\n    height: 70px;\n}\n:host(.block) .placeholder-icon\n{\n    font-size: 3em;\n}\n:host(.block) .clear\n{\n    grid-column: 1;\n    grid-row: 2;\n}\n:host(.block) .view-link\n{\n    grid-column: 2;\n    grid-row: 2;\n    justify-self: flex-end;\n}\n/* end block styles */\n\ninput\n{\n    display: none;\n}\n\n.label\n{\n    flex: 1;\n    display: flex;\n    grid-row: span 2;\n    grid-column: 1;\n    overflow: hidden;\n}\n\n.field\n{\n    flex: 1;\n    white-space: nowrap;\n\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n    gap: .25em;\n    padding: .25em .5em;\n\n    background-color: field;\n    color: fieldtext;\n\n    font-size: 13.33px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: var(--border-color);\n    border-radius: 2px;\n    overflow: hidden;\n    min-width: 0;\n\n}\n.field:focus-visible\n,.field:focus\n{\n    outline: solid 2px;\n    border-radius: 3px;\n}\n\n.status\n{\n    overflow: hidden;\n}\n\n.preview[src=""]\n,.preview:not([src])\n{\n    display: none;\n}\n.preview\n{\n    height: 1em;\n}\n\n.view-link[href="#"]\n{\n    display: none;\n}\n.view-link\n{\n    white-space: nowrap;\n    font-size: .75em;\n    grid-column: 2;\n    grid-row: 2;\n    align-self: center;\n}\n\n.thumbnail\n{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.placeholder-label\n,.placeholder-icon\n,::slotted([slot="placeholder"])\n,::slotted([slot="placeholder-icon"])\n{\n    color: var(--placeholder-color);\n}\n:host([specified]) .placeholder-label\n,:host([specified].image) .placeholder-icon\n,:host([specified]) ::slotted([slot="placeholder"])\n,:host([specified].image) ::slotted([slot="placeholder-icon"])\n{\n    display: none;\n}\n\n.clear\n{\n    display: none;\n    white-space: nowrap;\n    font-size: .75em;\n    grid-column: 2;\n    grid-row: 1;\n    align-self: center;\n}\n:host([specified]) .clear\n{\n    display: block;\n}';
var fileimage_input_default2 = '<label class="label" part="label" tabindex="0">\n    <input type="file" class="input" part="input text" />\n    <span class="field text" part="field text">\n        <span class="thumbnail" part="thumbnail">\n            <slot name="placeholder-icon"><span class="placeholder-icon" part="placeholder-icon">\u{1F5CE}</span></slot>\n            <img alt="image preview" title="Image Preview" class="preview" part="preview" />\n        </span>\n        <span class="status" part="status">\n            <span class="filename" part="filename"></span>\n            <slot name="placeholder"><span class="placeholder-label" part="placeholder-label"></span></slot>\n        </span>\n    </span>\n</label>\n<a href="" class="clear" part="clear" tabindex="0"><slot name="clear">Clear Selection</slot></a>\n<a href="#" target="_blank" class="view-link" part="view-link" tabindex="0"><slot name="view-link">View Selection</slot></a>';
var COMPONENT_STYLESHEET23 = new CSSStyleSheet();
COMPONENT_STYLESHEET23.replaceSync(fileimage_input_default);
var COMPONENT_TAG_NAME25 = "fileimage-input";
var FileImageInputElement = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  // getPart<T extends HTMLElement = HTMLElement>(key: string)
  // {
  //     if(this.componentParts.get(key) == null)
  //     {
  //         const part = this.shadowRoot!.querySelector(`[part="${key}"]`) as HTMLElement;
  //         if(part != null) { this.componentParts.set(key, part); }
  //     }
  //     return this.componentParts.get(key) as T;
  // }
  // findPart<T extends HTMLElement = HTMLElement>(key: string) { return this.shadowRoot!.querySelector(`[part="${key}"]`) as T; }
  get files() {
    return this.shadowRoot.querySelector("input")?.files ?? null;
  }
  #previewURL;
  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = "file";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = fileimage_input_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET23);
    this.shadowRoot.querySelector(".label").tabIndex = 0;
    const placeholderLabel = this.shadowRoot.querySelector(".placeholder-label");
    if (placeholderLabel != null) {
      placeholderLabel.textContent = this.getAttribute("placeholder") ?? "Select a file...";
    }
    this.updateFormStatus();
    const input = this.shadowRoot.querySelector("input");
    input.addEventListener("input", () => {
      const value = input.files == null ? null : input.files[0];
      this.updateFormStatus();
      this.updatePreview(value);
      this.dispatchEvent(new Event("change"));
    });
    this.addEventListener("keydown", (event) => {
      if (event.code == "Space" || event.code == "Enter" || event.code == "NumpadEnter") {
        this.shadowRoot.querySelector("input").click();
        event.preventDefault();
        event.stopPropagation();
      }
    });
    this.shadowRoot.querySelector(".clear").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.value = null;
      this.dispatchEvent(new Event("change"));
      return false;
    });
    this.shadowRoot.querySelector(".clear").addEventListener("keydown", (event) => {
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
      const accepted = this.shadowRoot.querySelector("input").getAttribute("accept").split(",").map((item) => item.trim());
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
      this.shadowRoot.querySelector("input").setAttribute("accept", newValue);
    }
  }
  updatePreview(file) {
    if (file == null) {
      this.shadowRoot.querySelector(".preview").removeAttribute("src");
      this.shadowRoot.querySelector(".view-link").href = "#";
      this.shadowRoot.querySelector(".filename").textContent = "";
      this.removeAttribute("specified");
      this.classList.remove("file", "image");
      const placeholderLabel = this.shadowRoot.querySelector(".placeholder-label");
      if (placeholderLabel != null) {
        placeholderLabel.textContent = this.getAttribute("placeholder") ?? "Select a file...";
      }
      if (this.#previewURL != null) {
        window.URL.revokeObjectURL(this.#previewURL);
        this.#previewURL = void 0;
      }
      return;
    }
    this.shadowRoot.querySelector(".filename").textContent = file.name;
    this.toggleAttribute("specified", true);
    if (file.type.startsWith("image")) {
      this.classList.add("image");
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        const result = event.target?.result;
        this.shadowRoot.querySelector(".preview").src = result;
      });
      reader.readAsDataURL(file);
    } else {
      this.classList.add("file");
    }
    this.#previewURL = window.URL.createObjectURL(file);
    this.shadowRoot.querySelector(".view-link").href = this.#previewURL;
  }
  ///// Form Functionality ///// 
  static formAssociated = true;
  // this allows form event functionality;
  #internals;
  // #defaultValue: null = null;
  get value() {
    const input = this.shadowRoot.querySelector("input");
    return input.files == null ? null : input.files[0];
  }
  set value(val) {
    const transfer = new DataTransfer();
    if (val != null) {
      transfer.items.add(val);
    }
    const input = this.shadowRoot.querySelector("input");
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
    const input = this.shadowRoot.querySelector("input");
    const formValue = input.files == null ? null : input.files[0];
    this.#internals.setValidity(
      { valueMissing: this.getAttribute("required") != null && formValue == null },
      this.#validationMessage,
      this.shadowRoot.querySelector(".label")
    );
  }
  formDisabledCallback(disabled) {
    this.shadowRoot.querySelector("input").disabled = disabled;
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
    const input = this.shadowRoot.querySelector("input");
    const formValue = input.files == null ? null : input.files[0];
    this.#internals.setValidity(
      { valueMissing: this.getAttribute("required") != null && formValue == null },
      this.#validationMessage,
      this.shadowRoot.querySelector("label")
    );
    this.#internals.setFormValue(formValue);
  }
};
if (customElements.get(COMPONENT_TAG_NAME25) == null) {
  customElements.define(COMPONENT_TAG_NAME25, FileImageInputElement);
}

// node_modules/.pnpm/@magnit-ce+form-field@0.0.7/node_modules/@magnit-ce/form-field/dist/form-field.js
var COMPONENT_STYLESHEET24 = new CSSStyleSheet();
COMPONENT_STYLESHEET24.replaceSync(`form-field { display: var(--form-field-display, contents) }`);
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
var COMPONENT_TAG_NAME26 = "form-field";
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
        const optionalClass = this.getAttribute("optional-class") ?? "option-true";
        optionalCheckbox.addEventListener("change", () => {
          this.setAttribute("optional-value", optionalCheckbox.checked == true ? "true" : "false");
          for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            input.toggleAttribute("disabled", !optionalCheckbox.checked);
          }
          const elements = /* @__PURE__ */ new Set([
            this,
            this.querySelector(".container"),
            this.querySelector(".field-label"),
            optionalCheckbox,
            this.querySelector(".field-label span"),
            ...inputs
          ]);
          for (const element of elements) {
            if (element == null) {
              continue;
            }
            element.classList.toggle(optionalClass, optionalCheckbox.checked);
            element.part.toggle(optionalClass, optionalCheckbox.checked);
          }
        });
        const text = document.createElement("span");
        text.textContent = labelValue;
        label.append(optionalCheckbox, text);
        const optionalValue = this.getAttribute("optional-value") == "true" ? true : false;
        optionalCheckbox.checked = optionalValue;
        for (let i = 0; i < inputs.length; i++) {
          const input = inputs[i];
          input.toggleAttribute("disabled", !optionalCheckbox.checked);
          input.classList.toggle(optionalClass, optionalCheckbox.checked);
          input.part.toggle(optionalClass, optionalCheckbox.checked);
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
    parent.adoptedStyleSheets.push(COMPONENT_STYLESHEET24);
    this.renderIntoTemplate();
  }
};
if (customElements.get(COMPONENT_TAG_NAME26) == null) {
  customElements.define(COMPONENT_TAG_NAME26, FormFieldElement);
}

// node_modules/.pnpm/@magnit-ce+record-tree@0.0.15/node_modules/@magnit-ce/record-tree/dist/record-tree.js
var record_tree_default = "record-tree\n{\n    display: block;\n    --spacing: 7px;\n    --indent: 20px;\n}\n\nrecord-tree .collection\n{\n    border-radius: 3px;\n    padding: var(--spacing);\n    border: solid 1px transparent;\n}\nrecord-tree .collection:hover\n{\n    border-color: graytext;\n}\n\nrecord-tree .collection > .collection\n{\n    margin-left: var(--indent);\n    margin-block: var(--spacing);\n}\n\nrecord-tree .collection > .property:first-of-type\n{\n    margin-top: var(--spacing);\n}\nrecord-tree .collection > .property\n{\n    margin-left: var(--indent);\n}\nrecord-tree .collection > .property:last-of-type\n{\n    margin-bottom: var(--spacing);\n}\n\nrecord-tree .removed\n{\n    scale: .99;\n    color: graytext;\n}\n\nrecord-tree summary\n{\n    user-select: none;\n    display: flex;\n    gap: var(--spacing);\n}\nrecord-tree summary:before\n{\n    content: '\u25B6';\n    transition: transform 100ms ease-out;\n    font-size: .78em;\n    align-self: center;\n    margin-right: var(--spacing);\n}\nrecord-tree details[open] > summary:before\n{\n    transform: rotate(90deg);\n}\nrecord-tree summary .name\n{\n    flex: 1;\n}\nrecord-tree :not(.properties) > summary .name\n{\n    font-weight: bold;\n    font-size: .8em;\n}\n\nrecord-tree ul\n{\n    margin-block: var(--spacing);\n    margin-left: var(--indent);\n    padding: 0;\n}\n\nrecord-tree .property\n{\n    user-select: none;\n    display: flex;\n    align-items: center;\n    border-radius: 3px;\n    border: solid 1px transparent;\n}\nrecord-tree .property:hover\n{\n    border-color: graytext;\n}\n\nrecord-tree .property .name\n{\n    font-weight: bold;\n    font-size: .8em;    \n    text-align: right;\n\n    padding-left: var(--spacing);\n    padding-block: var(--spacing);\n    width: var(--property-name-width);\n}\nrecord-tree .property .value\n{\n    padding-inline: var(--spacing);\n    padding-block: var(--spacing);\n    flex: 1;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\nrecord-tree button\n{\n    display: inline-flex;\n    align-items: center;\n    margin-left: auto;\n    margin-right: var(--spacing);\n}\n\nrecord-tree button .icon\n{\n    --size: 14px;\n    width: var(--size);\n    height: var(--size);\n}";
var COMPONENT_STYLESHEET25 = new CSSStyleSheet();
COMPONENT_STYLESHEET25.replaceSync(record_tree_default);
var DEFAULT_REMOVED_CLASS_NAME = "removed";
var ICON_CANCEL_CROSS = `<svg class="icon cancel-cross" part="icon cross remove-icon" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <path style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-linecap:square;stroke-miterlimit:6.3;stroke-dashoffset:29.2913;stroke-opacity:1;-inkscape-stroke:none"
    d="m 1237.4389,207.63366 -1.8991,1.8987 a 0.65841136,0.65841136 90.003442 0 0 0,0.93116 l 0.4831,0.48317 a 14628.329,14628.329 44.999244 0 0 0.9312,0.93118 l 3.7936,3.79311 a 0.65840885,0.65840885 89.998393 0 1 0,0.93116 l -3.7936,3.7936 a 8783.6896,8783.6896 135.00442 0 1 -0.9313,0.93111 l -0.4829,0.48283 a 0.65811,0.65811 89.993977 0 0 10e-5,0.93094 l 1.8987,1.89741 a 0.65867085,0.65867085 179.98891 0 0 0.9314,-1.8e-4 l 0.4826,-0.48267 a 45427.77,45427.77 134.99941 0 1 0.9312,-0.93119 l 3.7931,-3.79308 a 0.65848899,0.65848899 179.99848 0 1 0.9312,-2e-5 l 3.7936,3.79312 a 10110.91,10110.91 44.992994 0 0 0.9313,0.93108 l 0.483,0.48285 a 0.65856615,0.65856615 179.99438 0 0 0.9313,-9e-5 l 1.897,-1.89705 a 0.65833101,0.65833101 89.994378 0 0 -10e-5,-0.93111 l -0.483,-0.48285 a 5293.5057,5293.5057 44.99639 0 1 -0.9313,-0.93113 l -3.793,-3.79354 a 0.65849247,0.65849247 90.001607 0 1 0,-0.93122 l 3.793,-3.79305 a 149190.44,149190.44 134.99995 0 1 0.9312,-0.93119 l 0.4832,-0.48321 a 0.65863247,0.65863247 90.008202 0 0 10e-5,-0.93132 l -1.8972,-1.89834 a 0.65838576,0.65838576 0.01346964 0 0 -0.9312,-2.2e-4 l -0.483,0.48285 a 7148.543,7148.543 135.00546 0 0 -0.9313,0.9311 l -3.7936,3.79359 a 0.65841791,0.65841791 0.00151591 0 1 -0.9312,-3e-5 l -3.7931,-3.79353 a 52707.551,52707.551 45.002134 0 0 -0.9312,-0.93122 l -0.4826,-0.48267 a 0.65849044,0.65849044 0.00323988 0 0 -0.9312,-5e-5 z"
    transform="translate(-1232.6358,-204.72848)" />
</svg>`;
var ICON_UNDO = `<svg class="icon undo-redo" part="icon undo-redo-icon" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<path
   style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,CanvasText);fill-opacity:1;stroke-width:0.999999;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
   d="M 8.7359009 1.1063924 C 8.3768905 1.0950243 8.0017196 1.1736712 7.641394 1.3523722 L 1.6107544 6.1205566 L 1.5916341 6.1386434 L 1.53479 6.1939372 C 1.0620233 6.6537208 0.70744486 7.6004515 1.0769368 8.152474 L 5.3030355 14.40894 C 6.1798306 15.219356 7.5994445 15.083541 8.4749349 14.106116 C 9.2135837 13.277519 9.3398045 12.086041 8.7787923 11.23549 L 11.334192 11.410673 C 14.129266 11.815808 17.330477 13.067707 18.931144 18.826241 C 19.313756 19.953163 19.735424 21.309718 20.245793 22.173324 C 20.976132 22.497497 21.420713 20.679238 21.478792 18.791101 C 21.506716 14.251463 18.262689 8.6142076 13.845667 6.7716797 C 13.291103 6.5403477 11.805521 5.8978235 10.30118 5.3355916 L 9.7994019 5.1107992 C 10.609379 4.4184442 10.916638 3.2966427 10.55026 2.3703979 C 10.238366 1.5905459 9.5257236 1.1314023 8.7359009 1.1063924 z " />
</svg>`;
var COMPONENT_TAG_NAME27 = "record-tree";
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
        parentToRemove.part.remove(removeAttributeName);
        if (parentToRemove.dataset.path != ".properties") {
          this.#removedPaths.delete(parentToRemove.dataset.path);
        }
        removeButton.innerHTML = ICON_CANCEL_CROSS;
        removeButton.title = "Remove";
        removeButton.classList.remove("undo");
        removeButton.part.remove("undo");
        this.dispatchEvent(new CustomEvent("restore", { detail: { path: parentToRemove.dataset.path } }));
      } else {
        parentToRemove.classList.add(removeAttributeName);
        parentToRemove.part.add(removeAttributeName);
        if (parentToRemove.dataset.path != ".properties") {
          this.#removedPaths.add(parentToRemove.dataset.path);
        }
        removeButton.innerHTML = ICON_UNDO;
        removeButton.title = "Undo";
        removeButton.classList.add("undo");
        removeButton.part.add("undo");
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
      await renderer.call(this, lastPathEntry, data, parentElement, true);
    } else if (Object.prototype.toString.call(data) === "[object Object]") {
      data = this.draftObject(data);
      let renderer = this.renderObjectAsCollection;
      for (let i = 0; i < this.#customObjectRenderers.length; i++) {
        if (this.#customObjectRenderers[i].condition(lastPathEntry, data, parentElement) == true) {
          renderer = this.#customObjectRenderers[i].renderer;
          break;
        }
      }
      await renderer.call(this, lastPathEntry, data, parentElement, true);
    } else if (usePropertiesContainer == true) {
      const pathMinusLastEntry = this.path.filter((item, index) => index < this.path.length - 1);
      let properties = this.querySelector(`details[data-path="${pathMinusLastEntry.join(".")}.properties"]`);
      let propertyList = properties == null ? null : properties.querySelector("ul");
      if (properties == null) {
        properties = this.createCollectionDetailsElement("Properties", `${pathMinusLastEntry.join(".")}.properties`, ["collection", "properties"], false);
        properties.toggleAttribute("open", true);
        propertyList = document.createElement("ul");
        propertyList.classList.add("properties-list");
        propertyList.part.add("properties-list");
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
  createCollectionDetailsElement(name, path, classes, preventRemoveButton, isTop) {
    const details = document.createElement("details");
    if (classes != null) {
      details.classList.add("details", ...classes);
      details.part.add("details", ...classes);
    }
    details.setAttribute("data-path", path);
    const summary = document.createElement("summary");
    summary.classList.add("summary");
    summary.part.add("summary", "collection", ...classes ?? []);
    if (isTop != null && isTop == true) {
      summary.part.add("top");
    }
    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;
    nameSpan.classList.add("name");
    nameSpan.part.add("name", "collection", ...classes ?? []);
    summary.append(nameSpan);
    if (preventRemoveButton != false) {
      const removeButton = document.createElement("button");
      removeButton.innerHTML = ICON_CANCEL_CROSS;
      removeButton.title = "Remove";
      removeButton.classList.add("button", "icon-button", "remove");
      removeButton.part.add("button", "icon-button", "remove");
      summary.append(removeButton);
    }
    details.append(summary);
    return details;
  }
  async renderArrayAsCollection(key, data, parentElement, isTop = false) {
    const name = isNaN(parseInt(key)) ? key : `[${key}]`;
    const details = this.createCollectionDetailsElement(name, this.path.join("."), ["collection"], void 0, isTop);
    if (this.path.length == 0) {
      details.setAttribute("open", "");
    }
    if (isTop == true) {
      details.classList.add("top");
      details.part.add("top");
    }
    parentElement.append(details);
    for (let i = 0; i < data.length; i++) {
      this.path.push(i.toString());
      await this.renderData(data[i], details, false);
      this.path.pop();
    }
  }
  async renderObjectAsCollection(key, data, parentElement, isTop = false) {
    const name = isNaN(parseInt(key)) ? key : data.name != null && data.name.trim() != "" ? data.name : data.description != null && data.description.trim() != "" ? data.description : data.key != null && data.key.trim() != "" ? data.key : data.id != null && data.id.toString().trim() != "" ? data.id : `[${key}]`;
    const details = this.createCollectionDetailsElement(name, this.path.join("."), ["collection"], void 0, isTop);
    if (this.path.length == 0) {
      details.setAttribute("open", "");
    }
    if (isTop == true) {
      details.classList.add("top");
      details.part.add("top");
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
    property.part.add("property");
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
    delimiter.part.add("delimiter");
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
    removeButton.classList.add("button", "icon-button", "remove");
    removeButton.part.add("button", "icon-button", "remove");
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
    name.part.add("name", "property-name");
    name.textContent = title;
    name.title = title;
    return name;
  }
  createPropertyValue(title, value, parentElement) {
    const valueSpan = document.createElement("span");
    valueSpan.classList.add("value");
    valueSpan.part.add("value", "value");
    if (value === void 0) {
      const undefinedTextValue = this.getAttribute("undefined-value") ?? "[ undefined ]";
      value = undefinedTextValue;
      valueSpan.classList.add("undefined");
      valueSpan.part.add("undefined");
    } else if (value === null) {
      const nullTextValue = this.getAttribute("null-value") ?? "[ null ]";
      value = nullTextValue;
      valueSpan.classList.add("null");
      valueSpan.part.add("null");
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
    propertiesList.part.add("properties-list");
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
    propertiesList.part.add("properties-list");
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
    property.part.add("property");
    property.dataset.path = this.path.join(".");
    const valueSpan = document.createElement("span");
    valueSpan.classList.add("value");
    valueSpan.part.add("value");
    valueSpan.textContent = value.toString();
    valueSpan.title = "[ Object ]";
    const removeButton = document.createElement("button");
    removeButton.innerHTML = ICON_CANCEL_CROSS;
    removeButton.title = "Remove";
    removeButton.classList.add("button", "icon-button", "remove");
    removeButton.part.add("button", "icon-button", "remove");
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
        $summary.classList.add("summary");
        $summary.part.add("summary", "property");
        $summary.textContent = textContent.substring(0, Math.min(textContent.length, 20));
        $details.classList.add("subrecord");
        $details.part.add("subrecord");
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
          $summary.classList.add("summary");
          $summary.part.add("summary", "property");
          $summary.textContent = key;
          $details.classList.add("subrecord");
          $details.part.add("subrecord");
          parent.appendChild($details);
          $details.appendChild($summary);
          this.renderDataObject(value, $details);
        } else {
          if (propertiesList == null) {
            propertiesList = parent.querySelector(":scope > ul");
            if (propertiesList == null) {
              propertiesList = document.createElement("ul");
              propertiesList.classList.add("properties-list");
              propertiesList.part.add("properties-list");
              parent.appendChild(propertiesList);
            }
          }
          const $property = document.createElement("li");
          $property.classList.add("property");
          $property.part.add("property");
          const $name = document.createElement("span");
          $name.classList.add("name");
          $name.part.add("name", "property-name");
          $name.textContent = key;
          const $value = document.createElement("span");
          $value.classList.add("value");
          $value.part.add("value", "property-value");
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
if (customElements.get(COMPONENT_TAG_NAME27) == null) {
  customElements.define(COMPONENT_TAG_NAME27, RecordTreeElement);
}

// src/resources/key.handlers.ts
function addKeyHandlers() {
  document.addEventListener("keydown", key_onDown.bind(this));
}
function key_onDown(event) {
  const taskboard = event.target == this ? this : null;
  if (taskboard == null) {
    return;
  }
  const activeList = taskboard.shadowRoot?.activeElement;
  if (activeList instanceof TaskListElement) {
    if (event.altKey == true) {
      const addButton = activeList.findElement("add-button");
      const activeButton = activeList.shadowRoot.activeElement == addButton ? addButton : null;
      if (activeButton != null) {
        if (event.code == "ArrowUp") {
          const lastTask = findLastTask(activeButton);
          if (lastTask != null) {
            lastTask.findElement("description").focus();
            return;
          }
        }
      }
      if (event.code == "ArrowDown") {
        activeList.querySelector("task-card")?.findElement("description").focus();
        return;
      }
    }
  }
  const activeCard = taskboard.shadowRoot?.activeElement;
  if (activeCard == null || !(activeCard instanceof TaskCardElement)) {
    return;
  }
  if (event.altKey == true && activeCard != null) {
    if (event.code == "ArrowUp") {
      if (event.shiftKey == true) {
        const firstTask = findFirstTask(activeCard);
        if (firstTask != null) {
          firstTask.findElement("description").focus();
        }
      } else {
        const previousTask = findPreviousTask(activeCard);
        if (previousTask != null) {
          previousTask.findElement("description").focus();
        } else {
          activeCard.parentElement.findElement("name").focus();
        }
      }
    } else if (event.code == "ArrowDown") {
      if (event.shiftKey == true) {
        const lastTask = findLastTask(activeCard);
        if (lastTask != null) {
          lastTask.findElement("description").focus();
        }
      } else {
        const nextTask = findNextTask(activeCard);
        if (nextTask != null) {
          nextTask.findElement("description").focus();
        } else {
          activeCard.parentElement.findElement("add-button").focus();
        }
      }
    } else if (event.code == "ArrowLeft") {
      if (event.shiftKey == false) {
        const previousListTask = findPreviousListTask(activeCard);
        if (previousListTask != null) {
          previousListTask.findElement("description").focus();
        }
      }
    } else if (event.code == "ArrowRight") {
      if (event.shiftKey == false) {
        const nextListTask = findNextListTask(activeCard);
        if (nextListTask != null) {
          nextListTask.findElement("description").focus();
        }
      }
    }
  }
}
function findPreviousListWithTasks(list) {
  let previousList = list.previousElementSibling;
  if (previousList == null) {
    return null;
  }
  let firstTask = previousList.querySelector("task-card");
  if (firstTask != null) {
    return previousList;
  }
  while (previousList.previousElementSibling != null) {
    firstTask = previousList.querySelector("task-card");
    if (firstTask != null) {
      return previousList;
    }
    previousList = previousList.previousElementSibling;
  }
  return null;
}
function findNextListWithTasks(list) {
  let nextList = list.nextElementSibling;
  if (nextList == null) {
    return null;
  }
  let firstTask = nextList.querySelector("task-card");
  if (firstTask != null) {
    return nextList;
  }
  while (nextList.nextElementSibling != null) {
    firstTask = nextList.querySelector("task-card");
    if (firstTask != null) {
      return nextList;
    }
    nextList = nextList.nextElementSibling;
  }
  return null;
}
function findPreviousListTask(task) {
  const parentList = task.closest("task-list");
  if (parentList == null) {
    return null;
  }
  let previousList = findPreviousListWithTasks(parentList);
  if (previousList == null) {
    return;
    null;
  }
  let targetTask = previousList.querySelector("task-card");
  if (targetTask == null) {
    previousList = previousList.previousElementSibling;
    if (previousList != null) {
    }
  }
  const taskRect = task.getBoundingClientRect();
  for (let i = 1; i < previousList.children.length; i++) {
    const currentTask = previousList.children[i];
    const currentTaskRect = currentTask.getBoundingClientRect();
    if (currentTaskRect.top <= taskRect.top) {
      targetTask = currentTask;
    } else {
      break;
    }
  }
  return targetTask;
}
function findNextListTask(task) {
  const parentList = task.closest("task-list");
  if (parentList == null) {
    return null;
  }
  const nextList = findNextListWithTasks(parentList);
  if (nextList == null) {
    return;
    null;
  }
  let targetTask = nextList.querySelector("task-card");
  if (targetTask == null) {
    return null;
  }
  const taskRect = task.getBoundingClientRect();
  for (let i = 1; i < nextList.children.length; i++) {
    const currentTask = nextList.children[i];
    const currentTaskRect = currentTask.getBoundingClientRect();
    if (currentTaskRect.top <= taskRect.top) {
      targetTask = currentTask;
    } else {
      break;
    }
  }
  return targetTask;
}
function findFirstTask(task) {
  const parentList = task.closest("task-list");
  if (parentList == null) {
    return null;
  }
  return parentList.querySelector("task-card");
}
function findPreviousTask(task) {
  return task.previousElementSibling instanceof TaskCardElement ? task.previousElementSibling : null;
}
function findNextTask(task) {
  return task.nextElementSibling instanceof TaskCardElement ? task.nextElementSibling : null;
}
function findLastTask(target) {
  const parentList = target instanceof TaskCardElement ? target.closest("task-list") : target.getRootNode().host;
  if (parentList == null) {
    return null;
  }
  return parentList.querySelector("task-card:last-of-type");
}

// src/taskboard-manager.ts
var DEFAULT_APP_VERSION = "--.--.--";
var COMPONENT_STYLESHEET26 = new CSSStyleSheet();
COMPONENT_STYLESHEET26.replaceSync(`${shared_default}
${board_item_global_default}
${browser_item_global_default}
${settings_default}
${taskboard_manager_default}`);
var COMPONENT_TEMPLATE12 = `${taskboard_manager_default2}
${defineIcons(
  "LogoMark" /* LogoMark */,
  "LogoType" /* LogoType */,
  "Logo" /* Logo */,
  "PlusIcon" /* PlusIcon */,
  "Stylus" /* Stylus */,
  "TaskBoard" /* TaskBoard */,
  "UndoRedo" /* UndoRedo */,
  "CloseCross" /* CloseCross */
)}`;
var COMPONENT_TAG_NAME28 = "taskboard-manager";
var TaskboardManagerElement = class extends HTMLElement {
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
  #customImageUrls = /* @__PURE__ */ new Map();
  #rootPath = "";
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE12;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET26);
    const autoLaunch = this.getAttribute("autolaunch") != "false";
    if (autoLaunch == true) {
      this.#init();
    }
  }
  //#region API
  /**
  * Initializes the app.  
  * Not necessary if the `autolaunch` attribute was not set to `false`.
  */
  init() {
    return this.#init();
  }
  setColorScheme(scheme) {
    const value = scheme == "browser" ? "light dark" : scheme;
    this.style.setProperty("color-scheme", value);
    const boardSettings = this.findElement("board-settings");
    boardSettings.style.setProperty("color-scheme", value);
    const tasklistSettings = [...boardSettings.shadowRoot.querySelectorAll(".tasklist-settings")];
    for (let i = 0; i < tasklistSettings.length; i++) {
      tasklistSettings[i].style.setProperty("color-scheme", value);
    }
    DataService.saveAppSetting("color-scheme" /* ColorScheme */, scheme);
  }
  async undo() {
    this.findElement("config-panel").history_undo();
  }
  async redo() {
    this.findElement("config-panel").history_redo();
  }
  async refreshBoards() {
    this.refreshBoardCollections();
    this.refreshCurrentBoard();
  }
  refreshCurrentBoard() {
    const currentBoardId = this.findElement("task-board").dataset.boardId;
    if (currentBoardId != null) {
      this.#renderBoard(currentBoardId);
    }
  }
  async refreshBoardCollections() {
    const boardRecords = await DataService.getAllBoardRecords();
    this.findElement("app-menu-container").updateBoards(boardRecords);
    this.findElement("board-browser").updateBoards(boardRecords);
  }
  async openBoard(id) {
    await this.closeBoard();
    await this.getElement("app-router").navigate(`board/${id}`);
  }
  async refreshBoard() {
    this.refreshBoards();
    this.findElement("config-panel").refreshCache();
    const id = this.findElement("board-settings").getAttribute("record-id");
    if (id == null) {
      FeedbackService.showErrorMessageCard(`An error occurred saving the board settings.`);
      throw new Error("Unable to determine the target board's id");
    }
    this.openBoard(id);
  }
  async closeBoard() {
    await this.findElement("app-router").navigate("/" + window.location.hash);
    this.getElement("task-board").innerHTML = "";
    const selectedMenuItems = [...this.findElement("app-menu-container").querySelectorAll(`[aria-current]`)];
    for (let i = 0; i < selectedMenuItems.length; i++) {
      selectedMenuItems[i].removeAttribute("aria-current");
      selectedMenuItems[i].classList.remove("selected");
      selectedMenuItems[i].part.remove("selected");
    }
  }
  async addBoard() {
    const order = this.findElement("app-menu-container").querySelectorAll("a").length;
    const board = await DataService.createBoard(order);
    await this.findElement("config-panel").addActionHistoryEntry(HistoryEntryType.Create, "board" /* Board */, { id: board.id });
    this.findElement("app-menu-container").refresh();
    this.findElement("welcome-panel").refresh();
  }
  editBoard(boardId) {
    this.findElement("app-router").navigate(`board/${boardId}#board-settings`);
  }
  async openBoardSettings(id) {
    const board = await DataService.getBoardRecord(id);
    if (board == null) {
      FeedbackService.showErrorMessageCard(`No board found with the target id (${id}).`);
      console.warn(`No board found with the target id (${id}).`);
      return;
    }
    const taskLists = await DataService.getBoardLists(id);
    const taskSettingIds = taskLists.map((item) => item.taskSettingsId);
    const taskSettings = await DataService.getTaskSettingsRecords(board.taskSettingsId, ...taskSettingIds);
    const boardTaskSettings = taskSettings.find((item) => item.id == board.taskSettingsId);
    const listTaskSettings = taskSettings.filter((item) => taskSettingIds.indexOf(item.id) > -1);
    if (boardTaskSettings == null) {
      FeedbackService.showErrorMessageCard(`An error occurred accessing task settings data.`);
      console.warn(`An error occurred accessing task settings data.`);
      return;
    }
    const backgroundImage = board.backgroundImageId == "" ? null : await DataService.getImageRecord(board.backgroundImageId);
    const boardSettings = this.findElement("board-settings");
    boardSettings.setValues(board, boardTaskSettings, backgroundImage);
    boardSettings.setLists(taskLists, listTaskSettings);
  }
  async exportBoard(id) {
    return DataService.exportBoard(this, id);
  }
  async importBoard(boardData, errorMessage) {
    const order = this.findElement("app-menu-container").querySelectorAll("a").length;
    return DataService.importBoard(boardData, order, errorMessage);
  }
  async removeBoard(boardId, confirm = true) {
    const confirmed = await FeedbackService.getConfirmation("Are you sure you want to delete this board and all of its tasks, lists, and images?", "warn");
    if (confirm == true && confirmed == false) {
      return;
    }
    if (this.findElement("app-router").getAttribute("path")?.indexOf(boardId) != null) {
      this.closeBoard();
    }
    await this.closeBoardSettings();
    await DataService.deleteBoard(boardId);
    const configPanel = this.findElement("config-panel");
    const welcomePanel = this.findElement("welcome-panel");
    const entry = await configPanel.addActionHistoryEntry(HistoryEntryType.Delete, "board" /* Board */, { id: boardId });
    this.refreshBoards();
    configPanel.refreshCache();
    await welcomePanel.removeBoardFromRecentBoards(boardId);
    welcomePanel.refresh();
    if (entry != null) {
      this.#addUndoNotification("A board was just deleted", entry.getAttribute("data-entry-id"));
    }
  }
  async duplicateBoard(id) {
    const boardExportData = await DataService.prepareExportData(this, id);
    const duplicateData = this.findElement("import-manager").prepareData(boardExportData);
    const newNameInput = this.findElement("board-settings").findElement("duplicate-board-name");
    if (newNameInput?.value != null && newNameInput.value.trim() != "") {
      duplicateData.name = newNameInput.value;
    }
    await this.importBoard(duplicateData, "An error occurred duplicating a board.");
    this.refreshBoards();
    this.findElement("welcome-panel").refresh();
  }
  async closeBoardSettings() {
    return new Promise((resolve) => {
      this.findElement("board-settings-dialog").close();
      requestAnimationFrame(resolve);
    });
  }
  async clearData() {
    this.findElement("config-panel").clearData();
  }
  // async clearHistory()
  // {
  //     this.findElement<ConfigPanelElement>('config-panel').history_clear();
  // }
  addTask(list, order) {
    const listId = list.dataset.tasklistId;
    const card = new TaskCardElement();
    list.append(card);
    this.#registerTaskCard(card, listId, order);
  }
  //#endregion API
  //#region Internal
  async #init() {
    const datastoreName = this.getAttribute("datastore-name");
    await DataService.init(datastoreName);
    FeedbackService.init(this);
    this.#loadColorScheme();
    const boardsPromise = this.refreshBoardCollections();
    this.findElement("app-menu-container").init({
      addBoard: this.addBoard.bind(this),
      editBoard: this.editBoard.bind(this)
    });
    this.findElement("welcome-panel").refresh();
    this.findElement("board-browser").addEventListener("select", async (event) => {
      const { boardId } = event.detail;
      if (boardId == null) {
        FeedbackService.showErrorMessageCard(`An error occurred attempting to open the board.`);
        console.error("Unable to open board: data-board-id attribute is unset on target element.");
        return;
      }
      this.findElement("app-router").navigate(`board/${boardId}`);
    });
    const appVersion = await this.#getAppVersion();
    this.findElement("config-panel").init({
      appVersion,
      scheme_onChange: this.setColorScheme.bind(this),
      openImportManager: this.#openImportManager.bind(this),
      openBoard: this.openBoard.bind(this),
      refreshBoards: this.refreshBoards.bind(this)
    });
    const boardSettings = this.findElement("board-settings");
    boardSettings.init({
      canAddList: this.#canAddList.bind(this),
      removeBoard: this.removeBoard.bind(this),
      duplicateBoard: this.duplicateBoard.bind(this),
      exportBoard: this.exportBoard.bind(this),
      closeBoard: this.closeBoard.bind(this),
      closeBoardSettings: this.closeBoardSettings.bind(this),
      saveSettingsTarget: this.#saveSettingsTarget.bind(this)
    });
    this.#addBoardHandlers();
    addKeyHandlers.call(this);
    this.#addRouteHandlers();
    this.addEventListener("click", this.#onClick.bind(this));
    await this.#handleInitialNavigation(boardsPromise);
    DataService.removeExpiredData();
    setInterval(() => {
      DataService.removeExpiredData();
    }, MILLISECONDSINDAY);
    this.#applyPartAttributes();
  }
  async #loadColorScheme() {
    const colorScheme = await DataService.getAppSetting("color-scheme" /* ColorScheme */);
    if (colorScheme == null) {
      return;
    }
    this.setColorScheme(colorScheme);
  }
  #historyIsUpdating = false;
  #addRouteHandlers() {
    const appRouter = this.findElement("app-router");
    appRouter.addRouteLinkClickHandlers(this.shadowRoot);
    this.findElement("app-router").addEventListener("pathchange", this.#router_onPathChange.bind(this));
    window.addEventListener("popstate", async (event) => {
      this.#historyIsUpdating = true;
      const { windowPath, windowHash } = this.#parseWindowPath();
      let route = windowPath + windowHash;
      await appRouter.navigate(route);
      this.#historyIsUpdating = false;
    });
    this.findElement("board-page").applyEventListener("beforeopen", this.#boardRoute_beforeOpen.bind(this));
    this.findElement("board-settings-dialog").applyEventListener("beforeopen", this.#boardSettingsRoute_beforeOpen.bind(this));
  }
  async #handleInitialNavigation(boardsPromise) {
    const { windowPath, windowHash } = this.#parseWindowPath();
    const filteredWindowHash = windowHash.replace("import", "");
    await this.getElement("app-router").navigate(`${windowPath}#${filteredWindowHash}`);
    if (filteredWindowHash != windowHash) {
      const newHistoryState = `${window.origin}${this.#rootPath}?path=${windowPath}${filteredWindowHash != "" ? `#${filteredWindowHash}` : ""}`;
      window.history.replaceState(null, "", newHistoryState);
    }
    await boardsPromise;
    let boardIdIndex = windowPath.indexOf("board/");
    if (boardIdIndex > -1) {
      const currentMenuItem = this.findElement("app-menu-container").querySelector(`[data-route="${windowPath}"]`);
      if (currentMenuItem != null) {
        currentMenuItem.setAttribute("aria-current", "page");
        currentMenuItem.classList.add("selected");
        currentMenuItem.part.add("selected");
      }
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
  //#region Management
  #initTaskCard(card, task) {
    const description = card.findElement("description");
    card.dataset.taskId = task.id;
    card.setAttribute("color", task.color);
    card.setAttribute("is-finished", task.isFinished.toString());
    description.innerHTML = task.description;
    card.setAttribute("draggable", "true");
    card.setAttribute("part", "task-card");
    card.setAttribute("exportparts", "description: task-description, is-finished:task-checkbox, color-container:task-color-container, color:task-color, remove-button:task-remove-button, handle:task-handle, finished-indicator:task-finished-indicator, button, input, finished");
    card.style.setProperty("--task-color", task.color);
    description.addEventListener("keyup", this.#taskDescription_onKeyUp.bind(this));
    description.focus();
  }
  async #openImportManager(data) {
    const boardData = new BoardExport(data, data.taskSettings, data.backgroundImage, data.lists);
    const router = this.findElement("app-router");
    const currentPath = router.path ?? "";
    const currentPathArray = currentPath.split("#");
    currentPathArray[1] = "import";
    const importPath = currentPathArray.join("#");
    router.navigate(importPath);
    const importManager = this.findElement("import-manager");
    importManager.setData(boardData);
    requestAnimationFrame(() => {
      assignPartsAsExportPartsAttribute(importManager.shadowRoot, false, {
        "description": "import-target-description",
        "preview": "import-target-preview",
        "details": "import-target-details",
        "collection": "import-target-collection",
        "property": "import-target-property",
        "name": "import-target-name",
        "remove": "import-target-remove",
        "properties": "import-target-properties",
        "footer": "import-target-footer",
        "summary": "import-target-summary"
      });
    });
  }
  async #saveSettingsTarget() {
    const settingsTarget = this.findElement("board-settings");
    const settingsTargetId = settingsTarget.getAttribute("record-id");
    const boardItem = this.findElement("app-menu-container").querySelector(`a[data-route*="${settingsTargetId}"]`);
    if (boardItem == null) {
      FeedbackService.showErrorMessageCard(`An error occurred saving a task board.`);
      console.error(`An error occurred finding the board's menu item.`);
      return;
    }
    const order = [...this.shadowRoot.querySelectorAll("a")].indexOf(boardItem);
    const [
      existingBoard,
      existingTaskLists,
      existingTaskSettings,
      board,
      taskLists,
      taskSettings,
      imageUpdates
    ] = await settingsTarget.saveBoard(order);
    if (board == null) {
      return;
    }
    await this.#updateActionHistory(
      existingBoard,
      existingTaskLists,
      existingTaskSettings,
      board,
      taskLists,
      taskSettings,
      imageUpdates
    );
    this.findElement("welcome-panel").updateRecentBoardEntry(board.id, board.name);
    this.refreshBoard();
  }
  async #updateActionHistory(existingBoard, existingTaskLists, existingTaskSettings, board, taskLists, taskSettings, imageUpdates) {
    const configPanel = this.findElement("config-panel");
    const [
      boardActionProperties,
      listActionProperties
    ] = DataService.data.boardUpdate_getActionProperties(
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
      await configPanel.addActionHistoryEntry(HistoryEntryType.Update, "board" /* Board */, boardActionProperties);
    }
    for (let i = 0; i < listActionProperties.length; i++) {
      const actionProperties = listActionProperties[i];
      await configPanel.addActionHistoryEntry(HistoryEntryType.Update, "list" /* List */, actionProperties);
    }
    const existingListIds = new Set(existingTaskLists.filter((item) => item != void 0).map((item) => item.id));
    const currentListIds = new Set(taskLists.filter((item) => item != void 0).map((item) => item.id));
    const addedLists = taskLists.filter((item) => item != void 0 && !existingListIds.has(item.id));
    for (let i = 0; i < addedLists.length; i++) {
      const addedList = addedLists[i];
      await configPanel.addActionHistoryEntry(HistoryEntryType.Create, "list" /* List */, { id: addedList.id });
    }
    const removedLists = existingTaskLists.filter((item) => item != void 0 && !currentListIds.has(item.id));
    for (let i = 0; i < removedLists.length; i++) {
      const removedList = removedLists[i];
      await configPanel.addActionHistoryEntry(HistoryEntryType.Delete, "list" /* List */, { id: removedList.id });
    }
  }
  #addUndoNotification(message, entryId) {
    const content = document.createElement("span");
    content.setAttribute("part", "notification-message-content");
    content.classList.add("notification-message-content");
    const messageText = document.createElement("span");
    messageText.setAttribute("part", "undo-message");
    messageText.classList.add("undo-message");
    messageText.textContent = message;
    const messageButton = document.createElement("button");
    messageButton.setAttribute("part", "notification-undo-button");
    messageButton.classList.add("notification-undo-button");
    messageButton.innerHTML = `<svg id="notification-undo-icon" class="icon">
                                        <use href="#icon-definition_undo-redo"></use>
                                    </svg>
                                    <span part="notification-undo-button-label">Undo?</span>`;
    messageButton.type = "button";
    content.append(messageText, messageButton);
    const notification = MessageCardElement.prepare(content, this.findElement("notifications"), { type: MessageCardType.Success, heading: "Success!" });
    notification.part.add("notification");
    notification.classList.add("notification");
    messageButton.addEventListener("click", () => {
      const entry = this.getElement("action-history").querySelector(`[data-entry-id="${entryId}"]`);
      if (entry == null) {
        FeedbackService.showErrorMessageCard(`An error occurred restoring a record. The record was not restored`);
        return;
      }
      this.getElement("action-history").reverseEntry(entry);
      notification.dispatchEvent(new CustomEvent(MessageCardEvent.Cancel));
      notification.remove();
    });
    notification.show();
  }
  async #updateListRecord(taskListComponent) {
    const id = taskListComponent.dataset.tasklistId;
    if (id == null) {
      FeedbackService.showErrorMessageCard(`An error occurred saving a task list.`);
      throw new Error("Unable to update tasklist with unset 'data-tasklist-id' attribute");
    }
    const taskList = await DataService.getListRecord(id);
    if (taskList == null) {
      FeedbackService.showErrorMessageCard(`An error occurred saving a task list.`);
      throw new Error(`Unable to update tasklist. No tasklist found with target id (${id}).`);
    }
    const listPreviousName = taskList.name;
    const inputNameValue = taskListComponent.findElement("name").value;
    const listPreviousColor = taskList.color;
    const inputColorValue = taskListComponent.findElement("color").value;
    taskList.name = inputNameValue;
    taskList.color = inputColorValue;
    DataService.saveListRecords(taskList);
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
    await this.findElement("config-panel").addActionHistoryEntry(HistoryEntryType.Update, "list" /* List */, properties);
  }
  async #updateTaskRecord(taskComponent, parentList) {
    const listId = parentList.dataset.tasklistId;
    if (listId == null) {
      FeedbackService.showErrorMessageCard(`An error occurred saving a task.`);
      throw new Error("Unable to update task when parent list's data-tasklist-id attribute is not available.");
    }
    const task = await this.#getTaskFromComponent(taskComponent);
    const previousValues = structuredClone(task);
    task.listId = listId;
    task.color = taskComponent.findElement("color").value;
    task.isFinished = taskComponent.findElement("is-finished").checked;
    task.description = taskComponent.findElement("description").innerHTML;
    const tasks = [...parentList.querySelectorAll("task-card")];
    task.order = tasks.indexOf(taskComponent);
    if (task.order == -1) {
      console.warn("Unable to find index of task in parent list");
      task.order = tasks.length;
    }
    await DataService.saveTaskRecords(task);
    const diff = Object.fromEntries(Object.entries(previousValues).filter(([key, value]) => value !== task[key]));
    const updates = /* @__PURE__ */ new Map();
    for (const [key, value] of Object.entries(diff)) {
      updates.set(key, { from: value, to: task[key] });
    }
    const properties = {
      id: task.id,
      updates
    };
    await this.findElement("config-panel").addActionHistoryEntry(HistoryEntryType.Update, "task" /* Task */, properties);
  }
  async #registerTaskCard(card, listId, order) {
    const errorMessage = "An error occured creating a new Task. Refreshing the application may help. If the problem persists, more detail can be found in your browsers development tools.";
    if (listId == null) {
      FeedbackService.showErrorMessageCard(errorMessage);
      throw new Error("Unable to add task when parent list's data-tasklist-id attribute is undefined.");
    }
    const boardId = this.findElement("task-board").dataset.boardId;
    if (boardId == null) {
      FeedbackService.showErrorMessageCard(errorMessage);
      throw new Error("Unable to add task when parent boards's data-board-id attribute is undefined.");
    }
    const task = await this.#addTaskRecord(boardId, listId, order);
    if (task == void 0) {
      return;
    }
    this.#initTaskCard(card, task);
  }
  async #addTaskRecord(boardId, listId, order) {
    const task = await DataService.createTask(boardId, listId);
    task.order = order;
    await DataService.saveTaskRecords(task);
    this.findElement("config-panel").addActionHistoryEntry(HistoryEntryType.Create, "task" /* Task */, { id: task.id });
    return task;
  }
  async #deleteTaskRecord(taskComponent) {
    const id = taskComponent.dataset.taskId;
    if (id == null) {
      FeedbackService.showErrorMessageCard(`An error occurred deleting a task.`);
      throw new Error("Unable to delete task when task's data-task-id attribute is not available.");
    }
    await DataService.deleteTaskRecords(id);
    const entry = await this.findElement("config-panel").addActionHistoryEntry(HistoryEntryType.Delete, "task" /* Task */, { id });
    if (entry != null) {
      this.#addUndoNotification("A task was just deleted", entry.getAttribute("data-entry-id"));
    }
  }
  async #updateTaskRecordsAfterMove(target, parent) {
    await this.#updateTaskRecord(target, parent);
    if (DataService.data.tasks == null) {
      FeedbackService.showErrorMessageCard(`An error occurred moving a task.`);
      console.warn(`An error occurred accessing task data. Unable to save task order.`);
      return;
    }
    const toSave = await this.#getOrderedTasks(parent);
    await DataService.saveTaskRecords(...toSave);
  }
  async #getOrderedTasks(tasklist) {
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
    const tasks = await DataService.getTaskRecords(...orderedIds);
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
    const id = taskComponent.dataset.taskId;
    if (id == null) {
      FeedbackService.showErrorMessageCard(`An error occurred identifying a task.`);
      throw new Error("Unable to update task with unset 'data-tasklist-id' attribute");
    }
    const task = await DataService.getTaskRecord(id);
    if (task == null) {
      FeedbackService.showErrorMessageCard(`An error occurred identifying a task.`);
      throw new Error(`Unable to update task. No task found with target id (${id}).`);
    }
    return task;
  }
  //#endregion Management
  //#region Rendering
  async #renderBoard(id) {
    const board = await DataService.getBoardRecord(id);
    if (board == null) {
      this.findElement("app-router").navigate("/");
      FeedbackService.showMessageCard(`No board found with the target id (${id}). Navigated back to Welcome page.`, MessageCardType.Warn);
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
    const settings = await DataService.getTaskSettingsRecord(board.taskSettingsId);
    if (settings != null) {
      this.#applyTaskSettings(taskBoard, settings);
    }
    const tasks = await DataService.getBoardTasks(id);
    await this.#renderBoardLists(taskBoard, tasks);
    const welcomePanel = this.findElement("welcome-panel");
    await welcomePanel.addBoardToRecentBoards(id, board.name);
    welcomePanel.refresh();
  }
  async #renderBoardBackground(board) {
    const taskBoard = this.findElement("task-board");
    if (board.backgroundImageId != null && board.backgroundImageId.trim() != "") {
      let backgroundImageUrl = this.#customImageUrls.get(board.backgroundImageId);
      if (backgroundImageUrl == null) {
        const backgroundImage = await DataService.getImageRecord(board.backgroundImageId);
        if (backgroundImage == null) {
          FeedbackService.showMessageCard(`No image found with the target id (${board.backgroundImageId}).`, MessageCardType.Warn);
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
  async #renderBoardLists(board, tasks) {
    const boardId = board.dataset.boardId;
    if (boardId == null) {
      FeedbackService.showErrorMessageCard(`An error occurred loading the board. Navigated back to Welcome page.`);
      console.error(new Error("Unable to add task when parent boards's data-board-id attribute is undefined."));
      return;
    }
    const lists = await DataService.getBoardLists(boardId);
    const taskSettings = await DataService.getTaskSettingsRecords(...lists.map((item) => item.taskSettingsId));
    const listElements = [];
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      if (list.deletedTimestamp != void 0) {
        continue;
      }
      const settings = taskSettings.find((item) => item.id == list.taskSettingsId);
      if (settings == null) {
        FeedbackService.showMessageCard(`An error occurred loading a list's settings. Some settings may not be displayed properly.`, MessageCardType.Warn);
        console.warn(new Error(`Unable to find settings from list's taskSettingsId.`));
      }
      const element = new TaskListElement();
      element.setAttribute("name", list.name);
      element.setAttribute("color", list.color);
      element.setAttribute("data-tasklist-id", list.id);
      element.toggleAttribute("drag-drop", true);
      element.setAttribute("part", "task-list");
      element.style.setProperty("--list-color", list.color);
      element.setAttribute("exportparts", "header:list-header, color-container:list-color-container, color:list-color, name:list-name, collapse-button:list-collapse, collapse-icon:list-collapse-icon, tasks:list-tasks, add-button:list-add-button, add-label:list-add-label, button, input, finished:task-finished");
      element.dragAndDropQueryParent = board;
      element.innerHTML = `
            <button type="button" slot="add-button" class="button add-task-button label-button" part="add-button add-task-button button label-button" title="Add">
                <svg id="add-icon" class="icon button-icon add" part="list-add-button-icon icon button-icon add">
                    <use href="#icon-definition_plus"></use>
                </svg>
                <span class="list-add-button-label button-label" part="list-add-button-label button-label">Add Task</span>
            </button>`;
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
  //#endregion Rendering
  //#region Handlers
  #onClick(event) {
    const composedPath = event.composedPath().filter((item) => item instanceof HTMLElement);
    const importOkButton = composedPath.find((item) => item.id == "import-ok");
    if (importOkButton != null) {
      this.#importDialog_import_onClick();
      return;
    }
    const addTaskButton = composedPath.find((item) => item.classList.contains("add-task-button"));
    if (addTaskButton != null) {
      const order = addTaskButton.parentElement.querySelectorAll(`task-card`).length;
      this.addTask(addTaskButton.parentElement, order);
    }
  }
  #router_onPathChange(event) {
    if (this.#historyIsUpdating == true) {
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
      const newHistoryState = `${updatedLocation.origin}${this.#rootPath}?path=${updatedLocation.pathname}${updatedLocation.hash}`;
      if (isReplacementChange) {
        window.history.replaceState(null, "", newHistoryState);
      } else {
        window.history.pushState(null, "", newHistoryState);
      }
    }
    const currentPathArray = updatedPath.split("#");
    const pageRoute = currentPathArray[0];
    const hashRoute = currentPathArray[1];
    const items = [...this.findElement("app-menu-container").querySelectorAll("a")];
    for (let i = 0; i < items.length; i++) {
      items[i].part.remove("selected");
    }
    if (pageRoute != null) {
      const currentMenuItem = this.findElement("app-menu-container").querySelector(`[data-route="${pageRoute}"]`);
      if (currentMenuItem != null) {
        currentMenuItem.setAttribute("aria-current", "page");
        currentMenuItem.classList.add("selected");
        currentMenuItem.part.add("selected");
      }
    }
    if (hashRoute != null) {
      if (hashRoute.indexOf("config") == -1) {
        return;
      }
      const configRoute = hashRoute.substring(7);
      const configPanel = this.findElement("config-panel");
      const configMenuItems = [...configPanel.findElement("config-navigation").querySelectorAll(`a`)];
      for (let i = 0; i < configMenuItems.length; i++) {
        configMenuItems[i].toggleAttribute("aria-current", false);
        configMenuItems[i].classList.toggle("selected", false);
        configMenuItems[i].part.toggle("selected", false);
      }
      configPanel.findElement("config-router").setAttribute("path", configRoute);
      const menuItem = configPanel.findElement("config-navigation").querySelector(`[data-route="#${hashRoute}"]`);
      if (menuItem == null) {
        return;
      }
      menuItem.setAttribute("aria-current", "page");
      menuItem.part.toggle("selected", true);
      menuItem.classList.toggle("selected", true);
    }
  }
  #boardRoute_beforeOpen(event) {
    const data = event.detail;
    const boardId = data.properties.id;
    if (boardId == null) {
      FeedbackService.showErrorMessageCard(`An error occurred attempting to open the board.`);
      throw new Error("Unable to open board route with unknown id");
    }
    this.#renderBoard(boardId);
    this.findElement("welcome-panel").updateRecentBoardEntry(boardId);
  }
  async #boardSettingsRoute_beforeOpen(_event) {
    const router = this.findElement("app-router");
    const properties = await router.getRouteProperties();
    if (properties.id == null) {
      FeedbackService.showErrorMessageCard(`An error occurred attempting to open the board for editing.`);
      throw new Error("Unable to determine the selected board's id");
    }
    this.openBoardSettings(properties.id);
  }
  async #importDialog_import_onClick() {
    const boardData = this.findElement("import-manager").getRecord();
    await this.importBoard(boardData);
    this.refreshBoardCollections();
  }
  #addBoardHandlers() {
    const board = this.findElement("task-board");
    board.addEventListener("change", this.#taskBoard_onChange.bind(this));
    board.addEventListener("collapse", this.#taskBoard_onListCollapse.bind(this));
    board.addEventListener("add", this.#taskBoard_onTaskAdd.bind(this));
    board.addEventListener("remove", this.#taskBoard_onTaskRemove.bind(this));
    board.addEventListener("added", this.#taskBoard_onTaskMove.bind(this));
  }
  #taskBoard_onChange(event) {
    if (event.target instanceof TaskCardElement) {
      this.#taskBoard_onTaskChange.call(this, event);
    } else if (event.target instanceof TaskListElement) {
      const { detail } = event;
      if (detail.order != null) {
        this.#taskBoard_onTaskMove.call(this, event);
      }
      this.#taskBoard_onListChange.call(this, event);
    }
  }
  #taskBoard_onListChange(event) {
    this.#updateListRecord(event.target);
  }
  #taskBoard_onListCollapse(event) {
    const target = event.target;
    const isCollapsed = target.getAttribute("collapsed") != null;
    target.part.toggle("collapsed-list", isCollapsed);
  }
  #taskBoard_onTaskChange(event) {
    const cardElement = event.target;
    const listElement = cardElement.closest("task-list");
    if (listElement == null) {
      FeedbackService.showErrorMessageCard(`An error occurred updating a task.`);
      console.error(new Error("Unable to identify a parent task-list element for an updated task-card element.."));
      return;
    }
    this.#updateTaskRecord(cardElement, listElement);
    cardElement.style.setProperty("--task-color", cardElement.findElement("color").value);
  }
  #taskBoard_onTaskAdd(event) {
    const list = event.target;
    const data = event.detail;
    this.addTask(list, data.order);
  }
  #taskBoard_onTaskRemove(event) {
    const card = event.target.closest("task-card");
    card.remove();
    this.#deleteTaskRecord(card);
  }
  #taskBoard_onTaskMove(event) {
    const { detail } = event;
    const cardElement = detail.target;
    const listElement = event.target;
    this.#updateTaskRecordsAfterMove(cardElement, listElement);
  }
  #taskDescription_onKeyUp(event) {
    if (event.code != "Enter" || event.shiftKey == false && event.ctrlKey == false) {
      return;
    }
    const list = event.target.getRootNode().host.parentElement;
    const listId = list?.dataset.tasklistId;
    if (list == null || listId == null) {
      FeedbackService.showErrorMessageCard(`An error occurred creating a new task.`);
      console.error(new Error("List data not found."));
      return;
    }
    const card = new TaskCardElement();
    list.append(card);
    this.#registerTaskCard(card, listId, list.children.length);
    list.append(card);
    card.findElement("description").focus();
  }
  //#endregion Handler
  //#region Utilities
  async #getAppManifest() {
    const manifestLink = document.head.querySelector('link[rel="manifest"]');
    const manifestRef = manifestLink?.getAttribute("href");
    if (manifestRef == null) {
      return;
    }
    const manifestData = await fetch(manifestRef);
    const manifest = await manifestData.json();
    return manifest;
  }
  async #getAppVersion() {
    const manifest = await this.#getAppManifest();
    if (manifest == null) {
      console.warn(`A manifest file could not be found linked in the index document's head. The app's version information could not be determined.`);
      return DEFAULT_APP_VERSION;
    }
    return manifest.version;
  }
  #parseWindowPath() {
    const pathArray = window.location.search.substring(1).split("=");
    let windowPath = pathArray[1] ?? "";
    if (windowPath.startsWith("/")) {
      windowPath = windowPath.substring(1);
    }
    if (this.#rootPath != "" && windowPath.startsWith(this.#rootPath)) {
      windowPath = windowPath.substring(this.#rootPath.length + 1);
    }
    windowPath = windowPath.trim();
    let windowHash = window.location.hash;
    if (windowHash.startsWith("#")) {
      windowHash = windowHash.substring(1);
    }
    windowHash = windowHash.trim();
    return { windowPath, windowHash };
  }
  #parseWindowPath_pwa() {
    let windowPath = window.location.pathname;
    if (windowPath.startsWith("/")) {
      windowPath = windowPath.substring(1);
    }
    if (this.#rootPath != "" && windowPath.startsWith(this.#rootPath)) {
      windowPath = windowPath.substring(this.#rootPath.length + 1);
    }
    windowPath = windowPath.trim();
    let windowHash = window.location.hash;
    if (windowHash.startsWith("#")) {
      windowHash = windowHash.substring(1);
    }
    windowHash = windowHash.trim();
    return { windowPath, windowHash };
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
  //#endregion Utilities
  static observedAttributes = ["root-path"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "root-path") {
      this.#rootPath = newValue.trim();
    }
  }
  //#endregion Internal
};
if (customElements.get(COMPONENT_TAG_NAME28) == null) {
  customElements.define(COMPONENT_TAG_NAME28, TaskboardManagerElement);
}
export {
  TaskboardManagerElement
};
