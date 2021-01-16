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
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("status");

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
            .post("https://3choices.in/auths/lin/", {
                email: email,
                password: password
            })
            .then(res => {
                const token = res.data.token;
                const username = res.data.email.username;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem("token", token);
                localStorage.setItem("username", username);
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
export const authSignup = (username, Phone_Number, password, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios
            .post("https://3choices.in/auths/reg/", {
                username: username,
                Phone_Number: Phone_Number,
                password: password,
                password2: password2
            })
            .then(res => {
                const token = res.data.token;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem("token", token);
                localStorage.setItem("expirationDate", expirationDate);
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