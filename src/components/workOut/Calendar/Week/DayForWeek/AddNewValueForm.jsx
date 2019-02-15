import React, { Component } from "react";
import { optionsExercises } from "../../../Exercises/db_exercises";
import { Button, Form, Input, Select } from "semantic-ui-react";
import moment from "moment";
import { addUserValues } from "../../../../../store/actions/workoutActions";
import { connect } from "react-redux";

class AddNewValueForm extends Component {
  state = {
    numberOfTimes: "",
    exercise: "присед",
    weight: ""
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  updateItem = () => {
    const { workoutUser } = this.props;
    const newValue = {
      userLogin: workoutUser.displayName,
      date: this.props.day.format("DD MM YYYY"),
      time: moment().format("H:mm:ss"),
      exercise: this.state.exercise,
      numberOfTimes: this.state.numberOfTimes,
      weight: this.state.weight
    };

    console.log(newValue);

    if (this.state.numberOfTimes !== "" && workoutUser) {
      this.props.addUserValues(newValue);
    } else {
      //this.setState({ error: true });
      alert("no!");
    }

    this.setState({ numberOfTimes: "", weight: "" });
  };

  render() {
    const { numberOfTimes, weight, exercise } = this.state;
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

        <Form.Field control={Button} onClick={this.updateItem}>
          Сохранить
        </Form.Field>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUserValues: newValue => dispatch(addUserValues(newValue))
});

export default connect(
  null,
  mapDispatchToProps
)(AddNewValueForm);
