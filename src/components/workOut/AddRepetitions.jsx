import React, { Component } from "react";
import { Input, Icon } from "semantic-ui-react";
import ListOfValue from "./ListOfValue";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ru";
import {
  addUserValues,
  fetchWorkoutValues
} from "../../store/actions/workoutActions";

class AddRepetitions extends Component {
  state = {
    numberOfTimes: ""
  };

  componentDidMount() {
    this.props.fetchWorkoutValues();
  }

  handleChange = (e, { value }) => {
    this.setState({ numberOfTimes: value });
  };

  addValue = () => {
    const newValue = {
      date: moment().format("DD MM YYYY"),
      time: moment().format("H:mm:ss"),
      exercise: this.props.exercise,
      numberOfTimes: this.state.numberOfTimes
    };

    if (this.state.numberOfTimes !== "") {
      this.props.addUserValues(newValue);
    } else {
      alert("Введите значение !");
    }
    this.setState({ numberOfTimes: "" });
  };

  render() {
    return (
      <div>
        <Input
          onChange={this.handleChange}
          value={this.state.numberOfTimes}
          icon={
            <Icon
              name="add"
              color="green"
              onClick={this.addValue}
              inverted
              circular
              link
            />
          }
          placeholder="кол-во повторений"
        />
        <div>
          <ListOfValue
            workoutValues={this.props.workoutValues}
            exercise={this.props.exercise}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workoutValues: state.workoutValues
});

const mapDispatchToProps = dispatch => ({
  addUserValues: newValue => dispatch(addUserValues(newValue)),
  fetchWorkoutValues: () => dispatch(fetchWorkoutValues())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRepetitions);
