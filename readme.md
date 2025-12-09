# WiseAdmit Sign-In Automation

This is a simple automation test suite for WiseAdmit ApplyNow sign-in page using Cypress and Page Object Model.

## Setup
Step 1: npm install

Step 2: Create `cypress.env.json` file with your credentials:

{
  "email": "your-email@example.com",
  "password": "your-password"
}


## Run Tests


npm run test        # Run all tests
npm run test:open   # Open Cypress GUI



## Test Cases

**Positive Tests**
- Sign in with valid credentials
- Verify successful navigation

**Negative Tests**  
- Invalid email/password
- Empty fields
- Invalid email format

EXcel Sheet: https://docs.google.com/spreadsheets/d/17KaX27eUM6CbFJV7iZiGV8xoX1cCA-F1J6ZDxMZ7kys/edit?usp=sharing

## Things That Could Break Sign-In

1. Selector Input IDs (:r0:,:r1:) change after react updates.
2. Captcha or 2FA is implemented in the authentication process.
3. Backend authentication URL is modifications
4. If there is a change in login process from multiple step changes to single page change process.
5. If too many requests blocking automation is added, it can directly affect the sign in process.

## Improvements for Website

1. Home page swiper section (Voice that reflect value)(i.e. div.swiper.swiper) is fast moving, making it unable to read it. Hover to stop feature can be added for better user experience.
2. Login page should have Oauth(Google) integration for smoother login/signup.
3. Contact us page lacks footer, making it harder to navigate.
4. Login can use improved error message handling which is more focused toward the exact error rather than being vague.
5. When loading from one state to another, loading indicators can help with users with bad network reception.

Note: Credentials are stored in `cypress.env.json` which is gitignored
