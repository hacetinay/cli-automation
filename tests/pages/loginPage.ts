import { expect, Locator, Page } from "@playwright/test";
import { environment } from "../../src/config/environment";

export class LoginPage {
  private readonly emailField: Locator;
  private readonly passwordField: Locator;
  private readonly signInButton: Locator;

  constructor(private readonly page: Page) {
    this.emailField = page.getByTestId("login-email");
    this.passwordField = page.getByTestId("login-password");
    this.signInButton = page.getByTestId("login-submit");
  }

  async openPublicLoginPage(): Promise<void> {
    const loginUrl = new URL("/login", environment.baseUrl);
    await this.page.goto(loginUrl.toString());
  }

  async assertPageTitle(title: string): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  async assertHeadingIsVisible(name: string): Promise<void> {
    await expect(
      this.page.getByRole("heading", { name, level: 1, exact: true })
    ).toBeVisible();
  }

  async assertCredentialFieldsAreVisible(): Promise<void> {
    await expect(this.emailField).toBeVisible();
    await expect(this.passwordField).toBeVisible();
  }

  async assertSignInActionIsVisible(name: string): Promise<void> {
    await expect(this.signInButton).toBeVisible();
    await expect(this.signInButton).toHaveAccessibleName(name);
  }

  async assertCredentialFieldsAreEmpty(): Promise<void> {
    await expect(this.emailField).toHaveValue("");
    await expect(this.passwordField).toHaveValue("");
  }

  async waitForInitialSignInForm(): Promise<void> {
    await this.assertCredentialFieldsAreVisible();
  }

  async assertEmailFieldUsesRequiredEmailSemantics(): Promise<void> {
    await expect(this.emailField).toHaveAttribute("type", "email");
    await expect(this.emailField).toHaveAttribute("required", "");
  }

  async assertPasswordFieldUsesRequiredPasswordSemantics(): Promise<void> {
    await expect(this.passwordField).toHaveAttribute("type", "password");
    await expect(this.passwordField).toHaveAttribute("required", "");
  }
}
