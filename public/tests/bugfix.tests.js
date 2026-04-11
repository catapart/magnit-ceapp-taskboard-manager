import { i as testBoard, n as SUBJECT, r as SubjectManager, t as NavigationKey } from "./resources-B0pzf8S3.js";
import "../libs/test-runner.min.js";
//#region src/dev/tests/bugfix.tests.ts
var bugfix_tests_default = {
	"should restore taskboard when previous history entry is clicked after taskbaord has been deleted": async (context) => {
		await SubjectManager.createBoard();
		const boardName = "Test Board | Bugfix: 69";
		testBoard.name = boardName;
		await SubjectManager.saveBoard(testBoard);
		await SubjectManager.deleteBoard(testBoard.id);
		await SubjectManager.navigate(NavigationKey.HistoryPanel);
		const configPanel = SUBJECT.findElement("config-panel");
		let entries = await SubjectManager.getHistoryEntries();
		const entry = entries.find((item) => item.textContent.includes(testBoard.id) && item.textContent.includes("CREATE"));
		if (entry == null) throw new Error("Unable to find create board entry");
		await new Promise((resolve) => setTimeout(resolve, 500));
		entry.click();
		await new Promise((resolve) => setTimeout(resolve, 500));
		configPanel.findElement("config-cancel").click();
		const items = SubjectManager.getBoardItems();
		await new Promise((resolve) => setTimeout(resolve, 1e3));
		const boardIsInItems = items.find((item) => item.textContent.trim() == boardName) != null;
		await SubjectManager.deleteBoard(testBoard.id);
		entries = await SubjectManager.getHistoryEntries();
		const filteredEntries = entries.filter((item) => item.textContent.includes(testBoard.id));
		const hasCorrentNumberOfEntries = filteredEntries.length == 2;
		const hasDeleteEntry = filteredEntries[0].textContent.includes("CREATE");
		const hasCreateEntry = filteredEntries[1].textContent.includes("DELETE");
		const isSuccessful = boardIsInItems == true && (hasCorrentNumberOfEntries && hasDeleteEntry && hasCreateEntry) == true;
		const result = document.createElement("div");
		result.innerHTML = `
        <span class="label">The "${boardName}" board ${isSuccessful == true ? `was ` : `was not `} restored ${isSuccessful == true ? `as expected` : `correctly`}.</span>`;
		const entryIds = filteredEntries.map((item) => item.dataset.entryId);
		SubjectManager.deleteHistoryEntries(...entryIds);
		return {
			success: isSuccessful,
			value: result
		};
	},
	"should undo deleting taskboard when undo button is clicked in notification": async (context) => {
		await SubjectManager.createBoard();
		const boardName = "Test Board | Bugfix: 46";
		testBoard.name = boardName;
		await SubjectManager.saveBoard(testBoard);
		await SubjectManager.navigate(NavigationKey.BoardSettings, { id: testBoard.id });
		SUBJECT.findElement("board-settings").findElement("remove-board-button").click();
		await new Promise((resolve) => setTimeout(resolve, 10));
		SUBJECT.findElement("confirmation-confirm-button").click();
		await new Promise((resolve) => setTimeout(resolve, 100));
		SUBJECT.shadowRoot.querySelector(".notification-undo-button").click();
		await new Promise((resolve) => setTimeout(resolve, 250));
		const isSuccessful = SUBJECT.findElement("app-menu-container").shadowRoot.querySelector(`.board[data-route="board/${testBoard.id}"]`) != null;
		await new Promise((resolve) => setTimeout(resolve, 500));
		const result = document.createElement("div");
		result.innerHTML = `
        <span class="label">The "${boardName}" board ${isSuccessful == true ? `was ` : `was not `} restored ${isSuccessful == true ? `as expected` : `correctly`}.</span>`;
		await SubjectManager.deleteBoard(testBoard.id);
		const entryIds = (await SubjectManager.getHistoryEntries()).filter((item) => item.textContent.includes(testBoard.id)).map((item) => item.dataset.entryId);
		SubjectManager.deleteHistoryEntries(...entryIds);
		return {
			success: isSuccessful,
			value: result
		};
	}
};
//#endregion
export { bugfix_tests_default as default };
