import React, { Component } from "react";
import { optionsExercises } from "../../../Exercises/db_exercises";
import { Button, Form, Input, Select } from "semantic-ui-react";
import moment from "moment";
import { addUserValues } from "../../../../../store/actions/workoutActions";
import { connect } from "react-redux";

class AddNewValueForm extends Component {
  state = {
    numberOfTimes: "",
    value: "присед",
    weight: "",
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
    const { workoutUser } = this.props;
    const newValue = {
      userLogin: workoutUser.displayName,
      date: this.props.day.format("DD MM YYYY"),
      time: moment().format("H:mm:ss"),
      exercise: this.state.value,
      numberOfTimes: this.state.numberOfTimes,
      weight: this.state.weight
    };

    //console.log(newValue);

    if (this.state.numberOfTimes !== "" && workoutUser) {
      this.props.addUserValues(newValue);
      alert("Успешно добавлено !");
    } else {
      this.setState({ error: true });
    }

    this.setState({ numberOfTimes: "", weight: "" });
  };

  render() {
    const { numberOfTimes, weight, value } = this.state;
    // console.log(this.props.day.format("DD MM YYYY"));
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
            error={this.state.error}
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

const mapDispatchToProps = dispatch => ({
  addUserValues: newValue => dispatch(addUserValues(newValue))
});

export default connect(
  null,
  mapDispatchToProps
)(AddNewValueForm);
