import Base from './base'
import HomePage from '../src/homepage'
import CustomerPage from '../src/customerpage'
import Helper from '../src/utils/helpers'
import ContactsPage from '../src/contactspage'

before(() => {
    const base = new Base()
    base.doLogin()
})

describe('For create New customer from Contacts ', () => {

    const helper = new Helper()
    const homePage = new HomePage()
    const customerPage = new CustomerPage()
    const contactsPage = new ContactsPage()

    it('should navigate to Contacts page', () => {
      homePage.navigateToContactsPage()
    }),

    it('should click New Customer on Contacts page', () => {
        contactsPage.clickToCreateNewCustomer()
    }),

    it('should successfully fill First Name ', () => {
      customerPage.fillFirstName(helper.randomName(12))
    }),

    it('should successfully fill Last Name ', () => {
      customerPage.fillLastName(helper.randomName(12))
    }),

    it('should successfully fill Email ', () => {
      customerPage.fillEmail(helper.randomEmail(12))
    }),

    it('should successfully fill Phone ', () => {
      customerPage.fillPhone(helper.randomPhone(7))
    }),

    it('should successfully saved', () => {
      customerPage.allChangesSaved()
    })
  })