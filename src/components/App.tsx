import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/signup"}>SignUpPage</Link>
        </li>
        <li>
          <Link to={"/login"}>LoginPage</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Switch>
          <Route exact={true} path={"/"} component={HomePage} />
          <Route exact={true} path={"/signup"} component={SignUpPage} />
          <Route exact={true} path={"/login"} component={LoginPage} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);
