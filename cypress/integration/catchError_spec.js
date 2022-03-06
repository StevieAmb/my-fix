describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://young-everglades-39392.herokuapp.com/", {statusCode: 500})
    cy.visit('http://localhost:3000/')
  })

  it('User should see error message when server breaks', () => {
    

  })
})
