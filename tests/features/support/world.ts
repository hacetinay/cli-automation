
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
import { BoardPage } from "../../pages/boardPage";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;
  dashboardPage!: DashboardPage;
  boardPage!: BoardPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
