import type { TestContext } from "@magnit-ce/test-runner";
import { SUBJECT } from "./resources";


export default {
    'should create new taskboard when new board button on app menu is clicked': async (_context: TestContext) =>
    {
        
        return new Promise((resolve) =>
        {
            let hasOpened = false;
            setTimeout(() => { if (hasOpened == false) { resolve({ success: false, message: `Test operation timed out.` }); }}, 1000);

            // const handler = (event: Event) =>
            // {
            //     hasOpened = true;
            //     SUBJECT.removeEventListener('themeopen', handler);

            //     const customEvent = event as CustomEvent;
            //     const theme = customEvent.detail.theme;

            //     const isSuccessful: boolean = themeId == theme.id;

            //     const result = document.createElement('div');
            //     result.innerHTML = `${isSuccessful ? ICON_SUCCESS : ICON_FAIL}
            //         <span class="label">${isSuccessful == true ? `Theme was opened` : `Unable to open theme`} by id: <code>${themeId}</code></span>`;
                    
            //     resolve({ success: isSuccessful, value: result });
            // };
            // SUBJECT.addEventListener('themeopen', handler);

            const newBoardButton = SUBJECT.findElement('new-board-button')!;
            newBoardButton.click();
        });
    }
}