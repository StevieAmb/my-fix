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

  it('User should be able to see and click the button for trying a project', () => {
    cy.get('button').contains('Gonna Try This').click()
  })

  it('User should be able to click "My Projects" button on navbar and see a list of project they want to try', () => {
    cy.get('button').contains('Gonna Try This').click()
    cy.get('.nav-bar')
    .get('button').contains('My Projects').click()
    .url(' http://localhost:3000/tryThis')
  })
})