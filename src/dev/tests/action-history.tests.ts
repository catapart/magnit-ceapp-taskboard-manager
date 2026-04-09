import { Hook, prompt, type TestContext } from "@magnit-ce/test-runner";
import type { TaskboardManagerElement } from "../../taskboard-manager";
import { HistoryPanelElement } from "../../components/config-panel/history-panel/history-panel";
import type { TaskBoardRecord } from "../../data/records/task-board.record";
import { NavigationKey, SUBJECT, SubjectManager, testBoard } from "./resources";
import type { ConfigPanelElement } from "../../components/config-panel/config-panel";


export default {
    [Hook.RequiredBeforeAny]: async () =>
    {
        // create a board
        await SubjectManager.createBoard();

        // update the board's name
        const boardName = "Test Board | Action History";
        testBoard.name = boardName;
        await SubjectManager.saveBoard(testBoard);

        return `Board has been added`;
    },
    'should add entry when new taskboard is created': async (_context: TestContext) =>
    {
        
    },
    'should delete taskboard when history undo button is clicked directly after taskboard entry': async (_context: TestContext) =>
    {
        
    },
    'should restore taskboard when history redo button is clicked while next reversed entry is taskboard entry': async (_context: TestContext) =>
    {
        
    },
    'should delete taskboard when message-card undo button is clicked': async (_context: TestContext) =>
    {
        
    },
    'should restore taskboard when history redo button is clicked directly after message-card undo button is clicked': async (_context: TestContext) =>
    {
        
    },
    [Hook.RequiredAfterAny]: async () =>
    {
        // delete board
        await SubjectManager.deleteBoard(testBoard.id);

        // remove history items

        return `Board has been deleted`;
    },
}