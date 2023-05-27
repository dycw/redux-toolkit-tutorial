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
});

const { reducer, actions } = icecreamSlice;
export { reducer as icecreamReducer, actions as icecreamActions };
