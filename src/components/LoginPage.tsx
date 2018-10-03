import * as React from "react";
import CheckboxLabel from "./SelectionControls/CheckboxLabel";
import EmailTextField from "./TextFields/EmailTextField";
import PasswordTextField from "./TextFields/PasswordTextField";

class LoginPage extends React.Component {
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
      </div>
    );
  }
}

export default LoginPage;
