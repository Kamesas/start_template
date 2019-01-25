import { FETCH_WORKOUT_VALUES } from "../types";

const initialState = "loading";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WORKOUT_VALUES:
      return payload;
    default:
      return state;
  }
};
