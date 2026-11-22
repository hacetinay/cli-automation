
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

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
