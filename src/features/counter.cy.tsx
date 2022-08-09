import { Provider } from 'react-redux'
import store from '../store'
import Counter from './counter'

describe('Counter', () => {
  const ariaLabelSelector = (label: string) => `[aria-label=${label}]`

  it('should mount', () => {
    cy.mount(<Provider store={store}><Counter/></Provider>)
    cy.get(ariaLabelSelector('counter-value')).should('have.value', 0)

  })

  it('should increment value', () => {
    cy.mount(<Provider store={store}><Counter/></Provider>)
    cy.get(ariaLabelSelector('increment')).click();
    cy.get(ariaLabelSelector('counter-value')).should('have.value', 1)
  })


  it('should decrement value', () => {
    cy.mount(<Provider store={store}><Counter/></Provider>)
    cy.get(ariaLabelSelector('increment')).click();
    cy.get(ariaLabelSelector('increment')).click();
    cy.get(ariaLabelSelector('decrement')).click();
    cy.get(ariaLabelSelector('counter-value')).should('have.value', 2)
  })


  it('should set new value when text field change', () => {
    cy.mount(<Provider store={store}><Counter/></Provider>)
    cy.get(ariaLabelSelector('counter-value')).type('1');
    cy.get(ariaLabelSelector('counter-value')).should('have.value', 21)
  })

  it('should sync value', () => {
    cy.mount(<Provider store={store}><Counter/></Provider>)
    cy.get(ariaLabelSelector('sync-value')).click();
    cy.wait(500)
    cy.get(ariaLabelSelector('counter-value')).should('have.value', 338);
  })


})