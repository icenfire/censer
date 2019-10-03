import * as React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../constants/paths";
import PropTypes from "prop-types";
import { SignOutButton } from "./SignOutButton";
import { isLoaded, isEmpty } from "react-redux-firebase";

const NavigationComponent = ({ handleLogout, auth }: any) => {
  return (
    <div>
      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        <NavigationNonAuth />
      ) : (
        <NavigationAuth handleLogout={handleLogout} />
      )}
    </div>
  );
};

const NavigationAuth = ({ handleLogout }: any) => (
  <ul>
    <li>
      <Link to={routes.HOME_PATH}>Home</Link>
    </li>
    <li>
      <SignOutButton handleLogout={handleLogout} />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.HOME_PATH}>Home</Link>
    </li>
    <li>
      <Link to={routes.LOGIN_PATH}>Sign In</Link>
    </li>
    <li>
      <Link to={routes.SIGNUP_PATH}>Sign Up</Link>
    </li>
  </ul>
);

NavigationComponent.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  auth: PropTypes.object
};

export default NavigationComponent;
