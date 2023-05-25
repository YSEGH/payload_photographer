import { CategoriesState, PhotosState } from "../types";

const photosState: PhotosState = {
  photos: [],
  scrollPosition: 0,
  hasNextPage: true,
  page: 1,
  loading: true,
  error: null,
};

const categoriesState: CategoriesState = {
  categories: [],
  selectedCategories: [],
  loading: false,
  error: null,
};

export { photosState, categoriesState };
