export class ChargeTypePage {

    addNewChargeType (){
         cy.contains('New charge type')
         .click()
    }

    selectFlatChargeType (){
        cy
            .get('.p-dropdown-label')
            .click()
        cy
            .get('[aria-label="FLAT"]')
            .click()
    }

    selectPercentageChargeType (){
        cy
            .get('.p-dropdown-label')
            .click()
        cy
            .get('[aria-label="PERCENT_ALL"]')
            .click()
    }

    selectPercentageMaxChargeType (){
        cy
            .get('.p-dropdown-label')
            .click()
        cy
            .get('[aria-label="PERCENT_MAX_CAP"]')
            .click()
    }

    selectPercentageMinChargeType (){
        cy
            .get('.p-dropdown-label')
            .click()
        cy
            .get('[aria-label="PERCENT_MIN_CAP"]')
            .click()
    }

    selectPercentageMaxMinChargeType (){
        cy
            .get('.p-dropdown-label')
            .click()
        cy
            .get('[aria-label="PERCENT_MAX_MIN_CAP"]')
            .click()
    }

    addNewChargeName (chargeName) {
        cy
            .get('#chargeName')
            .type(chargeName + '{enter}')
    }

    addNewChargeDesc (chargeDesc) {
        cy
            .get('#chargeTypeDesc')
            .type(chargeDesc + '{enter}')
    }

    addFlatAmount (flatAmount) {
        cy
            .get('#flat')
            .type(flatAmount + '{enter}')
    }

    addPercentage (percent) {
        cy
            .get('#percent')
            .type(percent + '{enter}')
    }

    addMaxAmount (maxCap) {
        cy
            .get('#maxCap')
            .type(maxCap + '{enter}')
    }

    addMinAmount (minCap) {
        cy
            .get('#minCap')
            .type(minCap + '{enter}')
    }

    submit () {
        cy
            .get(':nth-child(2) > .primary-button')
            .click()
    }

    closeSuccessModal () {
        cy
            .get('.success-message-btn-container > .close-modal')
            .click()
    }

    deleteChargeType () {

            
    }

        
      
 }
    

