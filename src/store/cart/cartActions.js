import { DELETE_CART_PRODUCT, SET_CART_PRODUCT, SET_CART_PRODUCT_QTY, SET_QTY_FROM_CART, SET_USER_CART } from "./cartActionConst"
import Api from "../../componenets/api"


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