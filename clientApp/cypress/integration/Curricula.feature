Feature: The Curricula Page

  Scenario: Navigating to the curricula page
    Given I have just logged in
    When I click on the "CURRICULA" tab with id of "#mat-tab-label-0-3"
    Then the URL is "/curricula"

  Scenario: Going back
    Given I am on the "/curricula" tab
    When I click the back button
    Then I should not see "/curricula" in the URL

