import { i as testBoard, r as SubjectManager } from "./resources-B0pzf8S3.js";
import { Hook } from "../libs/test-runner.min.js";
//#region src/dev/tests/action-history.tests.ts
var action_history_tests_default = {
	[Hook.RequiredBeforeAny]: async () => {
		await SubjectManager.createBoard();
		testBoard.name = "Test Board | Action History";
		await SubjectManager.saveBoard(testBoard);
		return `Board has been added`;
	},
	"should add entry when new taskboard is created": async (_context) => {},
	"should delete taskboard when history undo button is clicked directly after taskboard entry": async (_context) => {},
	"should restore taskboard when history redo button is clicked while next reversed entry is taskboard entry": async (_context) => {},
	"should delete taskboard when message-card undo button is clicked": async (_context) => {},
	"should restore taskboard when history redo button is clicked directly after message-card undo button is clicked": async (_context) => {},
	[Hook.RequiredAfterAny]: async () => {
		await SubjectManager.deleteBoard(testBoard.id);
		return `Board has been deleted`;
	}
};
//#endregion
export { action_history_tests_default as default };
