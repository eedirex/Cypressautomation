/// <reference types = "cypress" />

import { BackOfficeDisputePage } from "../../page-objects/dcir_backofficedisputepage"
import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"
import { TrasnsactionAction } from "../../dcir-action/transactionaction"
import { TransactionPage } from "../../page-objects/dcir_transactionpage"


describe('Back-office dispute Filter Configurations', ()=> {

    const mainPage = new MainPage()
    const loginPage = new LoginPage()
    const backOfficeDisputePage = new BackOfficeDisputePage ()

    beforeEach(()=> { 
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        mainPage.navigateToBackofficeDisputes()
        backOfficeDisputePage.selectFilter()
    })

    it('Should filter disputes', ()=>{
        backOfficeDisputePage.selectSuperAgent()
        backOfficeDisputePage.selectMoniepoint()
        backOfficeDisputePage.selectTransactionDate()
        backOfficeDisputePage.addTransactionStartDate(Cypress.env("startDate"))
        backOfficeDisputePage.submitFilter()
    })

    it('Should filter by resolution status - accepted', ()=> {
        backOfficeDisputePage.selectResolutionStatus()
        backOfficeDisputePage.selectAcceptedResolution()
        backOfficeDisputePage.addCreatedDateFrom(Cypress.env("createdDateFrom"))
        backOfficeDisputePage.submitFilter()
        cy
            .get(':nth-child(8) > .dcir-column > p > .custom-badge')
            .should('contain.text', 'Accepted')
    })

    it('Should filter by dispute status - resolved', ()=> {
        backOfficeDisputePage.selectDisputeStatus()
        backOfficeDisputePage.selectResolvedDispute()
        backOfficeDisputePage.addCreatedDateFrom(Cypress.env("createdDateFrom"))
        backOfficeDisputePage.submitFilter()
        cy
            .get(':nth-child(7) > .dcir-column > p > .custom-badge')
            .should('contain.text', 'Resolved')
    })

    it('Should filter by log code', ()=> {
        backOfficeDisputePage.addLogCode(Cypress.env("logCode" ))
        backOfficeDisputePage.addCreatedDateFrom(Cypress.env("createdDateFrom"))
        backOfficeDisputePage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(1) > .dcir-column > p')
            .should('contain.text', Cypress.env("logCode" ))
    })

    it('Should filter dispute by terminal Id', ()=> {
        backOfficeDisputePage.addTerminalID(Cypress.env("disputeTerminalId"))
        backOfficeDisputePage.addCreatedDateFrom(Cypress.env("createdDateFrom"))
        backOfficeDisputePage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(2) > .dcir-column > p')
            .should('contain.text', 'Dcir Tester')
    })
})

describe('Back-Office dispute Creation', ()=>{

    const mainPage = new MainPage()
    const loginPage = new LoginPage()
    const transactionPage = new TransactionPage()
    
    it('Should add a transaction', ()=> {
        cy.task('queryDb', Cypress.env('insertionQuery'))
    })

    it('Should log a back office dispute', ()=> {
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit() 
        mainPage.navigateToTransactions()
        transactionPage.viewTransactionDetails()
        transactionPage.logDsipute()
        transactionPage.validateAccountName()
        transactionPage.selectDisputeReason()
        transactionPage.selectDebitNoValue()
        transactionPage.submit()
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', "Dispute created successfully")
        cy
            .get('.success-message-btn-container > .close-modal')
            .click() 
        cy
            .get('.info-card-text > .bare-button')
            .invoke('text')
            .then((logCode)=>{

                mainPage.navigateToBackofficeDisputes()
                cy
                    .get(':nth-child(2) > :nth-child(1) > .dcir-column > p')
                    .should('contain.text', logCode)
                console.log(logCode)
            })    
    })
})