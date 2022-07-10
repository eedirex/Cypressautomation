export class SuperAgentUserPage {

    addNewUser () {
        cy
            .contains('New user')
            .click()
    } 
    selectRole () {
        cy
            .get(':nth-child(1) > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }
    selectSuperAdminRole () {
        cy
            .get('[aria-label="DCIR_MERCHANT_SUPER_ADMIN"]')
            .click()
    }
    selectSuperAgent () {
        cy
            .get(':nth-child(2) > :nth-child(1) > .p-dropdown > .p-dropdown-label')
            .click()
    }
    selectFastCashAgent () {
        cy
            .get('[aria-label="Fast Cash"]')
            .click()
    }
    addFirstName (firstName) {
        cy
            .get('#firstname')
            .type(firstName + '{enter}')
    }
    addLastName (lastName) {
        cy
            .get('#lastname')
            .type(lastName + '{enter}')
    }
    addEmail (email) {
        cy
            .get('#email')
            .type(email + '{enter}')
    }
    addUserName (username) {
        cy
            .get('#username')
            .type(username + '{enter}')
    }
    submit () {
        cy
            .contains('Submit')
            .click()
    }
    selectFilter () {
        cy
            .get('.filter-button')
            .click()
    }
    activiateFilter () {
        cy
            .get(':nth-child(2) > .primary-button')
            .click()
    }
    selectStatus () {
        cy
            .get('.p-dropdown-label')
            .click()
    }
    selectActiveStatus () {
        cy
            .get('[aria-label="Active"]')
            .click()
    }
    selectInactiveStatus () {
        cy
            .get('[aria-label="Inactive"]')
            .click()
    }

}