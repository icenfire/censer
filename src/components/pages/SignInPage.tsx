import React from "react";
import { withRouter } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "white",
      backgroundColor: theme.palette.background.paper
    }
  })
);

export interface Props {
  history?: any;
}

export interface State {
  email: string;
  error: any;
  pw: string;
}

export default function SignInComponent(props: Props) {
  const classes = useStyles();
  const initialState: State = {
    email: "",
    error: null,
    pw: ""
  };
  const [values, setValues] = React.useState(initialState);

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setValues({ ...values, [name]: event.target.value });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const { email, pw } = values;
    const { history } = props;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, pw)
      .then(() => {
        console.log("auth sign in then");
        setValues({ ...initialState });
        history.push("/");
      })
      .catch(error => {
        console.log("auth sign in error");
        setValues({ ...values, error: error });
      });

    event.preventDefault();
  };

  const isInvalid = values.email === "" || values.pw === "";

  return (
    <div className={classes.root}>
      SignIpPage
      <form onSubmit={event => onSubmit(event)}>
        <input
          value={values.email}
          onChange={handleChange("email")}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={values.pw}
          onChange={handleChange("pw")}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {values.error && <p>{values.error.message}</p>}
      </form>
    </div>
  );
}

export const SignUnPage = withRouter(SignInComponent);
