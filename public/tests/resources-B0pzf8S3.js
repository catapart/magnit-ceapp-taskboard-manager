import "../libs/taskboard-manager.min.js";
//#region src/dev/tests/resources.ts
var SUBJECT = document.querySelector("taskboard-manager");
var NavigationKey = {
	HistoryPanel: "history",
	BoardSettings: "board-settings"
};
var testBoard;
var SubjectManager = {
	async createBoard() {
		testBoard = await SUBJECT.addBoard();
		return testBoard;
	},
	saveBoard(board) {
		return SUBJECT.saveBoard(board);
	},
	async deleteBoard(boardId) {
		return SUBJECT.deleteBoard(boardId);
	},
	navigate(key, data) {
		return new Promise(async (resolve) => {
			const menu = SUBJECT.findElement("app-menu-container");
			if (key == NavigationKey.HistoryPanel) {
				console.log(key);
				menu.findElement("open-settings-button").click();
				setTimeout(() => {
					SUBJECT.findElement("config-panel").findElement("history-nav-item").click();
					setTimeout(() => {
						resolve();
					}, 100);
				}, 250);
			} else if (key == NavigationKey.BoardSettings) {
				const boardData = data;
				menu.shadowRoot.querySelector(`.board[data-route="board/${boardData.id}"]`).querySelector(".board-edit-button").click();
				setTimeout(() => {
					resolve();
				}, 250);
			}
		});
	},
	getBoardItems() {
		const appMenu = SUBJECT.findElement("app-menu-container");
		return Array.from(appMenu.shadowRoot.querySelectorAll(".board"));
	},
	getHistoryEntries() {
		const historyPanel = SUBJECT.findElement("config-panel").findElement("history-panel");
		return Array.from(historyPanel.shadowRoot.querySelectorAll("[data-entry]"));
	},
	deleteHistoryEntries(...ids) {
		return SUBJECT.removeHistoryEntries(...ids);
	}
};
//#endregion
export { testBoard as i, SUBJECT as n, SubjectManager as r, NavigationKey as t };
