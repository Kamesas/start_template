import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Exercises from "./Exercises/Exercises";
import Calendar from "./Calendar/Calendar";
import Chart from "./Chart/Chart";

export const UserValue = React.createContext();

export default ({ workoutUser, workoutValues }) => (
  <Tabs>
    <TabList>
      <Tab>Сегодня</Tab>
      <Tab>Календар</Tab>
      <Tab>График</Tab>
    </TabList>

    <TabPanel>
      <Exercises workoutUser={workoutUser} workoutValues={workoutValues} />
    </TabPanel>

    <TabPanel>
      <UserValue.Provider value={{ workoutValues }}>
        <Calendar />
      </UserValue.Provider>
    </TabPanel>

    <TabPanel>
      <Chart workoutUser={workoutUser} workoutValues={workoutValues} />
    </TabPanel>
  </Tabs>
);
