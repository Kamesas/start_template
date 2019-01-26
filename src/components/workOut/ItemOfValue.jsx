import React, { Component } from "react";
import { Icon, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { delValue } from "../../store/actions/workoutActions";

class ItemOfValue extends Component {
  state = {};
  daleteItem = () => {
    this.props.delValue(this.props.id, this.props.value.userLogin);
  };
  render() {
    const { value } = this.props;
    return (
      <div>
        <Label image>
          {value.numberOfTimes && value.numberOfTimes}
          <Icon name="delete" onClick={this.daleteItem} color="red" />
        </Label>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delValue: (id, userLogin) => dispatch(delValue(id, userLogin))
});

export default connect(
  null,
  mapDispatchToProps
)(ItemOfValue);
