import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Exercises from "./Exercises/Exercises";
import Calendar from "./Calendar/Calendar";
import Chart from "./Chart/Chart";

export default ({ workoutUser, workoutValues }) => (
  <Tabs>
    <TabList>
      <Tab>Календар</Tab>
      <Tab>Сегодня</Tab>

      <Tab>График</Tab>
    </TabList>

    <TabPanel>
      <Calendar workoutUser={workoutUser} workoutValues={workoutValues} />
    </TabPanel>

    <TabPanel>
      <Exercises workoutUser={workoutUser} workoutValues={workoutValues} />
    </TabPanel>

    <TabPanel>
      <Chart workoutUser={workoutUser} workoutValues={workoutValues} />
    </TabPanel>
  </Tabs>
);
