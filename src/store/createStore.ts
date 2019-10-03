// import { rootReducer } from "../reducers";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import { configFirebase, reduxFirebaseConfig } from "../config";

declare global {
  interface Window {
    MyNamespace: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
    ___INITIAL_STATE__: any;
  }
}

export default (initialState = {}) => {
  firebase.initializeApp(configFirebase);
  firebase.firestore();

  window.MyNamespace = window.MyNamespace || {};

  const createStoreWithFirebase = compose<any>(
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, reduxFirebaseConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore);

  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
  });

  const store = createStoreWithFirebase(rootReducer, initialState);

  return store;
};
