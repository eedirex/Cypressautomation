export class LoginPage {

    navigate () {
        cy.visit(Cypress.env('url'))
    }

    enterUsername (username) {
        cy.get('.login-form-container > :nth-child(1) > :nth-child(1) > input').type(username)
    }

    enterPassword (password){
        cy.get('label > input').type(password)
    }

    submit () {
        cy
            .contains('Submit')
            .click()
    }

    
}