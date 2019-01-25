import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addExample } from "./store/actions/exampleAction";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import WorkOut from "./components/workOut/WorkOut";
import SignUp from "./components/auth/SignUp";
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
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  example: state.example
});

const mapDispatchToProps = dispatch => ({
  addExample: some => dispatch(addExample(some))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
