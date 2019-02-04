import React, { Component } from "react";
import { Line } from "react-chartjs-2";
//import { data } from "./dateForChart";
import moment from "moment";
//import "moment/locale/ru";
import _ from "lodash";
//import DateSwitch from "../../HOC/DateSwitch";

class Chart extends Component {
  getAllDaysOfMonth = monthNum => {
    const m = moment();
    let daysOfMonth = [];
    const endMonth = m
      .month(monthNum)
      .endOf("month")
      .date();
    let i = 0;
    while (i < endMonth) {
      daysOfMonth.push(
        m
          .month(monthNum)
          .startOf("month")
          .add(i, "day")
          .format("DD MM YYYY")
      );
      i++;
    }

    return daysOfMonth;
  };

  totalMonthValue = (i, exercise = "присед", workoutValues = {}) => {
    let totalMonth = [];
    this.getAllDaysOfMonth(i).map(value => {
      return _.map(workoutValues, v =>
        v.date === value && v.exercise === exercise
          ? totalMonth.push(+v.numberOfTimes)
          : []
      );
    });
    return totalMonth.length > 0 ? totalMonth.reduce((f, l) => f + l) : 0;
  };

  AllMonthValue = (exercise = "присед", workoutValues = {}) => {
    let totalAllMonth = [];
    for (let i = 0; i < 12; i++) {
      totalAllMonth.push(this.totalMonthValue(i, exercise, workoutValues));
    }
    return totalAllMonth;
  };

  render() {
    const monthName = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Мая",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ];

    const data = {
      labels: monthName,
      datasets: [
        {
          label: "Присед",
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          data: this.AllMonthValue("присед", this.props.workoutValues)
        }
      ]
    };

    return (
      <div>
        <Line data={data} />
      </div>
    );
  }
}

export default Chart;
