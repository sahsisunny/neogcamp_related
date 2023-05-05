import React, { useState } from "react";
import './App.css';

function App() {

  const [value, setValue] = useState("false");  // for button is disabled or not
  const [value2, setValue2] = useState("");   // for input value
  const [bgColor, setBg] = useState("");  // for background color

  function validate(event) {
    const pass = event.target.value;
    if (pass.length < 10) {
      setValue(true);
      setBg('red');
      setValue2("");

    } else {
      setValue(false);
      setBg("green");
    }
  }

  function clickHandler() {
    setValue2("Password is strong");

  }
  return (
    <div className="App">
      <h1>Sample Q11</h1>
      <input type="password" onChange={validate} style={{ backgroundColor: bgColor }} ></input>
      <p >{value2}</p>
      <button disabled={value} onClick={clickHandler}>Submit</button>
    </div >
  );
}

export default App;
