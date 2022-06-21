import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";


const store = configureStore({
    reducer:{
       cartReducer: cartReducer,
       userReducer: userReducer,
    }
  })

export default store