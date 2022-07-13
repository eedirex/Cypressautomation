export class BackOfficeDisputePage {

    selectFilter () {
        cy
            .get('i[class="pi pi-filter"]')
            .click()
    }

    selectSuperAgent () {
        cy
            .get(':nth-child(1) > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }

    selectResolutionStatus () {
        cy
            .get(':nth-child(2) > :nth-child(1) > .p-dropdown > .p-dropdown-trigger')
            .click()
    }

    selectPendingResolution () {
        cy
            .get('[aria-label="PENDING"]')
            .click()
    }

    selectAcceptedResolution () {
        cy
            .get('[aria-label="ACCEPTED"]')
            .click()
    }

    selectDeclinedResolution () {
        cy
            .get('[aria-label="DECLINED"]')
            .click()
    }

    selectDisputeStatus () {
        cy
            .get(':nth-child(3) > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }

    selectPendingDispute () {
        cy
            .get('[aria-label="PENDING"]')
            .click()
    }

    selectSystemAcceptedDispute () {
        cy
            .get('[aria-label="SYSTEM_ACCEPTED"]')
            .click()
    }

    selectResolvedDispute () {
        cy
            .get('[aria-label="RESOLVED"]')
            .click()
    }

    selectMoniepoint () {
        cy
            .get('[aria-label="Moniepoint"]')
            .click()
    }

    addLogCode (logCode) {
        cy
            .get('#logCode')
            .type(logCode + '{enter}')
    }

    addTerminalID (terminalId) {
        cy
            .get('#terminalId')
            .type(terminalId + '{enter}')
    }

    addRRN (rrn) {
        cy
            .get('#rrn')
            .type(rrn + '{enter}')
    }

    addMaskedPan (maskedPan) {
        cy
            .get('#maskedPan')
            .type(maskedPan + '{enter}')
    }

    addResponseCode (responseCode) {
        cy
            .get('#responseCode')
            .type(responseCode + '{enter}')
    }

    selectLogDisputeDate () {
        cy
            .get('#dispute-log-date')
            .check()
    }

    selectTransactionDate () {
        cy
            .get('#transaction-date')
            .check()
    }

    addCreatedDateFrom (createdDateFrom) {
        cy
            .get('#createdDateFrom')
            .type(createdDateFrom)
    }

    addCreatedDateTo (createdDateTo) {
        cy
            .get('#createdDateTo')
            .type(createdDateTo)
    }

    addTransactionStartDate (transactionStartDate) {
        cy
            .get('#transactionDateStart')
            .type(transactionStartDate )
    }

    submitFilter () {
        cy
            .get(':nth-child(3) > .primary-button')
            .click()
    }


}