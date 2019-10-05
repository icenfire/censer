import firebase from "firebase/app";
import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const reduxFirebaseConfig = {
  enableLogging: false
};

export const createReduxStore = (initialState = {}) => {
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
