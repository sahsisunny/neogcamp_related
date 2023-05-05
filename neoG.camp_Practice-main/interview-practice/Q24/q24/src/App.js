import { useState } from 'react';
import './App.css';
function App() {
  const [value, setValue] = useState([]);
  function clickHandler() {
    fetch("https://quick-access-api.desaihetav.repl.co/")
      .then((response) => response.json())
      .then((value) => {
        setValue(value)
      })
  }
  return (
    <div className="App">
      <p>{String(value.success)}</p>
      <p>{value.message}</p>
      <button onClick={clickHandler}>Show</button>
    </div>
  );
}

export default App;
