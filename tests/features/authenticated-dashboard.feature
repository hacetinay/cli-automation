# Approved source: test-cases/approved/authenticated-dashboard.feature and .json
@regression @authenticated
Feature: Authenticated sign-in and dashboard
  Characterize the observed sign-in transition and dashboard.

  @TC-LOGIN-003 @positive
  Scenario: User signs in and reaches the dashboard
    Given an approved test account can sign in
    And the user is on the public sign-in page
    When the user signs in with the configured valid credentials
    Then the dashboard is displayed at "/dashboard"
    And the page title is "Dashboard — ZincTM"
    And the page displays the "Your QA workspace" heading

  @TC-DASH-001 @positive
  Scenario: Dashboard presents workspace summary categories
    Given an approved test account is signed in
    When the user views the dashboard
    Then the dashboard presents summaries for "Requirements covered", "Test cases", "Test runs", and "Open defects"

  @TC-DASH-002 @positive
  Scenario: Dashboard presents workspace sections
    Given an approved test account is signed in
    When the user views the dashboard
    Then the dashboard presents the "Open defects", "Recent runs", and "Weakest coverage" sections

  @TC-DASH-003 @positive
  Scenario: Dashboard presents project navigation
    Given an approved test account is signed in
    When the user views the dashboard
    Then the project navigation presents "Dashboard", "Board", "Requirements", "Test cases", "Coverage", "Runs", and "Defects"

  @TC-DASH-004 @positive
  Scenario: Dashboard presents account and workspace controls
    Given an approved test account is signed in
    When the user views the dashboard
    Then the dashboard presents "Create", "Go to issue by key", "Toggle light or dark theme", "Sign out", and "Profile" controls
