import { Container, CssBaseline } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import SignInUpPageStatic from "./Pages/SignInUpPageStatic";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#C6B28E",
      dark: "#616161"
    },
    secondary: {
      main: "#4D4D4D",
      light: "#D6CKBC"
    }
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 0,
      minHeight: "100vh"
      // height: "500px"
    }
  })
);

export default function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Container maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <Route path="/" component={SignInUpPageStatic} />
        </Container>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}
