import React, { Component } from "react";
import { Input, Icon, Label } from "semantic-ui-react";
import ListOfValue from "../ListOfValue/ListOfValue";
import { connect } from "react-redux";
import moment from "moment";
import { addUserValues } from "../../../store/actions/workoutActions";
import stl from "./AddRepetitions.module.sass";

class AddRepetitions extends Component {
  state = {
    numberOfTimes: "",
    weight: "",
    error: false
  };

  handleChange = (e, { name, value }) => {
    this.setState({ error: false });
    this.setState({
      [name]: value.replace(/[^\d]/g, "").substr(0, 3)
    });
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
      numberOfTimes: this.state.numberOfTimes,
      weight: this.state.weight
    };

    if (this.state.numberOfTimes !== "") {
      this.props.addUserValues(newValue);
    } else {
      this.setState({ error: true });
    }
    this.setState({ numberOfTimes: "", weight: "" });
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
            <div className={stl["div-of-inputs"]}>
              <Input
                name="weight"
                onChange={this.handleChange}
                className={stl["input-weight"]}
                value={this.state.weight}
                error={error ? error : null}
                placeholder="вес"
              />
              <Input
                onChange={this.handleChange}
                className={stl["input-numberOfTimes"]}
                value={this.state.numberOfTimes}
                error={error ? error : null}
                name="numberOfTimes"
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
                placeholder={exercise}
              />
            </div>
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
