describe('Change grams value', () => {
  beforeEach(() => {
    const foodText = 'Banana';
    const fetchTime = 4000;

    cy.visit('/');

    cy.get('input[type="text"]').type(foodText);
    cy.wait(fetchTime);
    cy.get('input[type="text"]').trigger('keypress', { keyCode: 13 });
  });

  it('should change grams value, also change calories', () => {
    const foodCal = 128;

    cy.get('li > div > button').click();
    cy.get('input[type="number"]').type('1000').trigger('change');
    cy.get('input[type="number"]').should('have.value', 10 * 100);
    cy.get('li > div > p').should('include.text', 10 * foodCal);
    cy.get('input[type="number"]').blur();
    cy.get('input[type="number"]').should('be.disabled');
  });

  it('should if grams equal 1, grams not have s', () => {
    cy.get('li > div > button').click();
    cy.get('input[type="number"]')
      .type('{backspace} {backspace}')
      .trigger('change');
    cy.get('input[type="number"]').should('have.value', 1);

    cy.get('input[type="number"]').next().should('have.text', 'grama');
  });
});
