import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  function showTitles() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setData(json))
  }
  useEffect(() => showTitles());
  return (
    <div className="App">
      {
        data.map((items, index) => {
          if (!items.completed) {
            return <p style={{ color: "red" }} key={index}>Completed: {items.completed.toString()}<br />Title: {items.title}</p>
          } else {
            return <p style={{ color: "green" }} key={index}>Completed: {items.completed.toString()}<br />Title: {items.title}</p>
          }
        })
      }
    </div>
  );
}

export default App;
