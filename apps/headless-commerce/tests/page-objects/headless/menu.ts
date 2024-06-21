import type { Page } from '@playwright/test';

export const openMenu = async (page: Page) => await page.getByTestId('menu-btn').click();

export const openAccessories = async (page: Page) => await page.getByRole('button', { name: 'Accessories' }).click();

export const openScarves = async (page: Page) => await page.getByRole('link', { name: 'Scarves' }).click();
