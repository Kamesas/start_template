import React from "react";
import { Line } from "react-chartjs-2";
import { monthName } from "./allMonthValue";
import { datasetsForChartDate } from "./dateForChart";

const Chart = ({ workoutValues }) => {
  const data = {
    labels: monthName,
    datasets: [
      datasetsForChartDate("присед", "blue", workoutValues),
      datasetsForChartDate("подтягивания", "red", workoutValues),
      datasetsForChartDate("отжимания", "grey", workoutValues),
      datasetsForChartDate("кисть", "orange", workoutValues)
    ]
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Chart;
