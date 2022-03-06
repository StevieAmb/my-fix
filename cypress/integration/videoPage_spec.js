describe('Main Page', () => {
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

  it('User should be able to see a video', () => {
    cy.get('.video-container')
    .children('iframe')
    .should('have.length', 1)
    .should('be.visible')
  })

})