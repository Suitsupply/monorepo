import type { Page } from '@playwright/test';

export const accept = async (page: Page) => await page.getByRole('button', { name: 'Accept' }).click();
