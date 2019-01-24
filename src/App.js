import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addExample } from "./store/actions/exampleAction";
import WorkOut from "./components/workOut/WorkOut";

class App extends Component {
  actionExample = () => {
    this.props.addExample("Yes, it's work");
  };

  render() {
    return (
      <div className="App">
        <h1>Start template create-react-app</h1>
        {`Store === ${this.props.example}`}
        <WorkOut />
        <button onClick={this.actionExample}>Action example</button>
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
