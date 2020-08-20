import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Apps from "./Apps";


ReactDOM.render(
  <Provider store = {store}>
    <Apps />
  </Provider>,
  document.getElementById("root")
);
