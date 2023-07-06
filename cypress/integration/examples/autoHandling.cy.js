/// <reference types="Cypress" />

describe('Alerts', () => {
    it('alerts', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click();

        //Verify the text in the alert popup
        //triggering alert
        cy.on('window:alert', (str) => {
            //Mocha Assertion
            expect(str).to.eql('Hello , share this practice page and share your knowledge'); 
        })
    });

    it.only('Web Table', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/"); 
        
        //select 2nd column : select row: tr:nth-child(3)
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const rowText = $e1.text();
            if(rowText.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(aaloo){
                    const priceText = aaloo.text();
                    expect(priceText).to.equal('25');  
                })
            }
        }
    )
    })
})