import React from "react";
import { Statistic } from "semantic-ui-react";

const TotalValue = ({ sum, exercise }) => (
  <Statistic>
    <Statistic.Value>
      {sum.length > 0 ? sum.reduce((f, l) => f + l) : 0}
    </Statistic.Value>
    <Statistic.Label>{exercise}</Statistic.Label>
  </Statistic>
);

export default TotalValue;
