import { CategoriesState, PhotosState } from "../../utilities/types";

const photosReducer = (state: PhotosState, action) => {
  switch (action.type) {
    case "GET_PHOTOS_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_PHOTOS":
      console.log("GET_PHOTOS");
      let photos = [];
      if (!action.reset) {
        photos = [...state.photos, ...action.data];
      } else {
        photos = [...action.data];
      }
      return {
        ...state,
        loading: false,
        photos: photos,
        hasNextPage: action.hasNextPage,
        page: action.page,
      };
    case "GET_PHOTOS_ERROR":
      return { ...state, loading: false, error: action.error };
    case "SET_SCROLL_POSITION":
      return { ...state, scrollPosition: action.data };
    default:
      return state;
  }
};

const categoriesReducer = (state: CategoriesState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_CATEGORIES":
      let categories = action.data.map((category) => {
        return {
          label: category.name,
          value: category.name.toLowerCase(),
          bgColor: category.backgroundColor,
          textColor: category.textColor,
        };
      });
      return { ...state, loading: false, categories: categories };
    case "SET_SELECTED_CATEGORIES":
      return { ...state, selectedCategories: action.data };
    case "GET_CATEGORIES_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SEND_FORM_REQUEST":
      return { ...state, loading: true, success: false };
    case "SEND_FORM_SUCCESS":
      return { ...state, loading: false, success: true, error: [] };
    case "SEND_FORM_ERROR":
      return {
        ...state,
        loading: false,
        error: action.data,
        success: false,
      };
    case "UPDATE_FORM_ERROR":
      let errors = state.error.filter((error) => error.name !== action.data);
      return { ...state, error: errors };
    case "RESET_FORM":
      return { ...state, success: false };
    default:
      return state;
  }
};

export { photosReducer, categoriesReducer, formReducer };
