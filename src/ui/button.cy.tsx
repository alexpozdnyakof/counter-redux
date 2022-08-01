import Button from './button'

describe('Button', () => {
  it('mounts', () => {
    cy.mount(<Button>Text</Button>)
  })

  it('should set primary variant', () => {
    cy.mount(<Button testId="button">Text</Button>)
    cy.get('[data-testid=button]').should('have.class', 'Button_variant_primary')
  })

  it('should set secondary variant', () => {
    cy.mount(<Button testId="button" variant="secondary">Text</Button>)
    cy.get('[data-testid=button]').should('have.class', 'Button_variant_secondary')
  })

  it('should handle click', () => {
    const stub = cy.spy().as('onClickSpy')
    cy.mount(<Button testId="button" variant="secondary" onClick={stub}>Text</Button>)
    cy.get('[data-testid=button]').click()
    cy.get('@onClickSpy').should('have.been.calledOnce')
  })



})