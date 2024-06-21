import type { Page } from '@playwright/test';

export const goto = async (page: Page) => await page.goto('/');
