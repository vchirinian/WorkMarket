
Dependencies
----------------------------
In order to execute cypress tests you must have the following installed on your machine:
1) Node.js
2) Npm


Note
----------------------------
1) In the project directory, all test files are located in the integration folder ending with _spec.js

Steps to execute tests
----------------------------
----------------------------

Part One : Running Cypress on your local
----------------------------
1) Install the above dependencies
2) Clone the repository from Github
3) In your terminal navigate to the root directory of the project
4) Execute the following command in the terminal : npm run cypress:open


Part Two : Executing A Test
----------------------------
1) You will notice the cypress application is running, click on the app
2) There will be several folders, click on the Integration folder
3) In the Integration folder you will see several tests, clicking on any of those tests will start execution
    --A chrome browser will open with a panel to the left displaying each step the test is executing
    --You will also see the xhr requests running behind the scenes
4) At the end of the test run you can hover over each step to see a screen shot of that step.