import type { Page } from '@playwright/test';

export const clickLogo = async (page: Page) => await page.locator('a.header__logo').click();
