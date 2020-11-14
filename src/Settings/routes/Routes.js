import React from "react";
import SimpleAppRouters from "../../SimpleApp/Routes";
import MainAppRoutes from "../../MainApp/Routes";

function View() {
  return (
    <>
      <MainAppRoutes />
      <SimpleAppRouters />
    </>
  );
}

export default View;
