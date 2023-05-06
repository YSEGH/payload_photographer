import React, { useReducer } from "react";
import { categoriesState, photosState } from "./InitialStates/DataState";
import { categoriesReducer, photosReducer } from "./Reducers/DataReducers";

export const DataContext = React.createContext(null);
const { Provider } = DataContext;

export const DataProvider = ({ children }) => {
  const [photos, dispatchPhotos] = useReducer(photosReducer, photosState);
  const [categories, dispatchCategories] = useReducer(
    categoriesReducer,
    categoriesState
  );

  const state = {
    photos: photos.photos,
    page: photos.page,
    scrollPosition: photos.scrollPosition,
    hasNextPage: photos.hasNextPage,
    loadingGetPhotos: photos.loading,
    errorGetPhotos: photos.error,
    categories: categories.categories,
    selectedCategories: categories.selectedCategories,
    loadingGetCategories: categories.loading,
    errorGetCategories: categories.error,
    dispatchPhotos: dispatchPhotos,
    dispatchCategories: dispatchCategories,
  };
  const value = React.useMemo(() => state, [photos, categories]);
  return <Provider value={value}>{children}</Provider>;
};
