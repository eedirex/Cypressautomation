/// <reference types = "cypress" />

import { LoginPage } from "../../page-objects/dcir_loginpage"

describe("Login functionalities", function (){

   const loginPage = new LoginPage()

   beforeEach( function (){
      loginPage.navigate()
   })

   it('Should verify backoffice user login', function (){
         loginPage.enterUsername(Cypress.env('validUsername'))
         loginPage.enterPassword(Cypress.env('validPassword'))
         loginPage.submit()
         cy
            .get('.nav-profile-title')
            .should('contain.text', "QA Tester") 
   }) 

   it('Should verify user cannot login with invalid password', function (){
         loginPage.enterUsername(Cypress.env('validUsername'))
         loginPage.enterPassword(Cypress.env('invalidPassword'))
         loginPage.submit()
         cy
            .get('p[class="error-toast-text-note"]')
            .should('contain.text', "Invalid username and password combination.")
   })

   it('Should verify user cannot login with a locked user account', ()=> {
      loginPage.enterUsername(Cypress.env('deactivatedUsername'))
      loginPage.enterPassword(Cypress.env('validPassword'))
      loginPage.submit()
      cy
            .get('p[class="error-toast-text-title"]')
            .should('contain.text', "invalid_grant")
      cy
            .get('p[class="error-toast-text-note"]')
            .should('contain.text', "User Account is locked")

   })
})