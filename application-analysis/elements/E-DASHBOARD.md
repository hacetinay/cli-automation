# E-DASHBOARD — Dashboard element inventory

Evidence context: authenticated `/dashboard`, Playwright CLI accessibility snapshot and attribute inspection, 2026-11-22. Every test ID listed below was observed once on that page. Test IDs are preferred over copy-dependent accessible names; long-term stability is not verified.

| Element ID | Purpose and type | Accessible name | Observed `data-testid` and recommended locator | Observed state / stability |
|---|---|---|---|---|
| E-DASH-01 | Dashboard navigation link | Dashboard | `getByTestId('nav-dashboard')` | Links to `/dashboard`; explicit test ID. |
| E-DASH-02 | Board navigation link | Board | `getByTestId('nav-board')` | Links to `/board`; not clicked. |
| E-DASH-03 | Requirements navigation link | Requirements | `getByTestId('nav-requirements')` | Links to `/requirements`; not clicked. |
| E-DASH-04 | Test cases navigation link | Test cases | `getByTestId('nav-test-cases')` | Links to `/test-cases`; not clicked. |
| E-DASH-05 | Coverage navigation link | Coverage | `getByTestId('nav-coverage')` | Links to `/coverage`; not clicked. |
| E-DASH-06 | Runs navigation link | Runs | `getByTestId('nav-runs')` | Links to `/runs`; not clicked. |
| E-DASH-07 | Defects navigation link | Defects | `getByTestId('nav-defects')` | Links to `/defects`; not clicked. |
| E-DASH-08 | Profile navigation link | Profile | `getByTestId('nav-profile')` | Links to `/profile`; not clicked. |
| E-DASH-09 | Create link | Create | `getByTestId('global-create')` | Links to `/defects/new`; not clicked. |
| E-DASH-10 | Issue search textbox | Go to issue by key | `getByTestId('issue-search')` | Placeholder `Go to issue…`; not used. |
| E-DASH-11 | Theme button | Toggle light or dark theme | `getByTestId('theme-toggle')` | Visible; not clicked. |
| E-DASH-12 | Sign-out button | Sign out | `getByTestId('nav-signout')` | Visible; not clicked. |
| E-DASH-13 | Main heading | Your QA workspace | `getByRole('heading', { name: 'Your QA workspace', level: 1 })` | No test ID observed; semantic name is copy-dependent. |
| E-DASH-14 | Section headings | Open defects; Recent runs; Weakest coverage | `getByRole('heading', { name: '<section name>', level: 2 })` | No test IDs observed on headings; accessible names are copy-dependent. |

Summary values and individual record links are account-specific and are not suitable as fixed expected values or durable named locators. No CSS locators were needed.
