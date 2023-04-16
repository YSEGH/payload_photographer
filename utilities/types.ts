export interface PhotosState {
  photos: Doc[];
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

export interface filters {
  title: string;
  categories: [];
}

export interface TitleState {
  title: string;
}

export interface Size {
  [k: string]: {
    filename: string;
    filesize: number;
    height: number;
    mimeType: string;
    url: string;
    width: number;
  };
}

export interface Doc {
  categories: [];
  createdAt: string;
  id: string;
  slider: Slider[];
  title: string;
}

export interface Slider {
  id: string;
  photo: File;
}
export interface File {
  alt: string;
  createdAt: string;
  filename: string;
  filesize: number;
  height: number;
  id: string;
  mimeType: string;
  url: string;
  sizes: Size;
}
