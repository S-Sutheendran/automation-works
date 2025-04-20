const { test, expect } = require("@playwright/test");
// const path = require("path");

test.only("End to End Automation of the Application", async ({ page }) => {
  // PlayWright Automation Code
  const user_name = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const login_button = page.locator("[name= 'login']");
  const product_title = page.locator(".card-body b");
  const product_name = page.locator(".card-body");
  const actual_product_name = "ZARA COAT 3";
  const cart_link = page.locator("[routerlink *= 'cart']");

  await page.goto("https://rahulshettyacademy.com/client");

  //Login Details
  await user_name.fill("testing.4101996@gmail.com");
  await password.fill("Testing.test@123");
  await login_button.click();

  //Fetching Card Titles
  // await page.waitForLoadState("networkidle"); This is sometimes Flaky and may not work properly

  await product_title.first().waitFor(); //It works only for single element, hence using first() method
  const all_titles = await product_title.allTextContents();
  console.log(all_titles);

  const total_products = await product_name.count();
  for (let i = 0; i < total_products; i++) {
    if (
      (await product_name.nth(i).locator("b").textContent()) ==
      actual_product_name
    ) {
      await product_name.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }

  await cart_link.click();

  await page.locator("div li").first().waitFor();

  //Check the Product in Cart
  const product_valid = page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  expect(product_valid).toBeTruthy();

  await page.locator(".subtotal li button").click();

  await page.locator("[placeholder *= 'Country']").pressSequentially("ind");
  const country_options = page.locator(".ta-results");
  await country_options.waitFor();
  const total_country = await country_options.locator("button").count();
  for (let i = 0; i < total_country; i++) {
    const country_name = await country_options
      .locator("button")
      .nth(i)
      .textContent();
    if (country_name.trim() == "India") {
      await country_options.locator("button").nth(i).click();
      break;
    }
  }

  // const card_number = page.locator(".field input[type='text']");

  // card_number.first().fill("");
  // card_number.first().fill("4542 9931 9292 2293");

  expect(page.locator(".user__name [type='text']").first()).toHaveText(
    "testing.4101996@gmail.com"
  );

  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(
    " Thankyou for the order. "
  );

  const orderId = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  console.log(orderId);

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < (await rows.count()); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();

  // await page.pause();
});
