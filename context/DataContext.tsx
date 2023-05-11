import React, { useReducer } from "react";
import { categoriesState, photosState } from "./InitialStates/DataState";
import { categoriesReducer, photosReducer } from "./Reducers/DataReducers";
import { appState } from "./InitialStates/appState";
import { appReducer } from "./Reducers/appReducers";

export const DataContext = React.createContext(null);
const { Provider } = DataContext;

export const DataProvider = ({ children }) => {
  const [app, dispatchApp] = useReducer(appReducer, appState);
  const [photos, dispatchPhotos] = useReducer(photosReducer, photosState);
  const [categories, dispatchCategories] = useReducer(
    categoriesReducer,
    categoriesState
  );

  const state = {
    menu: app.menu,
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
    dispatchApp: dispatchApp,
  };
  const value = React.useMemo(() => state, [app, photos, categories]);
  return <Provider value={value}>{children}</Provider>;
};
