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

  it('User should be able to see all the home area cards with images')

  //user should see area cards
  //user should see the images
  //user should be able to click on an area card

})