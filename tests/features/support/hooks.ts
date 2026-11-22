
import {
  BeforeAll,
  Before,
  After,
  AfterAll,
  Status
} from "@cucumber/cucumber";

import { chromium, Browser } from "playwright";
import { CustomWorld } from "./world";
import { LoginPage } from "../../pages/loginPage";
import { DashboardPage } from "../../pages/dashboardPage";
import { environment } from "../../../src/config/environment";

let browser: Browser | undefined;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: environment.headless
  });
});

Before(async function (this: CustomWorld) {
  if (!browser) {
    throw new Error("The scenario browser was not initialized.");
  }

  this.browser = browser;

  // Isolated context for every scenario
  this.context = await browser.newContext();

  this.page = await this.context.newPage();

  this.loginPage = new LoginPage(this.page);
  this.dashboardPage = new DashboardPage(this.page);
});

After(async function (this: CustomWorld, scenario) {
  try {
    // Authenticated pages can contain personal data or credentials.
    const isAuthenticated = scenario.pickle.tags.some(tag => tag.name === "@authenticated");
    if (scenario.result?.status === Status.FAILED && this.page && !isAuthenticated) {
      const screenshot = await this.page.screenshot();

      await this.attach(screenshot, {
        mediaType: "image/png",
        fileName: "failure-screenshot.png"
      });
    }
  } finally {
    await this.context?.close();
  }
});

AfterAll(async () => {
  await browser?.close();
});
