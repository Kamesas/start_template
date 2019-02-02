import React, { Component } from "react";
import { Input, Icon, Label } from "semantic-ui-react";
import ListOfValue from "./ListOfValue";
import { connect } from "react-redux";
import moment from "moment";
import { addUserValues } from "../../store/actions/workoutActions";
import stl from "./AddRepetitions.module.sass";

class AddRepetitions extends Component {
  state = {
    numberOfTimes: "",
    error: false
  };

  handleChange = (e, { value }) => {
    this.setState({ error: false });
    this.setState({ numberOfTimes: value.replace(/[^\d]/g, "").substr(0, 3) });
  };

  removeError = () => {
    this.setState({ error: false });
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
      this.setState({ error: true });
    }
    this.setState({ numberOfTimes: "" });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.addValue();
    }
  };

  render() {
    const { workoutUser, workoutValues, exercise } = this.props;
    const { error } = this.state;

    return (
      <div onKeyPress={this.handleKeyPress}>
        {workoutUser ? (
          <div>
            <Input
              onChange={this.handleChange}
              className={stl["inpout-add-value"]}
              value={this.state.numberOfTimes}
              error={error ? error : null}
              icon={
                <Icon
                  name="add"
                  color="green"
                  onClick={this.addValue}
                  //onKeyPress={this.handleKeyPress}
                  inverted
                  circular
                  link
                />
              }
              placeholder={exercise}
            />
            {error ? (
              <div id={stl["warning"]}>
                <Label
                  basic
                  color="red"
                  pointing
                  as="a"
                  onClick={this.removeError}
                >
                  Введите значение !
                </Label>
              </div>
            ) : null}
          </div>
        ) : (
          <Label
            basic
            color="teal"
            size="big"
            id={stl["exersise-selected-btn"]}
          >
            {exercise}
          </Label>
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
