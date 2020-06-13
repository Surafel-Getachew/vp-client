import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store"
// import App from "./App"
// import Playground from "./Playground"
import Apps from "./Apps";
import "./index.css";

ReactDOM.render(
  <Provider store = {store}>
    <Apps />
  </Provider>,
  document.getElementById("root")
);
