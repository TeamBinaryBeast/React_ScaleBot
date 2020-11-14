import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// React Router
import { BrowserRouter } from "react-router-dom";
// Redux
import { createStore } from "redux";
import allReducer from "./Store/Reducers/index";
import { Provider } from "react-redux";

// Adding Store
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Rendering App
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
