export default class SignInPage {

    visit() {
        cy.visit('/login')
    }

    fillEmail(value) {
        const field = cy.get('#\\31 -email')
        field.should('be.visible')
        field.should('exist')
        field.clear()
        field.type(value)

        return this
    }

    fillPassword(value) {
        const field = cy.get('.auth0-lock-input-show-password > .auth0-lock-input-block > .auth0-lock-input-wrap > .auth0-lock-input')
        field.should('be.visible')
        field.should('exist')
        field.clear()
        field.type(value)

        return this
    }

    submit() {
        const button = cy.get('.auth0-lock-submit')
        button.should('be.visible')
        button.should('exist')
        button.click()
    }
}