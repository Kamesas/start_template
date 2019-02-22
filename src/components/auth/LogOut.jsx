import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/workoutActions";
import { Redirect } from "react-router-dom";

class LogOut extends Component {
  state = { redirect: false };

  logOut = () => {
    this.props.logOut();
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/login" />;
    }
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
