import React from "react";
import { Route } from "react-router-dom";
import Home from "./Templates/Home";
import Negative from "./Templates/Negative";
import Positive from "./Templates/Positive";

function MainApp_Routers() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/Negative" component={Negative} />
      <Route exact path="/Positive" component={Positive} />
    </>
  );
}
export default MainApp_Routers;
