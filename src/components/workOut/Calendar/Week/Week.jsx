import React from "react";
import stl from "./Week.module.sass";
import DayForWeek from "./DayForWeek/DayForWeek";
import { UserValue } from "../../Tabs";
import Accordeon from "../hoc/Accardion";

const Week = ({ bodyCalendar, toggleOpenItem, dayId }) => {
  return (
    <div className={stl["render-week"]}>
      {bodyCalendar.map((day, i) => {
        return (
          <div key={day.format("DD MM YYYY")}>
            <UserValue.Consumer>
              {({ workoutValues, workoutUser }) => (
                <DayForWeek
                  day={day}
                  workoutVal={workoutValues}
                  workoutUser={workoutUser}
                  toggleOpenItem={toggleOpenItem}
                  isShow={dayId === day.format("DD MM YYYY") ? true : false}
                />
              )}
            </UserValue.Consumer>
          </div>
        );
      })}
    </div>
  );
};

export default Accordeon(Week);
