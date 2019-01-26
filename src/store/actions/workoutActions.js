import { fire } from "../../firebase/firebase";
import { FETCH_WORKOUT_VALUES } from "../types";

const databaseRef = fire.database().ref();
const firebaseChild = databaseRef.child("semakaleksandr2014@gmail,com");

export const addUserValues = newValue => async dispatch => {
  databaseRef
    .child("semakaleksandr2014@gmail,com")
    .push()
    .set(newValue);
};

export const fetchWorkoutValues = () => async dispatch => {
  databaseRef.child("semakaleksandr2014@gmail,com").on("value", snapshot => {
    dispatch({ type: FETCH_WORKOUT_VALUES, payload: snapshot.val() });
  });
};

export const delValue = id => async dispatch => {
  firebaseChild.child(id).remove();
};
