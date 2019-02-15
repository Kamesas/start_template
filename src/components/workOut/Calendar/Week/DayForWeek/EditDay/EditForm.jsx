import React, { Component } from "react";
import { optionsExercises } from "../../../../Exercises/db_exercises";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";

class EditForm extends Component {
  state = { options: "отжимания" };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Кол-во повторений"
            placeholder="Кол-во повторений"
          />
          <Form.Field
            control={Input}
            label="Вес утяжелений"
            placeholder="Вес утяжелений"
          />
          <Form.Field
            control={Select}
            label="Упражнение"
            options={optionsExercises}
            placeholder="Упражнение"
            defaultValue={this.state.options}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label="One"
            value="1"
            checked={value === "1"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Two"
            value="2"
            checked={value === "2"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Three"
            value="3"
            checked={value === "3"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="About"
          placeholder="Tell us more about you..."
        />
        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    );
  }
}

export default EditForm;
