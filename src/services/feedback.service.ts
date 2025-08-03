import { PathRouterElement } from "@magnit-ce/path-router";
import { TaskboardManagerElement } from "../taskboard-manager";
import { MessageCardElement, MessageCardType } from "@magnit-ce/message-card";

const DATA_ERROR_MESSAGE = `<p>An error occurred trying to access the [subject] data.</p>
<p>If this is a repeating issue, you can try to refresh the application. Data may be lost when taking this action.</p>
<p>For more information, see the console in the browser's developer tools.</p>`;
const UNKNOWN_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'target');
const BOARD_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Task Board');
const LIST_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Task List');
const TASK_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Task');
const IMAGE_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Image');
const HISTORY_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'History');
const SETTINGS_ERROR_MESSAGE = DATA_ERROR_MESSAGE.replace('[subject]', 'Settings');

export enum ErrorMessageType
{
    UNKNOWN = 'UNKNOWN',
    BOARD = 'BOARD',
    LIST = 'LIST',
    TASK = 'TASK',
    IMAGE = 'IMAGE',
    HISTORY = 'HISTORY',
    SETTINGS = 'SETTINGS',
}


export abstract class FeedbackService
{
    static #manager: TaskboardManagerElement;

    static ErrorMessages: { [key in ErrorMessageType]: string } = {
        [ErrorMessageType.UNKNOWN]: UNKNOWN_ERROR_MESSAGE,
        [ErrorMessageType.BOARD]: BOARD_ERROR_MESSAGE,
        [ErrorMessageType.LIST]: LIST_ERROR_MESSAGE,
        [ErrorMessageType.TASK]: TASK_ERROR_MESSAGE,
        [ErrorMessageType.IMAGE]: IMAGE_ERROR_MESSAGE,
        [ErrorMessageType.HISTORY]: HISTORY_ERROR_MESSAGE,
        [ErrorMessageType.SETTINGS]: SETTINGS_ERROR_MESSAGE
    }

    static init(taskboardManager: TaskboardManagerElement)
    {
        FeedbackService.#manager = taskboardManager;
    }
    
    static getConfirmation(message: string, type: 'info'|'warn'|'danger' = 'info')
    {
        if(FeedbackService.#manager == null)
        {
            throw new Error("Unable to manage dialogs before service has been initialized.");
        }

        FeedbackService.#manager.getElement('confirmation-dialog').querySelector(`route-page[path="${type}"]`)!.innerHTML = message;
        FeedbackService.#manager.getElement<HTMLDialogElement>('confirmation-dialog').showModal();
        FeedbackService.#manager.getElement<PathRouterElement>('confirmation-router').navigate(type);
        return new Promise<boolean>((resolve) => 
        {
            FeedbackService.#manager.getElement<HTMLDialogElement>('confirmation-dialog-form').addEventListener('submit', (event) =>
            {
                if((event as SubmitEvent).submitter == FeedbackService.#manager.getElement('confirmation-confirm-button'))
                {
                    resolve(true);
                    return;
                }
                resolve(false);
            }, { once: true });
        });
    }
    static showErrorMessageDialog(error: ErrorMessageType)
    {
        this.showMessageDialog(FeedbackService.ErrorMessages[error], 'danger');
    }
    static showMessageDialog(message: string, type: 'info'|'warn'|'danger' = 'info')
    {
        if(FeedbackService.#manager == null)
        {
            throw new Error("Unable to manage dialogs before service has been initialized.");
        }

        const dialog = FeedbackService.#manager.getElement<HTMLDialogElement>('confirmation-dialog');
        dialog.querySelector(`path-route[path="${type}"]`)!.innerHTML = message;
        dialog.show();
        dialog.classList.add('message');
        FeedbackService.#manager.getElement<PathRouterElement>('confirmation-router').navigate(type);
        return new Promise<void>((resolve) => 
        {
            FeedbackService.#manager.getElement<HTMLDialogElement>('confirmation-dialog-form').addEventListener('submit', (event) =>
            {
                dialog.classList.remove('message');
                resolve();
            }, { once: true });
        });
    }

    static showMessageCard(message: string, type: MessageCardType)
    {
        const card = MessageCardElement.notify(message, FeedbackService.#manager.getElement('notifications'), { type });
        card.part.add('message-card');
        card.setAttribute('exportparts', 'message-icon,header:message-header,heading:message-heading,message,close-button:message-close-button,close-icon:message-close-icon,duration:message-duration');
    }
    static showErrorMessageCard(message: string)
    {
        FeedbackService.showMessageCard(message, MessageCardType.Error);
    }
    static showMessageCard_customTitle(message: string, type: MessageCardType, title: string)
    {
        const card = MessageCardElement.notify(message, FeedbackService.#manager.getElement('notifications'), { type, heading: title });
        card.part.add('message-card');
        card.setAttribute('exportparts', 'message-icon,header:message-header,heading:message-heading,message,close-button:message-close-button,close-icon:message-close-icon,duration:message-duration');
    }
}