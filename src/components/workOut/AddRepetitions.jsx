import React, { Component } from "react";
import { Input, Icon } from "semantic-ui-react";
import ListOfValue from "./ListOfValue";

class AddRepetitions extends Component {
  state = {};
  addValue = () => {
    alert("yes");
  };
  render() {
    return (
      <div>
        <Input
          icon={
            <Icon
              name="search"
              onClick={this.addValue}
              inverted
              circular
              link
            />
          }
          placeholder="кол-во повторений"
        />
        <div>
          <ListOfValue />
        </div>
      </div>
    );
  }
}

export default AddRepetitions;
