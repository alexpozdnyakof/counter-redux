interface Props {
  on?: boolean
  onClick?: () => {}
  testId?: string
  children: string
}

export default function Toggle({on = false, testId, children, onClick}: Props) {

  return (
    <button className="counter__control_black selected" data-testid={testId}>{children}</button>
  )
}