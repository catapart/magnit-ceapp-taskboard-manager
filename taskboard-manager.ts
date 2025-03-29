// styles
import sharedStyles from './styles/shared.css?raw';
import global_boardItem from './styles/board-item.global.css?raw';
import global_browserItem from './styles/browser-item.global.css?raw';

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
import { TaskManagerComponentData } from './data/data';
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
import { addAdminHandlers } from './handlers/admin.handlers';
// import { addNavigationhandlers } from './handlers/navigation.handlers';
// import { addBoardBrowserHandlers } from './handlers/board-browser.handlers';
import { addRouteHandlers, parseWindowPath } from './handlers/route.handlers';
import { addBoardHandlers, taskDescription_onKeyUp } from './handlers/board.handlers';
// import { addDragHandlers } from './handlers/drag.handlers';
// import { addBoardSettingsHandlers } from './handlers/board-settings.handlers';
import { TaskListElement } from '@magnit-ce/task-list';
import { TaskCardElement } from '@magnit-ce/task-card';
import { PathRouterElement} from '@magnit-ce/path-router';
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

// export type TaskboardManagerProperties = 
// {
//     // remove?: boolean,
//     // edit?: boolean,
//     // onAdd?: (event?: Event) => void|Promise<void>,
//     // onRemove?: (event?: Event) => void|Promise<void>,
//     // onEdit?: (event?: Event) => void|Promise<void>,
// };

export enum AppSettingKey
{
    ActiveEntryIndex = 'activeEntryIndex',
    HistoryLength = 'historyLength',
    DaysToPersistData = 'daysToPersistData',
    RecentBoards = 'recentBoards',
    ColorScheme = 'color-scheme',
    Language = 'language',
}


const MILLISECONDSINDAY = 1000 * 60 * 60 * 24;

const DEFAULT_APP_VERSION = "--.--.--";
const DEFAULT_HISTORY_LENGTH = "30";
const DEFAULT_PERSIST_DAYS = "7";

const DATA_ERROR_MESSAGE = `<p>An error occurred trying to access the [subject] data.</p>
<p>If this is a repeating issue, you can try to refresh the application. Data may be lost when taking this action.</p>
<p>For more information, see the console in the browser's developer tools.</p>`;
const BOARD_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Task Board');
const LIST_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Task List');
const TASK_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Task');
const IMAGE_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Image');
const HISTORY_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'History');
const SETTINGS_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Settings');

const ATTRIBUTE_PREPARED_FOR_DELETE = "to-delete";

