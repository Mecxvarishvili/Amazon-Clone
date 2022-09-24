import { SET_CART_PRODUCT, SET_QTY_FROM_CART, SET_USER_CART } from "./cartActionConst"

export const setCartProduct = (data, qty) => {
    return {
        type: SET_CART_PRODUCT,
        payload: {data, qty},
    }
}

export const setQtyFromCart = (id, qty) => {
    return {
        type: SET_QTY_FROM_CART,
        payload: {id, qty}
    }
}

export const setUserCart = (data) => {
    return {
        type: SET_USER_CART,
        payload: data
    }
}