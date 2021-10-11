export default class HomePage {

    createNewCustomer() {
        
        const menu = cy.get('.MuiFab-label > .MuiSvgIcon-root')
        menu.should('be.visible')
        menu.should('exist')
        menu.click()
        
        const button = cy.get('#add-customer > .MuiListItemText-root > .MuiTypography-root')
        button.should('be.visible')
        button.should('exist')
        button.click()
    }

    navigateToContactsPage() {

        const contacts = cy.get('#contactsTab > .MuiTab-wrapper')
        contacts.should('be.visible')
        contacts.should('exist')
        contacts.click()
    }
    
}