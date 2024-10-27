// @ts-check
const { devices } = require("@playwright/test");
const { channel } = require("diagnostics_channel");

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: "./tests",

  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  name: "Microsoft Edge",
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    channel: "msedge",
    headless: false,
  },
};

module.exports = config;
