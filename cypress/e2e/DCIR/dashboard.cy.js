/// <reference types = "cypress" />

import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"

describe('Dashboard functionalities', ()=> {

    const mainPage = new MainPage()
    const loginPage = new LoginPage()

    beforeEach(()=> { 
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
    })

    it('Should verify application version', ()=> {

        var versionNumber = cy.get('a[class="nav-profile-title version underline p-mt-0"]').
        mainPage.navigateToChangeLog()


    })
})