# P-BOARD — Authenticated board

- **Page ID / name:** P-BOARD — Board
- **URL pattern:** `/board`
- **Entry/navigation path:** Direct navigation redirected to `/login`. After signing in with the locally configured account, the app opened `/dashboard`; selecting the visible Board navigation link opened `/board`.
- **Title:** `Board — ZincTM`.
- **Main visible regions:** Shared application header and sidebar; main region with a `Board` heading, a `Filter defects` textbox, and six status columns.
- **Columns observed:** `new`, `open`, `in progress`, `fixed`, `retest`, and `closed`. At the time of exploration, a linked card was visible in `open`; record details are intentionally omitted.
- **Important states:** Filter was empty. Other column contents and card counts are account-specific and may change.
- **Related workflow:** [W-BOARD-01](../workflows/W-BOARD-01.md).
- **Evidence:** Playwright CLI navigation, accessibility snapshot, and DOM metadata inspection on 2026-11-23. No record-specific content or raw board snapshot was retained.
- **Classification:** Page title, labels, column labels/test IDs, and visible card presence are observed. Filter behavior, card destinations, and board permissions remain untested.
- **Confidence:** High for the visible page structure in this session; account state may differ.