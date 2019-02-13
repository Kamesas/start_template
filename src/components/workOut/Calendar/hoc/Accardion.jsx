import React, { Component } from "react";

function Accordeon(WrapComponent) {
  return class DaySwitch extends Component {
    state = { dayId: null };

    toggleOpenItem = dayId => {
      this.setState({
        dayId: dayId === this.state.dayId ? null : dayId
      });
    };

    render() {
      return (
        <WrapComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
          dayId={this.state.dayId}
        />
      );
    }
  };
}

export default Accordeon;
