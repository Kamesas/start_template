import React from "react";

const OneExercise = ({ stl, renderSum, renderDayValue, exerciseName }) => {
  if (renderSum === 0) {
    return null;
  }
  return (
    <div className={stl["day-exercise"]}>
      <div>
        {exerciseName} <span>{renderSum}</span>
      </div>
      <div className={stl["render-day-value"]}>{renderDayValue}</div>
    </div>
  );
};

export default OneExercise;
