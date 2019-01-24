import { EXAMPLE } from "../types";

const initialState = "example";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EXAMPLE:
      return (state = payload);

    default:
      return state;
  }
};
