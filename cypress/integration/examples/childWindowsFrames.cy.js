/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('section8', () => {
    it('child windows', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //grab the attribute value
        cy.get('#opentab').then(function(el){
            const url = el.prop('href');
            cy.origin(url, () => {
                //operation in the second domain will be executed by cypress
                //cypress will execute everything for the new origin
                cy.get("")
            })
            
        })
    })

    it('frames', () => {
        
    })
})