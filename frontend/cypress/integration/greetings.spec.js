/// <reference types="Cypress" />

describe('Greetings', () => {
  it('greets names', () => {
    cy.request('POST', `${Cypress.env('BACKEND_URL')}/seedNames`, { names: ['ITers', 'Toto'] });

    cy.visit('/');

    cy.findAllByText('ITers');
    cy.findAllByText('Toto');
  });
});
