import React, { Component } from "react";
import { List } from "semantic-ui-react";
import ItemOfValue from "./ItemOfValue";
import TotalValue from "./TotalValue";
import _ from "lodash";
import moment from "moment";

class ListOfValue extends Component {
  state = {};

  totalValue = () => {
    let t = [];
    _.map(
      this.props.workoutValues,
      (value, i) =>
        value.exercise === this.props.exercise && t.push(+value.numberOfTimes)
    );
    return t;
  };

  render() {
    const { workoutValues } = this.props;

    if (workoutValues === "loading") {
      return "loading";
    }

    return (
      <div>
        <List horizontal>
          {_.map(workoutValues, (value, i) =>
            value.exercise === this.props.exercise &&
            value.date === moment().format("DD MM YYYY") ? (
              <List.Item key={i}>
                <ItemOfValue value={value} id={i} />
              </List.Item>
            ) : null
          )}
        </List>
        <div>
          <TotalValue sum={this.totalValue()} exercise={this.props.exercise} />
        </div>
      </div>
    );
  }
}

export default ListOfValue;
