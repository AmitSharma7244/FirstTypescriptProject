import { Browser, BrowserContext, chromium, Page } from "playwright";
import { setMap } from "../utilities/ParseAndMap";

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
        
        // await page.goto("http://nc.sas.com/builds/published/latest/NovaShowcase/#/iso/Input/Basic");
        await page.goto("https://facebook.com");
        let element: string = "";

        let filePath = "C:/Users/sinmmi/PlaywrightProjects/FirstPlaywrightProject/MapFiles/InputMap.txt";
        setMap(filePath);

        await page.fill(element, "Hello");

    });

});