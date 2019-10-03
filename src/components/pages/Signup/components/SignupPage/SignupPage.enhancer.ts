import { withHandlers, compose } from "recompose";
import { withFirebase } from "react-redux-firebase";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styles from "./SignupPage.styles";
import { withStyles } from "@material-ui/core/styles";

export default compose(
  withFirebase,
  withRouter,
  connect(({ firebase: { auth, authError } }: any) => ({ auth, authError })),
  withHandlers({
    emailSignup: ({ firebase }: any) => (creds: any) =>
      firebase
        .createUser(creds, {
          email: creds.email,
          username: creds.username
        })
        .catch((err: any) => console.log(err.message))
  }),
  withStyles(styles)
);
