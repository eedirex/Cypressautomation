/// <reference types = "cypress" />

describe('Example to Demonstrate SQL Database Testing in Cypress', () => {

    it('Verify that there is only one row where the city is Espoo', function () {
        cy.task('queryDb', `SELECT COUNT(*) as "rowCount" FROM dcir_db.backoffice_transaction_records`).then((result) => {
            console.log(result)
            expect(result[0].rowCount).to.equal(2536)
        })
    })

})