import { test } from '@playwright/test';
import  env  from '../env/env.config.js';

test("@smoke @sanity Demo", async ({ page }) =>{

    await page.goto(env.BASE_URL);

    await page.getByPlaceholder("username").fill(env.USERNAME);

    await page.getByPlaceholder("Password").fill(env.PASSWORD);

    await page.getByRole('button', {name : 'Login'}).click();

    await page.waitForTimeout(5000);

});