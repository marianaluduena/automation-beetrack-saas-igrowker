import { test, expect } from '@playwright/test';
import Register from '../pages/Register';

let register: Register;

// Register

test('Register page should have an email input', async ({ page }) => {

register = new Register(page);

  await page.goto("http://localhost:5173/register");
  expect(page.url()).toBe("http://localhost:5173/register");

 // Fill the email field

await register.fillRegister();

await page.waitForTimeout(5000);
 
});
