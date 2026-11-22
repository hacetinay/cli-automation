import {
  Given,
  Then,
  When
} from "@cucumber/cucumber";
import { CustomWorld } from "../features/support/world";

Given("the public login page is available", function () {
  // This is a public-page precondition; the following When step opens the page.
});

When("a visitor opens the sign-in page", async function (this: CustomWorld) {
  await this.loginPage.openPublicLoginPage();
});

Then("the page title is {string}", async function (
  this: CustomWorld,
  title: string
) {
  await this.loginPage.assertPageTitle(title);
});

Then("the page displays the {string} heading", async function (
  this: CustomWorld,
  heading: string
) {
  await this.loginPage.assertHeadingIsVisible(heading);
});

Then(
  "the sign-in form presents Email and Password fields",
  async function (this: CustomWorld) {
    await this.loginPage.assertCredentialFieldsAreVisible();
  }
);

Then("the sign-in form offers a {string} action", async function (
  this: CustomWorld,
  actionName: string
) {
  await this.loginPage.assertSignInActionIsVisible(actionName);
});

Then(
  "the Email and Password fields are empty on initial load",
  async function (this: CustomWorld) {
    await this.loginPage.assertCredentialFieldsAreEmpty();
  }
);

Given(
  "a visitor is on the public login page",
  async function (this: CustomWorld) {
    await this.loginPage.openPublicLoginPage();
  }
);

When(
  "the visitor views the initial sign-in form",
  async function (this: CustomWorld) {
    await this.loginPage.waitForInitialSignInForm();
  }
);

Then(
  "the Email field is required and uses email input semantics",
  async function (this: CustomWorld) {
    await this.loginPage.assertEmailFieldUsesRequiredEmailSemantics();
  }
);

Then(
  "the Password field is required and uses password input semantics",
  async function (this: CustomWorld) {
    await this.loginPage.assertPasswordFieldUsesRequiredPasswordSemantics();
  }
);