import React, { Component } from "react";
import { List, Icon } from "semantic-ui-react";
import ItemOfValue from "./ItemOfValue";
import _ from "lodash";
import moment from "moment";
import ItemOfValueYerstoday from "./ItemOfValueYerstoday";
import stl from "./ListOfValue.module.sass";
import OneDayForList from "./OneDayForLIst";

class ListOfValue extends Component {
  state = { m: moment(), startSwipe: null, toggleDate: null };

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
      <List horizontal id={stl["list-of-value"]}>
        {_.map(workoutValues, (value, i) =>
          value.exercise === exercise && value.date === date ? (
            <List.Item key={i}>
              <DayComponent value={value} id={i} />
            </List.Item>
          ) : null
        )}
      </List>
    );
  };

  downDate = () => {
    this.setState({ m: this.state.m.subtract(1, "days") });
  };

  upDate = () => {
    if (this.state.m <= moment().subtract(1, "days")) {
      this.setState(({ m }) => ({ m: m.add(1, "days") }));
    }
  };

  refreshDate = () => {
    this.setState({ m: moment() });
  };

  _onTouchStart = e => {
    const touch = e.touches[0];
    this.setState({ startSwipe: touch.clientY });
  };

  _onTouchMove = e => {
    const touch = e.touches[0];
    const deferent = touch.clientY - this.state.startSwipe;

    if (deferent > 30) {
      this.setState({ toggleDate: "down" });
    } else if (deferent < -30) {
      this.setState({ toggleDate: "up" });
    }
  };

  _onTouchEnd = e => {
    if (this.state.toggleDate === "up") {
      this.upDate();
    } else if (this.state.toggleDate === "down") {
      this.downDate();
    }
    this.setState({ toggleDate: null });
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
          <div
          // className={stl["firstTwoDays"]}
          // onTouchStart={this._onTouchStart}
          // onTouchMove={this._onTouchMove}
          // onTouchEnd={this._onTouchEnd}
          >
            <OneDayForList
              day={toDaysAgo}
              ItemOfValue={ItemOfValueYerstoday}
              stl={stl}
              totalValue={this.totalValue}
              returnDay={this.returnDay}
              //colorLable="olive"
            />

            <OneDayForList
              day={yerstoday}
              ItemOfValue={ItemOfValueYerstoday}
              stl={stl}
              totalValue={this.totalValue}
              returnDay={this.returnDay}
              //colorLable="olive"
            />
          </div>

          <OneDayForList
            day={today}
            ItemOfValue={ItemOfValue}
            stl={stl}
            totalValue={this.totalValue}
            returnDay={this.returnDay}
            colorLable="green"
            labelSIze="big"
          />
        </div>
        <div className={stl["date-picker"]}>
          <div>
            <Icon
              name="arrow circle up"
              onClick={this.downDate}
              size="big"
              color="blue"
            />
            <Icon
              name="refresh"
              onClick={this.refreshDate}
              size="big"
              color="blue"
            />
            <Icon
              name="arrow circle down"
              onClick={this.upDate}
              size="big"
              color="blue"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListOfValue;
