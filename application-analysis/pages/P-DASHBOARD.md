# P-DASHBOARD — Authenticated dashboard

- **URL pattern:** `/dashboard`
- **Entry:** Submit the sign-in form with the locally configured account credentials.
- **Title:** `Dashboard — ZincTM`.
- **Observed regions:** Header with product link, Create, issue search, theme toggle, and Sign out; Project navigation; account/profile area; main workspace.
- **Main content:** `Your QA workspace` heading; summary cards for requirements covered, test cases, test runs, and open defects; `Open defects`, `Recent runs`, and `Weakest coverage` sections.
- **Observed state:** Summary values and lists were populated for the signed-in account; the recent runs section displayed its empty state. Values and account-specific records are intentionally omitted.
- **Navigation:** Sidebar links point to `/dashboard`, `/board`, `/requirements`, `/test-cases`, `/coverage`, `/runs`, `/defects`, and `/profile`. Header Create points to `/defects/new`. Destinations were not opened.
- **Workflow:** [W-LOGIN-02](../workflows/W-LOGIN-02.md).
- **Evidence:** [Sanitized exploration report](../reports/AUTHENTICATED-EXPLORATION-2026-11-22.md); Playwright CLI accessibility snapshot and DOM attribute inspection on 2026-11-22.
- **Classification:** All details above were observed in the requested environment; account data and state may change. The behavior of unclicked controls and links remains unknown.
