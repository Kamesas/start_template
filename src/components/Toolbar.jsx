import React, { Component, Fragment } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchworkoutUser } from "../store/actions/workoutActions";
//import stl from "./toolbar.module.sass";

class Toolbar extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchworkoutUser();
  }

  render() {
    const authOrNot = this.props.workoutUser ? (
      <Fragment>
        <NavLink to="/workout">
          <Menu.Item link>WorkOut</Menu.Item>
        </NavLink>
        <NavLink to="/logout">
          <Menu.Item link>LogOut</Menu.Item>
        </NavLink>
      </Fragment>
    ) : (
      <Fragment>
        <NavLink to="/login">
          <Menu.Item link>LogIn </Menu.Item>
        </NavLink>
        <NavLink to="/signup">
          <Menu.Item link>SignUp </Menu.Item>
        </NavLink>
      </Fragment>
    );
    const { workoutUser } = this.props;
    return (
      <Menu stackable size="mini">
        <NavLink exact to="/">
          <Menu.Item link>
            <Icon name="home" />
          </Menu.Item>
        </NavLink>
        {authOrNot}
        <Menu.Item position="right">
          {workoutUser ? workoutUser.email : "Инкогнито"}
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  workoutUser: state.workoutUser
});

const mapDispatchToProps = dispatch => ({
  fetchworkoutUser: () => dispatch(fetchworkoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
