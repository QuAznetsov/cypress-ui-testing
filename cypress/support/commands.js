Cypress.Commands.add('login', (userName, password) => {
  cy.visit("/signin")
  cy.get("#username").type(userName)
  cy.get("#password").type(password)
  const signInButton = cy.get('[data-test="signin-submit"]')
  signInButton.should("not.be.disabled")
  signInButton.click()
})
Cypress.Commands.add("logout", () => {
  cy.get('[data-test="sidenav-signout"]').click()
  cy.clearAllCookies();
});