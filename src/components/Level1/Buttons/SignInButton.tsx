import Button from "@material-ui/core/Button";
import * as React from "react";

export default function SignInButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{ textTransform: "capitalize" }}
    >
      Sign in
    </Button>
  );
}
