import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/workoutActions";

class LogOut extends Component {
  state = {};

  logOut = () => {
    this.props.logOut();
  };

  render() {
    return (
      <Button type="submit" onClick={this.logOut}>
        LogOut
      </Button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  null,
  mapDispatchToProps
)(LogOut);
