import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import LoginRoute from "./Login";
import SignupRoute from "./Signup";
import Navbar from "../containers/Navbar";

export default function createRoutes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={Home.path} component={Home.component} />
        {/* Build Route components from routeSettings */
        [
          SignupRoute,
          LoginRoute
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}
      </Switch>
    </div>
  );
}
