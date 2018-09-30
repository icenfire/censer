import { InputAdornment, TextField } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import * as React from "react";

export default () => {
  return (
    <TextField
      id="standard-password-input"
      label="Password"
      className="password"
      type="password"
      autoComplete="current-password"
      margin="normal"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <LockOutlined />
          </InputAdornment>
        )
      }}
    />
  );
};
