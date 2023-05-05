import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setMsg] = useState("");

  function getData() {
    fetch("https://mystery-api.kushanksriraj.repl.co/get")
      .then((res) => {
        if (res.status === 404) {
          setMsg("Page not found")
        } else if (res.status === 401) {
          setMsg("you are not logged in")
        } else if (res.status === 200) {
          setMsg("API is working")
        }
      })
  }
  useEffect(() => getData)

  return (
    <div className="App">
      <h1>{value}</h1>
    </div>
  );
}

export default App;
