import { screen, render } from '@testing-library/react'
import Button from './button'


describe('Button', () => {
  const text = 'button'

  it('should render succesfully', () => {
		render(<Button>{text}</Button>)
		expect(screen.getByText(text)).toBeInTheDocument();
	})

  it('should set primary variant', () => {
    render(<Button variant="primary" testId="primary">{text}</Button>)
    expect(screen.getByTestId('primary')).toHaveClass('Button_variant_primary')
  })


})