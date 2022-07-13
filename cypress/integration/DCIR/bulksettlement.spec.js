/// <reference types = "cypress" />

import { BulkSettlmentPage } from "../../page-objects/dcir_bulksettlement"
import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"

describe('Bulk Settlement filter Configurations', ()=> {

    const mainPage = new MainPage()
    const loginPage = new LoginPage()
    const bulkSettlmentPage = new BulkSettlmentPage()

    beforeEach( ()=> {
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        mainPage.navigateToBulkSettlements()
    })

    it('Should filter by Super Agent', ()=> {
        bulkSettlmentPage.selectFilter()
        bulkSettlmentPage.selectSuperAgent()
        bulkSettlmentPage.selectFastCash()
        bulkSettlmentPage.selectStartDate(Cypress.env('startDate'))
        bulkSettlmentPage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(1) > .dcir-column > p')
            .should('contain.text', "Fast Cash")
    })

    it('Should filter by Settlement Status', ()=> {
        bulkSettlmentPage.selectFilter()
        bulkSettlmentPage.selectSettlementStatus()
        bulkSettlmentPage.selectCompletedStatus()
        bulkSettlmentPage.selectStartDate(Cypress.env('startDate'))
        bulkSettlmentPage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(5) > .dcir-column > p > .custom-badge')
            .should('contain.text', 'Completed')
    })

    it('Should filter by Report Generated Status', ()=> {
        bulkSettlmentPage.selectFilter()
        bulkSettlmentPage.selectReportGenerationStatus()
        bulkSettlmentPage.selectCompletedStatus()
        bulkSettlmentPage.selectStartDate(Cypress.env('startDate'))
        bulkSettlmentPage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(5) > .dcir-column > p > .custom-badge')
            .should('contain.text', 'Completed')
    })

    it('Should filter by Bulk Settlement Keys', ()=> {
        bulkSettlmentPage.selectFilter()
        bulkSettlmentPage.addBulkSettlementKey(Cypress.env('bulkSettlementKey'))
        bulkSettlmentPage.selectStartDate(Cypress.env('startDate'))
        bulkSettlmentPage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(3) > .dcir-column > p')
            .should('contain.text', '₦300.00')
    })

    it('Should filter by Super Agent and Settlement Staus', ()=> {
        bulkSettlmentPage.selectFilter()
        bulkSettlmentPage.selectSuperAgent()
        bulkSettlmentPage.selectFastCash()
        bulkSettlmentPage.selectSettlementStatus()
        bulkSettlmentPage.selectCompletedStatus()
        bulkSettlmentPage.selectStartDate(Cypress.env('startDate'))
        bulkSettlmentPage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(1) > .dcir-column > p')
            .should('contain.text', "Fast Cash")
        cy
            .get(':nth-child(2) > :nth-child(5) > .dcir-column > p > .custom-badge')
            .should('contain.text', 'Completed')
    })
})

describe('Bulk settlement status', ()=> {

    const mainPage = new MainPage()
    const loginPage = new LoginPage()
    const bulkSettlmentPage = new BulkSettlmentPage()

    beforeEach( ()=> {
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        mainPage.navigateToBulkSettlements()
    })

    it('Should verify settlement status is completed', ()=> {

        cy
            .get(':nth-child(2) > :nth-child(7) > .dcir-column > .mobile-table-icon > svg')
            .click()
        cy
            .get(':nth-child(8) > :nth-child(2) > .details-value > .custom-badge')
            .should('contain.text', 'Completed')

    })

    it('Should verify bulksettlement report is completed', ()=> {

        cy
            .get(':nth-child(2) > :nth-child(7) > .dcir-column > .mobile-table-icon > svg')
            .click()
        cy
            .get(':nth-child(10) > :nth-child(2) > .details-value > .custom-badge')
            .should('contain.text', 'Completed')
    })

    it('Should verify bulksettlement report can be downloaded', ()=> {

        cy
            .get(':nth-child(2) > :nth-child(7) > .dcir-column > .mobile-table-icon > svg')
            .click()
        cy
            .get('.download-button')
            .should('be.visible', true)
    })

    it('Should verify successful payment request', ()=> {

        cy
            .get(':nth-child(2) > :nth-child(7) > .dcir-column > .mobile-table-icon > svg')
            .click()
        cy
            .get('#pr_id_9_header_2')
            .click()
        cy
            .get(':nth-child(2) > :nth-child(4) > .dcir-column > p > .custom-badge')
            .should('contain.text', 'Successful')
    })

})