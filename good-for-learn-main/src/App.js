import React, { useState } from "react";
import './App.css';

const buttons = ['cybersecurity', 'programming'];
const data = {
  "programming": [
    {
      name: "Apna College",
      youtube: "https://www.youtube.com/@ApnaCollegeOfficial",
      website: "https://www.apnacollege.in/home"
    },
    {
      name: "Code With Harry",
      youtube: "https://www.youtube.com/c/CodeWithHarry",
      website: "https://cybertube.net/"
    },
    {
      name: "Code Help - by Love Bobber",
      youtube: "https://www.youtube.com/@CodeHelp",
      website: "https://www.codewithharry.com/"
    }
  ],
  "cybersecurity": [
    {
      name: "Bitten Tech",
      youtube: "https://www.youtube.com/c/BittenTech",
      website: "https://bittentechsolutions.in/"
    },
    {
      name: "TechChip",
      youtube: "https://www.youtube.com/c/TechChipNet",
      website: "https://cybertube.net/"
    },
    {
      name: "David Bombal",
      youtube: "https://www.youtube.com/@davidbombal",
      website: "https://davidbombal.com/"
    }
  ]
};

function App() {

  const [selected, setSelected] = useState('programming');


  return (
    <div className="App">
      <h1>📖 Good for Learn 📖</h1>
      <p>
        Checkout the best youtube channel for learning different technologies and other stuffs.
      </p>

      {/* Buttons */}
      {buttons.map((item, index) => {
        return (<button className="btn" key={index} onClick={
          () => setSelected(item)
        }> {item} </button>);
      })}
      {/* Buttons */}

      {/* List Items */}
      <div className='list-content'>
        <ul className="uList">
          {data[selected].map((item, index) => {
            return (
              <li key={index}>
                <div className="list-item">
                  <div className="list-item-name">{item.name}</div>
                  <hr />
                  <div className="list-item-links">
                    <a href={item.youtube} target="_blank" rel="noreferrer" className="btn2">YouTube</a>
                    <br />
                    <a href={item.website} target="_blank" rel="noreferrer" className="btn2">Website</a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* List Items */}

    </div>
  );
}

export default App;

