import React, { useState } from 'react'
import './App.css';

function App() {
  const [colorsvalue, setColor] = useState("");
  const [value, setText] = useState("");
  function getText(e) {
    setText(e.target.value);
  }
  function logFun() {
    setColor("black")
  }
  function warnFun() {
    setColor("yellow")
  }
  function errorFun() {
    setColor("red")
  }
  return (
    <div className="App">
      <h1 style={{ color: colorsvalue }}>{value}</h1>
      <input type="text" onChange={getText} />
      <button onClick={logFun}>Log</button>
      <button onClick={warnFun}>Warn</button>
      <button onClick={errorFun}>Error</button>

    </div>
  );
}

export default App;
