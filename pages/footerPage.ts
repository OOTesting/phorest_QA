import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { basePage } from './basePage';

export class footerPage extends basePage {
  readonly footer: Locator;
  readonly pageHeading: Locator;

  // Business info
  readonly businessName: Locator;
  readonly businessAddress: Locator;


  // Links

  readonly termsLink: Locator;
  readonly cancellationLink: Locator;
  readonly privacyLink: Locator;

  constructor(page: Page) {
     super(page);

    this.pageHeading = page.getByText('Automation Vouchers Demo', { exact: true });

    // Root footer container
    this.footer = page.locator('#footer');
    

    // Business info (first row)
    this.businessName = this.footer.getByText('Automation Vouchers Demo', { exact: true });
    this.businessAddress = this.footer.locator(':has-text("Phorest HQ Anglesea Row")');

    this.termsLink = this.footer.locator('a:has-text("Terms")');
    this.cancellationLink = this.footer.locator('a:has-text("Cancellation")');
    this.privacyLink = this.footer.locator('a:has-text("Privacy")');
  }


  async verifyAddress() {
    // Business info
      await this.businessName;
  

  }

    async verifyTerms() {
        await this.termsLink;
  }

    async verifyCancellation() {
        await this.cancellationLink;
  }

    async verifyPrivacy() {
          await this.privacyLink;
  }
}
