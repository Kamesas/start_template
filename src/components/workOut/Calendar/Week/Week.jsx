import React from "react";
import stl from "./Week.module.sass";

const Week = ({ bodyCalendar }) => {
  return (
    <div className={stl["render-week"]}>
      {bodyCalendar.map((v, i) => {
        return (
          <div
            key={v.format("DD MM YYYY")}
            className={stl[v.day() === 0 ? "sunday" : ""]}
          >
            {v.date()} {/* v.format("dd") */}
          </div>
        );
      })}
    </div>
  );
};

export default Week;
