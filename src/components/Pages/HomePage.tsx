import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export interface Props {
  auth: {
    isLoaded: boolean;
    uid: string;
  };
}

function HomePageComponent(props: Props) {
  if (props.auth.isLoaded && !props.auth.uid) return <Redirect to="/" />;

  return <div>HomePage</div>;
}

export interface State {
  firebase: {
    auth: {
      isLoaded: boolean;
      uid: string;
    };
  };
}

const mapStateToProps = (state: State) => {
  return {
    auth: state.firebase.auth
  };
};

const HomPage = connect(mapStateToProps)(HomePageComponent);
export default HomPage;
