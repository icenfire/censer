import * as React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import firebase from "../../firebase";

import Radio from "@material-ui/core/Radio";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "white",
      backgroundColor: theme.palette.background.default
    },
    formControl: {
      margin: theme.spacing(3)
    }
  })
);

const Account = ({ authUser }: any) => (
  <div>{authUser ? <AccountComponent authUser={authUser} /> : ""}</div>
);

const AccountComponent = ({ authUser }: any) => {
  const classes = useStyles();
  const [level, setLevel] = useState("0");
  useEffect(() => {
    firebase
      .firestore()
      .collection("members")
      .where("userID", "==", authUser.uid)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          setLevel(doc.data().level);
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }, [authUser.uid]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    firebase
      .firestore()
      .collection("members")
      .where("userID", "==", authUser.uid)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          firebase
            .firestore()
            .collection("members")
            .doc(doc.id)
            .update({ level: level });
        });
      })
      .catch(error => {
        setLevel(error);
      });

    event.preventDefault();
  };

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) =>
    setLevel(event.target.value);

  return (
    <div>
      <form onSubmit={event => onSubmit(event)}>
        <h1>Account: {authUser.email}</h1>
        <h1>Level: {level}</h1>
        <div>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Level</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender2"
              value={level}
              onChange={handleChange()}
            >
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="super admin"
              />
              <FormControlLabel value="1" control={<Radio />} label="Level 1" />
              <FormControlLabel value="2" control={<Radio />} label="Level 2" />
              <FormControlLabel value="3" control={<Radio />} label="Level 3" />
              <FormControlLabel value="4" control={<Radio />} label="Level 4" />
              <FormControlLabel value="5" control={<Radio />} label="Level 5" />
            </RadioGroup>
          </FormControl>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  authUser: state.sessionState.authUser
});

export const AccountPage = connect(mapStateToProps)(Account);
