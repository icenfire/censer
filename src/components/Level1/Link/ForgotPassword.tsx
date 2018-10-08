import * as React from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

const ForgotPasswordLink = (props: any) => (
  <Link to="/ForgotPassword" style={{ textDecoration: "none" }} {...props} />
);

export default function ForgotPassword() {
  return (
    <Typography component={ForgotPasswordLink}>Forgot Password?</Typography>
  );
}
