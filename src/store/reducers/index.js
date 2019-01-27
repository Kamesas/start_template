import { combineReducers } from "redux";
import workoutValues from "./workoutReducer";
import workoutUser from "./workoutUser";
import usersLogin from "./usersLogin";
import opponentValues from "./opponentValued";

const rootReducer = combineReducers({
  workoutValues,
  opponentValues,
  workoutUser,
  usersLogin
});

export default rootReducer;
