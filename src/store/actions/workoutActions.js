import { fire } from "../../firebase/firebase";
import {
  FETCH_WORKOUT_VALUES,
  FETCH_OPPONENT_VALUES,
  FETCH_WORKOUT_USER,
  FETCH_USERS_LOGIN
} from "../types";

const databaseRef = fire.database().ref();
const fireAuth = fire.auth();

const addUsersLogin = login => async dispatch => {
  databaseRef
    .child("usersLogin")
    .push()
    .set(login);
};

export const addUserValues = newValue => async dispatch => {
  databaseRef
    .child(newValue.userLogin)
    .push()
    .set(newValue);
};

export const fetchWorkoutValues = childLoginUser => async dispatch => {
  databaseRef.child(childLoginUser).on("value", snapshot => {
    dispatch({ type: FETCH_WORKOUT_VALUES, payload: snapshot.val() });
  });
};

export const fetchOpponentValues = childLoginUser => async dispatch => {
  databaseRef.child(childLoginUser).on("value", snapshot => {
    dispatch({ type: FETCH_OPPONENT_VALUES, payload: snapshot.val() });
  });
};

export const usersLogin = () => async dispatch => {
  databaseRef.child("usersLogin").on("value", snapshot => {
    dispatch({ type: FETCH_USERS_LOGIN, payload: snapshot.val() });
  });
};

export const delValue = (id, userLogin) => async dispatch => {
  databaseRef
    .child(userLogin)
    .child(id)
    .remove();
};

/* Authentification with Firebase */
export const fetchworkoutUser = () => dispatch => {
  fireAuth.onAuthStateChanged(user => {
    if (user) {
      dispatch({ type: FETCH_WORKOUT_USER, payload: user });
      localStorage.setItem("workoutUser", user.uid);
    } else {
      dispatch({ type: FETCH_WORKOUT_USER, payload: null });
      localStorage.removeItem("workoutUser");
    }
  });
};

const updateDisplayName = (name, user) =>
  fireAuth.currentUser.updateProfile({ displayName: name }).then(
    function() {
      console.log(user);
    },
    function(error) {
      console.log(error);
    }
  );

export const signUp = (name, email, password) => dispatch => {
  fireAuth
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      updateDisplayName(name, user);
    })
    .then(addUsersLogin(name))
    .catch(error => {
      console.log(error.message);
    });
};

export const signIn = (email, password) => dispatch => {
  fireAuth
    .signInWithEmailAndPassword(email, password)
    .then(u => {})
    .catch(error => {
      console.log(error);
    });
};

export const logOut = () => dispatch => {
  fireAuth
    .signOut()
    .then(() => {
      //console.log("Ты вышел из аккаунта !");
    })
    .catch(error => {
      console.log(error);
    });
};
