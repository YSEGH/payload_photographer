import React, { useReducer } from "react";
import { filters } from "../utilities/types";
import {
  getCategories,
  getPhotos,
  sendForm,
  setScrollPosition,
  setSelectedCategories,
  updateFormErrors,
} from "./Actions/DataActions";
import {
  categoriesState,
  formState,
  photosState,
} from "./InitialStates/DataState";
import {
  categoriesReducer,
  formReducer,
  photosReducer,
} from "./Reducers/DataReducers";

export interface DataActions {
  getPhotos: Function;
  getCategories: Function;
  setScrollPosition: Function;
  setSelectedCategories: Function;
  sendForm: Function;
  updateFormError: Function;
}
export interface DataContext {
  actions: DataActions;
  state: any;
}

export const DataContext = React.createContext(null);
const { Provider } = DataContext;

export const DataProvider = ({ children }) => {
  const [photos, dispatchPhotos] = useReducer(photosReducer, photosState);
  const [categories, dispatchCategories] = useReducer(
    categoriesReducer,
    categoriesState
  );
  const [form, dispatchForm] = useReducer(formReducer, formState);

  const getPhotosHandler = (filters, reset, page) => {
    getPhotos(filters, reset, page, dispatchPhotos);
  };

  const setScrollPositionHandler = (scrollPosition) => {
    setScrollPosition(scrollPosition, dispatchPhotos);
  };
  const getCategoriesHandler = () => {
    getCategories(dispatchCategories);
  };

  const setSelectedCategoriesHandler = (categories) => {
    setSelectedCategories(categories, dispatchCategories);
  };

  const sendFormHandler = (form) => {
    sendForm(form, dispatchForm);
  };

  const updateFormErrorHandler = (field) => {
    updateFormErrors(field, dispatchForm);
  };

  const state: DataContext = {
    state: {
      photos: photos.photos,
      page: photos.page,
      form: form.fields,
      loadingForm: form.loading,
      formSuccess: form.success,
      formError: form.error,
      scrollPosition: photos.scrollPosition,
      hasNextPage: photos.hasNextPage,
      loadingGetPhotos: photos.loading,
      errorGetPhotos: photos.error,
      categories: categories.categories,
      selectedCategories: categories.selectedCategories,
      loadingGetCategories: categories.loading,
      errorGetCategories: categories.error,
    },
    actions: {
      getPhotos: (filters: filters, reset: boolean, page: number) =>
        getPhotosHandler(filters, reset, page),
      getCategories: () => getCategoriesHandler(),
      setScrollPosition: (scrollPosition: number) =>
        setScrollPositionHandler(scrollPosition),
      setSelectedCategories: (categories: []) =>
        setSelectedCategoriesHandler(categories),
      sendForm: (form) => sendFormHandler(form),
      updateFormError: (field) => updateFormErrorHandler(field),
    },
  };
  const value = React.useMemo(() => state, [photos, categories, form]);
  return <Provider value={value}>{children}</Provider>;
};
