describe('Test suite for click academy', function(){
    it('checkbox', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    })

    it('static dropdown', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('select').select('option2').should('have.value', 'option2');
    })

    it('dynamic dropdown', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('Ne')
        cy.get('.ui-menu-item').each(($e1,index, $list) => {
            if($e1.text() === 'Nepal'){
                $e1.click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'Nepal')
    })

    it.only('visible and invisible elements', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
    })
})