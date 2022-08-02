import { Button } from '../ui'
import ControlPanel from './control-panel'


describe('ControlPanel', () => {
  it('mounts', () => {
    cy.mount(
    <ControlPanel>
        <Button>123</Button>
        <Button>123</Button>
      </ControlPanel>
      )
  })
})