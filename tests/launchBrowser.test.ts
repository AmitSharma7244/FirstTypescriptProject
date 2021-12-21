import { chromium } from "playwright";

describe("Launch browser", () => {

    test("Open browser", async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("http://nc.sas.com/builds/published/latest/NovaShowcase/#/")

        await browser.close();
    });

});