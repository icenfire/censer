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
