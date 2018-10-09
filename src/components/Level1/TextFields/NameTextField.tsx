import { InputAdornment, TextField } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import * as React from "react";

export default function NameTextField() {
  return (
    <TextField
      id="standard-name-input"
      label="Name"
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
}
