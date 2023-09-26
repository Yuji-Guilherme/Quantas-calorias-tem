describe('Add first food', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should press add button click, add first food', () => {
    const foodText = 'Banana';

    cy.get('ul').should('not.be.visible');
    cy.get('form > div > button').last().focus();
    cy.get('ul').should('be.visible');

    cy.get('input[type="text"]').type(foodText);
    cy.get('form > div > button').first().click();
    cy.get('input[type="text"]').should('have.value', '');

    cy.get('form > div > button').first().click();
    cy.get('li > p').should('not.exist');

    cy.get('input[type="text"]').type(foodText);
    cy.get('form > div > button').eq(1).click();
    cy.get('li > p').should('include.text', foodText);
  });

  it('should press enter, add first food', () => {
    const foodText = 'Banana';

    cy.get('input[type="text"]').focus();
    cy.get('ul').should('be.visible');

    cy.get('input[type="text"]').trigger('keypress', { keyCode: 13 });
    cy.get('li > p').should('not.exist');

    cy.get('input[type="text"]').type(foodText);
    cy.get('input[type="text"]').trigger('keypress', { keyCode: 13 });
    cy.get('li > p').should('include.text', foodText);
  });
});
