# W-LOGIN-02 — Sign in and view the dashboard

- **Goal:** Access the authenticated dashboard using the configured account.
- **Starting page:** `/login`.
- **Prerequisites:** Locally configured `USER_NAME` and `PASSWORD` environment values and access to the target environment.
- **Observed actions and transitions:**
  1. Opened `/login`; the title was `Sign in — ZincTM`.
  2. Entered the locally configured values in the Email and Password inputs.
  3. Selected `Sign in`.
  4. The browser reached `/dashboard`, with title `Dashboard — ZincTM` and the `Your QA workspace` heading.
- **Observed outcome:** The dashboard displayed navigation, account area, summary cards, and dashboard sections. See [P-DASHBOARD](../pages/P-DASHBOARD.md) and [E-DASHBOARD](../elements/E-DASHBOARD.md).
- **Alternates and failures:** None exercised; no assumptions are made about invalid credentials, validation, redirects in other circumstances, or sign-out.
- **Evidence:** [Sanitized exploration report](../reports/AUTHENTICATED-EXPLORATION-2026-11-22.md), based on Playwright CLI observations on 2026-11-22. Credentials and account-specific data are excluded.
