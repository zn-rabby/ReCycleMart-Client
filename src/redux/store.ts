import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

//! We will not do this
//! This is a global variable so we will avoid this
// const store = configureStore({});

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];