const { test, expect } = require("@playwright/test");

test("First PlayWright Test", async ({ browser }) => {
  // PlayWright Automation Code
  const context = await browser.newContext();
  const page = await context.newPage();
  const user_name = page.locator("#username");
  const password = page.locator("[name = 'password']");
  const signin_button = page.locator("#signInBtn");
  const error_message = page.locator("[style *= 'block']");
  const card_titles = page.locator(".card-body a");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // Getting Title
  console.log(await page.title());

  //Username
  await user_name.fill("rahulshetty");

  //Password
  await password.fill("learning");

  //Signin button
  await signin_button.click();

  //Checking disappearing error message - PlayWright will wait until element is found or for default timeout
  const error_message_text = await error_message.textContent();
  console.log(error_message_text);

  //Assertion on Error Message
  expect(error_message_text).toContain("Incorrect");

  //Clear the Username and then add
  await user_name.fill(""); // This will clear the text box content
  await user_name.fill("rahulshettyacademy");
  await signin_button.click();

  //Product Dashboard
  console.log(await page.locator(".card-body a").first().textContent());
  console.log(await page.locator(".card-body a").nth(1).textContent());

  //Getting all Product Details
  const all_titles = await card_titles.allTextContents();
  console.log(all_titles);
});

test("Page PlayWright Test with Page Fixture", async ({ page }) => {
  await page.goto("https://www.google.com/");

  // Getting Title
  console.log(await page.title());

  // Assertions
  await expect(page).toHaveTitle("Google");
});
