import { defineConfig } from '@playwright/test';

export default defineConfig({
  // --- Test Stability ---
  retries: 2,                     // Retry failed tests twice
  fullyParallel: false,           // Avoid demo-env race conditions
  timeout: 30_000,                // Global test timeout
  expect: {
    timeout: 5000,                // Assertion timeout
  },

  // --- Reporting ---
  reporter: [
    ['list'],                     // Console output
    ['html', { open: 'never' }],  // HTML report
  ],

  // --- Artifacts ---
  use: {
    trace: 'on-first-retry',      // Capture trace only when needed
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 0,             // No per-action timeout
    navigationTimeout: 15_000,
    baseURL: 'https://gift-cards-dev.phorest.com/salons/automationvouchersdemo',
  },

  // --- Browsers ---
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ],

  
  // --- Folder Structure ---
  testDir: './tests',
  testMatch: /.*\.spec\.ts/,
  outputDir: 'test-results',

  // --- Global Hooks ---
  globalSetup: './global-setup.ts',
  globalTeardown: './global-teardown.ts',
});
