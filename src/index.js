import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
