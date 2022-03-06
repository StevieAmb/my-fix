describe('Video Page', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://young-everglades-39392.herokuapp.com/", {fixture: 'example.json'})
    cy.visit('http://localhost:3000/')
    cy.get('.area-cards-container')
    .eq(0).contains('kitchen').click()
    .url('http://localhost:3000/kitchen')
    cy.get('.projects-container')
    .contains('Leaky Faucet').click()
    .url('http://localhost:3000/video/Leaky%20Faucet')
  })

  it('User should see the nav bar, with title and blurb', () => {
    cy.get('.nav-bar').contains('MY FIXINGS')
    .contains('For those who need to justify the amount of tools they own...')
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


  it('User should be able to see a video', () => {
    cy.get('.video-container')
    .children('iframe')
    .should('have.length', 1)
    .should('be.visible')
  })

  it('User should be able to see an "Add To My Projects" button and click it', () => {
    cy.get('.video-container')
    cy.get('button').contains('Add To My Projects').click()
  })

})