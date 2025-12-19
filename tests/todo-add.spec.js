import {test, expect} from '@playwright/test';

test.describe('Todo App Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
    })

    test('should disaplay a title', async ({ page }) => {
        const title = await page.locator('h1');
        await expect(title).toHaveText('Todo App');
    });

    test('should allow users to add a todo item', async ({ page }) => {
        //add a todo item
        await page.fill('input[placeholder="Enter a Todo item.."]', 'Buy clothes');
        await page.click('button:has-text("Add")');

        //assert the todo item is added
        const todoItem = await page.locator('li:has-text("Buy clothes")');
        await expect(todoItem).toBeVisible();


    });







});