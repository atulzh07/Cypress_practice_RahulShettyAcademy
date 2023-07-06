describe('Second Test', () => {
    it('Find buttons', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.get('.products').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text();
        if(textVeg.includes('Cashews')){
            $el.find('button').click();
        }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.get(':nth-child(14)').contains('Place Order').click(); 
    } )
})