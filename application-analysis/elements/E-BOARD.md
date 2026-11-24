# E-BOARD — Board element inventory

Evidence context: authenticated `/board`, Playwright CLI accessibility and DOM metadata inspection, 2026-11-23. Record identifiers and card contents are excluded. Common header and sidebar controls are documented in [E-DASHBOARD](E-DASHBOARD.md).

| Element ID | Purpose and type | Accessible name / observed label | `data-testid` and recommended locator | Stability and observed behavior |
|---|---|---|---|---|
| E-BOARD-01 | Page heading (`h1`) | Board | `getByRole('heading', { name: 'Board', level: 1 })` | Semantic locator; no test ID observed. |
| E-BOARD-02 | Defect filter textbox | Label: Filter defects; placeholder: Filter by key, summary or label… | `board-filter`; use `getByTestId('board-filter')` | Explicit test ID; empty and enabled. Filtering behavior not exercised. |
| E-BOARD-03 | New status column | new | `board-column-new`; use `getByTestId('board-column-new')` | Explicit status-specific test ID; container was empty in this session. |
| E-BOARD-04 | Open status column | open | `board-column-open`; use `getByTestId('board-column-open')` | Explicit status-specific test ID; contained a linked card. |
| E-BOARD-05 | In progress status column | in progress | `board-column-in_progress`; use `getByTestId('board-column-in_progress')` | Explicit status-specific test ID; container was empty in this session. |
| E-BOARD-06 | Fixed status column | fixed | `board-column-fixed`; use `getByTestId('board-column-fixed')` | Explicit status-specific test ID; container was empty in this session. |
| E-BOARD-07 | Retest status column | retest | `board-column-retest`; use `getByTestId('board-column-retest')` | Explicit status-specific test ID; container was empty in this session. |
| E-BOARD-08 | Closed status column | closed | `board-column-closed`; use `getByTestId('board-column-closed')` | Explicit status-specific test ID; container was empty in this session. |
| E-BOARD-09 | Defect card (`article`) containing a link | Record-specific accessible name, intentionally omitted | Observed test-ID pattern includes a dynamic issue key; do not hardcode it. Use a fixture-specific link name only when approved test data is defined. | Card identifier varies by record. Not opened; destination behavior is unknown. |

No CSS selectors are recommended. The shared Board navigation link and header controls reuse the locators in [E-DASHBOARD](E-DASHBOARD.md).