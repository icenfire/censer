import * as React from "react";

export const SignOutButton = ({ handleLogout }: any) => (
  <button type="button" onClick={handleLogout}>
    Sign Out
  </button>
);
