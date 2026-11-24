# Approved source: test-cases/approved/board.feature and .json
@regression
Feature: Authenticated defect board
  Characterize the observed access and visible structure of the board.

  @authenticated @TC-BOARD-001 @positive
  Scenario: Signed-in user opens the board
    Given an approved test account is signed in on the dashboard
    When the user opens Board from project navigation
    Then the browser is at "/board"
    And the page title is "Board — ZincTM"
    And the page displays the "Board" heading

  @authenticated @TC-BOARD-002 @positive
  Scenario: Board presents the observed defect status columns
    Given an approved test account is signed in on the board
    When the user views the board
    Then the board presents the "new", "open", "in progress", "fixed", "retest", and "closed" status columns

  @authenticated @TC-BOARD-003 @positive
  Scenario: Board presents an empty defect filter
    Given an approved test account is signed in on the board
    When the user views the board
    Then the board presents an empty "Filter defects" field
    And the field shows the placeholder "Filter by key, summary or label…"

  @TC-BOARD-004 @negative
  Scenario: Unauthenticated visitor is redirected from the board
    Given the browser has no authenticated session
    When the visitor opens the board directly
    Then the sign-in page is displayed at "/login"
    And the page title is "Sign in — ZincTM"