import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Tabs from "./Tabs";
//import squat from "../../img/squat.svg";

class WorkOut extends Component {
  state = {};
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Column computer={8} mobile={16}>
          {/* <img src={squat} className="App-logo" alt="squat" /> */}
          I am
          <Tabs />
        </Grid.Column>

        <Grid.Column computer={8} mobile={16}>
          My opponent
          <Tabs />
        </Grid.Column>
      </Grid>
    );
  }
}

export default WorkOut;
