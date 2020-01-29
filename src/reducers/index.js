import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authentication from "./authReducer";
import product from "./productReducer";

export default combineReducers({
  authentication,
  alert: alertReducer,
  product
});
