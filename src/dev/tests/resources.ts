import { AppMenuElement } from "../../components/app-menu/app-menu";
import { ConfigPanelElement } from "../../components/config-panel/config-panel";
import type { HistoryPanelElement } from "../../components/config-panel/history-panel/history-panel";
import type { TaskBoardRecord } from "../../data/records/task-board.record";
import type { TaskboardManagerElement } from "../../taskboard-manager";

// tests to make:
// tasklist
// taskcard
// import
// export
// notifications
// events
// app settings
// search
// 

export const SUBJECT: TaskboardManagerElement = document.querySelector('taskboard-manager')!;

export const NavigationKey = 
{
    HistoryPanel: 'history',
} as const;
export type NavigationKeyType = typeof NavigationKey[keyof typeof NavigationKey];


export let testBoard: TaskBoardRecord;
export const SubjectManager = 
{
    async createBoard()
    {
        testBoard = await SUBJECT.addBoard();
        return testBoard;
    },
    saveBoard(board: TaskBoardRecord)
    {
        return SUBJECT.saveBoard(board);
    },
    async deleteBoard(boardId: string)
    {
        return SUBJECT.deleteBoard(boardId);
    },
    navigate(key: NavigationKeyType)
    {
        return new Promise<void>(async (resolve) =>
        {
            if(key == NavigationKey.HistoryPanel)
            {
                console.log(key);
                // open config
                const menu = SUBJECT.findElement<AppMenuElement>('app-menu-container');
                const configButton = menu.findElement<HTMLButtonElement>('open-settings-button');
                configButton.click();
                setTimeout(() =>
                {
                    // click history tab
                    const configPanel = SUBJECT.findElement<ConfigPanelElement>('config-panel');
                    const historyTabAnchor = configPanel.findElement('history-nav-item');
                    historyTabAnchor.click();
                    setTimeout(() =>
                    {
                        resolve();
                    }, 100);
                }, 250);
            }
        });
    },
    getBoardItems()
    {
        const appMenu = SUBJECT.findElement('app-menu-container');
        const items = Array.from(appMenu.shadowRoot!.querySelectorAll('.board')) as HTMLElement[];
        return items;
    },
    getHistoryEntries()
    {
        const configPanel = SUBJECT.findElement<ConfigPanelElement>('config-panel');
        const historyPanel = configPanel.findElement<HistoryPanelElement>('history-panel');
        const entries = Array.from(historyPanel.shadowRoot!.querySelectorAll<HTMLAnchorElement>('[data-entry]')) as HTMLAnchorElement[];
        return entries;
    },
    deleteHistoryEntries(...ids: string[])
    {
        return SUBJECT.removeHistoryEntries(...ids);
    }
};