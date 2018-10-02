import * as React from "react";
import EmailTextField from "./EmailTextField";
import PasswordTextField from "./PasswordTextField";

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
      </div>
    );
  }
}

export default LoginPage;
