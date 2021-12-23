import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Input component test", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll( async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
        page.setViewportSize({
            height: 600,
            width: 800
        });
    });

    test("Fill a basic input", async () => {
        
        await page.goto("http://nc.sas.com/builds/published/latest/NovaShowcase/#/iso/Input/Basic");

        let element: string = "";

        await page.fill(element, "Hello");

    });

});