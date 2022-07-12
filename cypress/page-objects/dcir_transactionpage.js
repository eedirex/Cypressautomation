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



}