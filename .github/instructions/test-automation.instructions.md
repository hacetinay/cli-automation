# Shared Test Automation Rules

- Stack: TypeScript + Playwright Library + Cucumber BDD + Page Object Model.
- Cucumber is the BDD runner and owns scenario execution.
- Playwright Library performs browser interactions in automated tests.
- Page Objects own UI locators and page-specific behavior.
- Step definitions express business intent and delegate to Page Objects.
- Create scenario-scoped browser contexts and state.
- Use stable semantic locators; prefer `data-testid` where available.
- No arbitrary fixed waits, hidden failures, or weakened assertions.
- Only implement human-approved scenarios.
- Never use Playwright MCP Server.
- Never use transient CLI element references as permanent locators.
- Keep secrets outside source control and use environment variables.
