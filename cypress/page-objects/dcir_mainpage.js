export class MainPage {

    navigateToChargeType (){
        cy
            .get(':nth-child(3) > .singleNavContainer > .p-grid > .p-col-10').click()
    }

    navigateToTransactions (){
        cy
            .contains('Manage Transactions')
            .click()
        cy
            .get('[href="/back-office/transactions"] > .custom-tab-content > :nth-child(1) > .custom-font-family')
            .click()
    }

    navigateToSuperAgent (){
        cy
            .get(':nth-child(6) > .singleNavContainer > .p-grid > .p-col-10')
            .click()
    }

    navigateToSuperAgentUsers (){
        cy
            .get(':nth-child(8) > .singleNavContainer > .p-grid > .p-col-10 > .singleNavContainer-text')
            .click()
    }

    navigateToParticipants (){
        cy
            .get(':nth-child(4) > .singleNavContainer > .p-grid > .p-col-10 > .singleNavContainer-text')
            .click()
    }

    navigateToParticiapantUsers (){
        cy
            .get(':nth-child(5) > .singleNavContainer > .p-grid > .p-col-10 > .singleNavContainer-text')
            .click()
    }

    navigateToParticipantReports (){
        cy.get(':nth-child(4) > .singleNavContainer > .p-grid > .p-col-10').click
    }

    navigateToBulkSettlements (){
        cy
            .get(':nth-child(10) > .singleNavContainer > .p-grid > .p-col-10 > .singleNavContainer-text')
            .click()
    }

    navigateToBackofficeDisputes (){
        cy
            .get('#pr_id_3_header_0 > .p-accordion-header-text > .d-fle > .custom-tab-text > p')
            .click()
        cy
            .get('[href="/back-office/disputes/backoffice"] > .custom-tab-content')
            .click()
    }

    navigateToChangeLog () {
        cy
            .get('.p-pt-0 > .nav-profile-title')
            .invoke('removeAttr', 'target')
            .click()
    }


}