import { expect, Page } from "@playwright/test";
import { environment } from "../../src/config/environment";

const navigationTestIds: Record<string, string> = {
  Dashboard: "nav-dashboard",
  Board: "nav-board",
  Requirements: "nav-requirements",
  "Test cases": "nav-test-cases",
  Coverage: "nav-coverage",
  Runs: "nav-runs",
  Defects: "nav-defects"
};

const controlTestIds: Record<string, string> = {
  Create: "global-create",
  "Go to issue by key": "issue-search",
  "Toggle light or dark theme": "theme-toggle",
  "Sign out": "nav-signout",
  Profile: "nav-profile"
};

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async assertDisplayedAt(path: string): Promise<void> {
    await expect(this.page).toHaveURL(new URL(path, environment.baseUrl).toString());
    await expect(
      this.page.getByRole("heading", { name: "Your QA workspace", level: 1, exact: true })
    ).toBeVisible();
  }

  async assertSummaryCategories(names: string[]): Promise<void> {
    const main = this.page.getByRole("main");
    for (const name of names) {
      await expect(main.getByRole("paragraph").and(main.getByText(name, { exact: true }))).toBeVisible();
    }
  }

  async assertSections(names: string[]): Promise<void> {
    for (const name of names) {
      await expect(this.page.getByRole("heading", { name, level: 2, exact: true })).toBeVisible();
    }
  }

  async assertProjectNavigation(names: string[]): Promise<void> {
    const navigation = this.page.getByRole("navigation", { name: "Project" });
    for (const name of names) {
      const testId = navigationTestIds[name];
      if (!testId) throw new Error(`Unknown dashboard navigation item: ${name}`);
      const item = navigation.getByTestId(testId);
      await expect(item).toBeVisible();
      await expect(item).toHaveAccessibleName(name);
    }
  }

  async assertControls(names: string[]): Promise<void> {
    for (const name of names) {
      const testId = controlTestIds[name];
      if (!testId) throw new Error(`Unknown dashboard control: ${name}`);
      const control = this.page.getByTestId(testId);
      await expect(control).toBeVisible();
      await expect(control).toHaveAccessibleName(name);
    }
  }
}
