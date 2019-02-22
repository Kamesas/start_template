import React, { Component, Fragment } from "react";
import { Icon, Menu, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchworkoutUser } from "../store/actions/workoutActions";
import stl from "./toolbar.module.sass";

class Toolbar extends Component {
  state = { isShow: false };

  componentDidMount() {
    this.props.fetchworkoutUser();
  }

  toggleMenu = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    const authOrNot = this.props.workoutUser ? (
      <Fragment>
        <NavLink to="/logout" activeClassName={stl["selected"]}>
          <Menu.Item link>LogOut</Menu.Item>
        </NavLink>
      </Fragment>
    ) : (
      <Fragment>
        <NavLink to="/login" activeClassName={stl["selected"]}>
          <Menu.Item link>LogIn </Menu.Item>
        </NavLink>
        <NavLink to="/signup" activeClassName={stl["selected"]}>
          <Menu.Item link>SignUp </Menu.Item>
        </NavLink>
      </Fragment>
    );
    const { workoutUser } = this.props;
    const { isShow } = this.state;
    return (
      <div className={stl["main-menu"]}>
        <Button
          content="Menu"
          primary
          onClick={this.toggleMenu}
          id={stl["show-mobile-btn"]}
          size="mini"
        />
        <div className={stl["menu-block"]}>
          <Menu
            stackable
            size="mini"
            id={stl[isShow ? "" : "hide-mobile-menu"]}
            onClick={this.toggleMenu}
          >
            <NavLink exact to="/" activeClassName={stl["selected"]}>
              <Menu.Item link>
                <Icon name="home" />
              </Menu.Item>
            </NavLink>
            <NavLink to="/workout" activeClassName={stl["selected"]}>
              <Menu.Item link>WorkOut</Menu.Item>
            </NavLink>
            <NavLink to="/sandbox" activeClassName={stl["selected"]}>
              <Menu.Item link>SandBox</Menu.Item>
            </NavLink>
            {authOrNot}
            <Menu.Item position="right">
              {workoutUser ? workoutUser.email : "Инкогнито"}
            </Menu.Item>
          </Menu>
        </div>
      </div>
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
