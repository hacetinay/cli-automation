# Element inventory — P-LOGIN

Locator recommendations below are durable candidates, not transient Playwright CLI references. Prefer the observed `data-testid` values where available.

| Element ID | Purpose / type | Accessible name or label | `data-testid` | Recommended locator | Stability and observed state | Evidence |
|---|---|---|---|---|---|---|
| E-LOGIN-MAIN | Main page region / landmark | `main` | Not observed | `getByRole('main')` | **High**: semantic landmark. Visible on initial page load. | Snapshot; screenshot |
| E-LOGIN-TITLE | Product/page heading / `h1` | “ZincALM” | Not observed | `getByRole('heading', { name: 'ZincALM', level: 1 })` | **High**: semantic heading and level observed; exact text could change with product branding. | Snapshot; screenshot |
| E-LOGIN-INTRO | Introductory paragraph | “Your QA workspace for ZincBank — requirements, test cases, automation coverage, runs and the bug lifecycle.” | Not observed | `getByText('Your QA workspace for ZincBank', { exact: false })` | **Medium**: visible text is direct evidence, but text locator depends on copy remaining stable. | Snapshot; screenshot |
| E-LOGIN-EMAIL | Email input / textbox (`type=email`) | “Email” | `login-email` | `getByTestId('login-email')`; semantic alternative: `getByRole('textbox', { name: 'Email' })` | **High**: explicit test ID observed; required and `autocomplete=email`; empty in initial state. No placeholder observed. | Snapshot; read-only DOM observation; screenshot |
| E-LOGIN-PASSWORD | Password input / textbox (`type=password`) | “Password” | `login-password` | `getByTestId('login-password')`; semantic alternative: `getByLabel('Password')` | **High**: explicit test ID observed; required and `autocomplete=current-password`; empty in initial state. No placeholder observed. | Snapshot; read-only DOM observation; screenshot |
| E-LOGIN-SUBMIT | Form submit button | “Sign in” | `login-submit` | `getByTestId('login-submit')`; semantic alternative: `getByRole('button', { name: 'Sign in' })` | **High**: explicit test ID and accessible button name observed. Not clicked; enabled/disabled transition and submit result were not explored. | Snapshot; read-only DOM observation; screenshot |
| E-LOGIN-HELP | Supporting instruction paragraph | “Sign in with the same email and password you use for ZincBank. Your workspace is private to you.” | Not observed | `getByText('Sign in with the same email and password you use for ZincBank', { exact: false })` | **Medium**: directly observed copy; locator depends on wording remaining stable. | Snapshot; screenshot |
| E-LOGIN-ALERT | Alert node in accessibility snapshot | No accessible name or text observed | Not observed | `getByRole('alert')` is a candidate only if the node is present in the current snapshot | **Low / verify before use**: the snapshot includes an empty alert node at the page edge, but read-only DOM queries found no explicit `[role]` or `[aria-live]` element. Its DOM implementation, purpose, and persistence are unknown. | Refreshed snapshot; read-only DOM observation |

## Locator notes

- No CSS-only locators are recommended.
- Generated element `id` values were observed on the inputs but are intentionally not recommended; generated IDs may change between renders.
- On revisit, `input.labels` confirmed that the Email and Password text labels are associated with their respective inputs. Both inputs remain empty; no placeholder or `aria-label`/`aria-labelledby` attribute was observed.
- The form's observed DOM method is `get`, with action resolving to `/login`. This is a markup observation only; the form was not submitted and no API or authentication behavior was inspected.
- No anchor elements were present in the inspected DOM. The accessibility snapshot's empty alert node is not matched by a DOM query for explicit `[role]` or `[aria-live]` attributes; do not assume error behavior from it.
