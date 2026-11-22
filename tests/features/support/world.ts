
import {
  World,
  IWorldOptions,
  setWorldConstructor
} from "@cucumber/cucumber";

import {
  Browser,
  BrowserContext,
  Page
} from "playwright";

import { LoginPage } from "../../pages/loginPage";
import { DashboardPage } from "../../pages/dashboardPage";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;
  dashboardPage!: DashboardPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
