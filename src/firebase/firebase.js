import firebase from "firebase";
import { config } from "./config";

export const fire = firebase.initializeApp(config);
