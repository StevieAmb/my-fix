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

  it('User should see error message if they have not added any projects to try yet', () => {
    cy.get('.nav-bar')
    .get('button').contains('My Projects').click()
    .url('http://localhost:3000/tryThis')
    .get('h4')
    .contains('It seems you have not added a project yet. Get your tools and get going!')
  })

  it('User should be able to see and click the button for trying a project', () => {
    cy.get('button').contains('Add To My Projects').click()
  })

  it('User should be able to click "My Projects" button on navbar and see a list of project they want to try', () => {
    cy.get('button').contains('Add To My Projects').click()
    cy.get('.nav-bar')
    .get('button').contains('My Projects').click()
    .url(' http://localhost:3000/tryThis')
  })

  it('User should be able to click items on the list to see the video again', () => {
    cy.get('button').contains('Add To My Projects').click()
    cy.get('.nav-bar')
    .get('button').contains('My Projects').click()
    .url(' http://localhost:3000/tryThis')
    cy.get('.try-container')
    .children('a')
    .contains('Leaky Faucet').click()
    .url('')
  })
})