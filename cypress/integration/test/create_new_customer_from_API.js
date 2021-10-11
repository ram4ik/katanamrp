import Helper from '../src/utils/helpers'

describe('For create New customer with API ', () => {

    const helper = new Helper()

    const first_name = helper.randomName(12)
    const last_name = helper.randomName(12)
    const name = first_name + " " + last_name
    const company = helper.randomName(12)
    const email = helper.randomEmail(12)
    const comment = ""
    const phone = helper.randomPhone(7)

    it('use POST request', () => {

      cy.request({
        method: 'POST',
        //form: true,
        url: 'https://api.katanamrp.com/v1/customers',
        headers: {
          'Content-Type': 'application/json',  
          'Accept'    : 'application/json',  
          'Authorization' : Cypress.env('api_key'),     
        },
        body: {       
            "first_name" : first_name,
            "last_name" : last_name,
            "name" : name,
            "company" : company,
            "email" : email,
            "comment" : comment,
            "phone" : phone
        }
      }).then(response => {
        expect(response.status).equal(200)
        expect(response.body.first_name).equal(first_name)
        expect(response.body.last_name).equal(last_name)
        expect(response.body.name).equal(name)
        expect(response.body.company).equal(company)
        expect(response.body.email).equal(email)
        expect(response.body.comment).equal(comment)
        expect(response.body.phone).equal(phone)
      })
    })    
  })