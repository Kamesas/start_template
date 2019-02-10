import React from "react";
import stl from "./Week.module.sass";
import DayForWeek from "./DayForWeek/DayForWeek";

const Week = ({ bodyCalendar }) => {
  return (
    <div className={stl["render-week"]}>
      {bodyCalendar.map((day, i) => {
        return (
          <div key={day.format("DD MM YYYY")}>
            <DayForWeek day={day} />
          </div>
        );
      })}
    </div>
  );
};

export default Week;
