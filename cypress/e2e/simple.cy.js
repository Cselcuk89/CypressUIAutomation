describe('Browser Actions',() =>{
  it('should load correct url',()=>{
    cy.visit('http://example.com',{timeout: 10000})
  })
  it('should check correct url',()=>{
    cy.url().should('not.include','example.com')
  })
  // adding implicit wait
  it('should wait for 3 seconds',()=>{
    cy.wait(3000)
  })
  it('should pause the execution',()=>{
    cy.pause()
  })
  it('should check for current element on the page',()=>{
    cy.get('[data-cy="text"]').should('be.visible')
    cy.get('[data-cy="subtext"]').should('not.be.hidden')
  })

})