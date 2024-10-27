const { test, expect } = require("@playwright/test");

test("Rahulshetty Academy Login Page", async ({ browser }) => {
  //PlayWright Code will go here
  // The newContext() will open the browser with all cookies, plugins etc and those can be stored for later run also
  const context = await browser.newContext(); // Browser info will be mentioned in config file
  const page = await context.newPage(); // In this page URL will be opened
  const userName = page.locator("input#userEmail");
  const password = page.locator("#userPassword");
  const loginButton = page.locator("#login");

  await page.goto("https://rahulshettyacademy.com/client");

  await userName.fill("testing.4101996@gmail.com");
  await password.fill("Testing.test@123");
  await loginButton.click();
});
