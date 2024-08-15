import {Page, test, expect } from '@playwright/test';
import { describe } from 'node:test';
import { SpacejetBasePage } from '../page.objects/base.page';

let basePage: SpacejetBasePage;

test.describe('Triger actions on base page', async() => {

  test.beforeEach(async({page, context}) => {
    basePage = new SpacejetBasePage(page);
    await basePage.open();
  })

  test('Click taxy link opens new tab', async ({page, context}) => {
    page.waitForTimeout(5000);
    await basePage.clickTaxiAncher();
    // await page.locator('[data-testid="test-id-Gift Card"]').click();
    let newTab: Page = await context.newPage();
    expect(page.url()).toEqual('https://www.spicejet.com/');
    await page.pause()
    // expect(newTab.url()).toBe('https://spicejet.woohoo.in/home');

  })

});

