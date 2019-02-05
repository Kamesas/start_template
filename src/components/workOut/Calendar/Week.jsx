import React, { Component } from "react";
import DateSwitch from "../../HOC/DateSwitch";
import leftArrow from "./img/left-arrow.svg";
import rigthArrow from "./img/right-arrow.svg";
import stl from "./Calendar.module.sass";

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

  renderWeek = () => {
    return (
      <div>
        {this.bodyCalendar().map((v, i) => {
          return (
            <div key={v.format("DD MM YYYY")}>
              {v.date()} {/*  */} {v.format("dd")}
              {console.log(v.isoWeek(), " = ", v.isoWeekday())}
              {/* console.log(
                  this.props.moment.isoWeek() === v.isoWeek()
                    ? v.format("dd DD")
                    : null
                ) */}
              {/* console.log(moment.week() - moment.month() * 4) */}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { moment, prevDate, nextDate } = this.props;

    return (
      <div>
        <div className={stl["calendar-header"]}>
          <img
            src={leftArrow}
            alt="leftArrow"
            onClick={prevDate}
            className={stl["left-arrow"]}
          />
          <span>{moment.format("D MMMM YYYY")}</span>
          <img
            src={rigthArrow}
            alt="rigthArrow"
            onClick={nextDate}
            className={stl["rigth-arrow"]}
          />
        </div>
        <div className={stl["render-month"]}>{this.renderMonth()}</div>
      </div>
    );
  }
}

export default DateSwitch(Calendar);
