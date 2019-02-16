import React from "react";
import OneExersiceForToolbar from "./OneExersiceForToolbar";
//import { Icon } from "semantic-ui-react";
import DayToolbarButtons from "./DayToolbarButtons";

const DayToolbar = ({
  stl,
  day,
  toggleOpenItem,
  optionsExercises,
  renderSum,
  isShow,
  toggleShowEditPanel,
  showEditPanel,
  workoutUser
}) => {
  return (
    <div className={stl["day-and-date"]}>
      <div>
        <span>{day.format("dd")}</span> <span>{day.date()}</span>
      </div>

      <DayToolbarButtons
        stl={stl}
        isShow={isShow}
        toggleShowEditPanel={toggleShowEditPanel}
        showEditPanel={showEditPanel}
        toggleOpenItem={toggleOpenItem}
        day={day}
        workoutUser={workoutUser}
      />

      <div className={stl["day-and-date-exercise"]}>
        {optionsExercises.map(exercise => {
          return (
            <OneExersiceForToolbar
              key={exercise.key}
              stl={stl}
              exerciseName={exercise.text}
              renderSum={renderSum(exercise.value)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DayToolbar;
