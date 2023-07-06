// Cypress - Spec 


describe('Test Suite', function(){
    it('Test case', function(){
        //test step
        //cy.visit() method to access a URL
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        // cy.wait(2000) // waits for 2 seconds
        // cy.get('.products:visible').should('have.length', 1); // checks whether one visible values are present
        cy.get('.products').find('.product').should('have.length', 4);
        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        

    })
})

//describe and it are structures based upon Mocha's testing standards.