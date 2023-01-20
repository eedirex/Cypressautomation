/// <reference types = "cypress" />

import { ChargeTypePage } from "../../page-objects/dcir_chargetypepage"
import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"

describe("Charge Type Configurations", function(){

    const mainPage = new MainPage ()
    const loginPage = new LoginPage ()
    const chargetypePage = new ChargeTypePage ()

    beforeEach(function (){
        loginPage.navigate()
        loginPage.enterUsername(Cypress.env('validUsername'))
        loginPage.enterPassword(Cypress.env('validPassword'))
        loginPage.submit()
        
     })

    /*it('Should add Flat Charge type', function (){
        mainPage.navigateToChargeType()
        chargetypePage.addNewChargeType()
        chargetypePage.selectFlatChargeType()
        chargetypePage.addNewChargeName('Cypress Flat Charge')
        chargetypePage.addNewChargeDesc('Automated Flat Charge')
        chargetypePage.addFlatAmount('100')
        chargetypePage.submit()
        cy
            .get('.p-pb-2 > :nth-child(1) > :nth-child(2) > .success-message-text')    
            .should('contain.text', "New request for create Charge Type has been received and awaits approval")    
        chargetypePage.closeSuccessModal()
    })
    

    it ('Should add Percentage Charge Type', function (){
        mainPage.navigateToChargeType()
        chargetypePage.addNewChargeType()
        chargetypePage.selectPercentageChargeType()
        chargetypePage.addNewChargeName('Cypress Percent Charge')
        chargetypePage.addNewChargeDesc('Automated Percent Charge')
        chargetypePage.addPercentage('10')
        chargetypePage.submit()
        cy
            .get('.p-pb-2 > :nth-child(1) > :nth-child(2) > .success-message-text')    
            .should('contain.text', "New request for create Charge Type has been received and awaits approval")  
        chargetypePage.closeSuccessModal()
    })

    it ('Should add Percantage Max Cap Charge Type', function (){
        mainPage.navigateToChargeType()
        chargetypePage.addNewChargeType()
        chargetypePage.selectPercentageMaxChargeType()
        chargetypePage.addNewChargeName('Cypress Percent Max Charge')
        chargetypePage.addNewChargeDesc('Automated Percent Max Charge')
        chargetypePage.addMaxAmount('100')
        chargetypePage.addPercentage('10')
        chargetypePage.submit()
        cy
            .get('.p-pb-2 > :nth-child(1) > :nth-child(2) > .success-message-text')    
            .should('contain.text', "New request for create Charge Type has been received and awaits approval") 
        chargetypePage.closeSuccessModal()
    })

    it ('Should add Percantage Min Cap Charge Type', function (){
        mainPage.navigateToChargeType()
        chargetypePage.addNewChargeType()
        chargetypePage.selectPercentageMinChargeType()
        chargetypePage.addNewChargeName('Cypress Percent Min Charge')
        chargetypePage.addNewChargeDesc('Automated Percent Min Charge')
        chargetypePage.addMinAmount('20')
        chargetypePage.addPercentage('10')
        chargetypePage.submit()
        cy
            .get('.p-pb-2 > :nth-child(1) > :nth-child(2) > .success-message-text')    
            .should('contain.text', "New request for create Charge Type has been received and awaits approval") 
        chargetypePage.closeSuccessModal()
    })

    it ('Should add Percantage Max_Min Cap Charge Type', function (){
        mainPage.navigateToChargeType()
        chargetypePage.addNewChargeType()
        chargetypePage.selectPercentageMaxMinChargeType()
        chargetypePage.addNewChargeName('Cypress Percent Max Min Charge')
        chargetypePage.addNewChargeDesc('Automated Percent Max Min Charge')
        chargetypePage.addMinAmount('20')
        chargetypePage.addMaxAmount('100')
        chargetypePage.addPercentage('10')
        chargetypePage.submit()
        cy
            .get('.p-pb-2 > :nth-child(1) > :nth-child(2) > .success-message-text')    
            .should('contain.text', "New request for create Charge Type has been received and awaits approval") 
        chargetypePage.closeSuccessModal()
    })*/

    it ('Should approve flat charge type', () => {


    })

    /*it ('Should delete Flat charge type', ()=> {
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Cypress Flat Charge')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-trash"]')
                        .click()               
                }
            })
        cy
            .get('#deletion')
            .type('cypress flat charge' + '{enter}')
        cy
            .contains('Delete')
            .click()
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', 'Charge type deleted successfully') 
    })

    it ('Should delete Percentage charge type', ()=> {
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Cypress Percent Charge')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-trash"]')
                        .click()               
                }
            })
        cy
            .get('#deletion')
            .type('cypress percent charge' + '{enter}')
        cy
            .contains('Delete')
            .click()
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', 'Charge type deleted successfully')
    })

    it ('Should delete Percent Min Cap Charge Type', ()=> {
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Cypress Percent Min Charge')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-trash"]')
                        .click()               
                }
            })
        cy
            .get('#deletion')
            .type('cypress percent min charge' + '{enter}')
        cy
            .contains('Delete')
            .click() 
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', 'Charge type deleted successfully')
    })

    it ('Should delete Percent Max Cap Charge Type', ()=> {
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Cypress Percent Max Charge')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-trash"]')
                        .click()               
                }
            })
        cy
            .get('#deletion')
            .type('cypress percent max charge' + '{enter}')
        cy
            .contains('Delete')
            .click() 
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', 'Charge type deleted successfully')
    })

    it('Should delete Percent Max_Min Cap Charge Type', ()=> {
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Cypress Percent Max Min Charge')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-trash"]')
                        .click()               
                }
            })
        cy
            .get('#deletion')
            .type('cypress percent max min charge' + '{enter}')
        cy
            .contains('Delete')
            .click() 
        cy
            .get('p[class="success-message-text"]')
            .should('contain.text', 'Charge type deleted successfully')
    })

    it('Should verify charge types tied to a settlement participant cannot be deleted', ()=> {
        cy
            .get('.table-container')
            .find('div[class="dcir-row table-body-text"]')
            .each(($el, index, $list) => {
                const partText = $el.find('div[class="dcir-column"]').text()
                if(partText.includes('Bank Floating flat charge')){
                    cy
                        .wrap($el)
                        .find('i[class="pi pi-trash"]')
                        .click()               
                }
            })
        cy
            .get('#deletion')
            .type('bank floating flat charge' + '{enter}')
        cy
            .contains('Delete')
            .click() 
        cy
            .get('span[class="p-toast-summary"]')
            .should('contain.text', "Error")
        cy
            .get('div[class="p-toast-detail"]')
            .should('contain.text', "This charge type is currently configured to a Settlement Participant and cannot be deleted")      
    })*/

})