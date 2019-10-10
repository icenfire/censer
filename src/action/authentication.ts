import { ThunkDispatch } from "redux-thunk";
import {
  ExtendedFirebaseInstance,
  ExtendedAuthInstance,
  ExtendedStorageInstance
} from "react-redux-firebase";
import { AnyAction } from "redux";

interface ExtraArgument {
  getFirebase: () => ExtendedFirebaseInstance &
    ExtendedAuthInstance &
    ExtendedStorageInstance;
}

export const logIn = (credentials: { email: string; password: string }) => {
  return (
    dispatch: ThunkDispatch<any, ExtraArgument, AnyAction>,
    getState: any,
    { getFirebase }: ExtraArgument
  ) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err: any) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (
    dispatch: ThunkDispatch<any, ExtraArgument, AnyAction>,
    getState: any,
    { getFirebase }: ExtraArgument
  ) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser: {
  email: string;
  password: string;
  name: string;
  birthday: string;
}) => {
  return (
    dispatch: ThunkDispatch<any, ExtraArgument, AnyAction>,
    getState: any,
    { getFirebase }: ExtraArgument
  ) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err: any) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
