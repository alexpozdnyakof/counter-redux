import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../storeHooks';
import { Button, TextField, Toggle } from '../ui';
import styles from './counter.module.css';
import { selectCount, selectStatus } from './counterSelector';
import { decrement, increment, resetValueIfNotZero, setValue, syncValue } from './counterSlice';


export default function Counter(){
  const valueRef = useRef<HTMLInputElement>(null);
  const notations =  Array.from(new Array(10), (x, i)  => i + 1 );
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();



  return(
    <>
      <div className={styles.Container}>
        <div className={styles.Notation}>
          <span className={styles['Notation-Title']}>Switch Notation</span>
            <div className={styles['Notation-Values']}>
              {
                notations.map((n) =>
                  <Toggle on={n === 10} key={`toggle_${n}`}>
                    {n.toString()}
                  </Toggle>
                )
              }
            </div>
          </div>
        </div>

      <div className={styles.ValueWrapper}>
        <TextField ref={valueRef} value={count} disabled={status === 'loading'} ariaLabel="counter-value" onChange={(e) => {dispatch(setValue(e.target.value))}}/>
      </div>

      <div className={styles.ControlPanel}>
        <Button onClick={() => dispatch(decrement())} disabled={status === 'loading'} ariaLabel="decrement">Decrement</Button>
        <Button onClick={() => dispatch(resetValueIfNotZero())} disabled={status === 'loading'} variant='secondary' ariaLabel="reset">Reset</Button>
        <Button onClick={() => dispatch(syncValue())} disabled={status === 'loading'} variant='secondary' ariaLabel="sync-value">Remote Sync</Button>
        <Button variant='secondary' disabled={status === 'loading'}>Schedule Task</Button>
        <Button onClick={() => dispatch(increment())} disabled={status === 'loading'} ariaLabel="increment">Increment</Button>
      </div>
    </>
  )
}