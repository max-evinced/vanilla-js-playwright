# Vanilla JS Playwright
Evinced in use with JavaScript Playwright sample.

## Setup Evinced SDK
Note: put `js-playwright-sdk-2.14.0.tgz` somewhere on your local disk for this example.

```
npm install && npm install -D ~/Downloads/js-playwright-sdk-2.14.0.tgz

```


## Basic Playwright Setup & Commands
Note: Post Install message after setting up Playwright

```Inside that directory, you can run several commands:

  pnpm exec playwright test
    Runs the end-to-end tests.

  pnpm exec playwright test --ui
    Starts the interactive UI mode.

  pnpm exec playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  pnpm exec playwright test example
    Runs the tests in a specific file.

  pnpm exec playwright test --debug
    Runs the tests in debug mode.

  pnpm exec playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    pnpm exec playwright test

And check out the following files:
  - ./tests/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
```
