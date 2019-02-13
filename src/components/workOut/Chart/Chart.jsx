import React from "react";
import { Line } from "react-chartjs-2";
import { monthName } from "./allMonthValue";
import { datasetsForChartDate } from "./dateForChart";
import { optionsExercises } from "../Exercises/db_exercises";

const Chart = ({ workoutValues }) => {
  const datasetsItems = optionsExercises.map(exercise => {
    return datasetsForChartDate(exercise.value, exercise.color, workoutValues);
  });

  const data = {
    labels: monthName,
    datasets: datasetsItems
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Chart;
