import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authentication from "./authReducer";
import product from "./productReducer";
import data from "./dataReducer";

export default combineReducers({
  authentication,
  alert: alertReducer,
  product,
  data
});
