import React, { useEffect, useState } from "react";
// import {useState} from "react";

// Create an input box which takes in any text and a submit button. On submit of the text, show on the dom below the text entered and the number of characters in that text. Example: if you entered “apples”, your output should show as apples6.
function App() {
  const [text, setText] = React.useState("");
  const [textLen, setTextLength] = useState();
  function ClickHandler() {
    setTextLength(text.length);
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
          text===""?setTextLength(null):setTextLength(e.target.value.length);
        }}
      />
      <button onClick={ClickHandler}>SUBMIT</button>
      <h1>
        {text}
        {textLen}
      </h1>
    </>
  );
}

export default App;
