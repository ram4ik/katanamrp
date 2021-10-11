export default class CustomerPage {

    fillFirstName(value) {
        const field = cy.get('[data-testid=inputCustomerFirstName] > .MuiInputBase-root > .MuiInputBase-input')
        field.should('be.visible')
        field.should('exist')
        field.click()
        field.type(value)

        return this
    }

    fillLastName(value) {
        const field = cy.get('[data-testid=inputCustomerLastName] > .MuiInputBase-root > .MuiInputBase-input')
        field.should('be.visible')
        field.should('exist')
        field.click()
        field.type(value)

        return this
    }

    fillCompanyName(value) {
        const field = cy.get('[data-testid=inputCustomerCompany] > .MuiInputBase-root > .MuiInputBase-input')
        field.should('be.visible')
        field.should('exist')
        field.click()
        field.type(value)

        return this
    }

    fillDisplayName(value) {
        const field = cy.get('[data-testid=inputCustomerDisplayName] > .MuiInputBase-root > .MuiInputBase-input')
        field.should('be.visible')
        field.should('exist')
        field.click()
        field.type(value)

        return this
    }

    fillEmail(value) {
        const field = cy.get('[data-testid=inputCustomerEmail] > .MuiInputBase-root > .MuiInputBase-input')
        field.should('be.visible')
        field.should('exist')
        field.click()
        field.type(value)

        return this
    }

    fillPhone(value) {
        const field = cy.get('[data-testid=inputCustomerPhone] > .MuiInputBase-root > .MuiInputBase-input')
        field.should('be.visible')
        field.should('exist')
        field.click()
        field.type(value)

        return this
    }

    fillComment(value) {
        const field = cy.get('[data-testid=inputCustomerComment] > .MuiInputBase-root > .MuiInputBase-input')
        field.should('be.visible')
        field.should('exist')
        field.click()
        field.type(value)

        return this
    }

    allChangesSaved() {
        const field = cy.contains('All changes saved')
        field.should('be.visible')
        field.should('exist')

        
    }
}