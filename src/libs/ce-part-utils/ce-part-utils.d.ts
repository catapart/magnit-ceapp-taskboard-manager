declare function assignClassAndIdToPart(shadowRoot: ShadowRoot): void;
type TagPartMap = Partial<{
    [key in keyof HTMLElementTagNameMap]: string;
}>;
declare function assignTagToPart(shadowRoot: ShadowRoot, config?: TagPartMap): void;
declare class InputTypePartMap {
    button?: string;
    checkbox?: string;
    color?: string;
    date?: string;
    ["datetime-local"]?: string;
    email?: string;
    file?: string;
    hidden?: string;
    image?: string;
    month?: string;
    number?: string;
    password?: string;
    radio?: string;
    range?: string;
    reset?: string;
    search?: string;
    submit?: string;
    tel?: string;
    text?: string;
    time?: string;
    url?: string;
    week?: string;
    ["text-numeric"]: string;
}
declare function assignInputTypeToPart(shadowRoot: ShadowRoot, config?: InputTypePartMap): void;
declare function assignFormFieldPartAttributes(shadowRoot: ShadowRoot): void;
type PartExportPartMap = {
    [key: string]: string;
};
declare function getExportPartsFromParts(shadowRoot: ShadowRoot, addNewlines?: boolean, replacements?: PartExportPartMap): string;
declare function assignPartsAsExportPartsAttribute(shadowRoot: ShadowRoot, addNewlines?: boolean, replacements?: PartExportPartMap): void;

export { InputTypePartMap, type PartExportPartMap, type TagPartMap, assignClassAndIdToPart, assignFormFieldPartAttributes, assignInputTypeToPart, assignPartsAsExportPartsAttribute, assignTagToPart, getExportPartsFromParts };
