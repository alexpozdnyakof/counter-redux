import Toggle from './toggle'

describe('Toggle', () => {
  it('mounts', () => {
    cy.mount(<Toggle>1</Toggle>)
  })

  it('should show value', () => {
    cy.mount(<Toggle testId="toggle">0</Toggle>)
    cy.get('[data-testid=toggle]').should('have.text', '0')
  })

  it('should be enable', () => {
    cy.mount(<Toggle testId="toggle">1</Toggle>)
    cy.get('[data-testid=toggle]').should('have.class', 'Toggle_enable_on')
  })


  it('should be disable', () => {
    cy.mount(<Toggle testId="toggle">1</Toggle>)
    cy.get('[data-testid=toggle]').should('have.class', 'Toggle_enable_off')
  })


})