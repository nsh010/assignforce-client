Feature: The Locations Page

  Scenario: Navigating to the locations page
    Given I have just logged in
    When I click on the "LOCATIONS" tab with id of "#mat-tab-label-0-2"
    Then the URL is "/locations"

  Scenario: Going back
    Given I am on the "/locations" tab
    When I click the back button
    Then I should not see "/locations" in the URL

