import SignInPage from '../src/signinpage'

export default class Base {

    doLogin() {
        const signInPage = new SignInPage()
        
        signInPage.visit()
        signInPage.fillEmail(Cypress.env('email'))
        signInPage.fillPassword(Cypress.env('password'))
        signInPage.submit()
    }
}