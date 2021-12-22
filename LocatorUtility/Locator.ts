import { linkCSSProperties, linkXPaths } from "../MapFiles/LinkMap";

export const getElementTextSelector = (textValue: string) => {
    let textSelector = 'text="' + textValue + '"';
    return textSelector;
}

export const getElementCSSSelector = (attribute: string, elementName?: string, tagName?: string) => {
    let cssSelector: string = '';
    
    if(typeof elementName !== "undefined" && attribute === "id") {
        // cssSelector = 'data-testid=' + elementName + '-link';
        // cssSelector = `data-testid=${linkDataTestId.replace("${value}", elementName)}`;
        cssSelector = `data-testid=${linkCSSProperties.dataTestId.replace("${value}", elementName)}`;
    }
    else if(attribute === "class") {
        cssSelector = linkCSSProperties.class;
    }
    else if(typeof tagName !== "undefined" && attribute === "tag") {
        cssSelector = tagName;
    }
    return cssSelector;
}

export const getElementXPathSelector = (mapKey: string, elementName?: string) => {
    let xpathSelector: string = "";
    if(typeof elementName !== "undefined") {
        xpathSelector = linkXPaths.link.replace("${value}", elementName);
    }

    return xpathSelector;
}