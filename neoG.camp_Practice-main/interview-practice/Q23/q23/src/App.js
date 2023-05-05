import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(1);
  function clickHandler1() {
    setValue(5);
  }
  function clickHandler2() {
    setValue(10);
  }
  return (
    <div className="App">
      <h1
        style={{
          border: `${value}px solid black`,
        }}>Sunny Sahsi</h1>
      <button onClick={clickHandler1}>5PX</button>
      <button onClick={clickHandler2}>10PX</button>
    </div>
  );
}

export default App;
