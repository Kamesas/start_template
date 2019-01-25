import { fire } from "../../firebase/firebase";

const databaseRef = fire.database().ref();

export const addUserValues = newValue => async dispatch => {
  //console.log(newValue.setChild);
  databaseRef
    .child("semakaleksandr2014@gmail,com")
    .push()
    .set(newValue);
};
