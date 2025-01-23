# Vanilla JS Playwright
Evinced in use with JavaScript Playwright sample.


## Contents
1. [Setup SDK](#setup-evinced-sdk)
2. [Run Tests](#run-tests)


## Setup Evinced SDK
Note: put `js-playwright-sdk-2.14.0.tgz` somewhere on your local disk for this example.

```
npm install && npm install -D ~/Downloads/js-playwright-sdk-2.14.0.tgz

```


## Run Tests
`npm run test`

`repeat 5 { npx playwright test --headed ./tests/path/to/some.spec.js }` in case you need to run repeated tests. Requires zsh shell.

`npm run test --ui` will launch the Interactive UI mode by appending the --ui flag.

This script will launch the exec command for the `tests/evinced` directory.


## Basic Playwright Setup & Commands
Note: Post Install message after setting up Playwright

```Inside that directory, you can run several commands:

  npm exec playwright test
    Runs the end-to-end tests.

  npm exec playwright test --ui
    Starts the interactive UI mode.

  npm exec playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npm exec playwright test example
    Runs the tests in a specific file.

  npm exec playwright test --debug
    Runs the tests in debug mode.

  npm exec playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npm exec playwright test

And check out the following files:
  - ./tests/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
```
