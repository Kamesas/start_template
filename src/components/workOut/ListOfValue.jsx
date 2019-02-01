import React, { Component } from "react";
import { List } from "semantic-ui-react";
import ItemOfValue from "./ItemOfValue";
import TotalValue from "./TotalValue";
import _ from "lodash";
import moment from "moment";
import ItemOfValueYerstoday from "./ItemOfValueYerstoday";

class ListOfValue extends Component {
  state = { m: moment() };

  totalValue = date => {
    let t = [];
    _.map(this.props.workoutValues, (value, i) =>
      value.exercise === this.props.exercise && value.date === date
        ? t.push(+value.numberOfTimes)
        : []
    );
    return t.length > 0 ? t.reduce((f, l) => f + l) : 0;
  };

  returnDay = (date, DayComponent) => {
    const { workoutValues, exercise } = this.props;
    return (
      <List horizontal>
        {_.map(workoutValues, (value, i) =>
          value.exercise === exercise && value.date === date ? (
            <List.Item key={i}>
              <DayComponent value={value} id={i} />
            </List.Item>
          ) : (
            0
          )
        )}
      </List>
    );
  };

  downDate = () => {
    this.setState({ m: this.state.m.subtract(1, "days") });
  };

  upDate = () => {
    this.setState({ m: this.state.m.add(1, "days") });
  };

  render() {
    const { m } = this.state;
    const today = m.clone().format("DD MM YYYY");
    const yerstoday = m
      .clone()
      .subtract(1, "days")
      .format("DD MM YYYY");
    const toDaysAgo = m
      .clone()
      .subtract(2, "days")
      .format("DD MM YYYY");

    return (
      <div>
        <div>
          <div>
            <strong>{toDaysAgo}</strong> = {this.totalValue(toDaysAgo)}
          </div>
          {this.totalValue(toDaysAgo) > 0
            ? this.returnDay(toDaysAgo, ItemOfValueYerstoday)
            : "Прогулял"}
        </div>
        <div>
          <div>
            <strong>{yerstoday}</strong> = {this.totalValue(yerstoday)}
          </div>
          {this.totalValue(yerstoday) > 0
            ? this.returnDay(yerstoday, ItemOfValueYerstoday)
            : "Прогулял"}
        </div>
        <div>
          <div>
            <strong>{today}</strong> = {this.totalValue(today)}
          </div>
          {this.totalValue(today) > 0
            ? this.returnDay(today, ItemOfValue)
            : "Прогулял"}
        </div>

        <button onClick={this.downDate}>Down date</button>
        <button onClick={this.upDate}>Up date</button>

        {/* <TotalValue sum={this.totalValue()} exercise={exercise} /> */}
      </div>
    );
  }
}

export default ListOfValue;
