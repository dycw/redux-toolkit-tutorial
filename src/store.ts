import { cakeReducer } from "./features/cake/cakeSlice";
import { icecreamReducer } from "./features/icecream/icecreamSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { cake: cakeReducer, icecream: icecreamReducer },
});

export { store };
