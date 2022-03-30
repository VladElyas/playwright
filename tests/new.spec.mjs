import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    
    await page.goto('https://sadmin-dev.webslot.co/login');

    await page.fill('input[name="username"]', 'Vlads');

    await page.fill('input[name="password"]', 'vlad');

    await page.click("#submit_btn");

    await expect(page.locator('.content-header-title')).toHaveText('Влад S');

    await page.waitForLoadState();

    await page.click('#quick-add-child');

    await page.click('button[data-bb-handler="success"]');

    await expect(page.locator('#name-error')).toHaveText('Это поле необходимо заполнить.');

    await page.fill('.bootbox #name', '454555');

    await page.fill('.bootbox #description', '4545');

    await page.fill('.bootbox #login', '454555');

    await page.click('.bootbox input[value="node"]');

    await page.click('button[data-bb-handler="success"]');

   // await page.click('button[data-bb-handler="success"]');

    // await page.pause();
 

    await expect(page.locator('.bootbox .bootbox-body')).toHaveText('UserExists');

    await page.click('button[data-bb-handler="ok"]');


    await page.pause();




});