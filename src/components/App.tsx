import { CssBaseline } from "@material-ui/core";
import * as React from "react";
import LoginPage from "./LoginPage";

import Button from "@material-ui/core/Button";

export default () => (
  <div>
    <CssBaseline />
    <Button variant="contained" color="primary">
      Hello World!
    </Button>
    <LoginPage />
  </div>
);
