# Playwright CLI + TypeScript + Cucumber BDD — Three-Agent Framework

This package defines exactly three GitHub Copilot agents for an existing web application:

1. **Application Explorer** — explores the application with Playwright CLI and documents observed pages, elements, and workflows.
2. **Test Scenario Designer** — converts approved application evidence and requirements into reviewable Gherkin scenarios and structured JSON test cases.
3. **Automation Developer** — implements approved scenarios using TypeScript, Playwright Library, Cucumber BDD, and Page Object Model (POM).

The agents are designed to work sequentially and share files through explicit handoffs. They do not assume Jira is available.

## Non-negotiable operating rules

- Use **Playwright CLI** for browser exploration.
- Use **Playwright Library** from TypeScript for automated test execution.
- **Do not configure, install, invoke, or use Playwright MCP Server.**
- Never use transient Playwright CLI element references (for example, `e1`) as permanent test locators. Convert observations into stable locators.
- Prefer `getByTestId()` when a suitable `data-testid` exists; otherwise use accessible role/name, label, placeholder, or a reviewed CSS locator as a last resort.
- Do not invent application behavior. Mark findings as `observed`, `inferred`, or `assumption`.
- Do not create executable tests from unapproved scenarios.
- Do not overwrite existing project configuration without inspecting it and explaining the proposed change.
- Keep step definitions free of direct selectors. Locators belong in Page Objects.
- Never hide a test failure by weakening assertions, adding arbitrary waits, or silently changing expected behavior.

## Recommended workflow

1. Run **Application Explorer**. It explores the existing application and writes an application inventory.
2. Review the inventory, then run **Test Scenario Designer**. It writes Gherkin and JSON scenarios to `test-cases/pending-approval/`.
3. Review and approve scenarios by moving/copying them to `test-cases/approved/`.
4. Run **Automation Developer**. It implements only approved scenarios and validates the existing framework.

## Project layout

```text
.github/
  agents/
    application-explorer.agent.md
    test-scenario-designer.agent.md
    automation-developer.agent.md
  instructions/
    playwright-cli.instructions.md
    test-automation.instructions.md
application-analysis/
  pages/
  elements/
  workflows/
  reports/
test-cases/
  pending-approval/
  approved/
src/
  features/
  steps/
  pages/
  support/
  api/
  data/
  utils/
reports/
README.md
```

The agent definitions can be copied into the corresponding locations in an existing repository. Adapt paths to the repository's established conventions rather than duplicating an existing structure.

## Shared handoff contract

### Application Explorer output

- `application-analysis/pages/`: page-level summaries and navigation relationships.
- `application-analysis/elements/`: element inventory with locator candidates and stability notes.
- `application-analysis/workflows/`: observed end-to-end user workflows.
- `application-analysis/reports/`: exploration summary, unresolved questions, and coverage gaps.

Every finding must include its source page or workflow and confidence classification.

### Test Scenario Designer output

For each scenario, include:
- Unique scenario ID.
- Feature and scenario title.
- Preconditions and test data.
- Gherkin steps.
- Expected result/assertions.
- Type: positive, negative, or boundary.
- Traceability to requirements and/or Explorer evidence.
- Assumptions and open questions.
- Approval status, initially `pending`.

Write draft cases only under `test-cases/pending-approval/`. Do not modify the approved directory.

### Automation Developer input and output

Input:
- Approved JSON scenario files.
- Approved Gherkin scenarios.
- Application inventory and locator guidance.
- Existing project conventions.

Output:
- `.feature` files under `src/features/`.
- Step definitions under `src/steps/`.
- Page Objects under `src/pages/`.
- Shared hooks, World/context, and fixtures under `src/support/`.
- API helpers and test data only when required.

## Suggested validation commands

Use the scripts that actually exist in the repository. Typical commands after configuration:

```bash
npx playwright --version
npx cucumber-js --dry-run
npx tsc --noEmit
npm test
```

Do not claim a command passed unless it was executed and its exit status was checked.

## Installation

1. Extract this ZIP into a temporary location.
2. Copy `.github/agents/` and `.github/instructions/` into the root of your existing repository.
3. Create the shared output folders if they do not already exist.
4. Review the three agent definitions and adapt project paths.
5. Start with the Application Explorer agent.
