import React from "react";
import Exercises from "./Exercises";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default ({ workoutUser, workoutValues }) => (
  <Tabs>
    <TabList>
      <Tab>Сегодня</Tab>
      <Tab>Неделя</Tab>
    </TabList>

    <TabPanel>
      <Exercises workoutUser={workoutUser} workoutValues={workoutValues} />
    </TabPanel>
    <TabPanel>
      <h2>Данные за неделю</h2>
    </TabPanel>
  </Tabs>
);
