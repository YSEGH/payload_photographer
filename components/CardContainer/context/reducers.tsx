import { CategoriesState, PhotosState } from "../types";

const photosReducer = (state: PhotosState, action) => {
  switch (action.type) {
    case "GET_PHOTOS_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_PHOTOS":
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
          label: category.title,
          value: category.title.toLowerCase(),
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

export { photosReducer, categoriesReducer };
