import React, { useReducer } from "react";
import { getPhotos } from "./Actions/DataActions";
import { DataState, dataState } from "./InitialStates/DataState";
import { dataReducer } from "./Reducers/DataReducers";

export interface DataActions {
  getPhotos: Function;
}
export interface DataContext {
  actions: DataActions;
  state: DataState;
}

export const DataContext = React.createContext(null);
const { Provider } = DataContext;

export const DataProvider = ({ children }) => {
  const [data, dispatchData] = useReducer(dataReducer, dataState);

  const getPhotosHandler = (tag) => {
    getPhotos(tag, dispatchData);
  };

  const state: DataContext = {
    state: {
      photos: data.photos,
      tags: data.tags,
      loading: false,
      error: null,
    },
    actions: {
      getPhotos: (tag) => getPhotosHandler(tag),
    },
  };
  const value = React.useMemo(() => state, [data]);

  return <Provider value={value}>{children}</Provider>;
};
