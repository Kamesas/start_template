import { fire } from "../../firebase/firebase";
import { FETCH_WORKOUT_VALUES } from "../types";

const databaseRef = fire.database().ref();
const fireAuth = fire.auth();

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
  databaseRef
    .child("semakaleksandr2014@gmail,com")
    .child(id)
    .remove();
};

export const signUp = (name, email, password) => dispatch => {
  console.log(name);
  fireAuth
    .createUserWithEmailAndPassword(email, password)
    .then(u => {
      console.log(u);
    })
    .catch(error => {
      console.log(error.message);
    });
};

export const signIn = (email, password) => dispatch => {
  fireAuth
    .signInWithEmailAndPassword(email, password)
    .then(u => console.log(u))
    .catch(error => {
      console.log(error);
    });
};
