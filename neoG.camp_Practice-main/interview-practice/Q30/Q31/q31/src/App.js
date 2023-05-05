import './App.css';
import { useState } from 'react';

let name = "";
let otp;
let enterOtp;
function App() {
  const [msgStatus, setStatusMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");
  const [colors, setColors] = useState("black");

  function getName(e) {
    name = e.target.value;
  }
  function getOtp(e) {
    enterOtp = e.target.value;
  }
  function showMsg() {
    fetch("https://otpgenerator.ishanjirety.repl.co/get-otp?name=" + name)
      .then((res) => res.json())
      .then((json) => {
        setStatusMsg(json.success.toString());
        otp = json.otp;
        setMsg(otp)
      })
  }
  function showMsg2() {
    let res = otp.includes(enterOtp);
    if (res) {
      setStatus("Success!");
      setColors("green");
    } else {
      setStatus("Fail!!");
      setColors("red");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Status with Server: {msgStatus}</h1>
        <h1>Name with OTP: {msg}</h1>
        <h1 style={{ color: colors }}>{status}</h1>
        <input type="text" onChange={getName}></input>
        <button onClick={showMsg}>Get OTP</button>
        <input type="text" onChange={getOtp}></input>
        <button onClick={showMsg2}>Verify</button>
      </header>
    </div>
  );
}

export default App;
