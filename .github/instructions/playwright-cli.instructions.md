# Playwright CLI Exploration Rules

- Playwright CLI is the approved tool for interactive browser exploration.
- Do not configure, install, invoke, or use Playwright MCP Server.
- Use CLI snapshots, screenshots, and browser observations to understand the application.
- CLI element handles/references such as `e1` are temporary interaction handles only. Never copy them into durable test code or inventories as locators.
- Translate observations into stable locators: `data-testid` first when present, then accessible role/name, label, or placeholder; CSS is last resort.
- Record the evidence and page context for every locator recommendation.
- Do not infer behavior that was not observed.
