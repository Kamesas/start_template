import React, { Component } from "react";
import { Icon, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { delValue } from "../../../store/actions/workoutActions";

class ItemOfValue extends Component {
  state = {};
  daleteItem = () => {
    if (this.props.workoutUser.displayName === this.props.value.userLogin) {
      this.props.delValue(this.props.id, this.props.value.userLogin);
    } else {
      alert(
        "АГА!!! Хотел удалить данные своего соперника ??? Хрена, за своими следи !"
      );
    }
  };
  render() {
    const { value } = this.props;

    return (
      <div>
        <Label image size="medium">
          {value.numberOfTimes && value.numberOfTimes}
          <Icon name="delete" onClick={this.daleteItem} color="red" />
        </Label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workoutUser: state.workoutUser
});

const mapDispatchToProps = dispatch => ({
  delValue: (id, userLogin) => dispatch(delValue(id, userLogin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemOfValue);
