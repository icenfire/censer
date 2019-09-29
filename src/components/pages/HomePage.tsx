import React from "react";
import AlreadyHaveAnAccount from "../Level1/Buttons/AlreadyHaveAnAccount";
import DontHaveAnAccount from "../Level1/Buttons/DontHaveAnAccount";
import SignInButton from "../Level1/Buttons/SignInButton";
import SignUpButton from "../Level1/Buttons/SignUpButton";

import TermsAndConditionsDialog from "../Level1/Dialogs/TermsAndConditionsDialog";

import ForgotPasswordLink from "../Level1/Links/ForgotPasswordLink";

import RememberMeCheckbox from "../Level1/SelectionControls/RememberMeCheckbox";

import DateOfBirthTextField from "../Level1/TextFields/DateOfBirthTextField";
import EmailTextField from "../Level1/TextFields/EmailTextField";
import NameTextField from "../Level1/TextFields/NameTextField";
import PasswordTextField from "../Level1/TextFields/PasswordTextField";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "white",
      backgroundColor: theme.palette.background.default
    }
  })
);

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      HomePage
      <EmailTextField />
      <div />
      <PasswordTextField />
      <div />
      <NameTextField />
      <div />
      <DateOfBirthTextField />
      <div />
      <RememberMeCheckbox /> Needs to turn the label colour to primary
      <div />
      <ForgotPasswordLink />
      <div />
      <SignInButton />
      <div />
      <SignUpButton />
      <div />
      <DontHaveAnAccount /> Needs to have color control of the button label
      <div />
      <AlreadyHaveAnAccount /> Needs to have color control of the button label
      <div />
      <TermsAndConditionsDialog />
      <div />
    </div>
  );
}
