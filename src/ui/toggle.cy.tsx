import Toggle from './toggle'

describe('Toggle', () => {
  it('mounts', () => {
    cy.mount(<Toggle>1</Toggle>)
  })

  it('should show value', () => {
    cy.mount(<Toggle testId="toggle">0</Toggle>)
    cy.get('[data-testid=toggle]').should('have.text', '0')
  })

  it('should be disable', () => {
    cy.mount(<Toggle testId="toggle">1</Toggle>)
    cy.get('[data-testid=toggle]').should(($div) => {
      expect($div[0].className).not.contains('Toggle_enable_on')
    })
  })


  it('should be enable', () => {
    cy.mount(<Toggle testId="toggle" on>1</Toggle>)
    cy.get('[data-testid=toggle]').should(($div) => {
      expect($div[0].className).contains('Toggle_enable_on')
    })
  })

  it('should trigger click', () => {
    const spy = cy.spy().as('onClickSpy');
    cy.mount(<Toggle testId='toggle' onClick={spy}>0</Toggle>)
    cy.get('[data-testid=toggle]').click()
    cy.get('@onClickSpy').should('have.been.calledOnce')
  })

})