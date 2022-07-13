/// <reference types = "cypress" />

import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"
import { ParticipantPage } from "../../page-objects/dcir_participantpage"

describe ('Participants Configurations', ()=> {

    const participantPage = new ParticipantPage ()
    const loginPage = new LoginPage ()
    const mainPage = new MainPage()

    beforeEach( function (){
        
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        mainPage.navigateToParticipants()

     })

    /*it('Should add new fee sharing Participant', () => {
        participantPage.addNewParticipant()
        participantPage.selectChargeTye()
        participantPage.addNewParticipantName(Cypress.env("fsParticipantName"))
        participantPage.addNewParticipantDescription(Cypress.env("participantDescription"))
        participantPage.selectFeeSharingYes()
        participantPage.doNotRecieveEmails()
        participantPage.selectNubanAccountType()
        participantPage.addAccountNumber(Cypress.env("accountNumber"))
        participantPage.submit()
        cy
            .get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .success-message-text')
            .should('contain.text', 'Participant created successfully')

     })

    it('Should add non-fee sharing Participant', () => {

        participantPage.addNewParticipant()
        participantPage.selectChargeTye()
        participantPage.addNewParticipantName(Cypress.env("nfsParticipantName"))
        participantPage.addNewParticipantDescription(Cypress.env("participantDescription"))
        participantPage.selectFeeSharingNo()
        participantPage.selectNonFeeNubanAccountType()
        participantPage.addDebitAccountNumber(Cypress.env("debitaccountNumber"))
        participantPage.validateDebitAccountName()
        cy
            .get(':nth-child(8) > .p-mt-1 > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
        cy
            .get('[aria-label="No"]')
            .click()
        cy.get(':nth-child(9) > .p-mt-1 > :nth-child(1) > .p-dropdown > .p-dropdown-label').click()
        cy.get('[aria-label="NUBAN"]').click()
        participantPage.addAccountNumber(Cypress.env("accountNumber"))
        participantPage.validateDebitAccountName()
        participantPage.submit()
        cy
            .get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .success-message-text')
            .should('contain.text', 'Participant created successfully')

    })

    it ('Should delete a fee sharing Participant', () => {
        participantPage.navigateToLastParticipantEntry()
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Cypress Participant')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-trash"]')
                        .click({force:true})             
                }         
            })
        cy
            .get('#deletion')
            .type('cypress participant' + '{enter}')
        cy
            .contains('Delete')
            .click()
        cy
            .get('.p-toast-message-text')
            .should('be.visible', true)  
            .should('contain.text', "Participant deleted successfully")           
    })

    it ('Should delete a non fee sharing Participant', () => {
        participantPage.navigateToLastParticipantEntry()
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Cypress Non fee Participant')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-trash"]')
                        .click({force:true})             
                }         
            })
        cy
            .get('#deletion')
            .type('cypress non fee participant' + '{enter}')
        cy
            .contains('Delete')
            .click()
        cy
            .get('.p-toast-message-text')
            .should('be.visible', true)  
            .should('contain.text', "Participant deleted successfully")           
    })

    it('Should view a Participant Detail', () => {
         cy
            .get(':nth-child(2) > :nth-child(6) > .dcir-column > .dcir-tb-action-position > .p-ml-4.table-action-icon > .pi')
            .click()
        cy
            .get(':nth-child(2) > .p-col-7')
            .should('contain.text', 'Banks Charge')       
     })*/

    it('Should verify participant tied to a super agent cannot be deleted', ()=> {
        
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Banks charge')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-trash"]')
                        .click({force:true})             
                }         
            })
        cy
            .get('#deletion')
            .type('banks charge' + '{enter}')
        cy
            .contains('Delete')
            .click()
        cy
            .get('span[class="p-toast-summary"]')
            .should('contain.text', "Error deleting participant!")
        cy
            .get('div[class="p-toast-detail"]')
            .should('contain.text', "Settlement participant is configured for a merchant")
        
    })
    
})