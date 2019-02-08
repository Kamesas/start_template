import React, { Component } from "react";
import Switch from "react-switch";

// https://www.npmjs.com/package/react-switch

class SwitchInput extends Component {
  state = {
    checked: false
  };

  handleChange = checked => {
    this.setState({ checked });
    this.props.toggleWeek(checked);
  };

  render() {
    return (
      <label htmlFor="normal-switch">
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
        />
      </label>
    );
  }
}

export default SwitchInput;
