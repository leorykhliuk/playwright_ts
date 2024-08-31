import { Locator, Page } from "@playwright/test";

export class PolymerBasePage {
    private readonly page: Page;
    readonly logo: Locator;
    readonly womenMenu: Locator;  
    readonly womenDropDownList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('a[class="logo"]');
        this.womenMenu = page.locator('[id="ui-id-4"]');
        this.womenDropDownList = page.locator('ul[class*="level0 submenu"]').first();
    };

    async open(): Promise<void> {
        await this.page.goto('https://magento.softwaretestingboard.com/', {waitUntil: 'networkidle'});
    };

    async hoverTheWomanMenu(): Promise<void> {
        await this.womenMenu.hover();
    };

    async getWomanMenuSubItemNames(): Promise<string> {
        return await this.womenDropDownList.innerText();
    };

}
