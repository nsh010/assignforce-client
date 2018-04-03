Feature: The Trainers Page

  Scenario: Navigating to the trainers page
    Given I have just logged in
    When I click on the "TRAINERS" tab with id of "#mat-tab-label-0-4"
    Then the URL is "/trainers"


  Scenario: Going back
    Given I am on the "/trainers" tab
    When I click the back button
    Then I should not see "/trainers" in the URL