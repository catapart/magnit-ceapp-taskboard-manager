// styles
import sharedStyles from './styles/shared.css?raw';
import browserItemStyles from './components/board-browser/browser-item.global.css?raw';

import settingsStyle from './styles/settings.css?raw';
import componentStyle from './taskboard-manager.css?raw';
// html
import html from './taskboard-manager.html?raw';
// icons
import { defineIcons, IconType } from './assets/icons/icons.asset';

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

import { TaskRecord } from './data/records/task.record';
import { TaskListColorDisplay, TaskListRecord } from './data/records/task-list.record';
import { TaskColorDisplay, TaskSettingsRecord } from './data/records/task-settings.record';
import { BoardExport } from './data/foreign/exported-board';
import { TaskBoardRecord } from './data/records/task-board.record';
import { HistoryEntryTargetType, PropertyUpdate } from './data/history/history-entry-data';
import { ListActionProperties } from './data/history/list-action-properties';
import { CustomImageActionProperties } from './data/history/custom-image-action-properties';
import { TaskListElement } from '@magnit-ce/task-list';
import { TaskCardElement } from '@magnit-ce/task-card';
import { PathRouterElement, RoutePageElement} from '@magnit-ce/path-router';
import { MessageCardElement, MessageCardEvent, MessageCardType } from '@magnit-ce/message-card';
import { TaskBoardElement } from '@magnit-ce/task-board';
import { ActionHistoryElement, HistoryEntryType } from '@magnit-ce/action-history';
import { ImportManagerComponent } from './components/import-manager/import-manager.component';
import { addKeyHandlers } from './resources/key.handlers';
import { AppMenuElement } from './components/app-menu/app-menu';
import { WelcomePanelElement } from './components/welcome-panel/welcome-panel';
import { BoardBrowserElement } from './components/board-browser/board-browser';
import { BoardSettingsElement } from './components/board-settings/board-settings';
import { ConfigPanelElement } from './components/config-panel/config-panel';
import { AppSettingKey, DataService, MILLISECONDSINDAY } from './data/data.service';
import { FeedbackService } from './services/feedback.service';
import { ColorScheme } from './components/config-panel/settings-panel/settings-panel';
import { assignPartsAsExportPartsAttribute } from './libs/ce-part-utils/ce-part-utils';


const DEFAULT_APP_VERSION = "--.--.--";


