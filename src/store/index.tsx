import React from "react";
import firebase from "../firebase";
import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
  getFirebase
} from "react-redux-firebase";
import { firestoreReducer, createFirestoreInstance } from "redux-firestore";
import { Provider } from "react-redux";
import { authReducer } from "../reducers/authReducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const reduxFirebaseConfig = {
  enableLogging: false
};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer
});

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose<any>(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const InitApp: React.FunctionComponent = props => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={reduxFirebaseConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
      {props.children}
    </ReactReduxFirebaseProvider>
  </Provider>
);
