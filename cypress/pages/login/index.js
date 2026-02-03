import { elements as el } from "./elements"

class Login {

    visitarPagina(){
        cy.visit('/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type(Cypress.env("USER_NAME"))
        cy.get(el.password).type(Cypress.env("USER_PASSWORD"))
        cy.get(el.loginButton).click()
    }

    preencherCredenciaisInvalidas(){
        cy.get(el.username).type(Cypress.env("INVALID_USER"))
        cy.get(el.password).type(Cypress.env("INVALID_PASSWORD"))
        cy.get(el.loginButton).click()

    }

    validarErroCredenciaisInvalidas(){
      cy.get(el.errorMessage)
            .should(
                'contain.text',
                'Username and password do not match any user in this service'
            )
         
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('login mal sucedido')
    }
}

export default new Login()