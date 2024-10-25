import { EvincedSDK,setCredentials } from "@evinced/js-playwright-sdk"
import { test } from "@playwright/test";

test("google evinced test", async ({ page }) => {
    await setCredentials({
        serviceId: process.env.CUSTOMER_SERVICE_ID,
        secret: process.env.CUSTOMER_SECRET,
    });
    const evincedService = new EvincedSDK(page);
    
    await evincedService.evStart();
    await page.goto('https://google.com',{waitUntil:"load"})
    // occurs on "@evinced/js-playwright-sdk": "2.18.1", all the wayt to latest version
    await page.getByAltText("Google").click();        // Issue occur here  
    
    const issues = await evincedService.evStop()
    const evReport = "./evReport.html"
    await evincedService.evSaveFile(issues, 'html', evReport)
    
})