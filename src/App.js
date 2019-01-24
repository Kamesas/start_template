import React, { Component, Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addExample } from "./store/actions/exampleAction";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Main from "./components/Main";
import WorkOut from "./components/workOut/WorkOut";
import SignUp from "./components/auth/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <ul>
              <li>
                <NavLink exact to="/">
                  Main page
                </NavLink>
              </li>
              <li>
                <NavLink to="/workout">WorkOut</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SignUp</NavLink>
              </li>
            </ul>

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
