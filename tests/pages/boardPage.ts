import { expect, Page } from "@playwright/test";
import { environment } from "../../src/config/environment";

const columnTestIds: Record<string, string> = {
  new: "board-column-new",
  open: "board-column-open",
  "in progress": "board-column-in_progress",
  fixed: "board-column-fixed",
  retest: "board-column-retest",
  closed: "board-column-closed"
};

export class BoardPage {
  constructor(private readonly page: Page) {}

  async openDirectly(): Promise<void> {
    await this.page.goto(new URL("/board", environment.baseUrl).toString());
  }

  async assertDisplayedAt(path: string): Promise<void> {
    await expect(this.page).toHaveURL(new URL(path, environment.baseUrl).toString());
  }

  async assertBoardDisplayed(): Promise<void> {
    await this.assertDisplayedAt("/board");
    await expect(this.page).toHaveTitle("Board — ZincTM");
    await expect(this.page.getByRole("heading", { name: "Board", level: 1, exact: true })).toBeVisible();
  }

  async assertStatusColumns(names: string[]): Promise<void> {
    for (const name of names) {
      const testId = columnTestIds[name];
      if (!testId) throw new Error(`Unknown board status column: ${name}`);
      const column = this.page.getByTestId(testId);
      await expect(column).toBeVisible();
      await expect(column.getByText(name, { exact: true })).toBeVisible();
    }
  }

  async assertFilterIsEmpty(fieldName: string): Promise<void> {
    const filter = this.page.getByTestId("board-filter");
    await expect(filter).toBeVisible();
    await expect(filter).toHaveAccessibleName(fieldName);
    await expect(filter).toHaveValue("");
  }

  async assertFilterPlaceholder(placeholder: string): Promise<void> {
    await expect(this.page.getByTestId("board-filter")).toHaveAttribute("placeholder", placeholder);
  }
}