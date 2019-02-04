import React, { Component } from "react";
import moment from "moment";

// https://momentjs.com/docs/#/manipulating/  ===>  chapter Manipulate

function DateSwitch(WrapComponent) {
  return class ChangeMoment extends Component {
    state = { moment: moment() };

    downDate = () => {
      this.setState({ moment: this.state.moment.subtract(1, "month") });
      console.log(this.state.moment);
    };

    upDate = () => {
      this.setState(({ moment }) => ({ moment: moment.add(1, "month") }));
    };

    refreshDate = () => {
      this.setState({ moment: moment() });
    };

    render() {
      return (
        <WrapComponent
          {...this.props}
          {...this.state}
          downDate={this.downDate}
          upDate={this.upDate}
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
