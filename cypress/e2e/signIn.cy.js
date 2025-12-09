// cypress/e2e/signin.cy.js

import SignInPage from '../pages/SignInPage';

describe('Sign-In Tests', () => {
  const signInPage = new SignInPage();

  // POSITIVE TEST
  it('Should login with valid credentials', () => {
    const email = Cypress.env('email');
    const password = Cypress.env('password');
    
    signInPage.login(email, password);
    signInPage.verifyDashboard();
  });

  // NEGATIVE TEST 1: Invalid Password
  it('Should not login with invalid password', () => {
    const email = Cypress.env('email');
    
    signInPage.visit();
    signInPage.enterEmail(email);
    signInPage.clickSubmitButton();
    cy.get('input[type="password"]').should('be.visible');
    signInPage.enterPassword('wrongpassword123');
    signInPage.clickSubmitButton();
    
    // Check for "Invalid Credentials" error message
    cy.contains('Invalid Credentials').should('be.visible');
    
    // Should not reach dashboard
    cy.url().should('not.include', '/dashboard');
  });

  // NEGATIVE TEST 2: Empty Email
  it('Should not proceed with empty email', () => {
    signInPage.visit();
    
    // Check that submit button is disabled when email is empty
    cy.get('button[type="submit"]').should('be.disabled');
  });

  // NEGATIVE TEST 3: Empty Password
  it('Should not login with empty password', () => {
    const email = Cypress.env('email');
    
    signInPage.visit();
    signInPage.enterEmail(email);
    signInPage.clickSubmitButton();
    cy.get('input[type="password"]').should('be.visible');
    
    // Click submit without entering password
    signInPage.clickSubmitButton();
    
    // Check for "Required" error message
    cy.contains('Required').should('be.visible');
    
    // Should not reach dashboard
    cy.url().should('not.include', '/dashboard');
  });
});