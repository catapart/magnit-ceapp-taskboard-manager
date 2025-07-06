// src/ce-part-utils.ts
var DEFAULT_ELEMENT_SELECTOR = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function assignClassAndIdToPart(shadowRoot) {
  const identifiedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[id]`)];
  for (let i = 0; i < identifiedElements.length; i++) {
    identifiedElements[i].part.add(identifiedElements[i].id);
  }
  const classedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[class]`)];
  for (let i = 0; i < classedElements.length; i++) {
    classedElements[i].part.add(...classedElements[i].classList);
  }
}
function assignTagToPart(shadowRoot, config) {
  const elements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}`)];
  for (let i = 0; i < elements.length; i++) {
    const tagName = elements[i].tagName.toLowerCase();
    elements[i].part.add(config?.[tagName] ?? tagName);
  }
}
var InputTypePartMap = class {
  button;
  checkbox;
  color;
  date;
  ["datetime-local"];
  email;
  file;
  hidden;
  image;
  month;
  number;
  password;
  radio;
  range;
  reset;
  search;
  submit;
  tel;
  text;
  time;
  url;
  week;
  ["text-numeric"] = "number";
};
function assignInputTypeToPart(shadowRoot, config = new InputTypePartMap()) {
  const elements = [...shadowRoot.querySelectorAll("input")];
  for (let i = 0; i < elements.length; i++) {
    const inputType = elements[i].type;
    if (inputType == "text") {
      if (elements[i].inputMode == "numeric") {
        elements[i].part.add(config["text-numeric"]);
      }
    }
    elements[i].part.add(config[inputType] ?? inputType);
  }
}
function assignFormFieldPartAttributes(shadowRoot) {
  const formFieldElements = [...shadowRoot.querySelectorAll("form-field")];
  for (let i = 0; i < formFieldElements.length; i++) {
    const formFieldElement = formFieldElements[i];
    const fieldId = formFieldElement.id;
    const container = formFieldElement.querySelector(".container");
    container?.part.add("container", "field-container", `${fieldId}-container`);
    const label = formFieldElement.querySelector(".field-label");
    label?.part.add("label", "field-label", `${fieldId}-label`);
    const prefix = formFieldElement.querySelector(".prefix");
    prefix?.part.add("prefix", "field-prefix", `${fieldId}-prefix`);
    const postfix = formFieldElement.querySelector(".postfix");
    postfix?.part.add("postfix", "field-postfix", `${fieldId}-postfix`);
    const enabledCheckbox = formFieldElement.querySelector(".enabled-checkbox");
    enabledCheckbox?.part.add("enabled-checkbox", "field-enabled-checkbox", `${fieldId}-enabled-checkbox`);
  }
}
function getExportPartsFromParts(shadowRoot, addNewlines = false, replacements) {
  const exportPartsSet = new Set([...shadowRoot.querySelectorAll("[part]")].map((item) => {
    let parts = [...item.part.values()].filter((item2) => item2 != null).map((part) => {
      const replacement = replacements?.[part];
      return replacement != null ? `${part}:${replacement}` : part;
    });
    const childExports = item.getAttribute("exportparts");
    if (childExports != null) {
      const childParts = childExports.replaceAll(/[\s\n]/g, "").split(",").map((item2) => item2.indexOf(":") == -1 ? item2 : item2.split(":")[1]);
      parts = parts.concat(...childParts);
    }
    return parts;
  }).flat().filter((item) => item.length > 0));
  const exportParts = Array.from(exportPartsSet).join(`,${addNewlines == true ? "\n" : ""}`);
  return exportParts;
}
function assignPartsAsExportPartsAttribute(shadowRoot, addNewlines = false, replacements) {
  const exportParts = getExportPartsFromParts(shadowRoot, addNewlines, replacements);
  const existingExports = shadowRoot.host.getAttribute("exportparts");
  shadowRoot.host.setAttribute("exportparts", `${existingExports == null ? "" : `${existingExports},`}${exportParts}`);
}
export {
  DEFAULT_ELEMENT_SELECTOR,
  InputTypePartMap,
  assignClassAndIdToPart,
  assignFormFieldPartAttributes,
  assignInputTypeToPart,
  assignPartsAsExportPartsAttribute,
  assignTagToPart,
  getExportPartsFromParts
};
