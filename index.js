const { Builder, Browser } = require("selenium-webdriver");

(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get("https://kavirtire.ir/esale/login");

  // insert national code
  await driver.findElement({ name: "n_code" }).sendKeys("1234567890");

  await driver.sleep(3000);

  // click on recaptcha-checkbox-border element
   solveRecaptcha();
   // wait for 5 seconds
  await driver.sleep(3000);

  // click on element with class 'btn btn-success float-start'
  await driver.findElement({ class: "btn btn-success float-start" }).click();

  // wait for 5 seconds
  await driver.sleep(3000);

  await driver.quit();
})();

async function solveRecaptcha() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://example.com');

        // Switch to the iframe containing the reCAPTCHA
        await driver.switchTo().frame('your-iframe-id');

        // Solve the reCAPTCHA (click the checkbox, submit form, etc.)
        await driver.findElement(By.css('#recaptcha-checkbox')).click();

        // Switch back to the main content
        await driver.switchTo().defaultContent();

        // Continue your actions
        // Example: Fill out a form
        await driver.findElement(By.name('name')).sendKeys('John Doe');
        await driver.findElement(By.name('email')).sendKeys('john@example.com');
        await driver.findElement(By.id('submit-button')).click();

        // Wait for confirmation or further actions
        await driver.wait(until.elementLocated(By.id('confirmation-message')), 10000);
    } finally {
        await driver.quit();
    }
}
