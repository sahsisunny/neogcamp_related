import './App.css';
import { useState } from 'react';

let inputNum = 0;
function App() {
  const [msg, setMsg] = useState("");

  function getNum(e) {
    inputNum = Number(e.target.value);
  }

  function showRes() {
    let squareNum = inputNum ** 2;
    let strSqureNum = squareNum.toString();
    if ((strSqureNum.slice(-1)) == inputNum) {
      setMsg(`${inputNum} is Automorphic numbers`);
    } else {
      setMsg(`${inputNum} is not a Automorphic numbers`);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{msg}</h1>
        <input type="number" onChange={getNum}></input>
        <button onClick={showRes}>Show Result</button>
      </header>
    </div>
  );
}

export default App;
