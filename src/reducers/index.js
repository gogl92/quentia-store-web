import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authentication from "./authReducer";

export default combineReducers({ authentication, alert: alertReducer });
