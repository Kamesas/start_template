import React from "react";
import { Icon, Label } from "semantic-ui-react";

const ItemOfValueYerstoday = ({ value }) => {
  return (
    <div>
      <Label size="mini" basic>
        {value.numberOfTimes && value.numberOfTimes}{" "}
        <Icon name="check" color="green" />
      </Label>
    </div>
  );
};

export default ItemOfValueYerstoday;
