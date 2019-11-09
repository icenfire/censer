import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import store from "../store";
import theme from "./theme";
import routes from "./routes";

const App: React.FunctionComponent = () => (
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  </React.Fragment>
);
export default App;
