class SignInPage {
  //Element selectors
  visit() {
    cy.visit('/applynow');
  }

  enterEmail(email) {
    cy.get('input[name="email"]')
      .clear()
      .type(email)
      .should('have.value', email);  
  }

  clickSubmitButton() {
    cy.get('button[type="submit"]').click({ force: true });
  }

  enterPassword(password) {
    cy.get('input[type="password"]')
      .clear()
      .type(password)
      .should('have.value', password); 
  }

  // Complete login flow action
  login(email, password) {
    this.visit();
    this.enterEmail(email);
    this.clickSubmitButton();
    cy.get('input[type="password"]').should('be.visible', { timeout: 10000 });
    this.enterPassword(password);
    this.clickSubmitButton();
  }

  verifyDashboard() {
    cy.url().should('include', '/dashboard', { timeout: 15000 });
  }
}

export default SignInPage;