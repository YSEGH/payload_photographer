export interface Filters {
  title?: string;
  categories: [];
}

export interface PhotosState {
  photos: unknown[];
  scrollPosition: number;
  hasNextPage: boolean;
  page: number;
  loading: Boolean;
  error: string;
}

export interface CategoriesState {
  categories: [];
  selectedCategories: any[];
  loading: Boolean;
  error: string;
}
