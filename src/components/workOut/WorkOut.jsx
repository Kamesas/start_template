import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Tabs from "./Tabs";
import { connect } from "react-redux";
//import moment from "moment";
import "moment/locale/ru";
import UsersLogin from "./UsersLogin";
import {
  addUserValues,
  fetchWorkoutValues,
  fetchOpponentValues,
  fetchworkoutUser,
  usersLogin
} from "../../store/actions/workoutActions";

class WorkOut extends Component {
  state = { userLogin: "Test" };

  componentDidMount() {
    this.props.fetchworkoutUser();
    this.props.fetchOpponentValues(this.state.userLogin);
    this.props.usersLogin();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.workoutUser !== this.props.workoutUser) {
      this.props.fetchWorkoutValues(this.props.workoutUser.displayName);
    }
    if (prevState.userLogin !== this.state.userLogin) {
      this.props.fetchOpponentValues(this.state.userLogin);
    }
  }

  selectedUser = userLogin => {
    this.setState({ userLogin });
  };

  render() {
    const {
      workoutValues,
      workoutUser,
      opponentValues,
      allUsersLogin
    } = this.props;

    if (workoutValues === "loading") {
      return "Loading";
    }
    // console.log("workoutValues", workoutValues);
    // console.log("workoutUser", workoutUser);
    ///console.log("opponentValues", opponentValues);
    //console.log("allUsersLogin", allUsersLogin);
    return (
      <Grid divided="vertically">
        <Grid.Column computer={8} mobile={16}>
          <h3>{workoutUser && workoutUser.displayName}</h3>

          <Tabs workoutUser={workoutUser} workoutValues={workoutValues} />
        </Grid.Column>

        <Grid.Column computer={8} mobile={16}>
          <h3>My opponent</h3>
          <UsersLogin
            allUsersLogin={allUsersLogin}
            selectedUser={this.selectedUser}
          />
          <Tabs workoutValues={opponentValues} />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  workoutValues: state.workoutValues,
  workoutUser: state.workoutUser,
  opponentValues: state.opponentValues,
  allUsersLogin: state.usersLogin
});

const mapDispatchToProps = dispatch => ({
  addUserValues: newValue => dispatch(addUserValues(newValue)),
  fetchworkoutUser: () => dispatch(fetchworkoutUser()),

  fetchWorkoutValues: childLoginUser =>
    dispatch(fetchWorkoutValues(childLoginUser)),

  fetchOpponentValues: childLoginUser =>
    dispatch(fetchOpponentValues(childLoginUser)),

  usersLogin: () => dispatch(usersLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkOut);
