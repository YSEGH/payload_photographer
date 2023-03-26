import { DataState } from "../InitialStates/DataState";

const dataReducer = (state: DataState, action) => {
  let newState;
  switch (action.type) {
    case "GET_PHOTOS_REQUEST":
      newState = { ...state, loading: true, error: null };
      return newState;
    case "GET_PHOTOS":
      newState = { ...state, loading: false, photos: action.data };
      return newState;
    case "GET_PHOTOS_ERROR":
      newState = { ...state, loading: false, error: action.error };
      return newState;
    default:
      return state;
  }
};

export { dataReducer };
