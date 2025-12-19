import {test, expect} from '@playwright/test';

  
test("should increment the counter when Increment button is clicked", async ({page}) => {
    await page.goto('http://localhost:5173');   
    const countText = page.locator('text=Count:');
    const incrementButton = page.locator('button:has-text("Increment")');   
    // Assert initial count is 0
    await expect(countText).toHaveText('Count: 0'); 
    // Click increment button
    await incrementButton.click();
    // Assert count is incremented to 1
    await expect(countText).toHaveText('Count: 1'); 
});

test("should decrement the counter when Decrement button is clicked", async ({page}) => {  
    await page.goto('http://localhost:5173');   
    const countText = page.locator('text=Count:');
    const decrementButton = page.locator('button:has-text("Decrement")');
    // Assert initial count is 0
    await expect(countText).toHaveText('Count: 0');
    // Click decrement button
    await decrementButton.click();
    // Assert count is decremented to -1
    await expect(countText).toHaveText('Count: -1'); 
});