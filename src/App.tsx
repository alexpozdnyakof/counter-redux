import React from 'react';
import './App.css';
import { Counter } from './features';
import { Button, Toggle } from './ui';

// сделать гридами лэйаут
// сделать гридами панельки
// добавить redux

function App() {
  const notations =  Array.from(new Array(10), (x, i)  => i + 1 );

  return (
    <div className="App">

      <div className="Wrapper">
            <div className="Container">
              <div className="Notation">
                  <span className="Notation-Title">Switch Notation</span>
                  <div className="Notation-Values">
                    {notations.map((n) => <Toggle on={n === 10}>{n.toString()}</Toggle>)}
                  </div>
              </div>
            </div>

            <div className="CounterWrapper">
                <Counter value={0}/>
            </div>

            <div className="ControlPanel">
              <Button>Decrement</Button>
              <Button variant='secondary'>Reset</Button>
              <Button variant='secondary'>Remote Sync</Button>
              <Button variant='secondary'>Schedule Task</Button>
              <Button>Increment</Button>
            </div>

        </div>
      </div>
  );
}

export default App;
