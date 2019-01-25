import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Tabs from "./Tabs";

class WorkOut extends Component {
  state = {};
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Column computer={8} mobile={16}>
          I am
          <Tabs />
        </Grid.Column>

        <Grid.Column computer={8} mobile={16}>
          My opponent
        </Grid.Column>
      </Grid>
    );
  }
}

export default WorkOut;
