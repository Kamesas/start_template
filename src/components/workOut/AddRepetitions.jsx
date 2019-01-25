import React, { Component } from "react";
import { Input, Icon } from "semantic-ui-react";
import ListOfValue from "./ListOfValue";
import { connect } from "react-redux";
import { addUserValues } from "../../store/actions/workoutActions";

class AddRepetitions extends Component {
  state = { value: "" };

  handleChange = (e, { value }) => {
    this.setState({ value });
  };

  addValue = () => {
    if (this.state.value !== "") {
      this.props.addUserValues(this.state.value);
    } else {
      alert("Введите значение !");
    }
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <Input
          onChange={this.handleChange}
          value={this.state.value}
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
          <ListOfValue />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUserValues: some => dispatch(addUserValues(some))
});

export default connect(
  null,
  mapDispatchToProps
)(AddRepetitions);
