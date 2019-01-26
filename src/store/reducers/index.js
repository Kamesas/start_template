import { combineReducers } from "redux";
import workoutValues from "./workoutReducer";
import workoutUser from "./workoutUser";
import usersLogin from "./usersLogin";

const rootReducer = combineReducers({
  workoutValues,
  workoutUser,
  usersLogin
});

export default rootReducer;
