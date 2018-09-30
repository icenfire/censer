import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";

declare let module: any;

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
