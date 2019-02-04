import React from "react";
import Exercises from "./Exercises/Exercises";
import Chart from "./Chart/Chart";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default ({ workoutUser, workoutValues }) => (
  <Tabs>
    <TabList>
      <Tab>Сегодня</Tab>
      <Tab>График</Tab>
    </TabList>

    <TabPanel>
      <Exercises workoutUser={workoutUser} workoutValues={workoutValues} />
    </TabPanel>
    <TabPanel>
      <Chart workoutUser={workoutUser} workoutValues={workoutValues} />
    </TabPanel>
  </Tabs>
);
