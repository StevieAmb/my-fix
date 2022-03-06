describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://young-everglades-39392.herokuapp.com/", {fixture: 'example.json'})
    cy.visit('http://localhost:3000/')
    cy.get('.area-cards-container')
    .eq(0).contains('kitchen').click()
  })

  it('User should be able to see the project card', () => {
    cy.get('.projects-container')
    .children('a')
    .should('have.length', 2)
  })

  it('User should be able to click on a project, and be taken to a new url', () => {
    cy.get('.projects-container')
   eq(0).contains('Leaky Faucet').click()
    .url('http://localhost:3000/video/Leaky%20Faucet')
  })

  it('User should be able to click "MY FIX" on nav bar, and go back to home page', () => {
    cy.get('.nav-bar').contains('MY FIX').click()
    .url('http://localhost:3000/')
  })

})