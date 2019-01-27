import React, { Component } from "react";
import { Input, Icon } from "semantic-ui-react";
import ListOfValue from "./ListOfValue";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ru";
import {
  addUserValues,
  fetchWorkoutValues,
  fetchOpponentValues,
  fetchworkoutUser
} from "../../store/actions/workoutActions";

class AddRepetitions extends Component {
  state = {
    numberOfTimes: ""
  };

  componentDidMount() {
    this.props.fetchworkoutUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.workoutUser !== this.props.workoutUser) {
      this.props.fetchWorkoutValues(this.props.workoutUser.displayName);
    }
  }

  handleChange = (e, { value }) => {
    this.setState({ numberOfTimes: value });
  };

  addValue = () => {
    const newValue = {
      userLogin: this.props.workoutUser.displayName,
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
    if (this.props.workoutValues === "loading") {
      return "Loading";
    }
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
  workoutValues: state.workoutValues,
  workoutUser: state.workoutUser,
  opponentValues: state.opponentValues
});

const mapDispatchToProps = dispatch => ({
  addUserValues: newValue => dispatch(addUserValues(newValue)),
  fetchWorkoutValues: childLoginUser =>
    dispatch(fetchWorkoutValues(childLoginUser)),
  fetchworkoutUser: () => dispatch(fetchworkoutUser()),
  fetchOpponentValues: childLoginUser =>
    dispatch(fetchWorkoutValues(fetchOpponentValues))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRepetitions);
