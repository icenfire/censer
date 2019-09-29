import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import { SignOutButton } from "../SignOut";

const NavigationComponent = ({ history, authUser }: any) => (
  <div>
    {authUser ? <NavigationAuth history={history} /> : <NavigationNonAuth />}
  </div>
);

const NavigationAuth = ({ history }: any) => (
  <ul>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton history={history} />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </li>
  </ul>
);

const mapStateToProps = (state: any) => ({
  authUser: state.sessionState.authUser
});

export const Navigation = connect(mapStateToProps)(NavigationComponent);
