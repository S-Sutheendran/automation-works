const { test, expect } = require("@playwright/test");

test.only("Login to the URL", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newContext();
  const email_id = page.locator("#userEmail");
  const password = page.locator("[type = 'password']");
  const product_title = page.locator(".card-body b");

  //Go to the URL
  await page.goto("https://rahulshettyacademy.com/client/auth/login");

  //Checking Title of the page
  console.log(await page.title());
  expect(page.title()).toContain("Let's Shop");

  //Login
  email_id.fill("testing.4101996@.com");
  password.fill("Testing.test@123");

  //Product Dashboard
  const first_product_title = await product_title.fist().textContent();
  console.log(first_product_title);
  const product_titles = await product_title.allTextContents();
  console.log(product_titles);
});
