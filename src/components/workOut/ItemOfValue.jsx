import React, { Component } from "react";
import { Icon, Label } from "semantic-ui-react";

class ItemOfValue extends Component {
  state = {};
  daleteItem = () => {
    alert("del");
  };
  render() {
    return (
      <div>
        <Label image>
          <Icon name="check" color="green" />
          50
          <Icon name="delete" onClick={this.daleteItem} color="red" />
        </Label>
      </div>
    );
  }
}

export default ItemOfValue;
