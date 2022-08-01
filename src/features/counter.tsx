import './counter.css';

interface Props {
  value?: number;
  onBlur?: () => {}
  testId?: string
}

export default function Counter({value, onBlur, testId}: Props) {

  return (
    <input className="Counter" defaultValue={value} data-testid={testId} onBlur={onBlur} type="number"/>
  )
}