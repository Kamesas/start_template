import React from "react";
import stl from "./Month.module.sass";

const Month = ({ bodyCalendar }) => {
  return (
    <div className={stl["render-month"]}>
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

export default Month;
