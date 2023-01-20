/// <reference types = "cypress" />

import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"

describe ('Participant User Configurations', ()=> {

    const loginPage = new LoginPage ()
    const mainPage = new MainPage()

    beforeEach( function (){
        
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()

     })

    
} )