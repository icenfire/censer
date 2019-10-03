import { withHandlers, compose } from "recompose";
import { withFirebase } from "react-redux-firebase";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Navbar.styles";

export default compose(
  withFirebase,
  withRouter,
  connect(({ firebase: { auth, authError } }: any) => ({ auth, authError })),
  withHandlers({
    handleLogout: (props: any) => () => {
      props.firebase.logout();
      props.history.push("/");
    }
  }),
  withStyles(styles)
);
