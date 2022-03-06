describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sdsd')
    cy.visit('http://localhost:3000/kitchen/sdsd')
 })

  it('User should see error message when on a broken link', () => {
    cy.get('p').contains('Something is clearly broken. Maybe you can reach down into your toolbox and help us fix it?')
  })

  it('User should be able to click "MY FIX and return to home page', () => {
    cy.get('.nav-bar').contains('MY FIX').click()
    .url('http://localhost:3000/')
  })
})