import React, { Component } from "react";
import { Line } from "react-chartjs-2";
//import { data } from "./dateForChart";
import moment from "moment";
import "moment/locale/ru";
import _ from "lodash";

class Chart extends Component {
  state = {};

  // totalValue = date => {
  //   let t = [];
  //   _.map(this.props.workoutValues, (value, i) =>
  //     value.exercise === this.props.exercise && value.date === date
  //       ? t.push(+value.numberOfTimes)
  //       : []
  //   );
  //   return t.length > 0 ? t.reduce((f, l) => f + l) : 0;
  // };

  getDaysOfMonth = numMonth => {
    const m = moment();
    let daysOfMonth = [];

    const endMonth = m
      .month(numMonth)
      .endOf("month")
      .date();

    let i = 0;

    while (i < endMonth) {
      daysOfMonth.push(
        m
          .month(numMonth)
          .startOf("month")
          .add(i, "day")
          .format("DD MM YYYY")
      );

      i++;
    }

    return daysOfMonth;
  };

  totalValue = date => {
    let t = [];

    _.map(this.props.workoutValues, (value, i) =>
      value.date === date ? t.push(+value.numberOfTimes) : []
    );
    return t.length > 0 ? t.reduce((f, l) => f + l) : 0;
  };

  render() {
    const { workoutUser, workoutValues } = this.props;
    const today = moment().format("DD MM YYYY");
    console.log(this.getDaysOfMonth(0));

    const data = {
      labels: this.getDaysOfMonth(1),
      datasets: [
        {
          label: "Присед",
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          data: [65, 59, 80, 81, 56, 110, 11]
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
