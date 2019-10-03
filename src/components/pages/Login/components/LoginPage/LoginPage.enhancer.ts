import { withHandlers, compose } from "recompose";
import { withFirebase } from "react-redux-firebase";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "./LoginPage.styles";

export default compose(
  withFirebase,
  withRouter,
  connect(({ firebase: { auth, authError } }: any) => ({ auth, authError })),
  withHandlers({
    emailLogin: ({ firebase }: any) => (creds: any) =>
      firebase.login(creds).catch((err: any) => {
        console.log("err", err);
      })
  }),
  withStyles(styles)
);
