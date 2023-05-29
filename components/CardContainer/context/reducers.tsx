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
  let categories;
  switch (action.type) {
    case "GET_CATEGORIES_REQUEST":
      return { ...state, loading: true, error: null };
    case "GET_CATEGORIES":
      console.log("GET_CATEGORIES");

      categories = action.data.map((category) => {
        return {
          label: category.title,
          value: category.title.toLowerCase(),
          bgColor: category.backgroundColor,
          textColor: category.textColor,
          isActive: false,
        };
      });
      return { ...state, loading: false, categories: categories };
    case "SET_SELECTED_CATEGORIES":
      console.log("SET_SELECTED_CATEGORIES");

      categories = state.categories.map((category: any) => {
        const isSelected = action.data.some(
          (selectedCategory) => category.label === selectedCategory.label
        );
        if (isSelected) {
          return { ...category, isActive: true };
        }
        return { ...category, isActive: false };
      });
      return {
        ...state,
        selectedCategories: action.data,
        categories: categories,
      };
    case "ORDER_SELECTED_CATEGORIES":
      console.log("ORDER_SELECTED_CATEGORIES");

      categories = state.categories.sort((a: any, b: any) => {
        let isActiveOrder = Number(b.isActive) - Number(a.isActive);
        let alphabeticalOrder = a.label.localeCompare(b.label);
        if (!a.isActive && !b.isActive) {
          return alphabeticalOrder;
        }
        if (!b.isActive) {
          return isActiveOrder;
        }
        return isActiveOrder + alphabeticalOrder;
      });

      return { ...state, categories: categories };
    case "GET_CATEGORIES_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export { photosReducer, categoriesReducer };
