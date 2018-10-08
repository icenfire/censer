import * as React from "react";
import ForgotPassword from "./Level1/Link/ForgotPassword";
import CheckboxLabel from "./Level1/SelectionControls/CheckboxLabel";
import EmailTextField from "./Level1/TextFields/EmailTextField";
import PasswordTextField from "./Level1/TextFields/PasswordTextField";

class LoginPage extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const LoginStyle = {
      justifyContent: "right"
    };

    return (
      <div className="LoginDetails" style={LoginStyle}>
        <EmailTextField />
        <div />
        <PasswordTextField />
        <div />
        <CheckboxLabel />
        <div />
        <ForgotPassword />
      </div>
    );
  }
}

export default LoginPage;
