# SuperControl QA challenge

This is my attempt at recruitment task for SuperControl.

Story One:

As a user I want the ability to save properties I’m looking at so they can be reviewed at a later time.

Acceptance Criteria:

- Each property on the hub should have an easy Favorite on/off button indicating that this property has been saved.
- The hub should have an indicator on the number of properties selected as saved.
  - This indicator should show the total count of saved properties.
  - When the indicator is clicked the hub should only display saved properties.
  - I can un-save a property from the filtered view.
  
------------


Story Two:

As a user I want the ability to filter properties based on the number of bedrooms and bathrooms.

Acceptance Criteria:

- The Filters selection should allow the user to select the number of either bedrooms and/or bathrooms.
  - The selection should limit the value to an integer with a lower value of 0 (zero).
- The Clear Filters button should reset both filters to their lower value.
- The View Results button should close the Filter Results page and display properties on the hub meeting the criteria.

Before you start
------------
- make sure you have cypress installed (v 10.11.0)
- make sure your node version is 12 or 14 and higher (my version v14.16.1)

How to run the test
------------
- clone repository to your desktop
- go to the challenge folder
- run cypress from your command line
  - `npx cypress open`
  - run test via Cypress launcher
- or if you wish to run the tests outside of Cypress launcher use `npx cypress run`
