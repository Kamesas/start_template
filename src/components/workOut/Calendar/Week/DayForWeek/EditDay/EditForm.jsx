import React, { Component } from "react";
import { optionsExercises } from "../../../../Exercises/db_exercises";
import { Button, Form, Input, Select, TextArea } from "semantic-ui-react";

class EditForm extends Component {
  state = {
    numberOfTimes: this.props.value.numberOfTimes,
    exercise: this.props.value.exercise,
    weight: this.props.value.weight ? this.props.value.weight : ""
    //note: this.props.value.note ? this.props.value.note : ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  updateItem = () => {
    const newValue = {
      userLogin: this.props.workoutUser.displayName,
      date: this.props.value.date,
      time: this.props.value.time,
      exercise: this.state.exercise,
      numberOfTimes: this.state.numberOfTimes,
      weight: this.state.weight
      //note: this.state.note
    };

    if (this.state.numberOfTimes !== "" && this.props.id) {
      this.props.updateItem(this.props.id, newValue);
      alert("Обновлено успешно !");
    } else {
      //this.setState({ error: true });
      alert("no!");
    }

    // this.setState({ numberOfTimes: "", weight: "" });
  };

  render() {
    const { numberOfTimes, weight, exercise, note } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Кол-во повторений"
            placeholder="Кол-во повторений"
            name="numberOfTimes"
            value={numberOfTimes}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Input}
            label="Вес утяжелений"
            placeholder="Вес утяжелений"
            name="weight"
            value={weight}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Select}
            label="Упражнение"
            options={optionsExercises}
            placeholder="Упражнение"
            name={exercise}
            defaultValue={exercise}
            onChange={this.handleChange}
          />
        </Form.Group>

        {/* <Form.Field
          control={TextArea}
          label="Заметка"
          placeholder="Заметка"
          name="note"
          value={note}
          onChange={this.handleChange}
        /> */}

        <Form.Field control={Button} onClick={this.updateItem}>
          Сохранить
        </Form.Field>
      </Form>
    );
  }
}

export default EditForm;
