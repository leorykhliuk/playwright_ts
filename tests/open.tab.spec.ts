import {Page, test, expect } from '@playwright/test';
import { describe } from 'node:test';
import { SpacejetBasePage } from '../page.objects/base.page';

let basePage: SpacejetBasePage;

test.describe('Open tab', async() => {

  test('tab', async ({page, context}) => {
    await page.goto("https://help.rozetka.com.ua/p/97-dostavka/");

    expect(page.url()).toEqual('https://help.rozetka.com.ua/p/97-dostavka/');

    // await page.locator('[class="img-logo"]').click();
    
    // let newTab: Page = await context.newPage();
    
    // expect(newTab.url()).toBe('https://rozetka.com.ua/ua/');

  })

});

