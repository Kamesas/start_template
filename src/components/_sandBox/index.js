import React from "react";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

import Home from "./layout/home/home";

const SandBox = () => {
  return (
    <div className="index-sandbox">
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </App>
      </BrowserRouter>
    </div>
  );
};

export default SandBox;
