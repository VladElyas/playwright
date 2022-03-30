import { test, expect, chromium } from '@playwright/test';
import { chromium } from 'playwright';
await chromium/launch({ headless: false, slowMo: 100 });

test('test', async ({ page }) => {

  // Go to https://sadmin-dev.webslot.co/login
  await page.goto('https://sadmin-dev.webslot.co/login');
  // Click [placeholder="Your Username"]
  await page.locator('[placeholder="Your Username"]').click();
  // Fill [placeholder="Your Username"]
  await page.locator('[placeholder="Your Username"]').fill('Vlads');
  // Click [placeholder="Enter Password"]
  await page.locator('[placeholder="Enter Password"]').click();
  // Fill [placeholder="Enter Password"]
  await page.locator('[placeholder="Enter Password"]').fill('vlad');
  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://sadmin-dev.webslot.co/' }*/),
    page.locator('button:has-text("Login")').click()
  ]);
  // Click #quick-add-child
  await page.locator('#quick-add-child').click();
  // Click text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="ООО Рога и Копыта"]
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="ООО Рога и Копыта"]').click();
  // Fill text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="ООО Рога и Копыта"]
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="ООО Рога и Копыта"]').fill('444');
  // Click text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Описание"]
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Описание"]').click();
  // Fill text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Описание"]
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Описание"]').fill('444');
  // Select partner_restricted_1
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> select[name="type"]').selectOption('partner_restricted_1');
  // Check text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> input[name="node_type"] >> nth=0
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> input[name="node_type"]').first().check();
  // Click text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Агент 007"]
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Агент 007"]').click();
  // Fill text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Агент 007"]
  await page.locator('text=×РегистрацияРегистрация под группойИмя партнёраОписаниеРоль партнераПартнёрМенед >> [placeholder="Агент 007"]').fill('0001');
  // Click text=Зарегистрировать
  await page.locator('text=Зарегистрировать').click();
  // Click button:has-text("OK")
  await page.locator('button:has-text("OK")').click();
  await expect(page).toHaveURL('https://sadmin-dev.webslot.co/');
});