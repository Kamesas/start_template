import React from "react";
import leftArrow from "./img/left-arrow.svg";
import rigthArrow from "./img/right-arrow.svg";

const CalendarHeader = ({ stl, prevDate, nextDate, moment }) => {
  return (
    <div className={stl["calendar-header"]}>
      <img
        src={leftArrow}
        alt="leftArrow"
        onClick={prevDate}
        className={stl["left-arrow"]}
      />
      <span>{moment.format("D MMMM YYYY")}</span>
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
