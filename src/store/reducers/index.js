import { combineReducers } from "redux";
import workoutValues from "./workoutReducer";
import workoutUser from "./workoutUser";

const rootReducer = combineReducers({
  workoutValues,
  workoutUser
});

export default rootReducer;
