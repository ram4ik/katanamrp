export default class ContactsPage {

    clickToCreateNewCustomer() {

        const newCustomer = cy.get('.row > div > .MuiButtonBase-root > .MuiButton-label')
        newCustomer.should('be.visible')
        newCustomer.should('exist')
        newCustomer.click()
    }
}