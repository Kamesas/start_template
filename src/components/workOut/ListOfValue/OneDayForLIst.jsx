import React from "react";
import { Icon, Label } from "semantic-ui-react";

const OneDayForList = ({
  day,
  ItemOfValue,
  stl,
  totalValue,
  returnDay,
  colorLable,
  labelSIze
}) => {
  return (
    <div className={stl["one-day"]}>
      <div>
        <Label
          basic
          color={colorLable}
          size={labelSIze}
          className={stl["width-label-date"]}
        >
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
        <div id={stl["warning-day"]}>
          <Icon name="warning sign" color="yellow" size="small" />
          <span>тренировки не было</span>
        </div>
      )}
    </div>
  );
};

export default OneDayForList;
