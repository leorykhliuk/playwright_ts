import { test, expect } from '@playwright/test';
import {PolymerBasePage} from '../page.objects/base.page';

let basePage: PolymerBasePage;

test.describe('Verify home page elements', async() => {

  test.beforeEach(async({page}) => {
    basePage = new PolymerBasePage(page);
    await basePage.open();
  })

  test('Home page has been reached', async({page}) => {
    await expect(page).toHaveTitle('Home Page');
  });

  test('Site logo is present', async ({}) => {
    await expect(basePage.logo).toBeVisible()
  });

  test('Check woman menu items', async({page}) => {
    await expect(basePage.womenDropDownList).not.toBeVisible();

    await basePage.hoverTheWomanMenu();

    await expect(basePage.womenDropDownList).toBeVisible();
    expect(await basePage.getWomanMenuSubItemNames()).toBe('Tops\nBottoms');

    await page.mouse.move(100, 100);

    await expect(basePage.womenDropDownList).not.toBeVisible();
  })

});

