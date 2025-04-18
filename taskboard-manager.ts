// styles
import sharedStyles from './styles/shared.css?raw';
import boardItemStyles from './components/app-menu/board-item.global.css?raw';
import browserItemStyles from './components/board-browser/browser-item.global.css?raw';

import settingsStyle from './styles/settings.css?raw';
import componentStyle from './taskboard-manager.css?raw';
// html
import html from './taskboard-manager.html?raw';
// icons
import { defineIcons, Icons, IconType } from './assets/icons/icons.asset';

// component definitions
import './components/import-manager/import-manager.component';
import './components/board-settings/task-fields/task-fields.component';
import './components/board-settings/tasklist-fields/tasklist-fields.component';

import './components/app-menu/app-menu';
import './components/welcome-panel/welcome-panel';
import './components/board-browser/board-browser';
import './components/board-settings/board-settings';
import './components/config-panel/config-panel';

import '@magnit-ce/editable-list';
import '@magnit-ce/path-router';
import '@magnit-ce/task-board';
import '@magnit-ce/task-list';
import '@magnit-ce/task-card';
import '@magnit-ce/collection-browser';
import '@magnit-ce/collection-filter';
import '@magnit-ce/captioned-thumbnail';
import '@magnit-ce/fileimage-input';
import '@magnit-ce/form-field';
import '@magnit-ce/action-history';
import '@magnit-ce/record-tree';
import '@magnit-ce/message-card';
// // components
// // data
import { TaskboardManagerElementData } from './data/data';
import { BoardChannel } from './data/channels/board.channel';
import { TaskListChannel } from './data/channels/task-list.channel';
import { TaskChannel } from './data/channels/task.channel';
import { CustomImageChannel } from './data/channels/custom-image.channel';
// // records
import { TaskRecord } from './data/records/task.record';
import { TaskListColorDisplay, TaskListRecord } from './data/records/task-list.record';
import { TaskColorDisplay, TaskSettingsRecord } from './data/records/task-settings.record';
import { BoardExport } from './data/foreign/exported-board';
import { ListExport } from './data/foreign/exported-list';
import { ImageExport } from './data/foreign/exported-image';
import { DataRecord } from 'record-setter';
import { TaskBoardRecord } from './data/records/task-board.record';
import { HistoryEntryData, HistoryEntryTargetType, BasicActionProperties, PropertyUpdate } from './data/history/history-entry-data';
import { PropertiesType } from './data/history/history-entry-data';
import { ListActionProperties } from './data/history/list-action-properties';
import { CustomImageActionProperties } from './data/history/custom-image-action-properties';
import { DataChannel } from './data/channels/data.channel';
// import { addAdminHandlers } from './handlers/admin.handlers';
// import { addNavigationhandlers } from './handlers/navigation.handlers';
// import { addBoardBrowserHandlers } from './handlers/board-browser.handlers';
// import { parseWindowPath } from './handlers/route.handlers';
import { addBoardHandlers, taskDescription_onKeyUp } from './handlers/board.handlers';
// import { addDragHandlers } from './handlers/drag.handlers';
// import { addBoardSettingsHandlers } from './handlers/board-settings.handlers';
import { TaskListElement } from '@magnit-ce/task-list';
import { TaskCardElement } from '@magnit-ce/task-card';
import { PathRouterElement, RoutePageElement} from '@magnit-ce/path-router';
import { CaptionedThumbnailElement } from '@magnit-ce/captioned-thumbnail';
import { EditableListElement } from '@magnit-ce/editable-list';
import { MessageCardElement, MessageCardEvent, MessageCardType } from '@magnit-ce/message-card';
import { TaskBoardElement } from '@magnit-ce/task-board';
import { CustomImageRecord } from './data/records/custom-image.record';
import { ActionHistoryElement, ATTRIBUTENAME_ACTIVE, ATTRIBUTENAME_REVERSED, HistoryEntryType } from '@magnit-ce/action-history';
import { HistoryEntryRecord } from './data/records/history-entry.record';
import { ImportManagerComponent } from './components/import-manager/import-manager.component';
import { HistoryEntryChannel } from './data/channels/history-entry.channel';
import { addKeyHandlers } from './handlers/key.handlers';
import { FileImageInputElement } from '@magnit-ce/fileimage-input';
import { AppMenuElement } from './components/app-menu/app-menu';
import { WelcomePanelElement } from './components/welcome-panel/welcome-panel';
import { RecentBoardData } from './data/types/recent-board-data.type';
import { BoardBrowserElement } from './components/board-browser/board-browser';
import { BoardSettingsElement } from './components/board-settings/board-settings';
import { ConfigPanelElement } from './components/config-panel/config-panel';
import { HistoryPanelElement } from './components/config-panel/history-panel/history-panel';
import { AppSettingKey, DataService, MILLISECONDSINDAY } from './data/data.service';
import { FeedbackService, ErrorMessageType } from './feedback.service';
import { ColorScheme } from './components/config-panel/settings-panel/settings-panel';

// export type TaskboardManagerProperties = 
// {
//     // remove?: boolean,
//     // edit?: boolean,
//     // onAdd?: (event?: Event) => void|Promise<void>,
//     // onRemove?: (event?: Event) => void|Promise<void>,
//     // onEdit?: (event?: Event) => void|Promise<void>,
// };




const DEFAULT_APP_VERSION = "--.--.--";



/** Helper const for accessing component-specific methods and properties
* used to make development possible across multiple modular files.  
* Not suited for interacting with the component  */
export const SHAREDACCESSKEY = Symbol('SHAREDACCESSKEY');
/** Helper type for accessing component-specific methods and properties
* used to make development possible across multiple modular files.  
* Not suited for interacting with the component  */
// type SharedContent =
// { 
//     data: TaskboardManagerElementData,
//     refreshBoards: () => Promise<void>,
//     refreshActionHistory: () => Promise<void>,
//     refreshDeletedItems: () => Promise<void>,
//     saveAppSetting: (key: string, value: string|number|boolean|Blob|null) => Promise<void>,
//     // restoreDeletedItem: (targetType: HistoryEntryTargetType|null, recordId: string, timestamp: number) => void,
//     // handleActionEntryReverse: (targetEntry: HTMLElement, previousEntry: HTMLElement|undefined, targetIndex: number, previousEntryIndex: number) => void,
//     // handelActionEntryActivate: (targetEntry: HTMLElement, previousEntry: HTMLElement|undefined, targetIndex: number, previousEntryIndex: number) => void,
//     // prepareHistoryEntries: () => void,
//     // applyHistoryLength: () => Promise<void>,

//     renderBoard: (id: string) => void,
//     updateBoardSettings: () => void,
//     updateRecentBoardEntry: (id: string, description?: string) => Promise<void>,
//     removeBoardFromRecentBoards: (id: string) => Promise<void>,

//     updateListRecord: (taskListComponent: TaskListElement) => void,
//     duplicateList: (target: HTMLElement, list: TaskListRecord, settings: TaskSettingsRecord) => void,

//     registerTaskCard: (card: TaskCardElement, listId: string, order: number) => void,
//     updateTaskRecord: (taskComponent: TaskCardElement, parentList: TaskListElement) => void,
//     deleteTaskRecord: (taskComponent: TaskCardElement) => void,
//     updateTaskRecordsAfterMove: (target: TaskCardElement, parent: TaskListElement) => void,

//     openImportManager: (data: any) => void,

//     getConfirmation: (message: string, type: 'info'|'warn'|'danger') => Promise<boolean>,
//     getIdFromRoute: () => string,

