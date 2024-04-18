import Browser from "../support/pageObject/back_frwd"
const browser = new Browser

describe('back and forward button', () => {
    before(function () {
        //login Url
        cy.visit('https://www.freshworks.com/')
        cy.wait(5000)


        // Exception handling
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('back-frwd test', () => {
        browser.browserNavigaion()

    })


})

