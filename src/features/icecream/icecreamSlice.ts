import { cakeActions } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { numOfIcecreams: 20 };
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  // extraReducers: {
  // 	["cake/ordered"]: (state, action) => {
  // 		state.numOfIcecreams--;
  // 	},
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

const { reducer, actions } = icecreamSlice;
export { reducer as icecreamReducer, actions as icecreamActions };
