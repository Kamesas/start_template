import React from "react";
import { Icon } from "semantic-ui-react";
import AddNewValue from "./AddNewValue";
import AddNewValueForm from "./AddNewValueForm";

const DayToolbarButtons = ({
  stl,
  isShow,
  toggleShowEditPanel,
  showEditPanel,
  toggleOpenItem,
  day,
  workoutUser
}) => {
  return (
    <div id={stl["settings"]}>
      {isShow && workoutUser ? (
        <Icon
          name="setting"
          onClick={toggleShowEditPanel}
          size="big"
          color={showEditPanel ? "red" : "orange"}
        />
      ) : null}
      <AddNewValue>
        <AddNewValueForm day={day} workoutUser={workoutUser} />
      </AddNewValue>
      <Icon
        name={isShow ? "arrow up" : "arrow down"}
        size="big"
        color="black"
        onClick={() => toggleOpenItem(day.format("DD MM YYYY"))}
      />
    </div>
  );
};

export default DayToolbarButtons;
