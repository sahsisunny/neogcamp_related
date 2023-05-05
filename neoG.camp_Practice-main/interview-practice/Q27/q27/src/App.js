import React, { useState } from 'react';
import './App.css';

let userName;
let pass;
function App() {
  const [message, setMessage] = useState("");

  function getusername(e) {
    userName = e.target.value;
  }

  function getPass(e) {
    pass = e.target.value;
  }

  function submitHandler() {
    console.log(userName);
    console.log(pass);
    let res = pass.includes(userName);
    
    if (res) {
      setMessage("Password can't have name")
    } else {
      setMessage("Success")
    }
  }
  return (
    <div className="App">
      <input type="text" name="username" onChange={getusername}></input>
      <input type="password" name="password" onChange={getPass}></input>
      <p>{message}</p>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default App;
