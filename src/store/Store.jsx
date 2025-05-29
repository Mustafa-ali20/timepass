import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import UserReducer from "./reducers/UserReducer";
import ProductReducer from "./reducers/ProductReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    UserReducer: UserReducer,
    ProductReducer: ProductReducer,
  },
});
