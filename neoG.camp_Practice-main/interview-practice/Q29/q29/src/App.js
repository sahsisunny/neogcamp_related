import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [msg, setMsg] = useState([]);
  function getMsg(text) {
    fetch("https://mock-practice.prakhar10v.repl.co/bollywood?name=" + text)
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
  }
  return (
    <div className="App">
      <h1>{msg}</h1>
      <button onClick={() => getMsg("yjhd")}>YJHD </button>
      <button onClick={() => getMsg("znmd")}>ZNMD </button>
    </div>
  );
}

export default App;
