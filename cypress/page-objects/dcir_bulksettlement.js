export class BulkSettlmentPage {
    
    selectFilter () {
        cy
            .get('.primary-button')
            .click()
    }
    selectSuperAgent () {
        cy
            .get(':nth-child(1) > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }
    selectFastCash () {
        cy
            .get('[aria-label="Fast Cash"]')
            .click()
    }
    selectSettlementStatus () {
        cy
            .get(':nth-child(2) > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }
    selectCompletedStatus () {
        cy
            .get('[aria-label="COMPLETED"]')
            .click()
    }
    selectReportGenerationStatus () {
        cy
            .get(':nth-child(3) > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }
    addBulkSettlementKey (bulkSettlementKey) {
        cy
            .get('#bulkSettlementKey')
            .type(bulkSettlementKey + '{enter}')
    }
    selectStartDate (startDate) {
        cy
            .get('#startDate')
            .type(startDate)
    }
    selectEndDate (endDate) {
        cy
            .get('#endDate')
            .type(endDate)
    }
    submitFilter () {
       cy
            .get(':nth-child(2) > .primary-button')
            .click()
    }
}