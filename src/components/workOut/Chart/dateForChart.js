import { allMonthValue } from "./AllMonthValue";

export const datasetsForChartDate = (
  exercise = "присед",
  color = "rgba(75,192,192,0.4)",
  workoutValues = {}
) => {
  return {
    label: exercise,
    fill: false,
    backgroundColor: color,
    borderColor: color,
    data: allMonthValue(exercise, workoutValues)
  };
};
