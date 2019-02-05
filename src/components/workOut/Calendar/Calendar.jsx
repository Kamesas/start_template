import React, { Component } from "react";
import DateSwitch from "../../HOC/DateSwitch";
import stl from "./Calendar.module.sass";
import CalendarHeader from "./CalendarHeader";

class Calendar extends Component {
  state = {};

  bodyCalendar = (step = "month") => {
    const m = this.props.moment;
    const daysOfMonth = [];
    const endMonth = m.endOf(step).date();

    let i = 0;
    while (i < endMonth) {
      daysOfMonth.push(
        m
          .clone()
          .startOf(step)
          .day(1)
          .add(i, "day")
      );
      i++;
    }

    return daysOfMonth;
  };

  renderMonth = () => {
    return this.bodyCalendar().map((v, i) => {
      return (
        <div key={v.format("DD MM YYYY")}>
          {v.date()} === {v.format("dd")}
        </div>
      );
    });
  };

  render() {
    const { moment, prevDate, nextDate } = this.props;

    return (
      <div>
        <CalendarHeader
          moment={moment}
          prevDate={prevDate}
          nextDate={nextDate}
          stl={stl}
        />
        <div className={stl["render-month"]}>{this.renderMonth()}</div>
      </div>
    );
  }
}

export default DateSwitch(Calendar);
