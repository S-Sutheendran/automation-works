const { test, expect } = require("@playwright/test");

test("Rahul Shetty Academy Assignment Test", async ({ page }) => {
  // PlayWright Automation Code
  const user_name = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const login_button = page.locator("[name= 'login']");
  const titles = page.locator(".card-body b");

  await page.goto("https://rahulshettyacademy.com/client");

  //Login Details
  await user_name.fill("testing.4101996@gmail.com");
  await password.fill("Testing.test@123");
  await login_button.click();

  //Fetching Card Titles
  // await page.waitForLoadState("networkidle"); This is sometimes Flaky and may not work properly

  await titles.first().waitFor(); //It works only for single element, hence using first() method
  const all_titles = await titles.allTextContents();
  console.log(all_titles);
});
