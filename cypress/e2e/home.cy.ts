describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have cards', () => {
    cy.get('[data-testid="card"]').should('have.length.above', 1);
  });

  it('should find card by name', () => {
    cy.get('.search__input').type('Rick');
    cy.get('.search__submit').click();
    cy.get('[data-testid="card"]').should('have.length.above', 1);
  });

  it('should not find the card', () => {
    cy.get('.search__input').type('wdqwdqwd');
    cy.get('.search__submit').click();
    cy.get('.error').should('include.text', 'No results');
  });

  it('should show and close modal', () => {
    cy.contains('Rick').click();
    cy.contains('Gender').should('be.visible');
    cy.get('.modal').click();
  });
});
