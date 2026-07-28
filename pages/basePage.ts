import { Page } from '@playwright/test';

export class basePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

    async goto(path = '') {
    await this.page.goto(path);
    await this.waitForLoad();
  }

  async click(selector: string) {
    await this.page.locator(selector).click();
  }

  async type(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  async waitVisible(selector: string) {
    await this.page.locator(selector).waitFor({ state: 'visible' });
  }

  async waitForLoad() {
    await this.page.waitForLoadState('load');
  }
}