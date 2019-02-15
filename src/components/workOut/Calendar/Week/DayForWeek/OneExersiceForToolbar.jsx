import React from "react";
import stl from "./OneExerciseForToolbar.module.sass";

const OneExerciseForToolbar = ({ renderSum, exerciseName }) => {
  if (renderSum === 0) {
    return null;
  }
  return (
    <div className={stl["OneExerciseForToolbar"]}>
      {exerciseName} <span>{renderSum}</span>
    </div>
  );
};

export default OneExerciseForToolbar;
