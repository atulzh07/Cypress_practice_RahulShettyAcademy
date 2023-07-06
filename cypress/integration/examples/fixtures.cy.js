/// <reference types="Cypress" />
import Homepage from "./pageObjects/HomePage";

describe("Describe block", () => {
    before(function(){
        cy.fixture('example').then(function(data){
            globalThis.data = data;
        })
    })

    it('Angular Practice', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.log(globalThis.data);
        cy.get(':nth-child(1) > .form-control').type(globalThis.data.name);
        cy.get('#exampleFormControlSelect1').select(globalThis.data.gender);
        // cy.get(':nth-child(4) > .ng-pristine').should('have.value', 'Alex');
        // cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2');

        
    })
})