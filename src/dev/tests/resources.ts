import type { TaskBoardRecord } from "../../data/records/task-board.record";
import type { TaskboardManagerElement } from "../../taskboard-manager";

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
        return SUBJECT.saveBoard();
    },
    async deleteBoard(boardId: string)
    {
        // return SUBJECT.deleteBoard();
    },
    navigate(key: NavigationKeyType)
    {
        if(key == NavigationKey.HistoryPanel)
        {
            // open config
            // click history tab
        }
    },
    getBoardItems()
    {

    },
};