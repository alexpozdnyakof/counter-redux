import styles from './text-field.module.css';

interface Props {
  value?: number;
  onBlur?: () => {}
  testId?: string
}

export default function TextField({value, onBlur, testId}: Props) {

  return (
    <input className={styles.TextField} defaultValue={value}  data-testid={testId} onBlur={onBlur} type="number"/>
  )
}