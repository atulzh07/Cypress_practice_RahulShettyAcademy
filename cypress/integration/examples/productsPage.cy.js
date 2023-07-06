/// <reference types="Cypress" />
import Products from "./pageObjects/productsPage";

describe('Testing the products page', () => {
    it('Test Case 1', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
        const products = new Products();
        products.addButton().click();
        products.checkoutButton().click();
        cy.contains('Checkout').click();
        cy.get('#country').click().type('India');
        cy.wait(8000);
        cy.contains('India').click();
        cy.get('#checkbox2').click({force: true}).should('be.checked');
        cy.get('.ng-pristine > .btn').click();
        cy.get('.alert').then(function(banner){
            const alertText =  banner.text();
            expect(alertText.includes('Success')).to.be.true;
        })
    });

    it.only('Sum of Products', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
        const products = new Products();
        let iteration = 2;
        for (let i = 0; i<= iteration -1; i++){
            products.addButton().click();
        }
        products.checkoutButton().click();
        const arrayOfPrice = [];
        let sum =0;
        const a = cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const element = $el.text();
            const elementSplit = element.split(" ");
            const price = parseInt(elementSplit[1]);
            arrayOfPrice.push(price);
            sum = sum + price;
        }).then(function(){
            // cy.log(sum);
        })
        //using a function to resolve a promise 
        cy.get('h3 strong').then(function(element){
            const finalAmount = element.text();
            const split = finalAmount.split(" ");
            const amount = split[1];
            expect(Number(amount)).to.eql(sum); 
        })



    })
})