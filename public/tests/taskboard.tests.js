import { n as SUBJECT } from "./resources-B0pzf8S3.js";
//#region src/dev/tests/taskboard.tests.ts
var taskboard_tests_default = { "should create new taskboard when new board button on app menu is clicked": async (_context) => {
	return new Promise((resolve) => {
		let hasOpened = false;
		setTimeout(() => {
			if (hasOpened == false) resolve({
				success: false,
				message: `Test operation timed out.`
			});
		}, 1e3);
		SUBJECT.findElement("new-board-button").click();
	});
} };
//#endregion
export { taskboard_tests_default as default };
