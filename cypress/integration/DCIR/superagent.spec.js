/// <reference types = "cypress" />

import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"
import { SuperAgentPage } from "../../page-objects/dcir_superagentpage"

describe ('Super Agent Configurations', ()=> {

    const loginPage = new LoginPage ()
    const mainPage = new MainPage()
    const superAgentPage = new SuperAgentPage ()

    beforeEach( function (){ 
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        mainPage.navigateToSuperAgent()
     })

    it('should add a new super agent', ()=> {
        superAgentPage.addNewSuperAgent()
        superAgentPage.addMerchantName('Cypress Agent')
        superAgentPage.addMerchantMainEmail(Cypress.env("cypressEmail"))
        superAgentPage.addMerchantSupportEmail(Cypress.env("cypressEmail"))
        superAgentPage.addMerchantSettlementEmail(Cypress.env("cypressEmail"))
        superAgentPage.addMerchantDisputeEmail(Cypress.env("cypressEmail"))
        superAgentPage.addMerchantAdminEmail(Cypress.env("cypressEmail"))
        superAgentPage.addCardAcceptorId(Cypress.env("cardAcceptorId"))
        superAgentPage.addPhoneNumber(Cypress.env("phoneNumber"))
        superAgentPage.addAlternatePhoneNumber(Cypress.env("alternatePhoneNumber"))
        superAgentPage.addAdminFisrtName('Cypress')
        superAgentPage.addAdminLastName('Automation')
        superAgentPage.navigateToNextPage()
        superAgentPage.selectSettlementType()
        superAgentPage.selectHourlySettlementType()
        superAgentPage.addAccountNumber(Cypress.env("accountNumber"))
        superAgentPage.validateAccountName()
        superAgentPage.selectMerchantCharge()
        superAgentPage.selectMoinepointChargeType()
        superAgentPage.selectParticipants()
        superAgentPage.selectDcirParticipant()
        superAgentPage.selectBankParticipant()   
        superAgentPage.submit() 
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', "Super agent created successfully")
    })

    it('should be able to view super agent details', ()=> {    
        cy
            .get(':nth-child(2) > :nth-child(7) > .dcir-column > .dcir-tb-action-position > .p-ml-4.table-action-icon > .pi')
            .click()
        cy
            .get(':nth-child(1) > .p-col-7 > .details-value')
            .should('contain.text', 'Opay')
    })

    it('should deactivate a super agent', ()=> {
        cy
            .get(':nth-child(2) > :nth-child(7) > .dcir-column > .dcir-tb-action-position > :nth-child(3) > .p-ml-4 > .pi')
            .click()
        cy
            .get('#deletion')
            .type('opay' + '{enter}')
        cy
            .contains('Deactivate')
            .click()
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', "Super Agent deactivated successfully")     
    })

    it('should activate a super agent', ()=> {
        cy
            .get(':nth-child(2) > :nth-child(7) > .dcir-column > .dcir-tb-action-position > :nth-child(3) > .p-ml-4 > .pi')
            .click()
        cy
            .get('#deletion')
            .type('opay' + '{enter}')
        cy
            .contains('Activate')
            .click()
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', "Super Agent activated successfully")       
    })

    it('should edit a super agent', ()=> {
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Regression')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-pencil"]')
                        .click()         
                }
             })
        cy
            .get('#merchantName') 
            .clear({force:true})
            .type('Regression Tests1', {force:true})  
        cy
            .contains('Next')
            .click()
        cy
            .get('button[class="primary-button"]')
            .click()  
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', "Super agent updated successfully")
    })
} )