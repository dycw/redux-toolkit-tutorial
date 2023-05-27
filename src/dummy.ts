import { bindActionCreators, createStore } from "redux";

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

type State = { numOfCakes: number };
const initialState: State = { numOfCakes: 10 };

const orderCake = () => {
  return { type: CAKE_ORDERED, payload: 1 };
};
const restockCake = (qty = 1) => {
  return { type: CAKE_RESTOCKED, payload: qty };
};

const reducer = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case CAKE_RESTOCKED:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update state ", store.getState())
);

const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

unsubscribe();
