import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class Toolbar extends Component {
  state = {};
  render() {
    return (
      <Menu stackable size="mini">
        <NavLink exact to="/">
          <Menu.Item link>
            <Icon name="home" />
          </Menu.Item>
        </NavLink>

        <NavLink to="/workout">
          <Menu.Item link>WorkOut</Menu.Item>
        </NavLink>

        <NavLink to="/login">
          <Menu.Item link>LogIn </Menu.Item>
        </NavLink>

        <NavLink to="/signup">
          <Menu.Item link>SignUp </Menu.Item>
        </NavLink>

        <NavLink to="/logout">
          <Menu.Item link>LogOut</Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}

export default Toolbar;
