import axios from "axios";
import {
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from "./actionTypes";

export const Loginfunction = (data) => (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });

  dispatch({ type: SIGNIN_SUCCESS, payload: data });

  dispatch({ type: SIGNIN_FAILURE });
};

export const SignUpFunction = (data) => (dispatch) => {
  dispatch({ type: CREATE_REQUEST });

  axios
    .post("https://api-knw0.onrender.com/profile", data)
    .then((response) => {
      dispatch({ type: CREATE_SUCCESS, payload: response.data });
      console.log(response);
    })
    .catch((e) => {
      dispatch({ type: CREATE_FAILURE });
      console.log(e);
    });
};