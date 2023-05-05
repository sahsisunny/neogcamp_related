import './App.css';
import { useState } from 'react';

let currentPrice = 0;
let costPrice = 0;
function App() {
  const [msg, setMsg] = useState("")

  function getCurrentP(e) {
    currentPrice = Number(e.target.value);
  }
  function getCostP(e) {
    costPrice = Number(e.target.value);
  }
  function getRes() {
    if (currentPrice < costPrice) {
      let loss = costPrice - currentPrice;
      setMsg(`your loss is ${loss}`)
    } else if (currentPrice > costPrice) {
      let profit = currentPrice - costPrice;
      setMsg(`your profit is ${profit}`)
    } else {
      setMsg("no profit no loss")
    }
  }


  return (
    <div className="App">
      <h1>{msg}</h1>
      <input type="number" name="currentPrice" onChange={getCurrentP}></input>
      <input type="number" name="costPrice" onChange={getCostP}></input>
      <button onClick={getRes}>Show Result</button>

    </div>
  );
}

export default App;
