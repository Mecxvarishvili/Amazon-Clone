import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

const allReducer = combineReducers({
    cartReducer,
})

const rootReducer = (state, action) => {
    return allReducer(state, action)
}

export default rootReducer