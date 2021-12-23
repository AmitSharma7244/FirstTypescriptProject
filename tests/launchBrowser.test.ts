import { chromium, Page } from "playwright";
import { getElementTextSelector, getElementCSSSelector, getElementXPathSelector } from "../LocatorUtility/Locator";

describe("Launch browser", () => {
    test("Open browser", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.setViewportSize({
            width: 1000,
            height: 600
        });

        await console.log("Going to the page");
        await page.goto("http://nc.sas.com/builds/published/latest/NovaShowcase/#/iso/Link/Basic");

        await console.log("Getting the element")
        let element: string;

        // element = getElementTextSelector("Link text");
        // element = getElementCSSSelector("id", "basic");
        element = getElementCSSSelector("class", "small");
        // element = getElementCSSSelector("tag");
        // element = getElementXPathSelector("link", "basic");

        await console.log("Clicking on the link");
        await page.click(element);

        // console.log("Filling the input");
        // await page.fill("data-testid=fullname-input-input", "Hello my fraaand");
        
        // console.log("Taking a break")
        // await new Promise( r => setTimeout(r, 10000));

        await browser.close();
    });

});