import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLogged } from "../../Store/Actions";
function LoginToggle() {
  const loggedOrNot = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  console.log(loggedOrNot);
  return (
    <>
      <h1>IsLoggeIn?{loggedOrNot ? "true" : "false"}</h1>
      <button onClick={() => dispatch(isLogged(loggedOrNot))}>Toggle</button>
    </>
  );
}
export default LoginToggle;
