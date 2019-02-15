import React from "react";

const DayToolbar = ({ stl, day, toggleOpenItem }) => {
  return (
    <div
      className={stl["day-and-date"]}
      onClick={() => toggleOpenItem(day.format("DD MM YYYY"))}
    >
      <span>{day.format("dd")}</span> <span>{day.date()}</span>
    </div>
  );
};

export default DayToolbar;
