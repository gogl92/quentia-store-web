import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR
} from "../actions/types";
import Parse from "parse";

// Parse.initialize("9a1fd5f82c592f443c9bf564a1652aff5dc57c13", null);
// Parse.serverURL = "http://34.73.39.87/parse";

// let currentUser = Parse.User.current();

// const initialState = currentUser ? { loggedIn: true, currentUser } : {};

const initialState = {
  loggedIn: false,
  user: null
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      };
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return {};
    case REGISTER_REQUEST:
      return { registering: true };
    case REGISTER_SUCCESS:
      return { ...state, ...action.payload, loggedIn: true };
    case REGISTER_FAILURE:
    case AUTH_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loggedIn: false
      };
    default:
      return state;
  }
}
