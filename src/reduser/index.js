import valueReducer from "./value";
import fetchReducer from "./info";
import { combineReducers } from "redux";

const allRedusers = combineReducers({
  value: valueReducer,
  info: fetchReducer,
});
export default allRedusers;
