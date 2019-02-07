import React, { Component } from "react";

class DayFromMonth extends Component {
  state = {};
  render() {
    const { day } = this.props;
    return (
      <React.Fragment>
        <span>{day.date()}</span>
      </React.Fragment>
    );
  }
}

export default DayFromMonth;
