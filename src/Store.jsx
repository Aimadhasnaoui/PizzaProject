import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./feature/cart/CartSlice";

export  const store = configureStore({
    reducer: {
         cart:CartSlice
    },
});