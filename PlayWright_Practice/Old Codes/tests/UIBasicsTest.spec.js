const { test, expect } = require("@playwright/test");
const { domainToUnicode } = require("url");

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
  await password.fill("learning");
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

test("UI Controls Testing", async ({ page }) => {
  const user_name = page.locator("#username");
  const password = page.locator("[name = 'password']");
  const signin_button = page.locator("#signInBtn");
  const dropdown_value = page.locator("select.form-control");
  const radio_button = page.locator(".radiotextsty");
  const check_box = page.locator("#terms");
  const document_link = page.locator("[href *= 'documents-request']");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  await user_name.fill("rahulshettyacademy");
  await password.fill("learning");
  await dropdown_value.selectOption("Consultant");
  // await page.pause();
  await radio_button.nth(1).click();
  await page.locator("#okayBtn").click();
  await check_box.click();

  //Assertion on Radio button
  await expect(radio_button.last()).toBeChecked();
  await expect(check_box).toBeChecked();
  await check_box.uncheck();
  expect(await check_box.isChecked()).toBeFalsy();

  //Blinking Text for Link
  await expect(document_link).toHaveAttribute("class", "blinkingText");

  await signin_button.click();
});

//Clicking & Verifying the text in child window
test("Child Window Handling", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const document_link = page.locator("[href *= 'documents-request']");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"), //Listen for any new page
    document_link.click(),
  ]); //New page is opened
  const red_text = await newPage.locator(".red").textContent();
  console.log(red_text);
  const split_text = red_text.split("@");
  console.log(split_text[1]);
  const domain_name = split_text[1].split(" ")[0];
  console.log(domain_name);

  await page.locator("#username").fill(domain_name);
});
