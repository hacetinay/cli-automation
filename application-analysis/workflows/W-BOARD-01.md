# W-BOARD-01 — Open the authenticated board

- **Goal:** Reach and inspect the ZincTM board.
- **Starting page:** `/login`.
- **Prerequisites:** An approved local test account configured outside source control.
- **Observed actions and transitions:**
  1. Entered the locally configured sign-in values and submitted the sign-in form. Values are not included in this record.
  2. The app opened `/dashboard` with title `Dashboard — ZincTM`.
  3. Selected the visible Board navigation link (`nav-board`).
  4. The browser opened `/board` with title `Board — ZincTM`.
  5. Inspected the heading, filter metadata, status columns, and card affordance without opening a record.
- **Successful outcome:** The board rendered six status columns: new, open, in progress, fixed, retest, and closed. A linked card was present in Open at the time of exploration; its identifier and content are omitted.
- **Failure or alternate paths actually observed:** Direct navigation while unauthenticated redirected to `/login`. No sign-in failure path was exercised.
- **Not exercised:** Filter behavior, card navigation, create/edit/delete actions, or any data-changing interaction.
- **Evidence:** Playwright CLI navigation and DOM observations on 2026-11-23; see [P-BOARD](../pages/P-BOARD.md) and [E-BOARD](../elements/E-BOARD.md).