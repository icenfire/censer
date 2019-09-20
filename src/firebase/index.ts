import "firebase/auth";

import * as firebase from "firebase/app";
import "firebase/firestore";
import config from "../config";

export const app = firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.firestore();
