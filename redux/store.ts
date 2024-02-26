import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/assetSlice";

export const store = configureStore({
  reducer: { Asset: userReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;