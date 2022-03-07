describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://young-everglades-39392.herokuapp.com/", {fixture: 'example.json'})
    cy.visit('http://localhost:3000/')
    cy.get('.area-cards-container')
    .eq(0).contains('kitchen').click()
    .url('http://localhost:3000/kitchen/home-improvement-repairs')
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

  it('User should be able to see the project card', () => {
    cy.get('.projects-container')
    .children('a')
    .should('have.length', 2)
  })

  it('User should be able to click on a project, and be taken to a new url', () => {
    cy.get('.projects-container')
    .children('a')
   .eq(0).contains('Leaky Faucet').click()
    .url('http://localhost:3000/video/Leaky%20Faucet')
  })

  it('User should be able to see an "Add To My Projects" button and click it', () => {
    cy.get('.projects-container')
    .children('a')
   .eq(0).contains('Leaky Faucet').click()
    .url('http://localhost:3000/video/Leaky%20Faucet')
    cy.get('.video-container')
    cy.get('button').contains('Add To My Projects').click()
  })

  it('User should be able to click "MY FIXINGS" on nav bar, and go back to home page', () => {
    cy.get('.nav-bar').contains('MY FIXINGS').click()
    .url('http://localhost:3000/')
  })

})