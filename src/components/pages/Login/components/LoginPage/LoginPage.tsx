import React from "react";
import PropTypes from "prop-types";
import { isLoaded, isEmpty } from "react-redux-firebase";

export interface State {
  email: string;
  password: string;
}

function SignInPage({ auth, authError, emailLogin }: any) {
  const initialState: State = {
    email: "",
    password: ""
  };

  const [values, setValues] = React.useState(initialState);

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setValues({ ...values, [name]: event.target.value });

  function loginWithEmail() {
    const { email, password } = values;
    emailLogin({
      email,
      password
    });
  }
  return (
    <div>
      <h2>Auth</h2>
      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        <div>
          <input
            value={values.email}
            onChange={handleChange("email")}
            type="email"
            placeholder="Email Address"
          />
          <input
            value={values.password}
            onChange={handleChange("password")}
            type="Password"
            placeholder="password Address"
          />
          <button onClick={loginWithEmail}>Login With Email</button>
        </div>
      ) : (
        <pre>{JSON.stringify(auth, null, 2)}</pre>
      )}
      {authError ? authError.message : <div></div>}
    </div>
  );
}

SignInPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
};

export default SignInPage;
