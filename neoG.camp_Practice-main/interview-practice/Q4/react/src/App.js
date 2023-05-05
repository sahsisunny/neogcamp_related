import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [colorValue, setcolorValue] = useState("")
  function setRedFun() {
    setcolorValue("red")
  }
  function setGreenFun() {
    setcolorValue("green")
  }
  function setBlueFun() {
    setcolorValue("blue")
  }
  function getValue(event) {
    setValue(event.target.value)
  }

  return (
    <div className="App">
      <h1 style={{ color: colorValue }}>{value}</h1>
      <input type="text" onChange={getValue}></input>
      <button onClick={setRedFun}>RED</button>
      <button onClick={setGreenFun}>GREEN</button>
      <button onClick={setBlueFun}>BLUE</button>

    </div >
  );
}

export default App;
