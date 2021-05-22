/// <reference types="cypress" />

describe('Authentication', () => {
  it('works', () => {
    cy.visit('/');
    cy.url().should('contain', '/');
  });
});
