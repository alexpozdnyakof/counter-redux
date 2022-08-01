import "./toggle.css";

interface Props {
  on?: boolean
  onClick?: () => {}
  testId?: string
  children: string
}

export default function Toggle({on = false, testId, children, onClick}: Props) {
  const cssClasses = ['Toggle', 'Toggle_enable_'.concat(on ? 'on' : 'off' )].join(" ");
  return (
    <button className={cssClasses} data-testid={testId} onClick={onClick}>{children}</button>
  )
}