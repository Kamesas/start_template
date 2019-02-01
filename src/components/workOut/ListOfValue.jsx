import React, { Component } from "react";
import { List, Icon, Label } from "semantic-ui-react";
import ItemOfValue from "./ItemOfValue";
import _ from "lodash";
import moment from "moment";
import ItemOfValueYerstoday from "./ItemOfValueYerstoday";
import stl from "./ListOfValue.module.sass";

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

  refreshDate = () => {
    this.setState({ m: moment() });
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
      <div className={stl["days"]}>
        <div className={stl["days-item"]}>
          <div className={stl["one-day"]}>
            <div>
              <Label color="green">
                <Icon name="calendar alternate outline" />
                {toDaysAgo}
                <Label.Detail>
                  <Icon name="checkmark" />
                  {this.totalValue(toDaysAgo)}
                </Label.Detail>
              </Label>
            </div>
            {this.totalValue(toDaysAgo) > 0 ? (
              this.returnDay(toDaysAgo, ItemOfValueYerstoday)
            ) : (
              <div className={stl["warning-day"]}>
                <Icon name="warning sign" color="yellow" />
                тренировки не было
              </div>
            )}
          </div>
          <div className={stl["one-day"]}>
            <div>
              <Label color="green">
                <Icon name="calendar alternate outline" />
                {yerstoday}
                <Label.Detail>
                  <Icon name="checkmark" />
                  {this.totalValue(yerstoday)}
                </Label.Detail>
              </Label>
            </div>
            {this.totalValue(yerstoday) > 0 ? (
              this.returnDay(yerstoday, ItemOfValueYerstoday)
            ) : (
              <div className={stl["warning-day"]}>
                <Icon name="warning sign" color="yellow" />
                тренировки не было
              </div>
            )}
          </div>
          <div className={stl["one-day"]}>
            <div>
              <Label color="green">
                <Icon name="calendar alternate outline" />
                {today}
                <Label.Detail>
                  <Icon name="checkmark" />
                  {this.totalValue(today)}
                </Label.Detail>
              </Label>
            </div>
            {this.totalValue(today) > 0 ? (
              this.returnDay(today, ItemOfValue)
            ) : (
              <div className={stl["warning-day"]}>
                <Icon name="warning sign" color="yellow" />
                тренировки не было
              </div>
            )}
          </div>
        </div>
        <div className={stl["date-picker"]}>
          <div>
            <Icon
              name="arrow circle up"
              onClick={this.downDate}
              size="large"
              color="blue"
            />
            <Icon
              name="refresh"
              onClick={this.refreshDate}
              size="large"
              color="blue"
            />
            <Icon
              name="arrow circle down"
              onClick={this.upDate}
              size="large"
              color="blue"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListOfValue;
