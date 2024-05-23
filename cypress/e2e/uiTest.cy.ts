describe('Assessment 1- UI Automation Test', () => {
  it('Search iPhone in Amazon.com', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('[id="twotabsearchtextbox"]').type('iphone');
    cy.get('[id="nav-search-submit-button"]').click();
    cy.get('[data-component-type="s-search-result"]').eq(0).find('[data-cy="title-recipe"]').should('contain.text', 'Apple iPhone');
  })
})