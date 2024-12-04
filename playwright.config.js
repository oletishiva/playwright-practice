// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',       // Directory where tests are located
  retries: 0,               // Number of retries on failure
  timeout: 30000,           // Maximum time a test can run (ms)
  use: {
    browserName: 'chromium', // Default browser
    headless: true,         // Run tests in headless mode
  },
});
