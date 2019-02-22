import React from "react";
import leftArrow from "../img/left-arrow.svg";
import rigthArrow from "../img/right-arrow.svg";
import stl from "./CalendarHeader.module.sass";

const CalendarHeader = ({ prevDate, nextDate, moment }) => {
  return (
    <div className={stl["calendar-header"]}>
      <img
        src={leftArrow}
        alt="leftArrow"
        onClick={prevDate}
        className={stl["left-arrow"]}
      />
      <span>{moment.format("MMMM YYYY")}</span>
      <img
        src={rigthArrow}
        alt="rigthArrow"
        onClick={nextDate}
        className={stl["rigth-arrow"]}
      />
    </div>
  );
};

export default CalendarHeader;
