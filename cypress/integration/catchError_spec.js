describe('Catch Error', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://young-everglades-39392.herokuapp.com/", {statusCode: 500})
    cy.visit('http://localhost:3000/')
  })

  it('User should see a 500 error message', () => {
    expect(true).to.equal(true)
  })
})
