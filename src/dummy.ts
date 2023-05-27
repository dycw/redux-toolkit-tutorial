import { createStore } from "redux";

const CAKE_ORDERED = "CAKE_ORDERED";

const orderCake = () => {
  return { type: CAKE_ORDERED, quantity: 1 };
};

console.log(orderCake);

const initialState = { numOfCakes: 10 };

type Action = { type: string };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());
