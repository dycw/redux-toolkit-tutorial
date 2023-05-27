import { applyMiddleware, createStore } from "redux";

type State = { loading: boolean; users: any[]; error: string };

const initialState: State = { loading: false, users: [], error: "" };

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

type FetchUsersRequest = { type: typeof FETCH_USERS_REQUESTED };
const fetchUsersRequest = (): FetchUsersRequest => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

type FetchUsersSuccess = { type: typeof FETCH_USERS_SUCCEEDED; payload: any[] };
const fetchUsersSuccess = (users: any[]): FetchUsersSuccess => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

type FetchUsersError = { type: typeof FETCH_USERS_FAILED; payload: string };
const fetchUsersError = (error: string): FetchUsersError => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

type Action = FetchUsersRequest | FetchUsersSuccess | FetchUsersError;

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCEEDED:
      return { ...state, loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILED:
      return { ...state, loading: false, users: [], error: action.payload };
  }
};

const store = createStore(reducer);
