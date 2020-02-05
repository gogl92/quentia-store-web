import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authentication from "./authReducer";
import product from "./productReducer";
import data from "./dataReducer";
import productUploadReducer from "./productUploadReducer";

export default combineReducers({
  authentication,
  alert: alertReducer,
  product
});
