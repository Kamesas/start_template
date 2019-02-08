import React, { Component } from "react";
import DateSwitch from "../../HOC/DateSwitch";
import stl from "./Calendar.module.sass";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import Month from "./Month/Month";
import Week from "./Week/Week";
import SwitchInput from "./otherComponent/SwitchInput";
import refresh from "./img/refresh.svg";

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

  toggleWeek = state => {
    this.setState({ isWeek: state });
  };

  render() {
    const {
      moment,
      prevWeek,
      prevMonth,
      nextWeek,
      nextMonth,
      refreshDate
    } = this.props;
    const { isWeek } = this.state;
    return (
      <div className={stl["calendar"]}>
        <div className={stl["toolbar"]}>
          <div className={stl["toolbar-switch-container"]}>
            <SwitchInput isWeek={isWeek} toggleWeek={this.toggleWeek} />
          </div>
          <img src={refresh} alt="refresh" onClick={refreshDate} />
        </div>
        <div className={stl["calendar-header-container"]}>
          <CalendarHeader
            moment={moment}
            prevDate={!isWeek ? prevWeek : prevMonth}
            nextDate={!isWeek ? nextWeek : nextMonth}
            stl={stl}
          />
        </div>

        {!isWeek ? (
          <Week bodyCalendar={this.bodyCalendar("week")} />
        ) : (
          <Month bodyCalendar={this.bodyCalendar()} />
        )}
      </div>
    );
  }
}

export default DateSwitch(Calendar);
