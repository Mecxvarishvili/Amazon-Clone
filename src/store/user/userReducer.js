import { SET_USER, SET_USER_AUTHENTICATION } from "./userActionConst"

const initialState = {isLoggedIn: false, user: {}, products: {}}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, isLoggedIn: true, user: {...action.payload}}
        default:
            return state
    }
}

export default userReducer;