const { test, expect } = require("@playwright/test"); //We are importing test to launch the browser and execute the tests

test.only("My First PlayWright test", async ({ browser }) => {
  //PlayWright Code will go here
  // The newContext() will open the browser with all cookies, plugins etc and those can be stored for later run also
  const context = await browser.newContext(); // Browser info will be mentioned in config file
  const page = await context.newPage(); // In this page URL will be opened
  const userName = page.locator("input#username");
  const password = page.locator("#password");
  const singinButton = page.locator("[id = 'signInBtn']");
  const productTitle = page.locator(".card-body a");

  await page.goto("http://www.rahulshettyacademy.com/loginpagePractise");
  console.log(await page.title());
  await userName.fill("rahulshettyacademy");
  await password.fill("learning");
  await singinButton.click();
  //console.log(await page.locator("[style*='block']").textContent());

  //assertion for the substring
  // await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  //Grab elements from multiple elements
  console.log(await productTitle.first().textContent());
  console.log(await productTitle.nth(1).textContent());

  //To get all titles of the Products
  const allProductTitles = await productTitle.allTextContents();
  console.log(allProductTitles);
});

//Without context using page fixture invoking browser
test("Page PlayWright test", async ({ page }) => {
  //PlayWright Code will go here
  // The newContext() will open the browser with all cookies, plugins etc and those can be stored for later run also
  // const context = await browser.newContext(); // Browser info will be mentioned in config file
  // const page = await context.newPage(); // In this page URL will be opened
  await page.goto("https://www.google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
