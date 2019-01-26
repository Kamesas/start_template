import React, { Component } from "react";
import { Icon, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { delValue } from "../../store/actions/workoutActions";

class ItemOfValue extends Component {
  state = {};
  daleteItem = () => {
    this.props.delValue(this.props.id);
  };
  render() {
    const { value } = this.props;

    return (
      <div>
        <Label image>
          {/* <Icon name="check" color="green" /> */}
          {value.numberOfTimes && value.numberOfTimes}
          {/* value.exercise && value.exercise */}
          <Icon name="delete" onClick={this.daleteItem} color="red" />
        </Label>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delValue: id => dispatch(delValue(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ItemOfValue);
