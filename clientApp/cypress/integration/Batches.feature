Feature: The Batches Page

  Scenario: Navigating to the batches page
    Given I have just logged in
    When I click on the "BATCHES" tab with id of "#mat-tab-label-0-1"
    Then the URL is "/batches"

  Scenario: Going back
    Given I am on the "/batches" tab
    When I click the back button
    Then I should not see "/batches" in the URL

  Scenario: Accordian tabs should appear
    Given I am on the batches page
    Then I should see the All Batches tab
    And I should see the Batch Timeline tab
