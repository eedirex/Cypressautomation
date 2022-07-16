export class TransactionPage {

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
    selectDebitNoValue () {
        cy
            .get('[aria-label="Debit No Value"]')
            .click()
    }
    selectMoniepoint() {
        cy
            .get('[aria-label="Moniepoint"]')
            .click()
    }
    selectTransactionStatus () {
        cy
            .get(':nth-child(2) > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }
    submitFilter () {
        cy
            .get(':nth-child(3) > .primary-button')
            .click()
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
    addMaskedPan (maskedPan) {
        cy
            .get('#maskedPan')
            .type(maskedPan)
    }
    addRRN (rrn) {
        cy
            .get('#rrn')
            .type(rrn)
    }
    addTerminalId (termianlId) {
        cy
            .get('#terminalId')
            .type(termianlId)
    }
    viewTransactionDetails () {
        cy
            .get(':nth-child(2) > :nth-child(7) > .dcir-column > .mobile-table-icon > svg > path')
            .click()
    }
    logDsipute () {
        cy
            .contains('Log Dispute')
            .click()
    }
    selectDisputeReason () {
        cy
            .get('.p-dropdown-label')
            .click()
    }
    submit () {
        cy
            .contains('Submit')
            .click()
    }
    validateAccountName () {
        cy
            .get('#customerAccountName')
            .should('have.value', 'Dcir Tester')
    }



}