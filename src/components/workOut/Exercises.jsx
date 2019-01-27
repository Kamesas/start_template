import React, { Component } from "react";
import { Form, Radio } from "semantic-ui-react";
import AddRepetitions from "./AddRepetitions";

export default class Exercises extends Component {
  state = { value: "присед" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div>
        <Form>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Присед"
                name="radioGroup"
                value="присед"
                checked={this.state.value === "присед"}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Подтягиваня"
                name="radioGroup"
                value="подтягивания"
                checked={this.state.value === "подтягивания"}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Отжимания"
                name="radioGroup"
                value="отжимания"
                checked={this.state.value === "отжимания"}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <b>{this.state.value}</b>
          </Form.Field>
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
