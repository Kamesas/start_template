import React, { Component } from "react";
import { List } from "semantic-ui-react";
import ItemOfValue from "./ItemOfValue";
import TotalValue from "./TotalValue";
import _ from "lodash";

class ListOfValue extends Component {
  state = {};
  render() {
    const { workoutValues } = this.props;

    if (workoutValues === "loading") {
      return "loading";
    }
    let t = [];

    return (
      <div>
        <List horizontal>
          {_.map(
            workoutValues,
            (value, i) =>
              value.exercise === this.props.exercise && (
                <List.Item key={i}>
                  <ItemOfValue value={value} />
                  {t.push(+value.numberOfTimes)}
                </List.Item>
              )
          )}
        </List>
        <div>
          <TotalValue sum={t} exercise={this.props.exercise} />
        </div>
      </div>
    );
  }
}

export default ListOfValue;
