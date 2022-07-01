import { SET_USER, SET_USER_AUTHENTICATION, SET_USER_LOG_OUT } from "./userActionConst"

export const setUserAuthentication = (data) => {
    return {
        type: SET_USER_AUTHENTICATION,
        payload: data
    }
}

export const setUser = (data) => {
    return {
        type: SET_USER,
        payload: data
    }
}

export const setuserLogOut = (data) => {
    return {
        type: SET_USER_LOG_OUT
    }
}