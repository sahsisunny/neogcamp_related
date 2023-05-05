import React, { useState } from 'react';
import './App.css';

let url = "https://jsonplaceholder.typicode.com/todos"
function App() {
  const [data, setData] = useState([]);
  function getData() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
  }


  return (
    <div className="App">
      <h1>Sample Q21</h1>
      <button onClick={getData}>Get Data</button>
      <div>
        <h2>Output</h2>
        <table>
          <thead>
            <tr>
              <th>Completed</th>
              <th>Title</th>
            </tr>
          </thead>
          {
            data.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{item.completed.toString()}</td>
                    <td>{item.title}</td>
                  </tr>
                </tbody>
              )
            })}
        </table>

      </div>
    </div >
  );
}

export default App;
