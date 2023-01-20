/// <reference types = "cypress" />

import { LoginPage } from "../../page-objects/dcir_loginpage"
import { MainPage } from "../../page-objects/dcir_mainpage"

describe("Charge Type Configurations", function(){

    const mainPage = new MainPage ()
    const loginPage = new LoginPage ()

    beforeEach(function (){
        loginPage.navigate()
        loginPage.enterUsername('ugochukwu.ebirika@teamapt.com')
        loginPage.enterPassword('password')
        loginPage.submit()
        mainPage.naviageteToWorkFlowRequest()   
     })

    it('Should approve charge type request', ()=>{
        
    })
})
