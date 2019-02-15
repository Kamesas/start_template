import React, { Component } from "react";
import stl from "./DayForWeek.module.sass";
import moment from "moment";
import _ from "lodash";
import OneExercise from "./OneExersice";
import { optionsExercises } from "../../../Exercises/db_exercises";
import DayToolbar from "./DayToolbar";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import ModalWindow from "./EditDay/ModalWindow";
import {
  delValue,
  updateValue
} from "../../../../../store/actions/workoutActions";
import EditForm from "./EditDay/EditForm";

const currentDay = moment().format("DD MM YYYY");
const currentMonth = moment().format("MM YY");

class DayForWeek extends Component {
  state = { showEditPanel: false };

  toggleShowEditPanel = () => {
    this.setState({ showEditPanel: !this.state.showEditPanel });
  };

  deleteItem = id => {
    const { workoutUser } = this.props;
    this.props.delValue(id, workoutUser.displayName);
  };

  updateItem = (id, value) => {
    const { workoutUser } = this.props;
    console.log(workoutUser.displayName, id, value);
    this.props.updateValue(workoutUser.displayName, id, value);
  };

  renderDayValue = (nameExercise = "присед") => {
    const { day, workoutVal, workoutUser } = this.props;

    return _.map(workoutVal, (value, i) => {
      if (
        value.date === day.format("DD MM YYYY") &&
        value.exercise === nameExercise
      ) {
        return (
          <div key={i}>
            {this.state.showEditPanel && workoutUser ? (
              <div className={stl["edit-panel"]}>
                <ModalWindow>
                  <EditForm
                    id={i}
                    value={value}
                    updateItem={this.updateItem}
                    workoutUser={workoutUser}
                  />
                </ModalWindow>
                <Icon
                  name="remove"
                  onClick={() => this.deleteItem(i)}
                  color="red"
                  size="large"
                />
              </div>
            ) : null}
            <div onClick={this.toggleShowEditPanel}>
              {value.numberOfTimes}{" "}
              {value.weight ? ` (${value.weight}кг)` : null}
            </div>
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
    const { day, isShow, toggleOpenItem, workoutUser } = this.props;

    const dayForWeek = stl["day-for-week"];
    const currMonth =
      day.format("MM YY") === currentMonth ? stl["current-month"] : "";
    const currtDay =
      day.format("DD MM YYYY") === currentDay ? stl["current-day"] : "";
    const sunday = stl[day.day() === 0 ? "sunday" : ""];

    return (
      <div className={`${dayForWeek} ${currMonth} ${currtDay} ${sunday}`}>
        <DayToolbar
          stl={stl}
          day={day}
          toggleOpenItem={toggleOpenItem}
          toggleShowEditPanel={this.toggleShowEditPanel}
          optionsExercises={optionsExercises}
          renderSum={this.renderSum}
          renderDayValue={this.renderDayValue}
          isShow={isShow}
          showEditPanel={this.state.showEditPanel}
          workoutUser={workoutUser}
        />

        {isShow ? (
          <div>
            {optionsExercises.map(exercise => {
              return (
                <OneExercise
                  key={exercise.key}
                  stl={stl}
                  exerciseName={exercise.text}
                  renderSum={this.renderSum(exercise.value)}
                  renderDayValue={this.renderDayValue(exercise.value)}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delValue: (id, usersLogin) => dispatch(delValue(id, usersLogin)),
    updateValue: (userLogin, id, data) =>
      dispatch(updateValue(userLogin, id, data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DayForWeek);
