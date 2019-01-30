import React, { Component } from "react";
import { Icon, Label } from "semantic-ui-react";

class ItemOfValueYerstoday extends Component {
  render() {
    const { value } = this.props;

    return (
      <div>
        <Label image>
          {value.numberOfTimes && value.numberOfTimes}{" "}
          <Icon name="check" color="green" />
        </Label>
      </div>
    );
  }
}

export default ItemOfValueYerstoday;