// }

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
${boardItemStyles}
${browserItemStyles}
${settingsStyle}
${componentStyle}`);



// const COMPONENT_TEMPLATE = `${html}
// ${defineIcons()}`;
const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.LogoMark,
    IconType.LogoType,
    IconType.Logo,
    IconType.PlusIcon,
    IconType.Stylus,
    IconType.TaskBoard,
)}`;

const COMPONENT_TAG_NAME = 'taskboard-manager';
export class TaskboardManagerElement extends HTMLElement
{
    static observedAttributes = [
        
    ];

    componentParts: Map<string, HTMLElement> = new Map();
    getElement<T extends HTMLElement|RoutePageElement = HTMLElement>(id: string)
    {
        if(this.componentParts.get(id) == null)
        {
            const part = this.findElement(id);
            if(part != null) { this.componentParts.set(id, part); }
        }

        return this.componentParts.get(id) as T;
    }
    findElement<T extends HTMLElement|RoutePageElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }

    // initPromise?: Promise<void>;

    #customImageUrls: Map<string,string> = new Map();

    /** Exposes "shared" private functions/properties to external modules. */
    // [SHAREDACCESSKEY]!: SharedContent;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        const autoLaunch = this.getAttribute('autolaunch') != 'false';
        if(autoLaunch == true)
        {
            // this.initPromise = this.#init();
            this.#init();
        }
    }

    //#region API

    /**
    * Initializes the app.  
    * Not necessary if the `autolaunch` attribute was not set to `false`.
    */
    init()
    {
        // this.initPromise = this.#init();
        return this.#init();
    }
    setColorScheme(scheme: ColorScheme)
    {
        const value = (scheme == 'browser') ? 'light dark' : scheme;
        this.style.setProperty('color-scheme', value);
        DataService.saveAppSetting(AppSettingKey.ColorScheme, scheme);
    }

    async undo()
    {
        this.findElement<ConfigPanelElement>('config-panel').history_undo();
    }
    async redo()
    {
        this.findElement<ConfigPanelElement>('config-panel').history_redo();
    }

    async refreshBoards()
    {
        this.refreshBoardCollections();
        this.refreshCurrentBoard();
    }
    refreshCurrentBoard()
    {
        const currentBoardId = this.findElement('task-board').dataset.boardId;
        if(currentBoardId != null)
        {
            this.#renderBoard(currentBoardId);
        }
    }
    async refreshBoardCollections()
    {
        const boardRecords = await DataService.getAllBoardRecords();
        
        this.findElement<AppMenuElement>('app-menu').updateBoards(boardRecords);
        this.findElement<BoardBrowserElement>('board-browser').updateBoards(boardRecords);
    }
    async openBoard(id: string)
    {
        await this.closeBoard();
        await this.getElement<PathRouterElement>('app-router').navigate(`board/${id}`);
    }
    async closeBoard()
    {
        await this.findElement<PathRouterElement>('app-router').navigate('/' + window.location.hash);
        this.getElement('task-board').innerHTML = "";        
    }
    async addBoard()
    {
        const order = this.findElement('app-menu').querySelectorAll('a').length;
        const board = await DataService.createBoard(order);

        // await this.findElement<ConfigPanelElement>('config-panel')
        // .addActionHistoryEntry(HistoryEntryType.Create, HistoryEntryTargetType.Board, { id: board.id });

        this.findElement<AppMenuElement>('app-menu').refresh();
        this.findElement<WelcomePanelElement>('welcome-panel').refresh();
    }
    async openBoardSettings(id: string)
    {
        // await this.initPromise;

        const board = await DataService.getBoardRecord(id);
        if(board == null)
        {
            MessageCardElement.notify(`No board found with the target id (${id}).`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.warn(`No board found with the target id (${id}).`);
            return;
        }
        
        const taskLists = await DataService.getBoardLists(id);
        const taskSettingIds = taskLists.map(item => item.taskSettingsId);
        const taskSettings = await DataService.getTaskSettingsRecords(board.taskSettingsId, ...taskSettingIds);
        const boardTaskSettings = taskSettings.find(item => item.id == board.taskSettingsId);
        const listTaskSettings = taskSettings.filter(item => taskSettingIds.indexOf(item.id) > -1);
        
        if(boardTaskSettings == null)
        {
            MessageCardElement.notify(`An error occurred accessing task settings data.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.warn(`An error occurred accessing task settings data.`);
            return;
        }

        const backgroundImage = (board.backgroundImageId == "") ? null : await DataService.getImageRecord(board.backgroundImageId);

        const boardSettings =this.findElement<BoardSettingsElement>('board-settings');
        boardSettings.setValues(board, boardTaskSettings, backgroundImage);
        boardSettings.setLists(taskLists, listTaskSettings);
    }
    async exportBoard(id: string)
    {
        return DataService.exportBoard(this, id);
    }
    async importBoard(boardData: BoardExport, errorMessage?: string)
    {
        const order = this.findElement('app-menu').querySelectorAll('a').length;
        return DataService.importBoard(boardData, order, errorMessage);
    }

    async clearData()
    {
        this.findElement<ConfigPanelElement>('config-panel').clearData();
    }
    // async clearHistory()
    // {
    //     this.findElement<ConfigPanelElement>('config-panel').history_clear();
    // }
    //#endregion API

    // #addUndoNotification(message: string, entryId: string)
    // {
    //     const content = document.createElement('span');
    //     content.setAttribute('part', 'message-content');

    //     const messageText = document.createElement('span');
    //     messageText.setAttribute('part', 'undo-message');
    //     messageText.textContent = message;

    //     const messageButton = document.createElement('button');
    //     messageButton.setAttribute('part', 'notification-undo-button');
    //     messageButton.innerHTML = `<span part="button-label">Undo?</span>`;
    //     messageButton.type = 'button';

    //     content.append(messageText, messageButton);
    //     const notification = MessageCardElement.prepare(content, this.findElement('notifications'), { type: MessageCardType.Success, heading: "Success!" });
    //     messageButton.addEventListener('click', () =>
    //     {
    //         const entry = this.getElement<ActionHistoryElement>('action-history').querySelector(`[data-entry-id="${entryId}"]`) as HTMLElement;
    //         if(entry == null)
    //         {
    //             MessageCardElement.notify(`An error occurred restoring a record. The record was not restored`,
    //             this.findElement('notifications'), { type: MessageCardType.Error });
    //             return;
    //         }
    //         this.getElement<ActionHistoryElement>('action-history').reverseEntry(entry);
    //         notification.dispatchEvent(new CustomEvent(MessageCardEvent.Cancel));
    //         notification.remove();
    //     });
    //     notification.show();
    // }

    // async closeBoardSettings()
    // {
    //     return new Promise((resolve) =>
    //     {
    //         this.findElement<HTMLDialogElement>('board-settings-dialog').close();

    //         // wait for the settings to close and update the window location
    //         // to prevent the board settings from trying to open, after the
    //         // board has been closed and the new location still contains
    //         // the settings hash
    //         requestAnimationFrame(resolve);
    //     });
    // }
    

    // // async addTask(listId: string)
    // // {
    // //     const list = this.shadowRoot!.querySelector(`task-list[data-tasklist-id="${listId}"]`);
    // //     if(list == null)
    // //     {
    // //         this.#showMessageDialog('An error occurred creating a new task.', 'danger');
    // //         console.error(`An error occurred accessing task-list element. Unable to save new task.`);
    // //         return;
    // //     }

    // //     const newCard = new TaskCardElement();
    // //     list.append(newCard);
    // //     newCard.findPart('description').focus();
    // // }


    


    //#region Internal
    async #init()
    {
        const datastoreName = this.getAttribute('datastore-name');
        await DataService.init(datastoreName);

        FeedbackService.init(this);

        this.#loadColorScheme();

        // refresh boards
        const boardsPromise = this.refreshBoardCollections();

        // app menu

        // welcome page
        this.findElement<WelcomePanelElement>('welcome-panel').refresh();

        // task board

        // board-browser
        this.findElement<BoardBrowserElement>('board-browser').addEventListener('select', async (event: Event|CustomEvent) =>
        {
            const { boardId } = (event as CustomEvent).detail;
            if(boardId == null)
            {
                FeedbackService.showErrorMessageCard(`An error occurred attempting to open the board.`);
                console.error('Unable to open board: data-board-id attribute is unset on target element.');
                return;
            }
            this.findElement<PathRouterElement>('app-router').navigate(`board/${boardId}`)
        });

        // config-panel
        const appVersion = await this.#getAppVersion();
        this.findElement<ConfigPanelElement>('config-panel').init({
            appVersion,
            scheme_onChange: this.setColorScheme.bind(this),
            openImportManager: this.#openImportManager.bind(this),
            openBoard: this.openBoard.bind(this),
            refreshBoards: this.refreshBoards.bind(this),
        });

        // board-settings
        this.findElement<BoardSettingsElement>('board-settings').init({
            canAddList: this.#canAddList.bind(this)
        });

        // import-dialog
        

        // confirmation-dialog

        // notifications

        // loading

        // addAdminHandlers.call(this);
        // addNavigationhandlers.call(this);
        // // addDragHandlers.call(this);
        // addBoardHandlers.call(this);
        // addBoardSettingsHandlers.call(this);
        // addBoardBrowserHandlers.call(this);
        // addKeyHandlers.call(this);
        

        this.#addRouteHandlers();
        this.addEventListener('click', this.#onClick.bind(this))

        await this.#handleInitialNavigation(boardsPromise);

        DataService.removeExpiredData();
        // check each day if any deleted records expired
        setInterval(() =>
        {
            DataService.removeExpiredData();
        }, MILLISECONDSINDAY);


        this.#applyPartAttributes();
    }
    async #loadColorScheme()
    {
        const colorScheme = await DataService.getAppSetting(AppSettingKey.ColorScheme);
        if(colorScheme == null) { return; }
        this.setColorScheme(colorScheme);
    }
    #historyIsUpdating = false;
    #addRouteHandlers()
    {
        const appRouter = this.findElement<PathRouterElement>('app-router');
        appRouter.addRouteLinkClickHandlers(this.shadowRoot!);
        this.findElement<PathRouterElement>('app-router').addEventListener('pathchange', this.#router_onPathChange.bind(this));
        window.addEventListener('popstate', async (event) =>
        {
            this.#historyIsUpdating = true;
            const { windowPath, windowHash } = this.#parseWindowPath();
            let route = windowPath + windowHash;
            await appRouter.navigate(route);
            this.#historyIsUpdating = false;
        });

        this.findElement<RoutePageElement>('board-page').applyEventListener('beforeopen', this.#boardRoute_beforeOpen.bind(this));
        this.findElement<RoutePageElement>('board-settings-dialog').applyEventListener('beforeopen', this.#boardSettingsRoute_beforeOpen.bind(this));
    }
    async #handleInitialNavigation(boardsPromise: Promise<void>)
    {
        const { windowPath, windowHash } = this.#parseWindowPath();
        const filteredWindowHash = windowHash.replace('import', '');
        await this.getElement<PathRouterElement>('app-router').navigate(`${windowPath}#${filteredWindowHash}`);
        
        if(filteredWindowHash != windowHash)
        {
            // if the last session ended with a dialog open that
            // was not one allowed to be open on startup (like the 
            // import dialog), we update the url, as well as the router's path
            const newHistoryState =  `${window.origin}/demo/app.html?path=${windowPath}${(filteredWindowHash != "") ? `#${filteredWindowHash}` : ''}`;
            window.history.replaceState(null, '', newHistoryState);
        }
        
        await boardsPromise;
        
        let boardIdIndex = windowPath.indexOf('board/');
        if(boardIdIndex > -1)
        {
            const currentMenuItem = this.findElement('app-menu').querySelector(`[data-route="${windowPath}"]`);
            if(currentMenuItem != null)
            {
                currentMenuItem.setAttribute('aria-current', 'page');
                currentMenuItem.part.add('selected');
            }
        }
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

    //#region Management

    #initTaskCard(card: TaskCardElement, task: TaskRecord)
    {
        card.dataset.taskId = task.id;
        card.setAttribute('color', task.color)
        card.setAttribute('is-finished', task.isFinished.toString());
        card.setAttribute('description', task.description);
        card.setAttribute('draggable', "true");
        card.setAttribute('part', 'task-card');
        card.setAttribute('exportparts', "description: task-description, is-finished:task-checkbox, color-container:task-color-container, color:task-color, remove-button:task-remove-button, handle:task-handle, finished-indicator:task-finished-indicator, button, input, finished");
        card.style.setProperty('--task-color', task.color);
        // card.findElement('description').addEventListener('keyup', taskDescription_onKeyUp.bind(this));
    }

    async #openImportManager(data: any)
    {
        const boardData = new BoardExport(data, data.taskSettings, data.backgroundImage, data.lists);
        const router = this.findElement<PathRouterElement>('app-router');
        const currentPath = router.path ?? "";
        const currentPathArray = currentPath.split('#');
        currentPathArray[1] = 'import';
        const importPath = currentPathArray.join('#');
        router.navigate(importPath);
        this.findElement<ImportManagerComponent>('import-manager').setData(boardData);
    }
    //#endregion Management

    //#region Rendering
    async #renderBoard(id: string)
    {
        const board = await DataService.getBoardRecord(id);
        if(board == null)
        {
            this.findElement<PathRouterElement>('app-router').navigate('/');
            MessageCardElement.notify(`No board found with the target id (${id}). Navigated back to Welcome page.`, 
            this.getElement('notifications'), { type: MessageCardType.Warn });
            console.warn(`No board found with the target id (${id}). Navigated back to Welcome page.`);
            return;
        }
        const taskBoard = this.findElement<TaskBoardElement>('task-board');
        taskBoard.innerHTML = '';
        taskBoard.setAttribute('data-board-id', board.id);

        this.#renderBoardBackground(board);
        if(board.useCustomFontColor == true)
        {
            taskBoard.style.setProperty('--board-font-color', board.fontColor);
        }
        else
        {
            taskBoard.style.removeProperty('--board-font-color');
        }

        const settings = await DataService.getTaskSettingsRecord(board.taskSettingsId);
        if(settings != null)
        {
            this.#applyTaskSettings(taskBoard, settings);
        }

        const tasks = await DataService.getBoardTasks(id);
        await this.#renderBoardLists(taskBoard, tasks);
        
        const welcomePanel = this.findElement<WelcomePanelElement>('welcome-panel');
        await welcomePanel.addBoardToRecentBoards(id, board.name);
        welcomePanel.refresh();
    }
    async #renderBoardBackground(board: TaskBoardRecord)
    {
        // const channel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, 'danger');

        const taskBoard = this.findElement('task-board');
        if(board.backgroundImageId != null && board.backgroundImageId.trim() != "")
        {
            let backgroundImageUrl = this.#customImageUrls.get(board.backgroundImageId);
            if(backgroundImageUrl == null)
            {
                const backgroundImage = await DataService.getImageRecord(board.backgroundImageId);
                if(backgroundImage == null)
                {
                    MessageCardElement.notify(`No image found with the target id (${board.backgroundImageId}).`, 
                    this.getElement('notifications'), { type: MessageCardType.Warn });
                    throw new Error(`Unable to find background image from id: ${board.backgroundImageId}`);
                }
                if(backgroundImage.image == null) { throw new Error(`Cannot load custom image with null image property.`); }

                this.#customImageUrls.set(board.backgroundImageId, URL.createObjectURL(backgroundImage.image));
                backgroundImageUrl = this.#customImageUrls.get(board.backgroundImageId)
            }
    
            taskBoard.style.setProperty('--board-background-source', `url(${backgroundImageUrl})`);
        }
        else
        {
            taskBoard.style.removeProperty('--board-background-source');
        }

        
        if(board.backgroundDisplay == 'center')
        {
            taskBoard.style.removeProperty('--background-image-display');
            taskBoard.style.setProperty('--background-image-repeat', 'no-repeat');
            taskBoard.style.setProperty('--background-image-position', `calc(50% + ${board.backgroundOffsetX}px) calc(50% + ${board.backgroundOffsetY}px)`);
        }
        else if(board.backgroundDisplay == 'stretch')
        {
            taskBoard.style.setProperty('--background-image-repeat', 'no-repeat');
            taskBoard.style.setProperty('--background-image-display', 'cover');
            taskBoard.style.setProperty('--background-image-position', '0px 0px');
        }
        else if(board.backgroundDisplay == 'tile')
        {
            taskBoard.style.removeProperty('--background-image-display');
            taskBoard.style.removeProperty('--background-image-repeat');
            taskBoard.style.removeProperty('--background-image-position');
        }
        taskBoard.style.setProperty('--background-image-offset', `${board.backgroundOffsetX}px ${board.backgroundOffsetY}px`);

        if(board.useCustomBackgroundColor == true)
        {
            taskBoard.style.setProperty('--board-background-color', board.backgroundColor);
        }
        else
        {
            taskBoard.style.removeProperty('--board-background-color');
        }

    }
    async #renderBoardLists(board: TaskBoardElement, tasks: TaskRecord[])
    {
        const boardId = board.dataset.boardId;
        if(boardId == null)
        {
            MessageCardElement.notify(`An error occurred loading the board. Navigated back to Welcome page.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.error(new Error('Unable to add task when parent boards\'s data-board-id attribute is undefined.'));
            return;
        }

        const lists = await DataService.getBoardLists(boardId);
        const taskSettings = await DataService.getTaskSettingsRecords(...lists.map(item => item.taskSettingsId));
        const listElements = [];
        for(let i = 0; i < lists.length; i++)
        {
            const list = lists[i];
            if(list.deletedTimestamp != undefined) { continue; }
            const settings = taskSettings.find(item => item.id == list.taskSettingsId);
            if(settings == null)
            {
                MessageCardElement.notify(`An error occurred loading a list's settings. Some settings may not be displayed properly.`, 
                this.getElement('notifications'), { type: MessageCardType.Warn });
                console.warn(new Error(`Unable to find settings from list's taskSettingsId.`));
            }
            const element = new TaskListElement();
            element.setAttribute('name', list.name);
            element.setAttribute('color', list.color);
            element.setAttribute('data-tasklist-id', list.id);
            element.toggleAttribute('drag-drop', true);
            element.setAttribute('part', 'task-list');
            element.style.setProperty('--list-color', list.color);
            element.setAttribute('exportparts', "header:list-header, color-container:list-color-container, color:list-color, name:list-name, collapse-button:list-collapse, tasks:list-tasks, add-button:list-add-button, button, input, finished:task-finished");
            element.dragAndDropQueryParent = board;

            if(list.useCustomWidth == true)
            {
                element.style.setProperty('--list-width', `${list.width}px`);
                element.style.setProperty('flex-grow', '0');
            }
            else
            {
                element.style.removeProperty('--list-width');
                element.style.removeProperty('flex-grow');
            }

            const listTitle = (list.description == null || list.description.trim() == "") ? list.name : list.description;
            element.setAttribute('title', listTitle);

            if(list.useCustomBackgroundColor == true)
            {
                element.style.setProperty('--list-background-color', list.backgroundColor);
            }
            else
            {
                element.style.removeProperty('--list-background-color');
            }
            if(list.useCustomFontColor == true)
            {
                element.style.setProperty('--list-font-color', list.fontColor);
            }
            else
            {
                element.style.removeProperty('--list-font-color');
            }

            if(list.colorDisplay == TaskListColorDisplay.BorderColor)
            {
                element.classList.add('hide-color');
                element.style.setProperty('--list-border-color', list.color);
            }
            else if(list.colorDisplay == TaskListColorDisplay.FontColor)
            {
                element.classList.add('hide-color');
                element.style.setProperty('--list-font-color', list.color);
            }
            else
            {
                element.classList.remove('hide-color');
                element.style.removeProperty('--list-border-color');
                if(list.useCustomFontColor == false)
                {
                    element.style.removeProperty('--list-font-color');
                }
            }

            this.#applyTaskSettings(element, settings);

            this.#loadListTasks(element, tasks);
            listElements.push(element);
        }

        board.append(...listElements);
    }
    #loadListTasks(taskList: TaskListElement, tasks: TaskRecord[])
    {
        const listId = taskList.dataset.tasklistId;
        for(let i = 0; i < tasks.length; i++)
        {
            const taskElements: TaskCardElement[] = [];
            if(tasks[i].listId == listId)
            {
                const task = tasks[i];
                if(task.deletedTimestamp != undefined) { continue; }
                const taskElement = new TaskCardElement();
                this.#initTaskCard(taskElement, task);
                taskElements.push(taskElement);
            }
            taskList.append(...taskElements);
        }
    }
    #applyTaskSettings(target: HTMLElement, settings?: TaskSettingsRecord)
    {
        if(settings == null)
        {
            return;
        }
        if(settings.useCustomBackgroundColor == true)
        {
            target.style.setProperty('--task-background-color', settings.customBackgroundColor);
        }
        else
        {
            target.style.removeProperty('--task-background-color');
        }

        if(settings.useCustomFontColor == true)
        {
            target.style.setProperty('--task-font-color', settings.customFontColor);
        }
        else
        {
            target.style.removeProperty('--task-font-color');
        }

        if(settings.useCustomFontSize == true)
        {
            target.style.setProperty('--task-font-size', `${settings.customFontSize}px`);
        }
        else
        {
            target.style.removeProperty('--task-font-size');
        }

        if(settings.useCustomBorderColor == true)
        {
            target.style.setProperty('--task-border-color', settings.customBorderColor);
        }
        else
        {
            target.style.removeProperty('--task-border-color');
        }

        if(settings.useCustomBorderRadius == true)
        {
            target.style.setProperty('--task-border-radius', `${settings.borderRadiusValue}${settings.borderRadiusUnit}`);
        }
        else
        {
            target.style.removeProperty('--task-border-radius');
        }

        if(settings.colorDisplay == TaskColorDisplay.Hidden)
        {
            target.classList.remove('task-color-border');
            target.classList.remove('color-border-top');
            target.classList.remove('color-border-right');
            target.classList.remove('color-border-bottom');
            target.classList.remove('color-border-left');
            target.classList.remove('task-color-background');

            target.classList.add('hide-task-color');
        }
        else if(settings.colorDisplay == TaskColorDisplay.Borders)
        {
            target.classList.remove('hide-task-color');
            target.classList.remove('task-color-background');
            target.classList.remove('color-border-top');
            target.classList.remove('color-border-right');
            target.classList.remove('color-border-bottom');
            target.classList.remove('color-border-left');

            target.classList.add('task-color-border');
        }
        else if(settings.colorDisplay == TaskColorDisplay.TopBorder)
        {
            target.classList.remove('hide-task-color');
            target.classList.remove('task-color-background');
            target.classList.remove('color-border-right');
            target.classList.remove('color-border-bottom');
            target.classList.remove('color-border-left');

            target.classList.add('task-color-border', 'color-border-top');
        }
        else if(settings.colorDisplay == TaskColorDisplay.RightBorder)
        {
            target.classList.remove('hide-task-color');
            target.classList.remove('task-color-background');
            target.classList.remove('color-border-top');
            target.classList.remove('color-border-bottom');
            target.classList.remove('color-border-left');

            target.classList.add('task-color-border', 'color-border-right');
        }
        else if(settings.colorDisplay == TaskColorDisplay.BottomBorder)
        {
            target.classList.remove('hide-task-color');
            target.classList.remove('task-color-background');
            target.classList.remove('color-border-top');
            target.classList.remove('color-border-right');
            target.classList.remove('color-border-left');

            target.classList.add('task-color-border', 'color-border-bottom');
        }
        else if(settings.colorDisplay == TaskColorDisplay.LeftBorder)
        {
            target.classList.remove('hide-task-color');
            target.classList.remove('task-color-background');
            target.classList.remove('color-border-top');
            target.classList.remove('color-border-right');
            target.classList.remove('color-border-bottom');

            target.classList.add('task-color-border', 'color-border-left');
        }
        else if(settings.colorDisplay == TaskColorDisplay.Background)
        {
            target.classList.remove('hide-task-color');
            target.classList.remove('task-color-border');
            target.classList.remove('color-border-top');
            target.classList.remove('color-border-right');
            target.classList.remove('color-border-bottom');
            target.classList.remove('color-border-left');

            target.classList.add('task-color-background');
        }
        else
        {
            target.classList.remove('hide-task-color');
            target.classList.remove('task-color-border');
            target.classList.remove('color-border-top');
            target.classList.remove('color-border-right');
            target.classList.remove('color-border-bottom');
            target.classList.remove('color-border-left');
            target.classList.remove('task-color-background');
        }

        if(settings.centerCheckbox == true)
        {
            target.classList.add('center-checkbox');
        }
        else
        {
            target.classList.remove('center-checkbox');
        }
        if(settings.centerRemoveButton == true)
        {
            target.classList.add('center-remove');
        }
        else
        {
            target.classList.remove('center-remove');
        }
        
        if(settings.useCustomWidth == true)
        {
            target.style.setProperty('--task-width', `${settings.customWidth}px`);
        }
        else
        {
            target.style.removeProperty('--task-width');
        }
        
        if(settings.useCustomBorderWidth_top == true)
        {
            target.style.setProperty('--task-border-top', `${settings.useCustomBorderWidth_top}px`);
        }
        else
        {
            target.style.removeProperty('--task-border-top');
        }
        if(settings.useCustomBorderWidth_right == true)
        {
            target.style.setProperty('--task-border-right', `${settings.borderWidth_right}px`);
        }
        else
        {
            target.style.removeProperty('--task-border-right');
        }
        if(settings.useCustomBorderWidth_bottom == true)
        {
            target.style.setProperty('--task-border-bottom', `${settings.borderWidth_bottom}px`);
        }
        else
        {
            target.style.removeProperty('--task-border-bottom');
        }
        if(settings.useCustomBorderWidth_left == true)
        {
            target.style.setProperty('--task-border-left', `${settings.borderWidth_left}px`);
        }
        else
        {
            target.style.removeProperty('--task-border-left');
        }
    }
    //#endregion Rendering

    //#region Handlers
    #onClick(event: Event)
    {
        const composedPath = event.composedPath().filter(item => item instanceof HTMLElement);

        // todo: move to app menu
        const editButton = composedPath.find(item => item.classList.contains('board-edit-button'));
        if(editButton != null)
        {
            this.#board_edit_onClick(editButton.parentElement!.dataset.route);
            return;
        }

        const newBoardButton = composedPath.find(item => item.classList.contains('new-board-button'));
        if(newBoardButton != null)
        {
            this.#newBoard_onClick();
            return;
        }

        // todo: move to config?
        const importOkButton = composedPath.find(item => item.id == 'import-ok');
        if(importOkButton != null)
        {
            this.#importDialog_import_onClick();
            return;
        }

        console.log(event.target);
    }
    #board_edit_onClick(boardRoute?: string)
    {
        if(boardRoute == null)
        {
            MessageCardElement.notify(`An error occurred attempting to open the board for editing.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            throw new Error("Unable to collected path from board item's path attribute.");
        }
        
        this.findElement<PathRouterElement>('app-router').navigate(`${boardRoute}#board-settings`);
    }
    async #newBoard_onClick()
    {
        this.addBoard();
    }

    #router_onPathChange(event: Event|CustomEvent)
    {
        // if we're moving back or forward,
        // we don't want to record that in history
        // and the browser will update the url
        if(this.#historyIsUpdating == true) { return; }
    
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
    
        // const item = event.composedPath().find(item => item instanceof HTMLElement ? item.part.contains('board-menu-item') : false) as HTMLElement;
        // if(item == null) { return; }
    
        const items = [...this.findElement('app-menu').querySelectorAll('a')];
        for(let i = 0; i < items.length; i++)
        {
            items[i].part.remove('selected');
        }
    
        if(pageRoute != null)
        {
            const currentMenuItem = this.findElement('app-menu').querySelector(`[data-route="${pageRoute}"]`);
            if(currentMenuItem != null)
            {
                currentMenuItem.setAttribute('aria-current', 'page');
                currentMenuItem.part.add('selected');
            }
        }
        if(hashRoute != null)
        {
            if(hashRoute.indexOf('config') == -1)
            {
                return;
            }
    
            const configRoute = hashRoute.substring(7);
            const configPanel = this.findElement('config-panel') as ConfigPanelElement;
            const configMenuItems = [...configPanel.findElement('config-navigation').querySelectorAll(`a`)];
            for(let i = 0; i < configMenuItems.length; i++)
            {
                configMenuItems[i].toggleAttribute('aria-current', false);
                configMenuItems[i].classList.toggle('selected', false);
                configMenuItems[i].part.toggle('selected', false);
            }
            configPanel.findElement('config-router').setAttribute('path', configRoute);
    
            const menuItem = configPanel.findElement('config-navigation')
            .querySelector(`[data-route="#${hashRoute}"]`);
            if(menuItem == null) { return; }
    
            menuItem.setAttribute('aria-current', 'page');
            menuItem.part.toggle('selected', true);
            menuItem.classList.toggle('selected', true);
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
    #boardRoute_beforeOpen(event: Event|CustomEvent)
    {
        const data = (event as CustomEvent).detail;
        const boardId = data.properties.id;
        if(boardId == null)
        {
            MessageCardElement.notify(`An error occurred attempting to open the board.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            throw new Error('Unable to open board route with unknown id');
        }
        this.#renderBoard(boardId);
        this.findElement<WelcomePanelElement>('welcome-panel').updateRecentBoardEntry(boardId);
    }
    async #boardSettingsRoute_beforeOpen(_event: Event|CustomEvent)
    {
        const router = this.findElement<PathRouterElement>('app-router');
        const properties = await router.getRouteProperties();
        if(properties.id == null)
        {
            MessageCardElement.notify(`An error occurred attempting to open the board for editing.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            throw new Error('Unable to determine the selected board\'s id');
        }

        this.openBoardSettings(properties.id as string);
    }
    async #importDialog_import_onClick()
    {
        const boardData = this.findElement<ImportManagerComponent>('import-manager').getRecord();
        await this.importBoard(boardData);

        this.refreshBoardCollections();
    }

    //#endregion Handler


    //#region Utilities
    async #getAppManifest()
    {
        const manifestLink = document.head.querySelector('link[rel="manifest"]');
        const manifestRef = manifestLink?.getAttribute('href');
        if(manifestRef == null)
        {
            return;
        }

        const manifestData = await fetch(manifestRef);
        const manifest = await manifestData.json();
        return manifest;
    }
    async #getAppVersion()
    {
        const manifest = await this.#getAppManifest();
        if(manifest == null)
        {
            console.warn(`A manifest file could not be found linked in the index document's head. The app's version information could not be determined.`);
            return DEFAULT_APP_VERSION;
        }
        return manifest.version as string;
    }
    #parseWindowPath()
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
    #canAddList()
    {
        const route = this.getElement('app-router').getAttribute('path');
        if(route == null)
        {
            return false;
        }
        const boardOrSettingsAreOpen = route.includes('#board-settings') || route.includes('board');
        if(!boardOrSettingsAreOpen)
        {
            return false;
        }
        return true;
    }

    //#endregion Utilities

    //#endregion Internal


    // async #updateBoardSettings()
    // {
    //     const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
    //     const listChannel = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, 'danger');
    //     const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, 'danger');
    //     const imageChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, 'danger');

    //     const boards = this.findElement('boards');

    //     const boardSettings = this.findElement<BoardSettingsElement>('board-settings');
    //     const [ board, taskLists, taskSettings, removedListIds ] = boardSettings.getRecords();

    //     const [existingBoard, existingTaskLists, existingTaskSettings ] = await Promise.all([
    //         boardChannel.get(board.id),
    //         (await boardChannel.getTaskLists(board.id)).filter(item => item.deletedTimestamp == undefined),
    //         taskSettingsChannel.getItems(taskSettings.map(item => item.id))
    //     ]);
    //     if(existingBoard == null)
    //     { 
    //         MessageCardElement.notify(`An error occurred saving a task board.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         console.error(`An error occurred finding the existing board record.`);
    //         return;
    //     }
        
    //     const boardItem = boards.querySelector(`a[data-route*="${board.id}"]`) as HTMLAnchorElement;
    //     if(boardItem == null)
    //     {
    //         MessageCardElement.notify(`An error occurred saving a task board.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         console.error(`An error occurred finding the board's menu item.`);
    //         return;
    //     }
    //     board.order = [...this.shadowRoot!.querySelectorAll('a')].indexOf(boardItem);
    //     board.backgroundImageId = existingBoard.backgroundImageId;


    //     // convert backgroundImage into backgroundImageUpdates
    //     let existingImageActionProperties: CustomImageActionProperties = { id: board.backgroundImageId, updates: new Map() };
    //     const imageUpdates: CustomImageActionProperties[] = [];

    //     const imageValue = boardSettings.findElement<FileImageInputElement>('background-image').value;
    //     let backgroundImageRecord: CustomImageRecord|null = null;
    //     if(imageValue != null)
    //     {
    //         if(board.backgroundImageId != "")
    //         {
    //             const existingImage = await imageChannel.get(board.backgroundImageId);
    //             if(existingImage != null)
    //             {
    //                 await imageChannel.delete(existingImage.id);
    //                 const deletedImage = await imageChannel.get(board.backgroundImageId);
    //                 existingImageActionProperties.updates!.set('deletedTimestamp', { from: undefined, to: deletedImage?.deletedTimestamp });
    //                 imageUpdates.push(existingImageActionProperties);
    //             }
    //         }

    //         backgroundImageRecord = imageChannel.createFromImage(imageValue);
    //         backgroundImageRecord.boardId = board.id;
    //         backgroundImageRecord = await imageChannel.save(backgroundImageRecord);
    //         const newImageActionUpdates = { id: backgroundImageRecord.id, updates: new Map([['boardId', { from: "", to: backgroundImageRecord.boardId }]]) };
    //         imageUpdates.push(newImageActionUpdates);

    //         board.backgroundImageId = backgroundImageRecord.id;
    //     }
    //     else
    //     {
    //         if(board.backgroundImageId != "")
    //         {
    //             await imageChannel.delete(board.backgroundImageId);
    //             const deletedImage = await imageChannel.get(board.backgroundImageId);
    //             existingImageActionProperties.updates!.set('deletedTimestamp', { from: undefined, to: deletedImage?.deletedTimestamp });
    //             imageUpdates.push(existingImageActionProperties);
    //             board.backgroundImageId = "";
    //         }
    //     }

    //     // save data
    //     await Promise.allSettled([
    //         boardChannel.save(board),
    //         listChannel.saveItems(taskLists),
    //         taskSettingsChannel.saveItems(taskSettings),
    //         this.#data.lists!.deleteItems(removedListIds),
    //     ]);

        
    //     MessageCardElement.notify(`The board settings have been saved successfully!`, 
    //     this.getElement('notifications'), { type: MessageCardType.Success, heading: "Success!" });

    //     // update action history
    //     const [ 
    //         boardActionProperties,
    //         listActionProperties
    //     ] = this.#data.boardUpdate_getActionProperties({ existing: existingBoard, updated: board }
    //     ,{ existing: existingTaskLists, updated: taskLists }
    //     ,{ existing: existingTaskSettings, updated: taskSettings });

    //     // console.log(boardActionProperties, listActionProperties);

    //     if(boardActionProperties != null && imageUpdates.length > 0)
    //     {
    //         if(boardActionProperties.backgroundImages != null)
    //         {
    //             boardActionProperties.backgroundImages = boardActionProperties.backgroundImages.concat(imageUpdates);
    //         }
    //         else if(boardActionProperties.backgroundImages == null)
    //         {
    //             boardActionProperties.backgroundImages = imageUpdates;
    //         }

    //         await this.#addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.Board, boardActionProperties);
    //     }

    //     for(let i = 0; i < listActionProperties.length; i++)
    //     {
    //         const actionProperties = listActionProperties[i];
    //         await this.#addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.List, actionProperties);
    //     }

    //     const existingListIds = new Set(existingTaskLists.filter(item => item != undefined).map(item => item.id));
    //     const currentListIds = new Set(taskLists.filter(item => item != undefined).map(item => item.id));
    //     const addedLists = taskLists.filter(item => item != undefined && !existingListIds.has(item.id));
    //     for(let i = 0; i < addedLists.length; i++)
    //     {
    //         const addedList = addedLists[i];
    //         await this.#addActionHistoryEntry(HistoryEntryType.Create, HistoryEntryTargetType.List, { id: addedList.id });
    //     }
    //     const removedLists = existingTaskLists.filter(item => item != undefined && !currentListIds.has(item.id));
    //     for(let i = 0; i < removedLists.length; i++)
    //     {
    //         const removedList = removedLists[i];
    //         await this.#addActionHistoryEntry(HistoryEntryType.Delete, HistoryEntryTargetType.List, { id: removedList.id });
    //     }

    //     // update recent entries
    //     this.#updateRecentBoardEntry(board.id, board.name);
    // }
    // #registerSharedData()
    // {
    //     this[SHAREDACCESSKEY] = 
    //     {
    //         data: this.#data,

    //         refreshBoards: this.#refreshBoards.bind(this),
    //         refreshActionHistory: this.#refreshActionHistory.bind(this),
    //         refreshDeletedItems: this.#refreshDeletedItems.bind(this),

    //         saveAppSetting: this.#saveAppSetting.bind(this),

    //         // restoreDeletedItem: this.#restoreDeletedItem.bind(this),

    //         // handleActionEntryReverse: this.#handleActionEntryReverse.bind(this),
    //         // handelActionEntryActivate: this.#handelActionEntryActivate.bind(this),
    //         // prepareHistoryEntries: this.#prepareHistoryEntries.bind(this),
    //         // applyHistoryLength: this.#applyHistoryLength.bind(this),

    //         renderBoard: this.#renderBoard.bind(this),
    //         updateBoardSettings: this.#updateBoardSettings.bind(this),
    //         // updateBoardItemOrder: this.#updateBoardItemOrder.bind(this),

    //         updateListRecord: this.#updateListRecord.bind(this),
    //         duplicateList: this.#duplicateList.bind(this),
    //         // updateBoardRecordsAfterMove: this.#updateBoardRecordsAfterMove.bind(this),
    //         updateRecentBoardEntry: this.#updateRecentBoardEntry.bind(this),
    //         removeBoardFromRecentBoards: this.#removeBoardFromRecentBoards.bind(this),

    //         registerTaskCard: this.#registerTaskCard.bind(this),
    //         updateTaskRecord: this.#updateTaskRecord.bind(this),
    //         updateTaskRecordsAfterMove: this.#updateTaskRecordsAfterMove.bind(this),
    //         deleteTaskRecord: this.#deleteTaskRecord.bind(this),

    //         openImportManager: this.#openImportManager.bind(this),

    //         getConfirmation: this.#getConfirmation.bind(this),
    //         getIdFromRoute: this.#getIdFromRoute.bind(this),

    //     }
    // }
    


    // // boards
    // // #createBoardMenuItem(boardRecord: TaskBoardRecord)
    // // {
    // //     const element = document.createElement('a');
    // //     element.innerHTML = `<span part="menu-item-handle" class="menu-item-handle"></span><span part="board-item-name" class="board-item-name">${boardRecord.name}<span>`;
    // //     // element.setAttribute('part', 'board-menu-item');
    // //     element.classList.add('board-menu-item');
    // //     element.dataset.route = `board/${boardRecord.id}`;
    
    // //     const handle = element.querySelector('[part="menu-item-handle"]')!;
    // //     handle.addEventListener('mousedown', (_event) =>
    // //     {
    // //         element.draggable = true;
    // //     });
    // //     handle.addEventListener('mouseup', (_event) =>
    // //     {
    // //         element.removeAttribute('draggable');
    // //     });
    // //     element.addEventListener('dragstart', (_event: DragEvent) => 
    // //     {
    // //         this.#draggingBoard = element;
    // //         element.classList.add('dragging');
    // //         this.classList.add('drop-target');
    // //     });
    // //     element.addEventListener('dragend', (_event: DragEvent) => 
    // //     {
    // //         element.classList.remove('dragging');
    // //         this.#draggingBoard = null;
    // //         this.classList.remove('drop-target');
    // //     });

    // //     return element;
    // // }
    // // #createBoardCollectionItem(boardRecord: TaskBoardRecord)
    // // {
    // //     const element = new CaptionedThumbnailElement();
    // //     element.innerHTML = `<svg part="board-browser-icon" slot="icon">
    // //         <use href="#icon-definition_task-board"></use>
    // //     </svg>
    // //     ${boardRecord.name}`;
    // //     element.setAttribute('data-board-id', boardRecord.id);
    // //     element.toggleAttribute('select', true);
    // //     return element;
    // // }
    
    // // async #updateBoardItemOrder(draggingCursorY: number)
    // // {
    // //     if(this.#draggingBoard == null)
    // //     {
    // //         return;
    // //     }

    // //     const boards = this.findElement('boards');
    // //     const nextElement = this.#getNextBoardItem(draggingCursorY).boardElement;
        
    // //     // prevent unecessary re-renders; this can kill perf, if you don't guard here;
    // //     // re-rendering by appending or inserting on every mouse-move is heavy;
    // //     if(this.#draggingBoard.parentElement == boards && nextElement == this.#draggingBoard.nextElementSibling){ return; }


    // //     if(nextElement == null)
    // //     {
    // //         boards.append(this.#draggingBoard);
    // //     }
    // //     else
    // //     {
    // //         boards.insertBefore(this.#draggingBoard, nextElement);
    // //     }
    // // }


    // // #getNextBoardItem(mouseY: number)
    // // {
    // //     const lists = [...this.findElement('boards').querySelectorAll('a:not(.dragging)')] as HTMLElement[];
    // //     return lists.reduce((closest: { offset: number, boardElement?:HTMLElement }, item: HTMLElement) =>
    // //     {
    // //         const boundingRect = item.getBoundingClientRect();
    // //         const offset = mouseY - boundingRect.top - (boundingRect.height / 2);
    // //         if(offset < 0 && offset > closest.offset)
    // //         {
    // //             return { offset, boardElement: item };
    // //         }
    // //         return closest;
    // //     }, { offset: Number.NEGATIVE_INFINITY });
    // // }

    

    // // lists

    // async #updateListRecord(taskListComponent: TaskListElement)
    // {
    //     const lists = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, 'danger');

    //     const id = taskListComponent.dataset.tasklistId;
    //     if(id == null)
    //     {
    //         MessageCardElement.notify(`An error occurred saving a task list.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error("Unable to update tasklist with unset \'data-tasklist-id\' attribute");
    //     }
    //     const taskList = await lists.get(id);
    //     if(taskList == null)
    //     {
    //         MessageCardElement.notify(`An error occurred saving a task list.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error(`Unable to update tasklist. No tasklist found with target id (${id}).`);
    //     }

    //     const listPreviousName = taskList.name;
    //     const inputNameValue = taskListComponent.findElement<HTMLInputElement>('name').value;
    //     const listPreviousColor = taskList.color;
    //     const inputColorValue = taskListComponent.findElement<HTMLInputElement>('color').value;

    //     taskList.name = inputNameValue;
    //     taskList.color = inputColorValue;

    //     await lists.save(taskList);

    //     const updates: Map<string, PropertyUpdate> = new Map();
    //     if(listPreviousName != taskList.name)
    //     {
    //         updates.set('name', { from: listPreviousName, to: taskList.name })
    //     }
    //     if(listPreviousColor != taskList.color)
    //     {
    //         updates.set('color', { from: listPreviousColor, to: taskList.color })
    //     }

    //     const properties: ListActionProperties = {
    //         id: taskList.id,
    //         updates
    //     };

    //     await this.#addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.List, properties);
    // }
    

    // // tasks
    // async #getOrderedTasks(tasklist: TaskListElement)
    // {
    //     const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');

    //     const orderedIds: string[] = [];
    //     const taskItems = [...tasklist.querySelectorAll('task-card')] as HTMLElement[];
    //     for(let i = 0; i < taskItems.length; i++)
    //     {
    //         const item = taskItems[i];
    //         const id = item.getAttribute('data-task-id')!;
    //         if(id == null) { throw new Error('Unset task id'); }
    //         orderedIds.push(id);
    //     }

    //     const tasks = await channel.getItems(orderedIds);

    //     const orderedTasks = [];
    //     for(let i = 0; i < orderedIds.length; i++)
    //     {
    //         const board = tasks[tasks.findIndex(value => value.id == orderedIds[i])];
    //         if(board == null) { throw new Error("Unknown task"); }
    //         board.order = i;
    //         orderedTasks.push(board);
    //     }

    //     return orderedTasks;
    // }
    // async #getTaskFromComponent(taskComponent: TaskCardElement)
    // {
    //     const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');
    //     const id = taskComponent.dataset.taskId;
    //     if(id == null)
    //     {
    //         MessageCardElement.notify(`An error occurred identifying a task.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error("Unable to update task with unset \'data-tasklist-id\' attribute");
    //     }
    //     const task = await channel.get(id);
    //     if(task == null)
    //     {
    //         MessageCardElement.notify(`An error occurred identifying a task.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error(`Unable to update task. No task found with target id (${id}).`);
    //     }
    //     return task;
    // }

    // async #registerTaskCard(card: TaskCardElement, listId: string, order: number)
    // {
    //     const errorMessage = 'An error occured creating a new Task. Refreshing the application may help. If the problem persists, more detail can be found in your browsers development tools.';
    //     if(listId == null)
    //     {
    //         this.#showMessageDialog(errorMessage);
    //         throw new Error('Unable to add task when parent list\'s data-tasklist-id attribute is undefined.');
    //     }
    //     const boardId = this.findElement('task-board').dataset.boardId;
    //     if(boardId == null)
    //     {
    //         this.#showMessageDialog(errorMessage);
    //         throw new Error('Unable to add task when parent boards\'s data-board-id attribute is undefined.');
    //     }

    //     const task = await this.#addTaskRecord(boardId, listId, order);
    //     if(task == undefined)
    //     {
    //         return;
    //     }
    //     this.#initTaskCard(card, task);
    // }
    // async #addTaskRecord(boardId: string, listId: string, order: number)
    // {
    //     const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');
    //     const task = channel.create(boardId, listId);
    //     task.order = order;
    //     await channel.save(task);

    //     this.#addActionHistoryEntry(HistoryEntryType.Create, HistoryEntryTargetType.Task, { id: task.id });

    //     return task;
    // }
    // async #updateTaskRecord(taskComponent: TaskCardElement, parentList: TaskListElement)
    // {
    //     const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');

    //     const listId = parentList.dataset.tasklistId;
    //     if(listId == null)
    //     {
    //         MessageCardElement.notify(`An error occurred saving a task.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error('Unable to update task when parent list\'s data-tasklist-id attribute is not available.');
    //     }

    //     const task = await this.#getTaskFromComponent(taskComponent);

    //     const previousValues = structuredClone(task);

    //     task.listId = listId;
    //     task.color = taskComponent.findElement<HTMLInputElement>('color').value;
    //     task.isFinished = taskComponent.findElement<HTMLInputElement>('is-finished').checked;
    //     task.description = taskComponent.value ?? "";
        
    //     const tasks = [...parentList.querySelectorAll('task-card')] as TaskCardElement[];
    //     task.order = tasks.indexOf(taskComponent);
    //     if(task.order == -1)
    //     {
    //         console.warn('Unable to find index of task in parent list');
    //         task.order = tasks.length;
    //     }

    //     await channel.save(task);

    //     const diff: { [key: string]: string|number|boolean } = Object.fromEntries(Object.entries(previousValues)
    //     .filter(([key, value]) => value !== (task as unknown as any)[key]));

    //     const updates: Map<string, PropertyUpdate> = new Map();
    //     for(const [key, value] of Object.entries(diff))
    //     {
    //         updates.set(key, { from: value, to: (task as unknown as any)[key] });
    //     }

    //     const properties: ListActionProperties = {
    //         id: task.id,
    //         updates
    //     };

    //     await this.#addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.Task, properties);
    // }
    // async #deleteTaskRecord(taskComponent: TaskCardElement)
    // {
    //     const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');
    //     const id = taskComponent.dataset.taskId;
    //     if(id == null)
    //     {
    //         MessageCardElement.notify(`An error occurred deleting a task.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         throw new Error('Unable to delete task when task\'s data-task-id attribute is not available.');
    //     }

    //     await channel.delete(id);

    //     const entry = await this.#addActionHistoryEntry(HistoryEntryType.Delete, HistoryEntryTargetType.Task, { id });
    //     if(entry != null)
    //     {
    //         this.#addUndoNotification("A task was just deleted", entry.getAttribute('data-entry-id')!);
    //     }
    // }
    // async #updateTaskRecordsAfterMove(target: TaskCardElement, parent: TaskListElement)
    // {
    //     await this.#updateTaskRecord(target, parent);

    //     if(this.#data.tasks == null)
    //     {
    //         MessageCardElement.notify(`An error occurred moving a task.`, 
    //         this.getElement('notifications'), { type: MessageCardType.Error });
    //         console.warn(`An error occurred accessing task data. Unable to save task order.`);
    //         return;
    //     }

    //     const toSave = await this.#getOrderedTasks(parent);
    //     await this.#data.tasks.saveItems(toSave); 
    // }



    



    // //utils
    
    // #getIdFromRoute()
    // {
    //     const pathAttribute = this.findElement('app-router').getAttribute('path') ?? "";
    //     if(pathAttribute == null)
    //     {
    //         throw new Error('Unable to edit board data when path data is unavailable');
    //     }
    //     const attributeArray = pathAttribute.split('#');
    //     const path = attributeArray[0];
    //     const pathArray = path.split('/');
    //     const id = pathArray[pathArray.length-1];
    //     return id;
    // }
    
    // #getConfirmation(message: string, type: 'info'|'warn'|'danger' = 'info')
    // {
    //     this.getElement('confirmation-dialog').querySelector(`route-page[path="${type}"]`)!.innerHTML = message;
    //     this.getElement<HTMLDialogElement>('confirmation-dialog').showModal();
    //     this.getElement<PathRouterElement>('confirmation-router').navigate(type);
    //     return new Promise<boolean>((resolve) => 
    //     {
    //         this.getElement<HTMLDialogElement>('confirmation-dialog-form').addEventListener('submit', (event) =>
    //         {
    //             if((event as SubmitEvent).submitter == this.getElement('confirmation-confirm-button'))
    //             {
    //                 resolve(true);
    //                 return;
    //             }
    //             resolve(false);
    //         }, { once: true });
    //     });
    // }
    // #showMessageDialog(message: string, type: 'info'|'warn'|'danger' = 'info')
    // {
    //     const dialog = this.getElement<HTMLDialogElement>('confirmation-dialog');
    //     dialog.querySelector(`path-route[path="${type}"]`)!.innerHTML = message;
    //     dialog.show();
    //     dialog.classList.add('message');
    //     this.getElement<PathRouterElement>('confirmation-router').navigate(type);
    //     return new Promise<void>((resolve) => 
    //     {
    //         this.getElement<HTMLDialogElement>('confirmation-dialog-form').addEventListener('submit', (event) =>
    //         {
    //             dialog.classList.remove('message');
    //             resolve();
    //         }, { once: true });
    //     });
    // }

}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskboardManagerElement);
}