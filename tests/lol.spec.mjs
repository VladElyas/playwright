import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    
    await page.goto('https://sadmin-dev.webslot.co/');

    await page.click('#quick-add-child');

    await page.type('#name', '4545');

    await page.type('#discription', '4545');

    // await page.pause();




});