const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
${browserItemStyles}
${settingsStyle}
${componentStyle}`);



const COMPONENT_TEMPLATE = `${html}
${defineIcons(
    IconType.LogoMark,
    IconType.LogoType,
    IconType.Logo,
    IconType.PlusIcon,
    IconType.Stylus,
    IconType.TaskBoard,
    IconType.UndoRedo,
    IconType.CloseCross,
)}`;

const COMPONENT_TAG_NAME = 'taskboard-manager';
export class TaskboardManagerElement extends HTMLElement
{
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

    #customImageUrls: Map<string,string> = new Map();

    #rootPath: string = "";

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        const autoLaunch = this.getAttribute('autolaunch') != 'false';
        if(autoLaunch == true)
        {
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
        return this.#init();
    }
    setColorScheme(scheme: ColorScheme)
    {
        const value = (scheme == 'browser') ? 'light dark' : scheme;
        this.style.setProperty('color-scheme', value);
        const className = `scheme-${value.replace(' ', '-')}`;
        this.classList.remove('scheme-light', 'scheme-dark', 'scheme-inherit', 'scheme-light-dark');
        this.classList.add(className);
        const boardSettings = this.findElement<BoardSettingsElement>('board-settings');
        boardSettings.style.setProperty('color-scheme', value);
        const tasklistSettings = [...boardSettings.shadowRoot!.querySelectorAll('.tasklist-settings')] as TaskListElement[];
        for(let i = 0; i < tasklistSettings.length; i++)
        {
            tasklistSettings[i].style.setProperty('color-scheme', value);
        }
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
        await this.refreshBoardCollections();
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
        
        this.findElement<AppMenuElement>('app-menu-container').updateBoards(boardRecords);
        this.findElement<BoardBrowserElement>('board-browser').updateBoards(boardRecords);
    }
    async openBoard(id: string)
    {
        await this.closeBoard();
        await this.getElement<PathRouterElement>('app-router').navigate(`board/${id}`);
    }
    async refreshBoard()
    {
        // refresh items that reference the board's properties (name, description, etc)
        await this.refreshBoards();
        this.findElement<ConfigPanelElement>('config-panel').refreshCache();

        // refresh board
        const id  =this.findElement<BoardSettingsElement>('board-settings').getAttribute('record-id');
        if(id == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred saving the board settings.`);
            throw new Error('Unable to determine the target board\'s id');
        }
    }
    async closeBoard()
    {
        await this.findElement<PathRouterElement>('app-router').navigate('/' + window.location.hash);
        this.getElement('task-board').innerHTML = "";
        
        const selectedMenuItems = [...this.findElement('app-menu-container').shadowRoot!.querySelectorAll(`[aria-current]`)] as HTMLElement[];
        for(let i = 0; i < selectedMenuItems.length; i++)
        {
            selectedMenuItems[i].removeAttribute('aria-current');
            selectedMenuItems[i].classList.remove('selected');
            selectedMenuItems[i].part.remove('selected');
        }
    }
    async addBoard()
    {
        const order = this.findElement('app-menu-container').shadowRoot!.querySelectorAll('a').length;
        const board = await DataService.createBoard(order);

        await this.findElement<ConfigPanelElement>('config-panel')
        .addActionHistoryEntry(HistoryEntryType.Create, HistoryEntryTargetType.Board, { id: board.id });

        this.refreshBoardCollections();
        // await this.findElement<AppMenuElement>('app-menu-container').refresh();
        await this.findElement<WelcomePanelElement>('welcome-panel').refresh();

        return board;
    }
    editBoard(boardId: string)
    {        
        this.findElement<PathRouterElement>('app-router').navigate(`board/${boardId}#board-settings`);
    }
    async openBoardSettings(id: string)
    {
        // await this.initPromise;

        const board = await DataService.getBoardRecord(id);
        if(board == null)
        {
            FeedbackService.showErrorMessageCard(`No board found with the target id (${id}).`);
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
            FeedbackService.showErrorMessageCard(`An error occurred accessing task settings data.`);
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
        const order = this.findElement('app-menu-container').shadowRoot!.querySelectorAll('a').length;
        return DataService.importBoard(boardData, order, errorMessage);
    }
    async removeBoard(boardId: string, confirm: boolean = true)
    {
        const confirmed = await FeedbackService.getConfirmation('Are you sure you want to delete this board and all of its tasks, lists, and images?', 'warn');
        if(confirm == true && confirmed == false)
        {
            return;
        }

        if(this.findElement('app-router').getAttribute('path')?.indexOf(boardId) != null)
        {
            this.closeBoard();
        }
        await this.closeBoardSettings();

        await DataService.deleteBoard(boardId);

        const configPanel = this.findElement<ConfigPanelElement>('config-panel');
        const welcomePanel = this.findElement<WelcomePanelElement>('welcome-panel');
        const entry = await configPanel.addActionHistoryEntry(HistoryEntryType.Delete, HistoryEntryTargetType.Board, { id: boardId });
        this.refreshBoardCollections();
        configPanel.refreshCache();
        await welcomePanel.removeBoardFromRecentBoards(boardId);
        await welcomePanel.refresh();

        if(entry != null)
        {
            this.#addUndoNotification("A board was just deleted", entry.getAttribute('data-entry-id')!);
        }
    }
    async duplicateBoard(id: string)
    {
        const boardExportData = await DataService.prepareExportData(this, id);
        const duplicateData = this.findElement<ImportManagerComponent>('import-manager').prepareData(boardExportData);

        const newNameInput = this.findElement<BoardSettingsElement>('board-settings').findElement<HTMLInputElement>('duplicate-board-name');
        if(newNameInput?.value != null && newNameInput.value.trim() != "")
        {
            duplicateData.name = newNameInput.value;
        }

        await this.importBoard(duplicateData, "An error occurred duplicating a board.");
        this.refreshBoards();
        this.findElement<WelcomePanelElement>('welcome-panel').refresh();
    }

    async closeBoardSettings()
    {
        return new Promise((resolve) =>
        {
            this.findElement<HTMLDialogElement>('board-settings-dialog').close();

            // wait for the settings to close and update the window location
            // to prevent the board settings from trying to open, after the
            // board has been closed and the new location still contains
            // the settings hash
            requestAnimationFrame(resolve);
        });
    }

    async clearData(confirm: boolean = true)
    {
        return this.findElement<ConfigPanelElement>('config-panel').clearData(confirm);
    }
    // async clearHistory()
    // {
    //     this.findElement<ConfigPanelElement>('config-panel').history_clear();
    // }

    addTask(list: TaskListElement, order: number)
    {
        const listId = list.dataset.tasklistId!;
        const card = new TaskCardElement();
        list.append(card);
        this.#registerTaskCard(card, listId, order);
    }
    //#endregion API

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
        this.findElement<AppMenuElement>('app-menu-container').init({
            addBoard: this.addBoard.bind(this),
            editBoard: this.editBoard.bind(this),
            openBoard: this.openBoard.bind(this),
        });

        // welcome panel
        const welcomePanel = this.findElement<WelcomePanelElement>('welcome-panel');
        welcomePanel.init({
            addBoard: this.addBoard.bind(this),
            openBoard: this.openBoard.bind(this),
        });

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
        this.findElement<BoardBrowserElement>('board-browser').addEventListener('close', () =>
        {
            this.findElement<HTMLDialogElement>('board-browser-dialog').close();
        });

        // config-panel
        const appVersion = await this.#getAppVersion();
        this.findElement<ConfigPanelElement>('config-panel').init({
            appVersion,
            scheme_onChange: this.setColorScheme.bind(this),
            openImportManager: this.#openImportManager.bind(this),
            openBoard: this.openBoard.bind(this),
            refreshBoardCollections: this.refreshBoardCollections.bind(this),
            refreshRecentBoards: welcomePanel.refresh.bind(welcomePanel),
            closeBoard: this.closeBoard.bind(this),
        });
        this.findElement<ConfigPanelElement>('config-panel').addEventListener('close', () =>
        {
            this.findElement<HTMLDialogElement>('config-dialog').close();
        });

        // board-settings
        const boardSettings = this.findElement<BoardSettingsElement>('board-settings');
        boardSettings.init({
            canAddList: this.#canAddList.bind(this),
            removeBoard: this.removeBoard.bind(this),
            duplicateBoard: this.duplicateBoard.bind(this),
            exportBoard: this.exportBoard.bind(this),
            closeBoard: this.closeBoard.bind(this),
            closeBoardSettings: this.closeBoardSettings.bind(this),
            saveSettingsTarget: this.#saveSettingsTarget.bind(this)
        });
        this.findElement<BoardSettingsElement>('board-settings').addEventListener('close', () =>
        {
            this.findElement<HTMLDialogElement>('board-settings-dialog').close();
        });

        // import-dialog
        this.findElement<BoardBrowserElement>('import-manager').addEventListener('close', () =>
        {
            this.findElement<HTMLDialogElement>('import-dialog').close();
        });
        

        // confirmation-dialog

        // notifications

        // loading

        this.addEventListener('click', this.#onClick.bind(this));
        this.addEventListener("keydown", this.#onKeyDown.bind(this));

        this.#addBoardHandlers();
        addKeyHandlers.call(this);
        this.#addRouteHandlers();


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
        appRouter.addRouteLinkClickHandlers([
            this.findElement<HTMLElement>('app-menu-container'),
            this.findElement<HTMLElement>('config-panel'),
            this.findElement('welcome-panel').shadowRoot!.querySelector<HTMLElement>('#recent-boards')!
        ]);
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
        const updateUrl = this.getAttribute('update-url');
        if(updateUrl != null)
        {
            const { windowPath, windowHash } = this.#parseWindowPath();
            const filteredWindowHash = windowHash.replace('import', '');
            await this.getElement<PathRouterElement>('app-router').navigate(`${windowPath}#${filteredWindowHash}`);
            
            if(filteredWindowHash != windowHash)
            {
                // if the last session ended with a dialog open that
                // was not one allowed to be open on startup (like the 
                // import dialog), we update the url, as well as the router's path
                const newHistoryState =  `${window.origin}${this.#rootPath}?path=${windowPath}${(filteredWindowHash != "") ? `#${filteredWindowHash}` : ''}`;
                window.history.replaceState(null, '', newHistoryState);
            }
            
            await boardsPromise;
            
            let boardIdIndex = windowPath.indexOf('board/');
            if(boardIdIndex > -1)
            {
                const currentMenuItem = this.findElement('app-menu-container').shadowRoot!.querySelector(`[data-route="${windowPath}"]`) as HTMLElement;
                if(currentMenuItem != null)
                {
                    currentMenuItem.setAttribute('aria-current', 'page');
                    currentMenuItem.classList.add('selected');
                    currentMenuItem.part.add('selected');
                }
            }
        }
        else
        {
            const lastPath = await DataService.getAppSetting<string>('last-path');
            if(lastPath != null)
            {
                this.findElement<PathRouterElement>('app-router').navigate(lastPath);
            
                let boardIdIndex = lastPath.indexOf('board/');
                if(boardIdIndex > -1)
                {
                    const currentMenuItem = this.findElement('app-menu-container').shadowRoot!.querySelector(`[data-route="${lastPath}"]`) as HTMLElement;
                    if(currentMenuItem != null)
                    {
                        currentMenuItem.setAttribute('aria-current', 'page');
                        currentMenuItem.classList.add('selected');
                        currentMenuItem.part.add('selected');
                    }
                }
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
        const description = card.findElement('description')
        card.dataset.taskId = task.id;
        card.setAttribute('color', task.color)
        card.setAttribute('is-finished', task.isFinished.toString());
        description.innerHTML = task.description;
        card.setAttribute('draggable', "true");
        card.setAttribute('part', 'task-card');
        card.setAttribute('exportparts', "description: task-description, is-finished:task-checkbox, color-container:task-color-container, color:task-color, remove-button:task-remove-button, handle:task-handle, finished-indicator:task-finished-indicator, button, input, finished");
        card.style.setProperty('--task-color', task.color);
        description.addEventListener('keyup', this.#taskDescription_onKeyUp.bind(this));
        description.focus();
        
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

        const importManager = this.findElement<ImportManagerComponent>('import-manager')
        importManager.setData(boardData);

        requestAnimationFrame(() =>
        {
            assignPartsAsExportPartsAttribute(importManager.shadowRoot!, false, {
                'description':'import-target-description',
                'preview':'import-target-preview',
                'details':'import-target-details',
                'collection': 'import-target-collection',
                'property': 'import-target-property',
                'name':'import-target-name',
                'remove':'import-target-remove',
                'properties':'import-target-properties',
                'footer':'import-target-footer',
                'summary': 'import-target-summary',
            });
        });
    }
    
    async #saveSettingsTarget()
    {
        const settingsTarget = this.findElement<BoardSettingsElement>('board-settings');
        const settingsTargetId = settingsTarget.getAttribute('record-id');
        const boardItem = this.findElement<AppMenuElement>('app-menu-container').shadowRoot!.querySelector(`a[data-route*="${settingsTargetId}"]`) as HTMLAnchorElement;
        if(boardItem == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred saving a task board.`);
            console.error(`An error occurred finding the board's menu item.`);
            return;
        }

        const order = [...this.findElement<AppMenuElement>('app-menu-container').shadowRoot!.querySelectorAll('a')].indexOf(boardItem);
        const [ existingBoard,
            existingTaskLists,
            existingTaskSettings,
            board,
            taskLists,
            taskSettings,
            imageUpdates
        ] = await settingsTarget.saveBoard(order);
        if(board == null) { return; }

        await this.#updateActionHistory(existingBoard,
            existingTaskLists,
            existingTaskSettings,
            board,
            taskLists,
            taskSettings,
            imageUpdates);

        this.findElement<WelcomePanelElement>('welcome-panel').updateRecentBoardEntry(board.id, board.name, board.color);

        this.refreshBoard();
    }
    async #updateActionHistory(existingBoard: TaskBoardRecord,
        existingTaskLists: TaskListRecord[],
        existingTaskSettings: TaskSettingsRecord[],
        board: TaskBoardRecord,
        taskLists: TaskListRecord[],
        taskSettings: TaskSettingsRecord[],
        imageUpdates: CustomImageActionProperties[])
    {
        const configPanel = this.findElement<ConfigPanelElement>('config-panel')
        const [ 
            boardActionProperties,
            listActionProperties
        ] = DataService.data.boardUpdate_getActionProperties({ existing: existingBoard, updated: board }
        ,{ existing: existingTaskLists, updated: taskLists }
        ,{ existing: existingTaskSettings, updated: taskSettings });

        // console.log(boardActionProperties, listActionProperties);

        if(boardActionProperties != null && imageUpdates.length > 0)
        {
            if(boardActionProperties.backgroundImages != null)
            {
                boardActionProperties.backgroundImages = boardActionProperties.backgroundImages.concat(imageUpdates);
            }
            else if(boardActionProperties.backgroundImages == null)
            {
                boardActionProperties.backgroundImages = imageUpdates;
            }

            await configPanel.addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.Board, boardActionProperties);
        }

        for(let i = 0; i < listActionProperties.length; i++)
        {
            const actionProperties = listActionProperties[i];
            await configPanel.addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.List, actionProperties);
        }

        const existingListIds = new Set(existingTaskLists.filter(item => item != undefined).map(item => item.id));
        const currentListIds = new Set(taskLists.filter(item => item != undefined).map(item => item.id));
        const addedLists = taskLists.filter(item => item != undefined && !existingListIds.has(item.id));
        for(let i = 0; i < addedLists.length; i++)
        {
            const addedList = addedLists[i];
            await configPanel.addActionHistoryEntry(HistoryEntryType.Create, HistoryEntryTargetType.List, { id: addedList.id });
        }
        const removedLists = existingTaskLists.filter(item => item != undefined && !currentListIds.has(item.id));
        for(let i = 0; i < removedLists.length; i++)
        {
            const removedList = removedLists[i];
            await configPanel.addActionHistoryEntry(HistoryEntryType.Delete, HistoryEntryTargetType.List, { id: removedList.id });
        }
    }
    #addUndoNotification(message: string, entryId: string)
    {
        const content = document.createElement('span');
        content.setAttribute('part', 'notification-message-content');
        content.classList.add('notification-message-content');

        const messageText = document.createElement('span');
        messageText.setAttribute('part', 'undo-message');
        messageText.classList.add('undo-message');
        messageText.textContent = message;

        const messageButton = document.createElement('button');
        messageButton.setAttribute('part', 'notification-undo-button');
        messageButton.classList.add('notification-undo-button');
        messageButton.innerHTML = `<svg id="notification-undo-icon" class="icon">
                                        <use href="#icon-definition_undo-redo"></use>
                                    </svg>
                                    <span part="notification-undo-button-label">Undo?</span>`;
        messageButton.type = 'button';

        content.append(messageText, messageButton);
        const notification = MessageCardElement.prepare(content, this.findElement('notifications'), { type: MessageCardType.Success, heading: "Success!" });
        notification.part.add('message-card', 'notification');
        notification.setAttribute('exportparts', 'message-icon,header:message-header,heading:message-heading,message,close-button:message-close-button,close-icon:message-close-icon,duration:message-duration');
        notification.classList.add('notification');
        messageButton.addEventListener('click', () =>
        {
            const entry = this.getElement<ActionHistoryElement>('action-history').querySelector(`[data-entry-id="${entryId}"]`) as HTMLElement;
            if(entry == null)
            {
                FeedbackService.showErrorMessageCard(`An error occurred restoring a record. The record was not restored`);
                return;
            }
            this.getElement<ActionHistoryElement>('action-history').reverseEntry(entry);
            notification.dispatchEvent(new CustomEvent(MessageCardEvent.Cancel));
            notification.remove();
        });
        notification.show();
    }


    async #updateListRecord(taskListComponent: TaskListElement)
    {
        const id = taskListComponent.dataset.tasklistId;
        if(id == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred saving a task list.`);
            throw new Error("Unable to update tasklist with unset \'data-tasklist-id\' attribute");
        }
        const taskList = await DataService.getListRecord(id);
        if(taskList == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred saving a task list.`);
            throw new Error(`Unable to update tasklist. No tasklist found with target id (${id}).`);
        }

        const listPreviousName = taskList.name;
        const inputNameValue = taskListComponent.findElement<HTMLInputElement>('name').value;
        const listPreviousColor = taskList.color;
        const inputColorValue = taskListComponent.findElement<HTMLInputElement>('color').value;

        taskList.name = inputNameValue;
        taskList.color = inputColorValue;

        DataService.saveListRecords(taskList);

        const updates: Map<string, PropertyUpdate> = new Map();
        if(listPreviousName != taskList.name)
        {
            updates.set('name', { from: listPreviousName, to: taskList.name })
        }
        if(listPreviousColor != taskList.color)
        {
            updates.set('color', { from: listPreviousColor, to: taskList.color })
        }

        const properties: ListActionProperties = {
            id: taskList.id,
            updates
        };

        await this.findElement<ConfigPanelElement>('config-panel').addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.List, properties);
    }
    async #updateTaskRecord(taskComponent: TaskCardElement, parentList: TaskListElement)
    {
        // const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');

        const listId = parentList.dataset.tasklistId;
        if(listId == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred saving a task.`);
            throw new Error('Unable to update task when parent list\'s data-tasklist-id attribute is not available.');
        }

        const task = await this.#getTaskFromComponent(taskComponent);

        const previousValues = structuredClone(task);

        task.listId = listId;
        task.color = taskComponent.findElement<HTMLInputElement>('color').value;
        task.isFinished = taskComponent.findElement<HTMLInputElement>('is-finished').checked;
        task.description = taskComponent.findElement('description').innerHTML;
        
        const tasks = [...parentList.querySelectorAll('task-card')] as TaskCardElement[];
        task.order = tasks.indexOf(taskComponent);
        if(task.order == -1)
        {
            console.warn('Unable to find index of task in parent list');
            task.order = tasks.length;
        }

        await DataService.saveTaskRecords(task);

        const diff: { [key: string]: string|number|boolean } = Object.fromEntries(Object.entries(previousValues)
        .filter(([key, value]) => value !== (task as unknown as any)[key]));

        const updates: Map<string, PropertyUpdate> = new Map();
        for(const [key, value] of Object.entries(diff))
        {
            updates.set(key, { from: value, to: (task as unknown as any)[key] });
        }

        const properties: ListActionProperties = {
            id: task.id,
            updates
        };

        await this.findElement<ConfigPanelElement>('config-panel').addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.Task, properties);
    }
    async #registerTaskCard(card: TaskCardElement, listId: string, order: number)
    {
        const errorMessage = 'An error occured creating a new Task. Refreshing the application may help. If the problem persists, more detail can be found in your browsers development tools.';
        if(listId == null)
        {
            FeedbackService.showErrorMessageCard(errorMessage);
            throw new Error('Unable to add task when parent list\'s data-tasklist-id attribute is undefined.');
        }
        const boardId = this.findElement('task-board').dataset.boardId;
        if(boardId == null)
        {
            FeedbackService.showErrorMessageCard(errorMessage);
            throw new Error('Unable to add task when parent boards\'s data-board-id attribute is undefined.');
        }

        const task = await this.#addTaskRecord(boardId, listId, order);
        if(task == undefined)
        {
            return;
        }
        this.#initTaskCard(card, task);
    }
    async #addTaskRecord(boardId: string, listId: string, order: number)
    {
        const task = await DataService.createTask(boardId, listId);
        task.order = order;
        await DataService.saveTaskRecords(task);

        this.findElement<ConfigPanelElement>('config-panel').addActionHistoryEntry(HistoryEntryType.Create, HistoryEntryTargetType.Task, { id: task.id });

        return task;
    }
    async #deleteTaskRecord(taskComponent: TaskCardElement)
    {
        // const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');
        const id = taskComponent.dataset.taskId;
        if(id == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred deleting a task.`);
            throw new Error('Unable to delete task when task\'s data-task-id attribute is not available.');
        }

        await DataService.deleteTaskRecords(id);

        const entry = await this.findElement<ConfigPanelElement>('config-panel').addActionHistoryEntry(HistoryEntryType.Delete, HistoryEntryTargetType.Task, { id });
        if(entry != null)
        {
            this.#addUndoNotification("A task was just deleted", entry.getAttribute('data-entry-id')!);
        }
    }
    async #updateTaskRecordsAfterMove(target: TaskCardElement, parent: TaskListElement)
    {
        await this.#updateTaskRecord(target, parent);

        if(DataService.data.tasks == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred moving a task.`);
            console.warn(`An error occurred accessing task data. Unable to save task order.`);
            return;
        }

        const toSave = await this.#getOrderedTasks(parent);
        await DataService.saveTaskRecords(...toSave); 
    }
    async #getOrderedTasks(tasklist: TaskListElement)
    {
        // const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');

        const orderedIds: string[] = [];
        const taskItems = [...tasklist.querySelectorAll('task-card')] as HTMLElement[];
        for(let i = 0; i < taskItems.length; i++)
        {
            const item = taskItems[i];
            const id = item.getAttribute('data-task-id')!;
            if(id == null) { throw new Error('Unset task id'); }
            orderedIds.push(id);
        }

        const tasks = await DataService.getTaskRecords(...orderedIds);

        const orderedTasks = [];
        for(let i = 0; i < orderedIds.length; i++)
        {
            const board = tasks[tasks.findIndex(value => value.id == orderedIds[i])];
            if(board == null) { throw new Error("Unknown task"); }
            board.order = i;
            orderedTasks.push(board);
        }

        return orderedTasks;
    }
    async #getTaskFromComponent(taskComponent: TaskCardElement)
    {
        const id = taskComponent.dataset.taskId;
        if(id == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred identifying a task.`);
            throw new Error("Unable to update task with unset \'data-tasklist-id\' attribute");
        }
        const task = await DataService.getTaskRecord(id);
        if(task == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred identifying a task.`);
            throw new Error(`Unable to update task. No task found with target id (${id}).`);
        }
        return task;
    }
    //#endregion Management

    //#region Rendering
    async #renderBoard(id: string)
    {
        const board = await DataService.getBoardRecord(id);
        if(board == null || board.deletedTimestamp != null)
        {
            this.findElement<PathRouterElement>('app-router').navigate('/');
            FeedbackService.showMessageCard(`No board found with the target id (${id}). Navigated back to Welcome page.`, MessageCardType.Warn);
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

        // wait a frame, to allow the last saved recentBoards value
        // to be available when the update function is called
        requestAnimationFrame(() =>
        {
            this.findElement<WelcomePanelElement>('welcome-panel').updateRecentBoardEntry(board.id, board.name, board.color);
            const welcomePanel = this.findElement<WelcomePanelElement>('welcome-panel');
            welcomePanel.refresh();
        });
        
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
                    FeedbackService.showMessageCard(`No image found with the target id (${board.backgroundImageId}).`, MessageCardType.Warn);
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
            FeedbackService.showErrorMessageCard(`An error occurred loading the board. Navigated back to Welcome page.`);
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
                FeedbackService.showMessageCard(`An error occurred loading a list's settings. Some settings may not be displayed properly.`, MessageCardType.Warn);
                console.warn(new Error(`Unable to find settings from list's taskSettingsId.`));
            }
            const element = new TaskListElement();
            element.setAttribute('name', list.name);
            element.setAttribute('color', list.color);
            element.setAttribute('data-tasklist-id', list.id);
            element.toggleAttribute('drag-drop', true);
            element.setAttribute('part', 'task-list');
            element.style.setProperty('--list-color', list.color);
            element.setAttribute('exportparts', "header:list-header, color-container:list-color-container, color:list-color, name:list-name, collapse-button:list-collapse, collapse-icon:list-collapse-icon, tasks:list-tasks, add-button:list-add-button, add-label:list-add-label, button, input, finished:task-finished");
            element.dragAndDropQueryParent = board;
            element.innerHTML = `
            <button type="button" slot="add-button" class="button add-task-button label-button" part="add-button add-task-button button label-button" title="Add">
                <svg id="add-icon" class="icon button-icon add" part="list-add-button-icon icon button-icon add">
                    <use href="#icon-definition_plus"></use>
                </svg>
                <span class="list-add-button-label button-label" part="list-add-button-label button-label">Add Task</span>
            </button>`

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

        const importOkButton = composedPath.find(item => item.id == 'import-ok');
        if(importOkButton != null)
        {
            this.#importDialog_import_onClick();
            return;
        }


        const addTaskButton = composedPath.find(item => item.classList.contains('add-task-button'));
        if(addTaskButton != null)
        {
            const order = addTaskButton.parentElement!.querySelectorAll(`task-card`).length;
            this.addTask(addTaskButton.parentElement! as TaskListElement, order);
        }
    }
    async #onKeyDown(event: KeyboardEvent)
    {
        if(event.code == "Space" || event.code == "Enter")
        {
            const taskCard = this.shadowRoot!.activeElement as HTMLElement;
            if(taskCard == null || (taskCard instanceof TaskCardElement) == false) { return; }
            const finishedIndicator = taskCard.shadowRoot!.activeElement as HTMLElement;
            if(finishedIndicator == null || finishedIndicator.id != "finished-indicator") { return; }

            finishedIndicator.click();
        }
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
        // console.log(updatedLocation, updatedLocation.pathname);
    
        const { hasChanged, isReplacementChange } = router.compareLocations(currentLocation as unknown as URL, updatedLocation);
        if(hasChanged)
        {
            const updateUrl = this.getAttribute('update-url');
            if(updateUrl != null)
            {
                const urlPath = this.getAttribute('path-override') ?? window.location.pathname;
                
                let newHistoryState;
                if(updateUrl == '' || updateUrl == 'query')
                {
                    newHistoryState =  `${window.location.origin}${urlPath}?path=${updatedLocation.pathname}${updatedLocation.hash}`;
                }
                else if(updateUrl == 'pathname')
                {

                }

                if(isReplacementChange)
                {
                    window.history.replaceState(null, '', newHistoryState);
                }
                else
                {
                    window.history.pushState(null, '', newHistoryState);
                }
            }
            this.setAttribute('path', `${updatedLocation.pathname}${updatedLocation.hash}`);
            DataService.saveAppSetting('last-path', `${updatedLocation.pathname}${updatedLocation.hash}`);
        }
    
        // current route selected status
        const currentPathArray = updatedPath!.split('#');
        const pageRoute = currentPathArray[0];
        const hashRoute = currentPathArray[1];
    
        // const item = event.composedPath().find(item => item instanceof HTMLElement ? item.part.contains('board-menu-item') : false) as HTMLElement;
        // if(item == null) { return; }
    
        const items = [...this.findElement('app-menu-container').shadowRoot!.querySelectorAll('a')];
        for(let i = 0; i < items.length; i++)
        {
            items[i].part.remove('selected');
            items[i].classList.remove('selected');
            items[i].toggleAttribute('aria-current', false);
        }
    
        if(pageRoute != null)
        {
            const currentMenuItem = this.findElement('app-menu-container').shadowRoot!.querySelector(`[data-route="${pageRoute}"]`);
            if(currentMenuItem != null)
            {
                currentMenuItem.setAttribute('aria-current', 'page');
                currentMenuItem.classList.add('selected');
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
    }
    #boardRoute_beforeOpen(event: Event|CustomEvent)
    {
        const data = (event as CustomEvent).detail;
        const boardId = data.properties.id;
        if(boardId == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred attempting to open the board.`);
            throw new Error('Unable to open board route with unknown id');
        }
        this.#renderBoard(boardId);
    }
    async #boardSettingsRoute_beforeOpen(_event: Event|CustomEvent)
    {
        const router = this.findElement<PathRouterElement>('app-router');
        const properties = await router.getRouteProperties();
        if(properties.id == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred attempting to open the board for editing.`);
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


    #addBoardHandlers(this: TaskboardManagerElement)
    {
        const board = this.findElement<TaskBoardElement>('task-board');    
        board.addEventListener('change', this.#taskBoard_onChange.bind(this));
        board.addEventListener('collapse', this.#taskBoard_onListCollapse.bind(this));
        board.addEventListener('add', this.#taskBoard_onTaskAdd.bind(this));
        board.addEventListener('remove', this.#taskBoard_onTaskRemove.bind(this));
        board.addEventListener('added', this.#taskBoard_onTaskMove.bind(this));
    }

    #taskBoard_onChange(this: TaskboardManagerElement, event: Event|CustomEvent)
    {
        if(event.target instanceof TaskCardElement)
        {
            this.#taskBoard_onTaskChange.call(this, event);
        }
        else if(event.target instanceof TaskListElement)
        {
            const { detail } = event as CustomEvent;
            if(detail.order != null)
            {
                this.#taskBoard_onTaskMove.call(this, event);
            }
            this.#taskBoard_onListChange.call(this, event);
        }
    }
    #taskBoard_onListChange(this: TaskboardManagerElement, event: Event|CustomEvent)
    {
        this.#updateListRecord(event.target as TaskListElement);
    }
    #taskBoard_onListCollapse(this: TaskboardManagerElement, event: Event|CustomEvent)
    {
        const target =  (event.target as HTMLElement);
        const isCollapsed = target.getAttribute('collapsed') != null;
        target.part.toggle('collapsed-list', isCollapsed);
    }
    #taskBoard_onTaskChange(this: TaskboardManagerElement, event: Event|CustomEvent)
    {
        const cardElement = (event.target as TaskCardElement);
        const listElement = cardElement.closest('task-list') as TaskListElement;
        if(listElement == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred updating a task.`);
            console.error(new Error("Unable to identify a parent task-list element for an updated task-card element.."));
            return;
        }
        this.#updateTaskRecord(cardElement, listElement);
        cardElement.style.setProperty('--task-color', cardElement.findElement<HTMLInputElement>('color').value);
    }
    #taskBoard_onTaskAdd(this: TaskboardManagerElement, event: Event|CustomEvent)
    {
        const list = event.target as TaskListElement;
        // const listId = list.dataset.tasklistId!;
        // const card = new TaskCardElement();
        // list.append(card);
        const data = (event as CustomEvent).detail;
        // this.#registerTaskCard(card, listId, data.order);
        this.addTask(list, data.order)
    }

    #taskBoard_onTaskRemove(this: TaskboardManagerElement, event: Event|CustomEvent)
    {
        const card = (event.target as HTMLElement).closest('task-card') as TaskCardElement;
        card.remove();
        this.#deleteTaskRecord(card);
    }
    #taskBoard_onTaskMove(this: TaskboardManagerElement, event: Event|CustomEvent)
    {
        const { detail } = event as CustomEvent;
        const cardElement = (detail.target as TaskCardElement);
        const listElement = event.target as TaskListElement;
        this.#updateTaskRecordsAfterMove(cardElement, listElement);
    }
    #taskDescription_onKeyUp(this: TaskboardManagerElement, event: KeyboardEvent)
    {
        if(event.code != 'Enter' || (event.shiftKey == false && event.ctrlKey == false))
        {
            return;
        }
        const list = ((event.target as HTMLElement).getRootNode() as any).host.parentElement;
        const listId = list?.dataset.tasklistId;
        if(list == null || listId == null)
        {
            FeedbackService.showErrorMessageCard(`An error occurred creating a new task.`);
            console.error(new Error("List data not found."));
            return;
        }
        const card = new TaskCardElement();
        list.append(card);
        this.#registerTaskCard(card, listId, list.children.length);
        
        list.append(card);
        card.findElement('description').focus();
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
        if(this.#rootPath != "" && windowPath.startsWith(this.#rootPath)) { windowPath = windowPath.substring(this.#rootPath.length + 1); }
        windowPath = windowPath.trim();

        let windowHash = window.location.hash;
        if(windowHash.startsWith('#')) { windowHash = windowHash.substring(1); }
        windowHash = windowHash.trim();

        

        return { windowPath, windowHash }
    }
    #parseWindowPath_pwa()
    {    
        let windowPath = window.location.pathname;
        if(windowPath.startsWith('/')) { windowPath = windowPath.substring(1); }
        if(this.#rootPath != "" && windowPath.startsWith(this.#rootPath)) { windowPath = windowPath.substring(this.#rootPath.length + 1); }
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

    
    static observedAttributes = ["root-path"];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string) {
        if (attributeName == "root-path")
        {
            this.#rootPath = newValue.trim();
        }
    }
    //#endregion Internal

}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskboardManagerElement);
}