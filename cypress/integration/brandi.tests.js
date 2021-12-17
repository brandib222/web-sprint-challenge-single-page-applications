

describe('Pizza App', () => {
    beforeEach(() => {
        cy.request('http://localhost:3001/pizza')
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email');
    const sizeInput = () => cy.get('input[name=size');
    const pepperoniInput = () => cy.get('input[name=pepperoni');
    const pineappleInput = () => cy.get('input[name=pineapple');
    const cheeseInput = () => cy.get('input[name=cheese');
    const veggiesInput = () => cy.get('input[name=veggies');
    const specialInput = () => cy.get('input[name=special');

    it('can type in the inputs', () => {
        nameInput()
            .should('have.value', '')
            .type('Rudolph the red')
            .should('have.value', 'Rudolph the red')

        emailInput()
            .should('have.value', '')
            .type('nosed reindeer')
            .should('have.value', 'nosed reindeer')
        
        specialInput()
            .should('have.value', '')
            .type('had a very shiny nose')
            .should('have.value', 'had a very shiny nose')
    })

})