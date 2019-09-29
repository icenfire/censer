import React from "react";
import { withRouter } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "white",
      backgroundColor: theme.palette.background.default
    },
    formControl: {
      margin: theme.spacing(3)
    }
  })
);

export interface Props {
  history?: any;
}

export interface State {
  email: string;
  error: any;
  passwordOne: string;
  passwordTwo: string;
  username: string;
  level: string;
}

export default function SignUpComponent(props: Props) {
  const classes = useStyles();
  const initialState: State = {
    email: "",
    error: null,
    passwordOne: "",
    passwordTwo: "",
    username: "",
    level: "5"
  };
  const [values, setValues] = React.useState(initialState);

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setValues({ ...values, [name]: event.target.value });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    const { email, passwordOne, level } = values;

    const { history } = props;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            firebase
              .firestore()
              .collection("members")
              .add({
                userID: user.uid,
                name: email,
                level: level
              })
              .then(() => {
                setValues({ ...initialState });
                history.push("/");
              })
              .catch(error => {
                setValues({ ...values, error: error });
              });
          }
        });
      })
      .catch(error => {
        setValues({ ...values, error: error });
      });

    event.preventDefault();
  };

  const isInvalid =
    values.email === "" ||
    values.passwordOne === "" ||
    values.passwordTwo === "" ||
    values.username === "";

  return (
    <div className={classes.root}>
      SignUpPage
      <form onSubmit={event => onSubmit(event)}>
        <input
          value={values.username}
          onChange={handleChange("username")}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={values.email}
          onChange={handleChange("email")}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={values.passwordOne}
          onChange={handleChange("passwordOne")}
          type="password"
          placeholder="Password"
        />
        <input
          value={values.passwordTwo}
          onChange={handleChange("passwordTwo")}
          type="password"
          placeholder="Confirm Password"
        />
        <br />

        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {values.error && <p>{values.error.message}</p>}
      </form>
    </div>
  );
}

export const SignUnPage = withRouter(SignUpComponent);
