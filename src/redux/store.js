import { configureStore } from "@reduxjs/toolkit";
import nameProfileSliceReducer from "./nameProfileSlice";

export const store = configureStore({
  reducer: { nameProfile: nameProfileSliceReducer },
});
