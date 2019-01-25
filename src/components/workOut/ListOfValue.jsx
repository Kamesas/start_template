import React, { Component } from "react";
import { List } from "semantic-ui-react";
import ItemOfValue from "./ItemOfValue";
import TotalValue from "./TotalValue";

class ListOfValue extends Component {
  state = {};
  render() {
    return (
      <div>
        <List horizontal>
          <List.Item>
            <ItemOfValue />
          </List.Item>
          <List.Item>
            <ItemOfValue />
          </List.Item>
        </List>
        <div>
          <TotalValue />
        </div>
      </div>
    );
  }
}

export default ListOfValue;
