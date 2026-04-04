import { Hook, type TestContext } from "@magnit-ce/test-runner";
import type { TaskboardManagerElement } from "../../taskboard-manager";
import { HistoryPanelElement } from "../../components/config-panel/history-panel/history-panel";
import type { TaskBoardRecord } from "../../data/records/task-board.record";
import { NavigationKey, SUBJECT, SubjectManager, testBoard } from "./resources";


export default {
    [Hook.RequiredBeforeAny]: async () =>
    {
        // create a board
        await SubjectManager.createBoard();

        return `Board has been added`;
    },

    'should restore taskboard when previous history entry is clicked after taskbaord has been deleted': async (_context: TestContext) =>
    {
        // issue: https://github.com/catapart/magnit-ceapp-taskboard-manager/issues/69

        
        // update the board's name
        const boardName = "Test Board | Action History";
        testBoard.name = boardName;
        await SubjectManager.saveBoard(testBoard);

        // delete the board
        await SubjectManager.deleteBoard(testBoard.id);

        // open config panel
        // navigate to history panel
        await SubjectManager.navigate(NavigationKey.HistoryPanel);

        // click on the "create board" entry
        const historyPanel = SUBJECT.findElement<HistoryPanelElement>('history-panel');
        const entry = historyPanel.shadowRoot!.querySelector('.entry');
        if(entry == null)
        {
            throw new Error("Unable to find create board entry");
        }
        console.log(historyPanel, entry);
        // entry.click();

        // close the config panel
        const configPanel = SUBJECT.findElement<HistoryPanelElement>('config-panel');
        const closeConfigButton = configPanel.shadowRoot!.querySelector<HTMLButtonElement>('#close-config-button')!;
        closeConfigButton.click();

        // observe the board items in the app menu
        const items = SubjectManager.getBoardItems();
        console.log(items);

        const result = document.createElement('div');

        const isSuccessful: boolean = false;

        return { success: isSuccessful, value: result };
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
}