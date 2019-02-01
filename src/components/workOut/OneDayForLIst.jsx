import React from "react";
import { Icon, Label } from "semantic-ui-react";

const OneDayForList = ({ day, ItemOfValue, stl, totalValue, returnDay }) => {
  return (
    <div className={stl["one-day"]}>
      <div>
        <Label color="green">
          <Icon name="calendar alternate outline" />
          {day}
          <Label.Detail>
            <Icon name="checkmark" />
            {totalValue(day)}
          </Label.Detail>
        </Label>
      </div>
      {totalValue(day) > 0 ? (
        returnDay(day, ItemOfValue)
      ) : (
        <div className={stl["warning-day"]}>
          <Icon name="warning sign" color="yellow" />
          тренировки не было
        </div>
      )}
    </div>
  );
};

export default OneDayForList;
