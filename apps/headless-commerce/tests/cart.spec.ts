// import { setTestCookieVals } from '@susu/headless-commerce/utils/test/e2e';
import { expect, test } from '@playwright/test';
import * as headlessCookiePopup from '@susu/headless-commerce/tests/page-objects/headless/cookie-popup';
import * as headlessHomePage from '@susu/headless-commerce/tests/page-objects/headless/home';
import * as headlessMenu from '@susu/headless-commerce/tests/page-objects/headless/menu';
import * as salesforceCookiePopup from '@susu/headless-commerce/tests/page-objects/salesforce/cookie-popup';
import * as salesforceNavigationBar from '@susu/headless-commerce/tests/page-objects/salesforce/navigation-bar';

test('cart', async ({ browser }) => {
  test.slow();

  const context = await browser.newContext();
  // await context.addCookies(setTestCookieVals());

  const page = await context.newPage();

  await headlessHomePage.goto(page);

  await headlessCookiePopup.accept(page);

  await headlessMenu.openMenu(page);
  await headlessMenu.openAccessories(page);
  await headlessMenu.openScarves(page);

  await headlessCookiePopup.accept(page);

  // TODO: Page object for product details
  await page.getByRole('link', { name: 'Grey Scarf' }).first().click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('button', { name: 'Add to bag' }).click();
  await page.getByRole('button', { name: 'View bag' }).click();

  await salesforceCookiePopup.accept(page);

  await salesforceNavigationBar.clickLogo(page);

  await salesforceCookiePopup.accept(page);

  const minicartButton = page.getByTestId('minicart-btn');
  const count = await minicartButton.locator('span[data-count]').getAttribute('data-count');

  expect(count).toBe('1');
});
