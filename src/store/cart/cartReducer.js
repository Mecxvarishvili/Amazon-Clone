import { DELETE_CART_PRODUCT, SET_CART_PRODUCT } from "./cartActionConst"


const initialState = []

 const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CART_PRODUCT:
            var thisState = [...state]
            if(thisState.find(data => data.id === action.payload.data.id)) {
                var qtyData = [...state]
                qtyData.find(id => id.id === action.payload.data.id).qty += action.payload.qty

                return [...qtyData]
            } else {
                const data = action.payload.data
                data.qty = action.payload.qty
                return [...state, data]
            }
        case DELETE_CART_PRODUCT:
            var deletedData = state.filter(data => {return data.id !== action.payload})
            return[...deletedData]
        default: 
            return state
    }
}

export default cartReducer