import React, { Component } from "react";
import stl from "./DayForWeek.module.sass";
import moment from "moment";

const currentDay = moment().format("DD MM YYYY");
const currentMonth = moment().format("MM YY");

class DayForWeek extends Component {
  state = {};
  render() {
    const { day } = this.props;

    const dayForWeek = stl["day-for-week"];
    const currMonth =
      day.format("MM YY") === currentMonth ? stl["current-month"] : "";
    const currtDay =
      day.format("DD MM YYYY") === currentDay ? stl["current-day"] : "";

    return (
      <div className={`${dayForWeek} ${currMonth} ${currtDay}`}>
        {day.format("dd")} {day.date()}
      </div>
    );
  }
}

export default DayForWeek;
