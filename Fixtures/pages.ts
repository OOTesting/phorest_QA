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
  footerPage:  footerPage;
  settleDelay: void;
};

// This was added to help identify server errors. 
export const test = base.extend<VoucherFixtures>({
  page: async ({ page }, use) => {
    const serverErrors: string[] = [];

    page.on('response', (response) => {
      if (response.status() >= 500) {
        serverErrors.push(`${response.status()} ${response.url()}`);
      }
    });

    await use(page);

    if (serverErrors.length > 0) {
      console.warn(`Demo environment returned server errors:\n${serverErrors.join('\n')}`);
    }
  },

  voucherPage: async ({ page }, use) => use(new voucherPage(page)),
  summaryPage: async ({ page }, use) => use(new summaryPage(page)),
  paymentPage: async ({ page }, use) => use(new paymentPage(page)),
  successPage: async ({ page }, use) => use(new successPage(page)),
  footerPage: async ({ page }, use)  => use(new footerPage(page)),

  // The environment returns intermittent HTTP 500s under sequential load, so we pause briefly between tests.
  settleDelay: [
    async ({ }, use) => {
      await use();
      await new Promise((resolve) => setTimeout(resolve, 3000));
    },
    { auto: true },
  ],
});

export { expect } from '@playwright/test';