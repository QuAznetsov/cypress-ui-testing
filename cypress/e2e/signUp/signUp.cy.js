

const userName = "User" + Math.floor(Math.random() * 1000);
describe ("Sign Up",()=>{
    beforeEach( () => {
        cy.clearAllCookies()
        cy.visit("/signup")
      });
  it ("User should be able to Sign Up" ,()=>{
    cy.get("#firstName").type("John")
    cy.get("#lastName").type("Wick")
    cy.get("#username").type(userName)
    cy.get("#password").type("0000")
    cy.get("#confirmPassword").type("0000")
    const signUpButton = cy.get("[data-test='signup-submit']")
    signUpButton.should("not.be.disabled")
    signUpButton.click()
    cy.url().should("contain","/signin")
    cy.contains("button","Sign In").should("be.visible")

    cy.get("#username").type(userName)
    cy.get("#password").type("0000")
    const signInButton = cy.get('[data-test="signin-submit"]')
    signInButton.should("not.be.disabled")
    signInButton.click()

    cy.url().should("eq",`${Cypress.config("baseUrl")}/`)
  })  
    })