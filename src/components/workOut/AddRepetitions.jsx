import React, { Component } from "react";
import { Input, Icon } from "semantic-ui-react";
import ListOfValue from "./ListOfValue";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/ru";
import { addUserValues } from "../../store/actions/workoutActions";

class AddRepetitions extends Component {
  state = {
    numberOfTimes: ""
  };

  handleChange = (e, { value }) => {
    //console.log(value..replace(/[^\d]/g, '').substr(0, 13));
    this.setState({ numberOfTimes: value.replace(/[^\d]/g, "").substr(0, 3) });
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
    const { workoutValues, exercise } = this.props;

    return (
      <div>
        {this.props.workoutUser ? (
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
        ) : (
          <Input
            onChange={this.handleChange}
            value={this.state.numberOfTimes}
            disabled
            icon={<Icon name="add" color="green" inverted circular link />}
            placeholder="кол-во повторений"
          />
        )}
        <div>
          {workoutValues === "loading" ? (
            "loading"
          ) : (
            <ListOfValue workoutValues={workoutValues} exercise={exercise} />
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUserValues: newValue => dispatch(addUserValues(newValue))
});

export default connect(
  null,
  mapDispatchToProps
)(AddRepetitions);
