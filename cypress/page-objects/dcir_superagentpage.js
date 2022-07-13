
export class SuperAgentPage {

    addNewSuperAgent () {
        cy
            .contains('New Agent')
            .click()
    }
    addMerchantName (agentName) {
        cy
            .get('#merchantName')
            .type(agentName + '{enter}')
    }
    addMerchantMainEmail (mainEmail) {
        cy
            .get('#mainEmail')
            .type(mainEmail + '{enter}')
    }
    addMerchantSupportEmail (supportEmail) {
        cy
            .get('#supportEmail')
            .type(supportEmail + '{enter}')
    }
    addMerchantDisputeEmail (disputeEmail) {
        cy
            .get('#disputeEmail')
            .type(disputeEmail + '{enter}')
    }
    addMerchantSettlementEmail (settlementEmail) {
        cy
            .get('#settlementEmail')
            .type(settlementEmail + '{enter}')
    }
    addMerchantAdminEmail (adminEmail) {
        cy
            .get('#adminEmail')
            .type(adminEmail + '{enter}')
    }
    addCardAcceptorId (cardAcceptorId) {
        cy
            .get('#cardAcceptorId')
            .type(cardAcceptorId + '{enter}')
    }
    addPhoneNumber (phoneNumber) {
        cy
            .get('#phoneNumber')
            .type(phoneNumber + '{enter}' )
    }
    addAlternatePhoneNumber (alternatePhoneNumber) {
        cy
            .get('#alternatePhoneNumber')
            .type(alternatePhoneNumber + '{enter}', {force: true})
    }
    addAdminFisrtName (adminFirstName) {
        cy
            .get('#adminFirstname')
            .type(adminFirstName + '{enter}', {force: true})
    }
    addAdminLastName (adminLastName) {
        cy
            .get('#adminLastname')
            .type(adminLastName + '{enter}', {force: true})
    }
    navigateToNextPage () {
        cy
            .contains('Next')
            .click()
    }
    selectSettlementType () {
        cy
            .get('.p-mt-1 > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }
    selectHourlySettlementType () {
        cy
            .get('[aria-label="HOURLY"]')
            .click()
    }
    selectDailySettlementType () {
        cy
            .get('[aria-label="DAILY"]')
            .click()
    }
    addAccountNumber (accountNumber) {
        cy
            .get('#accountNumber')
            .type(accountNumber + '{enter}')
    }
    validateAccountName () {
        cy
            .get('#accountName')
            .should('have.value', 'Dcir Tester')
    }
    selectMerchantCharge () {
        cy
            .get('.p-mt-2 > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }
    selectMoinepointChargeType () {
        cy
            .get('[aria-label="Moniepoint Charge Type"]')
            .click()
    }
    selectParticipants () {
        cy
            .get('.p-multiselect-label')
            .click()
    }
    selectDcirParticipant () {
        cy
            .contains("Teamapts floating charge")
            .click()
    }
    selectBankParticipant () {
        cy
            .contains("Banks floating charge")
            .click()
    }
    submit () {
        cy
            .contains('Submit')
            .click()
    }








}