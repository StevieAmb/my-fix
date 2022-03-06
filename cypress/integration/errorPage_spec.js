describe('Error/Broken Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sdsd')
    cy.visit('http://localhost:3000/kitchen/sdsd')
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

  it('User should see error message when on a broken link', () => {
    cy.get('p').contains('Something is clearly broken. Click "My FIXINGS" in the grey bar above and see if you can fix it for me, will ya?')
  })

  it('User should be able to click "MY FIXINGS" and return to home page', () => {
    cy.get('.nav-bar').contains('MY FIXINGS').click()
    .url('http://localhost:3000/')
  })
})