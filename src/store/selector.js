export const getCartData = (state) => state.cartReducer
export const getUserAuthentication = (state) => state.userReducer.isLoggedIn
export const getUserData = (state) => state.userReducer.user
export const getUserId = (state) => state.userReducer.user.id