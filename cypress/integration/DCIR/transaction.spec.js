/// <reference types = "cypress" />

import { TrasnsactionAction } from "../../dcir-action/transactionaction"
import { BulkSettlmentPage } from "../../page-objects/dcir_bulksettlement"
import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"
import { TransactionPage } from "../../page-objects/dcir_transactionpage"

/*describe('Transaction Filter Configuration', ()=> {
    
    const mainPage = new MainPage()
    const loginPage = new LoginPage()
    const transactionPage = new TransactionPage()

    beforeEach(function (){
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        mainPage.navigateToTransactions()
        transactionPage.selectFilter()
        transactionPage.selectSuperAgent()
        transactionPage.selectFastCash()
     })

    it('Should filter by Super Agent', ()=> {    
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
    })

    it('should filter by RRN', ()=> {
        transactionPage.addRRN(Cypress.env('rrn'))
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(3) > .dcir-column > p')
            .should("contain.text", '007356')
    })

    it('should filter by Masked Pan', ()=> {
        transactionPage.addMaskedPan(Cypress.env('maskedPan'))
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column > p')
            .should("contain.text", '524289******3325')
    })

    it('should filter by Terminal Id', ()=> {
        transactionPage.addTerminalId(Cypress.env('terminalId'))
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(5) > .dcir-column')
            .should("contain.text", '703WDQ')
    })

    it('should filter by Transaction Status', ()=> {
        transactionPage.selectTransactionStatus()
        cy
            .get('[aria-label="SUCCESS"]')
            .click()
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(6) > .dcir-column')
            .should('contain.text', '00')
    })

    it('should filter by RRN and Masked Pan', ()=> {
        transactionPage.addRRN(Cypress.env('rrn'))
        transactionPage.addMaskedPan(Cypress.env('maskedPan'))
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(3) > .dcir-column > p')
            .should("contain.text", '007356')
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column > p')
            .should("contain.text", '524289******3325')
    })

    it('should filter by RRN and Terminal Id', ()=> {
        transactionPage.addRRN(Cypress.env('rrn'))
        transactionPage.addTerminalId(Cypress.env('terminalId'))
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(3) > .dcir-column > p')
            .should("contain.text", '007356')
        cy
            .get('.table-body-text > :nth-child(5) > .dcir-column')
            .should("contain.text", '703WDQ')
    })

    it('should filter by RRN and Transaction Status', ()=> {
        transactionPage.addRRN(Cypress.env('rrn'))
        transactionPage.selectTransactionStatus()
        cy
            .get('[aria-label="SUCCESS"]')
            .click()
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(3) > .dcir-column > p')
            .should("contain.text", '007356')
        cy
            .get(':nth-child(2) > :nth-child(6) > .dcir-column')
            .should('contain.text', '00')
    })

    it('should filter by Masked Pan and Terminal Id', ()=> {
        transactionPage.addMaskedPan(Cypress.env('maskedPan'))
        transactionPage.addTerminalId(Cypress.env('terminalId'))
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(5) > .dcir-column')
            .should("contain.text", '703WDQ')
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column > p')
            .should("contain.text", '524289******3325')
    })

    it('should filter by Masked Pan and Transaction Status', ()=> {
        transactionPage.addMaskedPan(Cypress.env('maskedPan'))
        transactionPage.selectTransactionStatus()
        cy
            .get('[aria-label="SUCCESS"]')
            .click()
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column > p')
            .should("contain.text", '524289******3325')
        cy
            .get(':nth-child(2) > :nth-child(6) > .dcir-column')
            .should('contain.text', '00')
    })

    it('should filter by Terminal ID and Transaction Status', ()=> {
        transactionPage.addTerminalId(Cypress.env('terminalId'))
        transactionPage.selectTransactionStatus()
        cy
            .get('[aria-label="SUCCESS"]')
            .click()
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(5) > .dcir-column')
            .should("contain.text", '703WDQ')
        cy
            .get(':nth-child(2) > :nth-child(6) > .dcir-column')
            .should('contain.text', '00')
    })
})*/

describe('Transaction Insertions', ()=> {
    
    const mainPage = new MainPage()
    const loginPage = new LoginPage()
    const transactionPage = new TransactionPage()
    const transactionAction = new TrasnsactionAction()
    const bulkSettlmentPage = new BulkSettlmentPage()
    it('Should add transactions to the DB', ()=> {
        transactionAction.addtransaction()   
    })

    it('Should verify transaction added', ()=> {

        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        mainPage.navigateToTransactions()
        transactionPage.selectFilter()
        transactionPage.selectSuperAgent()
        transactionPage.selectMoniepoint()
        transactionPage.addMaskedPan(Cypress.env('dbMaskedPan'))
        transactionPage.selectStartDate(Cypress.env('startDate'))
        transactionPage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column > p')
            .should("contain.text", Cypress.env('dbMaskedPan'))
        //get bulk settlement key for transaction
    })

    it('Should verfiy bulk settlement entry', ()=> {
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        mainPage.navigateToBulkSettlements()
        bulkSettlmentPage.selectFilter()
        bulkSettlmentPage.addBulkSettlementKey(Cypress.env('bulkSettlementKey'))

    })
})