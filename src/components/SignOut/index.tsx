import * as React from "react";
import firebase from "../../firebase";

export const SignOutButton = ({ history }: any) => (
  <button
    type="button"
    onClick={() => {
      history.push("/");
      firebase.auth().signOut();
    }}
  >
    Sign Out
  </button>
);
