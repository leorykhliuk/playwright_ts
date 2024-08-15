import { Locator, Page } from "@playwright/test";

export class SpacejetBasePage {
    private readonly  page: Page;
    readonly taxiLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.taxiLink = page.locator('a[data-testid="test-id-Taxi"] div[class*="r-16dba41 r-1pzd9i8"]');
    };

    async open(): Promise<void> {
        await this.page.goto('https://www.spicejet.com/');
    };

    async clickTaxiAncher(): Promise<void> {
        await this.taxiLink.click();
        await this.page.waitForLoadState();
    }

}