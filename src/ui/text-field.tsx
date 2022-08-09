import { ChangeEventHandler, ForwardedRef, forwardRef } from 'react';
import styles from './text-field.module.css';

interface Props {
  value: number;
  onBlur: () => {}
  onChange: ChangeEventHandler<HTMLInputElement>
  testId: string
  ariaLabel: string
  ref: ForwardedRef<HTMLInputElement>
}

function Component({value, onBlur, onChange, testId, ariaLabel, ref}: Partial<Props>) {

  return (
    <input
      ref={ref}
      className={styles.TextField}
      value={value}
      aria-label={ariaLabel}
      data-testid={testId}
      onChange={onChange}
      onBlur={onBlur}
      type="number"
    />
  )
}


const TextField = forwardRef((props: Partial<Props>, ref: ForwardedRef<HTMLInputElement>) => Component({...props, ref}))

export default TextField;