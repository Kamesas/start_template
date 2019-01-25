import React, { Component } from "react";
import { Input, Icon } from "semantic-ui-react";

class AddRepetitions extends Component {
  state = {};
  addValue = () => {
    alert("yes");
  };
  render() {
    return (
      <Input
        icon={
          <Icon name="search" onClick={this.addValue} inverted circular link />
        }
        placeholder="кол-во повторений"
      />
    );
  }
}

export default AddRepetitions;
