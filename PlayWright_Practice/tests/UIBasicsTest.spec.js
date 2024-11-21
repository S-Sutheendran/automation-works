const { test, expect } = require("@playwright/test"); //We are importing test to launch the browser and execute the tests

test("My First PlayWright test", async ({ browser }) => {
  //PlayWright Code will go here
  // The newContext() will open the browser with all cookies, plugins etc and those can be stored for later run also
  const context = await browser.newContext(); // Browser info will be mentioned in config file
  const page = await context.newPage(); // In this page URL will be opened
  const userName = page.locator("input#username");
  const password = page.locator("#password");
  const singinButton = page.locator("[id = 'signInBtn']");
  const incorrect_error = page.locator("[style*='block']");
  const productTitle = page.locator(".card-body a");

  try {
    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await singinButton.click();

    // Assertion for the substring
    await expect(incorrect_error).toContainText("Incorrect");
    console.log(await incorrect_error.textContent());
  } catch (error) {
    console.error("Assertion failed: ", error.message);
  }

  try {
    //Grab elements from multiple elements
    console.log(await productTitle.first().textContent());
    console.log(await productTitle.nth(1).textContent());

    //To get all titles of the Products
    const allProductTitles = await productTitle.allTextContents();
    console.log(allProductTitles);

    await page.close();
  } catch (error) {
    console.error(
      "An exception occurred while accessing product titles:",
      error.message
    );
  }
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
