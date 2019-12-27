import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
let model = {
  clicks: 0
};
let onclick = () => {
  model.clicks += 1;
  render();
};
function render() {
  ReactDOM.render(
    <App clicks={model.clicks} onDivClick={() => onclick()} />,
    document.getElementById("root")
  );
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
