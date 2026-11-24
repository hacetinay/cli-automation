import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../features/support/world";

function credentials(): { email: string; password: string } {
  const email = process.env.USER_NAME;
  const password = process.env.PASSWORD;
  if (!email || !password) {
    throw new Error("USER_NAME and PASSWORD must be configured for authenticated scenarios.");
  }
  return { email, password };
}

async function signIn(this: CustomWorld): Promise<void> {
  const { email, password } = credentials();
  await this.loginPage.openPublicLoginPage();
  await this.loginPage.submitLoginForm(email, password);
  await this.dashboardPage.assertDisplayedAt("/dashboard");
}

Given("an approved test account is signed in on the dashboard", signIn);

Given("an approved test account is signed in on the board", async function (this: CustomWorld) {
  await signIn.call(this);
  await this.dashboardPage.openBoardFromProjectNavigation();
  await this.boardPage.assertBoardDisplayed();
});

Given("the browser has no authenticated session", function () {});

When("the user opens Board from project navigation", async function (this: CustomWorld) {
  await this.dashboardPage.openBoardFromProjectNavigation();
});

When("the user views the board", async function (this: CustomWorld) {
  await this.boardPage.assertBoardDisplayed();
});

When("the visitor opens the board directly", async function (this: CustomWorld) {
  await this.boardPage.openDirectly();
});

Then("the browser is at {string}", async function (this: CustomWorld, path: string) {
  await this.boardPage.assertDisplayedAt(path);
});

Then(
  "the board presents the {string}, {string}, {string}, {string}, {string}, and {string} status columns",
  async function (
    this: CustomWorld,
    first: string,
    second: string,
    third: string,
    fourth: string,
    fifth: string,
    sixth: string
  ) {
    await this.boardPage.assertStatusColumns([first, second, third, fourth, fifth, sixth]);
  }
);

Then("the board presents an empty {string} field", async function (this: CustomWorld, fieldName: string) {
  if (fieldName !== "Filter defects") throw new Error(`Unknown board field: ${fieldName}`);
  await this.boardPage.assertFilterIsEmpty(fieldName);
});

Then("the field shows the placeholder {string}", async function (this: CustomWorld, placeholder: string) {
  await this.boardPage.assertFilterPlaceholder(placeholder);
});

Then("the sign-in page is displayed at {string}", async function (this: CustomWorld, path: string) {
  await this.boardPage.assertDisplayedAt(path);
});