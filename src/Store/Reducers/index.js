import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import selfReducer from "./self";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  self: selfReducer
});

export default allReducers;
