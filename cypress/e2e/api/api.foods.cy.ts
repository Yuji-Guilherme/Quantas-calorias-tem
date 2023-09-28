describe('taco api', () => {
  context('GET', () => {
    it('should return all foods', () => {
      const url = Cypress.env('URL');

      cy.request('GET', url).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).length(453);
        expect(response.body[0]).to.have.keys([
          '_id',
          'calories',
          'carbs',
          'description',
          'fat',
          'fiber',
          'number',
          'protein'
        ]);
      });
    });
  });
});
