import React, { Component } from "react";
import { optionsExercises } from "../../../../Exercises/db_exercises";
import { Button, Form, Input, Select } from "semantic-ui-react";

class EditForm extends Component {
  state = {
    numberOfTimes: this.props.value.numberOfTimes,
    value: this.props.value.exercise ? this.props.value.exercise : "присед",
    weight: this.props.value.weight ? this.props.value.weight : "",
    error: false
  };

  handleChange = (e, { name, value }) => {
    this.setState({ error: false });
    this.setState({
      [name]: value.replace(/[^\d]/g, "").substr(0, 3)
    });
  };

  handleChangeSelect = (e, { value }) => this.setState({ value });

  updateItem = () => {
    const newValue = {
      userLogin: this.props.workoutUser.displayName,
      date: this.props.value.date,
      time: this.props.value.time,
      exercise: this.state.value,
      numberOfTimes: this.state.numberOfTimes,
      weight: this.state.weight
    };

    if (this.state.numberOfTimes !== "" && this.props.id) {
      this.props.updateItem(this.props.id, newValue);
      alert("Обновлено успешно !");
    } else {
      this.setState({ error: true });
      //alert("no!");
    }

    // this.setState({ numberOfTimes: "", weight: "" });
  };

  render() {
    const { numberOfTimes, weight, value, error } = this.state;
    //console.log(value);
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
            error={error}
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
            //name={exercise}
            defaultValue={value}
            onChange={this.handleChangeSelect}
          />
        </Form.Group>

        <Form.Field control={Button} onClick={this.updateItem}>
          Сохранить
        </Form.Field>
      </Form>
    );
  }
}

export default EditForm;
