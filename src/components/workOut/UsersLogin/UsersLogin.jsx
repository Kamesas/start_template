import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";
import _ from "lodash";
import stl from "./UsersLogin.module.sass";

class UsersLogin extends Component {
  state = { menu: false };

  showHideMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  selectedUser = user => {
    this.props.selectedUser(user);
    this.setState({ menu: false });
  };

  render() {
    const { allUsersLogin } = this.props;
    return (
      <div className={stl["opponent-menu"]}>
        <Button
          basic
          color="black"
          onClick={this.showHideMenu}
          className={stl["btn-opponent-menu"]}
        >
          Users
        </Button>

        {this.state.menu ? (
          <List celled animated className={stl["opponent-menu"]}>
            {_.map(allUsersLogin, (user, i) => (
              <List.Item key={i} onClick={() => this.selectedUser(user)}>
                <List.Content>
                  <List.Header as="a" id={stl["opponent-menu-a"]}>
                    {user}
                  </List.Header>
                </List.Content>
              </List.Item>
            ))}
          </List>
        ) : null}
      </div>
    );
  }
}

export default UsersLogin;

// {this.state.menu ? (
//           <ul className={stl["opponent-menu"]}>
//             {_.map(allUsersLogin, (user, i) => (
//               <li key={i} onClick={() => selectedUser(user)}>
//                 {user}
//               </li>
//             ))}
//           </ul>
//         ) : null}
