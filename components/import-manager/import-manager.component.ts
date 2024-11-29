import style from './import-manager.component.css?raw';
import html from './import-manager.component.html?raw';

import { BoardExport } from '../../data/foreign/exported-board';
import { RecordSetter } from 'record-setter';
import { RecordTreeElement } from '@magnit-ce/record-tree';

const ID_PROPERTIES = new Set(['id', 'listId', 'taskSettingsId', 'backgroundImageId', 'boardId']);

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(style);

const COMPONENT_TAG_NAME = 'import-manager';
export class ImportManagerComponent extends HTMLElement
{
    componentParts: Map<string, HTMLElement> = new Map();
    getPart<T extends HTMLElement = HTMLElement>(key: string)
    {
        if(this.componentParts.get(key) == null)
        {
            const part = this.shadowRoot!.querySelector(`[part="${key}"]`) as HTMLElement;
            if(part != null) { this.componentParts.set(key, part); }
        }

        return this.componentParts.get(key) as T;
    }
    findPart<T extends HTMLElement = HTMLElement>(key: string) { return this.querySelector(`[part="${key}"]`) as T; }

    #generatedIdMap: Map<string, string> = new Map();


    constructor()
    {
        super();
        this.innerHTML = html;
        let parent = this.getRootNode() as Document|ShadowRoot;
        parent.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        this.findPart<RecordTreeElement>('import-preview').addCustomPropertyValueGenerator((title: string) =>
        {
            return ID_PROPERTIES.has(title);
        }, (_title: string, value: string) =>
        {
            const valueSpan = document.createElement('span');
            valueSpan.classList.add('value');

            if(this.#generatedIdMap.has(value))
            {
                const oldValue = document.createElement('span');
                oldValue.classList.add('old');
                oldValue.title = `ID values replaced to prevent overwriting. [Old Value: ${this.#generatedIdMap.get(value)}]`;
                oldValue.textContent = this.#generatedIdMap.get(value) ?? '[Error]';

                const newValue = document.createElement('span');
                newValue.classList.add('new');
                newValue.textContent = value;

                valueSpan.append(oldValue, newValue);
            }
            else
            {
                valueSpan.textContent = (value.length > 1024) ? value.substring(0, 1024) : value;
            }

            return valueSpan;
        });
        this.findPart<RecordTreeElement>('import-preview').addCustomPropertyValueGenerator((title: string) =>
        {
            return title.endsWith('_base64');
        }, (_title: string, value: string) =>
        {
            const valueSpan = document.createElement('span');
            valueSpan.classList.add('value');

            if(value.length <= 1024)
            {
                valueSpan.textContent = value;
            }
            else
            {
                const display = document.createElement('span');
                display.classList.add('display');
                display.textContent = value.substring(0, 1024);

                const viewLink = document.createElement('a');
                viewLink.textContent = '[...]';
                viewLink.classList.add('view-link');
                viewLink.title = 'View full content [value has been truncated]'
                const linkContent = value.startsWith('data:') ? value : 'data:application/json;charset=utf-8, ' + encodeURIComponent(JSON.stringify(value, null, 2));
                viewLink.setAttribute('href', linkContent);
                
                valueSpan.append(display, viewLink);
            }

            return valueSpan;
        });
    }

    setData(boardData: BoardExport)
    {
        this.#generatedIdMap.clear();
        const modifiedData = this.prepareData(boardData);

        this.findPart<RecordTreeElement>('import-preview').setData(modifiedData);
    }
    prepareData(boardData: BoardExport)
    {
        const modifiedData = structuredClone(boardData);
        modifiedData.id = RecordSetter.generateId();
        if(boardData.id != null)
        {
            this.#generatedIdMap.set(modifiedData.id, boardData.id);
        }
                
        if(modifiedData.taskSettings != null)
        {
            modifiedData.taskSettings.id = RecordSetter.generateId();
            modifiedData.taskSettingsId = modifiedData.taskSettings.id;
            if(boardData.taskSettingsId != null)
            {
                this.#generatedIdMap.set(modifiedData.taskSettingsId, boardData.taskSettingsId);
            }
        }

        if(modifiedData.lists != null)
        {
            for(let i = 0; i < modifiedData.lists.length; i++)
            {
                const list = modifiedData.lists[i];
                if(list.deletedTimestamp != undefined) { continue; }
                list.id = RecordSetter.generateId();
                list.boardId = modifiedData.id;
                if(boardData.lists![i].id != null)
                {
                    this.#generatedIdMap.set(list.id, boardData.lists![i].id!);
                }
                
                if(list.taskSettings != null)
                {
                    list.taskSettings.id = RecordSetter.generateId();
                    list.taskSettingsId = list.taskSettings.id;
                    if(boardData.lists![i].taskSettingsId != null)
                    {
                        this.#generatedIdMap.set(list.taskSettingsId, boardData.lists![i].taskSettingsId!);
                    }
                }

                if(list.tasks != null)
                {
                    for(let j = 0; j < list.tasks.length; j++)
                    {
                        const task = list.tasks[j];
                        if(task.deletedTimestamp != undefined) { continue; }
                        task.id = RecordSetter.generateId();
                        task.boardId = modifiedData.id;
                        task.listId = list.id;
                        if(boardData.lists![i].tasks![j].id != null)
                        {
                            this.#generatedIdMap.set(task.id, boardData.lists![i].tasks![j].id!);
                        }
                    }
                }
            }
        }
                
        if(modifiedData.backgroundImage != null && modifiedData.backgroundImage.deletedTimestamp == undefined)
        {
            modifiedData.backgroundImage.id = RecordSetter.generateId();
            modifiedData.backgroundImage.boardId = modifiedData.id;
            modifiedData.backgroundImageId = modifiedData.backgroundImage.id;
            if(boardData.backgroundImageId != null)
            {
                this.#generatedIdMap.set(modifiedData.backgroundImageId, boardData.backgroundImageId);
            }

            // image property holds the in-memory reference
            // to the loaded image object. this data is preserved
            // in the base64 representation, so the actual image
            // property becomes unecessary
            delete modifiedData.backgroundImage.image;
        }

        // board will be imported as new board
        // and ordered as last. No need to use
        // exported order at this point.
        delete modifiedData.order;

        return modifiedData;
    }
    
    getRecord()
    {
        const data = this.findPart<RecordTreeElement>('import-preview').getUpdatedData<BoardExport>();
        return data;
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, ImportManagerComponent);
}