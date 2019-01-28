import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";
import _ from "lodash";

class UsersLogin extends Component {
  state = { menu: false };

  showHideMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    const { allUsersLogin, selectedUser } = this.props;
    return (
      <div>
        <Button floated="right" onClick={this.showHideMenu}>
          Menu users
        </Button>

        {this.state.menu ? (
          <List celled>
            {_.map(allUsersLogin, (user, i) => (
              <List.Item key={i} onClick={() => selectedUser(user)}>
                <List.Content>
                  <List.Header as="a">{user}</List.Header>
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
