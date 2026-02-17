# Evinced Accessibility Expert — Agent Memory

## Project: vanilla-js-playwright

### Key File Locations
- Main Evinced test: `tests/evinced/evinced-global.spec.js`
- Fixture definition: `fixtures/evincedFixture.js`
- Config: `playwright.config.js`
- Ticket-specific tests: `tests/tickets/`
- Feature tests: `tests/feature/`
- Global setup: `global-evinced-setup.js`

### Confirmed SDK Patterns

**Direct SDK Pattern (CommonJS, used in evinced-global.spec.js and new tests)**
```javascript
const { EvincedSDK } = require('@evinced/js-playwright-sdk');
const { test } = require('@playwright/test');
// Inside test:
const evincedService = new EvincedSDK(page);
const issues = await evincedService.evAnalyze();
evincedService.evSaveFile(issues, 'html', 'test-results/report.html');
```

**Fixture Pattern (ESM, used in simple-fixture.spec.js)**
```javascript
import { test, expect } from '../../fixtures/evincedFixture.js';
// Inside test: use evincedContMode fixture — evStart/evStop handled automatically
```

**Ticket tests use either pattern** — some use `import`, some use `require`. Mix is acceptable.

### Project Conventions
- All reports saved to `test-results/` directory
- Filenames are descriptive kebab-case: `allstate-landing-page.html`
- `page.waitForLoadState('networkidle')` preferred for navigation waits
- `page.waitForTimeout(2000)` used after user interactions before scanning
- `console.log` used to report issue counts after each scan
- `console.warn` used when selectors cannot be found (non-fatal, test continues)

### Selector Strategy for Unknown Pages
When targeting elements on unfamiliar pages, iterate through an ordered list of selector fallbacks and use the first visible match. See `tests/allstate.spec.js` for the pattern.

### Browser Support
Chromium only — Firefox/WebKit disabled due to NSBINDING issue (playwright.config.js line 46).

### evAnalyze vs evStart/evStop
- `evAnalyze()`: point-in-time snapshot — use when scanning discrete page states
- `evStart()`/`evStop()`: continuous — use when monitoring across interactions in a single flow
- Multiple `evAnalyze()` calls per test is valid when each call targets a meaningfully different page state

### Reports
- 4 formats: `'json'`, `'html'`, `'sarif'`, `'csv'`
- `evSaveFile` is synchronous (no await needed) in the Direct SDK pattern
