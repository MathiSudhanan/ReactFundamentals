import React from "react";
import "./App.css";

function App(props) {
  return (
    <div onClick={props.onDivClick}>
      The div has been clicked {props.clicks} time(s).
    </div>
  );
}

export default App;