/** Helper const for accessing component-specific methods and properties
* used to make development possible across multiple modular files.  
* Not suited for interacting with the component  */
export const SHAREDACCESSKEY = Symbol('SHAREDACCESSKEY');
/** Helper type for accessing component-specific methods and properties
* used to make development possible across multiple modular files.  
* Not suited for interacting with the component  */
type SharedContent =
{ 
    data: TaskManagerComponentData,
    refreshBoards: () => Promise<void>,
    refreshActionHistory: () => Promise<void>,
    refreshDeletedItems: () => Promise<void>,
    saveAppSetting: (key: string, value: string|number|boolean|Blob|null) => Promise<void>,
    // restoreDeletedItem: (targetType: HistoryEntryTargetType|null, recordId: string, timestamp: number) => void,
    // handleActionEntryReverse: (targetEntry: HTMLElement, previousEntry: HTMLElement|undefined, targetIndex: number, previousEntryIndex: number) => void,
    // handelActionEntryActivate: (targetEntry: HTMLElement, previousEntry: HTMLElement|undefined, targetIndex: number, previousEntryIndex: number) => void,
    // prepareHistoryEntries: () => void,
    // applyHistoryLength: () => Promise<void>,

    renderBoard: (id: string) => void,
    updateBoardSettings: () => void,
    updateRecentBoardEntry: (id: string, description?: string) => Promise<void>,
    removeBoardFromRecentBoards: (id: string) => Promise<void>,

    updateListRecord: (taskListComponent: TaskListElement) => void,
    duplicateList: (target: HTMLElement, list: TaskListRecord, settings: TaskSettingsRecord) => void,

    registerTaskCard: (card: TaskCardElement, listId: string, order: number) => void,
    updateTaskRecord: (taskComponent: TaskCardElement, parentList: TaskListElement) => void,
    deleteTaskRecord: (taskComponent: TaskCardElement) => void,
    updateTaskRecordsAfterMove: (target: TaskCardElement, parent: TaskListElement) => void,

    openImportManager: (data: any) => void,

    getConfirmation: (message: string, type: 'info'|'warn'|'danger') => Promise<boolean>,
    getIdFromRoute: () => string,

}

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(`${sharedStyles}
${global_boardItem}
${global_browserItem}
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
    IconType.Restore,
)}`;

const COMPONENT_TAG_NAME = 'taskboard-manager';
export class TaskboardManagerElement extends HTMLElement
{
    static observedAttributes = [
        
    ];

    componentParts: Map<string, HTMLElement> = new Map();
    getElement<T extends HTMLElement = HTMLElement>(id: string)
    {
        if(this.componentParts.get(id) == null)
        {
            const part = this.findElement(id);
            if(part != null) { this.componentParts.set(id, part); }
        }

        return this.componentParts.get(id) as T;
    }
    findElement<T extends HTMLElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }

    initPromise?: Promise<void>;

    #data: TaskManagerComponentData;
    #customImageUrls: Map<string,string> = new Map();

    /** Exposes "shared" private functions/properties to external modules. */
    [SHAREDACCESSKEY]!: SharedContent;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = COMPONENT_TEMPLATE;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        const datastoreName = this.getAttribute('datastore-name');
        this.#data = new TaskManagerComponentData((datastoreName == null) ? undefined : {name: datastoreName});

        const autoLaunch = this.getAttribute('autolaunch') != 'false';
        if(autoLaunch == true)
        {
            this.initPromise = this.#init();
        }
    }

    // api

    /**
    * Initializes the app.  
    * Not necessary if the `autolaunch` attribute was not set to `false`.
    */
    async init()
    {
        this.initPromise = this.#init();
    }

    async addBoard()
    {
        const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        const listChannel = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, 'danger');
        const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, 'danger');

        const [ board, taskSettings, listData ] = await boardChannel.create();
        board.order = this.findElement('app-menu').querySelectorAll('a').length;   
        boardChannel.save(board);

        const lists: TaskListRecord[] = [];
        const listSettings: TaskSettingsRecord[] = [];
        for(let i = 0; i < listData.length; i++)
        {
            const [ list, settings ] = listData[i];
            lists.push(list);
            listSettings.push(settings);
        }
        listChannel.saveItems(lists);
        taskSettingsChannel.saveItems([taskSettings, ...listSettings]);

        await this.#addActionHistoryEntry(HistoryEntryType.Create, HistoryEntryTargetType.Board, { id: board.id });
    }
    async openBoard(id: string)
    {
        await this.initPromise;
        await this.closeBoard();
        await this.getElement<PathRouterElement>('app-router').navigate(`board/${id}`);
    }
    async closeBoard()
    {
        await this.findElement<PathRouterElement>('app-router').navigate('/' + window.location.hash);
        this.getElement('task-board').innerHTML = "";        
    }
    async openBoardSettings(id: string)
    {
        await this.initPromise;

        const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, 'danger');
        const imagesChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, 'danger');

        const board = await boardChannel.get(id);
        if(board == null)
        {
            MessageCardElement.notify(`No board found with the target id (${id}).`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.warn(`No board found with the target id (${id}).`);
            return;
        }
        
        const taskLists = await boardChannel.getTaskLists(id);
        const taskSettingIds = taskLists.map(item =>item.taskSettingsId);
        const taskSettings = await taskSettingsChannel.getItems([board.taskSettingsId, ...taskSettingIds]);
        const boardTaskSettings = taskSettings.find(item => item.id == board.taskSettingsId);
        const listTaskSettings = taskSettings.filter(item => taskSettingIds.indexOf(item.id) > -1);
        
        if(boardTaskSettings == null)
        {
            MessageCardElement.notify(`An error occurred accessing task settings data.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.warn(`An error occurred accessing task settings data.`);
            return;
        }

        const backgroundImage = (board.backgroundImageId == "") ? null : await imagesChannel.get(board.backgroundImageId);

        const boardSettings =this.findElement<BoardSettingsElement>('board-settings');
        boardSettings.setValues(board, boardTaskSettings, backgroundImage);
        boardSettings.setLists(taskLists, listTaskSettings);
        // const boardFields = this.findElement<TaskBoardFieldsComponent>('board-fields');
        // boardFields.setValues(board, boardTaskSettings, backgroundImage);
        // boardFields.setLists(taskLists, listTaskSettings);
    }
    async duplicateBoard(id: string)
    {
        const boardExportData = await this.#prepareExportData(id);
        const duplicateData = this.findElement<ImportManagerComponent>('import-manager').prepareData(boardExportData);

        const newNameInput = this.findElement<BoardSettingsElement>('board-settings').findElement<HTMLInputElement>('duplicate-board-name');
        if(newNameInput?.value != null && newNameInput.value.trim() != "")
        {
            duplicateData.name = newNameInput.value;
        }

        await this.importBoard(duplicateData, "An error occurred duplicating a board.");
    }
    async removeBoard(boardId: string, confirm: boolean = true)
    {
        const confirmed = await this.#getConfirmation('Are you sure you want to delete this board and all of its tasks, lists, and images?', 'warn');
        if(confirm == true && confirmed == false)
        {
            return;
        }

        await this.closeBoardSettings();

        const channel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        if(this.findElement('app-router').getAttribute('path')?.indexOf(boardId) != null)
        {
            this.closeBoard();
        }
        await channel.delete(boardId);
        const entry = await this.#addActionHistoryEntry(HistoryEntryType.Delete, HistoryEntryTargetType.Board, { id: boardId });
        this.#refreshBoards();
        this.#refreshDeletedItems();
        await this.#removeBoardFromRecentBoards(boardId);
        this.#refreshRecentBoards();

        if(entry != null)
        {
            this.#addUndoNotification("A board was just deleted", entry.getAttribute('data-entry-id')!);
        }
    }
    #addUndoNotification(message: string, entryId: string)
    {
        const content = document.createElement('span');
        content.setAttribute('part', 'message-content');

        const messageText = document.createElement('span');
        messageText.setAttribute('part', 'undo-message');
        messageText.textContent = message;

        const messageButton = document.createElement('button');
        messageButton.setAttribute('part', 'notification-undo-button');
        messageButton.innerHTML = `<span part="button-label">Undo?</span>`;
        messageButton.type = 'button';

        content.append(messageText, messageButton);
        const notification = MessageCardElement.prepare(content, this.findElement('notifications'), { type: MessageCardType.Success, heading: "Success!" });
        messageButton.addEventListener('click', () =>
        {
            const entry = this.getElement<ActionHistoryElement>('action-history').querySelector(`[data-entry-id="${entryId}"]`) as HTMLElement;
            if(entry == null)
            {
                MessageCardElement.notify(`An error occurred restoring a record. The record was not restored`,
                this.findElement('notifications'), { type: MessageCardType.Error });
                return;
            }
            this.getElement<ActionHistoryElement>('action-history').reverseEntry(entry);
            notification.dispatchEvent(new CustomEvent(MessageCardEvent.Cancel));
            notification.remove();
        });
        notification.show();
    }
    async exportBoard(id: string)
    {
        const boardExportData = await this.#prepareExportData(id);
        this.#downloadExportData(boardExportData);
    }
    async importBoard(boardData: BoardExport, errorMessage?: string)
    {
        try
        {
            const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
            const listChannel = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, 'danger');
            const taskChannel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');
            const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, 'danger');
            const imageChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, 'danger');

            const order = this.findElement('app-menu').querySelectorAll('a').length;
            const [ board, lists, tasks, settings, images ] = await this.#data.naturalizeForeignData(boardData, order);

            // console.log(board, lists, tasks, settings, images);

            await Promise.allSettled([
                boardChannel.save(board),
                listChannel.saveItems(lists),
                taskChannel.saveItems(tasks),
                taskSettingsChannel.saveItems(settings),
                imageChannel.saveItems(images)
            ]);
        }
        catch(exception)
        {
            console.error(exception);
            this.#showMessageDialog(errorMessage || 'An error occurred importing the board data. Please confirm the import file contains valid board data.');
        }
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
    
    addList()
    {
        const canAddList = this.#canAddList();
        if(canAddList == false)
        {
            this.#showMessageDialog("Unable to add list when a board is not open for editing and no board has been opened for task management.");
        }
        const channel = this.#getChannel<TaskListChannel>(this.#data.lists, DATA_ERROR_MESSAGE.replace('[subject]', "Task List"));
        const [ list, settings ] = channel.create();
        this.findElement<BoardSettingsElement>('board-settings').addList(list, settings);
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

    async undo()
    {
        this.findElement<ConfigPanelElement>('config-panel').history_undo();
    }
    async redo()
    {
        this.findElement<ConfigPanelElement>('config-panel').history_redo();
    }

    async clearData()
    {
        const confirmed = await this.#getConfirmation('Are you sure you want to delete all data associated with the app? This CAN NOT be undone.', 'danger');
        if(confirmed == false) { return; }
        await this.#data.clearAllData();
        this.#refreshBoards();
        this.#refreshActionHistory();
        this.#refreshDeletedItems();
    }
    async clearHistory()
    {
        const confirmed = await this.#getConfirmation('Are you sure you want to delete all app history? This CAN NOT be undone.', 'danger');
        if(confirmed == false) { return; }
        const channel = this.#getChannel<HistoryEntryChannel>(this.#data.historyEntries, DATA_ERROR_MESSAGE.replace('[subject]', 'History'), 'danger');
        const ids = (await channel.getAll()).map(item => item.id);
        await channel.deleteItems(ids);
        this.#refreshActionHistory();
    }

    
    setColorScheme(scheme: 'inherit'|'browser'|'light'|'dark')
    {
        const value = (scheme == 'browser') ? 'light dark' : scheme;
        this.style.setProperty('color-scheme', value);
    }

    // management
    async #init()
    {
        await this.#data.init();
        this.#registerSharedData();
        this.#loadColorScheme();
        
        const appVersion = await this.#getAppVersion();
        const historyLength = (await this.#getAppSetting(AppSettingKey.HistoryLength)) ?? DEFAULT_HISTORY_LENGTH;
        const daysToPersistData = (await this.#getAppSetting(AppSettingKey.DaysToPersistData)) ?? DEFAULT_PERSIST_DAYS;
        this.findElement<ConfigPanelElement>('config-panel').init(appVersion, historyLength, daysToPersistData);

        this.#addHandlers();

        this.#refreshRecentBoards();
        const boardsPromise = this.#refreshBoards();
        this.#refreshActionHistory();
        this.#refreshDeletedItems();
        
        const { windowPath, windowHash } = parseWindowPath();
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
        
        boardsPromise.then(() =>
        {
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
        });

        this.#removeExpiredData();
        // check each day if any deleted records expired
        setInterval(() =>
        {
            this.#removeExpiredData();
        }, MILLISECONDSINDAY);
    }
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
        return manifest.version;
    }
    async #loadColorScheme()
    {
        const colorScheme = await this.#getAppSetting(AppSettingKey.ColorScheme);
        if(colorScheme == null) { return; }
        this.setColorScheme(colorScheme as 'inherit'|'browser'|'light'|'dark');
    }
    #registerSharedData()
    {
        this[SHAREDACCESSKEY] = 
        {
            data: this.#data,

            refreshBoards: this.#refreshBoards.bind(this),
            refreshActionHistory: this.#refreshActionHistory.bind(this),
            refreshDeletedItems: this.#refreshDeletedItems.bind(this),

            saveAppSetting: this.#saveAppSetting.bind(this),

            // restoreDeletedItem: this.#restoreDeletedItem.bind(this),

            // handleActionEntryReverse: this.#handleActionEntryReverse.bind(this),
            // handelActionEntryActivate: this.#handelActionEntryActivate.bind(this),
            // prepareHistoryEntries: this.#prepareHistoryEntries.bind(this),
            // applyHistoryLength: this.#applyHistoryLength.bind(this),

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
            getIdFromRoute: this.#getIdFromRoute.bind(this),

        }
    }
    
    #addHandlers()
    {
        const menu = this.getElement<AppMenuElement>('app-menu');
        menu.onBoardMove = this.#updateBoardRecordsAfterMove.bind(this);
        menu.onEdit = this.#board_edit_onClick.bind(this);
        menu.onNew = this.#newBoard_onClick.bind(this);

        const configPanel = this.getElement<ConfigPanelElement>('config-panel');
        configPanel.addEventListener('error', (event: Event|CustomEvent) =>
        {
            const { message, type, consoleMessage } = (event as CustomEvent).detail;
            MessageCardElement.notify(message, 
            this.getElement('notifications'), { type: type ?? MessageCardType.Error });
            console.error(new Error(consoleMessage));
        });
        configPanel.addEventListener('scheme', (event: Event|CustomEvent) =>
        {
            const { scheme } = (event as CustomEvent).detail;
            this.setColorScheme(scheme);
            this.#saveAppSetting(AppSettingKey.ColorScheme, scheme);
        });
        configPanel.addEventListener('import', (event: Event|CustomEvent) =>
        {
            const { boardData } = (event as CustomEvent).detail;
            this.#openImportManager(boardData);
        });
        configPanel.addEventListener('daystopersist', (event: Event|CustomEvent) =>
        {
            const { daysToPersist } = (event as CustomEvent).detail;
            this.#saveAppSetting(AppSettingKey.DaysToPersistData, daysToPersist);
        });
        configPanel.addEventListener('cleardata', (event: Event|CustomEvent) =>
        {
            this.clearData();
        });
        configPanel.addEventListener('restoreitem', (event: Event|CustomEvent) =>
        {
            const { targetType, recordId, timestamp } = (event as CustomEvent).detail;
            this.#restoreDeletedItem(targetType, recordId, timestamp);
        });
        configPanel.addEventListener('cleardeleted', async (event: Event|CustomEvent) =>
        {
            const { items } = (event as CustomEvent).detail;
            for(let i = 0; i < items.length; i++)
            {
                const item = items[i];
                await this.deleteItem(item, false);
            }
            this.#refreshDeletedItems();
            this.#refreshActionHistory();
        });
        configPanel.addEventListener('restoreitem', (event: Event|CustomEvent) =>
        {
            const { item } = (event as CustomEvent).detail;
            return this.deleteImage(item);
        });
        configPanel.addEventListener('clearimages', async (event: Event|CustomEvent) =>
        {
            const { items } = (event as CustomEvent).detail;
            for(let i = 0; i < items.length; i++)
            {
                const item = items[i];
                await this.deleteImage(item, false);
            }
            this.#refreshActionHistory();
            this.#refreshDeletedItems();
        });
        // configPanel.addEventListener('undo', (event: Event|CustomEvent) =>
        // {
        //     this.undo();
        // });
        // configPanel.addEventListener('redo', (event: Event|CustomEvent) =>
        // {
        //     this.redo();
        // });
        configPanel.addEventListener('historyback', async (event: Event|CustomEvent) =>
        {
            const {
                target,
                previous,
                targetIndex,
                previousActiveEntryIndex,
                refreshBoards,
                refreshDeletedItems
            } = (event as CustomEvent).detail;

            await this.#handleActionEntryReverse(target, previous, targetIndex, previousActiveEntryIndex);

            
            if(refreshBoards == true)
            {
                this.#refreshBoards();
            }
            if(refreshDeletedItems == true)
            {
                this.#refreshDeletedItems();
            }
            
            const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
            if(currentBoardId != "")
            {
                this.#renderBoard(currentBoardId);
            }
        });
        configPanel.addEventListener('historyforward', async (event: Event|CustomEvent) =>
        {
            const {
                target,
                previous,
                targetIndex,
                previousActiveEntryIndex,
                refreshBoards,
                refreshDeletedItems
            } = (event as CustomEvent).detail;

            await this.#handelActionEntryActivate(target, previous, targetIndex, previousActiveEntryIndex);

            if(refreshBoards == true)
            {
                this.#refreshBoards();
            }
            if(refreshDeletedItems == true)
            {
                this.#refreshDeletedItems();
            }
            
            const currentBoardId = this.findElement('task-board').dataset.boardId ?? "";
            if(currentBoardId != "")
            {
                this.#renderBoard(currentBoardId);
            }
        });
        configPanel.addEventListener('preparehistoryitems', async (event: Event|CustomEvent) =>
        {
            const { actionHistory, startIndex } = (event as CustomEvent).detail;
            this.#prepareHistoryEntries(actionHistory, startIndex);
        });
        configPanel.addEventListener('historylength', async (event: Event|CustomEvent) =>
        {
            const { historyLength } = (event as CustomEvent).detail;
            this.#applyHistoryLength(historyLength);
        });
        configPanel.addEventListener('clearhistory', async (_event: Event|CustomEvent) =>
        {
            this.clearHistory();
        });

    
        const boardBrowser = this.getElement<BoardBrowserElement>('board-browser');
        boardBrowser.addEventListener('select', async (event: Event|CustomEvent) =>
        {
            const { boardId } = (event as CustomEvent).detail;
            if(boardId == null)
            {
                MessageCardElement.notify(`An error occurred attempting to open the board.`, 
                this.getElement('notifications'), { type: MessageCardType.Error });
                console.error('Unable to open board: data-board-id attribute is unset on target element.');
                return;
            }
            // console.log(selected, selected[0].getAttribute('data-board-id') ?? 'no id');
            this.findElement<PathRouterElement>('app-router').navigate(`board/${boardId}`)
        });
    


        // this.findElement<HTMLButtonElement>('import-ok').addEventListener('click', this.#importDialog_import_onClick.bind(this));

        // this.addEventListener('click', (event) =>
        // {
        //     console.log(event.target);
        // })
        // addAdminHandlers.call(this);
        // addNavigationhandlers.call(this);
        // // addDragHandlers.call(this);
        addRouteHandlers.call(this);
        // addBoardHandlers.call(this);
        // addBoardSettingsHandlers.call(this);
        // addBoardBrowserHandlers.call(this);
        // addKeyHandlers.call(this);
    }
    async #importDialog_import_onClick(event: Event)
    {
        const boardData = this.findElement<ImportManagerComponent>('import-manager').getRecord();
        await this.importBoard(boardData);

        this[SHAREDACCESSKEY].refreshBoards();
    }

    // settings
    #getAppSetting<T extends string|number|boolean|Blob|null|undefined = undefined>(key: string)
    {
        if(this.#data.isInitialized == false)
        {
            this.#showMessageDialog(SETTINGS_ERROR_MESSAGE, 'danger');
            throw new Error(`Data Access Error`);
        }
        return this.#data.getValue<T>(key);
    }
    async #saveAppSetting(key: string, value: string|number|boolean|Blob|null)
    {
        if(this.#data.isInitialized == false)
        {
            this.#showMessageDialog(SETTINGS_ERROR_MESSAGE, 'danger');
            throw new Error(`Data Access Error`);
        }
        await this.#data.setValue(key, value);
    }

    // boards
    async #refreshBoards()
    {
        const channel = this.#getChannel<BoardChannel>(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        const boardRecords = (await channel.getAll()).filter(item => item.deletedTimestamp == null);

        // const menuItems: HTMLAnchorElement[] = [];
        const collectionItems: CaptionedThumbnailElement[] = [];
        for(let i = 0; i < boardRecords.length; i++)
        {
            const boardRecord = boardRecords[i];

            // if(boardRecord.deletedTimestamp != null)
            // {
            //     continue;
            // }

            // const menuItem = this.#createBoardMenuItem(boardRecord);
            // menuItems.push(menuItem);

            // const collectionItem = this.#createBoardCollectionItem(boardRecord);
            // collectionItems.push(collectionItem);
        }

        const menu = this.findElement<AppMenuElement>('app-menu');
        menu.updateBoards(boardRecords);

        const boardBrowser = this.findElement<BoardBrowserElement>('board-browser');
        boardBrowser.updateBoards(boardRecords);

        // menu items
        // const boardsList = this.findElement('app-menu');
        // [...boardsList.querySelectorAll('a')].map(item => item.remove());
        // boardsList.append(...menuItems);

        // collection items
        // const boardBrowser = this.findElement('board-browser');
        // [...boardBrowser.querySelectorAll('captioned-thumbnail')].map(item => item.remove());
        // boardBrowser.append(...collectionItems);
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
    async #updateBoardRecordsAfterMove()
    {
        const toSave = await this.#getOrderedBoards();
        const channel = this.#getChannel<BoardChannel>(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        await channel.saveItems(toSave);
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

    async #refreshRecentBoards()
    {
        const boards = await this.#getRecentBoards();
        const welcomePanel = this.shadowRoot!.querySelector<WelcomePanelElement>('welcome-panel')!;
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
    async #getOrderedBoards()
    {
        const channel = this.#getChannel<BoardChannel>(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');

        const orderedIds: string[] = [];
        const boardItems = [...this.findElement('app-menu').querySelectorAll('a.board')] as HTMLElement[];
        for(let i = 0; i < boardItems.length; i++)
        {
            const boardItem = boardItems[i];
            const boardId = boardItem.dataset.route!.split('/')[1];
            if(boardId == null) { throw new Error('Unset board id'); }
            orderedIds.push(boardId);
        }

        const boards = await channel.getItems(orderedIds);

        const orderedBoards = [];
        for(let i = 0; i < orderedIds.length; i++)
        {
            const board = boards[boards.findIndex(value => value.id == orderedIds[i])];
            if(board == null) { throw new Error("Unknown board"); }
            board.order = i;
            orderedBoards.push(board);
        }

        return orderedBoards;
    }

    async #renderBoard(id: string)
    {
        const channel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        const settingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, 'danger');
        const board = await channel.get(id);
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

        const settings = await settingsChannel.get(board.taskSettingsId);
        if(settings != null)
        {
            this.#applyTaskSettings(taskBoard, settings);
        }

        const tasks = await channel.getTasks(id);
        await this.#loadLists(taskBoard, tasks);
        await this.#addBoardToRecentBoards(id, board.name);
        this.#refreshRecentBoards();
    }
    async #renderBoardBackground(board: TaskBoardRecord)
    {
        const channel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, 'danger');

        const taskBoard = this.findElement('task-board');
        if(board.backgroundImageId != null && board.backgroundImageId.trim() != "")
        {
            let backgroundImageUrl = this.#customImageUrls.get(board.backgroundImageId);
            if(backgroundImageUrl == null)
            {
                const backgroundImage = await channel.get(board.backgroundImageId);
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
    async #updateBoardSettings()
    {
        const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        const listChannel = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, 'danger');
        const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, 'danger');
        const imageChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, 'danger');

        const boards = this.findElement('boards');

        const boardSettings = this.findElement<BoardSettingsElement>('board-settings');
        const [ board, taskLists, taskSettings, removedListIds ] = boardSettings.getRecords();

        const [existingBoard, existingTaskLists, existingTaskSettings ] = await Promise.all([
            boardChannel.get(board.id),
            (await boardChannel.getTaskLists(board.id)).filter(item => item.deletedTimestamp == undefined),
            taskSettingsChannel.getItems(taskSettings.map(item => item.id))
        ]);
        if(existingBoard == null)
        { 
            MessageCardElement.notify(`An error occurred saving a task board.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.error(`An error occurred finding the existing board record.`);
            return;
        }
        
        const boardItem = boards.querySelector(`a[data-route*="${board.id}"]`) as HTMLAnchorElement;
        if(boardItem == null)
        {
            MessageCardElement.notify(`An error occurred saving a task board.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.error(`An error occurred finding the board's menu item.`);
            return;
        }
        board.order = [...this.shadowRoot!.querySelectorAll('a')].indexOf(boardItem);
        board.backgroundImageId = existingBoard.backgroundImageId;


        // convert backgroundImage into backgroundImageUpdates
        let existingImageActionProperties: CustomImageActionProperties = { id: board.backgroundImageId, updates: new Map() };
        const imageUpdates: CustomImageActionProperties[] = [];

        const imageValue = boardSettings.findElement<FileImageInputElement>('background-image').value;
        let backgroundImageRecord: CustomImageRecord|null = null;
        if(imageValue != null)
        {
            if(board.backgroundImageId != "")
            {
                const existingImage = await imageChannel.get(board.backgroundImageId);
                if(existingImage != null)
                {
                    await imageChannel.delete(existingImage.id);
                    const deletedImage = await imageChannel.get(board.backgroundImageId);
                    existingImageActionProperties.updates!.set('deletedTimestamp', { from: undefined, to: deletedImage?.deletedTimestamp });
                    imageUpdates.push(existingImageActionProperties);
                }
            }

            backgroundImageRecord = imageChannel.createFromImage(imageValue);
            backgroundImageRecord.boardId = board.id;
            backgroundImageRecord = await imageChannel.save(backgroundImageRecord);
            const newImageActionUpdates = { id: backgroundImageRecord.id, updates: new Map([['boardId', { from: "", to: backgroundImageRecord.boardId }]]) };
            imageUpdates.push(newImageActionUpdates);

            board.backgroundImageId = backgroundImageRecord.id;
        }
        else
        {
            if(board.backgroundImageId != "")
            {
                await imageChannel.delete(board.backgroundImageId);
                const deletedImage = await imageChannel.get(board.backgroundImageId);
                existingImageActionProperties.updates!.set('deletedTimestamp', { from: undefined, to: deletedImage?.deletedTimestamp });
                imageUpdates.push(existingImageActionProperties);
                board.backgroundImageId = "";
            }
        }

        // save data
        await Promise.allSettled([
            boardChannel.save(board),
            listChannel.saveItems(taskLists),
            taskSettingsChannel.saveItems(taskSettings),
            this.#data.lists!.deleteItems(removedListIds),
        ]);

        
        MessageCardElement.notify(`The board settings have been saved successfully!`, 
        this.getElement('notifications'), { type: MessageCardType.Success, heading: "Success!" });

        // update action history
        const [ 
            boardActionProperties,
            listActionProperties
        ] = this.#data.boardUpdate_getActionProperties({ existing: existingBoard, updated: board }
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

            await this.#addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.Board, boardActionProperties);
        }

        for(let i = 0; i < listActionProperties.length; i++)
        {
            const actionProperties = listActionProperties[i];
            await this.#addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.List, actionProperties);
        }

        const existingListIds = new Set(existingTaskLists.filter(item => item != undefined).map(item => item.id));
        const currentListIds = new Set(taskLists.filter(item => item != undefined).map(item => item.id));
        const addedLists = taskLists.filter(item => item != undefined && !existingListIds.has(item.id));
        for(let i = 0; i < addedLists.length; i++)
        {
            const addedList = addedLists[i];
            await this.#addActionHistoryEntry(HistoryEntryType.Create, HistoryEntryTargetType.List, { id: addedList.id });
        }
        const removedLists = existingTaskLists.filter(item => item != undefined && !currentListIds.has(item.id));
        for(let i = 0; i < removedLists.length; i++)
        {
            const removedList = removedLists[i];
            await this.#addActionHistoryEntry(HistoryEntryType.Delete, HistoryEntryTargetType.List, { id: removedList.id });
        }

        // update recent entries
        this.#updateRecentBoardEntry(board.id, board.name);
    }
    
    async #prepareExportData(id: string)
    {
        const exportBackgroundImage = this.findElement<BoardSettingsElement>('board-settings').findElement<HTMLInputElement>('export-background-image').checked;
        
        const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, 'danger');
        const imageChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, 'danger');

        const board = await boardChannel.get(id);
        if(board == null) { throw new Error(`Error loading board from id: ${id}`); }


        const tasks = await boardChannel.getTasks(id);

        const lists = await boardChannel.getTaskLists(id);
        const listExports: ListExport[] = [];
        const taskSettingsIds: string[] = [board.taskSettingsId];
        for(let i = 0; i < lists.length; i++)
        {
            const list = lists[i];
            if(list.deletedTimestamp != undefined) { continue; }
            const listTasks = tasks.filter(item => item.listId == list.id && item.deletedTimestamp == undefined);
            const listExport = new ListExport(list, undefined, listTasks);
            taskSettingsIds.push(list.taskSettingsId);
            listExports.push(listExport);
        }

        const backgroundImage = (exportBackgroundImage == true && board.backgroundImageId != null && board.backgroundImageId != '') ? (await imageChannel.get(board.backgroundImageId)) ?? undefined : undefined;

        const boardExportData = new BoardExport(board, undefined, backgroundImage);
        if(boardExportData.backgroundImage != null)
        {
            await (boardExportData.backgroundImage as ImageExport).loadImage();
        }
        else if(exportBackgroundImage == false)
        {
            delete boardExportData.backgroundImageId;
        }

        const taskSettings = await taskSettingsChannel.getItems(taskSettingsIds);
        for(let i = 0; i < taskSettings.length; i++)
        {
            const item = taskSettings[i];
            if(board.taskSettingsId == item.id)
            {
                boardExportData.taskSettings = item;
                continue;
            }

            const target = listExports.find(listItem => listItem.taskSettingsId == item.id);
            if(target == null)
            {
                throw new Error(`Error assigning task settings to target list`);
            }
            target.taskSettings = item;
        }
        boardExportData.lists = listExports;

        return boardExportData;
    }
    #downloadExportData(boardExportData: BoardExport)
    {
        const currentDate = new Date();
        const currentDateString = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;
        
        const filename = `taskboard_export_${currentDateString}.json`;
        
        const element = document.createElement('a');
        element.setAttribute('href', 
        'data:application/json;charset=utf-8, '
        + encodeURIComponent(JSON.stringify(boardExportData, null, 2)));
        element.setAttribute('download', filename);
        
        this.appendChild(element);
        element.click();
        this.removeChild(element);
    }

    // lists
    async #loadLists(board: TaskBoardElement, tasks: TaskRecord[])
    {
        const boardId = board.dataset.boardId;
        if(boardId == null)
        {
            MessageCardElement.notify(`An error occurred loading the board. Navigated back to Welcome page.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.error(new Error('Unable to add task when parent boards\'s data-board-id attribute is undefined.'));
            return;
        }

        const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        const settingsChannel = this.#getChannel(this.#data.taskSettings, LIST_ERROR_MESSAGE, 'danger');

        const lists = await boardChannel.getTaskLists(boardId);
        const taskSettings = await settingsChannel.getItems(lists.map(item => item.taskSettingsId));
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
            element.setAttribute('exportparts', "header:list-header, color-container:list-color-container, color:list-color, name:list-name, collapse-button:list-collapse, tasks:list-tasks, add-button:list-add-button");
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

    async #updateListRecord(taskListComponent: TaskListElement)
    {
        const lists = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, 'danger');

        const id = taskListComponent.dataset.tasklistId;
        if(id == null)
        {
            MessageCardElement.notify(`An error occurred saving a task list.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            throw new Error("Unable to update tasklist with unset \'data-tasklist-id\' attribute");
        }
        const taskList = await lists.get(id);
        if(taskList == null)
        {
            MessageCardElement.notify(`An error occurred saving a task list.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            throw new Error(`Unable to update tasklist. No tasklist found with target id (${id}).`);
        }

        const listPreviousName = taskList.name;
        const inputNameValue = taskListComponent.findPart<HTMLInputElement>('name').value;
        const listPreviousColor = taskList.color;
        const inputColorValue = taskListComponent.findPart<HTMLInputElement>('color').value;

        taskList.name = inputNameValue;
        taskList.color = inputColorValue;

        await lists.save(taskList);

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

        await this.#addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.List, properties);
    }
    #duplicateList(target: HTMLElement, list: TaskListRecord, settings: TaskSettingsRecord)
    {
        const taskLists = this.#getChannel<TaskListChannel>(this.#data.lists, DATA_ERROR_MESSAGE.replace('[subject]', "Task List"));
        const [ duplicateList, duplicateSettings ] = taskLists.create(list, settings);
        this.findElement<BoardSettingsElement>('board-settings').insertList(target, duplicateList, duplicateSettings);
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

    // tasks
    async #getOrderedTasks(tasklist: TaskListElement)
    {
        const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');

        const orderedIds: string[] = [];
        const taskItems = [...tasklist.querySelectorAll('task-card')] as HTMLElement[];
        for(let i = 0; i < taskItems.length; i++)
        {
            const item = taskItems[i];
            const id = item.getAttribute('data-task-id')!;
            if(id == null) { throw new Error('Unset task id'); }
            orderedIds.push(id);
        }

        const tasks = await channel.getItems(orderedIds);

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
        const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');
        const id = taskComponent.dataset.taskId;
        if(id == null)
        {
            MessageCardElement.notify(`An error occurred identifying a task.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            throw new Error("Unable to update task with unset \'data-tasklist-id\' attribute");
        }
        const task = await channel.get(id);
        if(task == null)
        {
            MessageCardElement.notify(`An error occurred identifying a task.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            throw new Error(`Unable to update task. No task found with target id (${id}).`);
        }
        return task;
    }

    async #registerTaskCard(card: TaskCardElement, listId: string, order: number)
    {
        const errorMessage = 'An error occured creating a new Task. Refreshing the application may help. If the problem persists, more detail can be found in your browsers development tools.';
        if(listId == null)
        {
            this.#showMessageDialog(errorMessage);
            throw new Error('Unable to add task when parent list\'s data-tasklist-id attribute is undefined.');
        }
        const boardId = this.findElement('task-board').dataset.boardId;
        if(boardId == null)
        {
            this.#showMessageDialog(errorMessage);
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
        const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');
        const task = channel.create(boardId, listId);
        task.order = order;
        await channel.save(task);

        this.#addActionHistoryEntry(HistoryEntryType.Create, HistoryEntryTargetType.Task, { id: task.id });

        return task;
    }
    async #updateTaskRecord(taskComponent: TaskCardElement, parentList: TaskListElement)
    {
        const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');

        const listId = parentList.dataset.tasklistId;
        if(listId == null)
        {
            MessageCardElement.notify(`An error occurred saving a task.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            throw new Error('Unable to update task when parent list\'s data-tasklist-id attribute is not available.');
        }

        const task = await this.#getTaskFromComponent(taskComponent);

        const previousValues = structuredClone(task);

        task.listId = listId;
        task.color = taskComponent.findPart<HTMLInputElement>('color').value;
        task.isFinished = taskComponent.findPart<HTMLInputElement>('is-finished').checked;
        task.description = taskComponent.value ?? "";
        
        const tasks = [...parentList.querySelectorAll('task-card')] as TaskCardElement[];
        task.order = tasks.indexOf(taskComponent);
        if(task.order == -1)
        {
            console.warn('Unable to find index of task in parent list');
            task.order = tasks.length;
        }

        await channel.save(task);

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

        await this.#addActionHistoryEntry(HistoryEntryType.Update, HistoryEntryTargetType.Task, properties);
    }
    async #deleteTaskRecord(taskComponent: TaskCardElement)
    {
        const channel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');
        const id = taskComponent.dataset.taskId;
        if(id == null)
        {
            MessageCardElement.notify(`An error occurred deleting a task.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            throw new Error('Unable to delete task when task\'s data-task-id attribute is not available.');
        }

        await channel.delete(id);

        const entry = await this.#addActionHistoryEntry(HistoryEntryType.Delete, HistoryEntryTargetType.Task, { id });
        if(entry != null)
        {
            this.#addUndoNotification("A task was just deleted", entry.getAttribute('data-entry-id')!);
        }
    }
    async #updateTaskRecordsAfterMove(target: TaskCardElement, parent: TaskListElement)
    {
        await this.#updateTaskRecord(target, parent);

        if(this.#data.tasks == null)
        {
            MessageCardElement.notify(`An error occurred moving a task.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.warn(`An error occurred accessing task data. Unable to save task order.`);
            return;
        }

        const toSave = await this.#getOrderedTasks(parent);
        await this.#data.tasks.saveItems(toSave); 
    }
    #initTaskCard(card: TaskCardElement, task: TaskRecord)
    {
        card.dataset.taskId = task.id;
        card.setAttribute('color', task.color)
        card.setAttribute('is-finished', task.isFinished.toString());
        card.setAttribute('description', task.description);
        card.setAttribute('draggable', "true");
        card.setAttribute('part', 'task-card');
        card.setAttribute('exportparts', "description: task-description, is-finished:task-checkbox, color-container:task-color-container, color:task-color, remove-button:task-remove-button, handle:task-handle, finished-indicator:task-finished-indicator");
        card.style.setProperty('--task-color', task.color);
        card.findPart('description').addEventListener('keyup', taskDescription_onKeyUp.bind(this));
    }

    // history    
    async #refreshActionHistory()
    {
        const channel = this.#getChannel(this.#data.historyEntries, HISTORY_ERROR_MESSAGE, 'danger');

        const configPanel = this.getElement<ConfigPanelElement>('config-panel');
        [...configPanel.querySelectorAll('[slot="action-history"]')].map(item => item.remove());

        configPanel.preventDefaultHistoryAction();

        const records = await channel.getAll('timestamp');
        if(records.length == 0)
        {
            return;
        }

        let activeEntryIndex = await this.#getAppSetting<number>(AppSettingKey.ActiveEntryIndex);
        if(activeEntryIndex != null && activeEntryIndex > records.length)
        {
            activeEntryIndex = records.length - 1;
        }

        let entries: HTMLElement[] = [];
        let activeEntry: HTMLElement | null = null;
        for(let i = 0; i < records.length; i++)
        {
            const record = records[i];
            const entry = this.#createActionHistoryEntryElement(record);
            entries.push(entry);
            if(i == activeEntryIndex)
            {
                entry.toggleAttribute(ATTRIBUTENAME_ACTIVE, true); 
                activeEntry = entry;
                continue;
            }
            if(activeEntry != null)
            {
                entry.toggleAttribute(ATTRIBUTENAME_REVERSED, true);
            }
        }
        if(activeEntry == null)
        {
            entries = entries.map(item => { item.toggleAttribute(ATTRIBUTENAME_REVERSED, true); return item; });
        }
        configPanel.append(...entries);
        
        configPanel.allowDefaultHistoryAction();
    }
    #createActionHistoryEntryElement(entry: HistoryEntryRecord)
    {
        const element = document.createElement('div');
        element.toggleAttribute('data-entry', true);
        element.setAttribute('timestamp', entry.timestamp.toString());
        element.setAttribute('data-entry-id', entry.id);
        element.setAttribute('part', "action-history-entry");
        element.setAttribute('slot', "action-history");
        element.innerHTML = `<span class="action-type">${entry.action.toUpperCase()}</span>
        <span class="data">
            <span class="target-type">${entry.data.targetType[0].toUpperCase()}${entry.data.targetType.substring(1)}</span>
            <span class="target-id">${entry.data.properties.id}</span>
        </span>`;
        return element;
    }
    async #handleActionEntryReverse(targetEntry: HTMLElement, previousEntry: HTMLElement|undefined, targetIndex: number, previousEntryIndex: number)
    {
        const actionType = targetEntry.querySelector('.action-type')?.textContent?.toLowerCase();
        const recordType = targetEntry.querySelector('.target-type')?.textContent?.toLowerCase()
        const recordId = targetEntry.querySelector('.target-id')?.textContent;
        const entryId = targetEntry.getAttribute('data-entry-id');
        if(actionType == null || recordType == null || recordId == null || entryId == null)
        { 
            console.error(new Error('Required property was not found.')); return;
        }

        const channel = (recordType == 'board')
        ? this.#data.boards 
        : (recordType == 'list')
        ? this.#data.lists
        : (recordType == 'task')
        ? this.#data.tasks
        : (recordType == 'image')
        ? this.#data.customImages
        : null;
        
        if(channel == null) 
        {
            throw new Error(`Unknown record type: ${recordType}`);
        }

        if(actionType == 'create')
        {
            await channel.delete(recordId);
        }
        else if (actionType == 'update')
        {
            const currentEntry = await this.#data.historyEntries?.get(entryId);
            if(currentEntry == null) { throw new Error('Unable to find target entry.'); }
            const target = await channel.get(recordId);
            if(target == null) { throw new Error('Unable to find target record.'); }
            await this.#reverseUpdate(channel, currentEntry, target)
        }
        else if (actionType == 'delete')
        {
            await channel.restore(recordId);
        }
        else
        {
            console.error(`Unknown action type: ${actionType}`);
        }
        
        await this.#saveAppSetting(AppSettingKey.ActiveEntryIndex, (targetIndex > -1) ? targetIndex : null);
    }
    async #reverseUpdate(channel: BoardChannel | TaskListChannel | TaskChannel | CustomImageChannel, currentEntry: HistoryEntryRecord<HistoryEntryTargetType>, target: CustomImageRecord | TaskRecord | TaskListRecord | TaskBoardRecord)
    {
        if(currentEntry.data.properties.updates != null)
        {
            let isRestorationUpdate = false;
            for(const [key, value] of currentEntry.data.properties.updates)
            {
                if(key == 'deletedTimestamp')
                {
                    isRestorationUpdate = true;
                    continue;
                }
                (target as unknown as any)[key] = value.from;
            }
            await channel.save(target as unknown as any);
            if(isRestorationUpdate == true)
            {
                await channel.delete(currentEntry.data.properties.id);
            }
        }

        if(currentEntry.data.properties.taskSettings != null && currentEntry.data.properties.taskSettings.updates != null)
        {
            const settingsTarget = await this.#data.taskSettings?.get(currentEntry.data.properties.taskSettings.id);
            if(settingsTarget == null) { throw new Error('Unable to find target record.'); }
            for(const [key, value] of currentEntry.data.properties.taskSettings.updates)
            {
                (settingsTarget as unknown as any)[key] = value.from;
            }
            await this.#data.taskSettings?.save(settingsTarget as unknown as any);
        }

        if(currentEntry.data.properties.backgroundImages != null)
        {
            const updatedImages: CustomImageRecord[] = [];
            const deletedImageIds: string[] = [];
            for(let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++)
            {
                const data = currentEntry.data.properties.backgroundImages[i];
                const imageTarget = await this.#data.customImages?.get(data.id);
                if(imageTarget == null) { throw new Error('Unable to find target record.'); }
                for(const [key, value] of currentEntry.data.properties.backgroundImages[i].updates!)
                {
                    // if boardId going from "" to id, this is an insert; treat it like undoing an image insert
                    if(key == 'boardId' && value.from == "")
                    {
                        deletedImageIds.push(currentEntry.data.properties.backgroundImages[i].id);
                        continue;
                    }
                    (imageTarget as unknown as any)[key] = value.from;
                }
                updatedImages.push(imageTarget);
            }
            await this.#data.customImages?.saveItems(updatedImages);
            await this.#data.customImages?.deleteItems(deletedImageIds);
        }
    }
    async #handelActionEntryActivate(targetEntry: HTMLElement, previousEntry: HTMLElement|undefined, targetIndex: number, previousEntryIndex: number)
    {
        const actionType = targetEntry.querySelector('.action-type')?.textContent?.toLowerCase();
        const recordType = targetEntry.querySelector('.target-type')?.textContent?.toLowerCase()
        const recordId = targetEntry.querySelector('.target-id')?.textContent;
        const entryId = targetEntry.getAttribute('data-entry-id');
        if(actionType == null || recordType == null || recordId == null || entryId == null) { console.error(new Error('Required property was not found.')); return; }

        const channel = (recordType == 'board')
        ? this.#data.boards 
        : (recordType == 'list')
        ? this.#data.lists
        : (recordType == 'task')
        ? this.#data.tasks
        : (recordType == 'image')
        ? this.#data.customImages
        : null;
        
        if(channel == null) 
        {
            throw new Error(`Unknown record type: ${recordType}`);
        }

        if(actionType == 'create')
        {
            await channel.restore(recordId);
        }
        else if (actionType == 'update')
        {
            const currentEntry = await this.#data.historyEntries?.get(entryId);
            if(currentEntry == null) { throw new Error('Unable to find target entry.'); }
            const target = await channel.get(recordId);
            if(target == null) { throw new Error('Unable to find target record.'); }
            await this.#activateUpdate(channel, currentEntry, target);
        }
        else if (actionType == 'delete')
        {
            await channel.delete(recordId);
        }
        else
        {
            console.error(`Unknown action type: ${actionType}`);
        }

        await this.#saveAppSetting(AppSettingKey.ActiveEntryIndex, (targetIndex > -1) ? targetIndex : null);
    }
    async #activateUpdate(channel: BoardChannel | TaskListChannel | TaskChannel | CustomImageChannel, currentEntry: HistoryEntryRecord<HistoryEntryTargetType>, target: CustomImageRecord | TaskRecord | TaskListRecord | TaskBoardRecord)
    {
        if(currentEntry.data.properties.updates != null)
        {
            let isRestorationUpdate = false;
            for(const [key, value] of currentEntry.data.properties.updates)
            {
                if(key == 'deletedTimestamp')
                {
                    isRestorationUpdate = true;
                    continue;
                }
                (target as unknown as any)[key] = value.to;
            }
            await channel.save(target as unknown as any);
            if(isRestorationUpdate == true)
            {
                await channel.restore(currentEntry.data.properties.id);
            }
        }

        if(currentEntry.data.properties.taskSettings != null && currentEntry.data.properties.taskSettings.updates != null)
        {
            const settingsTarget = await this.#data.taskSettings?.get(currentEntry.data.properties.taskSettings.id);
            if(settingsTarget == null) { throw new Error('Unable to find target record.'); }
            for(const [key, value] of currentEntry.data.properties.taskSettings.updates)
            {
                (settingsTarget as unknown as any)[key] = value.to;
            }
            await this.#data.taskSettings?.save(settingsTarget as unknown as any);
        }

        if(currentEntry.data.properties.backgroundImages != null)
        {
            // doesn't clear from image cache when undo after remove
            const updatedImages: CustomImageRecord[] = [];
            const restoredImageIds: string[] = [];
            for(let i = 0; i < currentEntry.data.properties.backgroundImages.length; i++)
            {
                const data = currentEntry.data.properties.backgroundImages[i];
                const imageTarget = await this.#data.customImages?.get(data.id);
                if(imageTarget == null) { throw new Error('Unable to find target record.'); }
                for(const [key, value] of currentEntry.data.properties.backgroundImages[i].updates!)
                {
                    // if boardId going from "" to id, this is an insert; treat it like redoing an image insert
                    if(key == 'boardId' && value.from == "")
                    {
                        restoredImageIds.push(currentEntry.data.properties.backgroundImages[i].id);
                        continue;
                    }
                    (imageTarget as unknown as any)[key] = value.to;
                }
                updatedImages.push(imageTarget);
            }
            await this.#data.customImages?.saveItems(updatedImages);
            await this.#data.customImages?.restoreItems(restoredImageIds);
        }
    }

    async #addActionHistoryEntry<T extends HistoryEntryTargetType>(action: HistoryEntryType, type: T, properties: PropertiesType<T>)
    {
        const historyLength = parseFloat(await this.#getAppSetting(AppSettingKey.HistoryLength) ?? DEFAULT_HISTORY_LENGTH);
        if(historyLength == 0) { return; }

        const channel = await this.#getChannel(this.#data.historyEntries, HISTORY_ERROR_MESSAGE, 'danger');
        const history = this.findElement('action-history');
        const historyEntries = [...history.children] as HTMLElement[];
        const elementsToRemove = historyEntries.filter(item => item.hasAttribute(ATTRIBUTENAME_REVERSED));
        const removeIds: string[] = [];
        if(elementsToRemove.length > 0)
        {
            for(let i = 0; i < elementsToRemove.length; i++)
            {
                const entryId = elementsToRemove[i].getAttribute('data-entry-id');
                if(entryId != null)
                {
                    removeIds.push(entryId)
                }
                elementsToRemove[i].remove();
            }
        }

        const data = new HistoryEntryData(type, properties);
        const entry = channel.create(data, action);
        await channel.save(entry);

        const entries = await channel.getAll('timestamp');
        const removeCount = entries.length - historyLength;
        if(removeCount > 0)
        {
            for(let i = 0; i < removeCount; i++)
            {
                removeIds.push(entries[i].id);
                history.querySelector(`[data-entry-id="${entries[i].id}"]`)?.remove();
            }
        }
        if(removeIds.length > 0)
        {
            await channel.deleteIfExists(removeIds);
        }

        const entryElement = this.#createActionHistoryEntryElement(entry);   
        history.append(entryElement);
        const activeIndex = [...history.children].indexOf(entryElement);
        await this.#saveAppSetting(AppSettingKey.ActiveEntryIndex, (activeIndex > -1) ? activeIndex : null);

        return entryElement;
    }

    async #prepareHistoryEntries(historyElement: ActionHistoryElement, startIndex: number)
    {
        if(this.#data.historyEntries == null)
        {
            MessageCardElement.notify(`An error occurred accessing Action History data. Unable to refresh action history.`, 
            this.getElement('notifications'), { type: MessageCardType.Error });
            console.error(new Error(`An error occurred accessing Action History data. Unable to refresh action history.`));
            return;
        }
        const entries = await this.#data.historyEntries.getAll('timestamp');

        for(let i = 0; i < entries.length; i++)
        {
            const element = historyElement.querySelector(`[data-entry-id="${entries[i].id}"]`) as HTMLElement;
            if(i < startIndex)
            {
                element.removeAttribute(ATTRIBUTE_PREPARED_FOR_DELETE);
            }
            else
            {
                element.toggleAttribute(ATTRIBUTE_PREPARED_FOR_DELETE, true);
            }
        }        
    }
    async #applyHistoryLength(actionHistoryLength: number)
    {
        await this.#saveAppSetting(AppSettingKey.HistoryLength, actionHistoryLength);

        if(this.#data.historyEntries == null)
        {
            // todo: add toast to inform user
            console.warn(`An error occurred accessing Action History data. Unable to refresh action history.`);
            return;
        }
        const entries = await this.#data.historyEntries.getAll('timestamp');

        let startIndex = actionHistoryLength;
        if(startIndex > 0) { startIndex--; } // fix zero index offset if non-zero number

        const ids: string[] = [];
        for(let i = startIndex; i < entries.length; i++)
        {
            ids.push(entries[i].id);
        }
        await this.#data.historyEntries.deleteItems(ids);
        this.#refreshActionHistory();
    }

    async #getRecentBoards()
    {
        let boardsString = await this.#getAppSetting<string>(AppSettingKey.RecentBoards);
        if(boardsString == null)
        {
            boardsString = "[]";
        }
        const boards = JSON.parse(boardsString) as Array<RecentBoardData>;
        boards.sort((a, b) => b.timestamp - a.timestamp);
        return boards;
    }
    async #addBoardToRecentBoards(id: string, description: string)
    {
        const boards = await this.#getRecentBoards();
        const existingEntry = boards.find(item => item.id == id);
        if(existingEntry != null) { return; }

        boards.unshift({id, description, timestamp: Date.now() });
        if(boards.length > 10)
        {
            boards.pop();
        }
        const boardsString = JSON.stringify(boards);
        this.#saveAppSetting(AppSettingKey.RecentBoards, boardsString);
    }
    async #updateRecentBoardEntry(id: string, description?: string)
    {
        const boards = await this.#getRecentBoards();
        const existingEntry = boards.find(item => item.id == id);
        if(existingEntry == null) { return; }

        existingEntry.description = description ?? existingEntry.description;
        existingEntry.timestamp = Date.now();

        const boardsString = JSON.stringify(boards);
        this.#saveAppSetting(AppSettingKey.RecentBoards, boardsString);
        this.#refreshRecentBoards();
    }
    async #removeBoardFromRecentBoards(id: string)
    {
        const boards = await this.#getRecentBoards();
        const existingEntry = boards.find(item => item.id == id);
        if(existingEntry == null) { return; }
        boards.splice(boards.indexOf(existingEntry), 1);
        const boardsString = JSON.stringify(boards);
        this.#saveAppSetting(AppSettingKey.RecentBoards, boardsString);
    }

    // cache    
    async #refreshDeletedItems()
    {
        const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        const listChannel = this.#getChannel(this.#data.lists, BOARD_ERROR_MESSAGE, 'danger');
        const taskChannel = this.#getChannel(this.#data.tasks, BOARD_ERROR_MESSAGE, 'danger');
        const imageChannel = this.#getChannel(this.#data.customImages, BOARD_ERROR_MESSAGE, 'danger');

        const deletedItems = [];

        const boards = await boardChannel.getAll();
        const lists = await listChannel.getAll();
        const tasks = await taskChannel.getAll();
        const images = await imageChannel.getAll();

        const deletedBoards = boards.filter(item => item.deletedTimestamp != null);
        const deletedLists = lists.filter(item => item.deletedTimestamp != null);
        const deletedTasks = tasks.filter(item => item.deletedTimestamp != null);
        const deletedImages = images.filter(item => item.deletedTimestamp != null);

        for(let i = 0; i < deletedBoards.length; i++)
        {
            const record = deletedBoards[i];
            const element = this.#createDeletedItem(record, 'board', true, record.deletedTimestamp!);
            deletedItems.push(element);
        }
        for(let i = 0; i < deletedLists.length; i++)
        {
            const record = deletedLists[i];
            const canRestore = deletedBoards.find(item => item.id == record.boardId && item.deletedTimestamp != null) == null;
            const element = this.#createDeletedItem(record, 'list', canRestore, record.deletedTimestamp!);
            deletedItems.push(element);
        }
        for(let i = 0; i < deletedTasks.length; i++)
        {
            const record = deletedTasks[i];
            const canRestore = deletedBoards.find(item => item.id == record.boardId && item.deletedTimestamp != null) == null;
            const element = this.#createDeletedItem(record, 'task', canRestore, record.deletedTimestamp!);
            deletedItems.push(element);
        }

        const deletedImageElements: HTMLElement[] = [];
        for(let i = 0; i < deletedImages.length; i++)
        {
            const record = deletedImages[i];
            const element = this.#createDeletedItem(record, 'image', true, record.deletedTimestamp!);
            deletedImageElements.push(element);
        }
        const configPanel = this.findElement('config-panel');

        // deleted images
        [...configPanel.querySelectorAll('[slot="deleted-images"]')].map(item => item.remove());
        configPanel.append(...deletedImageElements);

        // deleted items
        [...configPanel.querySelectorAll('[slot="deleted-items"]')].map(item => item.remove());
        configPanel.append(...deletedItems);
    }
    #createDeletedItem(data: unknown, recordType: 'board'|'list'|'task'|'image', canRestore: boolean, timestamp: number)
    {
        const item = document.createElement('div');
        item.setAttribute('data-record-type', recordType);
        item.setAttribute('part', 'deleted-item');
        item.setAttribute('slot', (recordType == 'image' ? 'deleted-images' : 'deleted-items'));
        item.setAttribute('data-timestamp', timestamp.toString());

        const label = document.createElement('span');
        label.setAttribute('part', 'deleted-item-label');

        let record: TaskBoardRecord|TaskListRecord|TaskRecord|CustomImageRecord;
        if(recordType == 'board')
        {
            record = data as TaskBoardRecord;
            label.textContent = record.name;
        }
        else if (recordType == 'list')
        {
            record = data as TaskListRecord;
            label.textContent = record.name;
        }
        else if (recordType == 'task')
        {
            record = data as TaskRecord;
            label.textContent = (record.description.trim() == "") ? "[Blank Task]" : record.description;
        }
        else if (recordType == 'image')
        {
            record = data as CustomImageRecord;
            label.textContent = record.name;
        }
        else
        {
            throw new Error('Unknown deleted record type');
        }

        item.setAttribute('data-record-id', record.id);

        item.append(label);

        if(canRestore == false)
        {
            item.dataset.restore = 'false';
        }

        return item;
    }

    async #restoreDeletedItem(targetType: HistoryEntryTargetType|null, recordId: string, timestamp: number)
    {
        if(targetType == null)
        {
            console.error("Unable to restore record with unknown type or id");
            return;
        }
        const channel = (targetType == 'board')
        ? this.#data.boards 
        : (targetType == 'list')
        ? this.#data.lists
        : (targetType == 'task')
        ? this.#data.tasks
        : null;

        if(channel == null)
        {
            console.error("Unable to restore record. Error accessing data.");
            return;
        }

        await channel.restore(recordId);
        const updates: Map<string, PropertyUpdate> = new Map([ ['deletedTimestamp', { from: timestamp, to: undefined }] ]);
        const properties = {
            id: recordId,
            updates
        };
        await this.#addActionHistoryEntry(HistoryEntryType.Update, targetType, properties);
        
        if(targetType == HistoryEntryTargetType.Board)
        {
            this.openBoard(recordId);
            this.#refreshBoards();
        }
        this.#refreshDeletedItems();
    }
    
    async #removeExpiredData()
    {
        const boardChannel = this.#getChannel(this.#data.boards, BOARD_ERROR_MESSAGE, 'danger');
        const listChannel = this.#getChannel(this.#data.lists, LIST_ERROR_MESSAGE, 'danger');
        const taskChannel = this.#getChannel(this.#data.tasks, TASK_ERROR_MESSAGE, 'danger');
        const taskSettingsChannel = this.#getChannel(this.#data.taskSettings, BOARD_ERROR_MESSAGE, 'danger');
        const imageChannel = this.#getChannel(this.#data.customImages, IMAGE_ERROR_MESSAGE, 'danger');

        const daysToPersistData = (await this.#getAppSetting(AppSettingKey.DaysToPersistData)) ?? DEFAULT_PERSIST_DAYS;
        const comparisonTime = Date.now() - (parseInt(daysToPersistData) * MILLISECONDSINDAY);
        
        const boards = await boardChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
        const lists = await listChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
        const tasks = await taskChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
        const taskSettings = await taskSettingsChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
        const customImages = await imageChannel.getAll() as (DataRecord & { deletedTimestamp: number })[];
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
    #getExpiredRecordIds(allRecords: (DataRecord & { deletedTimestamp: number })[], comparisonTime: number)
    {
        const toDelete: string[] = [];
        for(let i = 0; i < allRecords.length; i++)
        {
            const record = allRecords[i];
            if(record.deletedTimestamp != null && record.deletedTimestamp < comparisonTime)
            {
                toDelete.push(record.id);
            }
        }
        return toDelete;
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

    async deleteItem(item: HTMLElement, refresh: boolean = true)
    {
        if(this.#data.historyEntries == null)
        {
            // todo: add toast to inform user
            console.warn(`An error occurred accessing Action History data.`);
            return;
        }
        
        const recordId = item.dataset.recordId;
        if(recordId == null) { throw new Error('Unable to manage entry with unset "data-record-id" attribute'); }
        const recordType = item.dataset.recordType;
        if(recordType == null) { throw new Error('Unable to manage entry with unset "data-record-type" attribute'); }
        
        const channel = (recordType == 'board')
        ? this.#data.boards 
        : (recordType == 'list')
        ? this.#data.lists
        : (recordType == 'task')
        ? this.#data.tasks
        : null;
        if(channel == null)
        {
            // todo: add toast to inform user
            console.warn(`An error occurred accessing board data.`);
            return;
        }

        await channel.delete(recordId, true);

        const historyEntries = await this.#data.historyEntries.getAll();
        const toDelete: string[] = [];
        for(let i = 0; i < historyEntries.length; i++)
        {
            const entry = historyEntries[i];
            const entryId = entry.data.properties.id;
            if(entryId == recordId)
            {
                toDelete.push(entry.id);
            }
        }

        await this.#data.historyEntries.deleteItems(toDelete);

        if(refresh == true)
        {
            this.#refreshActionHistory();
        }
    }
    async deleteImage(item: HTMLElement, refresh: boolean = true)
    {
        if(this.#data.customImages == null)
        {
            // todo: add toast to inform user
            console.warn(`An error occurred accessing custom image data.`);
            return;
        }

        if(this.#data.historyEntries == null)
        {
            // todo: add toast to inform user
            console.warn(`An error occurred accessing Action History data.`);
            return;
        }

        const recordId = item.dataset.recordId;
        if(recordId == null) { throw new Error('Unable to manage image entry with unset "data-record-id" attribute'); }
        await this.#data.customImages.delete(recordId, true);

        const historyEntries = await this.#data.historyEntries.getAll();
        const updatedEntries: HistoryEntryRecord[] = [];
        for(let i = 0; i < historyEntries.length; i++)
        {
            const entry = historyEntries[i];
            const imageUpdates = entry.data.properties.backgroundImages;
            if(imageUpdates == null)
            {
                continue;
            }
            const toKeep: BasicActionProperties[] = [];
            for(let j = 0; j < imageUpdates.length; j++)
            {
                if(imageUpdates[j].id != recordId)
                {
                    toKeep.push(imageUpdates[i]);
                }
            }
            entry.data.properties.backgroundImages = toKeep;
            updatedEntries.push(entry);
        }

        await this.#data.historyEntries.saveItems(updatedEntries);

        if(refresh == true)
        {
            this.#refreshActionHistory();
        }
    }

    //utils
    #getChannel<T extends DataChannel>(channel: T|undefined, errorMessage: string, type: 'info'|'warn'|'danger' = 'info')
    {
        if(this.#data.isInitialized == false || channel == null)
        {
            this.#showMessageDialog(errorMessage, type);
            throw new Error(`Data Access Error`);
        }
        return channel;
    }
    
    #getIdFromRoute()
    {
        const pathAttribute = this.findElement('app-router').getAttribute('path') ?? "";
        if(pathAttribute == null)
        {
            throw new Error('Unable to edit board data when path data is unavailable');
        }
        const attributeArray = pathAttribute.split('#');
        const path = attributeArray[0];
        const pathArray = path.split('/');
        const id = pathArray[pathArray.length-1];
        return id;
    }
    
    #getConfirmation(message: string, type: 'info'|'warn'|'danger' = 'info')
    {
        this.getElement('confirmation-dialog').querySelector(`route-page[path="${type}"]`)!.innerHTML = message;
        this.getElement<HTMLDialogElement>('confirmation-dialog').showModal();
        this.getElement<PathRouterElement>('confirmation-router').navigate(type);
        return new Promise<boolean>((resolve) => 
        {
            this.getElement<HTMLDialogElement>('confirmation-dialog-form').addEventListener('submit', (event) =>
            {
                if((event as SubmitEvent).submitter == this.getElement('confirmation-confirm-button'))
                {
                    resolve(true);
                    return;
                }
                resolve(false);
            }, { once: true });
        });
    }
    #showMessageDialog(message: string, type: 'info'|'warn'|'danger' = 'info')
    {
        const dialog = this.getElement<HTMLDialogElement>('confirmation-dialog');
        dialog.querySelector(`path-route[path="${type}"]`)!.innerHTML = message;
        dialog.show();
        dialog.classList.add('message');
        this.getElement<PathRouterElement>('confirmation-router').navigate(type);
        return new Promise<void>((resolve) => 
        {
            this.getElement<HTMLDialogElement>('confirmation-dialog-form').addEventListener('submit', (event) =>
            {
                dialog.classList.remove('message');
                resolve();
            }, { once: true });
        });
    }

}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, TaskboardManagerElement);
}