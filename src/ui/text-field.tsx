import { ChangeEventHandler, ForwardedRef, forwardRef } from 'react';
import styles from './text-field.module.css';

interface Props {
  value: number;
  onBlur: () => {}
  onChange: ChangeEventHandler<HTMLInputElement>
  testId: string
  ariaLabel: string
  ref: ForwardedRef<HTMLInputElement>
  disabled: boolean
}

function Component({value, testId, ariaLabel, disabled, onBlur, onChange,  ref}: Partial<Props>) {

  return (
    <input
      ref={ref}
      className={styles.TextField}
      disabled={disabled}
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