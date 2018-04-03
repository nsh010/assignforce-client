Feature: The Profile Page

  Scenario: Navigating to the profile page
    Given I have just logged in
    When I click on the "PROFILE" tab with id of "#mat-tab-label-0-5"
    Then the URL is "/profile"

  Scenario: Going back
    Given I am on the "/profile" tab
    When I click the back button
    Then I should not see "/profile" in the URL
