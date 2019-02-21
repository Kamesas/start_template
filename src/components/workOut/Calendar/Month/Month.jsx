import React from "react";
import stl from "./Month.module.sass";
import DayFromMonth from "./DayFromMonth/DayFromMonth";
import moment from "moment";

const Month = ({ bodyCalendar }) => {
  const m = moment();
  return (
    <div className={stl["render-month"]}>
      {bodyCalendar.map((day, i) => {
        const sunday = stl[day.day() === 0 || day.day() === 6 ? "sunday" : ""];
        const currDay =
          stl[day.format("MM DD YY") === m.format("MM DD YY") ? "currDay" : ""];

        return (
          <div
            key={day.format("DD MM YYYY")}
            className={`${sunday} ${currDay}`}
          >
            <DayFromMonth day={day} />
          </div>
        );
      })}
    </div>
  );
};

export default Month;
