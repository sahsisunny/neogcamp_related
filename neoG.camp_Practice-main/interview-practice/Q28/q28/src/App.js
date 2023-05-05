import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';
let name;
function App() {
  const [msg, setMsg] = useState("");
  function getName(e) {
    name = e.target.value;
  }
  function showMsg() {
    if (name === "Tanvi") {
      setMsg("She is the best CEO ever!")
    } else if (name === "Tanay") {
      setMsg("He is our FUNNY mentor!")
    } else if (name === "Swapnil") {
      setMsg("He helps us CONQUER jobs!")
    } else if (name === "Akanksha") {
      setMsg("She is our CHEERFUL Interviewer!")
    } else {
      setMsg("Please enter valid name!")
    }
  }

  return (
    <div className="App">
      <h1>{msg}</h1>
      <input type="text" name="text" onChange={getName}></input>
      <button onClick={showMsg}>SHOW</button>
    </div>
  );
}

export default App;
