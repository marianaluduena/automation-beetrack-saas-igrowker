import { test, expect } from '@playwright/test';
import Login from '../pages/login';

let login: Login;

test('login page should have title "Beetrack"', async ({ page }) => {

login = new Login(page);

  await page.goto("http://localhost:5173/login");
  
  // Fill the email and password
  
  await login.fillLoginForm();
 
});

