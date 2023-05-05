import { useState } from 'react';
import './App.css';

let size = 32;
function App() {
  const [fontsize, setFontSize] = useState(32);
  const [value, setValue] = useState("");

  function increaseSize() {
    size += 2;
    setFontSize(size)
  }
  function decreaseSize() {
    size -= 2;
    setFontSize(size)
  }

  function getValue(event) {
    setValue(event.target.value)

  }

  return (
    <div className="App">
      <h1 style={{ fontSize: fontsize }}>{value}</h1>
      <input type="text" onChange={getValue}></input>
      <button onClick={increaseSize}>+</button>
      <button onClick={decreaseSize}>-</button>
    </div>
  );
}

export default App;
