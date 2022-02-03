import {HIDE_ALERT, SET_USER, SHOW_ALERT} from "./action";

const initialAlert={};
export const reducerAlert = (state = initialAlert, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...action.payload,
                visible:true
            }
        case HIDE_ALERT:
            return {
                ...state,
                visible:false
            }
        default:
            return state
    }
};


export const initialUser = {login:"",name:"",surmane:"",role:""};

export const reducerUser = (state = initialUser, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload
        default:
            return state
    }
};


