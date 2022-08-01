import Counter from './counter'

describe('Counter', () => {
  it('mounts', () => {
    cy.mount(<Counter/>)
  })

  it('should set value', () => {
    cy.mount(<Counter value={10} testId="counter"/>)
    cy.get('[data-testid]').should('have.value', 10)
  })

  it('should trigger onBlur callback', () => {
    const onBlurSpy = cy.spy().as('onBlurSpy');

    cy.mount(<Counter onBlur={onBlurSpy} testId="counter"/>);
    cy.get('[data-testid=counter]').focus();
    cy.get('[data-testid=counter]').blur();

    cy.get('@onBlurSpy').should('have.been.calledOnce');
  })

})