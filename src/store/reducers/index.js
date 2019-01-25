import { combineReducers } from "redux";
import workoutValues from "./workoutReducer";

const rootReducer = combineReducers({
  workoutValues
});

export default rootReducer;
