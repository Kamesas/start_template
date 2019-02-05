import React, { Component } from "react";
import DateSwitch from "../../HOC/DateSwitch";
import stl from "./Calendar.module.sass";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import Month from "./Month/Month";
import Week from "./Week/Week";

class Calendar extends Component {
  state = { isWeek: false };

  bodyCalendar = (step = "month") => {
    const moment = this.props.moment;
    const daysOfMonth = [];

    const lastDayOfWeekInNowMonth = moment
      .clone()
      .endOf(step)
      .day(7)
      .format("DD MM YYYY");

    const mondayOfNowWeek = moment
      .clone()
      .startOf(step)
      .day(1);

    let i = 0;

    if (step === "month") {
      do {
        daysOfMonth.push(mondayOfNowWeek.clone().add(i, "day"));
        i++;
      } while (
        daysOfMonth[daysOfMonth.length - 1].format("DD MM YYYY") !==
        lastDayOfWeekInNowMonth
      );
    } else {
      while (i < 7) {
        daysOfMonth.push(mondayOfNowWeek.clone().add(i, "day"));
        i++;
      }
    }

    return daysOfMonth;
  };

  toggleWeek = () => {
    this.setState({ isWeek: !this.state.isWeek });
  };

  render() {
    const { moment, prevDate, nextDate } = this.props;
    const { isWeek } = this.state;
    return (
      <div>
        <button onClick={this.toggleWeek}>{isWeek ? "Месяц" : "Неделя"}</button>
        <CalendarHeader
          moment={moment}
          prevDate={prevDate}
          nextDate={nextDate}
          stl={stl}
        />

        {isWeek ? (
          <Week bodyCalendar={this.bodyCalendar("week")} />
        ) : (
          <Month bodyCalendar={this.bodyCalendar()} />
        )}
      </div>
    );
  }
}

export default DateSwitch(Calendar);
