import { produce } from "immer";
import { createStore } from "redux";

type State = {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
};
const initialState = {
  name: "Derek",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
const updateStreet = (street: string) => {
  return { type: STREET_UPDATED, payload: street };
};

const reducer = (
  state: State = initialState,
  action: { type: string; payload: string }
): State => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (state) => {
        state.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update state ", store.getState())
);
store.dispatch(updateStreet("456 Main St"));
unsubscribe();
