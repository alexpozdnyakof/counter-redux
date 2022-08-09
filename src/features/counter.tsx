import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../storeHooks';
import { Button, TextField, Toggle } from '../ui';
import styles from './counter.module.css';
import { selectCount } from './counterSelector';
import { decrement, increment, setValue, syncValue } from './counterSlice';


export default function Counter(){
  const valueRef = useRef<HTMLInputElement>(null);
  const notations =  Array.from(new Array(10), (x, i)  => i + 1 );
  const count = useAppSelector(selectCount);
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
        <TextField ref={valueRef} value={count} ariaLabel="counter-value" onChange={(e) => {dispatch(setValue(e.target.value))}}/>
      </div>

      <div className={styles.ControlPanel}>
        <Button onClick={() => dispatch(decrement())} ariaLabel="decrement">Decrement</Button>
        <Button variant='secondary'>Reset</Button>
        <Button onClick={() => dispatch(syncValue())} variant='secondary' ariaLabel="sync-value">Remote Sync</Button>
        <Button variant='secondary'>Schedule Task</Button>
        <Button onClick={() => dispatch(increment())} ariaLabel="increment">Increment</Button>
      </div>
    </>
  )
}