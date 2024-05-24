# TPO QA Assessment - Mihir Kumar Sasmal

This repo code is built using typescript and cypress


# Setup

Clone or Download the repository.

From the root directory of Repository run the below command in a terminal

`npm install`

# Framework Details

Cypress is used as automation tool to automate UI and API tests

All the tests are located in `cypress/e2e` folder

UI & API tests are under `UI` & `API` directory respectively 

UI tests follows page object model pattern, it helps in test readbility and maintainability. 

All pageobjects are available in `cypress/pageObjects` directory

API tests also follows similar style pattern like UI tests, in this instead of page objects, it has apiRoutes for different type of endpoints

All endpoints are available in `cypress/apiRoutes` directory

Testdata are stored in `cypress/fixtures` folder

`cypress/support` can contain any support utility function required in tests.
Currently it has the default `commands.ts`. In future new custom command can be added here
`e2e.ts` is a great place to put global configuration and behavior that modifies Cypress.

`cypress.config.ts` has the basic configuration for this framework

For local test runs, the videos will be available in `cypress/video` folder

CI/CD in github action created using github workflow which is located in `github/workflows` directory

# Run Tests Locally

To run test locally , run the below command in terminal

`npm run cypress:open`

This will open the Cypress Runner window, select the `E2E Testing` option in it.

On the Browser selection window, select `Chrome` and then Click on ` Start E2E Testing in Chrome`

Now, the window will show the list of specs, Click on any spec to run that test.

To run without using Cypress UI Test Runner, run the below command

`npm run test` or `npm run cypress:run`

To run a single test in this mode, run the below command 

`npm run test -- --spec "path of the test"` 

for example :- to run only ui test , run the below command

`npm run test -- --spec "cypress/e2e/UI/uiTest.cy.ts"` or `npm run cypress:run -- --spec "cypress/e2e/UI/uiTest.cy.ts"`

# Run test in CI

The tests will automatically trigger in Github action on every push of the code into repository.

Navigate to github action of the repository (below link) to find out the latest test run

https://github.com/mihirsasmal/TpoQaAssessment/actions 

Click on latest or any test run to find the details of test run

`test-run summary` tab displays a summary of the test run with its status

click on `View run in Cypress Cloud` to see video, test replay and other stats of the run.