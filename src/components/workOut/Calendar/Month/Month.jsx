import React from "react";
import stl from "./Month.module.sass";
import DayFromMonth from "./DayFromMonth/DayFromMonth";

const Month = ({ bodyCalendar }) => {
  return (
    <div className={stl["render-month"]}>
      {bodyCalendar.map((day, i) => {
        return (
          <div
            key={day.format("DD MM YYYY")}
            className={stl[day.day() === 0 ? "sunday" : ""]}
          >
            {/* v.format("dd") */}
            <DayFromMonth day={day} />
          </div>
        );
      })}
    </div>
  );
};

export default Month;
