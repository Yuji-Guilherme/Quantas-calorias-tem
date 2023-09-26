describe('switch theme and visit github page', () => {
  it('should click theme button switch theme and click github button visit github page', () => {
    cy.visit('/');

    const fetchTime = 4000;

    const lightBlue = 'rgb(225, 239, 239)';
    const mediumBlue = 'rgb(209, 224, 224)';
    const mediumGray2 = 'rgb(41, 39, 55)';
    const darkGray = 'rgb(33, 34, 45)';
    const darkPurple = 'rgb(26, 25, 33)';
    const sky50 = 'rgb(240, 249, 255)';
    const sky100 = 'rgb(224, 242, 254)';
    const zinc400 = 'rgb(161, 161, 170)';

    cy.get('header > div > button').click();
    cy.get('html').should('have.class', 'dark');
    cy.get('body').should('have.css', 'background-color', mediumGray2);
    cy.get('header').should('have.css', 'background-color', darkPurple);
    cy.get('.header_logo').should('have.css', 'stroke', lightBlue);
    cy.get('h1').should('have.css', 'color', lightBlue);
    cy.get('form > svg').should('have.css', 'stroke', mediumBlue);

    cy.get('form > svg').click();
    cy.get('input[type="text"]').type('a');

    cy.get('form > div > button > svg').should(
      'have.css',
      'stroke',
      mediumBlue
    );
    cy.get('section').should('have.css', 'background-color', darkGray);
    cy.get('p').contains('carregando').should('have.css', 'color', sky50);
    cy.wait(fetchTime);
    cy.get('label').should('have.css', 'color', sky100);

    cy.get('input[type="text"]').trigger('keypress', { keyCode: 13 });
    cy.get('li > p')
      .parent()
      .should('have.css', 'background-color', darkPurple);
    cy.get('li > p').should('have.css', 'color', mediumBlue);
    cy.get('li > div > button > svg').should('have.css', 'stroke', mediumBlue);
    cy.get('li > div > button > svg').should('have.css', 'fill', mediumBlue);
    cy.get('input[type="number"]').should('have.css', 'color', mediumBlue);
    cy.get('.card_info_number').should('have.css', 'color', mediumBlue);
    cy.get('.card_info_desc').should('have.css', 'color', zinc400);

    cy.get('a').should(
      'have.attr',
      'href',
      'https://github.com/Yuji-Guilherme/Quantas-calorias-tem'
    );
    cy.get('a').click();
    setTimeout(() => {
      cy.on('url:changed', (newUrl) => {
        expect(newUrl).to.eq(
          'https://github.com/Yuji-Guilherme/Quantas-calorias-tem'
        );
      });
    }, 5000);
  });
});
