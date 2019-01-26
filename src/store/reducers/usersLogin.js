import { FETCH_USERS_LOGIN } from "../types";

export default (state = "undefinded", action) => {
  switch (action.type) {
    case FETCH_USERS_LOGIN:
      return action.payload;
    default:
      return state;
  }
};
