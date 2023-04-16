import {
  CategoriesState,
  PhotosState,
  TitleState,
} from "../../utilities/types";

const photosReducer = (state: PhotosState, action) => {
  let newState;
  switch (action.type) {
    case "GET_PHOTOS_REQUEST":
      newState = { ...state, loading: true, error: null };
      return newState;
    case "GET_PHOTOS":
      let photos = [];
      if (!action.reset) {
        photos = [...state.photos, ...action.data];
      } else {
        photos = [...action.data];
      }
      newState = {
        ...state,
        loading: false,
        photos: photos,
        hasNextPage: action.hasNextPage,
        page: action.page,
      };
      return newState;
    case "GET_PHOTOS_ERROR":
      newState = { ...state, loading: false, error: action.error };
      return newState;
    default:
      return state;
  }
};

const categoriesReducer = (state: CategoriesState, action) => {
  let newState;
  switch (action.type) {
    case "GET_CATEGORIES_REQUEST":
      newState = { ...state, loading: true, error: null };
      return newState;
    case "GET_CATEGORIES":
      let categories = action.data.map((category) => {
        return {
          label: category.name,
          value: category.name.toLowerCase(),
          bgColor: category.backgroundColor,
          textColor: category.textColor,
        };
      });
      newState = { ...state, loading: false, categories: categories };
      return newState;
    case "SET_SELECTED_CATEGORIES":
      newState = { ...state, selectedCategories: action.data };
      return newState;
    case "GET_CATEGORIES_ERROR":
      newState = { ...state, loading: false, error: action.error };
      return newState;
    default:
      return state;
  }
};

const formReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SEND_FORM_REQUEST":
      return state;
    case "SEND_FORM_SUCCESS":
      return state;
    case "SEND_FORM_ERROR":
      return state;
    case "SET_FORM_VALUE":
      let fields = state.fields;
      fields[action.key].value = action.value;
      newState = { ...state, fields: fields };

      return newState;
    default:
      return state;
  }
};

export { photosReducer, categoriesReducer, formReducer };
