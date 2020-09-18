import axios from "axios";
import * as actionTypes from "./actionTypes";

var firebaseConfig = {
  apiKey: "AIzaSyCY909lSawupOSVy9qQupZZMt3LO7aKxvI",
  authDomain: "myburger-ddfc6.firebaseapp.com",
  databaseURL: "https://myburger-ddfc6.firebaseio.com",
  projectId: "myburger-ddfc6",
  storageBucket: "myburger-ddfc6.appspot.com",
  messagingSenderId: "1040371845877",
  appId: "1:1040371845877:web:12c749f667e57322add3bc",
  measurementId: "G-EBVE4NB99F",
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};
export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      //uvik se ovakve funkcije trebaju izvest s () kako bi dispatchale akciju
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCY909lSawupOSVy9qQupZZMt3LO7aKxvI";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCY909lSawupOSVy9qQupZZMt3LO7aKxvI";
    }
    axios
      .post(url, authData)
      .then((res) => {
        console.log(res);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(authFail(err.response.data.error));
      });
  };
};
