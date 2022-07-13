/// <reference types = "cypress" />

import { BackOfficeDisputePage } from "../../page-objects/dcir_backofficedisputepage"
import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"


describe('Back-office dispute Configurations', ()=> {

    const mainPage = new MainPage()
    const loginPage = new LoginPage()
    const backOfficeDisputePage = new BackOfficeDisputePage ()

    beforeEach(()=> { 
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        mainPage.navigateToBackofficeDisputes()
    })

    it('Should filter disputes', ()=>{
        backOfficeDisputePage.selectFilter()
        backOfficeDisputePage.selectSuperAgent()
        backOfficeDisputePage.selectMoniepoint()
        backOfficeDisputePage.selectTransactionDate()
        backOfficeDisputePage.addTransactionStartDate(Cypress.env("startDate"))
        backOfficeDisputePage.submitFilter()
    })

    it('Should filter by resolution status - accepted', ()=> {
        backOfficeDisputePage.selectFilter()
        backOfficeDisputePage.selectResolutionStatus()
        backOfficeDisputePage.selectAcceptedResolution()
        backOfficeDisputePage.addCreatedDateFrom(Cypress.env("createdDateFrom"))
        backOfficeDisputePage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(8) > .dcir-column > p > .custom-badge')
            .should('contain.text', 'Accepted')
    })

    it('Should filter by dispute status - resolved', ()=> {
        backOfficeDisputePage.selectFilter()
        backOfficeDisputePage.selectDisputeStatus()
        backOfficeDisputePage.selectResolvedDispute()
        backOfficeDisputePage.addCreatedDateFrom(Cypress.env("createdDateFrom"))
        backOfficeDisputePage.submitFilter()
        cy
            .get(':nth-child(2) > :nth-child(7) > .dcir-column > p > .custom-badge')
            .should('contain.text', 'Resolved')
    })

    it('Should filter by log code', ()=> {
        backOfficeDisputePage.selectFilter()
        backOfficeDisputePage.addLogCode(Cypress.env("logCode" ))
        backOfficeDisputePage.addCreatedDateFrom(Cypress.env("createdDateFrom"))
        backOfficeDisputePage.submitFilter()
        cy
            .get('.table-body-text > :nth-child(1) > .dcir-column > p')
            .should('contain.text', "MCK|20220623|3113")
    })


})