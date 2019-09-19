import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider
} from "@material-ui/core";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import LeaderMain from "./LeaderMain";
import LoginPage from "./LoginPage";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <LoginPage />
        <LeaderMain />>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);
