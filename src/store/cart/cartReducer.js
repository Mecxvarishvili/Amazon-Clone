import Api from "../../componenets/api"
import serialize from "../../serialize/serializer"
import { DELETE_CART_PRODUCT, SET_CART_PRODUCT, SET_QTY_FROM_CART, SET_USER_CART } from "./cartActionConst"
import { useSelector } from "react-redux"
import { getUserId } from "../selector"


const initialState = []
function destructuringState(array) {
    var state = []
    for(var i in array) {
        var data = array[i]
        state = [...state, {...data, qty: data.qty}]
    }
    return state
}

 const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CART_PRODUCT:
            var thisState = destructuringState(state)
            var { data, qty } = action.payload
            if(thisState.find(dat => dat.id === data.id)) {
                thisState.find(id => id.id === data.id).qty += qty
                return [...thisState]
            } else {
                return [...state, {...data, qty: qty}]
            }
        case SET_QTY_FROM_CART: 
            var thisState = destructuringState(state)
            var { id, qty } = action.payload
            thisState.find(data => data.id === id).qty = qty
            if(qty) {
            return [...thisState]
            } else {
                var deletedData = state.filter(data => {return data.id !== id})
                return[...deletedData]
            }
        case SET_USER_CART:
            return [...action.payload]
        default: 
            return state
    }
}

export default cartReducer