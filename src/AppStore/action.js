import {initialUser} from "./reducers";
import {loginRequest} from "../http/userApi";

export const SHOW_ALERT="ALERT::SHOW_ALERT";
export const HIDE_ALERT="ALERT::HIDE_ALERT";
export const showAlert = (message,variant) => {
    return {
        type: SHOW_ALERT,
        payload: {variant,message}
    }
}
export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}
export const startAlert = (message,type="danger") => dispatch => {
    setTimeout(()=>{
        dispatch(hideAlert());
    },10000);
    dispatch(showAlert(message,type));
}

export const SET_USER = "USER::SET_USER";
export const setUser = (user) => {
    return {
        type: SET_USER,
        payload:user
    }
}
export const login = (user) => async(dispatch) => {
    try {
        const responseUser=await loginRequest(user.login,"123");
        if(responseUser.role) {
            dispatch(setUser(responseUser));
        } else {
            throw new Error("handle Error");
        }
    } catch (e){
        console.log(e.message);
        dispatch(startAlert(e.message));
    }
}

export const logout = () => async(dispatch) => {
    try {
        dispatch(setUser(initialUser));
    } catch (e){
        console.log(e.message);
    }
}
