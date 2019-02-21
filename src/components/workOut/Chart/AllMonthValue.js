import moment from "moment";
import _ from "lodash";

function getAllDaysOfMonth(monthNum) {
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
}

const totalMonthValue = (i, exercise = "присед", workoutValues = {}) => {
  let totalMonth = [];

  getAllDaysOfMonth(i).map(value => {
    return _.map(workoutValues, v =>
      v.date === value && v.exercise === exercise
        ? totalMonth.push(+v.numberOfTimes)
        : []
    );
  });

  return totalMonth.length > 0 ? totalMonth.reduce((f, l) => f + l) : 0;
};

export const allMonthValue = (exercise = "присед", workoutValues = {}) => {
  let totalAllMonth = [];

  for (let i = 0; i < 12; i++) {
    totalAllMonth.push(totalMonthValue(i, exercise, workoutValues));
  }

  return totalAllMonth;
};

export const monthName = [
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
