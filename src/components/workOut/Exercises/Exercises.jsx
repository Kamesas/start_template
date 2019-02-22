import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import AddRepetitions from "../AddRepetitions/AddRepetitions";
import stl from "./Exercises.module.sass";
import { optionsExercises } from "./db_exercises";

export default class Exercises extends Component {
  state = { value: "присед" };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className={stl["exercises"]}>
        <Select
          compact
          options={optionsExercises}
          defaultValue={this.state.value}
          onChange={this.handleChange}
          className={stl["exercises-select"]}
        />

        <AddRepetitions
          exercise={this.state.value}
          workoutUser={this.props.workoutUser}
          workoutValues={this.props.workoutValues}
        />
      </div>
    );
  }
}
