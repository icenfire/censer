import React from "react";
import PropTypes from "prop-types";
import { isLoaded, isEmpty } from "react-redux-firebase";

export interface State {
  email: string;
  error: any;
  passwordOne: string;
  passwordTwo: string;
  username: string;
  level: string;
}

function SignUpComponent({ auth, authError, classes, emailSignup }: any) {
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
    const { email, passwordOne, username } = values;

    emailSignup({
      email,
      password: passwordOne,
      username
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
      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
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
          {authError ? authError.message : <div></div>}
        </form>
      ) : (
        <pre>{JSON.stringify(auth, null, 2)}</pre>
      )}
    </div>
  );
}

SignUpComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object,
  emailSignup: PropTypes.func.isRequired
};

export default SignUpComponent;
