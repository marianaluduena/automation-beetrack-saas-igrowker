import { test, expect } from '@playwright/test';
import Register from '../pages/Register';

let register: Register;

// Register

test('Register page should have an email input', async ({ page }) => {

  register = new Register(page);

  // Go to sign in page

  await register.goToSignInPage();

  // Fill the email field

  await register.fillRegister();

  await page.waitForTimeout(5000);

});
