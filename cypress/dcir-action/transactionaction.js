export class TrasnsactionAction {
    addtransaction (){
        cy.task('queryDb', Cypress.env('insertionQuery')).then((result) => {
        })
    }
}