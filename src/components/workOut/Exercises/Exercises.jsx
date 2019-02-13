import React, { Component } from "react";
import { Form, Radio, Select } from "semantic-ui-react";
import AddRepetitions from "../AddRepetitions/AddRepetitions";
import stl from "./Exercises.module.sass";

const options = [
  { key: "squad", text: "Присед", value: "присед" },
  { key: "chin-ups", text: "Подтягивания", value: "подтягивания" },
  { key: "pushups", text: "Отжимания", value: "отжимания" },
  { key: "bars", text: "Брусья", value: "брусья" },
  { key: "dumbbells", text: "Гантели", value: "гантели" },
  { key: "hand", text: "Кисть", value: "кисть" },
  { key: "rope", text: "Скакалка", value: "скакалка" }
];

export default class Exercises extends Component {
  state = { value: "присед" };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    console.log(this.state.value);
    return (
      <div className={stl["exercises"]}>
        <Select
          compact
          options={options}
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
