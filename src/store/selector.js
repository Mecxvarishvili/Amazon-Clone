export const getCartData = (state) => state.cartReducer
export const getUserReducer = (state) => state.userReducer
export const getUserData = (state) => state.userReducer.user
export const getUserAuthentication = (state) => state.userReducer.isLoggedIn
export const getUserId = (state) => state.userReducer.user.id