import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Grid, Container } from "semantic-ui-react";
import stl from "./MainScreen.module.sass";
import Header from "./header/Header";
import RightHeader from "./header/RightHeader";

class MainScreen extends Component {
  state = {};
  render() {
    return (
      <Container className={stl["main-screen"]}>
        <Grid divided="vertically">
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Header />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <RightHeader />
              {/* <Link to="/workout">to WorkOut</Link> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default MainScreen;
