Feature: The Settings Page

  I want to interact with the settings page

  Scenario: Navigating to the settings page
    Given I have just logged in
    When I click on the "SETTINGS" tab with id of "#mat-tab-label-0-7"
    Then the URL is "/settings"

  Scenario: Going back
    Given I am on the "/settings" tab
    When I click the back button
    Then I should not see "/settings" in the URL
