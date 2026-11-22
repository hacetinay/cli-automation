@regression
Feature: Public login page
  Characterize the observed initial state of the public ZincTM sign-in page.

  @TC-LOGIN-001 @positive
  Scenario: Visitor sees the public sign-in form
    Given the public login page is available
    When a visitor opens the sign-in page
    Then the page title is "Sign in — ZincTM"
    And the page displays the "ZincALM" heading
    And the sign-in form presents Email and Password fields
    And the sign-in form offers a "Sign in" action
    And the Email and Password fields are empty on initial load

  @TC-LOGIN-002 @positive
  Scenario: Sign-in form identifies both credentials as required
    Given a visitor is on the public login page
    When the visitor views the initial sign-in form
    Then the Email field is required and uses email input semantics
    And the Password field is required and uses password input semantics