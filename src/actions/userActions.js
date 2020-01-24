import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "./types";
import { history } from "../helpers/history";
import Parse from "parse";

Parse.initialize("9a1fd5f82c592f443c9bf564a1652aff5dc57c13", null);
Parse.serverURL = "http://34.73.39.87/parse";

// LOGIN
export const login = (username, password) => async dispatch => {
  // dispatch({
  //   type: LOGIN_REQUEST,
  //   payload: user
  // });
  try {
    const user = await Parse.User.logIn(username, password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
    history.push("/");
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message
    });
  }
};

// LOGOUT
export const logout = () => {
  Parse.User.logOut().then(() => {
    let currentUser = Parse.User.current(); // this will now be null
  });
};

// register
