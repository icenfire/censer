import { createStore } from "redux";
import { rootReducer } from "../reducers";

declare global {
  interface Window {
    MyNamespace: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

window.MyNamespace = window.MyNamespace || {};
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
