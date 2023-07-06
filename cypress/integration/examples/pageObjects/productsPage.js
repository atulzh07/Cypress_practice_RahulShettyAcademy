class Products{
    addButton(){
        let random = Math.floor(Math.random() * 4) + 1;
        return cy.get(`:nth-child(${random}) > .card > .card-footer > .btn`);
    }
    checkoutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
}

export default Products;