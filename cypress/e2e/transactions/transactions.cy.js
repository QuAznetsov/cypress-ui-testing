const userName2 = "Allie2"
const userName1 = "Jessyca.Kuhic"
const passwd = "s3cret"
describe("Transactions",()=>{
    beforeEach("Log in with existing User",() => {
        cy.logout()
        cy.login(userName1, passwd)
      });
    it ("User should be aible to send money",()=>{
        cy.get("[data-test='nav-top-new-transaction']").click()
        cy.get("#user-list-search-input").click().type(userName2)
        const userCard = cy.contains("[data-test='users-list'] li",userName2)
        userCard.should("be.visible")
        userCard.click()
        const amount = 100
        const comment = "Hi"
        cy.get("#amount").type(amount)
        cy.get("#transaction-create-description-input").type(comment)
        const payButton = cy.get("[data-test='transaction-create-submit-payment']")
        payButton.should("not.be.disabled")
        payButton.click()
        cy.contains(`Paid $${amount}.00 for ${comment}`).should("be.visible")
        cy.logout()
        cy.login(userName2, passwd)
    })
})