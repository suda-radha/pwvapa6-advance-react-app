import {test, expect} from '@playwright/test';

test("should toggle the theme between light and dark mode", async ({page}) => {
    await page.goto('http://localhost:5173');   
    const themeText = page.locator('text=Current Theme:');
    const toggleButton = page.locator('button:has-text("Toggle Theme")');   
    // Assert initial theme is light
    await expect(themeText).toHaveText('Current Theme: light');
    // Toggle to dark theme
    await toggleButton.click();
    await expect(themeText).toHaveText('Current Theme: dark');
    // Toggle back to light theme
    await toggleButton.click();
    await expect(themeText).toHaveText('Current Theme: light');
});