# Phorest QA Task — Gift Voucher UI Automation


Playwright automation suite built in TS for validating the Phorest gift voucher purchase flow.

**Application URL:** `https://gift-cards-dev.phorest.com/salons/automationvouchersdemo#`

---

## How to Run


### Option 1: Run Locally

#### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- [Git](https://git-scm.com/)

#### 1. Clone the repository

```bash
git clone git@github.com:OOTesting/phorest_QA.git
cd phorest-voucher-tests
```

#### 2. Install dependencies and Playwright browsers

```bash
npm ci
npx playwright install --with-deps
```

#### 3. Run the tests

```bash
# Run the full test suite (all specs, headless)

npm test

# Run with the browser visible (headed mode)

npm run test:headed

# Run a single spec file

npx playwright test tests/success.spec.ts


# Run all tests in a specific browser (chromium, firefox, webkit)

npx playwright test --project=chromium

# Open the interactive HTML report after a run
npm run report
```

---




## Test Suite Coverage 

- **Page objects**: Located in `pages/`, representing the flow pages (`voucherPage`,'footerPage' `summaryPage`, `paymentPage`, `successPage`) and basePage. 
- **Test Data**: Test accounts, presets, and card configurations are maintained in `utils/testData.ts`.

Total 20 tests



