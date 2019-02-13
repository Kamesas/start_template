import React, { Component } from "react";
import stl from "./DayForWeek.module.sass";
import moment from "moment";
import _ from "lodash";
import OneExercise from "./OneExersice";

const currentDay = moment().format("DD MM YYYY");
const currentMonth = moment().format("MM YY");

class DayForWeek extends Component {
  state = {};

  renderDayValue = (nameExercise = "присед") => {
    const { day, workoutVal } = this.props;

    return _.map(workoutVal, (value, i) => {
      if (
        value.date === day.format("DD MM YYYY") &&
        value.exercise === nameExercise
      ) {
        return (
          <div key={i}>
            <div onClick={() => alert(i)}>{value.numberOfTimes}</div>
            <span>{value.time}</span>
          </div>
        );
      }
    });
  };

  renderSum = (nameExercise = "присед") => {
    const { day, workoutVal } = this.props;
    let numberOfTimesSum = [];

    _.map(workoutVal, value => {
      if (
        value.date === day.format("DD MM YYYY") &&
        value.exercise === nameExercise
      ) {
        numberOfTimesSum.push(+value.numberOfTimes);
      }
    });

    return numberOfTimesSum.length > 0
      ? numberOfTimesSum.reduce((f, l) => f + l)
      : 0;
  };

  render() {
    const { day, isShow } = this.props;

    const dayForWeek = stl["day-for-week"];
    const currMonth =
      day.format("MM YY") === currentMonth ? stl["current-month"] : "";
    const currtDay =
      day.format("DD MM YYYY") === currentDay ? stl["current-day"] : "";
    const sunday = stl[day.day() === 0 ? "sunday" : ""];

    return (
      <div className={`${dayForWeek} ${currMonth} ${currtDay} ${sunday}`}>
        <div
          className={stl["day-and-date"]}
          onClick={() => this.props.toggleOpenItem(day.format("DD MM YYYY"))}
        >
          <span>{day.format("dd")}</span> <span>{day.date()}</span>
        </div>

        {isShow ? (
          <div>
            <OneExercise
              stl={stl}
              exerciseName="Приседания"
              renderSum={this.renderSum()}
              renderDayValue={this.renderDayValue()}
            />
            <OneExercise
              stl={stl}
              exerciseName="Отжимания"
              renderSum={this.renderSum("отжимания")}
              renderDayValue={this.renderDayValue("отжимания")}
            />
            <OneExercise
              stl={stl}
              exerciseName="Подтягивания"
              renderSum={this.renderSum("подтягивания")}
              renderDayValue={this.renderDayValue("подтягивания")}
            />
            <OneExercise
              stl={stl}
              exerciseName="Кисть"
              renderSum={this.renderSum("кисть")}
              renderDayValue={this.renderDayValue("кисть")}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default DayForWeek;
