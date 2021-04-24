/// <reference types="Cypress" />

describe('Hello World', () => {
  it('displays the names on the home page', () => {
    cy.request('POST', `${Cypress.env('NEXT_PUBLIC_BACKEND_URL')}/seedNames`, { names: ['CypressA', 'NextJS'] });

    cy.visit('/');

    cy.findAllByText('CypressA');
    cy.findAllByText('NextJS');
  });
});
