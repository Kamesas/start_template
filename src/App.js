import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addExample } from "./store/actions/exampleAction";
import WorkOut from "./components/workOut/WorkOut";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  actionExample = () => {
    this.props.addExample("Yes, it's work");
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/workout" component={WorkOut} />
          </Switch>
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
