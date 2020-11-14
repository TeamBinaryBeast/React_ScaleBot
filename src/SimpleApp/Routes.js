import React from "react";
import { Route } from "react-router-dom";
import SimpleHome from "./Templates/SimpleHome";
import LoginToggle from "./Templates/LoginToggle";

function SimpleApp_Routers() {
  return (
    <>
      <Route exact path="/SimpleHome" component={SimpleHome} />
      <Route exact path="/LoginToggle" component={LoginToggle} />
    </>
  );
}

export default SimpleApp_Routers;
