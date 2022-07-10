/// <reference types = "cypress" />

import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"
import { SuperAgentUserPage } from "../../page-objects/dcir_superagentuserpage"

describe('Super Agent User Configureation', ()=> {
    const loginPage = new LoginPage()
    const mainPage = new MainPage()
    const superAgentUserPage = new SuperAgentUserPage ()

    beforeEach(function (){
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
     })

    /*it('Should add new super agent user', function() {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.addNewUser()
        superAgentUserPage.selectRole()
        superAgentUserPage.selectSuperAdminRole()
        superAgentUserPage.selectSuperAgent()
        superAgentUserPage.selectFastCashAgent()
        superAgentUserPage.addFirstName('Cypress')
        superAgentUserPage.addLastName('Agent')
        superAgentUserPage.addEmail('cypress@agent1.test')
        superAgentUserPage.submit()
        cy
            .get('.success-message-text')
            .should("contain.text", 'Super agent user created successfully')
    })*/

    it('should filter super agent user by firstname', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addFirstName('Opay')
        superAgentUserPage.activiateFilter()
        cy
            .get('.table-body-text > :nth-child(1) > .dcir-column > p')
            .should("contain.text", 'Opay')
    })

    it('should filter super agent user by Lastname', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addLastName('Tester')
        superAgentUserPage.activiateFilter()
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column')
            .should("contain.text", 'Tester')
    })

    it('should filter super agent user by username', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addUserName('eedirex@live.com')
        superAgentUserPage.activiateFilter()
        cy
            .get(':nth-child(2) > :nth-child(3) > .dcir-column > p')
            .should("contain.text", 'Fast Cash')
    })

    it('should filter super agent user by email', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addEmail('eedirex@live.com')
        superAgentUserPage.activiateFilter()
        cy
            .get(':nth-child(2) > :nth-child(3) > .dcir-column > p')
            .should("contain.text", 'Fast Cash')
    })

    it('should filter super agent user by active status', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.selectStatus()
        superAgentUserPage.selectActiveStatus()
        superAgentUserPage.activiateFilter()
        cy
            .get(':nth-child(2) > :nth-child(4) > .dcir-column > p > .custom-badge')
            .should("contain.text", 'Active')
    })

    it('should filter super agent user by inactive status', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.selectStatus()
        superAgentUserPage.selectInactiveStatus()
        superAgentUserPage.activiateFilter()
        cy
            .get(':nth-child(2) > :nth-child(4) > .dcir-column > p > .custom-badge')
            .should("contain.text", 'Inactive')
    })

    it('should filter super agent user by first name and Last name', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addFirstName('Opay')
        superAgentUserPage.addLastName('Tester')
        superAgentUserPage.activiateFilter()
        cy
            .get('.table-body-text > :nth-child(1) > .dcir-column > p')
            .should("contain.text", 'Opay')
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column')
            .should("contain.text", 'Tester')
    })

    it('should filter super agent user by first name and username', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addFirstName('Idris')
        superAgentUserPage.addUserName('eedirex@live.com')
        superAgentUserPage.activiateFilter()
        cy
            .get('.table-body-text > :nth-child(1) > .dcir-column > p')
            .should("contain.text", 'Idris')
        cy
            .get(':nth-child(2) > :nth-child(3) > .dcir-column > p')
            .should("contain.text", 'Fast Cash')
    })

    it('should filter super agent user by first name and email', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addFirstName('Idris')
        superAgentUserPage.addEmail('eedirex@live.com')
        superAgentUserPage.activiateFilter()
        cy
            .get('.table-body-text > :nth-child(1) > .dcir-column > p')
            .should("contain.text", 'Idris')
        cy
            .get(':nth-child(2) > :nth-child(3) > .dcir-column > p')
            .should("contain.text", 'Fast Cash')
    })

    it('should filter super agent user by first name and status', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addFirstName('Opay')
        superAgentUserPage.selectStatus()
        superAgentUserPage.selectActiveStatus()
        superAgentUserPage.activiateFilter()
        cy
            .get('.table-body-text > :nth-child(1) > .dcir-column > p')
            .should("contain.text", 'Opay')
        cy
            .get(':nth-child(2) > :nth-child(4) > .dcir-column > p > .custom-badge')
            .should("contain.text", 'Active')
    }) 

    it('should filter super agent user by last name and username', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addLastName('Aliyu')
        superAgentUserPage.addUserName('eedirex@live.com')
        superAgentUserPage.activiateFilter()
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column')
            .should("contain.text", 'Aliyu')
        cy
            .get(':nth-child(2) > :nth-child(3) > .dcir-column > p')
            .should("contain.text", 'Fast Cash')
    })

    it('should filter super agent user by Last name and email', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addLastName('Aliyu')
        superAgentUserPage.addEmail('eedirex@live.com')
        superAgentUserPage.activiateFilter()
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column')
            .should("contain.text", 'Aliyu')
        cy
            .get(':nth-child(2) > :nth-child(3) > .dcir-column > p')
            .should("contain.text", 'Fast Cash')
    })

    it('should filter super agent user by last name and status', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addLastName('Aliyu')
        superAgentUserPage.selectStatus()
        superAgentUserPage.selectActiveStatus()
        superAgentUserPage.activiateFilter()
        cy
            .get(':nth-child(2) > :nth-child(2) > .dcir-column')
            .should("contain.text", 'Aliyu')
        cy
            .get(':nth-child(2) > :nth-child(4) > .dcir-column > p > .custom-badge')
            .should("contain.text", 'Active')
    })

    it('should filter super agent user by username and email', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addUserName('eedirex@live.com')
        superAgentUserPage.addEmail('eedirex@live.com')
        superAgentUserPage.activiateFilter()
        
        cy
            .get(':nth-child(2) > :nth-child(3) > .dcir-column > p')
            .should("contain.text", 'Fast Cash')
    })

    it('should filter super agent user by username and staus', ()=> {
        mainPage.navigateToSuperAgentUsers()
        superAgentUserPage.selectFilter()
        superAgentUserPage.addUserName('eedirex@live.com')
        superAgentUserPage.selectStatus()
        superAgentUserPage.selectActiveStatus()
        superAgentUserPage.activiateFilter()
        
        cy
            .get(':nth-child(2) > :nth-child(3) > .dcir-column > p')
            .should("contain.text", 'Fast Cash')
        cy
            .get(':nth-child(2) > :nth-child(4) > .dcir-column > p > .custom-badge')
            .should("contain.text", 'Active')
    })

    

    
})