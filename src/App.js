import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import WorkOut from "./components/workOut/WorkOut";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import LogOut from "./components/auth/LogOut";
import Toolbar from "./components/Toolbar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Fragment>
            <Toolbar />

            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/workout" component={WorkOut} />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/logout" component={LogOut} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
