import React, { Component } from "react";
import { Line } from "react-chartjs-2";
//import { data } from "./dateForChart";
import moment from "moment";
import "moment/locale/ru";
import _ from "lodash";
import DateSwitch from "../../HOC/DateSwitch";

class Chart extends Component {
  state = { m: moment(), totelValueMonthAquare: [] };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.m !== this.state.m) {
  //     this.getDaysOfMonth();
  //   }
  // }

  //one
  // getDaysOfMonth = () => {
  //   const m = this.props.moment;
  //   let daysOfMonth = [];
  //   const endMonth = m.endOf("month").date();
  //   let i = 0;
  //   while (i < endMonth) {
  //     daysOfMonth.push(
  //       m
  //         .startOf("month")
  //         .add(i, "day")
  //         .format("DD MM YYYY")
  //     );
  //     i++;
  //   }

  //   return daysOfMonth;
  // };

  // totalMonthValue = () => {
  //   let totalMonth = [];

  //   this.getDaysOfMonth().map(value => {
  //     return _.map(this.props.workoutValues, (v, i) =>
  //       v.date === value && v.exercise === "присед"
  //         ? totalMonth.push(+v.numberOfTimes)
  //         : []
  //     );
  //   });

  //   return totalMonth.length > 0 ? totalMonth.reduce((f, l) => f + l) : 0;
  // };

  //all

  AllgetDaysOfMonth = monthNum => {
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

  AlltotalMonthValue = i => {
    let totalMonth = [];

    this.AllgetDaysOfMonth(i).map(value => {
      return _.map(this.props.workoutValues, v =>
        v.date === value && v.exercise === "присед"
          ? totalMonth.push(+v.numberOfTimes)
          : []
      );
    });

    return totalMonth.length > 0 ? totalMonth.reduce((f, l) => f + l) : 0;
  };

  sumMonthArr = () => {
    let totalMonth = [];
    for (let i = 0; i < 12; i++) {
      totalMonth.push(this.AlltotalMonthValue(i));
    }
    return totalMonth;
  };

  render() {
    //const { workoutUser, workoutValues } = this.props;

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
          data: this.sumMonthArr()
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

export default DateSwitch(Chart);
