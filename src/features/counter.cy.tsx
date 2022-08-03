import Counter from './counter'

describe('Counter', () => {

  it('should mount', () => {
    cy.mount(<Counter/>)
  })
})