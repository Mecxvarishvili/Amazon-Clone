import Api from "../../componenets/api"
import { DELETE_CART_PRODUCT, SET_CART_PRODUCT, SET_USER_CART } from "./cartActionConst"


const initialState = []

 const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CART_PRODUCT:
            var thisState = [...state]
            var { data, qty } = action.payload
            if(thisState.find(data => data.id === data.id)) {
                var qtyData = [...state]
                qtyData.find(id => id.id === data.id).qty += qty
                return [...qtyData]
            } else {
                data.qty = qty
                return [...state, data]
            }
        case DELETE_CART_PRODUCT:
            var deletedData = state.filter(data => {return data.id !== action.payload})
            return[...deletedData]
        case SET_USER_CART:
            return [...action.payload]
        default: 
            return state
    }
}

export default cartReducer