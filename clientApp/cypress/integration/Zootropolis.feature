Feature: The Zootropolis

    I want to visit the Zoo's website

    Scenario: Visit the zoo's website
        Given I visit the zoo's website
        Then I see "MyZooApp" in the title
    
    Scenario: Buttons should be visible
        Given I visit the zoo's website
        Then there should be a "Schedule" button
        And there should be a "Home" button
        And there should be a "Map" button
        And there should be a "Support" button

    Scenario: Clicking on the Schedule button
        Given I visit the zoo's website
        When I click on the Schedule button
        Then I should be redirected to the schedule component

    Scenario: LOGGING IN :0
        Given I visit the login page
        When I type in "NoopDog" as the username
            And I type in "admin" as the password
            And I click the Log In button
        Then I should be redirected to the administration page

    Scenario: Statistics Tab
        Given I have logged in
        When I click on the "Statistics" Tab
        Then I should see the map component