import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  AUTH_ERROR,
  USER_LOADED
} from "./types";
import { history } from "../helpers/history";
import { setAlert } from "./alertActions";
import Parse from "parse";

Parse.initialize("9a1fd5f82c592f443c9bf564a1652aff5dc57c13", null);
Parse.serverURL = "http://34.73.39.87/parse";

//

// const initialState = currentUser ? { loggedIn: true, currentUser } : {};

export const loadUser = () => async dispatch => {
  let currentUser = Parse.User.current();
  if (currentUser) {
    try {
      dispatch({
        type: USER_LOADED,
        payload: currentUser
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  }
};
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
    dispatch(loadUser());
    // history.push("/dashboard");
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: LOGIN_FAILURE });
    // dispatch({
    //   type: LOGIN_FAILURE,
    //   payload: err.message
    // });
    // alert("Error: " + err.code + " " + err.message);
  }
};

// LOGOUT
export const logout = () => {
  Parse.User.logOut().then(() => {
    let currentUser = Parse.User.current(); // this will now be null
  });
};

// REGISTER
export const register = user => async dispatch => {
  try {
    const newUser = new Parse.User();
    newUser.set("firstName", user.firstName);
    newUser.set("lastName", user.lastName);
    newUser.set("username", user.username);
    newUser.set("password", user.password);
    newUser.set("email", user.email);
    newUser.set("phone", user.phone);
    await newUser.signUp();
    dispatch({
      type: REGISTER_SUCCESS,
      payload: newUser
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.message;
    if (errors) {
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({ type: REGISTER_FAILURE });
    // alert("Error: " + err.code + " " + err.message);
  }
};
