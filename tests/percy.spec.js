import {test} from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('should capture visual snapshot of homepage for Todo App', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await percySnapshot(page, 'Todo App Homepage');
});