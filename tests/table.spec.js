import { expect, test } from "@playwright/test";

test.describe("HTML table checks", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://ultimateqa.com/simple-html-elements-for-automation/");
    });

    test("second header is 'Work'", async ({ page }) => {
        const table = page.locator("#htmlTableId");
        const headers = await table.locator("th").allTextContents();
        expect(headers[1]).toBe("Work");
    });

    test("'Title' header exists", async ({ page }) => {
        const table = page.locator("#htmlTableId");
        const headers = await table.locator("th").allTextContents();
        const titleHeader = headers.find(header => header === "Title");
        expect(titleHeader).toBeDefined();
    });


    test("Work column value for Quality Assurance Engineer is Manual", async ({ page }) => {
        const table = page.locator("#htmlTableId");
        const qaRow = table.locator("tr", { hasText: "Quality Assurance Engineer" });
        await expect(qaRow).toHaveCount(1);
        const cells = await qaRow.locator("td").allTextContents();
        expect(cells[1]).toBe("Manual");
    });

});