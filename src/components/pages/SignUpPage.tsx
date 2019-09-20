import * as React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "black",
      backgroundColor: theme.palette.background.paper
    }
  })
);

export default function SignUpPage() {
  const classes = useStyles();
  return <div className={classes.root}>SignInPage</div>;
}
