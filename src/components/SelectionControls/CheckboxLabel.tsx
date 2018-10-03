import * as React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class CheckboxLabel extends React.Component {
  public state = {
    checked: true
  };

  public handleChange = () => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ checked: event.target.checked });
  };

  public render() {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleChange()}
            value="checked"
            color="primary"
          />
        }
        label="Remember me"
      />
    );
  }
}

export default CheckboxLabel;
