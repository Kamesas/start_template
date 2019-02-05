import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ru";

// https://momentjs.com/docs/#/manipulating/  ===>  chapter Manipulate

function DateSwitch(WrapComponent) {
  return class ChangeMoment extends Component {
    state = { moment: moment() };

    nextDate = () => {
      this.setState({ moment: this.state.moment.add(1, "month") });
      console.log(this.state.moment);
    };

    prevDate = () => {
      this.setState(({ moment }) => ({
        moment: moment.subtract(1, "month")
      }));
    };

    refreshDate = () => {
      this.setState({ moment: moment() });
    };

    render() {
      return (
        <WrapComponent
          {...this.props}
          {...this.state}
          nextDate={this.nextDate}
          prevDate={this.prevDate}
          refreshDate={this.refreshDate}
          moment={this.state.moment}
        />
      );
    }
  };
}

export default DateSwitch;
// function DateSwitch(WrapComponent) {
//   return class ChangeMoment extends Component {
//     state = { moment: moment() };

//     downDate = (numStep = 1, nameStep = "month") => {
//       this.setState({ m: this.state.m.subtract(numStep, "nameStep") });
//     };

//     upDate = (numStep = 1, nameStep = "month") => {
//       this.setState(({ m }) => ({ m: m.add(numStep, "nameStep") }));
//     };

//     refreshDate = () => {
//       this.setState({ m: moment() });
//     };

//     render() {
//       return (
//         <WrapComponent
//           {...this.props}
//           {...this.state}
//           downDate={this.downDate}
//           upDate={this.upDate}
//           refreshDate={this.refreshDate}
//         />
//       );
//     }
//   };
// }

// export default DateSwitch;
