import { useState } from "react";
import "./App.css";

const buttons = ["h1", "h2", "h3", "h4", "h5", "h6"];
export default function App() {
  const [heading, setHeading] = useState(null);
  const [text, setText] = useState("");

  return (
    <div className="App">
      {/* 1. get text from user in input */}
      {/* 2. Create three button for h1, h2 and h3 */}
      {/* 3. On button click show text in selected heading */}

      <input type="text" onChange={(e) => setText(e.target.value)} />

      {buttons.map((btn, index) => {
        return (
          <button key={index} onClick={() => setHeading(btn)}>
            {btn}
          </button>
        );
      })}

      {heading != null ? (
        <div>
          {heading === "h1" ? <h1>{text}</h1> : null}
          {heading === "h2" ? <h2>{text}</h2> : null}
          {heading === "h3" ? <h3>{text}</h3> : null}
          {heading === "h4" ? <h4>{text}</h4> : null}
          {heading === "h5" ? <h5>{text}</h5> : null}
          {heading === "h6" ? <h6>{text}</h6> : null}
        </div>
      ) : null}
    </div>
  );
}
