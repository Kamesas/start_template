import React, { Component, Fragment } from "react";
import { List } from "semantic-ui-react";
import ItemOfValue from "./ItemOfValue";
import TotalValue from "./TotalValue";
import _ from "lodash";
import moment from "moment";
import ItemOfValueYerstoday from "./ItemOfValueYerstoday";

class ListOfValue extends Component {
  state = {};

  totalValue = () => {
    let t = [];
    _.map(this.props.workoutValues, (value, i) =>
      value.exercise === this.props.exercise &&
      value.date === moment().format("DD MM YYYY")
        ? t.push(+value.numberOfTimes)
        : []
    );
    return t;
  };

  render() {
    const { workoutValues, exercise } = this.props;
    const today = moment().format("DD MM YYYY");
    const yerstodayMoment = moment()
      .subtract(1, "days")
      .format("DD MM YYYY");

    const yerstoday = (
      <List horizontal>
        {_.map(workoutValues, (value, i) =>
          value.exercise === this.props.exercise &&
          value.date === yerstodayMoment ? (
            <List.Item key={i}>
              <ItemOfValueYerstoday value={value} id={i} />
            </List.Item>
          ) : (
            "loading"
          )
        )}
      </List>
    );

    return (
      <div>
        <div>
          <div>Вчера</div>
          {yerstoday}
        </div>
        <div>
          <div>Сегодня</div>
          <List horizontal>
            {_.map(workoutValues, (value, i) =>
              value.exercise === this.props.exercise && value.date === today ? (
                <List.Item key={i}>
                  <ItemOfValue value={value} id={i} />
                </List.Item>
              ) : (
                "loading"
              )
            )}
          </List>
        </div>

        <div>
          <TotalValue sum={this.totalValue()} exercise={exercise} />
        </div>
      </div>
    );
  }
}

export default ListOfValue;
