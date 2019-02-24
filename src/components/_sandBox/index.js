import React from "react";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

import Home from "./layout/home/home";
import SanBoxButton from "./components/Button/SanBoxButton";

const SandBox = () => {
  return (
    <div className="index-sandbox">
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/sandbox/mainsandbox" component={Home} />
            <Route path="/sandbox/button" component={SanBoxButton} />
          </Switch>
        </App>
      </BrowserRouter>
    </div>
  );
};

export default SandBox;
