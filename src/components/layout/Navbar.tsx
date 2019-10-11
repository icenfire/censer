import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { signOut } from "../../action/authentication";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  ExtendedFirebaseInstance,
  ExtendedAuthInstance,
  ExtendedStorageInstance
} from "react-redux-firebase";

interface ExtraArgument {
  getFirebase: () => ExtendedFirebaseInstance &
    ExtendedAuthInstance &
    ExtendedStorageInstance;
}

export interface Props {
  signOut: () => void;
  name: string;
}

const options = ["LOG OUT", "CLOSE"];

const ITEM_HEIGHT = 48;

function Navbar(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option: string) => () => {
    switch (option) {
      case "LOG OUT":
        props.signOut();
        break;
      case "CLOSE":
        setAnchorEl(null);
        break;
    }
  };

  return (
    <div>
      {props.name}
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const mapStateToProps = (state: {
  firebase: { profile: { name: string } };
}) => {
  console.log("navbar", state);
  return {
    name: state.firebase.profile.name
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, ExtraArgument, AnyAction>
) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
