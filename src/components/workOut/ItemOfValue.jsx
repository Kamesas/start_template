import React, { Component } from "react";
import { Icon, Label } from "semantic-ui-react";

class ItemOfValue extends Component {
  state = {};
  daleteItem = () => {
    alert("del");
  };
  render() {
    const { value } = this.props;
    //console.log(value);
    return (
      <div>
        <Label image>
          {/* <Icon name="check" color="green" /> */}
          {value.numberOfTimes && value.numberOfTimes}
          {/* value.exercise && value.exercise */}
          <Icon name="delete" onClick={this.daleteItem} color="red" />
        </Label>
      </div>
    );
  }
}

export default ItemOfValue;
