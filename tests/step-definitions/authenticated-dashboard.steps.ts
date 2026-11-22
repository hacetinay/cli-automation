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

Given("an approved test account can sign in", function () {
  credentials();
});

Given("the user is on the public sign-in page", async function (this: CustomWorld) {
  await this.loginPage.openPublicLoginPage();
});

When("the user signs in with the configured valid credentials", async function (this: CustomWorld) {
  const { email, password } = credentials();
  await this.loginPage.submitLoginForm(email, password);
});

Given("an approved test account is signed in", async function (this: CustomWorld) {
  const { email, password } = credentials();
  await this.loginPage.openPublicLoginPage();
  await this.loginPage.submitLoginForm(email, password);
  await this.dashboardPage.assertDisplayedAt("/dashboard");
});

When("the user views the dashboard", async function (this: CustomWorld) {
  await this.dashboardPage.assertDisplayedAt("/dashboard");
});

Then("the dashboard is displayed at {string}", async function (this: CustomWorld, path: string) {
  await this.dashboardPage.assertDisplayedAt(path);
});

Then(
  "the dashboard presents summaries for {string}, {string}, {string}, and {string}",
  async function (this: CustomWorld, first: string, second: string, third: string, fourth: string) {
    await this.dashboardPage.assertSummaryCategories([first, second, third, fourth]);
  }
);

Then(
  "the dashboard presents the {string}, {string}, and {string} sections",
  async function (this: CustomWorld, first: string, second: string, third: string) {
    await this.dashboardPage.assertSections([first, second, third]);
  }
);

Then(
  "the project navigation presents {string}, {string}, {string}, {string}, {string}, {string}, and {string}",
  async function (this: CustomWorld, first: string, second: string, third: string, fourth: string, fifth: string, sixth: string, seventh: string) {
    await this.dashboardPage.assertProjectNavigation([first, second, third, fourth, fifth, sixth, seventh]);
  }
);

Then(
  "the dashboard presents {string}, {string}, {string}, {string}, and {string} controls",
  async function (this: CustomWorld, first: string, second: string, third: string, fourth: string, fifth: string) {
    await this.dashboardPage.assertControls([first, second, third, fourth, fifth]);
  }
);
