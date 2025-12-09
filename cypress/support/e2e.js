//reset state before each test
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});


Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});