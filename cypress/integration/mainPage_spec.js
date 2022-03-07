describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('User should see the nav bar, with title and blurb', () => {
    cy.get('.nav-bar').contains('MY FIXINGS')
    .contains('For those who need to justify the amount of tools they own...')
    .get('.page-title')
    .contains('Click Me To Go Home')
  })

  it('User should see "My Projects" button on nav bar', () => {
    cy.get('.nav-bar')
    .get('button').contains('My Projects').click()
  })

  it('User should see error message if they have not added any projects to try yet', () => {
    cy.get('.nav-bar')
    .get('button').contains('My Projects').click()
    .url('http://localhost:3000/tryThis')
    .get('h4')
    .contains('It seems you have not added a project yet. Get your tools and get going!')
  })

  it('User should be able to return back home after clicking "MY FIXINGS', () => {
    cy.get('.nav-bar').contains('MY FIXINGS').click()
    .url('http://localhost:3000/')
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