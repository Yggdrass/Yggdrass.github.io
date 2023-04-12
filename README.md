# Workflow CA - Social Media Client

# Project Description:

This is the Course Assignment for Workflow in FED2-22.
Im assigned in this CA to fork this social media client-project from "https://github.com/noroffFEU/social-media-client".
Then I will need to set up several workflows for testing Javascript-files when sending in a pull-request.
I need to add ESLint, Cypress, Prettier. Also need to configure ESLint to unit-test .test.js files and Cypress to end-to-end test (...).js files.

Unit-tests:

1. Login function fetches and stores a token in the browser storage.
2. The logout function clears the token from the browser storage.

End-to-end tests:

1. The user can login and access their profile.
2. The user cannot submit the login form with invalid credentials and is shown a message.
3. The user can log out with the logout button.

# Additional info

I have included a settings.json in the folder .vscode, which will show the setting for how prettier should be set up when you use the project. It is set with the hook of format on save.

# Testing Badges:

[![Automated Unit Testing](https://github.com/Yggdrass/social-media-client-workflowCA/actions/workflows/unit-test.yml/badge.svg?branch=master)](https://github.com/Yggdrass/social-media-client-workflowCA/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/Yggdrass/social-media-client-workflowCA/actions/workflows/e2e-test.yml/badge.svg?branch=master)](https://github.com/Yggdrass/social-media-client-workflowCA/actions/workflows/e2e-test.yml)

# New title Goes Here
