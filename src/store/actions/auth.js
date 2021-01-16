import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {

  let form_data = new FormData();
  form_data.append('username', localStorage.getItem("username"));
  form_data.append('count', 2);

  let url = "https://3choices.in/profile/count/";
  axios.put(url + localStorage.getItem("idza") + "/", form_data, {
    headers: {
      'content-type': 'multipart/form-data'
    }

  })
  localStorage.removeItem("token");
  localStorage.removeItem("status");
  localStorage.removeItem("expirationDate");
  localStorage.clear();


  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("http://localhost:8000/auths/lin/", {
        email: email,
        password: password
      })
      .then(res => {
        const token = res;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("status", "okay");

        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token, email));
        dispatch(checkAuthTimeout(3600));

      })

      .catch(err => {
        dispatch(authFail(err));
      });

  };
};


export const authSignup = (username, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("https://3choices.in/auth/registration/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2
      })
      .then(res => {
        const token = res.data.key;
        const statd = res.status;

        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("status", "okay");
        localStorage.setItem("statd", statd);
        localStorage.setItem("username", username);
        dispatch(authSuccess(token, username));

        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(username, token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};