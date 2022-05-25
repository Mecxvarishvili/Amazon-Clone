import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartReducer";


const store = configureStore({
    reducer:{
       cartReducer: cartReducer,
       userReducer: false,
    }
  })

export default store