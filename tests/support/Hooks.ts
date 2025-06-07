import { Before, After, setDefaultTimeout, ITestCaseHookParameter, setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { LoginInteractions } from '../interactions/login/LoginInteractions';

export class CustomWorld extends World {
    browser?: Browser;
    context?: BrowserContext;
    page?: Page;
    loginInteraction?: LoginInteractions;

    constructor(options: any) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
    this.browser = await chromium.launch({ headless: false, slowMo: 100 });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
    if (this.page) {
        const status = scenario.result?.status || 'unknown';
        const safeName = scenario.pickle.name.replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '');
        const screenshotDir = path.resolve('reports/screenshots');
        const screenshotPath = path.join(screenshotDir, `${safeName}_${status}.png`);
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, { recursive: true });
        }
        await this.page.screenshot({ path: screenshotPath });

        const file = fs.readFileSync(screenshotPath);
        if (this.attach) {
            await this.attach(file, 'image/png');
        }
    }
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
});