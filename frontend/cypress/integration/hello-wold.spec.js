/// <reference types="Cypress" />

describe('Hello world', () => {
  it('displays hello world', () => {
    cy.visit('/');

    cy.findAllByText(/hello world/i);
  });
});
