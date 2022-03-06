describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('User should see the nav bar, with title and blurb', () => {
    cy.get('.nav-bar').contains('MY FIX')
    .contains('For those who need to justify the amount of tools they own...')
  })

  it('User should see input field for the tools they want to search projects by', () => {
    cy.get('#toolSearch').type('screwdriver')
    cy.get('button').contains('FIX IT!').click()
  })

  it('User should be able to see all the home area cards with images', () => {
    cy.get('.area-cards-container')
    .children('a')
    .should('have.length', 4)
    cy.get('img').should('exist')
  })

  it('User should be able to click on a card to be directed to the projects url', () => {
    cy.get('.area-cards-container')
    .children('a')
    .eq(2).click()
    .url('http://localhost:3000/bedroom')
  })

})