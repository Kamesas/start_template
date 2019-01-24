import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import "semantic-ui-css/semantic.min.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
