import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to https://sadmin-dev.webslot.co/login
  await page.goto('https://sadmin-dev.webslot.co/login');
  // Click [placeholder="Your Username"]
  await page.locator('[placeholder="Your Username"]').click();
  // Fill [placeholder="Your Username"]
  await page.locator('[placeholder="Your Username"]').fill('Vlads');
  // Press Tab
  await page.locator('[placeholder="Your Username"]').press('Tab');
  // Fill [placeholder="Enter Password"]
  await page.locator('[placeholder="Enter Password"]').fill('vlad');
  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sadmin-dev.webslot.co/' }*/),
    page.locator('[placeholder="Enter Password"]').press('Enter')
  ]);
  // Click #quick-add-child
  await page.locator('#quick-add-child').click();
  // Click text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="ООО Рога и Копыта"]
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="ООО Рога и Копыта"]').click();
  
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="ООО Рога и Копыта"]').fill('55');
  
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Описание"]').click();
  
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Описание"]').fill('55');
  
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> select[name="type"]').selectOption('partner_restricted_1');
  
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Агент 007"]').click();
  
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Агент 007"]').fill('0808');
  
  await page.locator('text=Узловая (с агентом)').nth(3).click();
  
  await page.locator('.bootbox-body div .col-md-12 #add-child-form div:nth-child(5) div .row .col-md-2 .checkbox .checker').first().click();
  
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> input[name="node_type"]').first().check();
  
  await page.locator('text=Зарегистрировать').click();
  
  await page.locator('text=UserExists').click();

  await page.locator('button:has-text("OK")').click();
});


