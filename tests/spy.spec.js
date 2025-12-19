import {test, expect} from '@playwright/test';

test("should call the spy function when button is clicked", async ({page}) => {
    await page.goto('http://localhost:5173');   
    //create a spy in teh browser context
    await page.evaluate(() => { 
    window.__spy = ()=>{
        console.log("Spy function called");
        if(!window._spyCalls){
            window._spyCalls = 0
        }
        window._spyCalls++
    }
    });
    await page.click('button')
    //assert the spy function is called
    const spyCalls = await page.evaluate(() => window._spyCalls);
    expect(spyCalls).toBe(1);
});
