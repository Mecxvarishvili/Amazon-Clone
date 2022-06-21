import { DELETE_CART_PRODUCT, SET_CART_PRODUCT, SET_USER_CART } from "./cartActionConst"


export const setCartProduct = (data, qty) => {
    return {
        type: SET_CART_PRODUCT,
        payload: {data, qty},
    }
}

export const deleteCartProduct = (id) => {
    return {
        type: DELETE_CART_PRODUCT,
        payload: id
    }
}

export const setUserCart = (data) => {
    return {
        type: SET_USER_CART,
        payload: data
    }
}