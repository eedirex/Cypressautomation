export class ParticipantPage {

    addNewParticipant (){
        cy
            .contains('New participant')
            .click()
    }

    navigateToParticipant (){
        cy
            .get(':nth-child(4) > .singleNavContainer > .p-grid > .p-col-10 > .singleNavContainer-text')
            .click()
    }

    selectChargeTye (){
        cy
            .get(':nth-child(1) > .p-mt-1 > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
        cy
            .get('[aria-label="Moniepoint Charge Type"]')
            .click()
    }

    addNewParticipantName (participantName) {
        cy
            .get('#name')
            .type(participantName + '{enter}')
    }

    addNewParticipantDescription (participantDescription) {
        cy
            .get('#description')
            .type(participantDescription + '{enter}')
    }

    selectFeeSharingYes (){
        cy
            .get('#fee-sharing--true')
            .check()
    }

    selectFeeSharingNo (){
        cy
            .get('#free-sharing--false')
            .check()
    }

    addDebitAccountNumber (debitAccoutNumber){
        cy
            .get('#feeDebitAccount')
            .type(debitAccoutNumber + '{enter}')
    }

    selectNonFeeNubanAccountType () {
        cy
            .get(':nth-child(5) > .p-mt-1 > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
        cy
            .get('[aria-label="NUBAN"]')
            .click()
    }
    recieveEmails () {
        cy
            .get(':nth-child(5) > .p-mt-1 > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
        cy
            .get('[aria-label="Yes"]')
            .click()
    }

    doNotRecieveEmails () {
        cy
            .get(':nth-child(5) > .p-mt-1 > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
        cy
            .get('[aria-label="No"]')
            .click()
    }

    selectGlAccountType () {
        cy
            .get(':nth-child(6) > .p-mt-1 > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
        cy
            .get('[aria-label="GL"]')
            .click()
    }

    selectNubanAccountType () {
        cy
            .get(':nth-child(6) > .p-mt-1 > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
        cy
            .get('[aria-label="NUBAN"]')
            .click()
    }

    addAccountNumber (accountNumber) {
        cy
            .get('#accountNumber')
            .type(accountNumber + '{enter}')
    }

    navigateToLastParticipantEntry () {
        cy
            .get('.custom-page-card > :nth-child(1) > .p-mt-3 > :nth-child(1) > :nth-child(6) > svg > rect')
            .click({force:true})
    }

    validateDebitAccountName () {
        cy
            .get('#feeDebitAccountName')
            .should('have.value', 'Dcir Tester')
    }

    validateAccountName () {
        cy
            .get('#accountName')
            .should('have.value', 'Dcir Tester')
    }

    submit () {
        cy
            .contains('Submit')
            .click()
    }

    


}