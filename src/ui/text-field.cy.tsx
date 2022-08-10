import TextField from './text-field'

describe('Counter', () => {
  it('mounts', () => {
    cy.mount(<TextField/>)
  })

  it('should set value', () => {
    cy.mount(<TextField value={10} testId="counter"/>)
    cy.get('[data-testid=counter]').should('have.value', 10)
  })

  it('should set disabled', () => {
    cy.mount(<TextField value={10} testId="counter" disabled/>)
    cy.get('[data-testid=counter]').should('have.attr', 'disabled')
  })

  it('should trigger onBlur callback', () => {
    const onBlurSpy = cy.spy().as('onBlurSpy');

    cy.mount(<TextField onBlur={onBlurSpy} testId="counter"/>);
    cy.get('[data-testid=counter]').focus();
    cy.get('[data-testid=counter]').blur();

    cy.get('@onBlurSpy').should('have.been.calledOnce');
  })
})