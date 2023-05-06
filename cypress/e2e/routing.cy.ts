describe('Routing', () => {
  it('redirect on all routes', () => {
    cy.visit('/');
    cy.get('[data-testid="nav-bar"]').should('be.visible');

    cy.get('[data-testid="form-page"]').click();
    cy.url().should('include', '/form');
    cy.contains(/form/i).should('be.visible');

    cy.get('[data-testid="about-page"]').click();
    cy.url().should('include', '/about');
    cy.contains(/about/i).should('be.visible');
  });

  it('redirect on 404 page', () => {
    cy.visit('/qwedawd');
    cy.contains(/ops/i).should('be.visible');
  });
});
