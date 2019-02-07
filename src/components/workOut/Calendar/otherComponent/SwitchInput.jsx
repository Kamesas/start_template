import React from "react";
import "./SwitchInput.css";

const SwitchInput = ({ toggleWeek }) => {
  const toggleWeekMonth = e => {
    toggleWeek(e.target.checked);
  };

  return (
    <div className="onoffswitch-container">
      <div className="onoffswitch">
        <input
          type="checkbox"
          name="onoffswitch"
          className="onoffswitch-checkbox"
          id="myonoffswitch"
          onChange={toggleWeekMonth}
        />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
          <span className="onoffswitch-inner" />
          <span className="onoffswitch-switch" />
        </label>
      </div>
    </div>
  );
};

export default SwitchInput;
