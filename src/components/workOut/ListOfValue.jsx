import React from "react";
import { List } from "semantic-ui-react";
import ItemOfValue from "./ItemOfValue";

const ListOfValue = () => (
  <List horizontal>
    <List.Item>
      <ItemOfValue />
    </List.Item>
    <List.Item>
      <ItemOfValue />
    </List.Item>
  </List>
);

export default ListOfValue;
