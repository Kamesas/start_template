import React, { Component } from "react";
import { Form, Radio } from "semantic-ui-react";
import AddRepetitions from "../AddRepetitions/AddRepetitions";
import stl from "./Exercises.module.sass";

export default class Exercises extends Component {
  state = { value: "присед" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className={stl["exercises"]}>
        <Form>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Присед"
                name="radioGroup"
                value="присед"
                checked={this.state.value === "присед"}
                onChange={this.handleChange}
                className={stl[this.state.value === "присед" ? "active" : ""]}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Подтягиваня"
                name="radioGroup"
                value="подтягивания"
                checked={this.state.value === "подтягивания"}
                onChange={this.handleChange}
                className={
                  stl[this.state.value === "подтягивания" ? "active" : ""]
                }
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Отжимания"
                name="radioGroup"
                value="отжимания"
                checked={this.state.value === "отжимания"}
                onChange={this.handleChange}
                className={
                  stl[this.state.value === "отжимания" ? "active" : ""]
                }
              />
            </Form.Field>
          </Form.Group>
        </Form>

        <AddRepetitions
          exercise={this.state.value}
          workoutUser={this.props.workoutUser}
          workoutValues={this.props.workoutValues}
        />
      </div>
    );
  }
}
