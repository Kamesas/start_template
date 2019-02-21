import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ru";

// https://momentjs.com/docs/#/manipulating/  ===>  chapter Manipulate

function DateSwitch(WrapComponent) {
  return class ChangeMoment extends Component {
    state = { moment: moment() };

    nextMonth = () => {
      this.setState({ moment: this.state.moment.add(1, "month") });
    };

    nextWeek = () => {
      this.setState({ moment: this.state.moment.add(1, "week") });
    };

    prevMonth = () => {
      this.setState(({ moment }) => ({
        moment: moment.subtract(1, "month")
      }));
    };

    prevWeek = () => {
      this.setState(({ moment }) => ({
        moment: moment.subtract(1, "week")
      }));
    };

    refreshDate = () => {
      this.setState({ moment: moment() });
    };

    render() {
      return (
        <WrapComponent
          {...this.props}
          {...this.state}
          nextMonth={this.nextMonth}
          prevMonth={this.prevMonth}
          refreshDate={this.refreshDate}
          moment={this.state.moment}
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
        />
      );
    }
  };
}

export default DateSwitch;
