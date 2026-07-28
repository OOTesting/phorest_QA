import { test as base } from '@playwright/test';
import { voucherPage } from '../pages/voucherPage';
import { summaryPage } from '../pages/summaryPage';
import { paymentPage } from '../pages/paymentPage';
import { successPage } from '../pages/successPage';
import { footerPage } from '../pages/footerPage';

type VoucherFixtures = {
  voucherPage: voucherPage;
  summaryPage: summaryPage;
  paymentPage: paymentPage;
  successPage: successPage;
  footerPage: footerPage;

};

export const test = base.extend<VoucherFixtures>({
  page: async ({ page }, use) => {
    const serverErrors: string[] = [];

    // Log ANY non-success HTTP response (400–599)
    page.on('response', (response) => {
      const status = response.status();
      if (status < 200 || status >= 400) {
        serverErrors.push(`${status} ${response.url()}`);
      }
    });

    // Log failures
    page.on('requestfailed', (request) => {
      serverErrors.push(
        `FAILED ${request.url()} — ${request.failure()?.errorText}`
      );
    });

    await use(page);

    if (serverErrors.length > 0) {
      console.warn(
        `Demo environment returned errors:\n${serverErrors.join('\n')}`
      );
    }
  },

  voucherPage: async ({ page }, use) => use(new voucherPage(page)),
  summaryPage: async ({ page }, use) => use(new summaryPage(page)),
  paymentPage: async ({ page }, use) => use(new paymentPage(page)),
  successPage: async ({ page }, use) => use(new successPage(page)),
  footerPage: async ({ page }, use) => use(new footerPage(page)),

});

export { expect } from '@playwright/test';
