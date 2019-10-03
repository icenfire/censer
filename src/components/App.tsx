import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3"
    }
  }
});

const App = ({ routes, store }: any) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>
  </MuiThemeProvider>
);

App.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default App;
