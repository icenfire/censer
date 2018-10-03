import { InputAdornment, TextField } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import * as React from "react";

export default () => {
  return (
    <TextField
      id="outlined-email-input"
      label="Email Address"
      className="email"
      type="email"
      name="email"
      autoComplete="email"
      margin="normal"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Person />
          </InputAdornment>
        )
      }}
    />
  );
};