import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import firebase from "../firebase";
import { withAuthentication } from "../Session/withAuthentication";
import * as routes from "../constants/routes";
import { Navigation } from "../components/Navigation";
import { AccountPage } from "./pages/AccountPage";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  public componentDidMount() {
    firebase.auth().onAuthStateChanged((authUser: any) => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  public render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Route component={Navigation} />
          <hr />
          <div>
            <Switch>
              <Route exact={true} path={routes.HOME} component={HomePage} />
              <Route
                exact={true}
                path={routes.SIGN_UP}
                component={SignUpPage}
              />
              <Route
                exact={true}
                path={routes.SIGN_IN}
                component={SignInPage}
              />
              <Route
                exact={true}
                path={routes.ACCOUNT}
                component={AccountPage}
              />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export const App = withAuthentication(AppComponent);
