describe('Add and remove food', () => {
  it('should food appear when user add and disappear when remove', () => {
    cy.visit('/');

    const foodText = 'Banana';
    const foodCal = 128;

    cy.get('input[type="text"]').type(foodText);
    cy.get('p').contains('carregando').should('be.visible');
    cy.contains(foodText).parent().find('input').click();

    cy.get('li').should('be.visible');
    cy.get('input[type="number"]').should('have.value', 100);
    cy.get('.card_info_number').should('include.text', foodCal);
    cy.get('li > p').should('include.text', foodText);
    cy.get('.card_info_desc').should('include.text', 'cal');
    cy.get('.card_info_desc').should('include.text', 'carboidrato');
    cy.get('.card_info_desc').should('include.text', 'proteína');
    cy.get('.card_info_desc').should('include.text', 'gordura');
    cy.get('.card_info_desc').should('include.text', 'fibra');

    cy.get('li > div > button').click();
    cy.get('input[type="number"]').should('be.enabled');
    cy.get('li > div > button').focus().click();
    cy.get('input[type="number"]').should('be.disabled');

    cy.get('li > button').click();
    cy.get('li > p').should('not.exist');
  });
});
