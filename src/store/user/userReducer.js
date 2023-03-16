import { SET_USER, SET_USER_AUTHENTICATION } from "./userActionConst"

const initialState = {isLoggedIn: false, user: {}, products: {}}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, isLoggedIn: false, user: {...action.payload}}
        case SET_USER_AUTHENTICATION:
            if(action.payload) {
                return {...state, isLoggedIn: action.payload}
            } else {
                return { isLoggedIn: action.payload, user: {}, products: {}}
            }
        default:
            return state
    }
}

export default userReducer;