import { combineReducers, bindActionCreators, createStore } from "redux";

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const orderCake = () => {
  return { type: CAKE_ORDERED, payload: 1 };
};
const restockCake = (qty = 1) => {
  return { type: CAKE_RESTOCKED, payload: qty };
};
const orderIceCream = () => {
  return { type: ICECREAM_ORDERED, payload: 1 };
};
const restockIceCream = (qty = 1) => {
  return { type: ICECREAM_RESTOCKED, payload: qty };
};

type CakeState = { numOfCakes: number };
const initialCakeState: CakeState = { numOfCakes: 10 };
type IceCreamState = { numOfIceCreams: number };
const initialIceCreamState: IceCreamState = { numOfIceCreams: 20 };
type Action = { type: string; payload: number };

const cakeReducer = (
  state: CakeState = initialCakeState,
  action: Action
): CakeState => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case CAKE_RESTOCKED:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    default:
      return state;
  }
};
const iceCreamReducer = (
  state: IceCreamState = initialIceCreamState,
  action: Action
): IceCreamState => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update state ", store.getState())
);

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
