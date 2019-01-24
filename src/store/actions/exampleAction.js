import { EXAMPLE } from "../types";

export const addExample = some => ({ type: EXAMPLE, payload: some });

// export const addValue = newValue => async dispatch => {
//   firebaseValue.push().set(newValue);
// };
