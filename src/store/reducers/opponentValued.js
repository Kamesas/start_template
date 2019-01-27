import { FETCH_OPPONENT_VALUES } from "../types";

export default (state = "loading", action) => {
  switch (action.type) {
    case FETCH_OPPONENT_VALUES:
      return action.payload;
    default:
      return state;
  }
};
