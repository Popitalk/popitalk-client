/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
// import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./redux/store";
import history from "./history";
import App from "./App";

const AppFinal = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

// const WithHotReload =
//   process.env.NODE_ENV === "production" ? AppFinal : hot(AppFinal);

ReactDOM.render(<AppFinal />, document.getElementById("root"));
// const WithHotReload =
//   process.env.NODE_ENV === "production" ? AppFinal : hot(AppFinal);

// ReactDOM.render(<WithHotReload />, document.getElementById("root"));
