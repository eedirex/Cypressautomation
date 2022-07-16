export class TrasnsactionAction {
    
    addTransaction (){
        cy.task('queryDb', Cypress.env('insertionQuery'))
    }
}