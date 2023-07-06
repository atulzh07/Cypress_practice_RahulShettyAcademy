describe('automate a simple google test', () => {
    it('make a google search', () => {
        cy.visit('https://www.google.com');
        cy.get('.gLFyf').type('Maxillosoft{enter}');
        cy.get('[style="display:inline-block;line-height:18px;margin-top:8px;padding:0;font-size:13px"]').click();
        cy.pause();
        cy.get('.g > :nth-child(1) > [jscontroller="SC7lYd"] > .GLI8Bc > .jGGQ5e > .yuRUbf > a > .LC20lb')
        .should('have.text', 'Maxillosoft | Oral Surgery Practice Management Software');
    })
})