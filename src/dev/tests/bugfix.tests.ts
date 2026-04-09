import { type TestContext } from "@magnit-ce/test-runner";
import { HistoryPanelElement } from "../../components/config-panel/history-panel/history-panel";
import { NavigationKey, SUBJECT, SubjectManager, testBoard } from "./resources";
import type { ConfigPanelElement } from "../../components/config-panel/config-panel";


export default {
    'should restore taskboard when previous history entry is clicked after taskbaord has been deleted': async (context: TestContext) =>
    {
        
        // issue: https://github.com/catapart/magnit-ceapp-taskboard-manager/issues/69

        // create a board
        await SubjectManager.createBoard();
        
        // update the board's name
        const boardName = "Test Board | Action History";
        testBoard.name = boardName;
        await SubjectManager.saveBoard(testBoard);

        // delete the board
        await SubjectManager.deleteBoard(testBoard.id);

        // navigate to history panel
        await SubjectManager.navigate(NavigationKey.HistoryPanel);

        // click on the "create board" entry
        const configPanel = SUBJECT.findElement<ConfigPanelElement>('config-panel');
        // const historyPanel = configPanel.findElement<HistoryPanelElement>('history-panel');
        // const entry = historyPanel.shadowRoot!.querySelector<HTMLAnchorElement>('[data-entry]');
        let entries = await SubjectManager.getHistoryEntries();
        const entry = entries.find(item => item.textContent.includes(testBoard.id) && item.textContent.includes('CREATE'))!;
        if(entry == null)
        {
            throw new Error("Unable to find create board entry");
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        entry.click();
        await new Promise((resolve) => setTimeout(resolve, 500));

        // close the config panel
        const closeConfigButton = configPanel.findElement<HTMLButtonElement>('config-cancel')!;
        closeConfigButton.click();

        // observe the board items in the app menu
        const items = SubjectManager.getBoardItems();
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const boardIsInItems = items.find(item => item.textContent.trim() == boardName) != null;

        // delete board
        await SubjectManager.deleteBoard(testBoard.id);

        // observe the history entries
        entries = await SubjectManager.getHistoryEntries();
        const filteredEntries = entries.filter(item => item.textContent.includes(testBoard.id));

        const hasCorrentNumberOfEntries = (filteredEntries.length == 2);
        const hasDeleteEntry = filteredEntries[0].textContent.includes("CREATE");
        const hasCreateEntry = filteredEntries[1].textContent.includes("DELETE");

        // console.log(hasCorrentNumberOfEntries, filteredEntries.length);
        // console.log(hasDeleteEntry, filteredEntries[0]);
        // console.log(hasCreateEntry, filteredEntries[1]);

        const hasCorrectEntryItems: boolean = hasCorrentNumberOfEntries
        && hasDeleteEntry
        && hasCreateEntry;

        const isSuccessful: boolean = boardIsInItems == true && hasCorrectEntryItems == true;

        const result = document.createElement('div');
        result.innerHTML = `${/*${isSuccessful ? ICON_SUCCESS : ICON_FAIL}*/''}
        <span class="label">The "${boardName}" board ${isSuccessful == true ? `was ` : `was not `} restored ${isSuccessful == true ? `as expected` : `correctly`}.</span>`;

        // remove history items
        const entryIds = filteredEntries.map(item => item.dataset.entryId!);
        SubjectManager.deleteHistoryEntries(...entryIds);

        return { success: isSuccessful, value: result };
    },
}