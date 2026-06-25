// fixtures/evincedFixtures.js
import { test as base, expect } from "@playwright/test";
import { EvincedSDK, setUploadToPlatformConfig } from "@evinced/js-playwright-sdk";

// Enable uploading Evinced reports to the Evinced Platform.
// autoUpload is left off, so reports are uploaded explicitly via evStop({ uploadToPlatform: true }).
setUploadToPlatformConfig({ enableUploadToPlatform: true });

// Extend the base test with Evinced fixtures
export const test = base.extend({
    // Fixture that automatically starts and stops Evinced scanning
    evincedContMode: async ({ page }, use, testInfo) => {
        const evincedService = new EvincedSDK(page);

        // Label the upload so it's queryable on platform.evinced.com
        evincedService.testRunInfo.addLabel({
            testName: testInfo.title,
            testFile: testInfo.file,
        });

        // Start continuous scanning
        await evincedService.evStart();

        // Provide the service to the test
        await use(evincedService);

        // Stop scanning and generate report
        const testName = testInfo.title.replace(/\s+/g, "_");
        const evReport = `./test-results/${testName}.html`;

        try {
            const issues = await evincedService.evStop({ uploadToPlatform: true });
            console.log("Evinced issues found:", issues);
            await evincedService.evSaveFile(issues, "html", evReport);
        } catch (error) {
            console.error("Error during evStop() and evSavefile():", error);
            throw error;
        }
    }
});

// Export expect from the extended test
export { expect };