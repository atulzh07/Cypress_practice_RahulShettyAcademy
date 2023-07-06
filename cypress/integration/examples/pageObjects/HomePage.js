class Homepage 
{
    getEditBox(){
        return cy.get(':nth-child(1) > .form-control')
    }

}

export default Homepage; 
//makes Homepage available to all the other files in the framework