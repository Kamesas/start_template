import React from "react";
import { Tab } from "semantic-ui-react";
import Exercises from "./Exercises";

const panes = [
  {
    menuItem: "День",
    render: () => (
      <Tab.Pane>
        <Exercises />
      </Tab.Pane>
    )
  },
  { menuItem: "Неделя", render: () => <Tab.Pane>Неделя</Tab.Pane> },
  { menuItem: "Месяц", render: () => <Tab.Pane>Месяц</Tab.Pane> }
];

const TabExampleDefaultActiveIndex = () => (
  <Tab panes={panes} defaultActiveIndex={0} />
);

export default TabExampleDefaultActiveIndex;
