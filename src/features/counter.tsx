import { useAppDispatch, useAppSelector } from '../storeHooks';
import { Button, TextField, Toggle } from '../ui';
import styles from './counter.module.css';
import { selectCount } from './counterSelector';
import { decrement, increment } from './counterSlice';


export default function Counter(){
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

      <div className={styles.CounterWrapper}>
        <TextField value={count}/>
      </div>

      <div className={styles.ControlPanel}>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button variant='secondary'>Reset</Button>
        <Button variant='secondary'>Remote Sync</Button>
        <Button variant='secondary'>Schedule Task</Button>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
      </div>
    </>
  )
}